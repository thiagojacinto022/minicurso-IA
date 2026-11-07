# Fonte do eBook

`ebook.html` é o eBook (24 páginas A5). Para gerar o PDF de novo:

```bash
pip install playwright segno && python -m playwright install chromium
python build.py ../do-problema-ao-prototipo-ebook.pdf
```

(No `build.py`, troque `executable_path` pelo caminho do seu Chrome ou remova o parâmetro.)
Depois, envie o PDF novo ao FlipHTML5 (Edit → Replace PDF), assim o link continua o mesmo.
