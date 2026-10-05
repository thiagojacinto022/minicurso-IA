/* =============================================================
   Recursos educacionais com IA — interações da página
============================================================= */
(function () {
  "use strict";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* Armazenamento local seguro (pode falhar em modo privado) */
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* ignora */ } },
    remove(key) { try { localStorage.removeItem(key); } catch (e) { /* ignora */ } }
  };

  /* -----------------------------------------------------------
     TEMA CLARO / ESCURO
  ----------------------------------------------------------- */
  const root = document.documentElement;
  const themeBtn = $("#theme-toggle");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    return root.dataset.theme || (systemDark.matches ? "dark" : "light");
  }

  function paintThemeIcon() {
    const dark = currentTheme() === "dark";
    themeBtn.querySelector("use").setAttribute("href", dark ? "#i-sun" : "#i-moon");
    themeBtn.setAttribute("aria-label", dark ? "Usar tema claro" : "Usar tema escuro");
  }

  themeBtn.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    store.set("tema", next);
    paintThemeIcon();
  });

  systemDark.addEventListener("change", paintThemeIcon);
  paintThemeIcon();

  /* -----------------------------------------------------------
     BARRA DE LEITURA + SOMBRA DO TOPO
  ----------------------------------------------------------- */
  const progress = $("#read-progress");
  const topbar = $("#topbar");

  function onScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    topbar.classList.toggle("scrolled", window.scrollY > 8);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* -----------------------------------------------------------
     MENU: DESTACA A SEÇÃO VISÍVEL
  ----------------------------------------------------------- */
  const navLinks = $$(".nav a").filter((a) => a.getAttribute("href").startsWith("#"));
  const sections = navLinks
    .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => {
          const on = a.getAttribute("href") === "#" + entry.target.id;
          a.classList.toggle("active", on);
          if (on) {
            const nav = a.parentElement;
            nav.scrollTo({ left: a.offsetLeft - (nav.clientWidth - a.offsetWidth) / 2, behavior: "smooth" });
          }
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  /* -----------------------------------------------------------
     ANIMAÇÃO DE ENTRADA
  ----------------------------------------------------------- */
  const reveals = $$(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });

    // pequeno atraso em cascata para itens irmãos
    reveals.forEach((el) => {
      const siblings = Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal"));
      const i = siblings.indexOf(el);
      el.style.transitionDelay = Math.min(i, 5) * 70 + "ms";
      io.observe(el);
    });
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* -----------------------------------------------------------
     BOTÕES "COPIAR"
  ----------------------------------------------------------- */
  function textOf(el) {
    const clone = el.cloneNode(true);
    $$(".seg-label", clone).forEach((n) => n.remove());
    return clone.textContent.trim();
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy") ? resolve() : reject(); } catch (e) { reject(e); }
      ta.remove();
    });
  }

  $$("[data-copy]").forEach((btn) => {
    const label = btn.querySelector("span");
    btn.addEventListener("click", () => {
      const target = $(btn.dataset.copy);
      if (!target) return;
      copyText(textOf(target))
        .then(() => {
          btn.classList.add("copied");
          label.textContent = "Copiado!";
        })
        .catch(() => { label.textContent = "Selecione e copie"; })
        .finally(() => {
          setTimeout(() => {
            btn.classList.remove("copied");
            label.textContent = "Copiar";
          }, 2000);
        });
    });
  });

  /* -----------------------------------------------------------
     DEMONSTRAÇÃO: VERSÕES E TAMANHO DE TELA
  ----------------------------------------------------------- */
  if ($("#demo-frame")) {
    const frame = $("#demo-frame");
    const stage = $("#demo-stage");
    const openLink = $("#demo-open");
    const caption = $("#demo-caption-text");
    const tabs = $$(".tab");

    const captions = {
      "prototipo/v1.html":
        "<strong>Versão 1: primeiro pedido</strong>Exatamente o que a IA entregou a partir do pedido da etapa 3. Atende aos requisitos, mas os testes revelaram pontos a melhorar.",
      "prototipo/mitose.html":
        "<strong>Exemplo 2: Biologia, fases da mitose</strong>O mesmo ciclo aplicado a outra disciplina: o pedido montado no gerador de pedidos virou esta atividade de ordenar etapas, com o conteúdo conferido pelo professor.",
      "prototipo/v2.html":
        "<strong>Versão 2: depois dos testes</strong>Questões e alternativas embaralhadas, revisão dos erros no final, realce de sintaxe, atalhos de teclado, modo escuro e correções de acessibilidade."
    };

    function selectTab(tab) {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", on);
        t.tabIndex = on ? 0 : -1;
      });
      const src = tab.dataset.src;
      frame.src = src;
      openLink.href = src;
      caption.innerHTML = captions[src];
    }

    tabs.forEach((tab, i) => {
      tab.tabIndex = tab.getAttribute("aria-selected") === "true" ? 0 : -1;
      tab.addEventListener("click", () => selectTab(tab));
      tab.addEventListener("keydown", (e) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        const next = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
        next.focus();
        selectTab(next);
      });
    });

    $$("[data-device]").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$("[data-device]").forEach((b) => b.setAttribute("aria-pressed", b === btn));
        stage.classList.toggle("mobile", btn.dataset.device === "mobile");
      });
    });

    $("#demo-reload").addEventListener("click", () => {
      frame.src = frame.getAttribute("src");
    });
  }

  /* -----------------------------------------------------------
     VÍDEO-AULA (YouTube) + CAPÍTULOS
     O ID ou link do vídeo fica no atributo data-youtube do HTML.
  ----------------------------------------------------------- */
  if ($("#video-frame")) {
    const videoBox = $("#video-frame");
    const ytLink = $("#video-yt-link");
    const chapterBtns = $$("#chapters button");

    function youtubeId(value) {
      const v = (value || "").trim();
      if (/^[\w-]{11}$/.test(v)) return v;
      const m = v.match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([\w-]{11})/);
      return m ? m[1] : "";
    }

    const videoId = youtubeId(videoBox && videoBox.dataset.youtube);

    function loadVideo(start, autoplay) {
      const params = new URLSearchParams({
        rel: "0",
        cc_load_policy: "1",
        cc_lang_pref: "pt",
        hl: "pt-BR"
      });
      if (start) params.set("start", start);
      if (autoplay) params.set("autoplay", "1");
      let iframe = videoBox.querySelector("iframe");
      if (!iframe) {
        videoBox.innerHTML = "";
        iframe = document.createElement("iframe");
        iframe.title = "Vídeo-aula: Do problema ao protótipo";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        videoBox.appendChild(iframe);
      }
      iframe.src = "https://www.youtube-nocookie.com/embed/" + videoId + "?" + params.toString();
    }

    if (videoId) {
      loadVideo(0, false);
      ytLink.href = "https://www.youtube.com/watch?v=" + videoId;
    }

    chapterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        chapterBtns.forEach((b) => b.classList.toggle("active", b === btn));
        if (!videoId) return;
        loadVideo(Number(btn.dataset.t), true);
        if (window.innerWidth < 1024) videoBox.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });
  }

  /* -----------------------------------------------------------
     CHECKLIST DE TESTES (salvo no navegador)
  ----------------------------------------------------------- */
  if ($("#checklist")) {
    const CHECK_KEY = "checklist-testes";
    const boxes = $$("#checklist input[type=checkbox]");
    const meterFill = $("#meter-fill");
    const meterText = $("#meter-text");

    let saved = {};
    try { saved = JSON.parse(store.get(CHECK_KEY)) || {}; } catch (e) { saved = {}; }

    function updateMeter() {
      const done = boxes.filter((b) => b.checked).length;
      meterFill.style.width = (done / boxes.length) * 100 + "%";
      meterText.textContent = done + " de " + boxes.length;
    }

    boxes.forEach((box) => {
      box.checked = !!saved[box.dataset.id];
      box.addEventListener("change", () => {
        saved[box.dataset.id] = box.checked;
        store.set(CHECK_KEY, JSON.stringify(saved));
        updateMeter();
      });
    });

    $("#checklist-reset").addEventListener("click", () => {
      boxes.forEach((b) => { b.checked = false; });
      saved = {};
      store.remove(CHECK_KEY);
      updateMeter();
    });

    updateMeter();
  }

  /* -----------------------------------------------------------
     GERADOR DE PEDIDO
  ----------------------------------------------------------- */
  if ($("#builder-form")) {
    const form = $("#builder-form");
    const out = $("#builder-out");
    const count = $("#builder-count");
    const f = {
      contexto: $("#f-contexto"),
      publico: $("#f-publico"),
      necessidade: $("#f-necessidade"),
      tipo: $("#f-tipo"),
      requisitos: $("#f-requisitos")
    };

    const example = {
      contexto: "Biologia, 2º ano do ensino médio, ensino híbrido",
      publico: "já estudaram a estrutura da célula e costumam estudar pelo celular",
      necessidade: "confundem a ordem das fases da mitose e não relacionam cada fase ao que acontece com os cromossomos",
      tipo: "uma atividade de ordenar etapas arrastando ou com botões",
      requisitos: "as 4 fases da mitose (prófase, metáfase, anáfase, telófase), cada uma com uma descrição curta\nbotão para conferir a ordem, destacando as posições erradas\nexplicação de cada fase depois de conferir\nbotão para embaralhar e tentar de novo"
    };

    /* monta o texto em partes; campos vazios viram marcadores em itálico */
    function part(value, placeholder) {
      const v = value.trim();
      return v ? { text: v } : { text: placeholder, ph: true };
    }

    function checkedValues(groupSel) {
      return $$(groupSel + " input:checked").map((i) => i.value);
    }

    function renderPrompt() {
      const pieces = [];
      const push = (text, ph) => pieces.push({ text, ph });

      const ctx = part(f.contexto.value, "[contexto: disciplina, nível e modalidade]");
      const pub = part(f.publico.value, "[o que os estudantes já sabem e como estudam]");
      const need = part(f.necessidade.value, "[a dificuldade que você observou]");

      push("Sou professor(a) de ");
      push(ctx.text, ctx.ph);
      push(". Meus estudantes ");
      push(pub.text, pub.ph);
      push(".\n\nPercebi que eles ");
      push(need.text, need.ph);
      push(". Para ajudar, quero " + f.tipo.value + ".");

      const reqs = f.requisitos.value.split("\n").map((r) => r.trim()).filter(Boolean);
      push("\n\nRequisitos:\n");
      if (reqs.length) {
        push(reqs.map((r) => "- " + r.replace(/[.;]$/, "")).join(";\n") + ".");
      } else {
        push("- [liste aqui o que o recurso precisa fazer]", true);
      }

      const restr = checkedValues("#f-restricoes");
      if (restr.length) push("\n\n" + restr.join(" "));

      const ent = checkedValues("#f-entrega");
      push("\n\nEntregue o arquivo completo");
      if (ent.length === 1) push(", com " + ent[0]);
      if (ent.length > 1) push(", com " + ent.slice(0, -1).join(", ") + " e " + ent[ent.length - 1]);
      push(".");

      out.textContent = "";
      pieces.forEach((p) => {
        if (p.ph) {
          const span = document.createElement("span");
          span.className = "ph";
          span.textContent = p.text;
          out.appendChild(span);
        } else {
          out.appendChild(document.createTextNode(p.text));
        }
      });

      const words = out.textContent.trim().split(/\s+/).filter(Boolean).length;
      count.textContent = words + " palavras";
    }

    form.addEventListener("input", renderPrompt);
    form.addEventListener("change", renderPrompt);
    form.addEventListener("reset", () => setTimeout(renderPrompt, 0));
    form.addEventListener("submit", (e) => e.preventDefault());

    $("#builder-example").addEventListener("click", () => {
      Object.keys(example).forEach((k) => { f[k].value = example[k]; });
      renderPrompt();
    });

    renderPrompt();
  }

})();
