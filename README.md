# Do problema ao protótipo: recursos educacionais com apoio de IA

Minicurso EaD de **Thiago Jacinto**, da trilha *Docência Digital na Era da IA: Ensino e Aprendizagem na EaD* (projetos da 1ª e da 2ª VA).

Site: https://minicurso-ia-ten.vercel.app
eBook (FlipHTML5): https://online.fliphtml5.com/stprnr/do-problema-ao-prototipo-ebook/

## Estrutura
```
index.html            Página inicial (landing): autor, público, pré-requisitos, objetivos, trilha, avaliação, referências
curso.html            Página da aula: vídeo, material das 5 etapas, protótipo, cuidados, prática
avaliacao/index.html  Avaliação interativa (12 questões alinhadas aos objetivos, feedback imediato)
prototipo/v1.html     Protótipo gerado pelo primeiro pedido à IA
prototipo/v2.html     Protótipo depois do ciclo de testes e melhorias
prototipo/mitose.html Exemplo 2 (Biologia): atividade de ordenar as fases da mitose
quadrinhos/index.html 2ª VA · Item 2: HQ interativa "Ana e a Faísca" (HTML + SVG, sem dependências)
ebook/index.html      2ª VA · Item 1: página do eBook (embed do FlipHTML5 + PDF)
ebook/*.pdf           eBook "Caderno prático" (24 páginas, A5, com links)
assets/css/style.css  Estilos (tema claro/escuro)
assets/js/main.js     Interações da página (vídeo, menu, cópia, checklist, gerador de pedidos)
ROTEIRO-VIDEO.md      Roteiro de gravação da vídeo-aula
ROTEIRO-PARTE2.md     Roteiro da parte 2 (para juntar à primeira gravação)
APRESENTACAO.md       Roteiro da apresentação em sala
```

## 1. Colocar o vídeo (YouTube ou Google Drive)
No `curso.html`, no elemento `#video-frame`, cole o link do vídeo no atributo correspondente:
```html
<!-- YouTube -->
<div class="video-frame" id="video-frame" data-youtube="https://youtu.be/SEU_ID">

<!-- Google Drive (o arquivo precisa estar com link "Qualquer pessoa com o link") -->
<div class="video-frame" id="video-frame" data-drive="https://drive.google.com/file/d/SEU_ID/view?usp=sharing">
```
Se os dois atributos estiverem preenchidos, o YouTube tem prioridade. Os capítulos (`data-t` em segundos) só pulam para o tempo certo quando o vídeo é do YouTube — no player do Google Drive eles apenas destacam o capítulo e rolam até o vídeo. Se os tempos reais do vídeo forem diferentes do roteiro, ajuste os `data-t` e a tabela de alinhamento na seção Avaliação do `index.html`.

> O player não funciona quando o arquivo é aberto com duplo clique (`file://`). Teste pelo link da Vercel ou com `python3 -m http.server`.

## 2. eBook no FlipHTML5 (obrigatório na 2ª VA)
1. Entre em fliphtml5.com (conta gratuita) → **Create New** → envie `ebook/do-problema-ao-prototipo-ebook.pdf`.
2. Na importação, deixe marcada a opção de **importar os links do PDF**, para o sumário e os links continuarem clicáveis.
3. Título: *Do problema ao protótipo · Caderno prático*. Publique como **Public** e copie o link (`https://online.fliphtml5.com/.../`).
4. Em `ebook/index.html`, cole o link em `window.EBOOK_FLIP_URL = "";`, faça o commit e o push. A página passa a mostrar o flipbook embutido.

## 3. Publicar na Vercel
É um site estático: não precisa de build.

**Pelo site (mais simples):**
1. Crie um repositório no GitHub com esta pasta e envie os arquivos.
2. Em vercel.com → *Add New → Project* → importe o repositório.
3. *Framework Preset*: **Other**. Deixe Build Command e Output Directory vazios → *Deploy*.

**Pela linha de comando:**
```bash
npm i -g vercel
vercel        # primeira vez: faz login e cria o projeto
vercel --prod # publica em produção
```

## 4. Checklist antes de entregar
- [ ] Link da Vercel abre no computador e no celular
- [ ] Vídeo toca dentro do site, com legendas revisadas
- [ ] Capítulos do vídeo pulam para o tempo certo
- [ ] Avaliação abre, funciona até o fim e mostra o resultado
- [ ] Abas v1/v2 do protótipo funcionam
- [ ] Links das referências abrem
- [ ] eBook publicado no FlipHTML5 e link colado em `ebook/index.html`
- [ ] Flipbook abre dentro da página do eBook, e o sumário pula para as páginas
- [ ] HQ: os 7 capítulos abrem, a pergunta do capítulo 4 funciona e o modo bastidores abre as notas
- [ ] Trilha da página inicial leva para a HQ, o eBook e a avaliação
- [ ] Link adicionado na planilha da turma
