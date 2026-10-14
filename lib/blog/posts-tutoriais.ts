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
];
