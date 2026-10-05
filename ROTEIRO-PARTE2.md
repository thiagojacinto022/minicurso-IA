# Roteiro da parte 2 da vídeo-aula (para juntar à gravação de 13 minutos)

**Objetivo:** gravar de 8 a 10 minutos a mais, para o vídeo final ficar com **cerca de 21 a 23 minutos** (o mínimo exigido é 20).
**Ritmo:** leia devagar, com pausas de 2 segundos entre os blocos. Nas demonstrações, narre cada clique e deixe a tela parada alguns segundos. Não tenha pressa: aqui, o tempo de demonstração conta a seu favor.
**Câmera:** obrigatória também nesta parte. Use a mesma posição, a mesma luz e, se possível, a mesma roupa da primeira gravação, para o vídeo parecer contínuo.

---

## Como juntar as duas partes

O vídeo de 13 minutos termina com o **encerramento** ("Vamos recapitular…", "Muito obrigado…"). Se a parte 2 entrasse depois do "obrigado", ficaria estranho. Então:

1. **Corte o encerramento da parte 1.** Ache o momento em que você começa a dizer "Vamos recapitular" e descarte tudo dali para frente.
2. **Cole a parte 2 logo depois.** Ela começa com uma transição e termina com um encerramento novo e completo (bloco 5).

```
[ Parte 1: abertura → … → cuidados éticos ]  +  [ Parte 2: transição → mitose → perguntas → avaliação → encerramento ]
```

**Programas gratuitos no Fedora:** **Kdenlive** (`sudo dnf install kdenlive`, ou pela loja de apps/Flathub) ou **Shotcut**. Arraste os dois vídeos para a linha do tempo, corte o fim da parte 1 com a ferramenta de lâmina, encoste a parte 2 e exporte em MP4.

**Ou pelo terminal (ffmpeg):** troque `12:10` pelo tempo exato em que começa o "Vamos recapitular".
```bash
# 1. corta a parte 1 antes do encerramento
ffmpeg -i parte1.mp4 -to 00:12:10 -c:v libx264 -c:a aac parte1-cortada.mp4
# 2. junta as duas (as duas gravações precisam ter a mesma resolução)
ffmpeg -i parte1-cortada.mp4 -i parte2.mp4 \
  -filter_complex "[0:v][0:a][1:v][1:a]concat=n=2:v=1:a=1[v][a]" \
  -map "[v]" -map "[a]" -c:v libx264 -c:a aac video-final.mp4
```

Depois de juntar, **confira a duração total** (precisa ficar entre 20 e 30 minutos) e anote os **tempos reais** em que cada capítulo começa. Eles vão para a descrição do YouTube e para o site (`curso.html`).

---

## Antes de gravar a parte 2
- Deixe abertos: a página da aula (`curso.html`) na seção **Sua vez: monte o seu pedido**, a ferramenta de IA, o Bloco de Notas e a página da avaliação (`avaliacao/`).
- Zoom do navegador aumentado (Ctrl + `+`).
- Faça um teste rápido de áudio.

---

## Bloco 1 · Transição *(cerca de 30 s)*
**[TELA]** Câmera em tela cheia.

**Fala**
> Até aqui, você viu o ciclo completo com um exemplo de programação: necessidade, requisitos, construção com IA, testes e melhorias.
>
> Agora, nesta segunda parte, eu quero mostrar três coisas. Primeiro, o **ciclo inteiro aplicado do zero** em uma disciplina bem diferente: Biologia. Depois, eu vou responder às **perguntas que mais aparecem** quando professores começam a usar a IA para criar recursos. E, por fim, vou mostrar como funciona a **avaliação** deste minicurso. Vamos lá?

---

## Bloco 2 · Exemplo 2: o ciclo completo em outra disciplina *(cerca de 5 a 6 min)*
**[TELA]** Página da aula, seção **Sua vez: monte o seu pedido** (gerador de pedidos).

**Pontos-chave**
- O método serve para qualquer disciplina
- Etapas 1 a 3 com o gerador de pedidos (Biologia: mitose)
- Testes rápidos: conteúdo, erro de propósito, celular
- Um pedido de melhoria escrito ao vivo

> **Plano B:** se a IA travar ou gerar algo quebrado, abra `prototipo/mitose.html` (ou a aba **Biologia** na seção Protótipo do site) e faça os testes nela. Diga: "para não perder tempo, vou usar uma versão que eu já tinha gerado com esse mesmo pedido".
>
> **Atenção:** nesta parte, a IA vai gerar algo diferente a cada vez. Adapte a fala ao que **realmente** aparecer na tela. Se tudo funcionar de primeira, diga isso; se algo der errado, melhor ainda: mostre o problema e use-o no pedido de melhoria.

**Fala**
> Até aqui, usamos um exemplo de programação. Mas esse método serve para **qualquer disciplina**. Então agora eu vou aplicar o ciclo inteiro, do zero, em um contexto completamente diferente: **Biologia, no ensino médio**.
>
> No site, na seção de atividade prática, tem um **gerador de pedidos**. Vou clicar em "Preencher com exemplo" para ir mais rápido.

**[TELA]** Clique em **Preencher com exemplo** e passe o mouse por cada campo enquanto fala.

> Olha os campos. O contexto: Biologia, segundo ano do ensino médio, ensino híbrido. O público: estudantes que já estudaram a estrutura da célula e costumam estudar pelo celular. E a necessidade: eles **confundem a ordem das fases da mitose** e não relacionam cada fase ao que acontece com os cromossomos. Repare que isso é a **etapa um**: quem aprende e qual é a dificuldade.
>
> O tipo de recurso escolhido foi uma atividade de **ordenar etapas**. E os requisitos: as quatro fases, cada uma com uma descrição curta; um botão para conferir a ordem, destacando as posições erradas; a explicação de cada fase depois de conferir; e um botão para embaralhar e tentar de novo. Essa é a **etapa dois**.
>
> Nas restrições, já estão marcados: arquivo único, funcionar no celular e ser acessível. E em "peça também" eu vou marcar **sugestões de teste**, para a própria IA me sugerir o que conferir.

**[TELA]** Marque **Sugestões de teste**. Mostre o pedido montado ao lado, clique em **Copiar**, cole na IA e envie.

> Do lado direito, o pedido já está montado com as seis partes. Eu copio, colo na ferramenta de IA e envio. Essa é a **etapa três**.
>
> Enquanto ela trabalha, já vou pensando nos testes. O mais importante aqui é o **conteúdo**: a ordem correta da mitose é **prófase, metáfase, anáfase e telófase**. Na prófase, os cromossomos se condensam. Na metáfase, eles se alinham no meio da célula. Na anáfase, as cromátides-irmãs se separam e vão para os polos opostos. E na telófase, formam-se dois novos núcleos. Se a IA trocar qualquer uma dessas descrições, o recurso vai ensinar errado.

**[TELA]** Quando a IA terminar, copie o código, cole no Bloco de Notas, salve como `mitose.html` e abra no navegador.

> Pronto. Salvo como **mitose.html** e abro no navegador. Agora, a **etapa quatro**, os testes.
>
> Teste um, **conteúdo**: vou colocar as fases na ordem certa e conferir… *(descreva o que aconteceu)*. E leio as descrições de cada fase: estão corretas? *(confira com a lista acima)*.
>
> Teste dois, **erro de propósito**: agora coloco duas fases trocadas e clico em conferir. Ele destacou as posições erradas? *(descreva)*.
>
> Teste três, **celular**: aperto F12 e depois **Ctrl, Shift e M**, que liga o modo de dispositivo do navegador. Escolho um celular na lista… e vejo se tudo cabe na tela e se os botões são fáceis de tocar. *(descreva)*.
>
> E olha as sugestões de teste que a própria IA deu no final da resposta. Algumas são boas, mas repare: **quem decide** o que testar e **quem confere** o resultado continua sendo eu.
>
> Agora, a **etapa cinco**. Vou escrever um pedido de melhoria ao vivo, usando o modelo que vimos. Por exemplo, se os botões ficaram pequenos no celular:

**[TELA]** Digite o pedido na mesma conversa da IA (adapte ao problema que você encontrou).

> "No celular, numa tela de 375 pixels, os botões para mover as fases ficaram pequenos e difíceis de tocar. Quero que eles tenham pelo menos 44 pixels de altura. **Mantenha todo o resto igual** e **me diga o que você alterou**."
>
> Observado, esperado, limite da mudança e pedido de explicação. É só isso.
>
> Em poucos minutos, nós fizemos o ciclo inteiro em uma disciplina completamente diferente. **O conteúdo mudou, mas o método é o mesmo.** E é isso que eu quero que você leve: não é sobre programação nem sobre uma ferramenta específica. É sobre ter um caminho para pedir, conferir e melhorar.

---

## Bloco 3 · Perguntas frequentes *(cerca de 2 a 3 min)*
**[TELA]** Câmera em tela cheia (ou a página inicial do minicurso ao fundo).

**Pontos-chave**
- Não é preciso saber programar
- Qualquer IA conversacional serve; o pedido é o que importa
- Três jeitos de levar o recurso aos estudantes
- O que fazer quando a IA gera algo que não funciona

**Fala**
> Agora, algumas perguntas que sempre aparecem quando eu converso com professores sobre isso.
>
> **"Eu preciso saber programar?"** Não. Você precisa saber descrever bem a necessidade, escrever requisitos que dá para testar e conferir o resultado. Ajuda saber **onde fica** o banco de questões no código, para corrigir um gabarito, mas é só isso. Quando algo não funcionar, você descreve o problema para a IA, como fizemos agora há pouco.
>
> **"Qual ferramenta de IA eu uso?"** Qualquer uma das ferramentas de conversa: ChatGPT, Gemini, Claude ou Copilot. As versões gratuitas dão conta de protótipos simples como os desta aula. O método é o mesmo para todas. O que realmente muda o resultado é a **qualidade do pedido**. Uma dica: se uma ferramenta empacar num problema, tente o mesmo pedido em outra.
>
> **"Como eu coloco o recurso para os meus estudantes?"** Tem três caminhos. O primeiro é enviar o próprio arquivo HTML: o estudante baixa e abre no navegador. O segundo é colocar o arquivo no ambiente virtual da sua instituição, como um recurso. Vale conferir com a equipe do ambiente se ele abre direto no navegador. E o terceiro é publicar gratuitamente em um serviço de hospedagem de sites, como a **Vercel**, onde está este minicurso, ou o **GitHub Pages**, e compartilhar o link. Esse último funciona em qualquer celular.
>
> **"E se a IA gerar algo que não funciona?"** Isso é normal e vai acontecer. Primeiro, abra o console com F12 e veja se aparece alguma mensagem em vermelho. Copie essa mensagem e cole no pedido, junto com a descrição do que você fez e do que aconteceu. Se em duas ou três tentativas não resolver, volte para a última versão que funcionava e reformule o pedido em uma conversa nova.
>
> **"Quanto tempo isso leva?"** Para um recurso simples como os desta aula, algo em torno de uma hora: uns vinte a trinta minutos pensando na necessidade e nos requisitos, alguns minutos para a IA gerar e mais uns trinta minutos testando e fazendo uma rodada de melhorias. E repare: **o tempo gasto planejando é o que economiza retrabalho depois.**

---

## Bloco 4 · Conhecendo a avaliação *(cerca de 1 a 2 min)*
**[TELA]** Página da avaliação (`avaliacao/`): tela inicial e depois a primeira questão.

**Pontos-chave**
- 12 questões, 4 formatos, cada uma ligada a um objetivo
- Feedback imediato com explicação
- No final: desempenho por objetivo e o que revisar

**Fala**
> Antes de encerrar, deixa eu mostrar como funciona a avaliação, que é o seu próximo passo.
>
> São **doze questões**, em quatro formatos diferentes: escolha uma alternativa, marque várias, classifique itens e ordene etapas. Cada questão está ligada a um dos objetivos do minicurso. Esses selos coloridos mostram qual.
>
> A primeira questão pede para colocar as etapas do ciclo em ordem. Essa você já sabe! Eu uso as setinhas para mover cada etapa…

**[TELA]** Ordene as etapas corretamente e clique em **Conferir resposta**.

> …e confiro. Olha: além de dizer se acertei, ela **explica o porquê**. Se eu errasse, apareceria também um link para revisar aquele tema no material.
>
> Eu não vou mostrar as outras questões para não estragar a sua experiência. Mas, no final, você vê a sua nota, o seu **desempenho em cada objetivo** e sugestões do que vale revisar. Então, se você errar, aproveite: o erro também ensina.

---

## Bloco 5 · Encerramento *(cerca de 1 min)*
**[TELA]** Câmera em tela cheia.

**Pontos-chave**
- Recapitular o ciclo em uma frase por etapa
- Convidar para a avaliação e para a prática
- Agradecer

**Fala**
> Vamos recapitular. Comece pelo **problema**, não pela tecnologia. Transforme o problema em **requisitos que dá para testar**. Faça um **pedido estruturado** para a IA, com as seis partes. **Teste** com as quatro lentes, e confira o conteúdo você mesmo. E peça **melhorias** como quem relata um problema, uma versão de cada vez.
>
> E, como você viu no exemplo de Biologia, **isso vale para qualquer disciplina**. O conteúdo muda, o método continua o mesmo.
>
> Agora é a sua vez. Faça a **avaliação** no site do minicurso. E, se quiser ir além, use o **gerador de pedidos** para montar o seu primeiro pedido com um problema real da sua turma.
>
> A IA pode acelerar muito o nosso trabalho. Mas o olhar pedagógico, a conferência e a decisão continuam sendo nossos.
>
> Muito obrigado por assistir, e até a próxima!
