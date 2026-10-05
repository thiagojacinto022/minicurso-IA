# Do problema ao protótipo: recursos educacionais com apoio de IA

Minicurso EaD de **Thiago Jacinto**, da trilha *Docência Digital na Era da IA: Ensino e Aprendizagem na EaD* (projeto da 1ª VA).

## Estrutura
```
index.html            Página inicial (landing): autor, público, pré-requisitos, objetivos, trilha, avaliação, referências
curso.html            Página da aula: vídeo, material das 5 etapas, protótipo, cuidados, prática
avaliacao/index.html  Avaliação interativa (12 questões alinhadas aos objetivos, feedback imediato)
prototipo/v1.html     Protótipo gerado pelo primeiro pedido à IA
prototipo/v2.html     Protótipo depois do ciclo de testes e melhorias
prototipo/mitose.html Exemplo 2 (Biologia): atividade de ordenar as fases da mitose
assets/css/style.css  Estilos (tema claro/escuro)
assets/js/main.js     Interações da página (vídeo, menu, cópia, checklist, gerador de pedidos)
ROTEIRO-VIDEO.md      Roteiro de gravação da vídeo-aula
ROTEIRO-PARTE2.md     Roteiro da parte 2 (para juntar à primeira gravação)
APRESENTACAO.md       Roteiro da apresentação em sala
```

## 1. Colocar o vídeo do YouTube
No `curso.html`, procure por `data-youtube=""` e cole o link do vídeo (ou só o ID):
```html
<div class="video-frame" id="video-frame" data-youtube="https://youtu.be/SEU_ID">
```
Se os tempos reais do vídeo forem diferentes do roteiro, ajuste os capítulos (`data-t` em segundos) logo abaixo e a tabela de alinhamento na seção Avaliação do `index.html`.

> O player do YouTube não funciona quando o arquivo é aberto com duplo clique (`file://`). Teste pelo link da Vercel ou com `python3 -m http.server`.

## 2. Publicar na Vercel
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

## 3. Checklist antes de entregar
- [ ] Link da Vercel abre no computador e no celular
- [ ] Vídeo toca dentro do site, com legendas revisadas
- [ ] Capítulos do vídeo pulam para o tempo certo
- [ ] Avaliação abre, funciona até o fim e mostra o resultado
- [ ] Abas v1/v2 do protótipo funcionam
- [ ] Links das referências abrem
- [ ] Link adicionado na planilha da turma
