# Roteiro de leitura da vídeo-aula: Do problema ao protótipo

**Duração-alvo:** cerca de 26 minutos (o projeto exige de 20 a 30). Mire em 23 a 27 minutos para ter folga dos dois lados.
**Como usar:** leia o texto em **"Fala"** em voz alta, num ritmo calmo. Os **pontos-chave** são o que não pode faltar se você improvisar. O que está em **[TELA]** é o que deve aparecer no vídeo naquele momento.
**Ritmo (importante):** leia **mais devagar do que parece natural**, cerca de 130 palavras por minuto. Faça uma pausa de 2 segundos depois de cada frase em negrito e entre um bloco e outro. Nas demonstrações, **não acelere**: narre cada clique ("agora vou clicar em…") e deixe a tela parada alguns segundos para quem assiste conseguir ler. Uma demonstração bem feita pode levar mais tempo que o texto do bloco, e isso é bom.
**Câmera:** em tela cheia na abertura e no encerramento; numa janela pequena no canto durante as demonstrações (OBS Studio, Loom ou o gravador do Google Meet resolvem).

> Os tempos são os mesmos dos capítulos do site. Se depois de gravar algum tempo mudar, atualize os `data-t` (em segundos) e os rótulos na seção **Capítulos** do `curso.html`, e a coluna "No vídeo" da tabela de alinhamento no `index.html`.

**Antes de gravar, deixe abertos:** a página inicial (`index.html`), a página da aula (`curso.html`), uma ferramenta de IA (ChatGPT, Gemini ou Claude) e o Bloco de Notas. Aumente o zoom do navegador (Ctrl + `+`) para o texto ficar legível no vídeo.

---

## 00:00 · Abertura e apresentação
**[TELA]** Câmera em tela cheia.

**Pontos-chave**
- Apresentar-se
- O problema: a IA gera rápido, mas quem garante a qualidade é o professor
- O que o minicurso entrega

**Fala**
> Olá! Eu sou o Thiago Jacinto, e este é o minicurso **Do problema ao protótipo: recursos educacionais com apoio de inteligência artificial**.
>
> Hoje, qualquer professor consegue abrir uma ferramenta de IA, pedir "faça um quiz sobre frações" e receber, em segundos, uma atividade pronta. Isso é incrível. Mas levanta uma pergunta importante: **esse recurso está certo?** As respostas estão corretas? Ele funciona no celular do estudante? Ele ensina o que eu queria ensinar?
>
> A IA é muito boa em produzir. Mas quem decide o que precisa ser produzido, e quem confere se ficou bom, continua sendo o professor.
>
> Por isso, neste minicurso, você vai aprender um caminho completo: partir de uma **necessidade real de ensino**, transformar essa necessidade em **requisitos claros**, **construir** um recurso digital com ajuda da IA, **testar** esse recurso e **pedir melhorias** da forma certa.
>
> E não vai ficar só na teoria. Ao longo da aula, eu vou construir um recurso de verdade, na sua frente, e mostrar cada etapa funcionando. Vamos começar?

---

## 01:15 · Objetivos e trilha do minicurso
**[TELA]** Página inicial (`index.html`): role até **Sobre**, depois **Objetivos** e **Trilha**.

**Pontos-chave**
- Público-alvo e conhecimentos prévios: não precisa programar
- Os 4 objetivos (O1 a O4)
- A trilha: vídeo → material → protótipo → avaliação

**Fala**
> Antes de tudo, para quem é este minicurso? Ele foi pensado para **professores, tutores, designers instrucionais e licenciandos** da educação a distância que querem usar a IA para criar recursos digitais simples para as suas turmas.
>
> E um aviso importante: **você não precisa saber programar**. Basta saber usar o navegador, já ter conversado com alguma ferramenta de IA e ter uma noção do que é um objetivo de aprendizagem.
>
> Ao final, você vai ser capaz de quatro coisas. Primeiro, **descrever uma necessidade pedagógica** com clareza. Segundo, **transformar essa necessidade em requisitos** que possam ser verificados. Terceiro, **escrever um pedido estruturado** para que a IA gere o recurso. E quarto, **testar o resultado e pedir melhorias** com precisão.
>
> A trilha de estudo é simples: você assiste a este vídeo, aprofunda no material escrito, experimenta o protótipo e, no final, faz a avaliação, que tem doze questões com feedback imediato. Tudo isso está no site do minicurso, na ordem certa.

---

## 02:30 · O ciclo em 5 etapas
**[TELA]** Página da aula (`curso.html`): seção **"Um ciclo, não uma linha reta"**.

**Pontos-chave**
- Necessidade → Requisitos → Construção → Testes → Melhorias
- É um ciclo: testar e melhorar se repetem
- O caso que vamos acompanhar: turma EAD de Introdução à Programação

**Fala**
> Todo o minicurso gira em torno de um ciclo com cinco etapas.
>
> A primeira é a **necessidade**: qual problema de aprendizagem eu quero resolver? A segunda são os **requisitos**: o que o recurso precisa fazer, de um jeito que eu consiga conferir depois? A terceira é a **construção**, que é onde a IA entra. A quarta são os **testes**: o recurso faz o que deveria? E a quinta são as **melhorias**: o que precisa mudar, e como eu peço isso.
>
> Repare em uma coisa: **a IA só aparece na terceira etapa**. Antes dela, tem trabalho de professor. E depois dela, também.
>
> E isso não é uma linha reta, é um ciclo. Os testes revelam problemas, as melhorias geram uma nova versão, e essa nova versão precisa ser testada de novo. A gente repete até o recurso ficar bom.
>
> Para tornar tudo concreto, vamos acompanhar um caso: uma turma de **Introdução à Programação**, em um curso a distância. Vamos sair de uma dificuldade que o professor percebeu nessa turma até um treino interativo funcionando.

---

## 04:00 · Etapa 1 · Necessidade pedagógica
**[TELA]** Seção **Etapa 1**: os três cards, depois a comparação "vaga × clara" e a necessidade final do caso.

**Pontos-chave**
- Começar pelo problema, não pela tecnologia
- Três perguntas: quem aprende? qual a dificuldade? como saberei se ajudou?
- Vaga × clara: "quero um joguinho" não orienta nada

**Fala**
> Etapa um: a necessidade pedagógica. E aqui está o erro mais comum: começar pela tecnologia. "Quero fazer um jogo." "Quero usar IA na minha aula." Isso é uma ferramenta procurando um problema.
>
> O caminho certo é o contrário. A pergunta que inicia tudo é: **o que os meus estudantes ainda não conseguem fazer, e que eu gostaria que conseguissem?**
>
> Para responder bem, eu uso três perguntas.
>
> A primeira: **quem aprende?** Qual é o nível da turma, o que eles já sabem e como eles estudam. Por exemplo: eles estudam pelo celular? Têm internet boa?
>
> A segunda: **qual é a dificuldade?** E aqui é preciso ser específico. Não basta dizer "eles não entendem laços de repetição". É melhor dizer "eles erram o último valor do contador em um laço for". Quanto mais específico, melhor o recurso.
>
> A terceira: **como eu vou saber se o recurso ajudou?** Pode ser a taxa de acertos em uma atividade, menos dúvidas no fórum ou um desempenho melhor em uma questão da prova. Se eu não defino isso agora, depois não tenho como avaliar.
>
> Veja a diferença na prática. Uma necessidade vaga seria: "Quero um joguinho de programação para a turma." Isso não diz quem vai usar, o que deve ser aprendido nem como avaliar. Se eu mandar isso para a IA, ela vai inventar tudo, e provavelmente errar.
>
> Agora, a necessidade clara: "Estudantes do primeiro período escrevem código copiando exemplos, mas erram ao prever o que um trecho faz e não reconhecem erros comuns", como o erro de uma posição a mais no laço, a confusão entre um sinal de igual e três sinais de igual, ou uma variável sem valor inicial.
>
> Percebe? Agora eu sei o público, sei a dificuldade e já tenho uma pista do formato: o estudante precisa **ler código e prever o resultado**.
>
> No nosso caso, a necessidade final ficou assim: **precisamos de um treino curto e autocorrigível de leitura de código, que o estudante possa fazer no celular entre as aulas, recebendo uma explicação imediata de cada erro.**

**[TELA]** Volte para a câmera.

> Agora, uma pausa para você. **Pause o vídeo** e pense na sua turma, ou em uma turma que você conhece. Qual é uma dificuldade específica que os estudantes têm hoje? Tente escrever essa necessidade em uma frase, respondendo às três perguntas: quem aprende, qual é a dificuldade e como você saberia se um recurso ajudou.
>
> *(pausa de 3 segundos)*
>
> Guarde essa frase. Ela vai ser o seu ponto de partida na atividade prática, no final do minicurso.

---

## 07:00 · Etapa 2 · Requisitos verificáveis
**[TELA]** Seção **Etapa 2**: os três tipos de requisito e depois a tabela de requisitos.

**Pontos-chave**
- "Se não dá para testar, ainda não é um requisito"
- Três tipos: pedagógicos, funcionais, técnicos
- A coluna "Como verificar" vira o roteiro de testes
- Separar o conteúdo da lógica

**Fala**
> Etapa dois: os requisitos. Um requisito é algo que o recurso precisa **fazer** ou **ter**. E tem uma regra que eu quero que você leve deste minicurso: **se não dá para testar, ainda não é um requisito.**
>
> "O recurso deve ser bonito e intuitivo." Isso é um requisito? Não. Bonito para quem? Intuitivo como? Eu não tenho como conferir. Agora: "ao final, o recurso mostra a pontuação e um botão para recomeçar". Isso eu confiro em dez segundos. Isso é um requisito.
>
> Eu gosto de separar os requisitos em três tipos.
>
> Os **pedagógicos** tratam do que se aprende: por exemplo, trechos de código curtos, de até dez linhas, e uma explicação do porquê de cada resposta.
>
> Os **funcionais** tratam do que o recurso faz na tela: mostrar o progresso, contar os acertos, permitir recomeçar.
>
> E os **técnicos e de uso** tratam de onde e como ele roda: ser um único arquivo, funcionar sem instalação, funcionar no celular, poder ser usado só com o teclado.
>
> Olha a tabela do nosso caso. Cada linha tem um identificador, o requisito e uma coluna muito importante: **como verificar**. Por exemplo, no requisito "funcionar no celular", eu já anoto que vou testar numa tela de 375 pixels de largura. No requisito "usar só com teclado", eu vou fazer o treino inteiro usando apenas Tab, Enter e Espaço.
>
> Essa coluna é ouro, porque ela **vira o roteiro de testes** da etapa quatro. Quando chegar a hora de testar, eu não preciso inventar nada: é só percorrer a tabela, linha por linha.
>
> Uma dica final: peça que o conteúdo, ou seja, as perguntas, as alternativas e os gabaritos, fique **separado da lógica do código**, numa lista fácil de editar. Assim, se você precisar corrigir uma resposta ou criar uma pergunta nova, você mexe só ali, sem precisar entender o resto e sem precisar pedir tudo de novo para a IA.
>
> Mais uma pausa para você. Pegue aquela necessidade que você escreveu e tente transformá-la em **três requisitos, um de cada tipo**: um pedagógico, um funcional e um técnico. Para cada um, responda: **como eu verificaria isso?** Se você não souber responder, o requisito ainda está vago. Reescreva até conseguir.
>
> *(pausa de 3 segundos)*

---

## 10:00 · Etapa 3 · Construção com IA, ao vivo
**[TELA]** Seção **Etapa 3**: anatomia do pedido e o pedido colorido. Depois, a ferramenta de IA e o Bloco de Notas.

**Pontos-chave**
- As 6 partes de um bom pedido
- Demonstração ao vivo: copiar, colar, enviar
- Boas práticas: arquivo único, comentários em português, guardar versões
- Como salvar e abrir o arquivo

**Fala**
> Etapa três: a construção. Agora sim, a IA entra em cena. E a qualidade do que ela entrega depende muito da qualidade do que você pede. Um bom pedido é metade do protótipo.
>
> Um pedido bem feito tem seis partes. Um: o **contexto**, quem você é e em que curso o recurso será usado. Dois: o **público**, quem são os estudantes e o que já sabem. Três: o **objetivo**, a necessidade pedagógica em uma frase. Quatro: os **requisitos**, aquela lista da etapa dois. Cinco: as **restrições**, como tecnologia, celular e acessibilidade. E seis: a **entrega**, em que formato você quer receber o resultado.
>
> Aqui no site, o pedido do nosso caso está pintado com uma cor para cada parte, para você enxergar a estrutura. Eu vou copiar esse pedido com este botão…

**[TELA]** Clique em **Copiar**, abra a ferramenta de IA, cole e envie.

> …vou colar na ferramenta de IA e enviar.
>
> Enquanto a IA trabalha, algumas boas práticas. Peça **um arquivo único**: é mais fácil de abrir, de testar e de enviar para o ambiente virtual. Peça **comentários em português**, porque você vai precisar entender o código para conferi-lo. E **guarde cada versão** com um nome diferente: treino-v1, treino-v2. Se algo quebrar, você volta para a versão anterior.
>
> Outra dica valiosa: pergunte à IA **quais suposições ela fez** que você não especificou. Às vezes ela decide coisas importantes por conta própria, e é bom saber.

**[TELA]** Mostre a resposta da IA, copie o código, cole no Bloco de Notas e salve como `treino.html`.

> Pronto, ela respondeu. Para colocar para rodar: eu copio todo o código, do começo ao fim, colo no Bloco de Notas e salvo com o nome **treino.html**. Atenção: confira se a extensão não ficou ".txt". Depois é só dar duplo clique no arquivo, e ele abre no navegador. Sem instalar nada.
>
> Cada vez que você faz o pedido, a IA pode gerar um resultado um pouco diferente, e isso é normal. Para seguir com a aula, eu vou usar a versão que guardei no site, que é a versão um do nosso protótipo.

> *Se a IA demorar ou travar, diga:* "Isso também acontece no dia a dia, e por isso guardar as versões é tão importante. Eu vou seguir com a versão que já tinha salvado."

---

## 13:30 · Demonstração do protótipo v1
**[TELA]** Seção **Protótipo**, aba **v1**. Responda duas questões (uma certa e uma errada). Depois, role até **Por dentro do código gerado**.

**Pontos-chave**
- Mostrar o protótipo funcionando: acerto, erro e explicação
- Onde fica o banco de questões
- Cuidado: a posição da resposta certa conta a partir de zero

**Fala**
> Esta é a versão um, exatamente o que a IA entregou a partir daquele pedido. Vamos experimentar.
>
> A primeira pergunta mostra um trecho de código e pede a saída no console. Vou responder certo… e olha o feedback: ele confirma e explica **por que** essa é a resposta. Agora vou errar de propósito na próxima… ele mostra a resposta correta e explica o erro. É exatamente o feedback imediato que a gente pediu nos requisitos.
>
> E por dentro? Você não precisa ser programador, mas precisa saber **onde fica cada coisa**. O código tem quatro partes: o **banco de questões**, o **estado**, a **renderização**, que desenha a tela, e a **lógica de resposta**. A parte que interessa ao professor é a primeira: o banco de questões. Cada pergunta tem o enunciado, o código, as alternativas, a explicação e o gabarito.
>
> Só um cuidado: a posição da resposta certa começa a contar do **zero**. A primeira alternativa é zero, a segunda é um, e assim por diante. É um detalhe pequeno que causa muita confusão.

---

## 15:00 · Etapa 4 · Testes e console
**[TELA]** Seção **Etapa 4**: as 4 lentes. Depois, abra o console (F12) e cole o trecho. Em seguida, o modo celular na seção Protótipo, a checklist e o registro de testes.

**Pontos-chave**
- Código que parece certo não é código testado
- As 4 lentes: requisitos, conteúdo, uso real, console
- Demonstração: conferir um gabarito no console
- O registro de testes da v1: 3 OK, 3 melhorias, 2 problemas

**Fala**
> Etapa quatro: os testes. E aqui está a frase mais importante desta aula: **código que parece certo não é código testado.**
>
> A IA escreve com muita confiança, inclusive quando erra. Ela pode trocar um gabarito, escrever uma explicação errada ou simplesmente esquecer um requisito. Por isso, eu testo olhando por quatro lentes.
>
> A primeira são os **requisitos**: percorro a tabela da etapa dois, linha por linha. A segunda é o **conteúdo**: confiro todos os gabaritos e explicações. Esse é o erro mais grave, e só o professor consegue detectar. A terceira é o **uso real**: celular, teclado, erros de propósito, cliques repetidos. Teste como um estudante distraído usaria. E a quarta é o **console** do navegador, que mostra erros escondidos.
>
> Vou mostrar como conferir um gabarito em trinta segundos. Eu aperto **F12**, clico em "Console"…

**[TELA]** Cole `let a = 5 === "5"; let b = 5 == "5"; console.log(a, b);` e pressione Enter.

> …colo o trecho de código da questão e aperto Enter. O navegador executou o código de verdade e mostrou "false true". Agora eu comparo com o gabarito do quiz. Bateu? Ótimo. Se não batesse, a IA teria errado, e eu teria acabado de evitar ensinar algo errado para a minha turma.
>
> Também testo no celular. No site tem este botão que simula a tela do celular…

**[TELA]** Clique no botão de **celular** na seção Protótipo. Volte à Etapa 4 e marque dois itens da checklist.

> …e no material tem uma **checklist de testes** que você pode usar com o seu próprio recurso. As marcações ficam salvas no seu navegador. Uma dica: marque só o que você **viu** funcionar, não o que "deve" funcionar.
>
> E o resultado dos testes da versão um? Eu registrei tudo nesta tabela: o que testei, o que esperava e o que aconteceu. Três testes passaram: o quiz vai até o fim, os gabaritos estão certos e o layout funciona no celular. Mas apareceram três pontos de melhoria: as perguntas vêm sempre na mesma ordem, então o estudante decora a posição da resposta; no final, ele não consegue rever os erros; e o código aparece todo em uma cor só, o que dificulta a leitura. E dois problemas de acessibilidade, que um leitor de tela percebe.
>
> Esse registro é o que transforma uma impressão vaga, do tipo "acho que dá para melhorar", em pedidos concretos de melhoria.

---

## 18:00 · Etapa 5 · Melhorias e a v2
**[TELA]** Seção **Etapa 5**: os princípios, a comparação de pedidos e o pedido da v2. Depois, a aba **v2** do protótipo.

**Pontos-chave**
- Pedir como quem relata um problema: observado × esperado
- "Mantenha o resto igual" e "diga o que alterou"
- Pedido vago × pedido preciso
- A v2 e o que mudou; quando a IA "anda em círculos"

**Fala**
> Etapa cinco: pedir melhorias. A regra aqui é **pedir como quem relata um problema**. Diga o que você fez, o que aconteceu e o que deveria ter acontecido.
>
> Compare dois pedidos. O primeiro: "Melhora o quiz aí, tá meio sem graça." O que a IA vai fazer? Vai mudar coisas aleatórias: cores, textos, talvez até as questões. E você perde o controle do que foi alterado.
>
> O segundo: "Quando o estudante refaz o treino, as questões aparecem sempre na mesma ordem, e ele decora a posição da resposta. Quero que a ordem das questões e das alternativas seja embaralhada a cada tentativa. **Mantenha todo o resto igual** e **me diga quais partes do código você alterou**."
>
> Esse segundo pedido descreve o problema, diz o que se espera e limita a mudança. E pedir a explicação ajuda você a conferir e a aprender.
>
> Mais algumas dicas: faça **poucas mudanças por vez**, numerando os pedidos. Se o console mostrar um erro em vermelho, **copie o texto exato** no pedido. E, depois de cada nova versão, **teste tudo de novo**, porque uma correção pode quebrar algo que já funcionava.
>
> Aqui está o pedido real que eu usei. Ele começa dizendo o que funcionou, lista cada problema com um número e termina pedindo para manter o resto e explicar as alterações.
>
> E o resultado é a versão dois.

**[TELA]** Clique na aba **v2** e mostre: tela inicial, cores no código, uma resposta e a tela final com revisão.

> Agora as questões e as alternativas são embaralhadas a cada tentativa. O código tem cores, como nos editores profissionais. No final, o estudante vê a revisão de cada questão e pode **refazer só as que errou**. E os dois problemas de acessibilidade foram corrigidos. Cada mudança corresponde a uma linha do registro de testes. É isso que torna a melhoria rastreável.
>
> Um último conselho: às vezes a IA "anda em círculos", e cada correção quebra outra coisa. Se isso acontecer duas ou três vezes seguidas, **pare**. Volte para a última versão que funcionava, abra uma conversa nova e descreva o problema de outro jeito. Insistir na mesma conversa costuma piorar.

---

## 20:30 · Exemplo 2 · O ciclo completo em outra disciplina
**[TELA]** Página da aula, seção **Sua vez: monte o seu pedido** (gerador de pedidos).

**Pontos-chave**
- O método serve para qualquer disciplina
- Etapas 1 a 3 com o gerador de pedidos (Biologia: mitose)
- Testes rápidos: conteúdo, erro de propósito, celular
- Um pedido de melhoria escrito ao vivo

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

## 24:00 · Cuidados éticos e LGPD
**[TELA]** Seção **Cuidados** ("A IA ajuda; a autoria é sua").

**Pontos-chave**
- A revisão do conteúdo é responsabilidade de quem publica
- Nunca colar dados pessoais de estudantes (LGPD)
- Acessibilidade, transparência, "protótipo não é sistema"

**Fala**
> Antes de terminar, alguns cuidados, porque **a IA ajuda, mas a autoria é sua**.
>
> Primeiro: você responde pelo que publica. Todo gabarito, toda explicação e todo exemplo precisa ser conferido antes de chegar ao estudante.
>
> Segundo, e muito importante: **nunca cole dados pessoais dos seus estudantes** em ferramentas de IA. Nada de nomes, notas ou matrículas. Isso é uma questão de privacidade e de respeito à **Lei Geral de Proteção de Dados**. Use exemplos fictícios.
>
> Terceiro: acessibilidade é requisito, não acabamento. Teclado, contraste e telas pequenas fazem parte do teste.
>
> Quarto: seja transparente e informe que o recurso foi feito com apoio de IA e revisado por você. Isso também é um bom exemplo para os estudantes.
>
> E por último: um protótipo não é um sistema. Se você precisar guardar notas ou dados dos estudantes, envolva a equipe técnica e use o ambiente virtual da instituição.

---

## 25:00 · Conhecendo a avaliação
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

## 26:00 · Encerramento
**[TELA]** Câmera em tela cheia (ou a página do curso ao fundo).

**Pontos-chave**
- Recapitular o ciclo em uma frase por etapa
- Convidar para a avaliação e para a prática
- Agradecer

**Fala**
> Vamos recapitular. Comece pelo **problema**, não pela tecnologia. Transforme o problema em **requisitos que dá para testar**. Faça um **pedido estruturado** para a IA, com as seis partes. **Teste** com as quatro lentes, e confira o conteúdo você mesmo. E peça **melhorias** como quem relata um problema, uma versão de cada vez.
>
> Agora é a sua vez. Faça a **avaliação** no site. E, se quiser ir além, pegue aquela necessidade que você escreveu durante a aula e use o **gerador de pedidos** para montar o seu primeiro pedido, com um problema real da sua turma. Você viu agora há pouco como é rápido.
>
> A IA pode acelerar muito o nosso trabalho. Mas o olhar pedagógico, a conferência e a decisão continuam sendo nossos.
>
> Muito obrigado por assistir, e até a próxima!

---

## Checklist antes de publicar o vídeo
- [ ] Duração entre 20 e 30 minutos
- [ ] Rosto visível pela câmera (identificação pessoal)
- [ ] Áudio limpo: microfone perto, ambiente sem eco, volume conferido em um trecho de teste
- [ ] Zoom do navegador aumentado nas demonstrações, para ficar legível
- [ ] Publicado no YouTube como **Público** ou **Não listado** (privado não funciona no site)
- [ ] Incorporação permitida (YouTube Studio → Detalhes → Mostrar mais → Permitir incorporação)
- [ ] Legendas automáticas em português **revisadas** no YouTube Studio → Legendas
- [ ] Capítulos na descrição do YouTube (copie a lista de tempos deste roteiro, começando em 00:00)
