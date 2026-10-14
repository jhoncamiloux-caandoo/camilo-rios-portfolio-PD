/* Série "Tutoriais de motion com IA" (tutoriais 1 a 6): cenas em components/blog/motion/scenes-tutoriais.tsx.
   O exemplo de todos é o carrossel vivo da Clint, feito de verdade para esta série (vídeos em public/blog/carrossel-clint). */
import type { Post } from "./posts";

const V = "/blog/carrossel-clint";

const FONTES = [
  "Movez (@0xMovez), fio sobre carrosséis animados feitos com IA: https://x.com/0xMovez/status/2104216919033192746",
  "Felipe Borges, skill criador-de-carrosseis-simples: https://github.com/Felpborges/criador-de-carrosseis-simples",
  "Playwright, documentação de screenshots: https://playwright.dev/docs/screenshots",
  "FFmpeg, documentação: https://ffmpeg.org/documentation.html",
];

export const tutorialPosts: Post[] = [
  {
    slug: "como-a-ia-faz-video-carrossel-animado",
    cover: "/blog/como-a-ia-faz-video-carrossel-animado.webp",
    title: "Como a IA faz vídeo: o carrossel animado por dentro",
    description:
      "A IA não filma nada. Ela escreve uma página que sabe desenhar qualquer instante, e o navegador fotografa 30 vezes por segundo. Passo a passo, com o carrossel real da Clint.",
    date: "2026-10-14",
    category: "ai",
    tags: ["IA", "Motion", "Tutorial", "Carrossel"],
    readMinutes: 7,
    lab: true,
    sources: FONTES,
    related: {
      href: "/cases/intelligence",
      title: "Clint Intelligence",
      body: "Na prática: a Aura e os agentes que aparecem no carrossel deste tutorial.",
    },
    blocks: [
      {
        type: "p",
        text: "Sabe quando você vê um carrossel no Instagram em que cada slide se mexe, as mensagens chegam no ritmo da música e tudo emenda certinho no loop? Eu sempre achei que isso era horas de After Effects. Pois é. Dá para fazer com IA, e o jeito que ela faz é bem diferente do que eu imaginava.",
      },
      {
        type: "p",
        text: "Nesta série eu vou mostrar como montei um carrossel animado de verdade para a Clint, do briefing ao MP4. Neste primeiro tutorial, a pergunta é simples: como uma IA, que só escreve texto, consegue entregar um vídeo? Vamos nessa?",
      },
      {
        type: "video",
        items: [{ src: `${V}/slide-01.mp4`, poster: `${V}/slide-01.webp`, label: "Slide 1 do carrossel da Clint, feito pela IA com as regras deste tutorial.", sound: true }],
      },
      { type: "h2", text: "A IA não filma. Ela escreve código" },
      {
        type: "p",
        text: "A primeira coisa que eu precisei entender: o modelo não gera pixels de vídeo. Ele escreve uma página HTML, com CSS e um pouco de JavaScript. Essa página tem uma função chamada seek(t). Você passa um instante, por exemplo 1,5 segundo, e a página se desenha exatamente como deveria estar naquele instante.",
      },
      {
        type: "p",
        text: "Parece detalhe, mas muda tudo. Se o quadro depende só do tempo, ele é sempre o mesmo. Não tem timer, não tem animação rodando sozinha, não tem nada aleatório. Eu posso pedir o quadro 45 dez vezes e ele vem igual dez vezes. É isso que deixa o vídeo sem tremedeira e o loop sem emenda.",
      },
      {
        type: "code",
        label: "A ideia em poucas linhas",
        text: `window.seek = (t) => {
  // a mensagem entra em 1,0 s com uma mola e sai em 5,0 s
  const v = S(t, [[1.0, 1], [5.0, -1]]);
  balao.style.opacity = v;
  balao.style.transform = \`translateY(\${24 * (1 - v)}px)\`;
};`,
      },
      { type: "h2", text: "Depois, o navegador vira câmera" },
      {
        type: "p",
        text: "Com a página pronta, entra o Playwright, uma ferramenta que controla o navegador por código. Ele abre a página, chama seek(0) e tira uma foto. Chama seek(1/30) e tira outra. E assim vai: 30 fotos por segundo, 180 fotos para um slide de 6 segundos.",
      },
      {
        type: "p",
        text: "No fim, o ffmpeg junta essas fotos num MP4 e coloca a trilha por cima. A trilha também foi escrita em código, a 120 batidas por minuto. Uma batida a cada meio segundo. Por isso as mensagens chegam em 1,0 s, 1,5 s e 3,0 s: elas caem na batida.",
      },
      { type: "scene", id: "video-pipeline", data: {} },
      { type: "h2", text: "Sem regras, a IA anima como um robô" },
      {
        type: "p",
        text: "Aqui está o ponto que me fez escrever esta série. Se você só pedir \"anima esse slide\", a IA entrega algo assim: tudo entra em velocidade constante, para de uma vez, sem peso nenhum. Funciona, mas parece apresentação de 2008.",
      },
      {
        type: "video",
        items: [
          { src: `${V}/slide-01-cru.mp4`, poster: `${V}/slide-01-cru.webp`, label: "Sem regras: movimento linear, sem peso, sem respiro." },
          { src: `${V}/slide-01.mp4`, poster: `${V}/slide-01.webp`, label: "Com regras: molas, achatamento leve e tudo na batida.", sound: true },
        ],
        caption: "Mesma página, mesmos tempos. A única diferença é a curva de movimento. Os dois vídeos foram renderizados para este artigo.",
      },
      {
        type: "p",
        text: "Repara na direita. As mensagens chegam com uma mola: aceleram, passam um tiquinho do ponto e assentam. O balão achata de leve quando chega, como se tivesse peso. O fundo respira. Nada disso é sorte. Cada detalhe veio de uma regra escrita antes de a IA começar.",
      },
      { type: "link", slug: "movimento-com-peso-linear-suave-mola", text: "Quer entender por que a mola parece ter peso?" },
      { type: "h2", text: "O passo a passo que eu segui" },
      { type: "p", lead: "1. Briefing.", text: "Para quem é, o que cada slide precisa dizer e qual o CTA. No caso da Clint: um lead chega no WhatsApp, a IA responde, vira oportunidade no CRM, a reunião é marcada, a Aura acompanha e o carrossel fecha com \"Comece seu teste grátis\"." },
      { type: "p", lead: "2. Storyboard por batida.", text: "Cada meio segundo de cada slide numa tabela: o que aparece, o que se mexe, onde está o cursor e qual som toca. Parece exagero, mas é o que deixa a IA sem espaço para inventar." },
      { type: "p", lead: "3. Regras num arquivo.", text: "Formato, ritmo, curvas, cores, o que é proibido. Esse arquivo é o assunto do próximo tutorial." },
      { type: "p", lead: "4. Página por slide.", text: "Um HTML para cada slide, cada um com o seu seek(t)." },
      { type: "p", lead: "5. Render e som.", text: "Playwright fotografa, ffmpeg monta, a trilha entra normalizada para o volume do Instagram." },
      { type: "p", lead: "6. Crítica.", text: "Uma folha com um quadro por batida, lado a lado. É olhando essa folha que os defeitos aparecem." },
      { type: "h2", text: "O resultado" },
      {
        type: "video",
        items: [
          { src: `${V}/slide-01.mp4`, poster: `${V}/slide-01.webp`, label: "01 · O lead", sound: true },
          { src: `${V}/slide-02.mp4`, poster: `${V}/slide-02.webp`, label: "02 · Atendimento", sound: true },
          { src: `${V}/slide-03.mp4`, poster: `${V}/slide-03.webp`, label: "03 · CRM", sound: true },
          { src: `${V}/slide-04.mp4`, poster: `${V}/slide-04.webp`, label: "04 · Agenda e follow-up", sound: true },
          { src: `${V}/slide-05.mp4`, poster: `${V}/slide-05.webp`, label: "05 · Aura", sound: true },
          { src: `${V}/slide-06.mp4`, poster: `${V}/slide-06.webp`, label: "06 · Sua vez", sound: true },
        ],
        caption: "Os 6 slides em 1080×1350, 30 quadros por segundo, cada um com loop próprio. Aqui no blog estão em versão reduzida para carregar rápido. Dados e conversas são ilustrativos.",
      },
      { type: "link", slug: "claude-md-regras-para-ia-animar-bem", text: "As regras que a IA lê antes de começar estão aqui." },
      {
        type: "p",
        text: "E aí, faz mais sentido agora? A IA não é um editor de vídeo. Ela é ótima em escrever código que segue regras. Quanto melhores as regras, melhor o vídeo. No próximo tutorial eu abro o arquivo onde essas regras moram, o CLAUDE.md, e mostro cada defeito que virou uma linha nele.",
      },
      {
        type: "p",
        text: "Crédito a quem me abriu esse caminho: o fio do Movez sobre carrosséis animados com IA e o trabalho do Felipe Borges, que publicou a skill criador-de-carrosseis-simples. Os links estão nas fontes abaixo.",
      },
    ],
  },
  {
    slug: "claude-md-regras-para-ia-animar-bem",
    cover: "/blog/claude-md-regras-para-ia-animar-bem.webp",
    title: "O CLAUDE.md: as regras que fazem a IA animar bem",
    description:
      "Um arquivo de texto com as regras do projeto é o que separa uma animação de robô de um carrossel com peso e ritmo. Cada regra nasceu de um defeito real.",
    date: "2026-10-14",
    category: "ai",
    tags: ["IA", "Motion", "Tutorial", "Claude"],
    readMinutes: 6,
    lab: true,
    sources: FONTES,
    related: {
      href: "/cases/intelligence",
      title: "Clint Intelligence",
      body: "Na prática: a Aura e os agentes que aparecem no carrossel deste tutorial.",
    },
    blocks: [
      {
        type: "p",
        text: "Você já explicou a mesma coisa três vezes para alguém e na quarta pensou \"devia ter escrito isso\"? Com IA é igual. Toda conversa começa do zero. Se a regra não está escrita, ela não existe.",
      },
      {
        type: "p",
        text: "No tutorial anterior eu mostrei como a IA transforma código em vídeo. Agora quero mostrar o arquivo que mais pesou no resultado do carrossel da Clint: o CLAUDE.md. Vamos nessa?",
      },
      { type: "h2", text: "O que é o CLAUDE.md" },
      {
        type: "p",
        text: "É um arquivo de texto que fica na pasta do projeto. O Claude lê esse arquivo antes de começar qualquer tarefa ali. Funciona como o manual da casa: formato, ritmo, cores, o que pode e o que não pode. Você escreve uma vez e ele vale para todas as conversas daquele projeto.",
      },
      {
        type: "p",
        text: "A diferença para um prompt comum é que o prompt some quando a conversa acaba. O CLAUDE.md fica. E cresce: cada defeito que aparece duas vezes vira uma linha nova.",
      },
      { type: "h2", text: "Como eu organizei o meu" },
      {
        type: "p",
        text: "Dividi em blocos curtos. Cada bloco responde a uma pergunta que a IA faria se pudesse.",
      },
      { type: "p", lead: "Formato e entrega.", text: "Qual tamanho, quantos quadros por segundo, quanto dura cada slide, como é o loop." },
      { type: "p", lead: "Movimento.", text: "Que curva usar, quanto pode rebotar, de quanto em quanto tempo algo acontece." },
      { type: "p", lead: "Direção de arte.", text: "Cores, fontes e uma lista do que é proibido." },
      { type: "p", lead: "Marca e conteúdo.", text: "O que a empresa promete e o que não pode ser afirmado sem fonte." },
      { type: "p", lead: "Fidelidade.", text: "Interface real é captura real. O que for desenhado leva o selo \"demonstração conceitual\"." },
      { type: "p", lead: "Processo.", text: "A ordem de trabalho, com uma parada obrigatória para eu aprovar antes de renderizar." },
      {
        type: "code",
        label: "Trecho do CLAUDE.md do carrossel (resumido)",
        text: `## Formato
- 1080×1350, 30 fps, um MP4 por slide.
- Slides de 4, 6 ou 8 s (120 BPM, uma batida a cada 0,5 s).
- O quadro 0 funciona sozinho: título e estado legíveis.
- Loop sem emenda: o último quadro volta ao primeiro.

## Movimento
- Nada linear. Molas com no máximo um rebote mínimo.
- Peso: achatar e esticar de leve, conservando o volume.
- Um acontecimento a cada 2 a 4 s, microinterações na batida.

## Proibido
- Números sem fonte, interface inventada fingindo ser real.
- Fade em tudo, explosão de partículas, robô humanoide.`,
      },
      { type: "h2", text: "Cada regra nasceu de um defeito" },
      {
        type: "p",
        text: "Essa é a parte que eu mais gosto. Depois de cada render, eu monto uma folha com um quadro por batida e olho com calma. Na primeira rodada do carrossel da Clint apareceram cinco defeitos. Escolha um e veja a regra que ele gerou.",
      },
      { type: "link", slug: "o-diretor-e-o-critico-ia-com-rodadas-de-critica", text: "Como funciona a rodada de crítica, com a ficha de notas real:" },
      { type: "scene", id: "rule-fixes", data: {} },
      {
        type: "p",
        text: "Repara que nenhuma regra é genérica tipo \"faça bonito\". Todas são verificáveis: 36 px, um foco por batida, nada cortado em nenhum quadro. Se eu não consigo checar, a IA também não consegue.",
      },
      { type: "h2", text: "A parada obrigatória" },
      {
        type: "p",
        text: "A regra que mais me poupou tempo não é de animação. É a de processo: antes de escrever qualquer HTML, a IA me mostra o briefing, o storyboard e o inventário de imagens, e espera o meu ok.",
      },
      {
        type: "p",
        text: "Corrigir uma linha do storyboard leva um minuto. Corrigir um slide já renderizado leva bem mais. Foi nessa parada que eu juntei o briefing com a batida da trilha, e o carrossel ficou com uma música só passando de um slide para o outro.",
      },
      { type: "h2", text: "Como começar o seu" },
      { type: "p", lead: "1.", text: "Crie o arquivo CLAUDE.md na pasta do projeto, com os blocos de formato e movimento. Dez linhas bastam." },
      { type: "p", lead: "2.", text: "Peça um slide só. Olhe quadro a quadro." },
      { type: "p", lead: "3.", text: "Para cada defeito, escreva a regra de um jeito que dê para conferir." },
      { type: "p", lead: "4.", text: "Rode de novo. Quando o mesmo defeito não voltar, a regra funcionou." },
      {
        type: "video",
        items: [
          { src: `${V}/slide-02.mp4`, poster: `${V}/slide-02.webp`, label: "Slide 2: contêiner cresce com a conversa, nada cortado.", sound: true },
          { src: `${V}/slide-05.mp4`, poster: `${V}/slide-05.webp`, label: "Slide 5: destaque no próprio elemento, dado dentro da resposta.", sound: true },
        ],
        caption: "Dois slides depois das regras. Conversas e dados são ilustrativos.",
      },
      {
        type: "p",
        text: "No fim, o CLAUDE.md é menos sobre IA e mais sobre direção. É o que um diretor de arte diria ao lado da mesa, só que escrito. No próximo tutorial eu junto tudo: briefing, storyboard e a batida da música, slide por slide.",
      },
      {
        type: "p",
        text: "A estrutura de regras deste projeto foi inspirada no material do Movez e na skill do Felipe Borges, adaptada para a Clint. Os links estão nas fontes.",
      },
    ],
  },

  {
    slug: "carrossel-vivo-do-briefing-a-batida",
    cover: "/blog/carrossel-vivo-do-briefing-a-batida.webp",
    title: "Carrossel vivo do briefing à batida da música",
    description:
      "Como sair de uma ideia e chegar em 6 slides animados com uma trilha só: briefing, storyboard por meio segundo e som sincronizado. Com o carrossel da Clint aberto, slide por slide.",
    date: "2026-10-14",
    category: "ai",
    tags: ["Motion", "Carrossel", "Tutorial", "Som"],
    readMinutes: 8,
    lab: true,
    sources: FONTES,
    related: {
      href: "/cases/intelligence",
      title: "Clint Intelligence",
      body: "Na prática: a Aura e os agentes que aparecem no carrossel deste tutorial.",
    },
    blocks: [
      {
        type: "p",
        text: "Quando eu comecei este carrossel, tinha três coisas separadas na cabeça: o briefing, a animação e a música. Na primeira conversa com a IA eu percebi que isso era um erro. Se a música vem depois, a animação nunca cai certinho nela. Pois é. Juntei tudo num documento só, e é esse caminho que eu mostro aqui. Vamos nessa?",
      },
      { type: "h2", text: "1. O briefing em uma frase" },
      {
        type: "p",
        text: "Antes de qualquer cor, eu escrevi a história do carrossel numa linha: um lead chama no WhatsApp, a IA responde na hora, a conversa vira oportunidade, a reunião é marcada, a Aura mostra o que está parado e o carrossel termina no teste grátis. Seis slides, um para cada passo.",
      },
      {
        type: "p",
        text: "Depois vieram as decisões que mudam o resultado: para quem é (quem vende pelo WhatsApp), qual a frase da marca (\"Você pensa. A Clint faz.\"), qual o CTA (teste grátis de 7 dias, confirmado no site) e o que eu não posso afirmar. Número sem fonte, por exemplo, não entra. Por isso as conversas e os dados do carrossel levam o selo de ilustrativo.",
      },
      {
        type: "p",
        text: "E um personagem que atravessa tudo. No nosso caso, o Beto, um lead fictício. Ele aparece no slide 1 esperando resposta, no 2 conversando com a Aura, no 3 virando cartão no CRM e no 4 marcando a reunião. Sem personagem, cada slide vira um anúncio solto.",
      },
      { type: "link", slug: "referencia-sem-copia-identidade-da-marca", text: "Como o Beto e os slides ganharam a cara da Clint:" },
      { type: "h2", text: "2. A música define o relógio" },
      {
        type: "p",
        text: "Escolhi 120 batidas por minuto. Isso dá uma batida a cada meio segundo e um compasso a cada 2 segundos. Por isso os slides têm 6 ou 8 segundos: 3 ou 4 compassos certinhos. Se um slide tivesse 7 segundos, a emenda do loop cairia no meio de um compasso e o ouvido percebe.",
      },
      {
        type: "p",
        text: "A trilha é uma só, em Fá maior, com quatro acordes que se repetem. Cada slide toca o trecho seguinte da mesma música. Quem passa de um slide para o outro sente que a música continua.",
      },
      { type: "h2", text: "3. O storyboard por meio segundo" },
      {
        type: "p",
        text: "Aqui está o coração do método. Cada slide virou uma tabela com uma linha por batida: o tempo, o que acontece na tela, onde está o cursor e qual som toca. O carrossel inteiro deu 88 linhas. Parece muito, mas cada linha é uma decisão que a IA não precisa inventar.",
      },
      {
        type: "p",
        text: "Usei só quatro sons: pop para algo que aparece, clique para interação, whoosh para movimento grande e uma batida forte para o momento principal do slide. Escolha um slide e veja a partitura dele.",
      },
      { type: "scene", id: "beat-board", data: {} },
      {
        type: "p",
        text: "Repara no slide 2: a batida forte cai em 4,5 segundos, exatamente quando aparece \"Lead qualificado em 38 segundos\". Esse é o momento que eu quero que fique. Um momento forte por slide, não mais.",
      },
      { type: "h2", text: "4. A regra do loop" },
      {
        type: "p",
        text: "Cada slide precisa terminar exatamente como começou. Então, a partir da batida 6,0, tudo volta para o lugar. E nenhum som toca nos últimos 0,8 segundo, para não estalar na emenda. A trilha é gerada de forma circular: o finalzinho de cada som volta para o começo do arquivo. No vídeo, a diferença entre o último quadro e o primeiro ficou abaixo de 1 numa escala de 0 a 255. O olho não vê.",
      },
      { type: "h2", text: "5. O som entra pelo mesmo relógio" },
      {
        type: "p",
        text: "A trilha também foi escrita em código, a partir da mesma lista de tempos do storyboard. Isso garante que o pop do som e o pop da tela acontecem no mesmo quadro. No fim, o volume é ajustado para -14 LUFS, o padrão que as redes usam para não abaixar nem estourar o áudio.",
      },
      {
        type: "p",
        text: "Uma coisa que aprendi do jeito difícil: quando eu redesenhei o slide 1, as mensagens mudaram de tempo e o som continuou no tempo antigo. Ficou estranho, mesmo sem ninguém saber dizer por quê. Atualizei a lista de sons e regerei a trilha. Storyboard, tela e som têm que andar juntos sempre.",
      },
      { type: "link", slug: "movimento-com-peso-linear-suave-mola", text: "Som e curva andam juntos. As curvas estão explicadas aqui:" },
      { type: "h2", text: "O carrossel completo" },
      {
        type: "video",
        items: [
          { src: `${V}/slide-01.mp4`, poster: `${V}/slide-01.webp`, label: "01 · O lead · 6 s", sound: true },
          { src: `${V}/slide-02.mp4`, poster: `${V}/slide-02.webp`, label: "02 · Atendimento · 8 s", sound: true },
          { src: `${V}/slide-03.mp4`, poster: `${V}/slide-03.webp`, label: "03 · CRM · 8 s", sound: true },
          { src: `${V}/slide-04.mp4`, poster: `${V}/slide-04.webp`, label: "04 · Agenda · 8 s", sound: true },
          { src: `${V}/slide-05.mp4`, poster: `${V}/slide-05.webp`, label: "05 · Aura · 8 s", sound: true },
          { src: `${V}/slide-06.mp4`, poster: `${V}/slide-06.webp`, label: "06 · Sua vez · 6 s", sound: true },
        ],
        caption: "Ligue o som em cada slide e repare nos acertos. Conversas e dados são ilustrativos.",
      },
      {
        type: "p",
        text: "Se você for fazer o seu, comece pelo papel: a frase, o personagem, a tabela por batida. A animação fica fácil quando o storyboard está pronto. No próximo tutorial eu entro no detalhe que mais muda a sensação do movimento: a curva.",
      },
    ],
  },
  {
    slug: "movimento-com-peso-linear-suave-mola",
    cover: "/blog/movimento-com-peso-linear-suave-mola.webp",
    title: "Movimento com peso: linear, suavizado e mola",
    description:
      "Por que algumas animações parecem vivas e outras parecem máquina. Um laboratório interativo com as três curvas e o achatamento que dá peso, usando o carrossel da Clint como exemplo.",
    date: "2026-10-14",
    category: "ux",
    tags: ["Motion", "Microinteração", "Tutorial"],
    readMinutes: 6,
    lab: true,
    sources: [
      ...FONTES,
      "Disney, os 12 princípios da animação (Frank Thomas e Ollie Johnston, The Illusion of Life)",
      "Material Design, Easing and duration: https://m3.material.io/styles/motion/easing-and-duration",
    ],
    related: {
      href: "/cases/intelligence",
      title: "Clint Intelligence",
      body: "Na prática: a Aura e os agentes que aparecem no carrossel deste tutorial.",
    },
    blocks: [
      {
        type: "p",
        text: "Sabe aquela sensação de que uma animação está \"estranha\", mas você não sabe dizer por quê? Na maioria das vezes, não é a duração nem a cor. É a curva. O jeito como a coisa acelera e freia.",
      },
      {
        type: "p",
        text: "Neste tutorial eu deixo as três curvas lado a lado para você sentir a diferença na mão, e mostro as duas regras de peso que eu usei no carrossel da Clint. Vamos nessa?",
      },
      { type: "scene", id: "easing-lab", data: {} },
      { type: "h2", text: "Linear: o movimento de robô" },
      {
        type: "p",
        text: "Linear significa velocidade constante. Começa já correndo e para de uma vez. Nada no mundo real se mexe assim, por isso o olho estranha. É o que a IA entrega quando ninguém diz nada. Linear só faz sentido no que é mecânico de verdade, como um ponteiro de relógio.",
      },
      { type: "h2", text: "Suavizada: acelera e freia" },
      {
        type: "p",
        text: "A curva suavizada começa devagar, acelera no meio e freia no final. Já parece muito mais natural. Ela é ótima para coisas que só mudam de lugar, sem chegar em lugar nenhum: uma faixa de luz deslizando no fundo, uma régua desenhando.",
      },
      { type: "h2", text: "Mola: chega com peso" },
      {
        type: "p",
        text: "A mola acelera, passa um tiquinho do ponto e volta. É assim que um objeto com massa para. Usei mola em tudo que chega: as mensagens no celular, os cartões, a pílula do CTA. A regra foi amortecimento 0,8, que dá no máximo um rebote mínimo. Mais que isso vira desenho animado, e não é o tom de uma marca de vendas.",
      },
      {
        type: "code",
        label: "A mola usada no carrossel",
        text: `// mola sub-amortecida, z = 0,8: no máximo um rebote mínimo
function spring(x, w = 15, z = 0.8) {
  if (x <= 0) return 0;
  const wd = w * Math.sqrt(1 - z * z);
  const e = Math.exp(-z * w * x);
  return 1 - e * (Math.cos(wd * x) + (z * w / wd) * Math.sin(wd * x));
}`,
      },
      {
        type: "p",
        text: "Um detalhe que faz diferença: essa mola é uma fórmula, não uma simulação. Ela responde só ao tempo. Isso combina com o que vimos no primeiro tutorial: o mesmo instante sempre gera o mesmo quadro.",
      },
      { type: "link", slug: "como-a-ia-faz-video-carrossel-animado", text: "Por que o quadro depende só do tempo:" },
      { type: "h2", text: "As duas regras de peso" },
      {
        type: "p",
        lead: "Achatar ao chegar.",
        text: "Quando um balão pousa, ele achata 6% e volta. Fica mais largo na mesma medida em que fica mais baixo, para conservar o volume. Ninguém nota conscientemente, mas todo mundo sente.",
      },
      {
        type: "p",
        lead: "Respirar parado.",
        text: "Elemento parado por muito tempo parece congelado. O celular sobe e desce 10 pixels ao longo do slide inteiro, num seno que fecha certinho com o loop. Não é animação, é respiração.",
      },
      {
        type: "video",
        items: [
          { src: `${V}/slide-01-cru.mp4`, poster: `${V}/slide-01-cru.webp`, label: "Linear, sem achatar, sem respirar." },
          { src: `${V}/slide-01.mp4`, poster: `${V}/slide-01.webp`, label: "Mola, achatamento de 6% e respiração.", sound: true },
        ],
        caption: "O mesmo slide, nos mesmos tempos. Só as curvas mudaram.",
      },
      { type: "h2", text: "Qual curva usar" },
      {
        type: "ul",
        items: [
          "Algo que chega ou aparece: mola.",
          "Algo que só muda de lugar ou de cor: suavizada.",
          "Algo mecânico de verdade, como um contador: linear.",
          "Algo parado por mais de 2 segundos: uma respiração bem pequena.",
          "Um clique: o botão afunda uns 5% e volta em menos de um quarto de segundo.",
        ],
      },
      {
        type: "p",
        text: "E aí, qual curva você mais usa hoje? Se a resposta for \"a padrão da ferramenta\", experimenta trocar só isso no próximo protótipo. É a mudança mais barata com o maior efeito que eu conheço em motion.",
      },
    ],
  },
  {
    slug: "referencia-sem-copia-identidade-da-marca",
    cover: "/blog/referencia-sem-copia-identidade-da-marca.webp",
    title: "Referência sem cópia: como levar a identidade da marca para o motion",
    description:
      "A primeira versão do carrossel estava correta e sem cara de Clint. Como eu usei o site, o Figma e o sistema de marca da Aura para extrair um sistema visual, sem copiar telas.",
    date: "2026-10-14",
    category: "ds",
    tags: ["Marca", "Motion", "Design System", "Tutorial"],
    readMinutes: 6,
    lab: true,
    sources: FONTES,
    related: {
      href: "/cases/intelligence",
      title: "Clint Intelligence",
      body: "Na prática: a Aura e os agentes que aparecem no carrossel deste tutorial.",
    },
    blocks: [
      {
        type: "p",
        text: "A primeira versão do carrossel passou em todos os testes: loop perfeito, som no volume certo, tudo na batida. E mesmo assim, quando eu olhei, faltava alguma coisa. Faltava a Clint. Era um carrossel escuro e liso que poderia ser de qualquer SaaS.",
      },
      {
        type: "p",
        text: "Este tutorial é sobre essa segunda volta: como eu peguei a identidade da marca e levei para o movimento, sem cair na tentação de copiar telas. Vamos nessa?",
      },
      { type: "h2", text: "Junte as fontes certas" },
      {
        type: "p",
        text: "Usei três fontes. Os prints do hero e da tela de conversa do site. O arquivo de Figma do site, de onde extraí as imagens originais: avatares 3D, fundos, ícones. E o documento do sistema de marca da Aura, que define o símbolo, as cores e como ele pode ou não ser usado.",
      },
      {
        type: "p",
        text: "Uma dica: o arquivo .fig é um pacote compactado. Dá para abrir e extrair as imagens dele mesmo sem acesso à API do Figma. Foram 717 imagens. Montei folhas de miniaturas numeradas para escolher com calma o que servia.",
      },
      { type: "h2", text: "Extraia o sistema, não a tela" },
      {
        type: "p",
        text: "Copiar a tela do site para dentro do slide dá um resultado pobre: texto pequeno, informação demais, nada se mexe. O que eu fiz foi desmontar a referência em peças reutilizáveis. Cada peça virou uma classe num arquivo de marca que todos os slides carregam.",
      },
      { type: "scene", id: "reference-extract", data: {} },
      {
        type: "p",
        text: "Repara no slide 5. Antes, ele tinha um painel de indicadores ao fundo que não explicava nada, e um painel que dizia \"Clint AI\" quando o nome certo é Aura. Depois, o dado vive dentro da resposta da Aura, como barras que crescem na batida. A informação ficou maior e mais clara.",
      },
      { type: "h2", text: "Respeite as regras da marca" },
      {
        type: "p",
        text: "O sistema de marca da Aura tem regras explícitas: o símbolo não gira fora do eixo, não vira cor única e a palavra Aura nunca leva gradiente dentro do produto. Na pílula do CTA eu tinha colocado o símbolo girando. Tirei e troquei por um pulso de escala. Parece detalhe, mas é o tipo de coisa que o time de marca vê de longe.",
      },
      {
        type: "p",
        text: "Também foi assim com a tipografia. Testei três opções no mesmo slide: Sora, Poppins e Poppins Light. A decisão final foi Sora nos textos, Poppins Light nas pílulas de etapa e o símbolo da Clint nelas. Rótulos como \"Interface real da Clint\" saíram da fonte mono e foram para Sora.",
      },
      { type: "link", slug: "o-diretor-e-o-critico-ia-com-rodadas-de-critica", text: "Foi a crítica que mostrou que faltava marca:" },
      { type: "h2", text: "O passo a passo" },
      { type: "p", lead: "1.", text: "Junte prints, arquivo de design e o guia de marca. Sem guia, o site em produção é a referência." },
      { type: "p", lead: "2.", text: "Liste as peças: luz ou fundo, superfície, forma de selo, símbolo, tipografia, uma cor de destaque." },
      { type: "p", lead: "3.", text: "Escreva cada peça uma vez, num arquivo compartilhado por todos os slides." },
      { type: "p", lead: "4.", text: "Faça um slide de teste em três variações e escolha olhando no tamanho do celular." },
      { type: "p", lead: "5.", text: "Confira as proibições do guia antes de animar o símbolo." },
      {
        type: "p",
        text: "Referência boa não é a que você copia melhor. É a que você entende tão bem que consegue criar uma tela nova que parece ter vindo dela. No próximo tutorial eu mostro o processo de crítica que me fez perceber que a primeira versão não estava boa.",
      },
      {
        type: "p",
        text: "As imagens e o sistema de marca usados aqui são da Clint, usados com autorização para este exemplo.",
      },
    ],
  },
  {
    slug: "o-diretor-e-o-critico-ia-com-rodadas-de-critica",
    cover: "/blog/o-diretor-e-o-critico-ia-com-rodadas-de-critica.webp",
    title: "O diretor e o crítico: como fazer a IA melhorar o próprio trabalho",
    description:
      "Separar quem cria de quem avalia muda o resultado. As rodadas de crítica do carrossel da Clint, a ficha de notas, a folha de contato e a skill que organiza tudo isso.",
    date: "2026-10-14",
    category: "ai",
    tags: ["IA", "Processo", "Tutorial", "Claude"],
    readMinutes: 7,
    lab: true,
    sources: [
      ...FONTES,
      "Alex (@growithalex), carrosséis que serviram de base para a gramática da skill: https://www.instagram.com/growithalex/",
    ],
    related: {
      href: "/cases/intelligence",
      title: "Clint Intelligence",
      body: "Na prática: a Aura e os agentes que aparecem no carrossel deste tutorial.",
    },
    blocks: [
      {
        type: "p",
        text: "Você já revisou o próprio texto e não achou nenhum erro, e aí outra pessoa leu e achou três na primeira linha? Com a IA acontece a mesma coisa. Quando ela cria e avalia no mesmo fôlego, ela tende a gostar do que fez.",
      },
      {
        type: "p",
        text: "A solução que funcionou para mim foi separar os papéis: um diretor que cria e um crítico que avalia com uma régua fixa. Este é o último tutorial da série e fecha o ciclo. Vamos nessa?",
      },
      { type: "h2", text: "O diretor cria, o crítico mede" },
      {
        type: "p",
        text: "Na prática, é a mesma IA em dois momentos diferentes. No primeiro, ela recebe o storyboard e cria. No segundo, ela recebe só o resultado e uma ficha de critérios, e precisa dar nota. A regra é simples: qualquer nota abaixo de 8 volta para o diretor, com o motivo escrito.",
      },
      { type: "h2", text: "A folha de contato" },
      {
        type: "p",
        text: "O crítico não assiste ao vídeo. Ele olha uma folha com um quadro por batida, lado a lado. Vídeo engana: o movimento distrai e você não vê o texto cortado que aparece por meio segundo. Na folha, o defeito fica parado esperando você.",
      },
      {
        type: "p",
        text: "Também tem um teste que nenhum olho faz bem: comparar o último quadro com o primeiro, pixel a pixel. Se a diferença média passar de 1 numa escala de 0 a 255, o loop dá um tranco. Esse teste roda sozinho a cada render.",
      },
      { type: "h2", text: "A ficha" },
      {
        type: "p",
        text: "Seis critérios, de 1 a 10, por slide: gancho no quadro 0, leitura no celular, suavidade, peso, sincronia do som e loop. Esta é a ficha real de uma das rodadas do carrossel da Clint.",
      },
      { type: "scene", id: "critique-scores", data: {} },
      {
        type: "p",
        text: "As duas notas 7 contam uma história interessante. O problema não era a animação. Era o texto dentro dos prints reais do produto, pequeno demais no celular. Nenhum ajuste de movimento resolvia. A saída foi redesenhar esses slides com elementos nativos e maiores: o celular de vidro no slide 2 e o painel da Aura no slide 5.",
      },
      { type: "h2", text: "Quando o crítico é você" },
      {
        type: "p",
        text: "A ficha pega o que é mensurável. O que não é mensurável continua sendo seu. Com quase todas as notas em 8 ou mais, eu olhei o carrossel e disse que faltava a cara da Clint. Isso nenhuma ficha teria pego. A IA é ótima crítica de regra. Gosto e marca ainda pedem um humano olhando.",
      },
      {
        type: "p",
        text: "Por isso o processo tem uma parada obrigatória antes de renderizar e outra depois de cada rodada. Eu aprovo, peço ajuste ou mudo a direção. Foram essas paradas que trouxeram o celular, a luz do hero e o símbolo da Aura para o carrossel.",
      },
      { type: "h2", text: "A skill que organiza tudo" },
      {
        type: "p",
        text: "Todo esse processo está empacotado numa skill para o Claude, a criador-de-carrosseis-simples, publicada pelo Felipe Borges. Uma skill é um pacote de instruções e referências que o Claude carrega quando a tarefa pede. Essa leva a estratégia do carrossel, a estrutura das seis posições, a ficha de crítica e o caminho para a versão viva, a mesma que vimos nesta série: HTML com seek(t), Playwright e ffmpeg.",
      },
      {
        type: "p",
        text: "A gramática de copy e de design da skill foi destilada dos carrosséis do Alex (@growithalex). Ela leva a gramática, não o conteúdo. É o mesmo princípio do tutorial anterior: referência sem cópia.",
      },
      { type: "h2", text: "O ciclo em cinco passos" },
      { type: "p", lead: "1.", text: "Diretor cria a partir do storyboard." },
      { type: "p", lead: "2.", text: "Render gera vídeo e folha de contato, e o teste de loop roda sozinho." },
      { type: "p", lead: "3.", text: "Crítico dá nota com a ficha e escreve o motivo de cada nota abaixo de 8." },
      { type: "p", lead: "4.", text: "Você olha o que a ficha não mede: marca, tom, gosto." },
      { type: "p", lead: "5.", text: "Todo defeito que se repete vira regra no CLAUDE.md." },
      {
        type: "p",
        text: "É isso. Seis tutoriais, um carrossel, e a lição que mais me marcou: a IA não substitui a direção. Ela executa muito bem quando alguém diz com clareza o que é bom. E aí, qual vai ser o seu primeiro carrossel vivo?",
      },
      { type: "link", slug: "claude-md-regras-para-ia-animar-bem", text: "Fechando o ciclo: como cada defeito vira regra." },
    ],
  },
];
