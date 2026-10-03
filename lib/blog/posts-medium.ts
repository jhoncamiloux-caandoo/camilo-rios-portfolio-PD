/* Artigos do blog gerados a partir do Medium (texto integral) e dos rascunhos
   novos. Visuais animados com ícones inseridos por trecho; nada de travessão. */
import type { Post } from "./posts";

export const mediumPosts: Post[] = [
 {
  "slug": "acessibilidade-digital-melhora-a-experiencia-de-todos",
  "title": "Acessibilidade digital: por que ela melhora a experiência de todos",
  "description": "Uma frustração ao tentar cancelar um pedido virou o ponto de partida: por que acessibilidade é base de produto bem feito e um checklist prático para designers e devs.",
  "date": "2025-05-22",
  "category": "ux",
  "tags": [
   "Acessibilidade",
   "UX",
   "Design inclusivo"
  ],
  "cover": "/blog/acessibilidade-digital-melhora-a-experiencia-de-todos.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/acessibilidade-digital-por-que-ela-melhora-a-experi%C3%AAncia-de-todos-c10b154c8268",
  "readMinutes": 3,
  "related": {
   "href": "/cases/scale",
   "title": "Clint Scale",
   "body": "Na prática: um design system explorável, com tokens, componentes, contraste e governança."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Sabe aquela sensação de frustração quando você só quer cancelar um pedido no iFood e simplesmente não encontra o botão? Pois é. Isso aconteceu comigo essa semana."
   },
   {
    "type": "p",
    "text": "Eu estava com pressa, pedi errado e pensei: “tranquilo, é só cancelar aqui rapidinho”. Só que esse “aqui” não era tão simples assim."
   },
   {
    "type": "p",
    "text": "Rolei a tela pra cima, pra baixo, fui no ícone do pedido, no suporte, nas entrelinhas do texto… nada."
   },
   {
    "type": "p",
    "text": "No fim, perdi tempo, fiquei irritado e não consegui resolver meu problema."
   },
   {
    "type": "p",
    "text": "Agora, imagina se eu tivesse alguma deficiência visual, motora ou cognitiva."
   },
   {
    "type": "p",
    "text": "Se pra mim já foi difícil com visão 100%, imagina pra quem depende de leitor de tela ou navega só com teclado?"
   },
   {
    "type": "p",
    "text": "Esse tipo de situação é mais comum do que parece, e mostra como a falta de acessibilidade afeta diretamente a experiência do usuário."
   },
   {
    "type": "h2",
    "text": "Acessibilidade é sobre facilitar, não complicar"
   },
   {
    "type": "p",
    "text": "Muita gente ainda pensa que acessibilidade digital é algo que serve só pra uma “minoria”. Mas olha só esses dados:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "stats",
     "items": [
      {
       "value": "16%",
       "label": "da população mundial vive com algum tipo de deficiência",
       "source": "OMS, 2023",
       "icon": "users"
      },
      {
       "value": "2,5 bi",
       "label": "de pessoas usam tecnologias assistivas",
       "source": "ONU, 2022",
       "icon": "accessibility"
      },
      {
       "value": "3%",
       "label": "dos sites são considerados acessíveis de verdade",
       "source": "WebAIM, 2023",
       "icon": "globe"
      },
      {
       "value": "45 mi",
       "label": "de pessoas no Brasil têm algum grau de deficiência",
       "source": "IBGE, Censo 2022",
       "icon": "map"
      },
      {
       "value": "70%",
       "label": "dos usuários com deficiência abandonam um site inacessível",
       "source": "Click-Away Pound, 2021",
       "icon": "x"
      }
     ]
    },
    "caption": "Os dados citados no artigo, cada um com a sua fonte."
   },
   {
    "type": "scene",
    "id": "a11y-stats",
    "data": {
     "items": [
      "16% da população mundial vive com algum tipo de deficiência (OMS, 2023)",
      "Mais de 2,5 bilhões de pessoas usam tecnologias assistivas (ONU, 2022)",
      "Apenas 3% dos sites da web são considerados acessíveis de verdade (WebAIM, 2023)",
      "No Brasil, mais de 45 milhões de pessoas têm algum grau de deficiência (IBGE, Censo 2022)",
      "70% dos usuários com deficiência abandonam um site inacessível (Click-Away Pound, 2021)"
     ]
    }
   },
   {
    "type": "p",
    "text": "Ou seja: acessibilidade é para todos. Não é um “recurso extra”, é parte da base de um produto digital bem feito."
   },
   {
    "type": "h2",
    "text": "Acessibilidade e experiência do usuário andam juntas"
   },
   {
    "type": "p",
    "text": "Se o botão de cancelar pedido do iFood tivesse sido mais visível, mais intuitivo ou estivesse com hierarquia visual clara, talvez eu não estivesse aqui contando essa história."
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Sem acessibilidade",
      "icon": "alert",
      "items": [
       "Botão escondido",
       "Mais frustração",
       "Mais erros",
       "Abandono"
      ]
     },
     "right": {
      "title": "Com acessibilidade",
      "icon": "accessibility",
      "items": [
       "Reduz frustração",
       "Evita erros",
       "Aumenta confiança",
       "Amplia o público"
      ]
     }
    },
    "caption": "O mesmo produto: o que muda quando ele é pensado para todo mundo."
   },
   {
    "type": "p",
    "text": "Isso mostra o quanto acessibilidade está diretamente ligada à usabilidade, e ao quanto um bom design precisa prever diferentes contextos de uso, habilidades e limitações."
   },
   {
    "type": "p",
    "text": "Um produto acessível:"
   },
   {
    "type": "ul",
    "items": [
     "reduz frustração",
     "evita erros",
     "aumenta confiança",
     "amplia o público",
     "melhora o desempenho de todos os usuários"
    ]
   },
   {
    "type": "scene",
    "id": "a11y-simulator",
    "data": {
     "title": "Experimente a mesma tela de outros jeitos",
     "body": "Escolha uma simulação e veja como o mesmo card muda para quem tem baixa visão, daltonismo, navega só com teclado ou usa leitor de tela."
    }
   },
   {
    "type": "p",
    "text": "E mais: previne problemas legais. Nos Estados Unidos, por exemplo, o número de processos contra sites não acessíveis ultrapassou 4 mil casos por ano. No Brasil, a Lei Brasileira de Inclusão (nº 13.146/2015) já estabelece diretrizes obrigatórias para acessibilidade digital."
   },
   {
    "type": "h2",
    "text": "Checklist prático de acessibilidade para designers e devs"
   },
   {
    "type": "p",
    "text": "Quer melhorar a experiência de todo mundo no seu produto? Aqui vai um checklist simples, mas poderoso:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "checklist",
     "items": [
      {
       "label": "Contraste mínimo de 4.5:1",
       "icon": "contrast"
      },
      {
       "label": "Texto alternativo nas imagens",
       "icon": "image"
      },
      {
       "label": "Labels visíveis nos campos",
       "icon": "type"
      },
      {
       "label": "Navegação completa com teclado",
       "icon": "keyboard"
      },
      {
       "label": "HTML semântico",
       "icon": "code"
      },
      {
       "label": "Não depender só de cor",
       "icon": "eye"
      }
     ]
    },
    "caption": "Seis itens do checklist que mais aparecem em revisão de interface."
   },
   {
    "type": "ul",
    "items": [
     "Contraste mínimo de 4.5:1 entre texto e fundo",
     "Textos alternativos nas imagens (alt tags)",
     "Campos de formulário com labels visíveis",
     "Tamanho da fonte ajustável pelo navegador",
     "Navegação completa com teclado (sem mouse)",
     "Tags HTML semânticas (como , , )",
     "Botões grandes com área de clique confortável",
     "Erros com feedbacks claros (ex: “Preencha seu CPF no formato 000.000.000-00”)",
     "Evite depender só de cores para transmitir mensagens",
     "Links com rótulos descritivos (ex: “ver detalhes do produto” ao invés de “clique aqui”)"
    ]
   },
   {
    "type": "p",
    "text": "Dica de ouro: valide seu layout com ferramentas como WAVE, axe ou os recursos nativos do Figma."
   },
   {
    "type": "h2",
    "text": "Acessibilidade é o design que pensa em todo mundo"
   },
   {
    "type": "quote",
    "text": "Acessibilidade digital não é só uma exigência técnica. É um ato de empatia. É pensar no produto como algo que deve servir a todas as pessoas, não só à maioria."
   },
   {
    "type": "p",
    "text": "Se você está desenhando interfaces, escrevendo código ou planejando fluxos, você tem o poder de incluir ou excluir pessoas."
   },
   {
    "type": "p",
    "text": "E se você já passou por alguma frustração como a minha com o iFood, sabe como um detalhe mal feito pode arruinar uma experiência simples."
   },
   {
    "type": "p",
    "text": "Então, da próxima vez que estiver revisando um design, pergunte:"
   },
   {
    "type": "quote",
    "text": "“Será que qualquer pessoa consegue usar isso com conforto e autonomia?”"
   },
   {
    "type": "quote",
    "text": "Porque acessibilidade não é sobre cumprir tabela. É sobre garantir experiências digitais mais justas, humanas e memoráveis."
   },
   {
    "type": "h2",
    "text": "O que mudou desde este texto"
   },
   {
    "type": "p",
    "text": "A WCAG 2.2, publicada pelo W3C em outubro de 2023, virou a referência atual. Ela trouxe critérios que conversam diretamente com o dia a dia de produto:"
   },
   {
    "type": "ul",
    "items": [
     "Foco visível que não fica escondido atrás de headers fixos ou banners.",
     "Área de toque mínima de 24 por 24 pixels para alvos interativos.",
     "Alternativa a gestos de arrastar, com botões ou cliques simples.",
     "Login sem depender de memorizar ou transcrever códigos."
    ]
   },
   {
    "type": "p",
    "text": "Na Europa, o European Accessibility Act passou a valer em junho de 2025 para vários produtos e serviços digitais. No Brasil, a Lei Brasileira de Inclusão já trata acessibilidade como direito. Ou seja: deixou de ser um extra."
   },
   {
    "type": "visual",
    "id": "contrast-check",
    "caption": "O mesmo texto em tons diferentes. A razão de contraste é calculada na hora e comparada com os limites da WCAG."
   },
   {
    "type": "p",
    "text": "Contraste é um dos critérios mais fáceis de checar e um dos mais esquecidos. Cinza claro em fundo branco parece elegante no Figma e some na tela do celular ao sol."
   },
   {
    "type": "h2",
    "text": "Vamos conversar?"
   },
   {
    "type": "p",
    "text": "Você já enfrentou algum desafio por conta de um design inacessível? Já tentou implementar boas práticas de acessibilidade nos seus projetos? Me conta nos comentários, bora trocar experiências e construir produtos mais inclusivos juntos."
   }
  ],
  "updated": "2026-10-01",
  "updateNote": "Revisado em outubro de 2026: incluí o que mudou desde a publicação e um novo visual para explicar a ideia central.",
  "lab": true
 },
 {
  "slug": "whiteboard-challenge-ux-product-design",
  "title": "Superando o whiteboard challenge: transformando pressão em criatividade no UX/Product Design",
  "description": "Como transformar a pressão do whiteboard challenge em uma demonstração do seu raciocínio: o que avaliam, como praticar e dicas para a hora H.",
  "date": "2025-03-18",
  "category": "career",
  "tags": [
   "Carreira",
   "Product Design",
   "Entrevista"
  ],
  "cover": "/blog/whiteboard-challenge-ux-product-design.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/superando-o-whiteboard-challenge-transformando-press%C3%A3o-em-criatividade-no-ux-product-design-11d0cdc85371",
  "readMinutes": 5,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: agentes de IA que agem dentro do CRM e deixam a pessoa no controle."
  },
  "updateNote": "Nota de atualização (2026): algumas ferramentas citadas mudaram ou foram substituídas desde a publicação. Vale olhar para o princípio de cada uma, não para o nome. Revisado em outubro de 2026: incluí o que mudou desde a publicação e um novo visual para explicar a ideia central.",
  "blocks": [
   {
    "type": "p",
    "text": "Você já passou pelo famoso “whiteboard challenge” em uma entrevista de ux/product design? Se sim, sabe bem o que é ter aquele frio na barriga enquanto precisa resolver um problema de design do zero, na frente de recrutadores, usando apenas um quadro branco ou um canvas digital, seja no Miro, FigJam ou outro similar, para estruturar suas ideias. Essa situação, que pode parecer um verdadeiro teste de fogo, é na verdade uma oportunidade de demonstrar todo o seu raciocínio, criatividade e, principalmente, como você lida com situações de pressão. Neste artigo, vamos conversar de forma descontraída e prática sobre como transformar esse desafio em um momento de aprendizado e evolução profissional."
   },
   {
    "type": "h2",
    "text": "O desafio na prática: o que é o whiteboard challenge?"
   },
   {
    "type": "p",
    "text": "O whiteboard challenge é uma etapa comum em entrevistas para vagas de design, onde você precisa resolver um problema real enquanto expõe seu processo de pensamento. Diferente de um teste escrito, aqui o foco está em mostrar como você organiza suas ideias, justifica suas escolhas e constrói uma solução funcional, tudo isso enquanto desenha e vai ajustando seu rascunho. Pense nele como aquele dia em que você precisou montar um móvel do IKEA sem olhar o manual: o nervosismo existe, mas cada passo que você dá vai mostrando sua capacidade de se adaptar e solucionar imprevistos."
   },
   {
    "type": "h2",
    "text": "Por que esse desafio gera tanta ansiedade?"
   },
   {
    "type": "p",
    "text": "Imagina estar em uma sala com todos os olhos voltados para você, como se cada traço no quadro definisse seu futuro profissional. Essa pressão é natural, ninguém espera que você tenha a solução perfeita logo de cara. O foco está no seu raciocínio e na sua habilidade de lidar com o inesperado. Assim como em um brainstorming com amigos, onde cada ideia é bem-vinda, o importante é demonstrar como você chega a uma solução, mesmo que ela precise de ajustes no decorrer do processo. Erros e correções são parte do aprendizado e podem, inclusive, contar pontos a seu favor."
   },
   {
    "type": "h2",
    "text": "Exemplos do cotidiano: transformando desafios em oportunidades"
   },
   {
    "type": "p",
    "text": "Vamos imaginar um cenário do dia a dia para deixar o conceito mais claro. Suponha que você precise organizar uma festa surpresa para um amigo. No começo, há uma confusão de ideias: local, decoração, lista de convidados e atividades. Você não consegue colocar tudo em ordem de imediato, mas começa a desenhar um fluxograma simples num papel, categorizando cada item, e aí, tudo se encaixa. O whiteboard challenge funciona de maneira semelhante. Durante uma entrevista, quando você desenha e organiza seus pensamentos em tempo real, mostra como consegue transformar o caos em uma estrutura lógica e funcional. Essa capacidade de organizar o pensamento, mesmo sob pressão, é o que os recrutadores mais valorizam."
   },
   {
    "type": "visual",
    "data": {
     "kind": "noise",
     "before": "Caos de ideias",
     "after": "Estrutura",
     "action": "Solução"
    },
    "caption": "O que o recrutador quer ver: o caos virando estrutura, em tempo real."
   },
   {
    "type": "h2",
    "text": "Recursos para treinar sem pressão"
   },
   {
    "type": "p",
    "text": "A boa notícia é que você pode treinar para dominar esse desafio sem a pressão de uma entrevista real. Existem diversas plataformas que simulam o whiteboard challenge e ajudam a aprimorar sua agilidade mental e técnica. Confira alguns recursos que podem fazer toda a diferença:"
   },
   {
    "type": "ul",
    "items": [
     "Designercize Um gerador de desafios aleatórios ideal para praticar sozinho ou com colegas. Ele estimula o improviso e a rapidez na hora de estruturar suas ideias.",
     "Miroverse Uma biblioteca repleta de templates que você pode utilizar para simular sessões de brainstorming e whiteboard challenges. Uma ótima forma de ver como outros profissionais estruturam suas ideias.",
     "Whiteboard challenge template no miro Um template específico para organizar o fluxo de pensamento durante o desafio. Ele ajuda a manter a lógica e a clareza na sua apresentação, evitando que você se perca na hora H.",
     "19 desafios de design para ux designers Uma lista com desafios variados que estimula a criatividade e melhora a sua abordagem na resolução de problemas. Ideal para treinar diferentes cenários e aumentar sua confiança."
    ]
   },
   {
    "type": "h2",
    "text": "Dicas práticas para arrasar no whiteboard challenge"
   },
   {
    "type": "p",
    "text": "Para transformar o desafio em uma experiência positiva e mostrar todo o seu potencial, aqui vão algumas dicas valiosas:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Entender o problema",
       "icon": "search"
      },
      {
       "label": "Pensar em voz alta",
       "icon": "mic"
      },
      {
       "label": "Rascunhar sem perfeição",
       "icon": "pen"
      },
      {
       "label": "Ajustar com feedback",
       "icon": "repeat"
      },
      {
       "label": "Concluir com clareza",
       "icon": "checkCircle"
      }
     ]
    },
    "caption": "O processo vale mais que o desenho final."
   },
   {
    "type": "ul",
    "items": [
     "Explique seu raciocínio em voz alta: Não se preocupe em ter a solução perfeita logo de início. O que interessa é acompanhar o seu fluxo de pensamento e entender como você chega às conclusões. Mesmo se você cometer algum erro, mostre como identifica e corrige o problema.",
     "Utilize exemplos do cotidiano: Conectar o desafio a situações reais pode facilitar a compreensão. Se estiver projetando uma interface para um aplicativo de delivery, por exemplo, imagine as dificuldades de fazer um pedido em um dia de chuva ou durante um pico de tráfego urbano.",
     "Não busque a perfeição visual: O objetivo não é desenhar um layout impecável, mas sim demonstrar sua capacidade de estruturar ideias e resolver problemas de forma criativa. Lembre-se: o que importa é o processo, não o produto final.",
     "Treine regularmente: Assim como um músico ensaia para um concerto, praticar whiteboard challenges regularmente vai te ajudar a se sentir mais confiante e preparado. Reserve momentos para simular essas situações e, se possível, faça isso em grupo para receber feedbacks construtivos.",
     "Peça opiniões e melhore continuamente: Se tiver a oportunidade, pratique com amigos ou colegas e peça feedback sobre sua abordagem. Esse retorno é essencial para identificar pontos de melhoria e ajustar sua metodologia de apresentação."
    ]
   },
   {
    "type": "quote",
    "text": "O whiteboard challenge pode parecer intimidador à primeira vista, mas é, na verdade, uma excelente oportunidade para mostrar sua capacidade de resolver problemas de maneira criativa e estratégica. Ao transformar a pressão em um exercício de aprendizado, você revela seu potencial e seu verdadeiro talento para lidar com desafios em tempo real. Lembre-se: cada rascunho, cada erro e cada correção fazem parte do processo de crescimento profissional."
   },
   {
    "type": "h2",
    "text": "Whiteboard challenge na era da IA"
   },
   {
    "type": "p",
    "text": "Com tanta coisa gerada por IA, muitos processos seletivos passaram a valorizar ainda mais o raciocínio ao vivo. O que importa é ver como você pensa: as perguntas que faz, as decisões que toma e como justifica cada uma."
   },
   {
    "type": "p",
    "text": "Pense em voz alta, declare suas suposições e mostre os trade-offs. Isso nenhuma ferramenta faz por você durante a conversa."
   },
   {
    "type": "p",
    "text": "E você, já enfrentou um whiteboard challenge? Como foi a experiência e quais dicas você tem para compartilhar? Deixe seu comentário e vamos continuar essa conversa, afinal, cada desafio é uma chance de evoluir no mundo do ux/product design!"
   }
  ],
  "updated": "2026-10-01"
 },
 {
  "slug": "design-alem-do-design-produto-growth-negocio",
  "title": "Design além do design: conectando produto, growth e negócio",
  "description": "Design não é só estética: como conectar design, produto e growth, com exemplos de Airbnb, Dropbox e Duolingo e o impacto direto em KPIs.",
  "date": "2025-03-12",
  "category": "growth",
  "tags": [
   "Product Design",
   "Growth",
   "Negócio"
  ],
  "cover": "/blog/design-alem-do-design-produto-growth-negocio.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/design-al%C3%A9m-do-design-conectando-produto-growth-e-neg%C3%B3cio-8b4f9b25fc2c",
  "readMinutes": 3,
  "related": {
   "href": "/cases/whatsapp-next",
   "title": "WhatsApp Next",
   "body": "Na prática: conteúdo, landing page e ads conectados, com 1.680 inscrições em 4 dias."
  },
  "blocks": [
   {
    "type": "h2",
    "text": "Design não é só estética: é estratégia, é crescimento, é impacto"
   },
   {
    "type": "p",
    "text": "Quando falamos em design, muita gente ainda pensa em algo meramente visual, focado em criar interfaces bonitas e bem organizadas. Mas no mundo dos produtos digitais, o design vai muito além disso. Ele está no centro da estratégia de produto, impulsiona o crescimento e impacta diretamente os resultados do negócio."
   },
   {
    "type": "p",
    "text": "Se você é UX/UI Designer, Product Designer ou trabalha com produtos digitais, precisa entender como conectar design, produto e growth. Isso significa ir além dos pixels e mergulhar fundo em métricas, comportamento do usuário e otimização para conversão. Vamos nessa?"
   },
   {
    "type": "h2",
    "text": "O design como motor do produto"
   },
   {
    "type": "p",
    "text": "O design é a interface entre o usuário e o produto. Mas se essa interface não for pensada estrategicamente, não adianta ser bonita. Ela precisa ser eficiente, reduzir fricção e facilitar a experiência do usuário."
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Interface",
       "icon": "grid"
      },
      {
       "label": "Menos fricção",
       "icon": "zap"
      },
      {
       "label": "Mais uso",
       "icon": "users"
      },
      {
       "label": "Mais conversão",
       "icon": "trend"
      }
     ]
    },
    "caption": "Uma interface pensada estrategicamente vira motor de crescimento."
   },
   {
    "type": "p",
    "text": "Pense no Spotify: a interface intuitiva e fluida não é apenas uma questão de estética, mas uma ferramenta para aumentar o tempo de uso, incentivar descobertas e, claro, converter mais assinantes Premium."
   },
   {
    "type": "p",
    "text": "O design deve responder a perguntas como:"
   },
   {
    "type": "ul",
    "items": [
     "Como tornamos a experiência mais fluida e engajante?",
     "Onde os usuários abandonam o fluxo e como podemos reduzir isso?",
     "Como podemos testar soluções para aumentar conversão e retenção?"
    ]
   },
   {
    "type": "p",
    "text": "Aqui entra a necessidade de se aprofundar em pesquisas, testes A/B e análises de métricas para criar interfaces que impactam diretamente o crescimento do produto."
   },
   {
    "type": "h2",
    "text": "Growth: como o design acelera aquisição e retenção"
   },
   {
    "type": "p",
    "text": "Growth Design é a interseção entre UX e marketing orientado a dados. Ele se baseia em testes e otimização contínua para escalar o crescimento de um produto."
   },
   {
    "type": "visual",
    "data": {
     "kind": "cards",
     "items": [
      {
       "title": "Airbnb",
       "body": "Fotos profissionais aumentaram a confiança e as reservas.",
       "icon": "image"
      },
      {
       "title": "Dropbox",
       "body": "Indicação com espaço extra explodiu o crescimento.",
       "icon": "users"
      },
      {
       "title": "Duolingo",
       "body": "Gamificação e notificações aumentaram a retenção.",
       "icon": "sparkles"
      }
     ]
    },
    "caption": "Três exemplos clássicos de Growth Design citados no artigo."
   },
   {
    "type": "p",
    "text": "Alguns exemplos clássicos de Growth Design na prática:"
   },
   {
    "type": "ul",
    "items": [
     "Airbnb: percebeu que usuários não confiavam em acomodações com fotos ruins. Solução? Mandar fotógrafos profissionais para os anfitriões, aumentando reservas.",
     "Dropbox: implementou um sistema de indicação em que usuários ganhavam espaço extra ao convidar amigos. Resultado? Explosão no crescimento.",
     "Duolingo: usa gamificação e notificações personalizadas para aumentar retenção. Mais tempo no app, mais chances de conversão para o plano pago."
    ]
   },
   {
    "type": "quote",
    "text": "O design tem papel fundamental em todas essas estratégias. Pequenas mudanças na interface, nos fluxos ou na comunicação com o usuário podem gerar resultados gigantes para o produto."
   },
   {
    "type": "h2",
    "text": "O impacto do design no negócio"
   },
   {
    "type": "p",
    "text": "O design afeta diretamente KPIs essenciais para o negócio, como:"
   },
   {
    "type": "ul",
    "items": [
     "Conversão (exemplo: melhorar o onboarding pode aumentar conversão em 20%)",
     "Retenção (exemplo: reduzir fricções melhora o engajamento e evita churn)",
     "Lifetime Value (LTV) (exemplo: experiências otimizadas fazem usuários ficarem mais tempo e gastarem mais)"
    ]
   },
   {
    "type": "p",
    "text": "Empresas como Netflix, Amazon e Nubank entendem que design não é só interface, mas uma ferramenta de estratégia. Por isso, investem pesado em pesquisas, testes e personalização para criar experiências que geram resultados reais para o negócio."
   },
   {
    "type": "h2",
    "text": "Designers precisam pensar como estrategistas de produto"
   },
   {
    "type": "p",
    "text": "Se você quer se destacar no mercado, precisa ir além do design tradicional. Algumas ações que você pode tomar hoje:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "cycle",
     "nodes": [
      {
       "label": "Métricas",
       "icon": "chart"
      },
      {
       "label": "Teste A/B",
       "icon": "flask"
      },
      {
       "label": "Aprendizado",
       "icon": "bulb"
      },
      {
       "label": "Nova decisão",
       "icon": "target"
      }
     ],
     "center": "KPI"
    },
    "caption": "Pensamento de impacto: cada decisão de design move algum KPI."
   },
   {
    "type": "ul",
    "items": [
     "Acompanhar e analisar métricas como conversão, retenção e churn.",
     "Fazer testes A/B para validar soluções com base em dados.",
     "Trabalhar mais próximo de times de Growth, Produto e Marketing.",
     "Estudar estratégias de Growth Design e otimização de produto.",
     "Aplicar um pensamento de impacto: “Essa decisão de design melhora quais KPIs?”"
    ]
   },
   {
    "type": "p",
    "text": "No fim das contas, design não é sobre telas. É sobre criar experiências que engajam, retêm e fazem o produto crescer."
   },
   {
    "type": "p",
    "text": "E você, como tem integrado o design à estratégia do seu produto? Compartilhe suas ideias nos comentários! ↓"
   }
  ]
 },
 {
  "slug": "ia-na-user-interface-futuro-do-design",
  "title": "Descomplicando o futuro do design: a revolução da IA na user interface",
  "description": "Como a inteligência artificial muda o jeito de projetar interfaces: ajustes em tempo real, automação, previsão de comportamento e o equilíbrio com o toque humano.",
  "date": "2025-03-12",
  "category": "ai",
  "tags": [
   "IA",
   "UI",
   "Product Design"
  ],
  "cover": "/blog/ia-na-user-interface-futuro-do-design.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/descomplicando-o-futuro-do-design-a-revolu%C3%A7%C3%A3o-da-ia-na-user-interface-8bd659e8c7e6",
  "readMinutes": 4,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: agentes de IA que agem dentro do CRM e deixam a pessoa no controle."
  },
  "updateNote": "Revisado em outubro de 2026: incluí o que mudou desde a publicação e um novo visual para explicar a ideia central.",
  "blocks": [
   {
    "type": "p",
    "text": "Olá, Product Designers, UX/UI Designers e entusiastas do Design de Interação!"
   },
   {
    "type": "p",
    "text": "Você já parou para pensar como a inteligência artificial está mudando o jeito que projetamos interfaces? Se antes dependíamos exclusivamente da nossa intuição e de testes demorados, hoje temos a IA como uma aliada que otimiza processos, analisa dados e nos ajuda a criar experiências mais inteligentes. Mas calma, isso não significa que seremos substituídos! Na verdade, a IA está aqui para potencializar nosso trabalho e nos permitir focar no que realmente importa: a experiência do usuário."
   },
   {
    "type": "p",
    "text": "Vamos conversar sobre isso?"
   },
   {
    "type": "h2",
    "text": "A revolução do design com IA: muito além do hype"
   },
   {
    "type": "p",
    "text": "A inteligência artificial não é apenas uma tendência passageira. Estamos vivendo uma revolução silenciosa, onde a IA não apenas acelera processos, mas também permite que designers criem interfaces mais personalizadas, acessíveis e eficientes."
   },
   {
    "type": "p",
    "text": "Imagine o seguinte cenário: você está projetando um aplicativo e precisa entender como os usuários estão interagindo com ele. Antes, isso demandava pesquisas longas e muita observação manual. Agora, ferramentas com IA podem analisar padrões de comportamento em tempo real, mostrando quais elementos estão funcionando e quais precisam de ajustes."
   },
   {
    "type": "p",
    "text": "Quer um exemplo prático? Pense no Netflix. A interface é ajustada dinamicamente com base no que você assiste, priorizando conteúdos que têm mais chance de capturar seu interesse. Esse tipo de personalização, que parece mágica para o usuário, é possível graças à IA."
   },
   {
    "type": "h2",
    "text": "Exemplos práticos para o dia a dia"
   },
   {
    "type": "h2",
    "text": "Ajustes em tempo real: da dor do usuário à solução instantânea"
   },
   {
    "type": "p",
    "text": "Vamos imaginar que você criou uma landing page para um novo produto. Tudo está bonito, os elementos estão bem posicionados, mas as conversões estão baixíssimas. Antes, você precisaria rodar um teste A/B, esperar os resultados e, só depois, fazer ajustes."
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Usuário abandona",
       "icon": "user"
      },
      {
       "label": "IA detecta o padrão",
       "icon": "bot"
      },
      {
       "label": "Sugere um ajuste",
       "icon": "sparkles"
      },
      {
       "label": "Você testa e decide",
       "icon": "userCheck"
      }
     ]
    },
    "caption": "A IA aponta caminhos; a decisão continua sendo do designer."
   },
   {
    "type": "p",
    "text": "Agora, com IA, plataformas conseguem detectar em tempo real onde os usuários estão abandonando a página e sugerir modificações automáticas. Talvez o botão de “Saiba Mais” esteja em um lugar de pouca visibilidade ou o tempo de carregamento da página esteja espantando visitantes. A IA aponta soluções que você pode testar rapidamente."
   },
   {
    "type": "h2",
    "text": "Automação de tarefas: mais tempo para criar"
   },
   {
    "type": "p",
    "text": "Quem nunca passou horas ajustando espaçamentos, padronizando cores ou revisando componentes no design system? Essas tarefas são fundamentais, mas também são cansativas e repetitivas."
   },
   {
    "type": "p",
    "text": "Ferramentas como Figma e Adobe XD já utilizam IA para automatizar ajustes de layout, sugerir combinações de cores e até mesmo gerar variantes de um mesmo design. Isso significa que você pode focar mais na estratégia e menos em ajustes operacionais."
   },
   {
    "type": "h2",
    "text": "Previsão de comportamentos: antecipando necessidades"
   },
   {
    "type": "p",
    "text": "Outro grande impacto da IA no design é a capacidade de prever o comportamento do usuário antes mesmo que ele aconteça. Com base em interações anteriores, a IA pode sugerir melhorias que aumentam a conversão e reduzem frustrações."
   },
   {
    "type": "p",
    "text": "Por exemplo, em um e-commerce, um sistema inteligente pode detectar que os usuários frequentemente param em uma determinada etapa do checkout. Em vez de esperar que isso se torne um problema crônico, a IA sugere soluções, como simplificar campos, oferecer um incentivo ou ajustar o layout para tornar o fluxo mais intuitivo."
   },
   {
    "type": "h2",
    "text": "Integração de IA com UX: um novo paradigma"
   },
   {
    "type": "p",
    "text": "Combinar IA com UX não significa apenas deixar o design mais “inteligente”. Significa criar experiências que se moldam às necessidades do usuário, tornando interações mais fluidas e eficazes."
   },
   {
    "type": "visual",
    "data": {
     "kind": "cards",
     "items": [
      {
       "title": "Personalizar",
       "body": "Conteúdo que se ajusta e aumenta o engajamento.",
       "icon": "user"
      },
      {
       "title": "Otimizar layout",
       "body": "Sugestões baseadas em comportamento.",
       "icon": "grid"
      },
      {
       "title": "Reduzir barreiras",
       "body": "Interfaces mais intuitivas e acessíveis.",
       "icon": "accessibility"
      }
     ]
    },
    "caption": "O que a IA pode fazer quando bem aplicada, segundo o artigo."
   },
   {
    "type": "p",
    "text": "Quando bem aplicada, a IA pode:"
   },
   {
    "type": "ul",
    "items": [
     "Personalizar conteúdos automaticamente, aumentando o engajamento;",
     "Sugerir otimizações de layout, baseadas em análises de comportamento;",
     "Reduzir barreiras cognitivas, tornando interfaces mais intuitivas e acessíveis."
    ]
   },
   {
    "type": "p",
    "text": "Mas cuidado: a IA não é uma solução milagrosa. O desafio está em encontrar o equilíbrio entre automação e experiência humana. Afinal, a melhor interface é aquela que faz o usuário se sentir no controle, e não sendo controlado."
   },
   {
    "type": "h2",
    "text": "Da interface adaptativa à interface que age"
   },
   {
    "type": "p",
    "text": "Em 2025 falávamos de interfaces que se adaptam ao usuário. Em 2026, muitas interfaces também agem: agentes sugerem, executam e avisam."
   },
   {
    "type": "p",
    "text": "Cada passo de autonomia exige algo novo da interface. Não basta a IA acertar, o usuário precisa entender e poder corrigir."
   },
   {
    "type": "visual",
    "id": "agent-spectrum",
    "caption": "Quanto mais a interface faz sozinha, mais ela precisa explicar, pedir confirmação e permitir desfazer."
   },
   {
    "type": "p",
    "text": "Aprofundo esse tema no artigo “Quando a IA age, o designer precisa desenhar controle”."
   },
   {
    "type": "h2",
    "text": "Dicas práticas para potencializar seu trabalho com IA"
   },
   {
    "type": "ul",
    "items": [
     "Explore ferramentas inteligentes: experimente soluções como ChatGPT para copywriting, Uizard para prototipagem e Heatmaps baseados em IA para entender onde os usuários estão clicando.",
     "Mantenha-se atualizado: a IA está evoluindo rápido! Participe de eventos, leia artigos e teste novas abordagens sempre que possível.",
     "Combine IA com criatividade: a tecnologia deve servir ao design, e não o contrário. Use insights da IA para tomar decisões mais informadas, mas nunca deixe de lado o toque humano.",
     "Teste e aprenda: experimente novas soluções e valide com dados reais. A IA pode indicar caminhos, mas só a interação real com os usuários confirmará se eles fazem sentido."
    ]
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Usuário controlado",
      "icon": "bot",
      "items": [
       "Automação sem explicação",
       "Decisões escondidas"
      ]
     },
     "right": {
      "title": "Usuário no controle",
      "icon": "hand",
      "items": [
       "IA sugere, pessoa decide",
       "Toque humano no design"
      ]
     }
    },
    "caption": "A melhor interface faz o usuário se sentir no controle."
   },
   {
    "type": "p",
    "text": "Vamos construir juntos o futuro do design!"
   },
   {
    "type": "p",
    "text": "E você, como tem integrado a IA no seu processo de design? Compartilhe suas experiências e insights nos comentários! Vamos juntos transformar o futuro do design com inteligência e criatividade!"
   }
  ],
  "updated": "2026-10-01"
 },
 {
  "slug": "licoes-de-nao-me-faca-pensar",
  "title": "Descomplique ou desista: as lições irrefutáveis de “Não me faça pensar”",
  "description": "As lições de Não Me Faça Pensar, de Steve Krug, aplicadas ao dia a dia: hierarquia clara, menos etapas e testes com pessoas reais.",
  "date": "2025-03-12",
  "category": "ux",
  "tags": [
   "UX",
   "Usabilidade",
   "Steve Krug"
  ],
  "cover": "/blog/licoes-de-nao-me-faca-pensar.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/descomplique-ou-desista-as-li%C3%A7%C3%B5es-irrefut%C3%A1veis-de-n%C3%A3o-me-fa%C3%A7a-pensar-9b835645dafa",
  "readMinutes": 3,
  "related": {
   "href": "/cases/acquire",
   "title": "Clint Acquire",
   "body": "Na prática: uma landing page e um fluxo conversacional que concentraram 79% da demanda comercial."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Vamos falar de simplicidade?"
   },
   {
    "type": "p",
    "text": "Imagine tentar comprar um ingresso para aquele show imperdível e, ao invés de clicar facilmente, você se perde em menus, formulários intermináveis e botões escondidos. Frustrante, não? Foi justamente essa realidade que Steve Krug resolveu transformar com o clássico Não Me Faça Pensar. Se você é designer, desenvolvedor ou simplesmente alguém que acredita que o digital não precisa ser um labirinto, este artigo é pra você. Prepare-se para descobrir como a simplicidade pode ser o seu maior trunfo no mundo digital."
   },
   {
    "type": "h2",
    "text": "1. A arte de não deixar o usuário pensar"
   },
   {
    "type": "p",
    "text": "Krug chegou com uma mensagem ousada: se o seu design obriga o usuário a pensar demais, você já perdeu pontos, e possivelmente vendas."
   },
   {
    "type": "visual",
    "data": {
     "kind": "noise",
     "before": "Faz pensar",
     "after": "Não faz pensar",
     "action": "Comprar ingresso"
    },
    "caption": "Hierarquia visual e linguagem simples: o usuário sabe onde clicar sem esforço."
   },
   {
    "type": "p",
    "text": "Imagine um restaurante onde o cardápio vem com explicações intermináveis de cada prato. Você provavelmente escolheria algo no mesmo instante que um cardápio simples e intuitivo. No universo digital, o mesmo vale: o usuário quer saber onde clicar e o que esperar, sem esforço mental."
   },
   {
    "type": "p",
    "lead": "Na prática:",
    "text": ""
   },
   {
    "type": "ul",
    "items": [
     "Hierarquia visual: Destaque as informações essenciais de forma clara. Se o usuário precisar decifrar uma mensagem, você falhou.",
     "Linguagem simples: Use palavras que até um amigo leigo entenda, nada de jargões complicados."
    ]
   },
   {
    "type": "visual",
    "id": "lt-hierarchy",
    "caption": "Mesmo conteúdo, outra leitura: tamanho, contraste e uma única ação principal dizem ao usuário onde olhar e onde clicar."
   },
   {
    "type": "h2",
    "text": "2. Menos é mais: a jornada sem obstáculos"
   },
   {
    "type": "p",
    "text": "Você já reparou que, quando tudo é simplificado, a experiência se torna quase mágica? Krug defende que cada clique, cada ação, deve ser tão intuitivo quanto virar a página de um bom livro."
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Checkout longo",
      "icon": "cart",
      "items": [
       "Muitas etapas",
       "Campos desnecessários",
       "Sem feedback"
      ]
     },
     "right": {
      "title": "Checkout simples",
      "icon": "zap",
      "items": [
       "Menos etapas",
       "Só o essencial",
       "Feedback imediato"
      ]
     }
    },
    "caption": "Cada etapa a menos é um motivo a menos para desistir."
   },
   {
    "type": "p",
    "lead": "Exemplo prático:",
    "text": ""
   },
   {
    "type": "p",
    "text": "Pense em um site de compras online. Se o processo de checkout tem mais etapas do que um reality show, é provável que o usuário desista no meio do caminho. Reduzir etapas, eliminar campos desnecessários e fornecer feedback imediato são estratégias que podem aumentar a conversão de maneira surpreendente."
   },
   {
    "type": "visual",
    "id": "lt-checkout",
    "caption": "Menos campos, um clique e uma resposta imediata. O usuário nunca fica em dúvida se deu certo."
   },
   {
    "type": "p",
    "lead": "Dica de ouro:",
    "text": ""
   },
   {
    "type": "ul",
    "items": [
     "Faça um teste: peça para alguém que nunca usou seu site realizar uma compra. Se a pessoa ficar confusa, é hora de repensar o fluxo!"
    ]
   },
   {
    "type": "h2",
    "text": "3. Teste com pessoas, não com seu cérebro"
   },
   {
    "type": "p",
    "text": "Você, como expert em design, pode até pensar que sua solução é óbvia, mas adivinha? O que é claro para você pode ser um enigma para outro. Krug sempre enfatizou a importância dos testes de usabilidade. Não se trata de adivinhar o que o usuário precisa, mas de observar como ele interage com seu produto."
   },
   {
    "type": "visual",
    "data": {
     "kind": "people",
     "count": 5,
     "stuck": [
      1,
      3
     ],
     "label": "5 pessoas, tarefas simples: observe onde travam"
    },
    "caption": "O teste rápido sugerido no artigo: cinco pessoas já mostram onde o fluxo trava."
   },
   {
    "type": "p",
    "lead": "Na prática:",
    "text": ""
   },
   {
    "type": "ul",
    "items": [
     "Teste rápido: Convoque 5 pessoas, peça que executem tarefas simples e observe onde elas travam.",
     "Feedback real: As reações e dúvidas que surgirem são ouro puro para melhorar seu design."
    ]
   },
   {
    "type": "visual",
    "id": "lt-usability",
    "caption": "Observar uma tarefa mostra o que nenhuma opinião mostra: a hesitação. Quando duas de cinco pessoas travam no mesmo ponto, ali está o problema."
   },
   {
    "type": "h2",
    "text": "4. Simplicidade: o superpoder do design"
   },
   {
    "type": "p",
    "text": "No fundo, Não Me Faça Pensar é sobre criar experiências onde a tecnologia some e o usuário se sente guiado sem esforço. É quase como ter um superpoder, o de tornar o complicado em algo natural e intuitivo."
   },
   {
    "type": "p",
    "lead": "História inspiradora:",
    "text": ""
   },
   {
    "type": "p",
    "text": "Lembra daquele site famoso que revolucionou a forma de buscar informações? Ele se tornou referência justamente porque eliminou o desnecessário e focou no que realmente importava: entregar resultados com clareza. Se até gigantes assim apostam na simplicidade, por que seu projeto não pode brilhar dessa forma?"
   },
   {
    "type": "h2",
    "text": "Conclusão: simplifique e conquiste"
   },
   {
    "type": "p",
    "text": "A mensagem é clara: se você quer que seu produto digital seja adorado, precisa facilitar a vida do usuário. Não se trata de “tirar atalhos”, mas de entender que cada elemento, cada detalhe, deve trabalhar para eliminar barreiras e não para criá-las. Ao adotar os princípios de Não Me Faça Pensar, você não só melhora a usabilidade, como também conquista a lealdade do usuário, e, consequentemente, resultados de negócio mais robustos."
   },
   {
    "type": "p",
    "text": "E aí, pronto para transformar seus designs em experiências que praticamente se vendem sozinhas? Compartilhe suas histórias, desafios e sucessos nos comentários. Afinal, a melhor forma de aprender é, acima de tudo, simplificar e compartilhar!"
   }
  ],
  "updated": "2026-10-02"
 },
 {
  "slug": "design-systems-como-criar-e-manter",
  "title": "Design Systems: como criar e manter um sistema de design escalável",
  "description": "Como criar e manter um design system escalável: benefícios, um passo a passo para começar pequeno, documentação clara e governança contínua.",
  "date": "2025-02-23",
  "category": "ds",
  "tags": [
   "Design Systems",
   "UI",
   "Escalabilidade"
  ],
  "cover": "/blog/design-systems-como-criar-e-manter.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/design-systems-como-criar-e-manter-um-sistema-de-design-escal%C3%A1vel-61d2d1c7033b",
  "readMinutes": 3,
  "related": {
   "href": "/cases/scale",
   "title": "Clint Scale",
   "body": "Na prática: um design system explorável, com tokens, componentes, contraste e governança."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Olá, Product Designer, UX/UI Designer e apaixonados por interfaces!"
   },
   {
    "type": "p",
    "text": "Se sua equipe de design e desenvolvimento cresce rápido, você já deve ter se deparado com inconsistências que atrapalham a produtividade: botões com estilos diferentes, espaçamentos desalinhados, fontes que não conversam entre si… O caos pode se instalar a qualquer momento! A solução? Um Design System bem estruturado."
   },
   {
    "type": "p",
    "text": "Esse conjunto de diretrizes e componentes não só garante a consistência visual e funcional, mas também reduz custos e acelera o desenvolvimento. Neste artigo, vamos bater um papo descontraído sobre como criar e manter um sistema de design escalável, mostrando exemplos práticos e dicas essenciais para você aplicar hoje mesmo."
   },
   {
    "type": "h2",
    "text": "Benefícios de um Design System"
   },
   {
    "type": "ul",
    "items": [
     "Implementar um Design System traz uma série de vantagens que impactam diretamente no dia a dia de designers e desenvolvedores. Veja alguns dos benefícios:",
     "Redução de Retrabalho: Um exemplo real é o Airbnb, que conseguiu reduzir em 50% o tempo gasto na criação de interfaces ao adotar um Design System. Com componentes pré-definidos, a repetição de esforços diminui consideravelmente.",
     "Escalabilidade: Gigantes como Google e Uber utilizam sistemas padronizados para garantir que, independentemente do projeto ou da equipe, a experiência do usuário seja consistente globalmente.",
     "Agilidade no Desenvolvimento: Ao reutilizar componentes, o tempo de criação de novas telas pode ser reduzido em até 30%. Isso significa mais foco na inovação e menos tempo em ajustes operacionais."
    ]
   },
   {
    "type": "visual",
    "data": {
     "kind": "stats",
     "items": [
      {
       "value": "50%",
       "label": "menos tempo criando interfaces no Airbnb",
       "source": "Citado no artigo",
       "icon": "timer"
      },
      {
       "value": "30%",
       "label": "menos tempo para criar novas telas reutilizando componentes",
       "source": "Citado no artigo",
       "icon": "layers"
      }
     ]
    },
    "caption": "Os números citados no artigo como exemplos de mercado."
   },
   {
    "type": "h2",
    "text": "Como Criar um Design System"
   },
   {
    "type": "p",
    "text": "Criar um Design System robusto pode parecer desafiador, mas com um passo a passo claro, você pode transformar essa tarefa em um processo leve e eficiente:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "layers",
     "items": [
      {
       "label": "Cores e tipografia",
       "icon": "palette"
      },
      {
       "label": "Espaçamento",
       "icon": "grid"
      },
      {
       "label": "Componentes",
       "icon": "puzzle"
      },
      {
       "label": "Documentação",
       "icon": "book"
      },
      {
       "label": "Governança",
       "icon": "shieldCheck"
      }
     ]
    },
    "caption": "Um sistema cresce em camadas: comece pela base e vá subindo."
   },
   {
    "type": "h2",
    "text": "1. Comece Pequeno"
   },
   {
    "type": "ul",
    "items": [
     "Defina os Elementos Essenciais: Inicie selecionando as cores, tipografia, espaçamento e componentes básicos como botões, formulários e cards.",
     "Foco no Essencial: Em vez de tentar criar um sistema completo de uma vez, construa uma base sólida e vá incrementando com o tempo.",
     "Exemplo Prático: Pense no seu projeto atual e identifique quais elementos são usados com mais frequência. Comece por aí!"
    ]
   },
   {
    "type": "h2",
    "text": "2. Documentação Clara"
   },
   {
    "type": "ul",
    "items": [
     "Diretrizes e Boas Práticas: Registre tudo em plataformas colaborativas, como Figma, Zeroheight ou Notion. Uma documentação detalhada garante que todos os membros da equipe sigam as mesmas regras.",
     "Visual e Acessível: Utilize exemplos visuais e mantenha a documentação atualizada para que o sistema evolua conforme as necessidades do projeto.",
     "Dica Amiga: Faça revisões periódicas para incluir novas descobertas e ajustes sugeridos pela equipe."
    ]
   },
   {
    "type": "h2",
    "text": "3. Manutenção Contínua"
   },
   {
    "type": "ul",
    "items": [
     "Governança é Essencial: Sem uma gestão constante, seu Design System pode se transformar num “cemitério” de componentes desatualizados.",
     "Time Responsável: Defina uma equipe ou um responsável pela revisão e atualização dos componentes.",
     "Feedback Constante: Incentive a comunicação entre designers e desenvolvedores para identificar e corrigir inconsistências rapidamente."
    ]
   },
   {
    "type": "visual",
    "data": {
     "kind": "cycle",
     "nodes": [
      {
       "label": "Usar",
       "icon": "click"
      },
      {
       "label": "Revisar",
       "icon": "eye"
      },
      {
       "label": "Atualizar",
       "icon": "repeat"
      },
      {
       "label": "Documentar",
       "icon": "file"
      }
     ],
     "center": "DS vivo"
    },
    "caption": "Sem governança, o sistema vira um cemitério de componentes."
   },
   {
    "type": "h2",
    "text": "Atualização 2026: tokens em camadas e IA"
   },
   {
    "type": "p",
    "text": "A forma mais saudável de organizar um Design System hoje é separar os tokens em camadas. O primitivo guarda o valor bruto, o semântico diz para que serve e o componente usa o semântico."
   },
   {
    "type": "visual",
    "id": "token-tiers",
    "caption": "Muda o primitivo, o token semântico repassa e todos os componentes acompanham, sem caçar cor por cor."
   },
   {
    "type": "p",
    "text": "O Design Tokens Community Group, do W3C, vem padronizando um formato comum para tokens. Isso facilita levar a mesma decisão do Figma para o código e para outras ferramentas."
   },
   {
    "type": "p",
    "text": "E existe um motivo novo para cuidar disso: ferramentas de IA geram interfaces muito melhores quando recebem o Design System como contexto. Componentes, tokens e regras bem documentados reduzem o resultado genérico.",
    "lead": "Design System como contexto para IA:"
   },
   {
    "type": "h2",
    "text": "Integre o Design System na Cultura da Empresa"
   },
   {
    "type": "p",
    "text": "Um Design System não é apenas um conjunto de componentes, é uma filosofia que deve ser abraçada por toda a equipe. Ao incentivar a colaboração e o uso consistente das diretrizes, você cria um ambiente de trabalho mais organizado e eficiente, onde cada detalhe contribui para uma experiência do usuário superior."
   },
   {
    "type": "p",
    "text": "Gostou dessas dicas e já visualizou como um Design System pode revolucionar seu fluxo de trabalho?"
   },
   {
    "type": "p",
    "text": "Deixe seu comentário e compartilhe suas experiências! Se você tem alguma dúvida ou quer saber mais sobre como implementar essa estratégia na sua empresa, vamos conversar!"
   }
  ],
  "updated": "2026-10-01",
  "updateNote": "Revisado em outubro de 2026: incluí o que mudou desde a publicação e um novo visual para explicar a ideia central."
 },
 {
  "slug": "ia-na-gestao-de-produtos",
  "title": "O futuro da gestão de produtos: como a IA está transformando o jogo",
  "description": "As tendências que a IA traz para a gestão de produtos digitais: automação, prototipagem rápida, personalização, análise preditiva e ferramentas para cada etapa.",
  "date": "2025-02-23",
  "category": "ai",
  "tags": [
   "IA",
   "Gestão de produto",
   "Ferramentas"
  ],
  "cover": "/blog/ia-na-gestao-de-produtos.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/o-futuro-da-gest%C3%A3o-de-produtos-como-a-ia-est%C3%A1-transformando-o-jogo-905851ffbc4c",
  "readMinutes": 3,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: agentes de IA que agem dentro do CRM e deixam a pessoa no controle."
  },
  "updateNote": "Nota de atualização (2026): este texto foi escrito antes da nova geração de modelos e agentes. Hoje a IA já gera interfaces, código e fluxos inteiros a partir de contexto. O ponto central continua o mesmo: a IA acelera a produção, e a decisão sobre o que é bom para o usuário segue sendo do designer.",
  "blocks": [
   {
    "type": "p",
    "text": "Imagine um mundo onde decisões estratégicas são tomadas em segundos, fluxos de trabalho se ajustam sozinhos e interfaces se personalizam em tempo real. Parece ficção científica? Pois essa revolução já está em curso, e a inteligência artificial (IA) é a grande protagonista."
   },
   {
    "type": "p",
    "text": "Em 2025, a IA está integrada a cada etapa do ciclo de vida do produto, desde a ideia inicial até a entrega e otimização contínua. Mas essa evolução vai muito além da automação: exige que product managers, designers e equipes de tecnologia saibam utilizar essas ferramentas estrategicamente."
   },
   {
    "type": "p",
    "text": "Vamos explorar as principais tendências que estão moldando o futuro da gestão de produtos digitais."
   },
   {
    "type": "h2",
    "text": "1. Automação Inteligente: O Fim das Tarefas Repetitivas"
   },
   {
    "type": "p",
    "text": "Tarefas operacionais como atualização de planilhas, gestão de backlog e sincronização de dados podem consumir um tempo precioso. A IA já permite que esses processos sejam automatizados, permitindo que as equipes foquem em estratégia e inovação."
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Ideia",
       "icon": "bulb"
      },
      {
       "label": "Design",
       "icon": "pen"
      },
      {
       "label": "Desenvolvimento",
       "icon": "code"
      },
      {
       "label": "Entrega",
       "icon": "rocket"
      },
      {
       "label": "Otimização",
       "icon": "trend"
      }
     ]
    },
    "caption": "A IA já aparece em todas as etapas do ciclo de vida do produto."
   },
   {
    "type": "ul",
    "items": [
     "n8n: Cria fluxos de trabalho automatizados sem precisar de código, conectando sistemas e eliminando retrabalho.",
     "VZero: Facilita a gestão de entregas e dependências, garantindo um roadmap mais fluido."
    ]
   },
   {
    "type": "h2",
    "text": "2. Design e Prototipagem em Velocidade Máxima"
   },
   {
    "type": "p",
    "text": "A IA está acelerando o design de interfaces e a criação de protótipos, ajudando designers a testar ideias mais rapidamente e iterar de forma inteligente."
   },
   {
    "type": "ul",
    "items": [
     "Relume AI: Gera wireframes e componentes baseados em briefings de design.",
     "Galileo AI: Cria interfaces automaticamente a partir de descrições em texto.",
     "Figma com AI Plugins: Sugere layouts, ajusta espaçamentos e gera textos placeholder de forma natural."
    ]
   },
   {
    "type": "h2",
    "text": "3. Personalização em Escala: Cada Usuário, uma Experiência Única"
   },
   {
    "type": "p",
    "text": "A personalização deixou de ser um diferencial e passou a ser uma necessidade. A IA permite ajustar interfaces e conteúdo em tempo real, tornando cada experiência mais relevante para o usuário."
   },
   {
    "type": "ul",
    "items": [
     "Bolt: Adapta conteúdos e interfaces conforme as preferências do usuário.",
     "Omni AI: Integra dados de vários canais para criar experiências hiperpersonalizadas."
    ]
   },
   {
    "type": "h2",
    "text": "4. Decisões Baseadas em Dados: O Poder da Análise Preditiva"
   },
   {
    "type": "p",
    "text": "Com a IA, as decisões deixam de ser baseadas apenas em históricos e passam a ser preditivas, antecipando tendências e prevenindo problemas."
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Histórico",
      "icon": "database",
      "items": [
       "Olha o que já aconteceu",
       "Reage ao problema"
      ]
     },
     "right": {
      "title": "Preditivo",
      "icon": "line",
      "items": [
       "Antecipa tendências",
       "Previne o problema"
      ]
     }
    },
    "caption": "De decisões baseadas no passado para decisões que antecipam."
   },
   {
    "type": "ul",
    "items": [
     "Amplitude com AI Assist: Oferece insights preditivos sobre comportamento do usuário.",
     "Mixpanel com Machine Learning: Analisa padrões de uso e sugere otimizações.",
     "Google Analytics 4: Prevê ações futuras dos usuários com base em seus comportamentos."
    ]
   },
   {
    "type": "h2",
    "text": "5. Desenvolvimento Acelerado: Menos Código, Mais Eficiência"
   },
   {
    "type": "p",
    "text": "A IA está facilitando o desenvolvimento de software, reduzindo o tempo gasto em tarefas repetitivas e permitindo que desenvolvedores se concentrem em soluções mais inovadoras."
   },
   {
    "type": "ul",
    "items": [
     "Cursor: Assistente de código que ajuda a escrever e depurar mais rápido.",
     "GitHub Copilot: Sugere trechos de código e acelera a implementação de funcionalidades.",
     "Codeium: Alternativa ao Copilot, com suporte avançado para diversas linguagens."
    ]
   },
   {
    "type": "h2",
    "text": "6. Gestão e Colaboração Inteligente"
   },
   {
    "type": "p",
    "text": "A IA está ajudando times a se comunicarem melhor e a manterem fluxos de trabalho mais organizados e eficientes."
   },
   {
    "type": "ul",
    "items": [
     "Notion AI: Automatiza anotações e organiza documentos de forma inteligente.",
     "Monday.com com AI Assist: Sugere melhorias em tarefas com base no histórico da equipe.",
     "Roundtables: Usa IA para otimizar reuniões e gerar relatórios automáticos."
    ]
   },
   {
    "type": "h2",
    "text": "7. Atendimento e Experiência do Usuário: Mais Personalização, Menos Esforço"
   },
   {
    "type": "p",
    "text": "Usuários querem suporte rápido e eficiente, e a IA está revolucionando o atendimento ao cliente, tornando interações mais naturais e fluidas."
   },
   {
    "type": "ul",
    "items": [
     "ChatGPT: Suporte conversacional avançado, tornando interações mais humanizadas.",
     "Zendesk com Answer Bot: Automatiza respostas e coleta feedbacks para melhorias no produto.",
     "FullStory com AI Assist: Identifica problemas de UX em tempo real e sugere otimizações."
    ]
   },
   {
    "type": "h2",
    "text": "8. Experimentação e Validação Rápida"
   },
   {
    "type": "p",
    "text": "A IA tornou o processo de teste e validação de ideias mais rápido, reduzindo riscos antes mesmo de lançar um produto."
   },
   {
    "type": "ul",
    "items": [
     "Runway ML: Gera conteúdo visual para testes e prototipagem rápida.",
     "Adobe Firefly: Cria protótipos visuais para validação de ideias."
    ]
   },
   {
    "type": "h2",
    "text": "Conclusão: O Que Esperar do Futuro?"
   },
   {
    "type": "p",
    "text": "A IA não está apenas automatizando tarefas, ela está redefinindo como produtos são pensados, criados e gerenciados. O diferencial dos profissionais de produto e design será saber aplicar essas tecnologias estrategicamente para criar experiências mais inteligentes e centradas no usuário."
   },
   {
    "type": "visual",
    "data": {
     "kind": "cards",
     "items": [
      {
       "title": "Automação",
       "icon": "workflow"
      },
      {
       "title": "Prototipagem",
       "icon": "pen"
      },
      {
       "title": "Personalização",
       "icon": "user"
      },
      {
       "title": "Análise preditiva",
       "icon": "line"
      },
      {
       "title": "Desenvolvimento",
       "icon": "code"
      },
      {
       "title": "Colaboração",
       "icon": "users"
      },
      {
       "title": "Atendimento",
       "icon": "chat"
      },
      {
       "title": "Validação rápida",
       "icon": "flask"
      }
     ]
    },
    "caption": "As oito frentes do artigo em que a IA muda a gestão de produto."
   }
  ]
 },
 {
  "slug": "design-centrado-no-usuario-novo-paradigma",
  "title": "Design Centrado no Usuário está ultrapassado? O novo paradigma do UX Design",
  "description": "O design centrado no usuário ainda é suficiente? O novo paradigma considera usuário, negócio e sociedade, e como aplicar isso no dia a dia.",
  "date": "2025-02-20",
  "category": "ux",
  "tags": [
   "UX",
   "Estratégia",
   "Pesquisa"
  ],
  "cover": "/blog/design-centrado-no-usuario-novo-paradigma.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/design-centrado-no-usu%C3%A1rio-est%C3%A1-ultrapassado-o-novo-paradigma-do-ux-design-6060f0bb3e36",
  "readMinutes": 3,
  "related": {
   "href": "/cases/acquire",
   "title": "Clint Acquire",
   "body": "Na prática: uma landing page e um fluxo conversacional que concentraram 79% da demanda comercial."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Por anos, o mantra do UX Design foi claro: coloque o usuário no centro de tudo. Mas à medida que a tecnologia evolui e os desafios de negócios se tornam mais complexos, muitos profissionais se perguntam: será que o design centrado no usuário ainda é suficiente?"
   },
   {
    "type": "p",
    "text": "A realidade é que, embora o foco no usuário continue essencial, um novo paradigma está emergindo. Designers de ponta estão expandindo sua abordagem para considerar não apenas as necessidades individuais dos usuários, mas também os impactos no negócio, no mercado e até na sociedade. Bem-vindo à era do design centrado no ecossistema."
   },
   {
    "type": "h2",
    "text": "O que está mudando no UX Design?"
   },
   {
    "type": "p",
    "text": "A ideia de um design puramente centrado no usuário foi revolucionária, mas agora começa a mostrar limitações. Algumas razões para essa evolução incluem:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Centrado no usuário",
      "icon": "user",
      "items": [
       "Só a necessidade individual",
       "Solução isolada"
      ]
     },
     "right": {
      "title": "Centrado no ecossistema",
      "icon": "globe",
      "items": [
       "Usuário, negócio e sociedade",
       "Impacto de longo prazo"
      ]
     }
    },
    "caption": "O foco no usuário continua; o que muda é o tamanho do contexto."
   },
   {
    "type": "ul",
    "items": [
     "Sustentabilidade e Impacto Social: Empresas não podem mais criar experiências pensando apenas na conveniência do usuário, sem considerar impactos ambientais e sociais.",
     "Equilíbrio entre Negócio e Experiência: Focar exclusivamente no usuário pode levar a decisões que não são sustentáveis financeiramente. O novo UX precisa equilibrar as necessidades do usuário com os objetivos de negócio.",
     "Design para Ecossistemas: Em vez de criar soluções isoladas, empresas estão pensando no design como parte de um ecossistema interconectado, considerando múltiplos stakeholders e variáveis.",
     "Inteligência Artificial e Personalização: O avanço da IA permite experiências ultra-personalizadas, mas exige um pensamento mais estratégico para evitar vieses e garantir transparência."
    ]
   },
   {
    "type": "h2",
    "text": "Do Centrado no Usuário ao Centrado no Ecossistema"
   },
   {
    "type": "p",
    "text": "O novo paradigma do UX Design sugere que não basta projetar apenas para o usuário final. Em vez disso, os designers precisam considerar três camadas fundamentais:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "rings",
     "items": [
      "Usuário",
      "Negócio",
      "Sociedade"
     ]
    },
    "caption": "As três camadas do design centrado no ecossistema."
   },
   {
    "type": "h2",
    "text": "1. Usuário"
   },
   {
    "type": "p",
    "text": "O usuário ainda é peça-chave, mas precisa ser compreendido dentro de um contexto mais amplo."
   },
   {
    "type": "ul",
    "items": [
     "Pensar em diferentes perfis e necessidades ao invés de um arquétipo genérico.",
     "Criar experiências que não apenas resolvam problemas, mas também antecipem necessidades futuras."
    ]
   },
   {
    "type": "h2",
    "text": "2. Negócio"
   },
   {
    "type": "p",
    "text": "O sucesso de um produto não depende apenas da experiência do usuário, mas também da viabilidade econômica e alinhamento com os objetivos estratégicos da empresa."
   },
   {
    "type": "ul",
    "items": [
     "Designers precisam entender métricas de negócio como retenção, LTV e CAC.",
     "O UX deve colaborar diretamente com times de produto, growth e marketing para garantir um impacto sustentável."
    ]
   },
   {
    "type": "h2",
    "text": "3. Sociedade e Ecossistema"
   },
   {
    "type": "p",
    "text": "Cada decisão de design tem impactos que vão além do usuário e da empresa."
   },
   {
    "type": "ul",
    "items": [
     "Questões como privacidade, acessibilidade, sustentabilidade e ética precisam ser levadas em conta.",
     "Empresas devem criar produtos que gerem valor não apenas para clientes, mas também para a sociedade como um todo."
    ]
   },
   {
    "type": "h2",
    "text": "Como Aplicar Esse Novo Paradigma no Seu Trabalho"
   },
   {
    "type": "p",
    "text": "Se você quer evoluir como UX Designer e se adaptar a essa nova realidade, aqui estão algumas ações práticas:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Pesquisa além do usuário",
       "icon": "search"
      },
      {
       "label": "UX ligado à estratégia",
       "icon": "target"
      },
      {
       "label": "Impacto de longo prazo",
       "icon": "trend"
      }
     ]
    },
    "caption": "Três ações práticas do artigo."
   },
   {
    "type": "h2",
    "text": "1. Vá Além da Pesquisa com Usuários"
   },
   {
    "type": "ul",
    "items": [
     "Considere múltiplas perspectivas, incluindo stakeholders internos e externos.",
     "Utilize dados quantitativos e qualitativos para criar soluções embasadas."
    ]
   },
   {
    "type": "h2",
    "text": "2. Integre UX com Estratégia de Negócio"
   },
   {
    "type": "ul",
    "items": [
     "Participe de reuniões estratégicas para entender como as decisões de design impactam o crescimento da empresa.",
     "Traduza insights de UX em valor tangível para o negócio."
    ]
   },
   {
    "type": "h2",
    "text": "3. Pense em Impacto a Longo Prazo"
   },
   {
    "type": "ul",
    "items": [
     "Avalie as consequências do design além do curto prazo.",
     "Pergunte-se: como essa decisão impacta o usuário, o negócio e a sociedade daqui a 5 anos?"
    ]
   },
   {
    "type": "h2",
    "text": "Conclusão: O Futuro do UX Está na Visão Holística"
   },
   {
    "type": "p",
    "text": "O design centrado no usuário não está morto, mas evoluiu. O futuro do UX Design exige uma abordagem mais ampla, que equilibra experiência do usuário, sustentabilidade do negócio e responsabilidade social."
   },
   {
    "type": "p",
    "text": "Os designers que adotarem esse novo paradigma terão um diferencial competitivo, pois serão capazes de criar soluções mais estratégicas, inovadoras e alinhadas com as demandas do mundo moderno."
   },
   {
    "type": "p",
    "text": "A pergunta é: você está pronto para essa transformação?"
   }
  ]
 },
 {
  "slug": "do-ux-ao-ceo-designers-na-lideranca",
  "title": "Do UX ao CEO: como Designers estão assumindo papéis de liderança nas empresas",
  "description": "Por que UX Designers têm vantagem em papéis de liderança e um passo a passo para crescer de designer a Head, CPO ou CEO.",
  "date": "2025-02-20",
  "category": "career",
  "tags": [
   "Liderança",
   "Carreira",
   "Product Design"
  ],
  "cover": "/blog/do-ux-ao-ceo-designers-na-lideranca.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/do-ux-ao-ceo-como-designers-est%C3%A3o-assumindo-pap%C3%A9is-de-lideran%C3%A7a-nas-empresas-804d0ffbd5c9",
  "readMinutes": 4,
  "related": {
   "href": "/cases/scale",
   "title": "Clint Scale",
   "body": "Na prática: um design system explorável, com tokens, componentes, contraste e governança."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Por muito tempo, designers foram vistos como “os donos das telas”, responsáveis apenas por interfaces bonitas e intuitivas. Mas esse cenário mudou. Hoje, muitos líderes de tecnologia começaram suas carreiras como UX Designers e foram assumindo papéis estratégicos até chegarem ao topo da hierarquia corporativa."
   },
   {
    "type": "p",
    "text": "A pergunta é: como essa transição acontece?"
   },
   {
    "type": "p",
    "text": "Se você quer expandir sua influência, impactar grandes decisões e até mesmo ocupar uma posição de liderança, seja como Head de Design, CPO (Chief Product Officer) ou até CEO, precisa entender o que diferencia os designers que fazem essa jornada daqueles que ficam presos apenas no design visual. Vamos explorar os caminhos para essa evolução e como você pode traçar essa rota na sua carreira."
   },
   {
    "type": "h2",
    "text": "Por que UX Designers têm vantagem na liderança?"
   },
   {
    "type": "p",
    "text": "A liderança exige uma combinação de visão estratégica, habilidades analíticas e capacidade de comunicação. UX Designers, por natureza, desenvolvem algumas dessas qualidades ao longo da carreira. Aqui estão três motivos pelos quais designers estão assumindo posições de destaque nas empresas:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "cards",
     "items": [
      {
       "title": "Centrado no usuário",
       "body": "Entende o cliente profundamente.",
       "icon": "heart"
      },
      {
       "title": "Decisão com dados",
       "body": "Métricas, testes A/B e pesquisa.",
       "icon": "chart"
      },
      {
       "title": "Navega entre áreas",
       "body": "Visão sistêmica do produto.",
       "icon": "branch"
      }
     ]
    },
    "caption": "Três vantagens que o designer já desenvolve na prática."
   },
   {
    "type": "ul",
    "items": [
     "Pensamento centrado no usuário: Grandes líderes entendem profundamente seus clientes. UX Designers têm essa mentalidade desde o início, o que facilita a criação de produtos e estratégias realmente alinhadas às necessidades do mercado.",
     "Tomada de decisão baseada em dados: A prática de UX já envolve análise de métricas, testes A/B e pesquisas com usuários. Esse mindset data-driven é um diferencial importante para qualquer executivo.",
     "Habilidade de navegar entre áreas: Designers trabalham constantemente com desenvolvedores, gerentes de produto, marketing e stakeholders. Essa interdisciplinaridade ajuda a construir uma visão sistêmica, essencial para líderes de alto nível."
    ]
   },
   {
    "type": "p",
    "text": "Mas saber isso não basta. A pergunta é: como sair do design e entrar no jogo da liderança?"
   },
   {
    "type": "h2",
    "text": "Passo a passo para UX Designers que querem se tornar líderes"
   },
   {
    "type": "h2",
    "text": "1. Desenvolva habilidades de gestão e liderança"
   },
   {
    "type": "visual",
    "data": {
     "kind": "ladder",
     "steps": [
      {
       "label": "Designer",
       "icon": "pen"
      },
      {
       "label": "Lidera projetos",
       "icon": "users"
      },
      {
       "label": "Head de Design",
       "icon": "briefcase"
      },
      {
       "label": "CPO",
       "icon": "building"
      },
      {
       "label": "CEO",
       "icon": "crown"
      }
     ]
    },
    "caption": "A trilha que o artigo descreve: cada degrau pede mais visão de negócio."
   },
   {
    "type": "p",
    "text": "Ser um designer excelente não é suficiente para assumir um cargo de liderança."
   },
   {
    "type": "ul",
    "items": [
     "Comece liderando pequenos projetos dentro da empresa.",
     "Aprenda sobre gestão de times, cultura organizacional e metodologias de liderança.",
     "Peça feedback sobre suas habilidades de gestão e trabalhe nelas constantemente."
    ]
   },
   {
    "type": "h2",
    "text": "2. Expanda sua visão para além do design"
   },
   {
    "type": "p",
    "text": "UX Designers que crescem para papéis de liderança não pensam apenas em telas, eles pensam em produto e estratégia."
   },
   {
    "type": "ul",
    "items": [
     "Entenda como o negócio funciona financeiramente (CAC, LTV, ROI, retenção, churn).",
     "Estude estratégias de produto e como as decisões de UX impactam o crescimento da empresa.",
     "Desenvolva um olhar crítico para mercado e concorrência."
    ]
   },
   {
    "type": "h2",
    "text": "3. Trabalhe próximo a PMs, CPOs e CEOs"
   },
   {
    "type": "p",
    "text": "O networking interno é essencial. Líderes não se formam sozinhos, eles precisam entender e se conectar com quem já está tomando grandes decisões."
   },
   {
    "type": "ul",
    "items": [
     "Participe de reuniões estratégicas e entenda a lógica por trás das decisões executivas.",
     "Traga insights valiosos para o negócio com base no comportamento do usuário.",
     "Posicione-se como um parceiro estratégico, não apenas como executor de demandas."
    ]
   },
   {
    "type": "h2",
    "text": "4. Aprenda a comunicar ideias com impacto"
   },
   {
    "type": "p",
    "text": "Um grande líder precisa vender suas ideias de forma clara e persuasiva. Para isso:"
   },
   {
    "type": "ul",
    "items": [
     "Aprimore suas habilidades de storytelling e apresentação.",
     "Use dados e insights para defender propostas com embasamento sólido.",
     "Torne-se um excelente comunicador, capaz de alinhar diferentes times e stakeholders."
    ]
   },
   {
    "type": "h2",
    "text": "5. Saia da sua zona de conforto e assuma responsabilidades maiores"
   },
   {
    "type": "p",
    "text": "Se quer crescer, é preciso estar disposto a sair da bolha do design e aceitar desafios fora da sua área tradicional."
   },
   {
    "type": "ul",
    "items": [
     "Pegue projetos que envolvam estratégia, inovação e tomada de decisão de alto impacto.",
     "Explore outras áreas como negócios, growth e marketing.",
     "Demonstre iniciativa para resolver problemas e melhorar processos na empresa."
    ]
   },
   {
    "type": "h2",
    "text": "Casos de sucesso: Designers que chegaram ao topo"
   },
   {
    "type": "p",
    "text": "Vários líderes de tecnologia começaram suas carreiras no design e hoje ocupam posições estratégicas nas maiores empresas do mundo. Alguns exemplos:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "cards",
     "items": [
      {
       "title": "Scott Belsky",
       "body": "De designer a CPO da Adobe.",
       "icon": "user"
      },
      {
       "title": "Brian Chesky",
       "body": "Designer de formação, CEO do Airbnb.",
       "icon": "user"
      },
      {
       "title": "Julie Zhuo",
       "body": "Ex-VP de Design do Facebook.",
       "icon": "user"
      }
     ]
    },
    "caption": "Exemplos citados no artigo."
   },
   {
    "type": "ul",
    "items": [
     "Scott Belsky: Começou como designer e se tornou Chief Product Officer da Adobe.",
     "Brian Chesky: Designer de formação, hoje é CEO e cofundador do Airbnb.",
     "Julie Zhuo: Ex-VP de Design do Facebook, influenciando diretamente a estratégia da empresa."
    ]
   },
   {
    "type": "p",
    "text": "O que esses líderes têm em comum? Eles foram além do design e se tornaram estrategistas de produto e negócio."
   },
   {
    "type": "h2",
    "text": "Conclusão: O futuro dos UX Designers é estratégico"
   },
   {
    "type": "p",
    "text": "A nova geração de designers precisa ir além das interfaces e pensar de forma mais ampla. Se você deseja crescer na carreira e ocupar uma posição de liderança, o caminho está aberto, mas exige esforço, aprendizado contínuo e visão estratégica."
   },
   {
    "type": "p",
    "text": "O mercado está valorizando designers que pensam como líderes. A pergunta é: você está pronto para dar esse passo?"
   }
  ]
 },
 {
  "slug": "ia-vai-transformar-seu-trabalho-como-ux-designer",
  "title": "Como a Inteligência Artificial vai transformar seu trabalho como UX Designer?",
  "description": "Formas reais de usar IA no processo de UX: pesquisa com mais profundidade, wireframes acelerados e personalização em escala, sem perder o toque humano.",
  "date": "2025-02-20",
  "category": "ai",
  "tags": [
   "IA",
   "UX",
   "Pesquisa"
  ],
  "cover": "/blog/ia-vai-transformar-seu-trabalho-como-ux-designer.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/como-a-intelig%C3%AAncia-artificial-vai-transformar-seu-trabalho-como-ux-designer-9099e185d1d4",
  "readMinutes": 3,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: agentes de IA que agem dentro do CRM e deixam a pessoa no controle."
  },
  "updateNote": "Revisado em outubro de 2026: incluí o que mudou desde a publicação e um novo visual para explicar a ideia central.",
  "blocks": [
   {
    "type": "p",
    "text": "Se você trabalha com UX Design, já deve ter ouvido falar que a inteligência artificial está mudando tudo. Mas, na prática, o que isso significa para você? Será que a IA vai tomar seu lugar? Ou será que pode ser uma aliada poderosa para criar experiências mais inteligentes e personalizadas?"
   },
   {
    "type": "p",
    "text": "A verdade é que a IA já está impactando nosso trabalho, mas de formas que vão além dos chatbots e geradores de imagens. Vamos explorar algumas maneiras reais de usar IA para melhorar seu processo de design sem cair na mesmice."
   },
   {
    "type": "h2",
    "text": "IA Não é Mágica, Mas Pode Ser um Atalho Inteligente"
   },
   {
    "type": "p",
    "text": "A primeira coisa que você precisa entender é que a IA não é uma solução pronta que vai substituir seu trabalho criativo. O que ela pode fazer, no entanto, é economizar seu tempo, sugerir novas abordagens e facilitar a análise de dados que antes eram impossíveis de processar manualmente."
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Pesquisa",
       "icon": "search"
      },
      {
       "label": "Wireframes",
       "icon": "pen"
      },
      {
       "label": "Personalização",
       "icon": "user"
      },
      {
       "label": "Decisão humana",
       "icon": "userCheck"
      }
     ]
    },
    "caption": "Os três usos do artigo, sempre terminando na decisão do designer."
   },
   {
    "type": "p",
    "text": "Se você já passou horas organizando planilhas de pesquisa, tentando identificar padrões em entrevistas ou testando pequenas variações de um design, sabe o quanto isso pode ser cansativo. Aqui é onde a IA brilha."
   },
   {
    "type": "h2",
    "text": "1. Pesquisas de Usuário com Mais Profundidade (E Menos Esforço)"
   },
   {
    "type": "p",
    "text": "Se você faz UX Research, sabe o desafio que é analisar respostas abertas de questionários e entrevistas. Ferramentas de IA podem ajudar a processar esses dados em segundos, identificando padrões e tendências que levariam horas para serem encontrados manualmente."
   },
   {
    "type": "p",
    "lead": "O que vale a pena testar:",
    "text": ""
   },
   {
    "type": "ul",
    "items": [
     "RAPID (da UserTesting) usa IA para identificar insights a partir de entrevistas gravadas.",
     "Lookback agora tem recursos que destacam automaticamente momentos-chave das conversas com usuários.",
     "Perplexity AI pode ajudar a reunir informações sobre o comportamento do usuário sem precisar vasculhar dezenas de artigos."
    ]
   },
   {
    "type": "h2",
    "text": "2. Wireframes e Prototipação Acelerada"
   },
   {
    "type": "p",
    "text": "Se você já se pegou ajustando pequenos detalhes em um wireframe por horas, talvez seja hora de testar uma abordagem mais inteligente. Algumas ferramentas agora usam IA para sugerir layouts baseados em padrões comprovados de usabilidade."
   },
   {
    "type": "p",
    "lead": "O que pode ser útil:",
    "text": ""
   },
   {
    "type": "ul",
    "items": [
     "O Galileo AI transforma descrições de texto em interfaces prontas para teste.",
     "O Uizard permite gerar telas funcionais rapidamente a partir de esboços desenhados à mão."
    ]
   },
   {
    "type": "p",
    "text": "Isso não significa que você deve abandonar a criatividade, pelo contrário. A IA pode ser uma base inicial, permitindo que você se concentre no que realmente importa: a experiência do usuário."
   },
   {
    "type": "h2",
    "text": "3. Personalização em Escala (Sem Perder a Humanidade)"
   },
   {
    "type": "p",
    "text": "Um dos maiores desafios no UX Design hoje é criar experiências que pareçam pessoais, mesmo quando falamos de produtos usados por milhões de pessoas. Com IA, podemos criar interfaces que se adaptam ao comportamento do usuário em tempo real."
   },
   {
    "type": "p",
    "lead": "Exemplos do que já está acontecendo:",
    "text": ""
   },
   {
    "type": "ul",
    "items": [
     "A Airbnb usa IA para sugerir imagens e descrições personalizadas de acomodações, dependendo do perfil do visitante.",
     "O Spotify não apenas recomenda músicas, mas ajusta a interface com base no seu horário do dia e padrão de uso.",
     "Ferramentas de eye-tracking baseadas em IA, como o Attention Insight, preveem onde os usuários provavelmente vão focar dentro de uma interface."
    ]
   },
   {
    "type": "p",
    "text": "Isso abre um mundo de possibilidades para UX Designers que querem criar experiências mais imersivas e inteligentes."
   },
   {
    "type": "h2",
    "text": "IA e UX Design: O Que Vem Por Aí?"
   },
   {
    "type": "p",
    "text": "Estamos só no começo dessa revolução. Em breve, veremos ferramentas que vão muito além da automação básica, ajudando UX Designers a testar conceitos rapidamente, prever comportamentos e até mesmo criar experiências totalmente personalizadas sem esforço manual excessivo."
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Sem IA",
      "icon": "timer",
      "items": [
       "Horas organizando entrevistas",
       "Ajustes manuais repetitivos"
      ]
     },
     "right": {
      "title": "Com IA como aliada",
      "icon": "sparkles",
      "items": [
       "Padrões em minutos",
       "Mais tempo para a experiência"
      ]
     }
    },
    "caption": "A IA economiza o tempo operacional; a empatia continua humana."
   },
   {
    "type": "p",
    "text": "Mas a verdade é que a IA não substitui a intuição, a criatividade e a empatia, que são as verdadeiras forças por trás do UX Design. O segredo é aprender a usá-la como uma aliada estratégica, sem perder o toque humano que faz toda a diferença."
   },
   {
    "type": "h2",
    "text": "O que mudou desde então"
   },
   {
    "type": "p",
    "text": "A previsão deste texto se confirmou, e mais rápido do que eu imaginava. A IA saiu do papel de assistente pontual e passou a gerar fluxos, telas e código inteiros."
   },
   {
    "type": "p",
    "text": "Com isso, o trabalho do designer foi para o começo e para o fim do processo: definir bem o problema e o contexto, e avaliar com rigor o que foi gerado. Escrevi sobre isso na série “Prompt e Design na era da IA”."
   },
   {
    "type": "p",
    "text": "Agora quero saber de você: já experimentou alguma dessas ferramentas no seu fluxo de trabalho? O que acha da ideia de integrar IA no UX Design? Me conta nos comentários!"
   }
  ],
  "updated": "2026-10-01"
 },
 {
  "slug": "ia-transformando-prototipagem-e-design-de-interfaces",
  "title": "Como a IA está transformando a prototipagem e o design de interfaces",
  "description": "Do esboço ao protótipo funcional: como a IA mudou a prototipagem, quais ferramentas surgiram e por que o papel do designer fica mais estratégico.",
  "date": "2025-01-29",
  "category": "ai",
  "tags": [
   "IA",
   "Prototipagem",
   "UI"
  ],
  "cover": "/blog/ia-transformando-prototipagem-e-design-de-interfaces.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/como-a-ia-est%C3%A1-transformando-a-prototipagem-e-o-design-de-interfaces-3d2680960847",
  "readMinutes": 3,
  "related": {
   "href": "/cases/scale",
   "title": "Clint Scale",
   "body": "Na prática: um design system explorável, com tokens, componentes, contraste e governança."
  },
  "updateNote": "Revisado em outubro de 2026: incluí o que mudou desde a publicação e um novo visual para explicar a ideia central.",
  "blocks": [
   {
    "type": "p",
    "text": "Há alguns anos, imaginar que um esboço feito à mão poderia se transformar automaticamente em um protótipo funcional parecia coisa de ficção científica. Hoje, essa realidade está a poucos cliques de distância. A inteligência artificial (IA) não apenas acelerou o processo de design, mas também redefiniu como criamos experiências digitais."
   },
   {
    "type": "p",
    "text": "Mas aí surge a grande pergunta: a IA vai substituir os designers?"
   },
   {
    "type": "p",
    "text": "A resposta curta: não. A resposta completa: a IA não veio para substituir, mas para amplificar nosso potencial, eliminando tarefas repetitivas e nos permitindo focar no que realmente importa, criar experiências intuitivas e envolventes para os usuários."
   },
   {
    "type": "h2",
    "text": "Ferramentas de IA que estão revolucionando o design"
   },
   {
    "type": "p",
    "text": "Nos últimos anos, diversas ferramentas começaram a integrar IA para otimizar a prototipagem e o design de interfaces. Aqui estão algumas das mais promissoras:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Esboço",
       "icon": "pen"
      },
      {
       "label": "IA gera a tela",
       "icon": "wand"
      },
      {
       "label": "Designer ajusta",
       "icon": "eye"
      },
      {
       "label": "Protótipo testável",
       "icon": "click"
      }
     ]
    },
    "caption": "A IA encurta o caminho entre a ideia e algo que dá para testar."
   },
   {
    "type": "ul",
    "items": [
     "Lovable, Um gerador de interfaces impulsionado por IA que sugere elementos automaticamente, ajusta layouts e permite testar diferentes abordagens de UX/UI em tempo recorde.",
     "Figma com AI Plugins, O Figma, uma das ferramentas mais populares entre designers, agora conta com plugins que utilizam IA para sugerir layouts, otimizar espaçamentos e até gerar textos placeholder mais naturais e contextuais.",
     "Uizard, Converte rabiscos feitos à mão em protótipos funcionais, acelerando a fase inicial do design e facilitando o brainstorming de ideias.",
     "Galileo AI, Gera interfaces automaticamente a partir de descrições em texto, permitindo transformar ideias abstratas em protótipos interativos sem esforço."
    ]
   },
   {
    "type": "h2",
    "text": "IA e o impacto no processo criativo"
   },
   {
    "type": "p",
    "text": "A automação de tarefas mecânicas, como alinhar componentes, definir espaçamentos e ajustar cores, permite que os designers dediquem mais tempo à estratégia, acessibilidade e experiência do usuário. Além disso, a IA democratiza o design, permitindo que profissionais sem conhecimento técnico avançado consigam validar ideias rapidamente."
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Antes",
      "icon": "timer",
      "items": [
       "Horas ajustando pixels",
       "Pouco tempo para estratégia"
      ]
     },
     "right": {
      "title": "Agora",
      "icon": "target",
      "items": [
       "Tarefas mecânicas automatizadas",
       "Foco em acessibilidade e experiência"
      ]
     }
    },
    "caption": "O tempo que a IA libera volta para o que importa no design."
   },
   {
    "type": "p",
    "text": "Mas, ao mesmo tempo, a IA também nos desafia a redefinir nosso papel. Se antes gastávamos horas ajustando pixels, agora precisamos nos aprofundar na experiência do usuário, no design inclusivo e na curadoria de interfaces significativas."
   },
   {
    "type": "h2",
    "text": "Prototipar em 2026: do clique ao código"
   },
   {
    "type": "p",
    "text": "Quando escrevi este texto, a IA ajudava em partes do processo. Hoje ferramentas como Figma Make, v0, Lovable e Claude geram protótipos funcionais, com dados e navegação, a partir de um bom contexto."
   },
   {
    "type": "p",
    "text": "Isso muda o momento em que o usuário entra. Dá para testar uma ideia funcionando muito mais cedo."
   },
   {
    "type": "visual",
    "id": "proto-loop",
    "caption": "O protótipo funcional encurta o caminho até o usuário. Mas o teste continua sendo a etapa que valida."
   },
   {
    "type": "p",
    "text": "O cuidado é não confundir acabamento com validação. Um protótipo que parece pronto convence o time com facilidade, e por isso precisa passar por teste com usuários antes de virar decisão."
   },
   {
    "type": "h2",
    "text": "O futuro do design: mais estratégico e humano"
   },
   {
    "type": "p",
    "text": "O que diferencia um grande designer não é a ferramenta que ele usa, mas como ele usa. A IA não elimina a necessidade de designers, mas nos convida a assumir um papel mais estratégico. O futuro do design não será apenas sobre criar interfaces bonitas, mas sim sobre usar a tecnologia de maneira inteligente para potencializar a criatividade e a empatia."
   },
   {
    "type": "p",
    "text": "E você, já está utilizando IA no seu processo de design? Como tem sido essa experiência? Compartilhe nos comentários!"
   }
  ],
  "updated": "2026-10-01"
 },
 {
  "slug": "design-thinking-resolver-problemas",
  "title": "Design Thinking: como resolver problemas de forma criativa e centrada no ser humano",
  "description": "Design Thinking além dos post-its: uma abordagem centrada no ser humano para resolver problemas, com pilares, exemplos e como aplicar no dia a dia.",
  "date": "2024-12-02",
  "category": "ux",
  "tags": [
   "Design Thinking",
   "UX",
   "Empatia"
  ],
  "cover": "/blog/design-thinking-resolver-problemas.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/design-thinking-como-resolver-problemas-de-forma-criativa-e-centrada-no-ser-humano-4f4296b5fd2c",
  "readMinutes": 3,
  "related": {
   "href": "/cases/servientrega",
   "title": "Servientrega",
   "body": "Na prática: uma jornada complexa transformada em uma experiência visual simples."
  },
  "blocks": [
   {
    "type": "p",
    "text": "O que vem à sua mente quando você ouve “Design Thinking”? Talvez um brainstorming intenso com post-its espalhados pela sala? Apesar dessa imagem popular, o Design Thinking é muito mais do que uma técnica de colaboração. É uma abordagem poderosa e centrada no ser humano para resolver problemas, que coloca as pessoas no centro de cada decisão."
   },
   {
    "type": "p",
    "text": "Quer entender como isso pode transformar o seu processo de design? Vem comigo!"
   },
   {
    "type": "h2",
    "text": "O Que é Design Thinking?"
   },
   {
    "type": "p",
    "text": "No cerne do Design Thinking está a empatia: antes de criar qualquer solução, o foco é entender profundamente as necessidades, desejos e experiências das pessoas que serão impactadas pelo produto ou serviço."
   },
   {
    "type": "p",
    "text": "Imagine que você está projetando um novo aplicativo para estudantes universitários. Em vez de começar a desenhar interfaces, você dedica tempo para conversar com estudantes, entender suas rotinas, frustrações e o que realmente precisam para facilitar a vida. Esse processo não apenas guia a criação, mas também humaniza as soluções, garantindo que elas façam sentido no mundo real."
   },
   {
    "type": "visual",
    "id": "lt-empathy",
    "caption": "Antes de desenhar: ouvir, anotar e agrupar até o problema real aparecer."
   },
   {
    "type": "h2",
    "text": "Um Exemplo Prático"
   },
   {
    "type": "p",
    "text": "Imagine um chef que quer criar um novo prato para o cardápio do restaurante. Ele poderia simplesmente testar combinações de sabores por conta própria, mas ao invés disso, ele resolve conversar com os clientes. Pergunta sobre preferências, experimenta receitas diferentes e coleta feedback antes de definir o prato final."
   },
   {
    "type": "visual",
    "data": {
     "kind": "cycle",
     "nodes": [
      {
       "label": "Ouvir",
       "icon": "mic"
      },
      {
       "label": "Criar",
       "icon": "pen"
      },
      {
       "label": "Testar",
       "icon": "flask"
      },
      {
       "label": "Ajustar",
       "icon": "repeat"
      }
     ],
     "center": "Pessoas"
    },
    "caption": "O ciclo do chef do artigo: ouvir, criar e ajustar com quem vai usar."
   },
   {
    "type": "p",
    "text": "Esse ciclo de ouvir, criar e ajustar é a essência do Design Thinking. É um processo iterativo que busca a solução ideal ao colocar as pessoas no centro da criação."
   },
   {
    "type": "visual",
    "id": "lt-iterate",
    "caption": "Cada volta de teste e ajuste deixa a solução melhor do que a anterior. É o ciclo, não a primeira ideia, que acerta."
   },
   {
    "type": "h2",
    "text": "Por Que o Design Thinking é Importante?"
   },
   {
    "type": "p",
    "text": "Ser “centrado no ser humano” vai além de criar produtos bonitos ou funcionais. É sobre resolver problemas de forma que faça sentido para quem realmente importa: o usuário."
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Empatia",
       "icon": "heart"
      },
      {
       "label": "Definição",
       "icon": "target"
      },
      {
       "label": "Co-criação",
       "icon": "users"
      },
      {
       "label": "Prototipagem",
       "icon": "pen"
      }
     ]
    },
    "caption": "Os quatro pilares do artigo, em sequência."
   },
   {
    "type": "p",
    "text": "Veja os principais pilares do Design Thinking:"
   },
   {
    "type": "ul",
    "items": [
     "Empatia: Antes de pensar em soluções, é essencial ouvir histórias, observar comportamentos e mergulhar no universo do usuário. Isso permite identificar problemas reais que talvez não sejam óbvios à primeira vista.",
     "Definição de Necessidades: Quando você entende os usuários profundamente, consegue mapear suas dores e necessidades de forma mais assertiva.",
     "Co-Criação: Design Thinking valoriza a colaboração ativa. Trazer os usuários para participar da criação das ideias enriquece o processo e garante que a solução final realmente os atenda.",
     "Prototipagem e Iteração: Em vez de gastar meses criando algo perfeito, o Design Thinking incentiva a criação de protótipos rápidos. Esses protótipos são testados, refinados e ajustados com base no feedback dos usuários."
    ]
   },
   {
    "type": "h2",
    "text": "Como Aplicar Design Thinking no Seu Dia a Dia?"
   },
   {
    "type": "ul",
    "items": [
     "No Design de Produtos Digitais: Antes de criar wireframes no Figma, faça entrevistas com os usuários para entender suas dores e expectativas.",
     "No Marketing: Desenvolva campanhas a partir do feedback direto do público-alvo.",
     "Na Resolução de Conflitos Internos: Use empatia para ouvir as partes envolvidas e cocriar soluções que sejam aceitáveis para todos."
    ]
   },
   {
    "type": "h2",
    "text": "O Impacto de Ser Centrado no Ser Humano"
   },
   {
    "type": "p",
    "text": "Quando colocamos as pessoas no centro, criamos mais do que soluções eficazes: criamos conexões emocionais. Produtos e serviços bem pensados não apenas resolvem problemas, mas também encantam e criam lealdade."
   },
   {
    "type": "p",
    "text": "Ao adotar o Design Thinking, você deixa de simplesmente “criar para o mercado” e passa a criar para as pessoas."
   },
   {
    "type": "p",
    "text": "E você? Já aplicou Design Thinking no seu trabalho ou quer começar? Compartilhe sua experiência nos comentários! Vamos trocar ideias e aprender juntos."
   }
  ],
  "updated": "2026-10-02"
 },
 {
  "slug": "12-metricas-de-ux",
  "title": "As 12 principais métricas de UX para avaliar e melhorar a experiência do usuário",
  "description": "SUPR-Q, SUS, NPS, SEQ e mais: as 12 principais ferramentas para medir a experiência do usuário, com propósito e exemplo de cada uma.",
  "date": "2024-11-24",
  "category": "ux",
  "tags": [
   "Métricas",
   "UX Research",
   "Usabilidade"
  ],
  "cover": "/blog/12-metricas-de-ux.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/as-12-principais-m%C3%A9tricas-de-ux-para-avaliar-e-melhorar-a-experi%C3%AAncia-do-usu%C3%A1rio-1d87208f133f",
  "readMinutes": 6,
  "related": {
   "href": "/cases/acquire",
   "title": "Clint Acquire",
   "body": "Na prática: uma landing page e um fluxo conversacional que concentraram 79% da demanda comercial."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Avaliar a experiência do usuário não é apenas um luxo, mas uma necessidade para criar produtos digitais que realmente conectem-se com as pessoas. Se você quer entender melhor como seus usuários percebem seu produto, estas 12 ferramentas são essenciais. Vamos descomplicar cada uma e mostrar como elas podem ser aplicadas no dia a dia do design."
   },
   {
    "type": "h2",
    "text": "SUPR-Q: Medindo Confiança e Usabilidade"
   },
   {
    "type": "p",
    "lead": "Propósito:",
    "text": "Avaliar usabilidade, confiança, lealdade e aparência geral."
   },
   {
    "type": "p",
    "lead": "Exemplo:",
    "text": "Um e-commerce compara seu site com os concorrentes usando o SUPR-Q, identificando se o design é confiável e fácil de navegar."
   },
   {
    "type": "p",
    "lead": "Como funciona:",
    "text": "São 8 itens que resultam em quatro fatores: usabilidade, confiança, aparência e lealdade. Como é padronizado, permite comparar o seu site com outros que usaram o mesmo questionário."
   },
   {
    "type": "visual",
    "id": "m-suprq",
    "caption": "Os 8 itens viram quatro fatores. O fator mais baixo mostra onde a experiência perde força."
   },
   {
    "type": "h2",
    "text": "SUS: Avaliação Rápida de Usabilidade"
   },
   {
    "type": "p",
    "lead": "Propósito:",
    "text": "Escala de 10 itens para medir usabilidade de forma rápida."
   },
   {
    "type": "p",
    "lead": "Exemplo:",
    "text": "Um banco digital usa o SUS após lançar uma nova funcionalidade para saber se os clientes conseguem utilizá-la com facilidade."
   },
   {
    "type": "p",
    "lead": "Como funciona:",
    "text": "São 10 afirmações respondidas de 1 a 5, alternando frases positivas e negativas. Nas positivas, subtrai 1 da resposta; nas negativas, subtrai a resposta de 5. A soma multiplicada por 2,5 vira uma nota de 0 a 100. A média de referência mais usada é 68."
   },
   {
    "type": "visual",
    "id": "m-sus",
    "caption": "Do questionário à nota: cada resposta vira pontos, e a soma vezes 2,5 é comparada com a média de referência de 68."
   },
   {
    "type": "h2",
    "text": "NPS: Avaliação da Fidelidade do Cliente"
   },
   {
    "type": "p",
    "lead": "Propósito:",
    "text": "Mede a probabilidade de clientes recomendarem seu produto."
   },
   {
    "type": "p",
    "lead": "Exemplo:",
    "text": "Após uma compra, um e-commerce envia uma pesquisa de NPS para avaliar a satisfação e lealdade do cliente."
   },
   {
    "type": "p",
    "lead": "Como funciona:",
    "text": "Uma única pergunta, de 0 a 10. Quem dá 9 ou 10 é promotor, 7 ou 8 é neutro e de 0 a 6 é detrator. O NPS é a porcentagem de promotores menos a de detratores, e vai de −100 a 100."
   },
   {
    "type": "visual",
    "id": "m-nps",
    "caption": "Cada resposta cai em um dos três grupos. Neutros não entram na conta."
   },
   {
    "type": "h2",
    "text": "SEQ: Medindo a Dificuldade da Tarefa"
   },
   {
    "type": "p",
    "lead": "Propósito:",
    "text": "Pergunta única para medir a dificuldade de uma tarefa específica."
   },
   {
    "type": "p",
    "lead": "Exemplo:",
    "text": "Uma empresa de contabilidade usa o SEQ para saber se os clientes conseguem gerar relatórios financeiros sem problemas."
   },
   {
    "type": "p",
    "lead": "Como funciona:",
    "text": "Logo depois de cada tarefa, a pessoa responde uma pergunta de 1 (muito difícil) a 7 (muito fácil). Comparar as notas entre tarefas mostra onde o fluxo trava."
   },
   {
    "type": "visual",
    "id": "m-seq",
    "caption": "Uma pergunta por tarefa. A tarefa com a nota mais baixa é a primeira a investigar."
   },
   {
    "type": "h2",
    "text": "UMUX/UMUX-LITE: Alternativa ao SUS"
   },
   {
    "type": "p",
    "lead": "Propósito:",
    "text": "Avaliação compacta da usabilidade percebida."
   },
   {
    "type": "p",
    "lead": "Exemplo:",
    "text": "Uma empresa de mídia aplica o UMUX-LITE para testar a aceitação de um novo layout no portal de notícias."
   },
   {
    "type": "p",
    "lead": "Como funciona:",
    "text": "O UMUX-LITE usa só duas afirmações, de 1 a 7: se as funcionalidades atendem o que a pessoa precisa e se é fácil de usar. É curto o bastante para entrar no fim de qualquer sessão e costuma acompanhar bem o resultado do SUS."
   },
   {
    "type": "visual",
    "id": "m-umux",
    "caption": "Duas perguntas e uma nota. Ideal quando não dá para pedir mais tempo de quem responde."
   },
   {
    "type": "h2",
    "text": "WAMMI: Satisfação em Ambientes Complexos"
   },
   {
    "type": "p",
    "lead": "Propósito:",
    "text": "Avalia a satisfação do usuário em sites complexos ou com grande tráfego."
   },
   {
    "type": "p",
    "lead": "Exemplo:",
    "text": "Uma rede social usa o WAMMI para medir a reação dos usuários às mudanças na interface."
   },
   {
    "type": "p",
    "lead": "Como funciona:",
    "text": "São 20 afirmações sobre o site, resumidas em cinco dimensões: atratividade, controle, eficiência, utilidade e facilidade de aprender. O resultado mostra o perfil da experiência, não só uma nota."
   },
   {
    "type": "visual",
    "id": "m-wammi",
    "caption": "As afirmações formam um perfil em cinco dimensões. A dimensão afundada é o ponto fraco."
   },
   {
    "type": "h2",
    "text": "PSSUQ: Qualidade e Utilidade do Sistema"
   },
   {
    "type": "p",
    "lead": "Propósito:",
    "text": "Mede a experiência do usuário em cenários específicos de uso."
   },
   {
    "type": "p",
    "lead": "Exemplo:",
    "text": "Uma plataforma SaaS usa o PSSUQ para entender se as configurações de integração são fáceis para os usuários."
   },
   {
    "type": "p",
    "lead": "Como funciona:",
    "text": "Na versão atual são 16 itens, de 1 a 7, divididos em três subescalas: utilidade do sistema, qualidade da informação e qualidade da interface. Aqui a lógica é inversa: quanto menor a nota, melhor."
   },
   {
    "type": "visual",
    "id": "m-pssuq",
    "caption": "Três subescalas, onde menor é melhor. Separar a nota mostra se o problema é a interface ou a informação."
   },
   {
    "type": "h2",
    "text": "SUMI: Avaliação Profunda de Software"
   },
   {
    "type": "p",
    "lead": "Propósito:",
    "text": "Avaliação detalhada de software com 50 itens."
   },
   {
    "type": "p",
    "lead": "Exemplo:",
    "text": "Uma empresa de TI aplica o SUMI para testar a usabilidade de seu ERP entre clientes corporativos."
   },
   {
    "type": "p",
    "lead": "Como funciona:",
    "text": "São 50 itens respondidos com concordo, indeciso ou discordo, agrupados em cinco subescalas: eficiência, afeto, utilidade, controle e aprendizagem. É longo, mas detalha bem softwares complexos."
   },
   {
    "type": "visual",
    "id": "m-sumi",
    "caption": "Muitos itens, cinco subescalas. Vale o esforço quando o software é usado o dia inteiro."
   },
   {
    "type": "h2",
    "text": "QUIS: Satisfação com Interfaces Digitais"
   },
   {
    "type": "p",
    "lead": "Propósito:",
    "text": "Avalia o feedback, aprendizado e engajamento com interfaces."
   },
   {
    "type": "p",
    "lead": "Exemplo:",
    "text": "Um app de aprendizado usa o QUIS para medir o que os alunos pensam sobre a navegação nas aulas interativas."
   },
   {
    "type": "p",
    "lead": "Como funciona:",
    "text": "Usa pares de palavras opostas em escalas de 1 a 9, organizados por partes da interface, como tela, terminologia, aprendizado e capacidades do sistema."
   },
   {
    "type": "visual",
    "id": "m-quis",
    "caption": "Cada parte da interface recebe sua própria escala, e fica claro qual delas mais atrapalha."
   },
   {
    "type": "h2",
    "text": "PURE: Priorização de Usabilidade em Tarefas Essenciais"
   },
   {
    "type": "p",
    "lead": "Propósito:",
    "text": "Foco na facilidade de tarefas principais."
   },
   {
    "type": "p",
    "lead": "Exemplo:",
    "text": "Uma empresa de logística usa o PURE para verificar como os motoristas acessam informações cruciais, como status de entregas e rotas."
   },
   {
    "type": "p",
    "lead": "Como funciona:",
    "text": "Não é um questionário para usuários. Especialistas dividem a tarefa em passos e dão a cada um nota 1 (fácil), 2 (algum esforço) ou 3 (difícil). A soma é a nota da tarefa, e quanto menor, melhor."
   },
   {
    "type": "visual",
    "id": "m-pure",
    "caption": "Cada passo recebe 1, 2 ou 3. O passo vermelho é o primeiro a redesenhar."
   },
   {
    "type": "h2",
    "text": "NASA-TLX: Medindo Carga de Trabalho"
   },
   {
    "type": "p",
    "lead": "Propósito:",
    "text": "Avalia a carga cognitiva e física."
   },
   {
    "type": "p",
    "lead": "Exemplo:",
    "text": "Um hospital mede o impacto do sistema de prontuário eletrônico na carga de trabalho dos enfermeiros com o NASA-TLX."
   },
   {
    "type": "p",
    "lead": "Como funciona:",
    "text": "Mede a carga de trabalho em seis dimensões, de 0 a 100: demanda mental, demanda física, pressão de tempo, desempenho, esforço e frustração. É muito usado para comparar um sistema atual com uma versão nova."
   },
   {
    "type": "visual",
    "id": "m-nasatlx",
    "caption": "As seis dimensões, antes e depois. A queda mostra quanto peso o novo sistema tirou de quem usa."
   },
   {
    "type": "h2",
    "text": "UEQ: Avaliação Rápida de Usabilidade e UX"
   },
   {
    "type": "p",
    "lead": "Propósito:",
    "text": "Captura rapidamente aspectos de experiência do usuário."
   },
   {
    "type": "p",
    "lead": "Exemplo:",
    "text": "Um app de streaming usa o UEQ para medir a intuição da busca e filtros no catálogo de filmes."
   },
   {
    "type": "p",
    "lead": "Como funciona:",
    "text": "São 26 pares de adjetivos opostos, de 1 a 7, agrupados em seis escalas: atratividade, clareza, eficiência, confiabilidade, estimulação e novidade. Cobre tanto a parte prática quanto a emocional da experiência."
   },
   {
    "type": "visual",
    "id": "m-ueq",
    "caption": "Um par de adjetivos de cada escala. Dá para ver que um produto pode agradar e mesmo assim parecer lento."
   },
   {
    "type": "h2",
    "text": "Como escolher a métrica certa"
   },
   {
    "type": "p",
    "text": "Doze métricas é muita coisa. O erro mais comum é escolher a mais famosa, em vez da que responde à pergunta do time."
   },
   {
    "type": "p",
    "text": "Duas perguntas ajudam a decidir: estou avaliando uma tarefa específica ou o produto inteiro? E quanto tempo a pessoa pode gastar respondendo?"
   },
   {
    "type": "visual",
    "id": "metric-map",
    "caption": "Comece pela pergunta. Cada pergunta acende o questionário que responde a ela, da tarefa ao produto inteiro."
   },
   {
    "type": "p",
    "text": "Questionários medem percepção. Para entender comportamento, combine com dados de uso, como taxa de conclusão, tempo na tarefa e abandono por etapa.",
    "lead": "Atitude e comportamento:"
   },
   {
    "type": "p",
    "text": "Hoje a IA ajuda muito a agrupar respostas abertas e encontrar temas. Mas a nota e a interpretação precisam ser revisadas por alguém do time, principalmente em amostras pequenas.",
    "lead": "E a IA?"
   },
   {
    "type": "h2",
    "text": "Por que essas ferramentas importam?"
   },
   {
    "type": "p",
    "text": "Elas são como termômetros da experiência do usuário. Aplicadas corretamente, ajudam a ajustar seu produto para: Garantir usabilidade. Fortalecer a lealdade dos usuários. Priorizar melhorias que realmente impactam na experiência."
   },
   {
    "type": "visual",
    "data": {
     "kind": "checklist",
     "items": [
      {
       "label": "Garantir usabilidade",
       "icon": "checkCircle"
      },
      {
       "label": "Fortalecer a lealdade",
       "icon": "heart"
      },
      {
       "label": "Priorizar melhorias com impacto",
       "icon": "target"
      }
     ]
    },
    "caption": "Métricas são termômetros da experiência."
   },
   {
    "type": "p",
    "text": "E você? Já usou alguma dessas métricas? Qual delas te trouxe os insights mais valiosos? Vamos trocar ideias nos comentários!"
   }
  ],
  "updated": "2026-10-02",
  "updateNote": "Revisado em outubro de 2026: incluí o que mudou desde a publicação e um novo visual para explicar a ideia central."
 },
 {
  "slug": "rive-e-phase-movimento-no-design",
  "title": "Ferramentas como Rive e Phase estão facilitando a vida dos Designers ao trazer mais movimento e fluidez para nossos projetos",
  "description": "Por que animação importa no design de produto e quando usar Phase (transições rápidas a partir do Figma) ou Rive (interações em tempo real).",
  "date": "2024-11-23",
  "category": "ds",
  "tags": [
   "Motion",
   "Prototipagem",
   "Ferramentas"
  ],
  "cover": "/blog/rive-e-phase-movimento-no-design.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/ferramentas-como-rive-e-phase-est%C3%A3o-facilitando-a-vida-dos-designers-ao-trazer-mais-movimento-e-da308e142167",
  "readMinutes": 3,
  "related": {
   "href": "/cases/servientrega",
   "title": "Servientrega",
   "body": "Na prática: uma jornada complexa transformada em uma experiência visual simples."
  },
  "updateNote": "Nota de atualização (2026): algumas ferramentas citadas mudaram ou foram substituídas desde a publicação. Vale olhar para o princípio de cada uma, não para o nome.",
  "blocks": [
   {
    "type": "p",
    "text": "Um grande desafio no design de produto é transformar interfaces estáticas e monótonas em experiências dinâmicas e envolventes. Felizmente, ferramentas como Rive e Phase estão tornando isso mais fácil do que nunca, trazendo animações incríveis para nossos protótipos e produtos digitais."
   },
   {
    "type": "p",
    "text": "Essas plataformas são extremamente intuitivas, especialmente para quem já trabalha com Figma ou Framer.. Vamos explorar como essas ferramentas funcionam, o que as torna tão poderosas e qual delas pode ser a melhor escolha para o seu projeto."
   },
   {
    "type": "h2",
    "text": "Por que animações são essenciais no design?"
   },
   {
    "type": "p",
    "text": "Animações não são apenas um “toque especial” no design. Elas ajudam a:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "cards",
     "items": [
      {
       "title": "Guiar",
       "body": "Mostra o que acontece depois da interação.",
       "icon": "compass"
      },
      {
       "title": "Responder",
       "body": "Microinterações dão retorno imediato.",
       "icon": "zap"
      },
      {
       "title": "Envolver",
       "body": "Movimento bem pensado aumenta o engajamento.",
       "icon": "sparkles"
      }
     ]
    },
    "caption": "As três funções do movimento citadas no artigo."
   },
   {
    "type": "ul",
    "items": [
     "Guiar os usuários: Indicando o que acontece após uma interação.",
     "Tornar interfaces mais intuitivas: Microinterações criam uma sensação de resposta imediata.",
     "Envolver os usuários: Uma experiência animada bem planejada pode aumentar o tempo de engajamento."
    ]
   },
   {
    "type": "p",
    "text": "Mas, para criar animações eficientes e integradas ao produto, precisamos de ferramentas que combinem facilidade e potência. É exatamente isso que Rive e Phase oferecem."
   },
   {
    "type": "h2",
    "text": "Phase: Animações rápidas e simples para designers de produto"
   },
   {
    "type": "p",
    "text": "O Phase é ideal para quem já está acostumado com ferramentas como Figma. Ele foi projetado para designers de produto que precisam criar prototipagens animadas de forma intuitiva e sem complicações."
   },
   {
    "type": "p",
    "lead": "Por que usar o Phase?",
    "text": ""
   },
   {
    "type": "ul",
    "items": [
     "Interface familiar e intuitiva: Parece que você está trabalhando no próprio Figma.",
     "Integração com Figma: Exporte seus designs com facilidade e comece a animar diretamente no Phase.",
     "Linha do tempo prática: Controle total sobre tempos e transições.",
     "Exportação em múltiplos formatos: Ideal para compartilhar GIFs ou vídeos com equipes e stakeholders."
    ]
   },
   {
    "type": "h2",
    "text": "Quando usar o Phase?"
   },
   {
    "type": "p",
    "text": "Usei o Phase em um projeto de redesign para uma plataforma SaaS. Com ele, criei transições animadas entre telas em menos de 2 horas. O cliente adorou as animações fluidas, e o time de desenvolvimento integrou as transições em JSON sem retrabalho."
   },
   {
    "type": "h2",
    "text": "Rive: Leve sua animação a um novo nível com interatividade"
   },
   {
    "type": "p",
    "text": "O Rive vai além de animações básicas. Ele permite criar interações dinâmicas que reagem ao comportamento do usuário, ideal para projetos de aplicativos, jogos ou produtos digitais que precisam de respostas em tempo real."
   },
   {
    "type": "p",
    "lead": "Por que usar o Rive?",
    "text": ""
   },
   {
    "type": "ul",
    "items": [
     "Editor avançado: Recursos como rigging e path animations para controle máximo.",
     "Interatividade em tempo real: Crie animações que respondem a cliques, toques ou gestos do usuário.",
     "Exportação para runtime: Integra diretamente em frameworks como Flutter e Unity.",
     "Desempenho otimizado: As animações são leves, perfeitas para web e mobile."
    ]
   },
   {
    "type": "h2",
    "text": "Quando usar o Rive?"
   },
   {
    "type": "p",
    "text": "Criei uma animação de personagem interativo para um app de educação infantil no Rive. O personagem reagia ao toque e guiava o usuário pelo app. A solução aumentou o engajamento em 25%, segundo métricas de interação."
   },
   {
    "type": "h2",
    "text": "Phase vs. Rive: Qual escolher?"
   },
   {
    "type": "h2",
    "text": "Como começar com cada ferramenta?"
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Phase",
      "icon": "pen",
      "items": [
       "Transições entre telas",
       "Integrado ao Figma",
       "Exporta GIF e vídeo"
      ]
     },
     "right": {
      "title": "Rive",
      "icon": "click",
      "items": [
       "Interação em tempo real",
       "Estados e lógica visual",
       "Runtime leve para web e mobile"
      ]
     }
    },
    "caption": "Quando usar cada uma, segundo o artigo."
   },
   {
    "type": "p",
    "lead": "Phase:",
    "text": ""
   },
   {
    "type": "ul",
    "items": [
     "Instale o plugin do Figma e exporte seus designs.",
     "Use a linha do tempo para criar transições fluidas.",
     "Exporte o resultado para compartilhar com seu time ou cliente."
    ]
   },
   {
    "type": "p",
    "lead": "Rive:",
    "text": ""
   },
   {
    "type": "ul",
    "items": [
     "Importe arquivos SVG ou crie arte diretamente no editor.",
     "Configure interatividade usando estados e lógica visual.",
     "Integre suas animações em apps com suporte para runtime."
    ]
   },
   {
    "type": "h2",
    "text": "Conclusão: movimento e fluidez à sua disposição"
   },
   {
    "type": "p",
    "text": "Ferramentas como Rive e Phase estão revolucionando a forma como criamos protótipos animados e interações dinâmicas. Escolher a melhor depende do tipo de projeto:"
   },
   {
    "type": "ul",
    "items": [
     "Precisa de animações rápidas e integradas ao Figma? Vá de Phase.",
     "Quer criar interações avançadas para apps e jogos? Escolha o Rive."
    ]
   },
   {
    "type": "p",
    "text": "Agora quero ouvir você! Já experimentou alguma dessas ferramentas? Como as animações mudaram a experiência dos seus projetos? Deixe um comentário e vamos trocar ideias!"
   }
  ]
 },
 {
  "slug": "lgpd-nas-pesquisas-ux",
  "title": "A Relevância da LGPD nas Pesquisas UX",
  "description": "Como a LGPD fortalece a pesquisa de UX: confiança, qualidade das respostas e boas práticas de consentimento, minimização e armazenamento de dados.",
  "date": "2024-11-08",
  "category": "ux",
  "tags": [
   "LGPD",
   "UX Research",
   "Privacidade"
  ],
  "cover": "/blog/lgpd-nas-pesquisas-ux.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/a-relev%C3%A2ncia-da-lgpd-nas-pesquisas-ux-e27ecc679eed",
  "readMinutes": 3,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: agentes de IA que agem dentro do CRM e deixam a pessoa no controle."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Nos processos de pesquisa de experiência do usuário, o tratamento de dados pessoais é uma questão central. A Lei Geral de Proteção de Dados (LGPD) assegura que a coleta de dados seja feita de forma ética e segura, promovendo a confiança dos participantes. A transparência e o cuidado no uso de dados impactam diretamente a qualidade das respostas e a reputação das empresas."
   },
   {
    "type": "h2",
    "text": "Como a LGPD Contribui para um Relacionamento Confiável com o Usuário"
   },
   {
    "type": "p",
    "text": "A LGPD não se resume apenas ao cumprimento de uma obrigação legal; ela facilita a criação de um ambiente de pesquisa onde os usuários sentem que seus dados estão em boas mãos. Isso é fundamental em um contexto onde as pessoas valorizam privacidade e segurança digital:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Transparência",
       "icon": "eye"
      },
      {
       "label": "Confiança",
       "icon": "shieldCheck"
      },
      {
       "label": "Respostas honestas",
       "icon": "chat"
      },
      {
       "label": "Decisões melhores",
       "icon": "target"
      }
     ]
    },
    "caption": "Privacidade bem tratada melhora a qualidade da pesquisa."
   },
   {
    "type": "ul",
    "items": [
     "Geração de Confiança: a transparência em relação ao uso de dados fortalece a relação com os participantes. Ao saberem que seus dados serão tratados com responsabilidade, os usuários se sentem mais seguros para responder com sinceridade.",
     "Qualidade das Informações: participantes confiantes tendem a fornecer respostas mais detalhadas e honestas, elevando a qualidade das decisões de design baseadas nessas informações."
    ]
   },
   {
    "type": "h2",
    "text": "Melhores Práticas para Aplicar a LGPD em Pesquisas de UX"
   },
   {
    "type": "p",
    "text": "Para tornar a coleta de dados mais segura e conforme a LGPD, é importante adotar práticas que garantam a segurança e o respeito ao usuário:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "checklist",
     "items": [
      {
       "label": "Consentimento claro",
       "icon": "file"
      },
      {
       "label": "Coletar só o essencial",
       "icon": "filter"
      },
      {
       "label": "Armazenar com segurança",
       "icon": "lock"
      },
      {
       "label": "Prazo para eliminar dados",
       "icon": "timer"
      }
     ]
    },
    "caption": "As boas práticas do artigo em formato de checklist."
   },
   {
    "type": "ul",
    "items": [
     "Informação e Consentimento Esclarecidos: explique claramente os objetivos da pesquisa e a finalidade de cada dado solicitado. Garanta que os participantes entendam como e por quanto tempo seus dados serão usados antes de consentirem.",
     "Minimização da Coleta de Dados: solicite apenas informações essenciais para a pesquisa. Coletar o mínimo de dados necessário é uma das melhores maneiras de evitar potenciais problemas de segurança e de conformidade.",
     "Armazenamento e Proteção de Dados: os dados pessoais coletados devem ser armazenados com segurança. Além disso, é importante estabelecer prazos para eliminação dos dados, promovendo a segurança e tranquilidade dos participantes."
    ]
   },
   {
    "type": "h2",
    "text": "Pesquisa com IA e LGPD"
   },
   {
    "type": "p",
    "text": "Hoje é comum transcrever entrevistas e analisar respostas com ferramentas de IA. Isso economiza tempo, mas cria uma pergunta nova: para onde estão indo os dados dos participantes?"
   },
   {
    "type": "ul",
    "items": [
     "Informe no termo de consentimento se gravações ou transcrições passarão por ferramentas de terceiros.",
     "Remova nome, contato e qualquer dado identificável antes de enviar o material para análise.",
     "Prefira ferramentas com contrato que proíba o uso dos dados para treinar modelos.",
     "Defina por quanto tempo o material fica guardado e descarte depois."
    ]
   },
   {
    "type": "visual",
    "id": "consent-flow",
    "caption": "O dado pessoal sai antes de qualquer ferramenta externa. Para a análise, P07 vale tanto quanto o nome real."
   },
   {
    "type": "h2",
    "text": "Proteção de Dados como Pilar de Credibilidade"
   },
   {
    "type": "p",
    "text": "Ao aderir aos princípios da LGPD, as empresas não apenas cumprem exigências legais, mas também fortalecem sua imagem. A atenção à privacidade se traduz em um diferencial competitivo, já que a confiabilidade e o respeito com o usuário se tornam evidentes."
   },
   {
    "type": "p",
    "text": "Em resumo, incorporar a LGPD nas pesquisas UX contribui para um relacionamento mais transparente e respeitoso, e oferece uma experiência onde o participante se sente seguro e valorizado."
   }
  ],
  "updated": "2026-10-01",
  "updateNote": "Revisado em outubro de 2026: incluí o que mudou desde a publicação e um novo visual para explicar a ideia central."
 },
 {
  "slug": "double-diamond-papel-do-ux-designer",
  "title": "Double Diamond: o papel essencial do UX Designer",
  "description": "As quatro etapas do Double Diamond, como o Design Thinking complementa o processo e as ferramentas que apoiam cada fase.",
  "date": "2025-03-12",
  "category": "ux",
  "tags": [
   "Double Diamond",
   "Processo",
   "UX"
  ],
  "cover": "/blog/double-diamond-papel-do-ux-designer.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/double-diamond-o-papel-essencial-do-ux-designer-e7fc6636d564",
  "readMinutes": 4,
  "related": {
   "href": "/cases/acquire",
   "title": "Clint Acquire",
   "body": "Na prática: uma landing page e um fluxo conversacional que concentraram 79% da demanda comercial."
  },
  "updateNote": "Nota de atualização (2026): algumas ferramentas citadas mudaram ou foram substituídas desde a publicação. Vale olhar para o princípio de cada uma, não para o nome.",
  "blocks": [
   {
    "type": "p",
    "text": "O papel da pessoa de UX no desenvolvimento de produtos digitais vai além do design visual. Ela atua na construção de soluções práticas e inovadoras, desde a compreensão profunda das necessidades dos usuários até a colaboração com equipes multifuncionais para garantir que o produto final ofereça uma experiência de uso impactante. A abordagem do Double Diamond do Design Council e o Design Thinking são fundamentais nesse processo, estruturando o caminho do designer de UX por todas as fases do projeto."
   },
   {
    "type": "h2",
    "text": "O Double Diamond e a Atuação do UX Designer"
   },
   {
    "type": "p",
    "text": "O Double Diamond oferece uma visão clara do processo de UX, dividindo-o em quatro etapas principais que cobrem desde a descoberta do problema até a entrega da solução."
   },
   {
    "type": "visual",
    "id": "lt-double-diamond",
    "caption": "Role a página: primeiro abrimos o problema e convergimos para uma definição; depois abrimos soluções e convergimos para a entrega."
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Descoberta",
       "icon": "search"
      },
      {
       "label": "Definição",
       "icon": "target"
      },
      {
       "label": "Desenvolvimento",
       "icon": "pen"
      },
      {
       "label": "Entrega",
       "icon": "rocket"
      }
     ]
    },
    "caption": "Divergir para entender, convergir para decidir, duas vezes."
   },
   {
    "type": "h2",
    "text": "1. Descoberta (Primeiro Diamante):"
   },
   {
    "type": "p",
    "text": "A fase de descoberta é onde o designer de UX coleta informações e identifica problemas centrais, realizando pesquisas qualitativas e quantitativas. A coleta de dados utiliza ferramentas como Google Forms e SurveyMonkey, enquanto plataformas de organização como Notion e Miro permitem documentar e estruturar insights. O papel do UX aqui é essencial, pois ele deve alinhar as descobertas com as expectativas de stakeholders, validando hipóteses com base em dados reais."
   },
   {
    "type": "h2",
    "text": "2. Definição:"
   },
   {
    "type": "p",
    "text": "Com as informações em mãos, o próximo passo é definir o problema central de maneira objetiva. Sessões colaborativas com Miro ou FigJam são úteis para compartilhar descobertas e envolver as partes interessadas, permitindo um entendimento coletivo e direcionado do desafio a ser abordado."
   },
   {
    "type": "h2",
    "text": "3. Desenvolvimento (Segundo Diamante):"
   },
   {
    "type": "p",
    "text": "Esta fase é focada em explorar soluções potenciais para o problema definido. Prototipação e testes de usabilidade entram em cena, com ferramentas como Figma, InVision e Adobe XD, onde o designer de UX cria protótipos interativos que permitem visualizar e testar a experiência antes do desenvolvimento final."
   },
   {
    "type": "h2",
    "text": "4. Entrega:"
   },
   {
    "type": "p",
    "text": "A última fase inclui ajustes finais no produto, garantindo que todas as decisões estejam alinhadas com as necessidades dos usuários. Testes adicionais, revisões e validações finais são realizados para confirmar a adequação da solução. Ferramentas de feedback, como Zoom, são úteis para capturar insights ao vivo e promover refinamentos."
   },
   {
    "type": "h2",
    "text": "Design Thinking na Prática do UX"
   },
   {
    "type": "p",
    "text": "O Design Thinking complementa o Double Diamond ao oferecer um framework mais iterativo e centrado no usuário, composto por cinco etapas principais:"
   },
   {
    "type": "ul",
    "items": [
     "Empatia: o designer de UX observa e entrevista os usuários para captar necessidades reais, utilizando ferramentas como Google Docs para documentar insights. Essa etapa é crucial para uma compreensão profunda das experiências e dos desafios enfrentados pelos usuários.",
     "Definição do Problema: a síntese das informações resulta na definição de um problema claro e bem delimitado, facilitando o desenvolvimento de soluções focadas e alinhadas às necessidades identificadas.",
     "Ideação: sessões de brainstorming colaborativas permitem a exploração de várias soluções. Aqui, o papel do UX Designer é guiar e facilitar o processo, incentivando a participação e a diversidade de ideias.",
     "Prototipação: com Figma e Adobe XD, ideias ganham forma em protótipos, onde a equipe pode visualizar e iterar a interação do usuário antes da fase de desenvolvimento.",
     "Teste e Iteração: o feedback dos usuários é integrado ao produto por meio de testes de usabilidade, promovendo melhorias contínuas. Ferramentas como Zoom são úteis para sessões de feedback em tempo real, e a análise dos resultados permite ajustar o produto até que atenda de forma ideal às expectativas dos usuários."
    ]
   },
   {
    "type": "h2",
    "text": "Ferramentas e Impacto do UX na Organização"
   },
   {
    "type": "p",
    "text": "A combinação de metodologias e ferramentas de UX resulta em produtos mais alinhados com o público-alvo, otimizando recursos e reduzindo custos. Algumas ferramentas:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "cards",
     "items": [
      {
       "title": "Pesquisa",
       "body": "Forms, Typeform",
       "icon": "file"
      },
      {
       "title": "Colaboração",
       "body": "FigJam, Miro, Notion",
       "icon": "users"
      },
      {
       "title": "Prototipação",
       "body": "Figma",
       "icon": "pen"
      },
      {
       "title": "Análise",
       "body": "Hotjar, Clarity",
       "icon": "chart"
      }
     ]
    },
    "caption": "As ferramentas do artigo organizadas por fase."
   },
   {
    "type": "h2",
    "text": "Pesquisa e Coleta de Dados"
   },
   {
    "type": "ul",
    "items": [
     "Google Forms, SurveyMonkey, Typeform: ferramentas populares para coleta de dados quantitativos e qualitativos.",
     "Notion Forms: ideal para formulários personalizados e pesquisas com design mais específico."
    ]
   },
   {
    "type": "h2",
    "text": "Organização e Colaboração"
   },
   {
    "type": "ul",
    "items": [
     "FigJam, Miro, Mural, Notion: plataformas colaborativas que facilitam o mapeamento e a organização das ideias."
    ]
   },
   {
    "type": "h2",
    "text": "Prototipação"
   },
   {
    "type": "ul",
    "items": [
     "Figma, Adobe XD, InVision: ferramentas líderes para a criação de protótipos interativos e de alta fidelidade.",
     "Sketch: uma alternativa leve, popular entre designers de interface."
    ]
   },
   {
    "type": "h2",
    "text": "Teste e Análise"
   },
   {
    "type": "ul",
    "items": [
     "UserTesting: para realizar testes de usabilidade com usuários reais.",
     "Hotjar e Clarity (Microsoft): oferecem mapas de calor, gravações de sessão e relatórios de interação."
    ]
   },
   {
    "type": "p",
    "text": "Um produto digital bem estruturado, com foco em UX, proporciona uma experiência positiva e aumenta a competitividade no mercado, gerando mais satisfação entre os usuários e promovendo o engajamento."
   },
   {
    "type": "h2",
    "text": "Conclusão"
   },
   {
    "type": "p",
    "text": "O papel do UX Designer no desenvolvimento de produtos digitais é vital para garantir que o produto final não só atenda às expectativas dos usuários, mas também ofereça uma experiência envolvente e intuitiva. Ao aplicar metodologias como o Double Diamond e o Design Thinking, o UX Designer atua como um mediador entre as necessidades dos usuários e as soluções inovadoras, contribuindo diretamente para o sucesso do produto."
   },
   {
    "type": "p",
    "text": "Para mais informações e estudos de caso sobre o impacto do UX, confira as plataformas UXDesign.cc e Interaction Design Foundation, além do artigo “Double Diamond e o papel do UX Designer” da Nielsen Norman Group."
   }
  ],
  "updated": "2026-10-02"
 },
 {
  "slug": "habilidades-mais-procuradas-designer-ux",
  "title": "As habilidades mais procuradas em um Designer UX, segundo os recrutadores",
  "description": "As cinco habilidades que recrutadores mais procuram em designers de UX: empatia, prototipagem, design systems, dados e pensamento crítico.",
  "date": "2025-03-12",
  "category": "career",
  "tags": [
   "Carreira",
   "UX",
   "Habilidades"
  ],
  "cover": "/blog/habilidades-mais-procuradas-designer-ux.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/as-habilidades-mais-procuradas-em-um-designer-ux-segundo-os-recrutadores-1afc0740509f",
  "readMinutes": 3,
  "related": {
   "href": "/cases/scale",
   "title": "Clint Scale",
   "body": "Na prática: um design system explorável, com tokens, componentes, contraste e governança."
  },
  "sources": [
   "CareerFoundry, 12 Crucial UX Designer Skills You’ll Need in 2024 (2023)",
   "Adobe, Top UX Trends for 2024 (2023)"
  ],
  "blocks": [
   {
    "type": "p",
    "text": "Com o papel do designer de UX em constante evolução, é fundamental estar atento às tendências e às habilidades mais valorizadas pelos recrutadores. Hoje, além de dominar técnicas de design, os profissionais precisam ter um conjunto de hard e soft skills que os posicionam como peças-chave no desenvolvimento de produtos digitais."
   },
   {
    "type": "h2",
    "text": "1. Empatia e Habilidades de Comunicação"
   },
   {
    "type": "p",
    "text": "Empatia continua sendo uma das habilidades mais cruciais para designers de UX. Isso envolve a capacidade de se colocar no lugar do usuário para compreender suas frustrações e desejos. Essa compreensão profunda permite a criação de soluções centradas no usuário que realmente resolvam os problemas. Além disso, habilidades de comunicação eficazes são essenciais para articular ideias, colaborar com equipes multidisciplinares e negociar com stakeholders. O pensamento colaborativo está cada vez mais sendo exigido, à medida que os projetos de design se tornam mais complexos e integrados a outras áreas do negócio (CareerFoundry, 2023)."
   },
   {
    "type": "visual",
    "data": {
     "kind": "cards",
     "items": [
      {
       "title": "Empatia",
       "icon": "heart"
      },
      {
       "title": "Prototipagem",
       "icon": "pen"
      },
      {
       "title": "Design Systems",
       "icon": "puzzle"
      },
      {
       "title": "Dados e pesquisa",
       "icon": "chart"
      },
      {
       "title": "Pensamento crítico",
       "icon": "brain"
      }
     ]
    },
    "caption": "As cinco habilidades do artigo, com base nas fontes citadas no fim."
   },
   {
    "type": "h2",
    "text": "2. Domínio de Ferramentas de Prototipagem e Wireframing"
   },
   {
    "type": "p",
    "text": "Ferramentas como Figma, Sketch e Adobe XD continuam sendo indispensáveis para criar protótipos interativos que permitem testes de usabilidade antes do desenvolvimento completo. A prototipagem rápida, especialmente em ambientes de trabalho ágeis, tem se tornado uma das exigências básicas para qualquer designer UX. Além disso, o uso de ferramentas de design colaborativas, como o Figma, ajuda a integrar as equipes de design e desenvolvimento em tempo real (Adobe, 2023)."
   },
   {
    "type": "h2",
    "text": "3. Design Systems e UX Writing"
   },
   {
    "type": "p",
    "text": "À medida que mais empresas adotam design systems para garantir consistência visual e funcional, o domínio dessas bibliotecas de componentes se tornou uma habilidade estratégica. O UX writing também está em alta, com uma demanda crescente por designers que saibam criar textos claros e objetivos, como mensagens de erro e instruções de uso. Essa habilidade melhora a experiência do usuário ao tornar as interfaces mais acessíveis e intuitivas (CareerFoundry, 2023)."
   },
   {
    "type": "h2",
    "text": "4. Análise de Dados e Pesquisa de Usuário"
   },
   {
    "type": "p",
    "text": "Além de criar soluções de design, os profissionais de UX precisam saber como avaliar o impacto dessas soluções por meio de métricas. Ferramentas de análise de dados, como Google Analytics e Hotjar, ajudam a entender o comportamento do usuário e a melhorar continuamente a experiência com base em dados concretos. A pesquisa de usuário também se tornou um diferencial, com recrutadores buscando designers que saibam planejar e conduzir entrevistas, testes A/B e pesquisas quantitativas e qualitativas (Adobe, 2023)."
   },
   {
    "type": "h2",
    "text": "5. Pensamento Crítico e Curiosidade"
   },
   {
    "type": "h2",
    "text": "6. Saber direcionar a IA (atualização 2026)"
   },
   {
    "type": "p",
    "text": "Desde a primeira versão deste texto, uma habilidade nova entrou na lista: dar contexto, restrições e critérios para a IA, e avaliar o que ela entrega com olhar crítico. Não é decorar prompts, é saber o que pedir."
   },
   {
    "type": "h2",
    "text": "7. Entender negócio e conversar com código"
   },
   {
    "type": "p",
    "text": "Com protótipos funcionais cada vez mais comuns, designers que entendem métricas de negócio e conseguem conversar com desenvolvimento ganham espaço. Escrevo sobre isso em “O novo diferencial do Product Designer pode ser saber conversar com código”."
   },
   {
    "type": "p",
    "text": "Em um mercado que exige inovação constante, o pensamento crítico é uma habilidade valorizada, especialmente quando se trata de questionar suposições e propor soluções mais eficazes. Além disso, a curiosidade e o desejo por aprendizado contínuo são características buscadas, já que o setor de UX está em constante transformação. Designers que estão sempre atualizados com as novas tendências e que buscam melhorar suas habilidades são os que se destacam em processos seletivos (CareerFoundry, 2023)."
   }
  ],
  "updated": "2026-10-01",
  "updateNote": "Revisado em outubro de 2026: incluí o que mudou desde a publicação e um novo visual para explicar a ideia central."
 },
 {
  "slug": "design-e-credibilidade-da-empresa",
  "title": "75% dos Usuários Julgam a Credibilidade de uma Empresa Pelo Design de Seus Produtos. Será que o Seu Design Está Fazendo a Diferença?",
  "description": "Usuários julgam a credibilidade de uma empresa pelo design: o que dizem as Stanford Guidelines, o papel da primeira impressão e o design como diferencial.",
  "date": "2024-10-22",
  "category": "growth",
  "tags": [
   "Credibilidade",
   "UI",
   "Negócio"
  ],
  "cover": "/blog/design-e-credibilidade-da-empresa.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/75-dos-usu%C3%A1rios-julgam-a-credibilidade-de-uma-empresa-pelo-design-de-seus-produtos-3aa5816b6fc7",
  "readMinutes": 3,
  "related": {
   "href": "/cases/whatsapp-next",
   "title": "WhatsApp Next",
   "body": "Na prática: conteúdo, landing page e ads conectados, com 1.680 inscrições em 4 dias."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Você sabia que 75% dos usuários julgam a credibilidade de uma empresa com base no design do seu produto? Esse dado, destacado em um estudo das “Stanford Guidelines for Web Credibility” , reforça a importância do design na percepção inicial que os usuários têm sobre uma marca. Em um mundo digital cada vez mais competitivo, onde as primeiras impressões são formadas em segundos, o visual do seu produto pode ser determinante para conquistar ou perder a confiança do cliente logo no primeiro contato."
   },
   {
    "type": "h2",
    "text": "O Impacto do Design na Credibilidade"
   },
   {
    "type": "p",
    "text": "De acordo com o estudo conduzido pela Stanford University, os usuários tendem a confiar mais em sites e produtos que tenham um design bem elaborado e profissional . Isso porque um design atrativo e, mais importante, funcional, transmite uma mensagem de seriedade e profissionalismo. Esses fatores são essenciais para transformar visitas em conversões, ou seja, fazer com que os usuários que chegaram ao seu site ou produto por curiosidade acabem se tornando clientes."
   },
   {
    "type": "visual",
    "data": {
     "kind": "stats",
     "items": [
      {
       "value": "75%",
       "label": "dos usuários julgam a credibilidade de uma empresa pelo design",
       "source": "Stanford Web Credibility, citado no artigo",
       "icon": "shieldCheck"
      }
     ]
    },
    "caption": "O dado que abre o artigo, com a fonte citada."
   },
   {
    "type": "p",
    "text": "Um exemplo prático pode ser encontrado em empresas como Apple e Airbnb, que são referências quando falamos em design orientado ao usuário. O foco dessas marcas não está apenas na estética, mas na funcionalidade e na experiência fluida que proporcionam. E o resultado disso? Milhões de usuários fiéis que confiam e investem em seus produtos."
   },
   {
    "type": "h2",
    "text": "Credibilidade e Primeiras Impressões"
   },
   {
    "type": "p",
    "text": "Você já percebeu como muitas vezes decidimos rapidamente se confiamos ou não em uma marca com base apenas na sua aparência? Esse fenômeno é explicado por nossa tendência a formar primeiras impressões em questão de segundos. De acordo com um estudo publicado no Behaviour & Information Technology Journal, os usuários levam menos de 50 milissegundos para formar uma opinião sobre um site . E, muitas vezes, essa opinião está diretamente relacionada ao design."
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Visual confuso",
      "icon": "alert",
      "items": [
       "Navegação difícil",
       "Parece desorganizado",
       "Menos confiança"
      ]
     },
     "right": {
      "title": "Design cuidado",
      "icon": "sparkles",
      "items": [
       "Fácil de usar",
       "Passa profissionalismo",
       "Mais confiança"
      ]
     }
    },
    "caption": "A primeira impressão vira percepção de marca."
   },
   {
    "type": "p",
    "text": "Se o seu produto ou site tem uma aparência confusa, com navegação difícil e visual poluído, o usuário pode associar isso à falta de organização da sua empresa como um todo, perdendo a confiança logo de cara. Por outro lado, um design claro e funcional passa a mensagem de que sua empresa é confiável, profissional e eficiente."
   },
   {
    "type": "h2",
    "text": "O Design Como Diferencial Competitivo"
   },
   {
    "type": "p",
    "text": "Além de credibilidade, o design pode ser um diferencial competitivo. Empresas que investem em design veem, em média, um aumento de 32% em suas receitas . Isso ocorre porque o design não só melhora a experiência do usuário, como também facilita a comunicação de valor do produto e aumenta a percepção de qualidade. Um estudo da McKinsey & Company revelou que empresas que são orientadas pelo design, ou seja, que colocam o design como parte central de suas estratégias, desempenham até duas vezes melhor do que as que não o fazem ."
   },
   {
    "type": "p",
    "text": "Portanto, o design vai muito além da aparência. Ele é uma ferramenta estratégica para agregar valor ao produto, diferenciar-se da concorrência e, claro, construir a confiança do cliente."
   },
   {
    "type": "h2",
    "text": "Quanto Você Investe no Design da Sua Empresa?"
   },
   {
    "type": "p",
    "text": "A pergunta que fica é: quanto você está investindo no design do seu produto? Se você ainda não está tratando o design como uma peça fundamental da sua estratégia, pode estar perdendo oportunidades valiosas de criar uma conexão mais forte e duradoura com seus clientes."
   },
   {
    "type": "p",
    "text": "Investir em design não significa apenas ter algo bonito, mas garantir que a experiência do usuário seja impecável e que a credibilidade da sua marca se fortaleça desde o primeiro contato. E, como mostram os números, isso pode ser o diferencial entre uma empresa que só “existe” e uma empresa que realmente conquista."
   }
  ]
 },
 {
  "slug": "atomic-ux-research",
  "title": "Atomic UX Research: organize e compreenda seus insights de forma eficiente",
  "description": "Como o Atomic Research, de Daniel Pidcock, organiza a pesquisa em experimentos, fatos, insights e conclusões reutilizáveis.",
  "date": "2025-03-12",
  "category": "ux",
  "tags": [
   "UX Research",
   "Atomic Research",
   "Insights"
  ],
  "cover": "/blog/atomic-ux-research.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/atomic-ux-research-organize-e-compreenda-seus-insights-de-forma-eficiente-eb8183cbf33a",
  "readMinutes": 3,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: agentes de IA que agem dentro do CRM e deixam a pessoa no controle."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Você já se viu perdido em relatórios de pesquisa longos, tentando encontrar aquele insight crucial? O Atomic Research é uma solução que simplifica isso. Assim como no Atomic Design, em que pequenas partes (átomos) são combinadas para criar interfaces completas, o Atomic Research propõe dividir o conhecimento da pesquisa em pedaços menores e fáceis de reutilizar."
   },
   {
    "type": "p",
    "text": "Ao invés de criar relatórios extensos, você fragmenta os dados em “átomos de pesquisa” e os organiza para gerar fatos e insights claros. Isso torna o aprendizado contínuo e a informação sempre acessível, ideal para ser aplicada em várias fases do projeto."
   },
   {
    "type": "visual",
    "id": "lt-atomize",
    "caption": "Em vez de um relatório que ninguém relê, pequenos átomos de aprendizado que qualquer pessoa encontra em segundos."
   },
   {
    "type": "h2",
    "text": "Por que “Atomizar” a Pesquisa?"
   },
   {
    "type": "p",
    "text": "Imagine que sua equipe está redesenhando a funcionalidade de busca de um app de e-commerce. Ao realizar testes de usabilidade, você coleta pequenos insights em vez de fazer um único relatório pesado. Esses pequenos aprendizados, os “átomos”, são reutilizados para análises rápidas e aplicáveis, criando uma base de conhecimento viva e flexível, sempre pronta para consulta."
   },
   {
    "type": "h2",
    "text": "Como Funciona o Atomic Research?"
   },
   {
    "type": "p",
    "text": "O modelo desenvolvido por Daniel Pidcock organiza o processo em quatro etapas:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Experimento",
       "icon": "flask",
       "sub": "O que fizemos?"
      },
      {
       "label": "Fato",
       "icon": "file",
       "sub": "O que aprendemos?"
      },
      {
       "label": "Insight",
       "icon": "bulb",
       "sub": "O que pensamos?"
      },
      {
       "label": "Conclusão",
       "icon": "target",
       "sub": "O que vamos fazer?"
      }
     ]
    },
    "caption": "Os quatro átomos do modelo, cada um respondendo uma pergunta."
   },
   {
    "type": "ul",
    "items": [
     "Experimentos (O que fizemos?): Testes, entrevistas ou análises que trazem os dados. Ex: Testar a nova barra de busca do seu app.",
     "Fatos (O que isso nos ensina?): Lições claras derivadas dos experimentos. Ex: 70% dos usuários não entenderam o ícone de lupa.",
     "Insights (O que isso nos faz pensar?): Hipóteses baseadas nos fatos. Ex. Substituir a lupa por um campo de busca pode melhorar a experiência.",
     "Conclusões (O que vamos fazer?): Decisões baseadas nos insights. Ex: Trocar o ícone por um campo de busca textual."
    ]
   },
   {
    "type": "visual",
    "id": "lt-atomic",
    "caption": "Experimentos geram fatos, fatos sustentam insights e insights levam a decisões. Um mesmo fato pode alimentar novos insights depois."
   },
   {
    "type": "h2",
    "text": "Exemplo Prático de Uso do Atomic Research"
   },
   {
    "type": "p",
    "text": "Suponha que sua equipe esteja desenvolvendo um novo layout de página para um site de e-commerce. Durante os testes de usabilidade, você coleta vários “átomos” de informações, como:"
   },
   {
    "type": "ul",
    "items": [
     "Experimento: Usuários foram solicitados a navegar até a página de checkout.",
     "Fato: 60% dos usuários não perceberam o botão “Finalizar compra” imediatamente.",
     "Insight: O botão “Finalizar compra” não está suficientemente destacado.",
     "Conclusão: Alterar o design do botão para torná-lo mais visível e acessível."
    ]
   },
   {
    "type": "p",
    "text": "Esses “átomos” podem ser organizados, combinados e reutilizados em novos experimentos ou decisões de design, economizando tempo e proporcionando uma visão clara para todas as partes interessadas."
   },
   {
    "type": "h2",
    "text": "Aplicando na Prática"
   },
   {
    "type": "p",
    "text": "Ferramentas como Miro, glean.ly, FigJam e Mural ajudam a implementar o Atomic Research. Visualize todo o ciclo de pesquisa, da experimentação à conclusão, com post-its organizados em colunas."
   },
   {
    "type": "h2",
    "text": "Benefícios do Atomic Research"
   },
   {
    "type": "p",
    "text": "Ele facilita a reutilização de insights, economizando tempo e permitindo que você aplique aprendizados em diferentes projetos. Para os stakeholders, é uma maneira rápida e visual de acompanhar resultados e tomar decisões sem perder tempo em relatórios longos."
   },
   {
    "type": "visual",
    "data": {
     "kind": "cycle",
     "nodes": [
      {
       "label": "Coletar",
       "icon": "search"
      },
      {
       "label": "Atomizar",
       "icon": "puzzle"
      },
      {
       "label": "Conectar",
       "icon": "branch"
      },
      {
       "label": "Reutilizar",
       "icon": "repeat"
      }
     ],
     "center": "Insights"
    },
    "caption": "Insights pequenos e reutilizáveis em vez de relatórios esquecidos."
   },
   {
    "type": "h2",
    "text": "Conclusão"
   },
   {
    "type": "p",
    "text": "O Atomic Research revoluciona a forma de organizar os dados de UX Research. Modular, ágil e eficiente, ele torna o processo de pesquisa mais dinâmico, garantindo que insights valiosos não se percam e sejam aplicados sempre que necessário."
   }
  ],
  "updated": "2026-10-02"
 },
 {
  "slug": "criatividade-e-estrategia-no-design-de-produto",
  "title": "Criatividade e estratégia: o equilíbrio que transforma o Design de Produto",
  "description": "O equilíbrio entre criatividade e estratégia: dados como alicerce, criatividade com propósito e uma abordagem holística ao design.",
  "date": "2025-03-12",
  "category": "growth",
  "tags": [
   "Product Design",
   "Estratégia",
   "Dados"
  ],
  "cover": "/blog/criatividade-e-estrategia-no-design-de-produto.webp",
  "mediumUrl": "https://medium.com/@jhoncamiloux/criatividade-e-estrat%C3%A9gia-o-equil%C3%ADbrio-que-transforma-o-design-de-produto-e71eafb24a17",
  "readMinutes": 4,
  "related": {
   "href": "/cases/whatsapp-next",
   "title": "WhatsApp Next",
   "body": "Na prática: conteúdo, landing page e ads conectados, com 1.680 inscrições em 4 dias."
  },
  "blocks": [
   {
    "type": "p",
    "text": "No mundo digital de hoje, o design de produto deixou de ser apenas uma questão de estética ou de resolver problemas funcionais. O sucesso real de um produto depende da capacidade de criar experiências que encantem visualmente e, ao mesmo tempo, resolvam os desafios do usuário de forma prática e mensurável. Para quem trabalha com UX/UI, o segredo está em encontrar o equilíbrio entre criatividade e estratégia, algo que nem sempre é tão simples quanto parece."
   },
   {
    "type": "h2",
    "text": "O desafio de encontrar o meio-termo"
   },
   {
    "type": "p",
    "text": "Por muito tempo, a percepção sobre o design digital foi fragmentada. Alguns acreditavam que a estética era tudo, enquanto outros focavam na pura funcionalidade, como se as duas não pudessem coexistir. Mas, se tem algo que aprendi ao longo dos anos, é que esse pensamento polarizado perde de vista o que realmente importa: o impacto que você cria ao unir as duas coisas."
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Só estética ou só função",
      "icon": "alert",
      "items": [
       "Bonito sem resolver",
       "Funcional sem engajar"
      ]
     },
     "right": {
      "title": "Design holístico",
      "icon": "scale",
      "items": [
       "Criatividade com propósito",
       "Dados como guia"
      ]
     }
    },
    "caption": "O meio-termo que o artigo defende."
   },
   {
    "type": "p",
    "text": "Um design visualmente agradável não é suficiente se não atender às necessidades do usuário. Da mesma forma, uma interface hiperfuncional pode falhar em engajar ou gerar valor se não for atrativa. A verdadeira mágica acontece quando conseguimos integrar ambos, beleza e funcionalidade –, sempre guiados por insights estratégicos."
   },
   {
    "type": "h2",
    "text": "Dados: O alicerce da estratégia"
   },
   {
    "type": "p",
    "text": "Quando falamos de estratégia no design de produto, é essencial lembrar que boas ideias precisam ser fundamentadas. É aqui que os dados entram em cena. Métricas como NPS (Net Promoter Score), CTR (Taxa de Cliques), LTV (Lifetime Value) e Churn Rate são mais do que números, elas contam a história real de como o usuário interage com seu produto e onde você pode melhorar."
   },
   {
    "type": "p",
    "text": "Às vezes, é fácil se perder na intuição criativa. No entanto, os dados nos ajudam a validar (ou questionar) essas ideias com base no comportamento do usuário, nos guiando para decisões de design mais inteligentes. Afinal, design não é só sobre o que parece bom na tela, mas sobre como isso se traduz em resultados no mundo real."
   },
   {
    "type": "h2",
    "text": "Criatividade com propósito"
   },
   {
    "type": "p",
    "text": "Mas isso não significa que devemos sufocar a criatividade. Pelo contrário! A criatividade, quando aliada à estratégia e orientada pelos dados, é capaz de resolver problemas de forma inovadora e empática. Não se trata de ser criativo por ser criativo, o objetivo é que essa criatividade traga valor ao usuário e contribua para os objetivos do negócio."
   },
   {
    "type": "p",
    "text": "Por exemplo, ao simplificar uma jornada de usuário com uma solução visual elegante e funcional, estamos colocando a criatividade a serviço da estratégia. Quando conseguimos criar interfaces que resolvem problemas reais e ainda encantam, alcançamos o que muitos chamam de “design perfeito”, aquele que é quase invisível porque flui naturalmente, sem fricção."
   },
   {
    "type": "h2",
    "text": "Uma abordagem holística ao design"
   },
   {
    "type": "p",
    "text": "Essa combinação de criatividade e dados forma a base do que chamo de “design holístico”. Ao olhar para o todo, enxergamos o impacto do design em cada etapa da jornada do usuário, desde a primeira interação até o sucesso final do produto no mercado. É nessa visão ampla que um designer de produto verdadeiramente estratégico opera."
   },
   {
    "type": "p",
    "text": "Na prática, isso significa que nosso trabalho não termina quando o protótipo está aprovado ou quando a interface está no ar. Continuamos acompanhando métricas de sucesso, ouvindo o feedback do usuário e refinando a experiência. Essa é a beleza do design: ele nunca está realmente concluído, sempre há espaço para melhorar, testar e evoluir."
   },
   {
    "type": "h2",
    "text": "Como aplicar essa mentalidade no seu processo de design?"
   },
   {
    "type": "p",
    "text": "Aqui estão algumas formas de trazer esse equilíbrio para o seu trabalho:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "cycle",
     "nodes": [
      {
       "label": "Conversar",
       "icon": "chat"
      },
      {
       "label": "Medir",
       "icon": "chart"
      },
      {
       "label": "Criar",
       "icon": "sparkles"
      },
      {
       "label": "Testar",
       "icon": "flask"
      }
     ],
     "center": "Equilíbrio"
    },
    "caption": "As quatro práticas do artigo formam um ciclo."
   },
   {
    "type": "ul",
    "items": [
     "Converse com seus usuários: Entenda suas dores e motivações. Isso não só ajuda a criar soluções mais adequadas, como também coloca você em uma posição de empatia e inovação.",
     "Use os dados como seu guia: Não deixe as métricas de lado. Elas são suas aliadas para tomar decisões fundamentadas e garantir que seu design entregue resultados concretos.",
     "Deixe a criatividade resolver problemas: Não se limite ao que já foi feito. Inove, mas sempre com propósito. Faça da criatividade uma ferramenta para simplificar a vida do usuário e gerar valor para o negócio.",
     "Teste e itere: O design é um processo contínuo. Teste suas ideias, valide com usuários reais e ajuste o que for necessário para melhorar a experiência."
    ]
   },
   {
    "type": "h2",
    "text": "Designers como solucionadores de problemas"
   },
   {
    "type": "quote",
    "text": "O papel do designer vai muito além de criar algo bonito ou funcional. Somos, na verdade, solucionadores de problemas. E, para isso, precisamos unir o melhor dos dois mundos: a criatividade que encanta e a estratégia que gera resultados. Ao equilibrar essas duas forças, transformamos nossos projetos em algo mais do que simples interfaces, criamos experiências que impactam positivamente a vida dos usuários e os objetivos de negócio. Esse é o verdadeiro poder de um design que vai além do superficial."
   },
   {
    "type": "p",
    "text": "O papel do designer vai muito além de criar algo bonito ou funcional. Somos, na verdade, solucionadores de problemas. E, para isso, precisamos unir o melhor dos dois mundos: a criatividade que encanta e a estratégia que gera resultados."
   },
   {
    "type": "p",
    "text": "Ao equilibrar essas duas forças, transformamos nossos projetos em algo mais do que simples interfaces, criamos experiências que impactam positivamente a vida dos usuários e os objetivos de negócio. Esse é o verdadeiro poder de um design que vai além do superficial."
   }
  ]
 },
 {
  "slug": "ux-e-growth-nao-deveriam-trabalhar-separados",
  "title": "UX e Growth não deveriam trabalhar separados",
  "description": "UX e Growth tentam responder a mesma pergunta por caminhos diferentes. Onde as duas áreas se encontram e por que trabalhar junto gera mais resultado.",
  "date": "2026-09-30",
  "category": "growth",
  "tags": [
   "UX",
   "Growth",
   "Produto"
  ],
  "readMinutes": 6,
  "related": {
   "href": "/cases/acquire",
   "title": "Clint Acquire",
   "body": "Na prática: uma landing page e um fluxo conversacional que concentraram 79% da demanda comercial."
  },
  "blocks": [
   {
    "type": "scene",
    "id": "two-voices",
    "data": {
     "intro": "Durante muito tempo, UX e Growth foram tratados como áreas diferentes dentro de um produto.",
     "ux": "De um lado, UX pensando em pesquisa, usabilidade, jornada e experiência.",
     "growth": "Do outro, Growth olhando para aquisição, conversão, ativação e retenção.",
     "bridge": "Mas, no fim, os dois estão tentando responder perguntas muito parecidas:",
     "question": "O que faz uma pessoa usar um produto, continuar usando e perceber valor nele?",
     "view": "A diferença está, muitas vezes, no ponto de vista.",
     "growthSees": "Growth olha para os números e identifica onde existe uma oportunidade.",
     "uxSees": "UX busca entender o comportamento e os motivos por trás desses números.",
     "close": "E é justamente nessa combinação que acredito que existe uma oportunidade muito grande para os times de produto."
    }
   },
   {
    "type": "h2",
    "text": "UX não termina na experiência"
   },
   {
    "type": "p",
    "text": "Quando falamos de UX, é comum pensar em usabilidade, arquitetura da informação, interface e jornada."
   },
   {
    "type": "p",
    "text": "Tudo isso continua sendo importante."
   },
   {
    "type": "p",
    "text": "Mas a experiência também influencia diretamente os resultados do produto."
   },
   {
    "type": "p",
    "text": "Imagine um cadastro em que muitas pessoas começam o processo, mas poucas terminam."
   },
   {
    "type": "p",
    "text": "O time de Growth pode identificar uma queda de conversão."
   },
   {
    "type": "p",
    "text": "Mas o número sozinho não explica o problema."
   },
   {
    "type": "p",
    "text": "É nesse momento que UX pode ajudar a investigar:"
   },
   {
    "type": "p",
    "text": "O formulário está muito longo?"
   },
   {
    "type": "p",
    "text": "As pessoas não entendem por que precisam fornecer aquelas informações?"
   },
   {
    "type": "p",
    "text": "Existe alguma etapa que gera insegurança?"
   },
   {
    "type": "p",
    "text": "O usuário não percebe o benefício de continuar?"
   },
   {
    "type": "p",
    "text": "Existe algum problema de acessibilidade?"
   },
   {
    "type": "p",
    "text": "Talvez a solução não seja simplesmente mudar a cor de um botão ou colocar um novo CTA."
   },
   {
    "type": "p",
    "text": "Antes de pensar na solução, precisamos entender o comportamento."
   },
   {
    "type": "h2",
    "text": "Growth também não deveria olhar apenas para conversão"
   },
   {
    "type": "p",
    "text": "Da mesma forma, Growth não deveria ser visto apenas como uma área responsável por fazer os números crescerem."
   },
   {
    "type": "p",
    "text": "Conversão é importante."
   },
   {
    "type": "p",
    "text": "Mas uma conversão isolada não conta toda a história."
   },
   {
    "type": "p",
    "text": "Podemos aumentar uma taxa de conversão e, ao mesmo tempo, criar uma experiência ruim."
   },
   {
    "type": "p",
    "text": "Podemos conseguir mais cadastros, mas ter menos pessoas chegando ao primeiro momento de valor."
   },
   {
    "type": "p",
    "text": "Podemos aumentar as vendas, mas aumentar também o churn."
   },
   {
    "type": "p",
    "text": "Por isso, olhar apenas para uma métrica pode levar o time para uma decisão que parece boa no dashboard, mas não necessariamente é boa para o produto."
   },
   {
    "type": "scene",
    "id": "journey-track",
    "data": {
     "lead": "É aqui que entra uma visão mais completa da jornada.",
     "stages": "Aquisição → Ativação → Conversão → Retenção → Receita",
     "after": "Cada etapa tem uma relação com a experiência do usuário."
    }
   },
   {
    "type": "h2",
    "text": "Onde UX encontra Growth"
   },
   {
    "type": "p",
    "text": "Pense em um produto digital que está recebendo bastante tráfego, mas poucas pessoas estão se cadastrando."
   },
   {
    "type": "visual",
    "data": {
     "kind": "merge",
     "a": {
      "title": "Growth",
      "icon": "chart",
      "steps": [
       "Número",
       "Oportunidade"
      ]
     },
     "b": {
      "title": "UX",
      "icon": "users",
      "steps": [
       "Comportamento",
       "Motivo"
      ]
     },
     "result": [
      "Insight",
      "Decisão de produto"
     ]
    },
    "caption": "Growth mostra onde olhar; UX explica por quê."
   },
   {
    "type": "p",
    "text": "Growth pode olhar para a taxa de conversão da página."
   },
   {
    "type": "p",
    "text": "UX pode analisar a proposta de valor, o conteúdo, a hierarquia visual, a clareza das informações e até conversar com usuários para entender o que está impedindo a decisão."
   },
   {
    "type": "p",
    "text": "Agora imagine que muitas pessoas se cadastram, mas poucas realmente utilizam o produto."
   },
   {
    "type": "p",
    "text": "O problema mudou."
   },
   {
    "type": "p",
    "text": "Talvez não seja mais aquisição ou conversão."
   },
   {
    "type": "p",
    "text": "Pode estar no onboarding."
   },
   {
    "type": "p",
    "text": "Talvez o usuário não entenda o que fazer depois do cadastro."
   },
   {
    "type": "p",
    "text": "Talvez o produto esteja apresentando muitas informações de uma vez."
   },
   {
    "type": "p",
    "text": "Talvez o usuário simplesmente não tenha percebido o valor."
   },
   {
    "type": "p",
    "text": "Nesse cenário, UX e Growth podem trabalhar juntos para encontrar a causa e testar diferentes soluções."
   },
   {
    "type": "scene",
    "id": "question-flip",
    "data": {
     "lead": "Não é apenas:",
     "a": "“Como aumentamos a conversão?”",
     "joiner": "Mas:",
     "b": "“Por que as pessoas não estão avançando?”",
     "after": "Essa segunda pergunta pode levar a decisões muito melhores."
    }
   },
   {
    "type": "h2",
    "text": "Dados mostram o que está acontecendo. UX ajuda a entender por quê."
   },
   {
    "type": "p",
    "text": "Esse é um dos pontos que mais considero importantes."
   },
   {
    "type": "p",
    "text": "Dados quantitativos são fundamentais para entender o comportamento em escala."
   },
   {
    "type": "p",
    "text": "Podemos descobrir que:"
   },
   {
    "type": "ul",
    "items": [
     "40% das pessoas abandonam determinada etapa;",
     "o onboarding tem uma queda grande no segundo passo;",
     "determinada página tem um CTR menor;",
     "usuários de determinado perfil têm maior retenção;",
     "uma funcionalidade é pouco utilizada."
    ]
   },
   {
    "type": "p",
    "text": "Mas existe uma diferença entre saber o que está acontecendo e entender por que está acontecendo."
   },
   {
    "type": "p",
    "text": "É aí que entram pesquisas, entrevistas, testes de usabilidade, análise de comportamento e outros métodos qualitativos."
   },
   {
    "type": "p",
    "text": "Os dois lados se complementam."
   },
   {
    "type": "quote",
    "text": "Dados podem mostrar onde investigar."
   },
   {
    "type": "quote",
    "text": "Pesquisa pode ajudar a entender o problema."
   },
   {
    "type": "p",
    "text": "E os testes podem ajudar a descobrir se a solução realmente funciona."
   },
   {
    "type": "visual",
    "id": "what-and-why",
    "caption": "Dados mostram onde investigar, pesquisa explica o porquê e o teste mostra se a solução funciona."
   },
   {
    "type": "h2",
    "text": "O designer também precisa entender o negócio"
   },
   {
    "type": "p",
    "text": "Acredito que esse seja um dos principais movimentos que um Product Designer pode fazer na sua carreira."
   },
   {
    "type": "p",
    "text": "Não precisamos transformar o designer em um especialista de Growth."
   },
   {
    "type": "p",
    "text": "Mas precisamos entender como nossas decisões impactam o produto."
   },
   {
    "type": "p",
    "text": "Quando entendemos métricas como:"
   },
   {
    "type": "p",
    "text": "CTR, conversão, ativação, retenção, churn, LTV e CAC, conseguimos participar de conversas que vão além da interface."
   },
   {
    "type": "p",
    "text": "Isso também muda a forma como apresentamos nosso trabalho."
   },
   {
    "type": "p",
    "text": "Em vez de dizer:"
   },
   {
    "type": "quote",
    "text": "“Redesenhei essa tela para melhorar a experiência.”"
   },
   {
    "type": "p",
    "text": "Podemos explicar:"
   },
   {
    "type": "quote",
    "text": "“Identificamos uma fricção nessa etapa da jornada, investigamos o comportamento dos usuários e criamos uma solução para reduzir esse atrito e melhorar a ativação.”"
   },
   {
    "type": "p",
    "text": "A segunda conversa está muito mais próxima de produto."
   },
   {
    "type": "h2",
    "text": "Nem toda melhoria precisa ser visual"
   },
   {
    "type": "p",
    "text": "Esse é outro ponto que considero importante."
   },
   {
    "type": "p",
    "text": "Quando uma métrica está ruim, a primeira reação muitas vezes é mexer na interface."
   },
   {
    "type": "ul",
    "items": [
     "Trocar o botão",
     "Mudar a cor",
     "Alterar o texto",
     "Adicionar um banner",
     "Testar um novo layout"
    ]
   },
   {
    "type": "p",
    "text": "Mas talvez o problema não esteja na interface."
   },
   {
    "type": "ul",
    "items": [
     "Pode estar na proposta de valor",
     "No preço",
     "No momento em que a informação aparece",
     "Na falta de confiança",
     "Em uma regra de negócio",
     "Em um processo muito complicado"
    ]
   },
   {
    "type": "p",
    "text": "Ou simplesmente no fato de que o produto não resolve uma necessidade suficientemente importante."
   },
   {
    "type": "p",
    "text": "Por isso, UX e Growth precisam trabalhar com o problema antes de trabalhar na solução."
   },
   {
    "type": "h2",
    "text": "Experimentar também faz parte do trabalho de UX"
   },
   {
    "type": "p",
    "text": "A aproximação com Growth também pode mudar a forma como pensamos em design."
   },
   {
    "type": "visual",
    "data": {
     "kind": "cycle",
     "nodes": [
      {
       "label": "Hipótese",
       "icon": "bulb"
      },
      {
       "label": "Experimento",
       "icon": "flask"
      },
      {
       "label": "Métrica",
       "icon": "chart"
      },
      {
       "label": "Aprendizado",
       "icon": "book"
      }
     ],
     "center": "Produto"
    },
    "caption": "Experimentar é parte do trabalho de UX, não só de Growth."
   },
   {
    "type": "p",
    "text": "Em vez de passar semanas tentando encontrar uma solução perfeita, podemos criar hipóteses, prototipar, testar e aprender."
   },
   {
    "type": "p",
    "text": "Por exemplo:"
   },
   {
    "type": "p",
    "text": "Hipótese: usuários abandonam o cadastro porque não entendem por que determinada informação é necessária."
   },
   {
    "type": "p",
    "text": "Solução: explicar o motivo diretamente no formulário."
   },
   {
    "type": "p",
    "text": "Métrica: taxa de conclusão do cadastro."
   },
   {
    "type": "p",
    "text": "Complemento: teste de usabilidade para entender se a nova explicação realmente ajudou."
   },
   {
    "type": "p",
    "text": "Agora temos uma conexão clara entre:"
   },
   {
    "type": "quote",
    "text": "Pesquisa → Hipótese → Design → Experimento → Métrica → Aprendizado"
   },
   {
    "type": "p",
    "text": "E o mais importante: mesmo quando o experimento não gera o resultado esperado, aprendemos alguma coisa."
   },
   {
    "type": "h2",
    "text": "UX e Growth não precisam concordar em tudo"
   },
   {
    "type": "p",
    "text": "Trabalhar juntos não significa que as duas áreas sempre terão a mesma opinião."
   },
   {
    "type": "p",
    "text": "E isso é saudável."
   },
   {
    "type": "p",
    "text": "Growth pode defender uma solução porque acredita que ela pode melhorar uma métrica."
   },
   {
    "type": "p",
    "text": "UX pode questionar se essa solução cria uma experiência ruim."
   },
   {
    "type": "p",
    "text": "Produto pode trazer uma restrição de negócio."
   },
   {
    "type": "p",
    "text": "Engenharia pode apontar uma limitação técnica."
   },
   {
    "type": "p",
    "text": "O trabalho do time não é encontrar quem está certo."
   },
   {
    "type": "p",
    "text": "É encontrar a melhor decisão possível considerando usuário, negócio e tecnologia."
   },
   {
    "type": "p",
    "text": "É justamente por isso que colaboração entre áreas é tão importante."
   },
   {
    "type": "h2",
    "text": "No final, estamos falando do mesmo produto"
   },
   {
    "type": "p",
    "text": "UX quer que as pessoas consigam usar o produto."
   },
   {
    "type": "p",
    "text": "Growth quer que mais pessoas encontrem valor no produto e que o negócio cresça."
   },
   {
    "type": "p",
    "text": "Produto precisa das duas coisas."
   },
   {
    "type": "p",
    "text": "Um produto pode ter uma ótima conversão e uma experiência ruim."
   },
   {
    "type": "p",
    "text": "Também pode ter uma experiência excelente e não conseguir crescer."
   },
   {
    "type": "p",
    "text": "O desafio está em encontrar o equilíbrio."
   },
   {
    "type": "p",
    "text": "Para mim, o futuro do Product Design passa cada vez mais por essa capacidade de conectar pontos:"
   },
   {
    "type": "quote",
    "text": "comportamento + experiência + dados + negócio + tecnologia."
   },
   {
    "type": "p",
    "text": "Não precisamos escolher entre UX ou Growth."
   },
   {
    "type": "p",
    "text": "Precisamos entender como os dois podem trabalhar juntos para construir produtos melhores."
   },
   {
    "type": "scene",
    "id": "fill-close",
    "data": {
     "lead": "Porque no final, crescimento sustentável não deveria acontecer apesar da experiência do usuário.",
     "line": "Deveria acontecer por causa dela."
    }
   }
  ],
  "cover": "/blog/ux-e-growth-nao-deveriam-trabalhar-separados.webp",
  "lab": true
 },
 {
  "slug": "product-designer-que-conversa-com-codigo",
  "title": "O novo diferencial do Product Designer pode ser saber conversar com código",
  "description": "O Figma não é o produto. Por que saber conversar com código virou diferencial do Product Designer, e onde entram design system e IA.",
  "date": "2026-09-28",
  "category": "ai",
  "tags": [
   "Design e código",
   "Product Design",
   "IA"
  ],
  "readMinutes": 5,
  "related": {
   "href": "/cases/scale",
   "title": "Clint Scale",
   "body": "Na prática: um design system explorável, com tokens, componentes, contraste e governança."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Durante muito tempo, existiu uma divisão bastante clara entre design e desenvolvimento."
   },
   {
    "type": "p",
    "text": "O designer pensava na experiência e criava as interfaces."
   },
   {
    "type": "p",
    "text": "O desenvolvedor transformava aquilo em código."
   },
   {
    "type": "p",
    "text": "Esse modelo ainda existe, claro. Mas a forma como produtos digitais são construídos está mudando."
   },
   {
    "type": "scene",
    "id": "code-line",
    "data": {
     "lead": "Com novas ferramentas, IA e processos cada vez mais próximos entre design e desenvolvimento, acredito que existe uma habilidade que pode se tornar cada vez mais importante para o Product Designer:",
     "phrase": "saber conversar com código."
    }
   },
   {
    "type": "p",
    "text": "E não estou falando que todo designer precisa virar desenvolvedor."
   },
   {
    "type": "p",
    "text": "Estou falando sobre entender melhor como aquilo que desenhamos realmente funciona."
   },
   {
    "type": "h2",
    "text": "O Figma não é o produto"
   },
   {
    "type": "p",
    "text": "Essa pode parecer uma afirmação óbvia, mas é fácil esquecer."
   },
   {
    "type": "p",
    "text": "Uma tela bonita no Figma é apenas uma representação de algo que precisa funcionar no mundo real."
   },
   {
    "type": "p",
    "text": "Quando criamos um componente, ele precisa existir no código."
   },
   {
    "type": "p",
    "text": "Quando definimos um espaçamento, ele precisa fazer sentido dentro do sistema."
   },
   {
    "type": "p",
    "text": "Quando criamos uma interação, ela precisa ser tecnicamente possível."
   },
   {
    "type": "p",
    "text": "Quando pensamos em responsividade, precisamos considerar diferentes tamanhos de tela."
   },
   {
    "type": "p",
    "text": "E quando criamos uma experiência, precisamos entender o que acontece por trás dela."
   },
   {
    "type": "p",
    "text": "Por isso, quanto mais próximo o designer estiver dessas conversas, melhor tende a ser o resultado."
   },
   {
    "type": "h2",
    "text": "Não precisamos saber programar tudo"
   },
   {
    "type": "p",
    "text": "Acho importante fazer essa distinção."
   },
   {
    "type": "p",
    "text": "O Product Designer não precisa saber construir sozinho um produto completo."
   },
   {
    "type": "p",
    "text": "Não precisa dominar React, Node, banco de dados, APIs e todas as tecnologias utilizadas pela equipe."
   },
   {
    "type": "p",
    "text": "Mas entender alguns conceitos pode mudar bastante a forma de trabalhar."
   },
   {
    "type": "scene",
    "id": "tech-glossary",
    "data": {
     "lead": "Por exemplo:",
     "questions": [
      "O que é um componente?",
      "Como funciona uma API?",
      "O que é um estado?",
      "O que significa uma interface responsiva?",
      "Como funcionam tokens de design?",
      "Como uma variável pode alterar uma interface?",
      "O que acontece quando uma requisição demora?",
      "Como funciona um formulário quando existe um erro?"
     ],
     "close": [
      "Essas perguntas fazem parte da experiência do usuário.",
      "E entender um pouco da tecnologia ajuda o designer a pensar nessas situações antes que elas se tornem problemas."
     ]
    }
   },
   {
    "type": "h2",
    "text": "Design e código estão ficando mais próximos"
   },
   {
    "type": "p",
    "text": "Ferramentas como Figma Make e outras soluções baseadas em IA estão tornando mais fácil transformar ideias em protótipos funcionais e código."
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Figma",
       "icon": "pen"
      },
      {
       "label": "Tokens",
       "icon": "palette"
      },
      {
       "label": "Componente",
       "icon": "puzzle"
      },
      {
       "label": "Código",
       "icon": "code"
      },
      {
       "label": "Produto",
       "icon": "rocket"
      }
     ]
    },
    "caption": "O caminho entre o design e o que chega ao usuário ficou mais curto."
   },
   {
    "type": "p",
    "text": "Isso muda um pouco a dinâmica."
   },
   {
    "type": "p",
    "text": "Antes, podíamos criar uma interface no Figma e esperar o desenvolvimento para descobrir como aquela ideia funcionaria de verdade."
   },
   {
    "type": "p",
    "text": "Agora, conseguimos experimentar algumas dessas ideias de forma muito mais rápida."
   },
   {
    "type": "p",
    "text": "Isso não significa que o designer vai substituir o desenvolvedor."
   },
   {
    "type": "p",
    "text": "Na minha visão, acontece justamente o contrário."
   },
   {
    "type": "p",
    "text": "A tendência é aumentar a colaboração entre os dois."
   },
   {
    "type": "p",
    "text": "O designer consegue entender melhor as possibilidades técnicas."
   },
   {
    "type": "p",
    "text": "O desenvolvedor consegue participar mais cedo das decisões de experiência."
   },
   {
    "type": "p",
    "text": "E o produto pode ser construído com menos distância entre o que foi pensado e o que realmente será entregue."
   },
   {
    "type": "h2",
    "text": "Saber código também ajuda a fazer perguntas melhores"
   },
   {
    "type": "p",
    "text": "Esse talvez seja um dos maiores benefícios."
   },
   {
    "type": "p",
    "text": "Imagine que você desenhou uma interação e o desenvolvedor diz:"
   },
   {
    "type": "quote",
    "text": "“Isso vai ser difícil de implementar.”"
   },
   {
    "type": "p",
    "text": "Sem conhecimento técnico, é fácil simplesmente aceitar ou insistir na solução original."
   },
   {
    "type": "p",
    "text": "Mas quando você entende um pouco mais sobre desenvolvimento, a conversa pode mudar:"
   },
   {
    "type": "ul",
    "items": [
     "“Qual parte é mais difícil?”",
     "“Existe outra forma de fazer?”",
     "“Podemos simplificar a interação?”"
    ]
   },
   {
    "type": "p",
    "text": "“Se fizermos dessa maneira, conseguimos manter o mesmo objetivo?”"
   },
   {
    "type": "scene",
    "id": "versus",
    "data": {
     "a": "A conversa deixa de ser:",
     "b": "Design vs. Desenvolvimento",
     "c": "e passa a ser:",
     "d": "Qual é a melhor solução para o produto?"
    }
   },
   {
    "type": "p",
    "text": "Isso é muito mais produtivo."
   },
   {
    "type": "h2",
    "text": "O código também pode ajudar no processo de design"
   },
   {
    "type": "p",
    "text": "Durante muito tempo, pensamos no código como algo que acontece depois do design."
   },
   {
    "type": "p",
    "text": "Mas talvez essa separação esteja ficando menos relevante."
   },
   {
    "type": "p",
    "text": "Podemos usar código para:"
   },
   {
    "type": "ul",
    "items": [
     "criar protótipos mais próximos do produto;",
     "testar interações;",
     "explorar diferentes estados;",
     "validar responsividade;",
     "entender limitações;",
     "experimentar ideias;",
     "testar componentes;",
     "criar experiências que seriam difíceis de representar apenas em uma ferramenta de design."
    ]
   },
   {
    "type": "p",
    "text": "Isso aumenta a capacidade de experimentação do designer."
   },
   {
    "type": "p",
    "text": "E quanto mais barato fica experimentar, mais ideias podemos testar."
   },
   {
    "type": "h2",
    "text": "Design System também aproxima os dois mundos"
   },
   {
    "type": "p",
    "text": "Um bom Design System é um ótimo exemplo dessa conexão."
   },
   {
    "type": "p",
    "text": "No Figma, temos componentes, variantes, estilos e tokens."
   },
   {
    "type": "p",
    "text": "No código, temos componentes reutilizáveis, propriedades, estados e regras."
   },
   {
    "type": "p",
    "text": "Se os dois lados não conversam, começamos a ter problemas."
   },
   {
    "type": "p",
    "text": "O componente do Figma não representa o componente real."
   },
   {
    "type": "ul",
    "items": [
     "O espaçamento é diferente",
     "A tipografia não corresponde",
     "Os estados não estão documentados"
    ]
   },
   {
    "type": "p",
    "text": "O desenvolvedor precisa interpretar decisões que já deveriam estar claras."
   },
   {
    "type": "p",
    "text": "Quando design e código estão mais próximos, o Design System deixa de ser apenas uma biblioteca visual."
   },
   {
    "type": "p",
    "text": "Ele passa a ser uma linguagem compartilhada entre design e desenvolvimento."
   },
   {
    "type": "visual",
    "id": "token-bridge",
    "caption": "Quando Figma e código usam os mesmos tokens, o Design System vira linguagem compartilhada."
   },
   {
    "type": "h2",
    "text": "E onde entra a IA?"
   },
   {
    "type": "p",
    "text": "A IA está tornando essa conversa ainda mais interessante."
   },
   {
    "type": "p",
    "text": "Hoje já podemos pedir para uma ferramenta gerar uma interface, transformar uma ideia em código, criar variações ou até explorar diferentes soluções."
   },
   {
    "type": "p",
    "text": "Isso aumenta muito a velocidade."
   },
   {
    "type": "p",
    "text": "Mas velocidade não significa necessariamente qualidade."
   },
   {
    "type": "p",
    "text": "Se eu consigo gerar 20 interfaces em poucos minutos, ainda preciso saber:"
   },
   {
    "type": "p",
    "text": "Qual delas resolve melhor o problema?"
   },
   {
    "type": "p",
    "text": "Qual é acessível?"
   },
   {
    "type": "p",
    "text": "Qual é tecnicamente viável?"
   },
   {
    "type": "p",
    "text": "Qual é mais simples?"
   },
   {
    "type": "p",
    "text": "Qual conversa com o restante do produto?"
   },
   {
    "type": "p",
    "text": "Qual realmente melhora a experiência?"
   },
   {
    "type": "p",
    "text": "A IA pode ajudar a produzir."
   },
   {
    "type": "p",
    "text": "Mas alguém ainda precisa tomar decisões."
   },
   {
    "type": "p",
    "text": "E esse continua sendo um dos principais papéis do designer."
   },
   {
    "type": "h2",
    "text": "O diferencial pode estar na conexão"
   },
   {
    "type": "p",
    "text": "Talvez o Product Designer do futuro não seja o designer que sabe mais ferramentas."
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Design entregue em telas",
      "icon": "image",
      "items": [
       "Handoff e espera",
       "Detalhes se perdem"
      ]
     },
     "right": {
      "title": "Design que conversa com código",
      "icon": "code",
      "items": [
       "Perguntas melhores",
       "Decisões no mesmo material"
      ]
     }
    },
    "caption": "Não é saber programar tudo; é entender o material do produto."
   },
   {
    "type": "p",
    "text": "Nem necessariamente aquele que sabe programar melhor."
   },
   {
    "type": "p",
    "text": "Pode ser aquele que consegue transitar melhor entre diferentes áreas."
   },
   {
    "type": "ul",
    "items": [
     "Entender o usuário",
     "Entender o negócio",
     "Entender dados",
     "Entender tecnologia",
     "Saber pesquisar",
     "Saber prototipar",
     "Saber comunicar"
    ]
   },
   {
    "type": "p",
    "text": "E conseguir conversar com diferentes profissionais sem precisar falar a mesma linguagem técnica que eles."
   },
   {
    "type": "p",
    "text": "No final, não precisamos transformar Product Designers em desenvolvedores."
   },
   {
    "type": "p",
    "text": "Mas acredito que precisamos formar designers que entendam melhor o que acontece depois que o arquivo do Figma é entregue."
   },
   {
    "type": "scene",
    "id": "compile",
    "data": {
     "a": "Porque o trabalho não termina quando a interface fica pronta.",
     "b": "É aí que ela começa a existir de verdade."
    }
   }
  ],
  "cover": "/blog/product-designer-que-conversa-com-codigo.webp",
  "lab": true
 },
 {
  "slug": "transformar-dados-em-decisao",
  "title": "O problema não é falta de dados. É não saber transformar dados em decisão.",
  "description": "Ter dashboard não significa ser data-driven. Como começar pela decisão, diferenciar informação de insight e usar visualização como parte do processo.",
  "date": "2026-09-26",
  "category": "growth",
  "tags": [
   "Dados",
   "Decisão",
   "Product Design"
  ],
  "readMinutes": 5,
  "related": {
   "href": "/cases/acquire",
   "title": "Clint Acquire",
   "body": "Na prática: uma landing page e um fluxo conversacional que concentraram 79% da demanda comercial."
  },
  "blocks": [
   {
    "type": "scene",
    "id": "data-deluge",
    "data": {
     "lines": [
      "Hoje, praticamente qualquer produto digital consegue gerar uma grande quantidade de dados.",
      "Temos mais informações do que nunca.",
      "Mas ter muitos dados não significa necessariamente tomar decisões melhores.",
      "Na minha visão, um dos maiores desafios dos times de produto hoje não é descobrir novos dados.",
      "É saber o que fazer com os dados que já temos."
     ],
     "list": "Cliques, conversões, sessões, retenção, abandono, tempo de uso, pesquisas, avaliações, tickets, gravações de sessão..."
    }
   },
   {
    "type": "h2",
    "text": "Ter um dashboard não significa ser data-driven"
   },
   {
    "type": "p",
    "text": "É comum encontrar empresas com dashboards cheios de gráficos e números."
   },
   {
    "type": "p",
    "text": "Tudo parece estar sendo acompanhado."
   },
   {
    "type": "p",
    "text": "Mas quando surge uma pergunta simples:"
   },
   {
    "type": "quote",
    "text": "“O que devemos fazer com essa informação?”"
   },
   {
    "type": "p",
    "text": "Nem sempre existe uma resposta."
   },
   {
    "type": "scene",
    "id": "drop-causes",
    "data": {
     "lead": "Um dashboard pode mostrar que a conversão caiu 15%.",
     "causes": [
      "Mas isso não explica o motivo",
      "Pode ser um problema de usabilidade",
      "Pode ser uma mudança no tráfego",
      "Pode ser uma alteração no preço",
      "Pode ser um problema técnico"
     ],
     "extra": "Pode ser uma mudança no comportamento dos usuários.",
     "a": "O número mostra o que aconteceu.",
     "b": "Precisamos investigar para entender por quê."
    }
   },
   {
    "type": "h2",
    "text": "Dados não substituem pesquisa"
   },
   {
    "type": "p",
    "text": "Esse é um ponto que considero muito importante para quem trabalha com UX e Product Design."
   },
   {
    "type": "p",
    "text": "Existe uma tendência de colocar dados quantitativos e pesquisa qualitativa em lados diferentes."
   },
   {
    "type": "p",
    "text": "Como se tivéssemos que escolher entre:"
   },
   {
    "type": "quote",
    "text": "“O que os números dizem?”"
   },
   {
    "type": "p",
    "text": "ou"
   },
   {
    "type": "quote",
    "text": "“O que os usuários dizem?”"
   },
   {
    "type": "p",
    "text": "Na prática, podemos usar os dois."
   },
   {
    "type": "p",
    "text": "Imagine que o Analytics mostra que 60% dos usuários abandonam uma determinada etapa."
   },
   {
    "type": "p",
    "text": "Esse dado é importante."
   },
   {
    "type": "p",
    "text": "Mas ainda temos uma pergunta:"
   },
   {
    "type": "quote",
    "text": "Por que eles estão abandonando?"
   },
   {
    "type": "p",
    "text": "Podemos então conversar com usuários, fazer testes de usabilidade, analisar sessões e observar o comportamento."
   },
   {
    "type": "p",
    "text": "Talvez descubramos que o problema está em uma informação que não está clara."
   },
   {
    "type": "p",
    "text": "Ou em um campo que gera insegurança."
   },
   {
    "type": "p",
    "text": "Ou em uma etapa que parece desnecessária."
   },
   {
    "type": "p",
    "text": "Agora temos muito mais contexto para tomar uma decisão."
   },
   {
    "type": "h2",
    "text": "Nem todo dado precisa virar uma métrica"
   },
   {
    "type": "p",
    "text": "Outra coisa que pode acontecer é transformar tudo em KPI."
   },
   {
    "type": "p",
    "text": "Nem toda informação precisa ser uma métrica de negócio."
   },
   {
    "type": "p",
    "text": "Algumas informações servem para gerar perguntas."
   },
   {
    "type": "p",
    "text": "Outras ajudam a encontrar problemas."
   },
   {
    "type": "p",
    "text": "Outras ajudam a validar hipóteses."
   },
   {
    "type": "p",
    "text": "E algumas realmente precisam acompanhar o desempenho do produto."
   },
   {
    "type": "p",
    "text": "O importante é saber qual é o papel daquele dado."
   },
   {
    "type": "p",
    "text": "Antes de perguntar:"
   },
   {
    "type": "quote",
    "text": "“Qual é a nossa métrica?”"
   },
   {
    "type": "p",
    "text": "Talvez seja melhor perguntar:"
   },
   {
    "type": "quote",
    "text": "“Qual decisão precisamos tomar?”"
   },
   {
    "type": "p",
    "text": "A partir daí podemos descobrir quais informações realmente precisamos."
   },
   {
    "type": "h2",
    "text": "Começar pela decisão muda tudo"
   },
   {
    "type": "p",
    "text": "Imagine que o time quer melhorar o onboarding."
   },
   {
    "type": "visual",
    "id": "decision-first",
    "caption": "Uma pergunta transforma um painel cheio nas poucas métricas que levam a uma decisão."
   },
   {
    "type": "p",
    "text": "Em vez de começar criando um dashboard com dezenas de métricas, podemos começar com uma pergunta:"
   },
   {
    "type": "quote",
    "text": "“Por que os novos usuários não chegam ao primeiro momento de valor?”"
   },
   {
    "type": "p",
    "text": "A partir dessa pergunta, podemos analisar:"
   },
   {
    "type": "ul",
    "items": [
     "taxa de conclusão do onboarding;",
     "abandono por etapa;",
     "tempo até a primeira ação;",
     "ativação;",
     "comportamento dos usuários que completam o processo;",
     "feedback dos usuários;",
     "testes de usabilidade."
    ]
   },
   {
    "type": "p",
    "text": "Agora os dados têm um objetivo."
   },
   {
    "type": "p",
    "text": "Eles estão ajudando a responder uma pergunta."
   },
   {
    "type": "p",
    "text": "E essa resposta pode levar a uma decisão de produto."
   },
   {
    "type": "h2",
    "text": "Visualização de dados também é parte do processo"
   },
   {
    "type": "p",
    "text": "É aqui que entra uma habilidade que considero cada vez mais importante para Product Designers."
   },
   {
    "type": "p",
    "text": "Saber transformar dados em uma história visual."
   },
   {
    "type": "p",
    "text": "Um gráfico não deveria existir apenas porque “fica bonito no dashboard”."
   },
   {
    "type": "p",
    "text": "A visualização precisa ajudar alguém a entender alguma coisa."
   },
   {
    "type": "scene",
    "id": "teleprompter",
    "data": {
     "lead": "Um bom dashboard deveria permitir que uma pessoa respondesse rapidamente:",
     "questions": [
      "O que aconteceu?",
      "Por que isso importa?",
      "Onde está o problema?",
      "O que precisa da minha atenção?",
      "Qual decisão posso tomar a partir disso?"
     ],
     "close": [
      "Se precisamos passar vários minutos olhando para gráficos para descobrir o que está acontecendo, talvez o problema não esteja nos dados.",
      "Pode estar na forma como eles estão sendo apresentados."
     ]
    }
   },
   {
    "type": "h2",
    "text": "Existe uma diferença entre informação e insight"
   },
   {
    "type": "p",
    "text": "Essa diferença parece pequena, mas muda bastante a conversa."
   },
   {
    "type": "visual",
    "data": {
     "kind": "funnel",
     "stages": [
      {
       "count": 9,
       "label": "Dados",
       "icon": "database"
      },
      {
       "count": 5,
       "label": "Informação",
       "icon": "file"
      },
      {
       "count": 2,
       "label": "Insight",
       "icon": "bulb"
      },
      {
       "count": 1,
       "label": "Decisão",
       "icon": "target"
      }
     ]
    },
    "caption": "Mais dados não significa mais clareza."
   },
   {
    "type": "scene",
    "id": "insight-focus",
    "data": {
     "intro": "",
     "l1": "Informação:",
     "info": "A taxa de conversão caiu de 8% para 5%.",
     "l2": "Insight:",
     "insight": "A conversão caiu principalmente entre usuários que acessam pelo mobile depois que o novo formulário foi lançado.",
     "l3": "O segundo caso já começa a apontar para uma investigação.",
     "l4": "E podemos ir além:",
     "test": "Testes indicam que usuários mobile estão tendo dificuldade para preencher o segundo campo do formulário.",
     "l5": "Agora temos uma hipótese mais clara.",
     "l6": "E a partir dela podemos pensar em uma solução.",
     "l7": "Esse caminho é muito mais útil:",
     "chain": "Dado → Contexto → Insight → Hipótese → Decisão → Experimento → Resultado"
    }
   },
   {
    "type": "h2",
    "text": "O papel do Product Designer"
   },
   {
    "type": "p",
    "text": "Acredito que Product Designers não precisam ser especialistas em ciência de dados."
   },
   {
    "type": "ul",
    "items": [
     "Mas precisamos saber trabalhar com dados",
     "Precisamos conseguir fazer perguntas",
     "Interpretar métricas",
     "Identificar padrões",
     "Questionar conclusões",
     "Cruzar dados quantitativos e qualitativos"
    ]
   },
   {
    "type": "p",
    "text": "E principalmente, transformar essas informações em decisões de design."
   },
   {
    "type": "p",
    "text": "Isso muda bastante a forma como apresentamos nosso trabalho."
   },
   {
    "type": "p",
    "text": "Em vez de:"
   },
   {
    "type": "quote",
    "text": "“Fizemos um novo layout.”"
   },
   {
    "type": "p",
    "text": "Podemos dizer:"
   },
   {
    "type": "quote",
    "text": "“Identificamos uma queda de conversão nessa etapa, investigamos o comportamento dos usuários, encontramos uma fricção e criamos uma solução para testar essa hipótese.”"
   },
   {
    "type": "p",
    "text": "A diferença não está apenas na forma de contar a história."
   },
   {
    "type": "p",
    "text": "Está na forma de pensar o trabalho."
   },
   {
    "type": "h2",
    "text": "Mais dados não significa mais clareza"
   },
   {
    "type": "p",
    "text": "Talvez esse seja um dos maiores problemas atualmente."
   },
   {
    "type": "p",
    "text": "Temos ferramentas para medir praticamente tudo."
   },
   {
    "type": "p",
    "text": "Mas medir tudo pode criar o efeito contrário."
   },
   {
    "type": "ul",
    "items": [
     "Mais gráficos",
     "Mais dashboards",
     "Mais relatórios",
     "Mais números",
     "E, muitas vezes, menos clareza"
    ]
   },
   {
    "type": "p",
    "text": "Um bom processo de dados não deveria gerar mais perguntas sem direção."
   },
   {
    "type": "p",
    "text": "Deveria ajudar o time a fazer perguntas melhores."
   },
   {
    "type": "p",
    "text": "Porque no final, produto não precisa apenas de informação."
   },
   {
    "type": "p",
    "text": "Precisa de decisões melhores."
   },
   {
    "type": "p",
    "text": "E talvez o verdadeiro significado de ser data-driven não seja ter muitos dados."
   },
   {
    "type": "p",
    "text": "É saber usar os dados certos, no momento certo, para tomar uma decisão."
   }
  ],
  "cover": "/blog/transformar-dados-em-decisao.webp",
  "lab": true
 },
 {
  "slug": "ia-cria-interface-quem-decide-se-e-boa",
  "title": "IA pode criar uma interface. Mas quem decide se ela é boa?",
  "description": "Se a IA cria uma interface em segundos, quem decide se ela é boa? Por que o olhar crítico e o contexto viram o centro do trabalho de UI.",
  "date": "2026-09-24",
  "category": "ai",
  "tags": [
   "IA",
   "UI",
   "Crítica de design"
  ],
  "readMinutes": 4,
  "related": {
   "href": "/cases/scale",
   "title": "Clint Scale",
   "body": "Na prática: um design system explorável, com tokens, componentes, contraste e governança."
  },
  "sources": [
   "Nielsen Norman Group, State of UX 2026: Design Deeper to Differentiate.",
   "Nielsen Norman Group, The Custodial Era of UX: Cleaning Up After AI.",
   "Nielsen Norman Group, Why Human-Led Research Still Matters in the Age of AI.",
   "Nielsen Norman Group, AI Can't Replace Real Research in Empathy Mapping.",
   "Nielsen Norman Group, Context Architecture.",
   "Nielsen Norman Group, The 3 Roles of Context for AI Agents.",
   "Nielsen Norman Group, The Core Skill of Design in the AI Era: Critique.",
   "Nielsen Norman Group, Designing AI Agents: 4 Lessons from China’s Qwen Agent.",
   "Figma, Figma’s 2026 AI Report.",
   "Figma, Config 2026: novos materiais, ferramentas e tela de trabalho.",
   "UX Design / UX Collective, discussões recentes sobre design engineering, agentes, contexto e novas interfaces."
  ],
  "blocks": [
   {
    "type": "p",
    "text": "A velocidade para criar interfaces mudou bastante."
   },
   {
    "type": "p",
    "text": "Hoje podemos descrever uma ideia, gerar uma tela, criar variações, transformar um layout em código e testar diferentes possibilidades em poucos minutos."
   },
   {
    "type": "p",
    "text": "Isso é uma mudança importante para quem trabalha com Product Design."
   },
   {
    "type": "scene",
    "id": "marked-question",
    "data": {
     "lead": "Mas existe uma pergunta que considero ainda mais importante:",
     "q": "Se a IA consegue criar uma interface rapidamente, quem decide se aquela interface é realmente boa?",
     "after": "Para mim, essa pergunta está começando a ser mais importante do que a própria capacidade de gerar telas."
    }
   },
   {
    "type": "h2",
    "text": "Criar ficou mais barato"
   },
   {
    "type": "p",
    "text": "Durante muito tempo, uma parte importante do trabalho de UI era transformar uma ideia em uma interface."
   },
   {
    "type": "p",
    "text": "Era necessário abrir o Figma, criar frames, organizar componentes, definir espaçamentos, escolher tipografia, criar estados e preparar um protótipo."
   },
   {
    "type": "p",
    "text": "Hoje, várias dessas tarefas podem ser aceleradas por IA."
   },
   {
    "type": "ul",
    "items": [
     "Isso é positivo",
     "Podemos explorar mais alternativas",
     "Podemos testar uma ideia antes",
     "Podemos criar protótipos mais completos"
    ]
   },
   {
    "type": "p",
    "text": "Podemos chegar mais rápido a algo que pode ser colocado na frente de uma pessoa."
   },
   {
    "type": "p",
    "text": "O problema começa quando confundimos velocidade de produção com qualidade da solução."
   },
   {
    "type": "p",
    "text": "Uma interface pode ser criada em segundos e continuar sendo uma solução ruim."
   },
   {
    "type": "h2",
    "text": "O problema da interface que parece certa"
   },
   {
    "type": "p",
    "text": "A IA é muito boa em reconhecer padrões."
   },
   {
    "type": "visual",
    "data": {
     "kind": "funnel",
     "stages": [
      {
       "count": 5,
       "label": "IA gera 5 interfaces",
       "icon": "sparkles"
      },
      {
       "count": 2,
       "label": "Designer aplica critérios",
       "icon": "filter"
      },
      {
       "count": 2,
       "label": "Teste com usuários",
       "icon": "users"
      },
      {
       "count": 1,
       "label": "1 solução é refinada",
       "icon": "checkCircle"
      }
     ]
    },
    "caption": "O papel do designer muda de produzir tudo para avaliar, selecionar e direcionar."
   },
   {
    "type": "scene",
    "id": "looks-right",
    "data": {
     "intro": "Isso significa que ela consegue produzir interfaces que parecem familiares.",
     "rules": [
      "Botões no lugar esperado",
      "Cards bem organizados",
      "Espaçamentos consistentes",
      "Hierarquia visual",
      "Componentes conhecidos",
      "Tudo parece correto"
     ],
     "ruleNote": "Mas uma interface pode seguir todas essas regras e ainda não resolver o problema certo.",
     "pull": "Uma interface visualmente boa não é necessariamente uma boa experiência.",
     "l1": "Ela pode estar bonita, consistente e tecnicamente bem construída.",
     "questions": [
      "Mas será que o usuário entende?",
      "Será que consegue completar a tarefa?",
      "Será que confia no que está vendo?",
      "Será que aquilo realmente ajuda?"
     ]
    }
   },
   {
    "type": "h2",
    "text": "É aqui que entra o olhar crítico"
   },
   {
    "type": "p",
    "text": "Com IA produzindo mais opções, o trabalho do designer começa a mudar."
   },
   {
    "type": "p",
    "text": "Em vez de passar tanto tempo criando cada alternativa manualmente, podemos passar mais tempo comparando alternativas."
   },
   {
    "type": "p",
    "text": "E comparar exige critério."
   },
   {
    "type": "p",
    "text": "Por que essa solução é melhor?"
   },
   {
    "type": "p",
    "text": "Para qual usuário?"
   },
   {
    "type": "p",
    "text": "Em qual contexto?"
   },
   {
    "type": "p",
    "text": "Qual problema ela resolve?"
   },
   {
    "type": "p",
    "text": "O que acontece quando dá errado?"
   },
   {
    "type": "p",
    "text": "Qual é o impacto para o negócio?"
   },
   {
    "type": "p",
    "text": "Qual evidência temos para defender essa escolha?"
   },
   {
    "type": "p",
    "text": "Essas perguntas são parte do trabalho de design."
   },
   {
    "type": "p",
    "text": "E não desaparecem porque uma ferramenta consegue gerar a interface."
   },
   {
    "type": "h2",
    "text": "Criticar também é uma habilidade de design"
   },
   {
    "type": "scene",
    "id": "critique",
    "data": {
     "lead": "Existe uma diferença entre olhar para uma interface e dizer:",
     "shallow": "“Está bonita.”",
     "lead2": "E conseguir dizer:",
     "deep": "“Essa solução reduz a carga cognitiva nessa etapa, mas cria uma nova dúvida sobre o que acontece depois do envio.”"
    }
   },
   {
    "type": "p",
    "text": "A segunda análise exige conhecimento de UX."
   },
   {
    "type": "ul",
    "items": [
     "Exige contexto",
     "Exige experiência",
     "E, muitas vezes, exige pesquisa"
    ]
   },
   {
    "type": "p",
    "text": "A crítica não é simplesmente apontar problemas."
   },
   {
    "type": "p",
    "text": "É criar critérios para decidir o que deve ser mantido, alterado ou descartado."
   },
   {
    "type": "h2",
    "text": "Uma boa interface precisa de contexto"
   },
   {
    "type": "p",
    "text": "Imagine que você peça para uma IA criar uma tela de checkout."
   },
   {
    "type": "p",
    "text": "Ela consegue fazer."
   },
   {
    "type": "p",
    "text": "Mas ela não sabe automaticamente tudo o que você sabe sobre aquele produto."
   },
   {
    "type": "p",
    "text": "Ela pode não conhecer:"
   },
   {
    "type": "ul",
    "items": [
     "os principais motivos de abandono;",
     "as regras do negócio;",
     "as limitações técnicas;",
     "o histórico de testes;",
     "as dúvidas dos usuários;",
     "as métricas atuais;",
     "os problemas de acessibilidade;",
     "as necessidades de diferentes perfis;",
     "as decisões que já foram tomadas pelo time."
    ]
   },
   {
    "type": "p",
    "text": "Quanto melhor o contexto, melhor tende a ser o resultado."
   },
   {
    "type": "p",
    "text": "Isso muda uma parte importante do trabalho do designer."
   },
   {
    "type": "p",
    "text": "Não é apenas saber escrever um prompt."
   },
   {
    "type": "p",
    "text": "É saber qual contexto precisa entrar no processo."
   },
   {
    "type": "h2",
    "text": "O designer começa a trabalhar mais como editor"
   },
   {
    "type": "p",
    "text": "Talvez essa seja uma das mudanças mais interessantes."
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Produzir tudo",
      "icon": "pen",
      "items": [
       "Cada tela feita à mão",
       "Pouco tempo para avaliar"
      ]
     },
     "right": {
      "title": "Editar e direcionar",
      "icon": "eye",
      "items": [
       "Mais alternativas exploradas",
       "Critério como diferencial"
      ]
     }
    },
    "caption": "Velocidade de produção não é qualidade da solução."
   },
   {
    "type": "ul",
    "items": [
     "A IA pode gerar muitas possibilidades",
     "O designer precisa selecionar",
     "Pode gerar cinco soluções",
     "O designer compara",
     "Pode gerar dez variações",
     "O designer identifica padrões",
     "Pode gerar um protótipo",
     "O designer testa",
     "Pode gerar código"
    ]
   },
   {
    "type": "p",
    "text": "O designer verifica se aquilo realmente representa a experiência desejada."
   },
   {
    "type": "p",
    "text": "Nesse cenário, o designer deixa de ser apenas quem produz."
   },
   {
    "type": "p",
    "text": "Passa a ser também quem edita, questiona, seleciona e direciona."
   },
   {
    "type": "h2",
    "text": "Isso muda o que significa ser bom em UI"
   },
   {
    "type": "p",
    "text": "Não acredito que UI vai deixar de ser importante."
   },
   {
    "type": "p",
    "text": "Pelo contrário."
   },
   {
    "type": "p",
    "text": "Fundamentos visuais continuam sendo necessários."
   },
   {
    "type": "p",
    "text": "Mas saber construir uma tela manualmente pode deixar de ser um diferencial tão forte quanto antes."
   },
   {
    "type": "p",
    "text": "Se uma ferramenta consegue criar uma interface visualmente aceitável em poucos segundos, o diferencial passa a estar em outras capacidades:"
   },
   {
    "type": "quote",
    "text": "bom julgamento, repertório, contexto, pesquisa e capacidade de avaliação."
   },
   {
    "type": "h2",
    "text": "E como usar IA sem perder o pensamento crítico?"
   },
   {
    "type": "scene",
    "id": "contact-sheet",
    "data": {
     "lead": "Eu gosto de pensar em um processo simples:",
     "process": "Gerar → Questionar → Comparar → Testar → Aprender",
     "steps": [
      "Primeiro, usamos IA para explorar",
      "Depois, questionamos as soluções",
      "Comparamos diferentes caminhos",
      "Testamos com pessoas ou com dados",
      "E usamos o aprendizado para melhorar",
      "O erro está em parar na primeira etapa",
      "Gerar não é validar"
     ],
     "a": "Uma interface criada pela IA é uma hipótese.",
     "b": "Não é uma resposta definitiva."
    }
   },
   {
    "type": "h2",
    "text": "O novo diferencial"
   },
   {
    "type": "p",
    "text": "Acredito que o valor do designer vai estar cada vez menos em conseguir produzir uma tela rapidamente."
   },
   {
    "type": "p",
    "text": "E cada vez mais em saber qual tela vale a pena produzir."
   },
   {
    "type": "p",
    "text": "A IA pode aumentar nossa velocidade."
   },
   {
    "type": "p",
    "text": "Mas ainda precisamos decidir onde colocar essa velocidade."
   },
   {
    "type": "p",
    "text": "Porque criar mais soluções não significa criar soluções melhores."
   },
   {
    "type": "p",
    "text": "E talvez essa seja uma das habilidades mais importantes para o Product Designer nos próximos anos:"
   },
   {
    "type": "quote",
    "text": "saber olhar para uma solução e explicar por que ela deveria existir."
   }
  ],
  "cover": "/blog/ia-cria-interface-quem-decide-se-e-boa.webp",
  "lab": true
 },
 {
  "slug": "pesquisa-com-usuarios-na-era-da-ia",
  "title": "Pesquisa com usuários continua importante na era da IA",
  "description": "A IA analisa entrevistas, mas não vive a experiência. Por que pesquisa com pessoas reais continua essencial, e como IA e pesquisa se completam.",
  "date": "2026-09-22",
  "category": "ux",
  "tags": [
   "UX Research",
   "IA",
   "Empatia"
  ],
  "readMinutes": 4,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: agentes de IA que agem dentro do CRM e deixam a pessoa no controle."
  },
  "sources": [
   "Nielsen Norman Group, State of UX 2026: Design Deeper to Differentiate.",
   "Nielsen Norman Group, The Custodial Era of UX: Cleaning Up After AI.",
   "Nielsen Norman Group, Why Human-Led Research Still Matters in the Age of AI.",
   "Nielsen Norman Group, AI Can't Replace Real Research in Empathy Mapping.",
   "Nielsen Norman Group, Context Architecture.",
   "Nielsen Norman Group, The 3 Roles of Context for AI Agents.",
   "Nielsen Norman Group, The Core Skill of Design in the AI Era: Critique.",
   "Nielsen Norman Group, Designing AI Agents: 4 Lessons from China’s Qwen Agent.",
   "Figma, Figma’s 2026 AI Report.",
   "Figma, Config 2026: novos materiais, ferramentas e tela de trabalho.",
   "UX Design / UX Collective, discussões recentes sobre design engineering, agentes, contexto e novas interfaces."
  ],
  "blocks": [
   {
    "type": "ul",
    "items": [
     "A IA consegue analisar entrevistas",
     "Consegue resumir respostas",
     "Agrupar comentários",
     "Encontrar padrões",
     "Criar personas",
     "Gerar hipóteses",
     "Até simular possíveis usuários"
    ]
   },
   {
    "type": "p",
    "text": "Então fica uma pergunta cada vez mais comum:"
   },
   {
    "type": "quote",
    "text": "Se a IA consegue fazer tudo isso, ainda precisamos conversar com usuários reais?"
   },
   {
    "type": "p",
    "text": "Minha resposta é sim."
   },
   {
    "type": "p",
    "text": "E talvez a pesquisa esteja ficando ainda mais importante."
   },
   {
    "type": "h2",
    "text": "A IA consegue analisar. Mas não vive a experiência."
   },
   {
    "type": "scene",
    "id": "presence",
    "data": {
     "intro": "Imagine que você tenha 30 entrevistas com usuários.",
     "ai": "Uma IA pode ajudar a transcrever, organizar e encontrar temas recorrentes em poucos minutos.",
     "saves": "Isso economiza muito tempo.",
     "diff": "Mas existe uma diferença entre ler uma transcrição e estar presente durante uma conversa.",
     "notice": "Quando você observa uma pessoa tentando usar um produto, existem coisas que não aparecem apenas no texto.",
     "cues": [
      "A hesitação",
      "A expressão",
      "O momento em que ela para",
      "A forma como tenta explicar um problema",
      "O que ela faz antes de responder"
     ],
     "context": "Uma frase que parece simples pode ter muito mais significado quando você conhece o contexto em que foi dita.",
     "a": "Pesquisa não é apenas coletar respostas.",
     "b": "É aprender sobre pessoas."
    }
   },
   {
    "type": "h2",
    "text": "O problema das respostas muito perfeitas"
   },
   {
    "type": "p",
    "text": "A IA é muito boa em organizar informações."
   },
   {
    "type": "p",
    "text": "E isso também pode ser um problema."
   },
   {
    "type": "p",
    "text": "Quando transformamos uma pesquisa em um resumo muito rapidamente, podemos perder as partes confusas."
   },
   {
    "type": "p",
    "text": "As contradições."
   },
   {
    "type": "p",
    "text": "As exceções."
   },
   {
    "type": "p",
    "text": "As histórias que não cabem em uma categoria."
   },
   {
    "type": "p",
    "text": "Mas são justamente essas partes que muitas vezes fazem surgir uma boa pergunta de design."
   },
   {
    "type": "p",
    "text": "Imagine que oito pessoas tenham o mesmo comportamento."
   },
   {
    "type": "p",
    "text": "É fácil transformar isso em um insight."
   },
   {
    "type": "p",
    "text": "Mas talvez uma nona pessoa faça algo completamente diferente."
   },
   {
    "type": "p",
    "text": "Essa nona pessoa pode revelar uma necessidade que ainda não tínhamos percebido."
   },
   {
    "type": "p",
    "text": "Por isso, pesquisa não deveria ser apenas procurar padrões."
   },
   {
    "type": "p",
    "text": "Também é importante perceber o que não se encaixa."
   },
   {
    "type": "visual",
    "id": "ninth-person",
    "caption": "O resumo agrupa quem é igual. Quem não se encaixa pode revelar a próxima pergunta de design."
   },
   {
    "type": "h2",
    "text": "IA pode ajudar muito na pesquisa"
   },
   {
    "type": "p",
    "text": "Isso não significa deixar a IA de lado."
   },
   {
    "type": "p",
    "text": "Muito pelo contrário."
   },
   {
    "type": "p",
    "text": "Podemos usar IA para:"
   },
   {
    "type": "ul",
    "items": [
     "organizar entrevistas;",
     "transcrever conversas;",
     "agrupar temas;",
     "encontrar trechos relevantes;",
     "comparar respostas;",
     "ajudar na criação de roteiros;",
     "resumir grandes volumes de informação;",
     "sugerir hipóteses;",
     "estruturar relatórios;",
     "transformar descobertas em perguntas para novas pesquisas."
    ]
   },
   {
    "type": "p",
    "text": "O ganho de tempo pode ser enorme."
   },
   {
    "type": "p",
    "text": "Mas eu colocaria uma regra simples:"
   },
   {
    "type": "quote",
    "text": "Use IA para acelerar a pesquisa, não para substituir o contato com a realidade."
   },
   {
    "type": "h2",
    "text": "Synthetic users não são usuários reais"
   },
   {
    "type": "p",
    "text": "É possível pedir para uma IA assumir o papel de determinado perfil."
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Usuário sintético",
      "icon": "bot",
      "items": [
       "Respostas plausíveis",
       "Sem contradições reais"
      ]
     },
     "right": {
      "title": "Usuário real",
      "icon": "user",
      "items": [
       "Contexto e emoção",
       "Surpresas que mudam o produto"
      ]
     }
    },
    "caption": "Resposta perfeita demais é um sinal de alerta."
   },
   {
    "type": "scene",
    "id": "synthetic",
    "data": {
     "lead": "Por exemplo:",
     "prompt": "“Imagine que você é uma pessoa de 35 anos usando um aplicativo financeiro pela primeira vez.”",
     "notes": [
      "A resposta pode parecer muito convincente",
      "Mas existe um problema",
      "A IA não é essa pessoa",
      "Ela não está usando seu dinheiro"
     ],
     "lacks": [
      "Não está sentindo medo de perder uma informação.",
      "Não está tentando fazer aquilo com pressa.",
      "Não está lidando com a realidade daquele contexto."
     ],
     "a": "Uma simulação pode ajudar a explorar possibilidades.",
     "b": "Mas não deveria ser tratada como evidência sobre usuários reais."
    }
   },
   {
    "type": "h2",
    "text": "Pesquisa também cria empatia dentro do time"
   },
   {
    "type": "p",
    "text": "Existe outro benefício da pesquisa que às vezes esquecemos."
   },
   {
    "type": "p",
    "text": "Quando um time acompanha uma entrevista real, todos aprendem."
   },
   {
    "type": "ul",
    "items": [
     "Produto ouve",
     "Design observa",
     "Desenvolvimento entende",
     "Marketing percebe"
    ]
   },
   {
    "type": "p",
    "text": "Atendimento reconhece problemas que já aparecem nos chamados."
   },
   {
    "type": "p",
    "text": "Uma boa pesquisa cria uma linguagem comum."
   },
   {
    "type": "p",
    "text": "Depois de ouvir uma pessoa dizer:"
   },
   {
    "type": "quote",
    "text": "“Eu não sabia se podia confiar nessa informação.”"
   },
   {
    "type": "p",
    "text": "É muito mais fácil para o time lembrar daquele problema durante uma decisão."
   },
   {
    "type": "p",
    "text": "Esse aprendizado compartilhado é difícil de substituir por um relatório."
   },
   {
    "type": "h2",
    "text": "O papel do pesquisador também está mudando"
   },
   {
    "type": "p",
    "text": "Com IA ajudando em tarefas operacionais, o trabalho de pesquisa pode se deslocar para outras atividades."
   },
   {
    "type": "p",
    "text": "Mais tempo para:"
   },
   {
    "type": "ul",
    "items": [
     "definir perguntas melhores;",
     "escolher métodos;",
     "entender contexto;",
     "conversar com participantes;",
     "identificar riscos;",
     "interpretar contradições;",
     "conectar pesquisa com decisões de produto;",
     "avaliar a qualidade das evidências."
    ]
   },
   {
    "type": "p",
    "text": "Menos trabalho manual não significa menos pesquisa."
   },
   {
    "type": "p",
    "text": "Pode significar mais espaço para fazer pesquisa melhor."
   },
   {
    "type": "h2",
    "text": "Nem toda decisão precisa de uma pesquisa enorme"
   },
   {
    "type": "p",
    "text": "Pesquisar não significa necessariamente passar semanas fazendo entrevistas."
   },
   {
    "type": "p",
    "text": "Às vezes, precisamos apenas responder uma pergunta específica."
   },
   {
    "type": "p",
    "text": "Por exemplo:"
   },
   {
    "type": "quote",
    "text": "“As pessoas entendem essa mensagem?”"
   },
   {
    "type": "p",
    "text": "Um teste rápido pode ajudar."
   },
   {
    "type": "p",
    "text": "Ou:"
   },
   {
    "type": "quote",
    "text": "“Por que existe tanto abandono nessa etapa?”"
   },
   {
    "type": "p",
    "text": "Podemos combinar analytics com algumas entrevistas."
   },
   {
    "type": "p",
    "text": "Ou:"
   },
   {
    "type": "quote",
    "text": "“Qual dessas soluções é mais fácil de entender?”"
   },
   {
    "type": "p",
    "text": "Um teste de usabilidade pode ser suficiente para encontrar problemas."
   },
   {
    "type": "p",
    "text": "A pesquisa precisa estar conectada à decisão."
   },
   {
    "type": "h2",
    "text": "A pergunta certa não é “IA ou pesquisa?”"
   },
   {
    "type": "p",
    "text": "Talvez a pergunta seja:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "merge",
     "a": {
      "title": "Com IA",
      "icon": "bot",
      "steps": [
       "Dados brutos",
       "IA organiza",
       "Temas",
       "Hipóteses"
      ]
     },
     "b": {
      "title": "Com pessoas",
      "icon": "users",
      "steps": [
       "Usuário real",
       "Contexto",
       "Observação",
       "Evidência"
      ]
     },
     "result": [
      "Insight",
      "Decisão de produto"
     ]
    },
    "caption": "IA e pesquisa não competem: cumprem papéis diferentes."
   },
   {
    "type": "quote",
    "text": "“Como podemos usar IA para fazer pesquisa melhor?”"
   },
   {
    "type": "p",
    "text": "Podemos gastar menos tempo organizando arquivos e mais tempo conversando com usuários."
   },
   {
    "type": "p",
    "text": "Podemos analisar mais entrevistas."
   },
   {
    "type": "p",
    "text": "Podemos comparar mais informações."
   },
   {
    "type": "p",
    "text": "Podemos encontrar perguntas que não tínhamos percebido."
   },
   {
    "type": "p",
    "text": "Podemos testar hipóteses mais rapidamente."
   },
   {
    "type": "p",
    "text": "Mas precisamos continuar indo até a fonte."
   },
   {
    "type": "p",
    "text": "Porque o usuário real não existe dentro do nosso modelo."
   },
   {
    "type": "p",
    "text": "Ele existe fora dele."
   },
   {
    "type": "h2",
    "text": "O futuro da pesquisa pode ser mais rápido, não menos humana"
   },
   {
    "type": "p",
    "text": "Acredito que a IA pode tornar a pesquisa mais acessível para equipes pequenas e acelerar muitas etapas do processo."
   },
   {
    "type": "p",
    "text": "Mas isso não significa abandonar os fundamentos."
   },
   {
    "type": "p",
    "text": "Uma pesquisa ainda precisa de uma boa pergunta."
   },
   {
    "type": "p",
    "text": "Precisa de contexto."
   },
   {
    "type": "p",
    "text": "Precisa de pessoas reais quando estamos tentando entender pessoas reais."
   },
   {
    "type": "p",
    "text": "Precisa de interpretação."
   },
   {
    "type": "p",
    "text": "E precisa estar conectada a uma decisão."
   },
   {
    "type": "scene",
    "id": "circle-questions",
    "data": {
     "lead": "No fim, podemos usar IA para analisar milhares de respostas.",
     "lead2": "Mas ainda precisamos saber:",
     "questions": [
      "Quem são essas pessoas?",
      "O que estamos tentando descobrir?",
      "Qual decisão depende desse aprendizado?"
     ],
     "lastLead": "E principalmente:",
     "last": "O que vamos fazer diferente depois de aprender isso?"
    }
   }
  ],
  "cover": "/blog/pesquisa-com-usuarios-na-era-da-ia.webp",
  "lab": true
 },
 {
  "slug": "contexto-novo-material-do-design",
  "title": "Contexto pode ser o novo material do design de produto",
  "description": "Com IA e agentes, o sistema precisa entender contexto. Como o designer passa a desenhar relações, regras e supervisão, não só telas.",
  "date": "2026-09-20",
  "category": "ai",
  "tags": [
   "IA",
   "Agentes",
   "Arquitetura"
  ],
  "readMinutes": 5,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: agentes de IA que agem dentro do CRM e deixam a pessoa no controle."
  },
  "sources": [
   "Nielsen Norman Group, State of UX 2026: Design Deeper to Differentiate.",
   "Nielsen Norman Group, The Custodial Era of UX: Cleaning Up After AI.",
   "Nielsen Norman Group, Why Human-Led Research Still Matters in the Age of AI.",
   "Nielsen Norman Group, AI Can't Replace Real Research in Empathy Mapping.",
   "Nielsen Norman Group, Context Architecture.",
   "Nielsen Norman Group, The 3 Roles of Context for AI Agents.",
   "Nielsen Norman Group, The Core Skill of Design in the AI Era: Critique.",
   "Nielsen Norman Group, Designing AI Agents: 4 Lessons from China’s Qwen Agent.",
   "Figma, Figma’s 2026 AI Report.",
   "Figma, Config 2026: novos materiais, ferramentas e tela de trabalho.",
   "UX Design / UX Collective, discussões recentes sobre design engineering, agentes, contexto e novas interfaces."
  ],
  "blocks": [
   {
    "type": "p",
    "text": "Durante muito tempo, pensamos no trabalho de UX como a criação de telas, fluxos, jornadas e componentes."
   },
   {
    "type": "p",
    "text": "Mas os produtos estão mudando."
   },
   {
    "type": "p",
    "text": "Com IA generativa e agentes, o sistema também precisa entender contexto."
   },
   {
    "type": "ul",
    "items": [
     "Ele precisa saber o que está acontecendo",
     "Quem está usando",
     "O que aquela pessoa está tentando fazer",
     "Quais informações são relevantes",
     "Quais regras precisam ser respeitadas",
     "E quais decisões podem ou não ser tomadas"
    ]
   },
   {
    "type": "p",
    "text": "Isso cria uma nova oportunidade para o design:"
   },
   {
    "type": "quote",
    "text": "desenhar não apenas interfaces, mas também o contexto que orienta sistemas inteligentes."
   },
   {
    "type": "h2",
    "text": "O que acontece quando a interface deixa de ser o centro?"
   },
   {
    "type": "p",
    "text": "Imagine que você quer remarcar uma viagem."
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Tela",
       "icon": "image"
      },
      {
       "label": "Fluxo",
       "icon": "route"
      },
      {
       "label": "Jornada",
       "icon": "map"
      },
      {
       "label": "Sistema",
       "icon": "workflow"
      },
      {
       "label": "Agente",
       "icon": "bot"
      }
     ]
    },
    "caption": "A unidade de design foi crescendo, da tela até o agente."
   },
   {
    "type": "p",
    "text": "Em um produto tradicional, você provavelmente navegaria por várias telas:"
   },
   {
    "type": "p",
    "text": "Viagem → Reserva → Alterar data → Escolher voo → Confirmar."
   },
   {
    "type": "p",
    "text": "Agora imagine que você simplesmente diga:"
   },
   {
    "type": "quote",
    "text": "“Preciso mudar meu voo para sexta-feira à noite.”"
   },
   {
    "type": "p",
    "text": "Um agente pode interpretar a intenção e realizar parte do processo."
   },
   {
    "type": "p",
    "text": "A interface continua existindo."
   },
   {
    "type": "p",
    "text": "Mas ela deixa de ser o único lugar onde a interação acontece."
   },
   {
    "type": "p",
    "text": "O sistema precisa entender a intenção."
   },
   {
    "type": "p",
    "text": "E isso muda o problema de design."
   },
   {
    "type": "h2",
    "text": "Informação não é suficiente. O sistema precisa de contexto."
   },
   {
    "type": "scene",
    "id": "orbit",
    "data": {
     "lead": "Imagine um agente que recebe a mensagem:",
     "msg": "“Quero cancelar.”",
     "options": [
      "Uma compra?",
      "Uma assinatura?",
      "Uma reserva?",
      "Uma transferência?",
      "Uma solicitação?"
     ],
     "a": "Cancelar o quê? A frase sozinha não é suficiente.",
     "b": "O sistema precisa de contexto.",
     "c": ""
    }
   },
   {
    "type": "p",
    "text": "É aqui que começa a ficar interessante pensar em algo próximo de uma arquitetura de contexto."
   },
   {
    "type": "p",
    "text": "Se a arquitetura da informação organiza conteúdos para que pessoas encontrem o que precisam, a arquitetura de contexto ajuda sistemas inteligentes a entenderem quais informações devem ser consideradas para agir."
   },
   {
    "type": "h2",
    "text": "O designer começa a desenhar relações"
   },
   {
    "type": "scene",
    "id": "graph-morph",
    "data": {
     "a": "Antes, poderíamos pensar:",
     "chainA": "Tela A → Tela B → Tela C",
     "b": "Agora podemos precisar pensar:",
     "chainB": "Intenção → contexto → regras → dados → ação → confirmação"
    }
   },
   {
    "type": "p",
    "text": "Isso é diferente."
   },
   {
    "type": "p",
    "text": "O designer precisa considerar quais informações o sistema precisa para tomar uma decisão."
   },
   {
    "type": "p",
    "text": "Por exemplo, um usuário pede para cancelar uma assinatura."
   },
   {
    "type": "p",
    "text": "O sistema pode precisar saber:"
   },
   {
    "type": "ul",
    "items": [
     "qual assinatura;",
     "qual plano;",
     "quando foi contratada;",
     "se existe período de fidelidade;",
     "se há cobrança pendente;",
     "quais consequências existem;",
     "quais alternativas podem ser oferecidas."
    ]
   },
   {
    "type": "p",
    "text": "Tudo isso faz parte da experiência."
   },
   {
    "type": "p",
    "text": "Mesmo que o usuário nunca veja todas essas informações em uma tela."
   },
   {
    "type": "h2",
    "text": "O contexto também pode estar errado"
   },
   {
    "type": "p",
    "text": "Se o sistema entende o contexto errado, pode tomar uma decisão errada."
   },
   {
    "type": "p",
    "text": "Por isso, experiências com agentes precisam mostrar não apenas o resultado."
   },
   {
    "type": "scene",
    "id": "agent-panel",
    "data": {
     "lead": "Precisam ajudar o usuário a entender:",
     "questions": [
      "O que o sistema entendeu?",
      "O que ele está fazendo?",
      "Por que tomou essa decisão?",
      "O que pode ser alterado?",
      "Como posso interromper?"
     ],
     "after": "Essa transparência começa a fazer parte da UX."
    }
   },
   {
    "type": "h2",
    "text": "Controle passa a ser ainda mais importante"
   },
   {
    "type": "p",
    "text": "Em uma interface tradicional, o usuário normalmente executa as ações."
   },
   {
    "type": "ul",
    "items": [
     "Clica",
     "Seleciona",
     "Confirma",
     "Avança"
    ]
   },
   {
    "type": "p",
    "text": "Em um sistema mais autônomo, o sistema pode executar ações por conta própria."
   },
   {
    "type": "p",
    "text": "Isso muda a relação."
   },
   {
    "type": "p",
    "text": "Se um agente pode enviar uma mensagem, fazer uma reserva ou alterar uma configuração, precisamos pensar em níveis de autonomia."
   },
   {
    "type": "p",
    "text": "Talvez algumas ações possam ser automáticas."
   },
   {
    "type": "p",
    "text": "Outras precisam de confirmação."
   },
   {
    "type": "p",
    "text": "E algumas deveriam exigir aprovação explícita."
   },
   {
    "type": "p",
    "text": "O design precisa definir esses limites."
   },
   {
    "type": "h2",
    "text": "Nem toda automação precisa ser automática"
   },
   {
    "type": "p",
    "text": "Quando conseguimos automatizar alguma coisa, existe uma tendência de automatizar."
   },
   {
    "type": "p",
    "text": "Mas a pergunta deveria ser:"
   },
   {
    "type": "quote",
    "text": "Essa ação deveria ser automática?"
   },
   {
    "type": "p",
    "text": "Imagine um aplicativo financeiro."
   },
   {
    "type": "p",
    "text": "Fazer uma análise automática pode ser ótimo."
   },
   {
    "type": "p",
    "text": "Transferir um valor grande sem confirmação pode ser outra história."
   },
   {
    "type": "p",
    "text": "Um agente pode encontrar uma opção de viagem."
   },
   {
    "type": "p",
    "text": "Comprar essa passagem automaticamente já é uma decisão diferente."
   },
   {
    "type": "p",
    "text": "Quanto maior o impacto da ação, maior pode ser a necessidade de controle e confirmação."
   },
   {
    "type": "h2",
    "text": "O novo fluxo pode ser intenção → ação → supervisão"
   },
   {
    "type": "p",
    "text": "Em produtos tradicionais, pensamos muito em:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Intenção",
       "icon": "chat"
      },
      {
       "label": "Contexto",
       "icon": "brain"
      },
      {
       "label": "Regras",
       "icon": "shield"
      },
      {
       "label": "Proposta",
       "icon": "sparkles"
      },
      {
       "label": "Aprovação",
       "icon": "userCheck"
      },
      {
       "label": "Execução",
       "icon": "zap"
      }
     ]
    },
    "caption": "Por que UX de agentes é diferente de colocar um chatbot na interface."
   },
   {
    "type": "quote",
    "text": "entrada → interface → ação"
   },
   {
    "type": "p",
    "text": "Em experiências com agentes, podemos começar a pensar em:"
   },
   {
    "type": "quote",
    "text": "intenção → interpretação → ação → feedback → supervisão"
   },
   {
    "type": "p",
    "text": "Esse fluxo muda bastante o papel da interface."
   },
   {
    "type": "p",
    "text": "A interface pode deixar de ser o lugar onde todas as ações acontecem."
   },
   {
    "type": "p",
    "text": "Ela pode se tornar o lugar onde o usuário acompanha, corrige, aprova ou entende o que o sistema está fazendo."
   },
   {
    "type": "h2",
    "text": "Isso também muda a arquitetura da informação"
   },
   {
    "type": "p",
    "text": "Se um agente precisa acessar informações diferentes para responder ou executar uma tarefa, essas informações precisam estar organizadas de forma que façam sentido."
   },
   {
    "type": "p",
    "text": "Não basta ter conteúdo."
   },
   {
    "type": "p",
    "text": "Precisamos pensar em:"
   },
   {
    "type": "ul",
    "items": [
     "estrutura;",
     "hierarquia;",
     "relações;",
     "metadados;",
     "permissões;",
     "atualização;",
     "contexto;",
     "qualidade da informação."
    ]
   },
   {
    "type": "p",
    "text": "Isso aproxima UX de áreas que antes pareciam mais distantes."
   },
   {
    "type": "ul",
    "items": [
     "Conteúdo",
     "Dados",
     "Sistemas",
     "IA",
     "Engenharia",
     "Produto"
    ]
   },
   {
    "type": "p",
    "text": "O designer começa a participar dessas conversas porque elas afetam diretamente a experiência."
   },
   {
    "type": "h2",
    "text": "O contexto pode ser um novo tipo de Design System"
   },
   {
    "type": "p",
    "text": "Essa é uma provocação."
   },
   {
    "type": "visual",
    "data": {
     "kind": "layers",
     "items": [
      {
       "label": "Dados",
       "icon": "database"
      },
      {
       "label": "Regras",
       "icon": "list"
      },
      {
       "label": "Permissões",
       "icon": "lock"
      },
      {
       "label": "Tom",
       "icon": "chat"
      },
      {
       "label": "Comportamento",
       "icon": "bot"
      }
     ]
    },
    "caption": "Assim como tokens, o contexto também pode ser organizado em camadas."
   },
   {
    "type": "p",
    "text": "Um Design System tradicional define componentes, padrões e regras visuais."
   },
   {
    "type": "p",
    "text": "Mas imagine um sistema em que também temos regras de contexto:"
   },
   {
    "type": "quote",
    "text": "Quando usar esta informação?"
   },
   {
    "type": "quote",
    "text": "Quem pode acessar?"
   },
   {
    "type": "quote",
    "text": "Qual informação tem prioridade?"
   },
   {
    "type": "quote",
    "text": "Quando pedir confirmação?"
   },
   {
    "type": "quote",
    "text": "O que fazer quando existe ambiguidade?"
   },
   {
    "type": "quote",
    "text": "Como lidar com uma exceção?"
   },
   {
    "type": "p",
    "text": "Isso não substitui um Design System."
   },
   {
    "type": "p",
    "text": "Mas amplia a conversa."
   },
   {
    "type": "p",
    "text": "Estamos começando a desenhar não apenas como o produto aparece, mas como ele deve se comportar diante de diferentes situações."
   },
   {
    "type": "h2",
    "text": "O designer precisa entender o sistema inteiro"
   },
   {
    "type": "p",
    "text": "Esse movimento reforça algo que já vinha acontecendo no Product Design."
   },
   {
    "type": "p",
    "text": "O designer não pode olhar apenas para a tela."
   },
   {
    "type": "p",
    "text": "Precisa entender:"
   },
   {
    "type": "p",
    "text": "O que acontece antes?"
   },
   {
    "type": "p",
    "text": "O que acontece depois?"
   },
   {
    "type": "p",
    "text": "Que dados estão envolvidos?"
   },
   {
    "type": "p",
    "text": "Quais são as regras?"
   },
   {
    "type": "p",
    "text": "Quem toma a decisão?"
   },
   {
    "type": "p",
    "text": "O que acontece quando algo dá errado?"
   },
   {
    "type": "p",
    "text": "Quem pode corrigir?"
   },
   {
    "type": "p",
    "text": "Qual é o impacto daquela ação?"
   },
   {
    "type": "p",
    "text": "Essa visão sistêmica fica ainda mais importante quando o produto começa a agir por conta própria."
   },
   {
    "type": "h2",
    "text": "E onde entra a pesquisa?"
   },
   {
    "type": "p",
    "text": "Precisamos entender:"
   },
   {
    "type": "p",
    "text": "Como as pessoas descrevem suas intenções?"
   },
   {
    "type": "p",
    "text": "Em quais momentos elas querem autonomia?"
   },
   {
    "type": "p",
    "text": "Quando preferem controle?"
   },
   {
    "type": "p",
    "text": "Que tipos de erro são aceitáveis?"
   },
   {
    "type": "p",
    "text": "O que faz uma pessoa confiar em uma recomendação?"
   },
   {
    "type": "p",
    "text": "Quando ela quer revisar uma ação?"
   },
   {
    "type": "p",
    "text": "Essas respostas não deveriam ser decididas apenas pela tecnologia."
   },
   {
    "type": "p",
    "text": "Precisamos estudar o comportamento das pessoas."
   },
   {
    "type": "h2",
    "text": "Estamos desenhando experiências, não apenas interfaces"
   },
   {
    "type": "p",
    "text": "Talvez essa seja a principal mudança."
   },
   {
    "type": "p",
    "text": "Durante muito tempo, a unidade de trabalho do designer foi a tela."
   },
   {
    "type": "p",
    "text": "Depois, começamos a pensar em fluxos e jornadas."
   },
   {
    "type": "p",
    "text": "Agora precisamos pensar também em sistemas que interpretam, recomendam e agem."
   },
   {
    "type": "p",
    "text": "Isso aumenta a responsabilidade do design."
   },
   {
    "type": "p",
    "text": "Mas também abre um espaço enorme para Product Designers."
   },
   {
    "type": "p",
    "text": "Porque alguém precisa organizar essa experiência."
   },
   {
    "type": "p",
    "text": "Alguém precisa decidir onde existe autonomia."
   },
   {
    "type": "ul",
    "items": [
     "Alguém precisa pensar no feedback",
     "Alguém precisa criar critérios",
     "Alguém precisa entender o usuário"
    ]
   },
   {
    "type": "p",
    "text": "E alguém precisa garantir que a tecnologia continue fazendo sentido para as pessoas."
   }
  ],
  "cover": "/blog/contexto-novo-material-do-design.webp",
  "lab": true
 },
 {
  "slug": "quando-a-ia-age-desenhar-controle",
  "title": "Quando a IA age, o designer precisa desenhar controle",
  "description": "Uma IA que responde é diferente de uma IA que age. Como desenhar níveis de autonomia, feedback, desfazer e confiança quando o sistema executa ações.",
  "date": "2026-09-18",
  "category": "ai",
  "tags": [
   "IA",
   "Agentes",
   "Confiança"
  ],
  "readMinutes": 5,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: agentes de IA que agem dentro do CRM e deixam a pessoa no controle."
  },
  "sources": [
   "Nielsen Norman Group, State of UX 2026: Design Deeper to Differentiate.",
   "Nielsen Norman Group, The Custodial Era of UX: Cleaning Up After AI.",
   "Nielsen Norman Group, Why Human-Led Research Still Matters in the Age of AI.",
   "Nielsen Norman Group, AI Can't Replace Real Research in Empathy Mapping.",
   "Nielsen Norman Group, Context Architecture.",
   "Nielsen Norman Group, The 3 Roles of Context for AI Agents.",
   "Nielsen Norman Group, The Core Skill of Design in the AI Era: Critique.",
   "Nielsen Norman Group, Designing AI Agents: 4 Lessons from China’s Qwen Agent.",
   "Figma, Figma’s 2026 AI Report.",
   "Figma, Config 2026: novos materiais, ferramentas e tela de trabalho.",
   "UX Design / UX Collective, discussões recentes sobre design engineering, agentes, contexto e novas interfaces."
  ],
  "blocks": [
   {
    "type": "p",
    "text": "Existe uma diferença importante entre uma IA que responde e uma IA que age."
   },
   {
    "type": "scene",
    "id": "respond-vs-act",
    "data": {
     "lead1": "Se eu pergunto:",
     "q1": "“Qual é o melhor horário para viajar?”",
     "a1": "O sistema pode me responder.",
     "lead2": "Mas se eu digo:",
     "q2": "“Compre a passagem para sexta-feira.”",
     "a2": "Agora o sistema precisa fazer alguma coisa.",
     "steps": [
      "Pode pesquisar",
      "Escolher",
      "Comparar",
      "Preencher informações",
      "Realizar uma compra"
     ],
     "maybe": "E talvez até tomar decisões que eu não especifiquei.",
     "here": "É aqui que a experiência começa a mudar.",
     "why": "Quando a IA passa de uma ferramenta que responde para uma tecnologia que age, o design precisa pensar em uma coisa que nem sempre recebe tanta atenção:",
     "word": "controle."
    }
   },
   {
    "type": "h2",
    "text": "Quando o sistema faz mais, o usuário precisa entender mais"
   },
   {
    "type": "p",
    "text": "Em uma interface tradicional, conseguimos acompanhar boa parte do processo."
   },
   {
    "type": "ul",
    "items": [
     "Clicamos em um botão",
     "Vemos uma tela",
     "Selecionamos uma opção",
     "Confirmamos",
     "O sistema responde"
    ]
   },
   {
    "type": "p",
    "text": "Com agentes, podemos simplesmente dizer o que queremos e esperar."
   },
   {
    "type": "p",
    "text": "Isso é conveniente."
   },
   {
    "type": "p",
    "text": "Mas também cria uma nova dúvida:"
   },
   {
    "type": "quote",
    "text": "O que o sistema está fazendo enquanto eu espero?"
   },
   {
    "type": "p",
    "text": "Se não sabemos, a confiança começa a diminuir."
   },
   {
    "type": "p",
    "text": "Por isso, sistemas que agem precisam comunicar o suficiente para que a pessoa mantenha uma noção do que está acontecendo."
   },
   {
    "type": "h2",
    "text": "“O que você entendeu?”"
   },
   {
    "type": "p",
    "text": "Essa pode ser uma das perguntas mais importantes em uma interface de agente."
   },
   {
    "type": "p",
    "text": "Imagine que você diga:"
   },
   {
    "type": "quote",
    "text": "“Reserve uma mesa para sábado à noite.”"
   },
   {
    "type": "p",
    "text": "Existem várias informações que podem estar faltando."
   },
   {
    "type": "p",
    "text": "Qual horário?"
   },
   {
    "type": "p",
    "text": "Para quantas pessoas?"
   },
   {
    "type": "p",
    "text": "Em qual restaurante?"
   },
   {
    "type": "p",
    "text": "O sistema pode perguntar."
   },
   {
    "type": "p",
    "text": "Ou pode assumir."
   },
   {
    "type": "p",
    "text": "Mas quanto mais ele assume, maior o risco de interpretar errado."
   },
   {
    "type": "p",
    "text": "Uma boa experiência precisa saber quando agir e quando pedir esclarecimento."
   },
   {
    "type": "h2",
    "text": "Autonomia precisa ter limites"
   },
   {
    "type": "p",
    "text": "Nem todas as ações têm o mesmo risco."
   },
   {
    "type": "visual",
    "id": "autonomy-meter",
    "caption": "Quanto maior o impacto da ação, mais controle a interface precisa dar antes de a IA agir."
   },
   {
    "type": "p",
    "text": "Podemos pensar em diferentes níveis."
   },
   {
    "type": "h2",
    "text": "Baixo impacto"
   },
   {
    "type": "ul",
    "items": [
     "Pesquisar informações",
     "Organizar uma lista",
     "Resumir um documento",
     "Sugerir opções",
     "Aqui, podemos permitir mais autonomia"
    ]
   },
   {
    "type": "h2",
    "text": "Médio impacto"
   },
   {
    "type": "ul",
    "items": [
     "Alterar uma configuração",
     "Enviar uma mensagem",
     "Criar um compromisso",
     "Fazer uma reserva"
    ]
   },
   {
    "type": "p",
    "text": "Talvez seja importante mostrar o que será feito antes da execução."
   },
   {
    "type": "h2",
    "text": "Alto impacto"
   },
   {
    "type": "ul",
    "items": [
     "Realizar uma transferência",
     "Comprar algo caro",
     "Excluir informações",
     "Alterar dados importantes"
    ]
   },
   {
    "type": "p",
    "text": "Nesse caso, a confirmação pode ser muito mais importante."
   },
   {
    "type": "p",
    "text": "O design precisa ajudar a definir esses limites."
   },
   {
    "type": "h2",
    "text": "“Automático” não significa “sem interface”"
   },
   {
    "type": "p",
    "text": "Existe uma ideia de que agentes vão eliminar interfaces."
   },
   {
    "type": "p",
    "text": "Não tenho certeza se é tão simples."
   },
   {
    "type": "p",
    "text": "Talvez eles reduzam a quantidade de telas que precisamos navegar."
   },
   {
    "type": "p",
    "text": "Mas isso não significa que a interface desaparece."
   },
   {
    "type": "p",
    "text": "Ela pode mudar de função."
   },
   {
    "type": "p",
    "text": "Em vez de ser apenas um lugar para executar tarefas, ela pode ser um lugar para:"
   },
   {
    "type": "ul",
    "items": [
     "acompanhar;",
     "revisar;",
     "corrigir;",
     "aprovar;",
     "cancelar;",
     "entender;",
     "recuperar erros."
    ]
   },
   {
    "type": "p",
    "text": "A interface pode virar uma camada de supervisão."
   },
   {
    "type": "h2",
    "text": "Feedback também muda"
   },
   {
    "type": "p",
    "text": "Em uma interface tradicional, estamos acostumados com estados como:"
   },
   {
    "type": "ul",
    "items": [
     "Carregando",
     "Concluído",
     "Erro"
    ]
   },
   {
    "type": "p",
    "text": "Mas quando um agente executa uma tarefa complexa, isso pode não ser suficiente."
   },
   {
    "type": "scene",
    "id": "agent-feed",
    "data": {
     "lead": "Talvez o sistema precise mostrar:",
     "msgs": [
      "Entendi que você quer X.",
      "Estou verificando Y.",
      "Encontrei duas opções.",
      "Escolhi Z porque atende às suas regras.",
      "Preciso da sua confirmação antes de continuar."
     ],
     "a": "Isso não significa transformar a interface em uma lista interminável de mensagens.",
     "b": "Significa dar visibilidade suficiente para que o usuário consiga acompanhar uma ação que não está executando diretamente."
    }
   },
   {
    "type": "h2",
    "text": "Erros ficam ainda mais importantes"
   },
   {
    "type": "p",
    "text": "Todo sistema erra."
   },
   {
    "type": "p",
    "text": "Mas quando uma IA apenas responde, podemos corrigir a resposta."
   },
   {
    "type": "p",
    "text": "Quando uma IA executa uma ação, o erro pode ter consequências maiores."
   },
   {
    "type": "p",
    "text": "Por isso, precisamos pensar antes:"
   },
   {
    "type": "quote",
    "text": "O que acontece se o agente interpretar errado?"
   },
   {
    "type": "quote",
    "text": "Como o usuário percebe?"
   },
   {
    "type": "quote",
    "text": "Como desfazemos a ação?"
   },
   {
    "type": "quote",
    "text": "Existe um histórico?"
   },
   {
    "type": "quote",
    "text": "Podemos interromper o processo?"
   },
   {
    "type": "quote",
    "text": "Existe uma alternativa manual?"
   },
   {
    "type": "p",
    "text": "Essas perguntas fazem parte da UX."
   },
   {
    "type": "h2",
    "text": "O botão “desfazer” pode ganhar uma nova importância"
   },
   {
    "type": "p",
    "text": "Em sistemas com mais autonomia, mecanismos de recuperação são fundamentais."
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "Pedido",
       "icon": "chat"
      },
      {
       "label": "IA entende",
       "icon": "brain"
      },
      {
       "label": "Mostra o plano",
       "icon": "eye"
      },
      {
       "label": "Pessoa aprova",
       "icon": "userCheck"
      },
      {
       "label": "Executa",
       "icon": "zap"
      },
      {
       "label": "Feedback e desfazer",
       "icon": "undo"
      }
     ]
    },
    "caption": "Confiança não é esconder a complexidade: é mostrar o que vai acontecer."
   },
   {
    "type": "p",
    "text": "Se o agente fez algo errado, precisamos ter caminhos claros para corrigir."
   },
   {
    "type": "scene",
    "id": "recovery-bar",
    "data": {
     "lead": "Isso pode significar:",
     "actions": [
      "Desfazer",
      "Editar",
      "Cancelar",
      "Reverter",
      "Revisar histórico",
      "Assumir controle manual"
     ],
     "a": "Essas opções não deveriam ser pensadas como detalhes.",
     "b": "Elas fazem parte da confiança no sistema."
    }
   },
   {
    "type": "h2",
    "text": "Confiança não significa esconder a complexidade"
   },
   {
    "type": "p",
    "text": "Às vezes pensamos que uma boa experiência com IA é aquela em que tudo acontece automaticamente e o usuário nem percebe."
   },
   {
    "type": "p",
    "text": "Mas existe um limite."
   },
   {
    "type": "p",
    "text": "Se o sistema faz coisas importantes sem explicar nada, a experiência pode ficar confortável no começo e assustadora depois."
   },
   {
    "type": "p",
    "text": "O usuário precisa saber o suficiente para confiar."
   },
   {
    "type": "p",
    "text": "Isso não significa mostrar todo o funcionamento interno da IA."
   },
   {
    "type": "p",
    "text": "Significa explicar o que importa para a decisão."
   },
   {
    "type": "quote",
    "text": "O que foi entendido."
   },
   {
    "type": "quote",
    "text": "O que será feito."
   },
   {
    "type": "quote",
    "text": "O que já aconteceu."
   },
   {
    "type": "quote",
    "text": "O que precisa de aprovação."
   },
   {
    "type": "quote",
    "text": "O que pode ser alterado."
   },
   {
    "type": "h2",
    "text": "O designer passa a desenhar comportamento"
   },
   {
    "type": "p",
    "text": "Em uma interface tradicional, desenhamos estados."
   },
   {
    "type": "p",
    "text": "Em uma experiência com agentes, precisamos desenhar também comportamentos."
   },
   {
    "type": "p",
    "text": "Por exemplo:"
   },
   {
    "type": "quote",
    "text": "Se o usuário pedir algo ambíguo → perguntar."
   },
   {
    "type": "quote",
    "text": "Se houver uma ação de alto impacto → pedir confirmação."
   },
   {
    "type": "quote",
    "text": "Se não houver informação suficiente → explicar o que está faltando."
   },
   {
    "type": "quote",
    "text": "Se o sistema não tiver confiança suficiente → não inventar."
   },
   {
    "type": "quote",
    "text": "Se a ação falhar → explicar e oferecer alternativa."
   },
   {
    "type": "p",
    "text": "Isso parece muito mais próximo de desenhar regras de produto do que apenas desenhar telas."
   },
   {
    "type": "p",
    "text": "E é justamente por isso que UX continua sendo importante."
   },
   {
    "type": "h2",
    "text": "A IA pode executar. O designer precisa definir como ela deve se comportar."
   },
   {
    "type": "p",
    "text": "Quanto mais capacidade damos ao sistema, mais precisamos pensar nas regras."
   },
   {
    "type": "p",
    "text": "O que pode fazer?"
   },
   {
    "type": "p",
    "text": "O que não pode?"
   },
   {
    "type": "p",
    "text": "Quando deve perguntar?"
   },
   {
    "type": "p",
    "text": "Quando deve agir?"
   },
   {
    "type": "p",
    "text": "Quando deve parar?"
   },
   {
    "type": "p",
    "text": "Quando deve pedir ajuda?"
   },
   {
    "type": "p",
    "text": "Como deve explicar?"
   },
   {
    "type": "p",
    "text": "Como o usuário recupera o controle?"
   },
   {
    "type": "p",
    "text": "Essas perguntas são uma parte importante da experiência."
   },
   {
    "type": "h2",
    "text": "No final, autonomia e controle precisam andar juntos"
   },
   {
    "type": "p",
    "text": "Não acho que o objetivo de uma boa experiência com IA seja dar o máximo de autonomia possível."
   },
   {
    "type": "p",
    "text": "O objetivo é encontrar o nível de autonomia que faz sentido para cada situação."
   },
   {
    "type": "p",
    "text": "Em algumas tarefas, queremos que a IA faça tudo."
   },
   {
    "type": "ul",
    "items": [
     "Em outras, queremos acompanhar",
     "Em outras, queremos decidir cada passo",
     "O bom design não força um único modelo",
     "Ele entende o contexto"
    ]
   },
   {
    "type": "h2",
    "text": "Talvez a nova pergunta de UX seja outra"
   },
   {
    "type": "p",
    "text": "Durante muito tempo perguntamos:"
   },
   {
    "type": "quote",
    "text": "“Como fazer o usuário realizar essa tarefa?”"
   },
   {
    "type": "p",
    "text": "Com agentes, talvez precisemos perguntar:"
   },
   {
    "type": "quote",
    "text": "“Quanto dessa tarefa o sistema deve realizar sozinho?”"
   },
   {
    "type": "p",
    "text": "Essa mudança parece pequena."
   },
   {
    "type": "p",
    "text": "Mas muda completamente a forma como pensamos produtos digitais."
   },
   {
    "type": "p",
    "text": "Porque quando o sistema começa a agir, UX não é apenas sobre facilitar ações."
   },
   {
    "type": "p",
    "text": "É também sobre definir limites, criar confiança e manter as pessoas no controle."
   }
  ],
  "cover": "/blog/quando-a-ia-age-desenhar-controle.webp",
  "lab": true
 },
 {
  "slug": "dados-sao-valiosos-o-que-fazer-com-eles",
  "title": "Dados são valiosos. Mas o que você faz com eles?",
  "description": "Ter dados é diferente de entender o usuário. Como dado, pesquisa, insight e experimento formam um ciclo contínuo entre UX e Growth.",
  "date": "2026-09-16",
  "category": "growth",
  "tags": [
   "Dados",
   "UX",
   "Growth"
  ],
  "readMinutes": 5,
  "related": {
   "href": "/cases/whatsapp-next",
   "title": "WhatsApp Next",
   "body": "Na prática: conteúdo, landing page e ads conectados, com 1.680 inscrições em 4 dias."
  },
  "sources": [
   "Nielsen Norman Group, UX Metrics & ROI.",
   "Nielsen Norman Group, Data Isn’t Enough: The Power of Narrative in UX.",
   "Nielsen Norman Group, Atomic Research: Small Insights, Big Impact."
  ],
  "blocks": [
   {
    "type": "p",
    "text": "Hoje temos acesso a mais dados do que nunca."
   },
   {
    "type": "p",
    "text": "Sabemos quantas pessoas entraram em uma página, onde clicaram, quanto tempo ficaram, onde abandonaram, quais funcionalidades usam e até quais caminhos percorrem dentro de um produto."
   },
   {
    "type": "p",
    "text": "Mas existe uma diferença entre ter dados e entender o usuário."
   },
   {
    "type": "p",
    "text": "E existe outra diferença ainda maior entre entender o usuário e transformar esse entendimento em uma decisão de produto."
   },
   {
    "type": "p",
    "text": "É aí que, para mim, UX, dados e Growth começam a se encontrar."
   },
   {
    "type": "h2",
    "text": "O dado conta uma parte da história"
   },
   {
    "type": "p",
    "text": "Imagine que uma página tenha uma taxa de conversão de 3%."
   },
   {
    "type": "visual",
    "data": {
     "kind": "cycle",
     "nodes": [
      {
       "label": "Dados",
       "icon": "database"
      },
      {
       "label": "Pergunta",
       "icon": "search"
      },
      {
       "label": "Pesquisa",
       "icon": "users"
      },
      {
       "label": "Insight",
       "icon": "bulb"
      },
      {
       "label": "Hipótese",
       "icon": "target"
      },
      {
       "label": "Experimento",
       "icon": "flask"
      }
     ],
     "center": "Métrica"
    },
    "caption": "O processo não é linear: é um ciclo contínuo de aprendizado."
   },
   {
    "type": "scene",
    "id": "evidence-board",
    "data": {
     "lead": "Esse número sozinho não explica muita coisa.",
     "num": "3%",
     "a": "de conversão",
     "questions": [
      "É bom?",
      "É ruim?",
      "Comparado com o quê?",
      "O que aconteceu antes?",
      "O que acontece depois?",
      "Quem está convertendo?",
      "Quem está abandonando?"
     ],
     "b": "O dado precisa de contexto.",
     "c": "Uma métrica pode apontar para um problema, mas raramente explica sozinha o motivo.",
     "d": "Por isso, gosto de pensar no dado como o começo de uma investigação."
    }
   },
   {
    "type": "quote",
    "text": "O número mostra onde olhar."
   },
   {
    "type": "p",
    "text": "A pesquisa ajuda a entender o que está acontecendo."
   },
   {
    "type": "p",
    "text": "E o design ajuda a transformar esse aprendizado em uma possível solução."
   },
   {
    "type": "h2",
    "text": "Saber o que o usuário quer é um ativo"
   },
   {
    "type": "p",
    "text": "Uma das coisas mais valiosas que um produto pode ter não é apenas uma grande quantidade de dados."
   },
   {
    "type": "p",
    "text": "É conhecimento sobre seus usuários."
   },
   {
    "type": "p",
    "text": "O que eles tentam fazer?"
   },
   {
    "type": "p",
    "text": "O que dificulta esse processo?"
   },
   {
    "type": "p",
    "text": "O que faz alguém escolher seu produto?"
   },
   {
    "type": "p",
    "text": "Por que uma pessoa abandona?"
   },
   {
    "type": "p",
    "text": "O que faz alguém voltar?"
   },
   {
    "type": "p",
    "text": "O que gera confiança?"
   },
   {
    "type": "p",
    "text": "O que gera frustração?"
   },
   {
    "type": "p",
    "text": "Essas respostas podem aparecer em entrevistas, testes de usabilidade, analytics, atendimento, avaliações, pesquisas de satisfação e comportamento dentro do produto."
   },
   {
    "type": "p",
    "text": "Quando conectamos essas informações, começamos a enxergar algo maior."
   },
   {
    "type": "p",
    "text": "Não estamos apenas olhando para números."
   },
   {
    "type": "p",
    "text": "Estamos tentando entender pessoas."
   },
   {
    "type": "h2",
    "text": "E onde entra Growth?"
   },
   {
    "type": "p",
    "text": "Growth entra justamente na conexão entre comportamento e resultado."
   },
   {
    "type": "p",
    "text": "Imagine que o produto tenha muitos visitantes, mas poucos cadastros."
   },
   {
    "type": "p",
    "text": "Growth pode identificar o problema no funil."
   },
   {
    "type": "p",
    "text": "UX pode investigar o comportamento."
   },
   {
    "type": "p",
    "text": "Marketing pode analisar a origem do tráfego."
   },
   {
    "type": "p",
    "text": "Produto pode avaliar a proposta de valor."
   },
   {
    "type": "p",
    "text": "Juntos, o time pode descobrir que o problema não era simplesmente o botão."
   },
   {
    "type": "p",
    "text": "Talvez as pessoas não tenham entendido o benefício."
   },
   {
    "type": "p",
    "text": "Talvez a página não responda às principais dúvidas."
   },
   {
    "type": "p",
    "text": "Talvez o público que chegou ali não seja o público certo."
   },
   {
    "type": "p",
    "text": "É por isso que Growth não deveria ser apenas uma busca por conversão."
   },
   {
    "type": "p",
    "text": "Growth também é entender o que impede o usuário de avançar."
   },
   {
    "type": "h2",
    "text": "Crescer não é apenas fazer o número subir"
   },
   {
    "type": "p",
    "text": "É possível aumentar uma conversão e criar uma experiência pior."
   },
   {
    "type": "p",
    "text": "Também é possível aumentar cadastros e diminuir ativação."
   },
   {
    "type": "p",
    "text": "Podemos conseguir mais downloads e ter menos usuários recorrentes."
   },
   {
    "type": "p",
    "text": "Por isso, uma métrica isolada pode enganar."
   },
   {
    "type": "p",
    "text": "O crescimento precisa ser analisado dentro da jornada."
   },
   {
    "type": "quote",
    "text": "Aquisição → Ativação → Conversão → Retenção → Receita"
   },
   {
    "type": "p",
    "text": "Cada etapa conta uma parte da história."
   },
   {
    "type": "p",
    "text": "E UX pode contribuir em todas elas."
   },
   {
    "type": "h2",
    "text": "Dados quantitativos e qualitativos juntos"
   },
   {
    "type": "p",
    "text": "Os dados quantitativos ajudam a responder:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "merge",
     "a": {
      "title": "Quantitativo",
      "icon": "chart",
      "steps": [
       "Onde",
       "Quanto"
      ]
     },
     "b": {
      "title": "Qualitativo",
      "icon": "users",
      "steps": [
       "Por quê",
       "Como"
      ]
     },
     "result": [
      "Entendimento",
      "Decisão"
     ]
    },
    "caption": "O número mostra onde olhar; a conversa mostra o motivo."
   },
   {
    "type": "quote",
    "text": "O que está acontecendo?"
   },
   {
    "type": "p",
    "text": "A pesquisa qualitativa ajuda a investigar:"
   },
   {
    "type": "quote",
    "text": "Por que isso está acontecendo?"
   },
   {
    "type": "p",
    "text": "Por exemplo:"
   },
   {
    "type": "p",
    "text": "Analytics mostra que 48% dos usuários abandonam o cadastro no segundo passo."
   },
   {
    "type": "ul",
    "items": [
     "Essa é uma informação importante",
     "Mas ainda não temos uma explicação",
     "Podemos fazer testes de usabilidade",
     "Conversar com usuários",
     "Observar gravações de sessão",
     "Analisar o conteúdo daquele formulário"
    ]
   },
   {
    "type": "p",
    "text": "Talvez descubramos que o campo pede uma informação que o usuário não tem naquele momento."
   },
   {
    "type": "p",
    "text": "Agora temos uma hipótese."
   },
   {
    "type": "p",
    "text": "E podemos testar uma solução."
   },
   {
    "type": "h2",
    "text": "É aqui que o designer pode gerar mais valor"
   },
   {
    "type": "p",
    "text": "O Product Designer não precisa ser um cientista de dados."
   },
   {
    "type": "p",
    "text": "Mas precisa saber fazer perguntas aos dados."
   },
   {
    "type": "p",
    "text": "Precisa entender métricas."
   },
   {
    "type": "p",
    "text": "Precisa identificar padrões."
   },
   {
    "type": "p",
    "text": "Precisa saber quando uma conclusão é fraca."
   },
   {
    "type": "p",
    "text": "E precisa conectar comportamento com decisão."
   },
   {
    "type": "p",
    "text": "Isso muda a conversa."
   },
   {
    "type": "p",
    "text": "Em vez de:"
   },
   {
    "type": "quote",
    "text": "“Precisamos melhorar essa tela.”"
   },
   {
    "type": "p",
    "text": "Podemos dizer:"
   },
   {
    "type": "quote",
    "text": "“Existe uma queda importante nessa etapa. Os dados mostram onde o problema está e a pesquisa nos ajuda a entender a causa. Agora podemos testar uma solução.”"
   },
   {
    "type": "p",
    "text": "Essa conversa é muito mais próxima de produto."
   },
   {
    "type": "h2",
    "text": "Growth ajuda a transformar UX em resultado"
   },
   {
    "type": "p",
    "text": "UX sempre teve impacto no negócio."
   },
   {
    "type": "p",
    "text": "Mas quando conseguimos conectar uma melhoria de experiência a uma métrica relevante, fica mais fácil mostrar esse impacto."
   },
   {
    "type": "scene",
    "id": "case-file",
    "data": {
     "lead": "Por exemplo:",
     "cards": [
      {
       "k": "Problema",
       "v": "abandono no onboarding."
      },
      {
       "k": "Evidência",
       "v": "queda de usuários no segundo passo."
      },
      {
       "k": "Pesquisa",
       "v": "usuários não entendem por que precisam preencher determinada informação."
      },
      {
       "k": "Hipótese",
       "v": "explicar o motivo e reduzir campos pode diminuir a fricção."
      },
      {
       "k": "Experimento",
       "v": "testar uma versão simplificada."
      },
      {
       "k": "Métrica",
       "v": "conclusão do onboarding e ativação."
      }
     ],
     "close": "Agora temos uma linha clara entre problema, comportamento, design e resultado."
    }
   },
   {
    "type": "h2",
    "text": "Dados também podem contar histórias"
   },
   {
    "type": "p",
    "text": "Outro ponto importante é a forma como apresentamos os dados."
   },
   {
    "type": "p",
    "text": "Um dashboard cheio de números não necessariamente ajuda uma equipe."
   },
   {
    "type": "p",
    "text": "A pergunta deveria ser:"
   },
   {
    "type": "quote",
    "text": "O que alguém precisa entender para tomar uma decisão?"
   },
   {
    "type": "p",
    "text": "Talvez sejam necessários apenas três números."
   },
   {
    "type": "p",
    "text": "Talvez seja necessário mostrar uma tendência."
   },
   {
    "type": "p",
    "text": "Talvez seja mais importante destacar uma mudança."
   },
   {
    "type": "p",
    "text": "A visualização de dados também é uma forma de UX."
   },
   {
    "type": "p",
    "text": "Estamos desenhando para alguém entender uma informação e agir a partir dela."
   },
   {
    "type": "h2",
    "text": "No fim, dados são uma ferramenta"
   },
   {
    "type": "p",
    "text": "Dados não deveriam substituir o conhecimento do usuário."
   },
   {
    "type": "ul",
    "items": [
     "Pesquisa não deveria ignorar o negócio",
     "Growth não deveria ignorar a experiência",
     "E UX não deveria ignorar os resultados"
    ]
   },
   {
    "type": "p",
    "text": "Quando essas áreas trabalham juntas, conseguimos sair de uma discussão baseada apenas em opinião."
   },
   {
    "type": "scene",
    "id": "equation",
    "data": {
     "lead": "Passamos a trabalhar com:",
     "terms": "dados + contexto + comportamento + hipótese + experimento + resultado.",
     "after": [
      "Para mim, é aí que o Product Design fica mais estratégico.",
      "Não porque o designer precisa dominar todas as áreas.",
      "Mas porque precisa saber conectar as informações certas para ajudar o time a tomar decisões melhores."
     ]
    }
   }
  ],
  "cover": "/blog/dados-sao-valiosos-o-que-fazer-com-eles.webp",
  "lab": true
 },
 {
  "slug": "ia-acelera-mas-ate-que-ponto",
  "title": "IA acelera. Mas até que ponto?",
  "description": "A IA reduziu o custo de experimentar, mas produção não é decisão. Como o processo muda e por que avaliar fica mais importante quanto mais rápido criamos.",
  "date": "2026-09-14",
  "category": "ai",
  "tags": [
   "IA",
   "Processo",
   "Product Design"
  ],
  "readMinutes": 5,
  "related": {
   "href": "/cases/scale",
   "title": "Clint Scale",
   "body": "Na prática: um design system explorável, com tokens, componentes, contraste e governança."
  },
  "sources": [
   "Nielsen Norman Group, The Core Skill of Design in the AI Era: Critique.",
   "Nielsen Norman Group, The Custodial Era of UX: Cleaning Up After AI.",
   "Figma, 2026 AI Report."
  ],
  "blocks": [
   {
    "type": "scene",
    "id": "speed-brake",
    "data": {
     "a": "A velocidade com que conseguimos criar produtos digitais mudou.",
     "b": "Uma ideia que antes poderia levar dias para virar um protótipo pode agora aparecer em minutos.",
     "list": [
      "Podemos gerar interfaces",
      "Criar textos",
      "Explorar fluxos",
      "Produzir imagens",
      "Gerar código",
      "Criar variações",
      "Analisar informações"
     ],
     "c": "Tudo isso pode acelerar bastante o trabalho de um time de produto.",
     "d": "Mas existe uma pergunta que considero importante:",
     "q": "Acelerar o quê?",
     "e": "Porque ser mais rápido para fazer a coisa errada continua sendo um problema."
    }
   },
   {
    "type": "h2",
    "text": "A IA reduziu o custo de experimentar"
   },
   {
    "type": "p",
    "text": "Essa é uma das partes que considero mais interessantes."
   },
   {
    "type": "p",
    "text": "Antes, criar uma nova solução tinha um custo relativamente alto."
   },
   {
    "type": "ul",
    "items": [
     "Precisávamos desenhar",
     "Prototipar",
     "Revisar",
     "Apresentar",
     "Desenvolver"
    ]
   },
   {
    "type": "p",
    "text": "Agora podemos explorar muito mais possibilidades antes de decidir."
   },
   {
    "type": "p",
    "text": "Isso é uma oportunidade enorme para designers."
   },
   {
    "type": "p",
    "text": "Podemos usar IA para gerar alternativas e testar hipóteses rapidamente."
   },
   {
    "type": "p",
    "text": "Mas isso também cria um novo problema."
   },
   {
    "type": "p",
    "text": "Se ficou fácil criar 20 soluções, quem decide quais duas merecem ser testadas?"
   },
   {
    "type": "h2",
    "text": "Produção não é decisão"
   },
   {
    "type": "ul",
    "items": [
     "Esse talvez seja o ponto principal",
     "A IA pode produzir",
     "Mas produto precisa decidir"
    ]
   },
   {
    "type": "visual",
    "data": {
     "kind": "compare",
     "left": {
      "title": "Só velocidade",
      "icon": "zap",
      "items": [
       "Muitas telas",
       "Problemas escondidos"
      ]
     },
     "right": {
      "title": "Velocidade com critério",
      "icon": "eye",
      "items": [
       "Opções avaliadas",
       "Decisões melhores"
      ]
     }
    },
    "caption": "Quanto mais rápido criamos, mais importante fica avaliar."
   },
   {
    "type": "p",
    "text": "Imagine que uma ferramenta gere cinco versões de uma tela."
   },
   {
    "type": "p",
    "text": "Todas parecem boas."
   },
   {
    "type": "p",
    "text": "Qual delas você escolhe?"
   },
   {
    "type": "p",
    "text": "Se a resposta for:"
   },
   {
    "type": "quote",
    "text": "“A que ficou mais bonita.”"
   },
   {
    "type": "p",
    "text": "Temos um problema."
   },
   {
    "type": "p",
    "text": "A decisão deveria considerar:"
   },
   {
    "type": "ul",
    "items": [
     "quem vai usar;",
     "qual problema estamos tentando resolver;",
     "quais dados temos;",
     "o que aprendemos na pesquisa;",
     "qual é o objetivo do negócio;",
     "quais são as limitações técnicas;",
     "quais riscos existem;",
     "qual hipótese queremos testar."
    ]
   },
   {
    "type": "p",
    "text": "Isso é julgamento."
   },
   {
    "type": "h2",
    "text": "A velocidade pode esconder problemas"
   },
   {
    "type": "p",
    "text": "Quando um processo fica muito rápido, existe uma tendência de pular etapas."
   },
   {
    "type": "ul",
    "items": [
     "Uma solução aparece",
     "Parece boa",
     "O time aprova",
     "E seguimos"
    ]
   },
   {
    "type": "p",
    "text": "Mas talvez ninguém tenha perguntado:"
   },
   {
    "type": "quote",
    "text": "De onde veio essa solução?"
   },
   {
    "type": "quote",
    "text": "Qual problema ela resolve?"
   },
   {
    "type": "quote",
    "text": "Qual evidência temos?"
   },
   {
    "type": "quote",
    "text": "O que pode dar errado?"
   },
   {
    "type": "quote",
    "text": "Para quem ela não funciona?"
   },
   {
    "type": "p",
    "text": "Esse é um dos riscos da velocidade."
   },
   {
    "type": "p",
    "text": "Não é que a IA produza necessariamente soluções ruins."
   },
   {
    "type": "p",
    "text": "É que ela torna mais fácil aceitar uma solução antes de entendê-la."
   },
   {
    "type": "h2",
    "text": "O olho crítico do designer"
   },
   {
    "type": "p",
    "text": "Acredito que uma das habilidades mais importantes do designer na era da IA seja justamente essa:"
   },
   {
    "type": "quote",
    "text": "saber olhar para uma solução e questioná-la."
   },
   {
    "type": "p",
    "text": "Não basta reconhecer se uma interface está bonita."
   },
   {
    "type": "p",
    "text": "Precisamos perceber:"
   },
   {
    "type": "p",
    "text": "Uma informação importante está escondida?"
   },
   {
    "type": "p",
    "text": "A hierarquia faz sentido?"
   },
   {
    "type": "p",
    "text": "A linguagem é clara?"
   },
   {
    "type": "p",
    "text": "O fluxo exige esforço desnecessário?"
   },
   {
    "type": "p",
    "text": "A solução funciona para diferentes usuários?"
   },
   {
    "type": "p",
    "text": "Existe um estado de erro?"
   },
   {
    "type": "p",
    "text": "Existe uma situação de vazio?"
   },
   {
    "type": "p",
    "text": "O que acontece quando o usuário muda de ideia?"
   },
   {
    "type": "p",
    "text": "Existe algum problema de acessibilidade?"
   },
   {
    "type": "p",
    "text": "A solução realmente resolve o problema?"
   },
   {
    "type": "p",
    "text": "Esse olhar crítico não é um detalhe."
   },
   {
    "type": "p",
    "text": "É parte central do trabalho de design."
   },
   {
    "type": "h2",
    "text": "A IA não conhece automaticamente o seu usuário"
   },
   {
    "type": "p",
    "text": "Uma IA conhece muitos padrões."
   },
   {
    "type": "p",
    "text": "Mas seu produto não é “a média” de todos os produtos que existem."
   },
   {
    "type": "ul",
    "items": [
     "Seu usuário tem necessidades específicas",
     "Seu negócio tem regras",
     "Seu produto tem restrições",
     "Sua equipe tem decisões anteriores",
     "Sua pesquisa tem aprendizados",
     "Seu mercado tem particularidades"
    ]
   },
   {
    "type": "p",
    "text": "Se essas informações não chegam ao processo, a IA tende a produzir algo genérico."
   },
   {
    "type": "p",
    "text": "Por isso, contexto começa a ser uma parte cada vez mais importante do trabalho de UX."
   },
   {
    "type": "h2",
    "text": "Talvez o novo trabalho seja dar contexto"
   },
   {
    "type": "p",
    "text": "Se a IA consegue gerar uma interface, alguém precisa dizer:"
   },
   {
    "type": "p",
    "text": "Para quem?"
   },
   {
    "type": "p",
    "text": "Para qual problema?"
   },
   {
    "type": "p",
    "text": "Em qual situação?"
   },
   {
    "type": "p",
    "text": "Com quais regras?"
   },
   {
    "type": "p",
    "text": "Com quais componentes?"
   },
   {
    "type": "p",
    "text": "Com qual linguagem?"
   },
   {
    "type": "p",
    "text": "Com quais dados?"
   },
   {
    "type": "p",
    "text": "Com quais restrições?"
   },
   {
    "type": "p",
    "text": "Com quais objetivos?"
   },
   {
    "type": "p",
    "text": "Essa informação orienta o resultado."
   },
   {
    "type": "p",
    "text": "É como pedir para alguém construir uma casa."
   },
   {
    "type": "p",
    "text": "Se você disser apenas:"
   },
   {
    "type": "quote",
    "text": "“Construa uma casa.”"
   },
   {
    "type": "p",
    "text": "A pessoa vai precisar imaginar o restante."
   },
   {
    "type": "p",
    "text": "Mas se você explicar quem vai morar nela, como a casa será usada, qual é o terreno, quais são as necessidades e quais restrições existem, o resultado muda."
   },
   {
    "type": "p",
    "text": "Com IA acontece algo parecido."
   },
   {
    "type": "h2",
    "text": "Quanto mais rápido criamos, mais importante fica avaliar"
   },
   {
    "type": "p",
    "text": "Esse é um paradoxo interessante."
   },
   {
    "type": "p",
    "text": "A IA aumenta a velocidade de produção."
   },
   {
    "type": "p",
    "text": "Mas isso pode aumentar a quantidade de coisas que precisam ser avaliadas."
   },
   {
    "type": "scene",
    "id": "funnel-math",
    "data": {
     "beforeLabel": "Antes:",
     "before": "10 ideias → 1 protótipo",
     "afterLabel": "Agora:",
     "after": "100 ideias → 20 protótipos → 5 testes → 1 solução"
    }
   },
   {
    "type": "p",
    "text": "A etapa de produção ficou mais rápida."
   },
   {
    "type": "p",
    "text": "A capacidade de avaliação precisa acompanhar."
   },
   {
    "type": "p",
    "text": "É por isso que pesquisa, teste de usabilidade, métricas e crítica continuam importantes."
   },
   {
    "type": "h2",
    "text": "A pergunta muda"
   },
   {
    "type": "scene",
    "id": "hourglass",
    "data": {
     "items": [
      {
       "lead": "Talvez antes perguntássemos:",
       "q": "“Quanto tempo precisamos para criar isso?”"
      },
      {
       "lead": "Agora deveríamos perguntar também:",
       "q": "“Quanto tempo precisamos para avaliar isso?”"
      },
      {
       "lead": "E mais:",
       "q": "“Como sabemos que isso merece ser construído?”"
      }
     ],
     "a": "Essa mudança é importante.",
     "b": "Porque o gargalo pode deixar de ser produção.",
     "c": "Pode passar a ser decisão."
    }
   },
   {
    "type": "h2",
    "text": "IA pode aumentar a qualidade do trabalho"
   },
   {
    "type": "p",
    "text": "Não vejo a IA apenas como uma ferramenta para fazer mais rápido."
   },
   {
    "type": "p",
    "text": "Ela também pode permitir que o designer faça coisas que antes não teria tempo de fazer."
   },
   {
    "type": "ul",
    "items": [
     "Criar mais alternativas",
     "Testar mais cedo",
     "Explorar mais cenários",
     "Analisar mais dados",
     "Gerar protótipos mais completos",
     "Comparar soluções",
     "Isso pode aumentar a qualidade"
    ]
   },
   {
    "type": "p",
    "text": "Mas somente se o tempo economizado for usado para pensar melhor."
   },
   {
    "type": "p",
    "text": "Se usarmos o tempo economizado apenas para produzir ainda mais, talvez não estejamos aproveitando todo o potencial."
   },
   {
    "type": "h2",
    "text": "O novo processo pode ser diferente"
   },
   {
    "type": "p",
    "text": "Gosto de pensar em algo assim:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "lanes",
     "lanes": [
      {
       "title": "Antes",
       "steps": [
        "Ideia",
        "Design",
        "Desenvolvimento",
        "Produto"
       ]
      },
      {
       "title": "Agora",
       "steps": [
        "Problema",
        "Contexto",
        "IA gera opções",
        "Designer avalia",
        "Pesquisa e teste",
        "Decisão",
        "Produto"
       ],
       "highlight": [
        3,
        4,
        5
       ]
      }
     ]
    },
    "caption": "A IA acelera a produção, mas não substitui entender e avaliar."
   },
   {
    "type": "quote",
    "text": "Problema → Contexto → IA → Exploração → Crítica → Teste → Decisão"
   },
   {
    "type": "ul",
    "items": [
     "A IA entra no meio",
     "Ela não começa o processo",
     "E também não deveria terminar",
     "O problema vem antes",
     "A decisão vem depois"
    ]
   },
   {
    "type": "p",
    "text": "Entre os dois existe uma grande oportunidade para o designer."
   },
   {
    "type": "h2",
    "text": "No final, velocidade é só uma parte"
   },
   {
    "type": "p",
    "text": "Ser rápido é importante."
   },
   {
    "type": "p",
    "text": "Mas não é suficiente."
   },
   {
    "type": "p",
    "text": "Um produto não ganha valor porque foi produzido rapidamente."
   },
   {
    "type": "p",
    "text": "Ele ganha valor porque resolve um problema relevante de uma forma que funciona para as pessoas e para o negócio."
   },
   {
    "type": "ul",
    "items": [
     "A IA pode acelerar nosso processo",
     "Pode ampliar nossa capacidade",
     "Pode reduzir trabalho operacional"
    ]
   },
   {
    "type": "p",
    "text": "Mas ainda precisamos saber onde colocar essa capacidade."
   },
   {
    "type": "p",
    "text": "Talvez o diferencial do designer nos próximos anos não seja conseguir criar mais rápido."
   },
   {
    "type": "p",
    "text": "Talvez seja conseguir decidir melhor o que vale a pena criar."
   }
  ],
  "cover": "/blog/ia-acelera-mas-ate-que-ponto.webp",
  "lab": true
 },
 {
  "slug": "olhar-critico-vale-mais-que-ferramentas",
  "title": "O olhar crítico pode valer mais do que saber usar ferramentas",
  "description": "Ferramentas produzem, designers decidem. Por que o olhar crítico vale mais do que dominar qualquer ferramenta e como exercitá-lo.",
  "date": "2026-09-12",
  "category": "career",
  "tags": [
   "Crítica de design",
   "Carreira",
   "IA"
  ],
  "readMinutes": 5,
  "related": {
   "href": "/cases/scale",
   "title": "Clint Scale",
   "body": "Na prática: um design system explorável, com tokens, componentes, contraste e governança."
  },
  "sources": [
   "Nielsen Norman Group, The Core Skill of Design in the AI Era: Critique.",
   "Nielsen Norman Group, Design Taste vs. Technical Skills in the Era of AI.",
   "Figma, 2026 AI Report."
  ],
  "blocks": [
   {
    "type": "ul",
    "items": [
     "Ferramentas mudam o tempo todo",
     "Figma",
     "Framer",
     "Webflow",
     "Ferramentas de IA",
     "Geradores de protótipos",
     "Ferramentas de código",
     "Plugins",
     "Novos modelos",
     "Novos fluxos"
    ]
   },
   {
    "type": "p",
    "text": "Quem trabalha com design já está acostumado a aprender ferramentas novas."
   },
   {
    "type": "p",
    "text": "Mas existe uma habilidade que continua sendo necessária independentemente da ferramenta:"
   },
   {
    "type": "quote",
    "text": "saber avaliar uma solução."
   },
   {
    "type": "h2",
    "text": "Ferramentas produzem. Designers decidem."
   },
   {
    "type": "p",
    "text": "Essa diferença parece simples, mas é importante."
   },
   {
    "type": "visual",
    "id": "critique-filter",
    "caption": "Gerar ficou barato. O valor está nas perguntas que decidem o que segue."
   },
   {
    "type": "ul",
    "items": [
     "Uma ferramenta pode gerar uma interface",
     "Pode sugerir uma estrutura",
     "Pode escrever um texto",
     "Pode criar um protótipo",
     "Pode gerar código"
    ]
   },
   {
    "type": "p",
    "text": "Mas alguém precisa olhar para aquilo e perguntar:"
   },
   {
    "type": "quote",
    "text": "Isso faz sentido?"
   },
   {
    "type": "p",
    "text": "Esse é o momento em que entra o olhar crítico."
   },
   {
    "type": "h2",
    "text": "O problema de confundir domínio da ferramenta com domínio do design"
   },
   {
    "type": "p",
    "text": "É possível saber usar Figma muito bem e ainda criar uma experiência ruim."
   },
   {
    "type": "p",
    "text": "Também é possível saber usar uma ferramenta de IA muito bem e gerar soluções que não resolvem o problema."
   },
   {
    "type": "p",
    "text": "Conhecer uma ferramenta significa saber operar aquela ferramenta."
   },
   {
    "type": "p",
    "text": "Conhecer design significa saber por que fazer determinada escolha."
   },
   {
    "type": "p",
    "text": "Essa diferença fica ainda mais evidente agora que muitas tarefas de produção podem ser automatizadas."
   },
   {
    "type": "h2",
    "text": "O que o designer precisa enxergar?"
   },
   {
    "type": "scene",
    "id": "lens",
    "data": {
     "intro": [
      "Imagine uma tela gerada automaticamente",
      "Ela tem boa hierarquia",
      "Os componentes estão alinhados",
      "As cores combinam",
      "A tipografia parece correta",
      "O layout está responsivo"
     ],
     "lead": "Mesmo assim, podemos fazer algumas perguntas.",
     "questions": [
      "O usuário sabe o que fazer?",
      "A informação mais importante está clara?",
      "O fluxo exige decisões demais?",
      "O sistema explica o que está acontecendo?",
      "O conteúdo usa a linguagem que as pessoas realmente usam?",
      "Existe alguma barreira para pessoas com diferentes necessidades?",
      "O produto está resolvendo o problema certo?"
     ],
     "outro": "Essas perguntas não aparecem automaticamente porque uma interface está visualmente correta."
    }
   },
   {
    "type": "h2",
    "text": "Criticar não é procurar defeitos"
   },
   {
    "type": "p",
    "text": "Existe uma diferença entre crítica e opinião."
   },
   {
    "type": "visual",
    "data": {
     "kind": "cards",
     "items": [
      {
       "title": "Para quem?",
       "icon": "user"
      },
      {
       "title": "Resolve o quê?",
       "icon": "target"
      },
      {
       "title": "Com que evidência?",
       "icon": "file"
      },
      {
       "title": "Gera qual resultado?",
       "icon": "trend"
      }
     ]
    },
    "caption": "Boa crítica é feita de perguntas, não de opinião."
   },
   {
    "type": "scene",
    "id": "stamps",
    "data": {
     "say": "Dizer:",
     "opinion": "“Eu não gostei.”",
     "isOpinion": "é uma opinião.",
     "say2": "Dizer:",
     "analysis": "“Essa informação está competindo visualmente com a ação principal e pode dificultar a decisão.”",
     "isAnalysis": "é uma análise."
    }
   },
   {
    "type": "p",
    "text": "Uma boa crítica precisa de critérios."
   },
   {
    "type": "p",
    "text": "Pode ser baseada em:"
   },
   {
    "type": "ul",
    "items": [
     "pesquisa;",
     "heurísticas;",
     "comportamento;",
     "dados;",
     "acessibilidade;",
     "objetivos de negócio;",
     "princípios de interação;",
     "padrões conhecidos;",
     "restrições técnicas."
    ]
   },
   {
    "type": "p",
    "text": "O designer não precisa gostar ou não gostar."
   },
   {
    "type": "p",
    "text": "Precisa conseguir explicar."
   },
   {
    "type": "h2",
    "text": "O bom design precisa de argumentos"
   },
   {
    "type": "p",
    "text": "Isso também muda a forma como apresentamos nosso trabalho."
   },
   {
    "type": "p",
    "text": "Em vez de:"
   },
   {
    "type": "quote",
    "text": "“Escolhi essa solução porque achei mais limpa.”"
   },
   {
    "type": "p",
    "text": "Podemos dizer:"
   },
   {
    "type": "quote",
    "text": "“Escolhemos essa estrutura porque os testes mostraram dificuldade para localizar a ação principal. A nova hierarquia reduz a quantidade de elementos competindo pela atenção.”"
   },
   {
    "type": "p",
    "text": "Agora existe um raciocínio."
   },
   {
    "type": "p",
    "text": "Isso é especialmente importante quando usamos IA."
   },
   {
    "type": "p",
    "text": "Se a ferramenta gerou três soluções, precisamos explicar por que escolhemos uma delas."
   },
   {
    "type": "h2",
    "text": "Dados ajudam a melhorar o olhar crítico"
   },
   {
    "type": "p",
    "text": "O olhar crítico não precisa ser apenas visual."
   },
   {
    "type": "p",
    "text": "Podemos combinar diferentes tipos de evidência."
   },
   {
    "type": "p",
    "text": "Dados: mostram comportamento em escala."
   },
   {
    "type": "p",
    "text": "Pesquisa: mostra necessidades e percepções."
   },
   {
    "type": "ul",
    "items": [
     "Teste: revela dificuldades de interação",
     "Métrica: mostra impacto",
     "Experiência: ajuda a reconhecer padrões"
    ]
   },
   {
    "type": "p",
    "text": "Quanto mais fontes de informação temos, melhor conseguimos avaliar uma solução."
   },
   {
    "type": "h2",
    "text": "Growth também entra nessa conversa"
   },
   {
    "type": "p",
    "text": "Imagine que uma mudança aumentou a conversão."
   },
   {
    "type": "p",
    "text": "Isso significa que o design ficou melhor?"
   },
   {
    "type": "p",
    "text": "Talvez."
   },
   {
    "type": "p",
    "text": "Mas precisamos olhar o contexto."
   },
   {
    "type": "p",
    "text": "A retenção melhorou?"
   },
   {
    "type": "p",
    "text": "A ativação melhorou?"
   },
   {
    "type": "p",
    "text": "A satisfação mudou?"
   },
   {
    "type": "p",
    "text": "O comportamento depois da conversão mudou?"
   },
   {
    "type": "p",
    "text": "Uma métrica positiva não encerra a análise."
   },
   {
    "type": "p",
    "text": "Ela gera outra pergunta."
   },
   {
    "type": "p",
    "text": "Esse tipo de pensamento é muito importante em Growth."
   },
   {
    "type": "p",
    "text": "Não basta fazer o número subir."
   },
   {
    "type": "p",
    "text": "Precisamos entender o que está acontecendo com a experiência."
   },
   {
    "type": "h2",
    "text": "O olhar crítico evita o “design pelo design”"
   },
   {
    "type": "ul",
    "items": [
     "Uma interface pode seguir uma tendência",
     "Pode parecer moderna",
     "Pode usar animações",
     "Pode ter gradientes",
     "Pode usar IA",
     "Pode seguir um novo padrão visual"
    ]
   },
   {
    "type": "p",
    "text": "Mas a pergunta continua sendo:"
   },
   {
    "type": "quote",
    "text": "Isso ajuda alguém a realizar algo?"
   },
   {
    "type": "p",
    "text": "Se não ajuda, talvez seja apenas decoração."
   },
   {
    "type": "p",
    "text": "Design não precisa ser complicado para demonstrar conhecimento."
   },
   {
    "type": "p",
    "text": "Muitas vezes, a melhor solução é aquela que deixa o problema mais simples para quem está usando."
   },
   {
    "type": "h2",
    "text": "E se a IA produzir algo melhor que você?"
   },
   {
    "type": "p",
    "text": "Essa pergunta pode incomodar."
   },
   {
    "type": "p",
    "text": "Mas acho que é importante fazer."
   },
   {
    "type": "p",
    "text": "Talvez uma IA consiga gerar uma interface visualmente melhor do que aquilo que eu criaria sozinho."
   },
   {
    "type": "p",
    "text": "E tudo bem."
   },
   {
    "type": "p",
    "text": "O trabalho do designer não precisa ser competir com a máquina na produção de pixels."
   },
   {
    "type": "p",
    "text": "Podemos usar essa capacidade a nosso favor."
   },
   {
    "type": "p",
    "text": "A pergunta passa a ser:"
   },
   {
    "type": "quote",
    "text": "Consigo avaliar essa solução melhor?"
   },
   {
    "type": "quote",
    "text": "Consigo identificar onde ela falha?"
   },
   {
    "type": "quote",
    "text": "Consigo adaptá-la ao contexto do produto?"
   },
   {
    "type": "quote",
    "text": "Consigo testar com usuários?"
   },
   {
    "type": "quote",
    "text": "Consigo conectar essa solução ao objetivo do negócio?"
   },
   {
    "type": "p",
    "text": "Esse é um espaço em que experiência e julgamento continuam importantes."
   },
   {
    "type": "h2",
    "text": "Design pode ficar mais estratégico"
   },
   {
    "type": "p",
    "text": "Se a produção ficar cada vez mais rápida, podemos dedicar mais tempo para:"
   },
   {
    "type": "ul",
    "items": [
     "Pesquisar",
     "Entender",
     "Questionar",
     "Comparar",
     "Testar",
     "Medir",
     "Comunicar",
     "Decidir",
     "Isso não diminui o papel do designer",
     "Muda o foco"
    ]
   },
   {
    "type": "p",
    "text": "O designer deixa de ser apenas uma pessoa que transforma requisitos em telas."
   },
   {
    "type": "p",
    "text": "Passa a ser uma pessoa que ajuda o time a decidir qual experiência deve existir."
   },
   {
    "type": "h2",
    "text": "Talvez “bom gosto” não seja suficiente"
   },
   {
    "type": "p",
    "text": "Existe uma discussão interessante sobre taste, ou bom gosto, na era da IA."
   },
   {
    "type": "p",
    "text": "Acredito que bom gosto ajuda."
   },
   {
    "type": "p",
    "text": "Mas sozinho não basta."
   },
   {
    "type": "p",
    "text": "Uma solução pode ser visualmente excelente e não funcionar."
   },
   {
    "type": "scene",
    "id": "rings",
    "data": {
     "lead": "Por isso, eu colocaria o olhar crítico como uma combinação:",
     "formula": "Repertório + contexto + evidência + experiência + julgamento.",
     "after": "É isso que permite avaliar uma solução de maneira mais completa."
    }
   },
   {
    "type": "h2",
    "text": "A ferramenta muda. O problema continua."
   },
   {
    "type": "p",
    "text": "Daqui a alguns anos, talvez estejamos usando ferramentas que hoje nem existem."
   },
   {
    "type": "p",
    "text": "Talvez o processo de criação seja completamente diferente."
   },
   {
    "type": "p",
    "text": "Mas ainda teremos pessoas tentando realizar tarefas."
   },
   {
    "type": "ul",
    "items": [
     "Ainda teremos problemas de compreensão",
     "Ainda teremos fricção",
     "Ainda teremos decisões"
    ]
   },
   {
    "type": "p",
    "text": "Ainda teremos produtos que precisam gerar valor."
   },
   {
    "type": "p",
    "text": "Por isso, acredito que aprender ferramentas é importante."
   },
   {
    "type": "p",
    "text": "Mas aprender a pensar sobre o que estamos criando é ainda mais importante."
   }
  ],
  "cover": "/blog/olhar-critico-vale-mais-que-ferramentas.webp",
  "lab": true
 },
 {
  "slug": "dados-precisam-de-historia",
  "title": "Não basta ter dados. É preciso saber contar a história",
  "description": "Dados sozinhos não convencem ninguém. Como transformar números em uma história que leva a uma decisão, e por que visualização também é UX.",
  "date": "2026-09-10",
  "category": "growth",
  "tags": [
   "Storytelling",
   "Dados",
   "UX"
  ],
  "readMinutes": 3,
  "related": {
   "href": "/cases/acquire",
   "title": "Clint Acquire",
   "body": "Na prática: uma landing page e um fluxo conversacional que concentraram 79% da demanda comercial."
  },
  "sources": [
   "Nielsen Norman Group, Data Isn’t Enough: The Power of Narrative in UX.",
   "Nielsen Norman Group, UX Metrics & ROI.",
   "Nielsen Norman Group, Atomic Research: Small Insights, Big Impact."
  ],
  "blocks": [
   {
    "type": "p",
    "text": "Uma das coisas que mais mudaram minha forma de pensar produto foi perceber que dados, sozinhos, não convencem ninguém."
   },
   {
    "type": "ul",
    "items": [
     "Podemos ter um dashboard cheio de números",
     "Podemos apresentar uma taxa de conversão",
     "Podemos mostrar um gráfico de crescimento",
     "Podemos comparar períodos"
    ]
   },
   {
    "type": "p",
    "text": "Mas ainda existe uma pergunta:"
   },
   {
    "type": "quote",
    "text": "O que esses dados estão tentando nos dizer?"
   },
   {
    "type": "p",
    "text": "É aí que entra a narrativa."
   },
   {
    "type": "h2",
    "text": "Um número não é uma história"
   },
   {
    "type": "p",
    "text": "Imagine apresentar:"
   },
   {
    "type": "visual",
    "data": {
     "kind": "flow",
     "steps": [
      {
       "label": "O que aconteceu?",
       "icon": "chart"
      },
      {
       "label": "Por que aconteceu?",
       "icon": "search"
      },
      {
       "label": "O que isso significa?",
       "icon": "bulb"
      },
      {
       "label": "O que vamos fazer?",
       "icon": "target"
      }
     ]
    },
    "caption": "A estrutura de uma boa história com dados termina numa decisão."
   },
   {
    "type": "scene",
    "id": "storyboard",
    "data": {
     "lead": "",
     "kpi": "Conversão: 4,2%",
     "a": "O número está correto.",
     "b": "Mas o que devemos fazer com ele?",
     "c": "Agora imagine:",
     "story": "“A conversão caiu de 6,1% para 4,2% depois da mudança no formulário. A queda acontece principalmente no mobile, onde o segundo campo apresenta a maior taxa de abandono.”",
     "d": "Agora temos uma história.",
     "e": "Existe:",
     "formula": "contexto + mudança + comportamento + hipótese.",
     "f": "Isso facilita muito mais uma conversa de produto."
    }
   },
   {
    "type": "h2",
    "text": "Visualização de dados também é UX"
   },
   {
    "type": "p",
    "text": "Quando criamos um dashboard, estamos criando uma interface."
   },
   {
    "type": "p",
    "text": "Existe uma pessoa do outro lado tentando entender alguma coisa."
   },
   {
    "type": "ul",
    "items": [
     "Ela precisa identificar o que importa",
     "Precisa perceber mudanças",
     "Precisa comparar",
     "Precisa decidir"
    ]
   },
   {
    "type": "p",
    "text": "Por isso, a visualização precisa responder a uma necessidade."
   },
   {
    "type": "p",
    "text": "Não adianta ter dez gráficos se nenhum deles ajuda a tomar uma decisão."
   },
   {
    "type": "p",
    "text": "Às vezes, um único gráfico bem escolhido comunica mais do que uma página inteira."
   },
   {
    "type": "h2",
    "text": "O que aconteceu?"
   },
   {
    "type": "scene",
    "id": "page-flip",
    "data": {
     "first": "Essa é uma boa primeira pergunta.",
     "items": [
      {
       "lead": "Depois:",
       "q": "Por que isso importa?"
      },
      {
       "lead": "Depois:",
       "q": "O que podemos fazer?"
      },
      {
       "lead": "E finalmente:",
       "q": "Como saberemos se funcionou?"
      }
     ],
     "close": "Essa sequência transforma um relatório em uma conversa de produto."
    }
   },
   {
    "type": "h2",
    "text": "Dados e storytelling não são coisas separadas"
   },
   {
    "type": "p",
    "text": "Quando falamos em storytelling com dados, não estamos falando de inventar uma história para deixar o número mais bonito."
   },
   {
    "type": "p",
    "text": "É o contrário."
   },
   {
    "type": "p",
    "text": "É organizar os dados para deixar a informação importante mais clara."
   },
   {
    "type": "p",
    "text": "Por exemplo:"
   },
   {
    "type": "p",
    "text": "Em vez de mostrar 12 métricas igualmente destacadas, podemos mostrar:"
   },
   {
    "type": "quote",
    "text": "Principal mudança"
   },
   {
    "type": "quote",
    "text": "Possível causa"
   },
   {
    "type": "quote",
    "text": "Impacto"
   },
   {
    "type": "quote",
    "text": "Próximo passo"
   },
   {
    "type": "p",
    "text": "Isso ajuda a equipe a sair da leitura e chegar à decisão."
   },
   {
    "type": "h2",
    "text": "O Product Designer também precisa contar histórias"
   },
   {
    "type": "p",
    "text": "Essa habilidade aparece em vários momentos."
   },
   {
    "type": "ul",
    "items": [
     "Quando apresentamos uma pesquisa",
     "Quando mostramos um problema",
     "Quando defendemos uma solução",
     "Quando apresentamos resultados"
    ]
   },
   {
    "type": "p",
    "text": "Quando explicamos uma decisão para stakeholders."
   },
   {
    "type": "p",
    "text": "Não basta dizer o que fizemos."
   },
   {
    "type": "p",
    "text": "Precisamos explicar:"
   },
   {
    "type": "quote",
    "text": "Qual era o problema?"
   },
   {
    "type": "quote",
    "text": "O que descobrimos?"
   },
   {
    "type": "quote",
    "text": "O que decidimos?"
   },
   {
    "type": "quote",
    "text": "Por que decidimos isso?"
   },
   {
    "type": "quote",
    "text": "O que aconteceu depois?"
   },
   {
    "type": "p",
    "text": "Essa estrutura torna o trabalho muito mais compreensível."
   },
   {
    "type": "h2",
    "text": "Growth precisa dessa mesma clareza"
   },
   {
    "type": "ul",
    "items": [
     "Growth trabalha com muitas métricas",
     "Aquisição",
     "Conversão",
     "CAC",
     "LTV",
     "Retenção",
     "Churn",
     "Ativação",
     "CTR"
    ]
   },
   {
    "type": "p",
    "text": "Mas uma reunião cheia de métricas pode não levar a nenhuma decisão."
   },
   {
    "type": "p",
    "text": "O papel da narrativa é ajudar a conectar os pontos."
   },
   {
    "type": "scene",
    "id": "annotated-line",
    "data": {
     "lead": "Por exemplo:",
     "chain": "Tráfego aumentou → mas ativação caiu → principalmente em determinado canal → usuários chegam com uma expectativa diferente → precisamos revisar a proposta de valor.",
     "after": "Agora existe uma direção para investigar."
    }
   },
   {
    "type": "h2",
    "text": "O risco de olhar apenas para a média"
   },
   {
    "type": "p",
    "text": "Outro problema comum é olhar apenas para uma métrica geral."
   },
   {
    "type": "visual",
    "id": "average-trap",
    "caption": "A média de 5% parece estável. Segmentada, mostra onde a conversão está sofrendo."
   },
   {
    "type": "p",
    "text": "Imagine que a conversão média seja 5%."
   },
   {
    "type": "p",
    "text": "Parece um número."
   },
   {
    "type": "p",
    "text": "Mas talvez:"
   },
   {
    "type": "ul",
    "items": [
     "Mobile = 2%",
     "Desktop = 8%",
     "Novos usuários = 3%",
     "Usuários recorrentes = 9%"
    ]
   },
   {
    "type": "p",
    "text": "Agora a média esconde uma diferença importante."
   },
   {
    "type": "p",
    "text": "A segmentação pode revelar a história."
   },
   {
    "type": "p",
    "text": "E isso pode mudar completamente a decisão."
   },
   {
    "type": "h2",
    "text": "Dados precisam de perguntas"
   },
   {
    "type": "p",
    "text": "Não precisamos começar com:"
   },
   {
    "type": "quote",
    "text": "“Quais dados temos?”"
   },
   {
    "type": "p",
    "text": "Podemos começar com:"
   },
   {
    "type": "quote",
    "text": "“O que queremos entender?”"
   },
   {
    "type": "p",
    "text": "Depois:"
   },
   {
    "type": "quote",
    "text": "“Qual decisão precisamos tomar?”"
   },
   {
    "type": "p",
    "text": "E só então:"
   },
   {
    "type": "quote",
    "text": "“Quais dados podem nos ajudar?”"
   },
   {
    "type": "p",
    "text": "Essa inversão evita criar dashboards simplesmente porque temos acesso aos dados."
   },
   {
    "type": "h2",
    "text": "O papel do designer nessa conversa"
   },
   {
    "type": "p",
    "text": "Designers têm uma vantagem interessante aqui."
   },
   {
    "type": "p",
    "text": "Estamos acostumados a organizar informação."
   },
   {
    "type": "ul",
    "items": [
     "Hierarquia",
     "Contraste",
     "Agrupamento",
     "Sequência",
     "Foco"
    ]
   },
   {
    "type": "p",
    "text": "Tudo isso também existe na visualização de dados."
   },
   {
    "type": "p",
    "text": "Um gráfico também precisa de hierarquia."
   },
   {
    "type": "p",
    "text": "Um dashboard também precisa de arquitetura da informação."
   },
   {
    "type": "p",
    "text": "Um relatório também precisa de uma boa experiência de leitura."
   },
   {
    "type": "p",
    "text": "Por isso, visualização de dados pode ser uma extensão natural do trabalho de Product Design."
   },
   {
    "type": "h2",
    "text": "A melhor história é aquela que leva a uma decisão"
   },
   {
    "type": "p",
    "text": "No final, não precisamos criar apresentações bonitas."
   },
   {
    "type": "p",
    "text": "Precisamos ajudar alguém a entender algo importante."
   },
   {
    "type": "p",
    "text": "Uma boa narrativa de dados deveria fazer a pessoa pensar:"
   },
   {
    "type": "quote",
    "text": "“Agora entendi o que está acontecendo.”"
   },
   {
    "type": "p",
    "text": "E depois:"
   },
   {
    "type": "quote",
    "text": "“Agora sei o que precisamos investigar ou fazer.”"
   },
   {
    "type": "p",
    "text": "Esse é o ponto."
   },
   {
    "type": "p",
    "text": "Porque dados não geram valor simplesmente porque existem."
   },
   {
    "type": "p",
    "text": "Eles geram valor quando ajudam alguém a tomar uma decisão melhor."
   }
  ],
  "cover": "/blog/dados-precisam-de-historia.webp",
  "lab": true
 }
];
