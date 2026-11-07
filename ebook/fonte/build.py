"""Gera o PDF do eBook a partir de ebook.html (QR codes + Chromium)."""
import io, re, sys, pathlib, segno
from playwright.sync_api import sync_playwright

here = pathlib.Path(__file__).parent
src = (here / "ebook.html").read_text(encoding="utf-8")

def qr_svg(m):
    buf = io.BytesIO()
    segno.make(m.group(1), error="m").save(buf, kind="svg", xmldecl=False, svgns=True, border=0, dark="#141829", scale=4, omitsize=True)
    return buf.getvalue().decode()

out_html = here / "ebook.built.html"
out_html.write_text(re.sub(r"<!--QR:(.*?)-->", qr_svg, src), encoding="utf-8")

pdf_path = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else here / "ebook.pdf")
with sync_playwright() as p:
    b = p.chromium.launch()  # ou: executable_path="/caminho/do/chrome"
    pg = b.new_page()
    pg.goto(out_html.as_uri())
    pg.wait_for_load_state("networkidle")
    pg.evaluate("document.fonts.ready")
    over = pg.evaluate("""() => [...document.querySelectorAll('.page')].map((el,i)=>{
        const r = el.getBoundingClientRect(); let worst = 0;
        el.querySelectorAll('*').forEach(c => { if (c.closest('svg') || getComputedStyle(c).position==='absolute') return;
          const cr = c.getBoundingClientRect(); worst = Math.max(worst, cr.bottom - (r.bottom - 14*3.78)); });
        return [i+1, Math.round(worst)]; }).filter(x => x[1] > 0)""")
    print("overflow (px past bottom margin):", over)
    pg.pdf(path=str(pdf_path), prefer_css_page_size=True, print_background=True)
    b.close()
print("ok", pdf_path)
