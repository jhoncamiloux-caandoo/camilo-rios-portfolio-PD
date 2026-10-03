/* Série "Prompt e Design na era da IA": artigos com SVGs próprios em components/blog/prompt-visuals.tsx. */
import type { Post } from "./posts";

export const promptPosts: Post[] = [
 {
  "slug": "prompt-virou-parte-do-processo-de-design",
  "title": "O prompt virou parte do processo de design",
  "description": "Quando a IA cria interfaces, o pedido deixa de ser instrução e vira especificação. Objetivo, contexto, usuário, comportamento, restrições e critérios.",
  "date": "2026-10-01",
  "category": "ai",
  "tags": [
   "IA",
   "Prompt",
   "Processo"
  ],
  "cover": "/blog/prompt-virou-parte-do-processo-de-design.webp",
  "readMinutes": 4,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: IA dentro de um CRM, com o designer definindo contexto, limites e critérios."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Durante muito tempo, o designer pensava principalmente em telas, fluxos, componentes e experiências."
   },
   {
    "type": "p",
    "text": "Agora existe mais uma coisa no processo: a forma como ele conversa com a IA."
   },
   {
    "type": "p",
    "text": "Quando uma IA consegue criar uma interface, escrever código, gerar uma estrutura de produto ou transformar uma ideia em protótipo, o pedido que fazemos para ela deixa de ser apenas uma instrução."
   },
   {
    "type": "p",
    "text": "Ele passa a ser parte do processo de design."
   },
   {
    "type": "h2",
    "text": "Pedir não é especificar"
   },
   {
    "type": "scene",
    "id": "spec-expand",
    "data": {
     "intro": "Existe uma diferença grande entre:",
     "vague": "Crie uma tela de dashboard moderna.",
     "joiner": "e:",
     "spec": "Crie um dashboard para gestores de uma plataforma SaaS B2B. O objetivo principal é acompanhar receita, churn e conversão. A informação mais importante deve aparecer primeiro. Use uma estrutura desktop, priorize leitura rápida e permita comparar períodos. Evite gráficos decorativos e mantenha os componentes compatíveis com o design system existente."
    }
   },
   {
    "type": "p",
    "text": "Os dois prompts pedem uma interface."
   },
   {
    "type": "p",
    "text": "Mas apenas um deles apresenta um problema para ser resolvido."
   },
   {
    "type": "p",
    "text": "A IA consegue gerar algo nos dois casos."
   },
   {
    "type": "p",
    "text": "A diferença é que, no primeiro, ela precisa preencher praticamente todas as decisões que o designer não definiu."
   },
   {
    "type": "p",
    "text": "É aí que aparecem aquelas interfaces visualmente bonitas, mas genéricas."
   },
   {
    "type": "h2",
    "text": "O problema do \"faz algo bonito\""
   },
   {
    "type": "p",
    "text": "A IA não conhece automaticamente o produto que estamos desenhando."
   },
   {
    "type": "p",
    "text": "Ela não sabe necessariamente quem utiliza o produto, qual problema estamos resolvendo, quais são as métricas importantes, quais componentes já existem, quais são as limitações técnicas, quais informações são prioritárias, quais estados precisam existir ou quais regras de negócio precisam ser respeitadas."
   },
   {
    "type": "p",
    "text": "Se essas informações não chegam até ela, o modelo precisa completar as lacunas."
   },
   {
    "type": "p",
    "text": "E quando existem muitas lacunas, aparecem soluções genéricas."
   },
   {
    "type": "p",
    "text": "Isso não significa que a IA é ruim."
   },
   {
    "type": "p",
    "text": "Significa que o problema estava pouco definido."
   },
   {
    "type": "h2",
    "text": "Prompt é uma forma de especificação"
   },
   {
    "type": "p",
    "text": "O prompt começa a funcionar como uma espécie de briefing operacional."
   },
   {
    "type": "p",
    "text": "Você precisa definir:"
   },
   {
    "type": "p",
    "lead": "Objetivo:",
    "text": "o que precisa ser criado?"
   },
   {
    "type": "p",
    "lead": "Contexto:",
    "text": "onde isso existe dentro do produto?"
   },
   {
    "type": "p",
    "lead": "Usuário:",
    "text": "para quem estamos criando?"
   },
   {
    "type": "p",
    "lead": "Comportamento:",
    "text": "o que precisa acontecer quando o usuário interagir?"
   },
   {
    "type": "p",
    "lead": "Restrições:",
    "text": "o que não pode acontecer?"
   },
   {
    "type": "p",
    "lead": "Critérios:",
    "text": "como saberemos se a solução está adequada?"
   },
   {
    "type": "p",
    "text": "Essa lógica se aproxima bastante de algo que o designer já deveria fazer antes mesmo da IA existir: transformar um problema aberto em um problema suficientemente estruturado para ser resolvido."
   },
   {
    "type": "visual",
    "id": "spec-builder",
    "caption": "Cada item do briefing organiza uma parte da interface. Quanto mais claro o começo, menos ruído no resultado."
   },
   {
    "type": "h2",
    "text": "O designer não precisa escrever mais. Precisa definir melhor."
   },
   {
    "type": "p",
    "text": "Quando percebemos que um resultado ficou ruim, a primeira reação pode ser escrever um prompt enorme."
   },
   {
    "type": "p",
    "text": "Mas tamanho não significa precisão."
   },
   {
    "type": "scene",
    "id": "size-vs-precision",
    "data": {
     "a": "Um prompt com 1.500 palavras pode continuar sendo confuso.",
     "b": "Um prompt com 150 palavras pode ser extremamente preciso.",
     "c": "O objetivo não é falar mais.",
     "d": "É remover ambiguidades."
    }
   },
   {
    "type": "p",
    "text": "Essa talvez seja uma das novas habilidades do designer na era da IA: saber o que precisa ser dito e o que pode ser deixado para a ferramenta."
   },
   {
    "type": "h2",
    "text": "O novo processo"
   },
   {
    "type": "scene",
    "id": "process-morph",
    "data": {
     "beforeLabel": "Antes:",
     "before": "Problema → Pesquisa → Ideia → Wireframe → UI → Protótipo",
     "afterLabel": "Agora podemos ter:",
     "after": "Problema → Contexto → Prompt → Exploração → Crítica → Iteração → Teste"
    }
   },
   {
    "type": "p",
    "text": "A IA entra no processo."
   },
   {
    "type": "p",
    "text": "Mas não assume o processo."
   },
   {
    "type": "p",
    "text": "O prompt não substitui o design."
   },
   {
    "type": "p",
    "text": "Ele transforma intenção em uma instrução que a máquina consegue interpretar."
   },
   {
    "type": "p",
    "text": "Quanto melhor entendemos o problema, melhor conseguimos orientar a ferramenta."
   },
   {
    "type": "p",
    "text": "E quanto melhor conseguimos orientar a ferramenta, menos tempo gastamos corrigindo coisas que poderiam ter sido especificadas desde o início."
   },
   {
    "type": "visual",
    "data": {
     "kind": "lanes",
     "lanes": [
      {
       "title": "Antes",
       "steps": [
        "Problema",
        "Pesquisa",
        "Ideia",
        "Wireframe",
        "UI",
        "Protótipo"
       ]
      },
      {
       "title": "Agora",
       "steps": [
        "Problema",
        "Contexto",
        "Prompt",
        "Exploração",
        "Crítica",
        "Iteração",
        "Teste"
       ],
       "highlight": [
        1,
        2,
        4
       ]
      }
     ]
    },
    "caption": "A IA entra no processo, mas não assume o processo: contexto e crítica continuam sendo do designer."
   }
  ],
  "lab": true
 },
 {
  "slug": "gastar-menos-tokens-habilidade-de-design",
  "title": "Gastar menos tokens pode ser uma habilidade de design",
  "description": "Menos tokens não é menos pensamento. Um briefing bem estruturado e ajustes incrementais rendem mais do que reexplicar o projeto inteiro a cada pedido.",
  "date": "2026-10-01",
  "category": "ai",
  "tags": [
   "IA",
   "Prompt",
   "Eficiência"
  ],
  "cover": "/blog/gastar-menos-tokens-habilidade-de-design.webp",
  "readMinutes": 4,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: IA dentro de um CRM, com o designer definindo contexto, limites e critérios."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Durante muito tempo, aprendemos que explicar melhor significava explicar mais."
   },
   {
    "type": "p",
    "text": "Com IA, essa lógica começa a mudar."
   },
   {
    "type": "p",
    "text": "Hoje, um designer pode passar minutos escrevendo um prompt enorme, receber um resultado ruim e depois gastar ainda mais tempo tentando corrigir o que aconteceu."
   },
   {
    "type": "p",
    "text": "Talvez o problema não seja falta de informação."
   },
   {
    "type": "p",
    "text": "Talvez seja excesso de informação sem estrutura."
   },
   {
    "type": "h2",
    "text": "Menos tokens não significa menos pensamento"
   },
   {
    "type": "p",
    "text": "Existe uma diferença importante entre escrever menos e pensar menos."
   },
   {
    "type": "p",
    "text": "Um prompt curto pode ser superficial."
   },
   {
    "type": "p",
    "text": "Mas também pode ser extremamente preciso."
   },
   {
    "type": "p",
    "text": "O que importa não é simplesmente a quantidade de texto enviada para o modelo."
   },
   {
    "type": "p",
    "text": "É a quantidade de informação útil por instrução."
   },
   {
    "type": "scene",
    "id": "possibility-space",
    "data": {
     "shortP": "Crie uma landing page moderna para uma empresa de tecnologia.",
     "longP": "Crie uma landing page para um SaaS B2B de gestão financeira. O objetivo é gerar demonstrações. O público são gestores financeiros de pequenas empresas. Priorize proposta de valor, prova social e CTA. Use desktop-first, estrutura modular e linguagem direta. Não use gradientes, ilustrações genéricas ou excesso de elementos decorativos.",
     "notes": [
      "Por exemplo:",
      "É curto.",
      "Mas quase não define nada.",
      "Já:",
      "É maior.",
      "Mas cada informação reduz uma possibilidade desnecessária."
     ]
    }
   },
   {
    "type": "h2",
    "text": "Prompt também é economia"
   },
   {
    "type": "p",
    "text": "Tokens, créditos, contexto, chamadas, tempo de processamento e número de iterações começam a fazer parte do fluxo de trabalho."
   },
   {
    "type": "p",
    "text": "Isso muda uma coisa importante:"
   },
   {
    "type": "p",
    "text": "prompting também pode ser uma questão de eficiência."
   },
   {
    "type": "p",
    "text": "Construir uma boa primeira solicitação e depois trabalhar com ajustes menores pode ser mais eficiente do que reexplicar todo o projeto a cada interação."
   },
   {
    "type": "p",
    "text": "Um bom designer já tenta reduzir fricção para o usuário."
   },
   {
    "type": "p",
    "text": "Agora precisa começar a reduzir fricção na própria interação com a IA."
   },
   {
    "type": "h2",
    "text": "O problema do prompt que tenta fazer tudo"
   },
   {
    "type": "scene",
    "id": "decision-sequence",
    "data": {
     "intro": "Imagine um prompt assim:",
     "overloaded": "Crie o produto completo, com onboarding, dashboard, configurações, perfil, notificações, pagamentos, responsividade, animações, acessibilidade, dark mode, sistema de componentes...",
     "outro": [
      "Pode parecer completo.",
      "Mas talvez seja justamente esse o problema.",
      "Você está tentando resolver muitas decisões simultaneamente.",
      "Uma alternativa pode ser:"
     ],
     "steps": [
      {
       "title": "1. Definir a estrutura",
       "prompt": "\"Crie a arquitetura principal do produto.\""
      },
      {
       "title": "2. Definir a experiência",
       "prompt": "\"Agora desenvolva o fluxo de onboarding.\""
      },
      {
       "title": "3. Definir o comportamento",
       "prompt": "\"Adicione estados de erro, loading e sucesso.\""
      },
      {
       "title": "4. Refinar a interface",
       "prompt": "\"Agora ajuste hierarquia, espaçamento e componentes.\""
      }
     ],
     "close": [
      "Isso transforma a conversa em uma sequência de decisões.",
      "Em vez de tentar construir tudo de uma vez."
     ]
    }
   },
   {
    "type": "visual",
    "id": "token-budget",
    "caption": "Reexplicar tudo a cada pedido repete o mesmo custo; com um bom briefing, os pedidos seguintes só descrevem o que mudou."
   },
   {
    "type": "h2",
    "text": "O prompt inicial é o briefing"
   },
   {
    "type": "p",
    "text": "O primeiro prompt pode funcionar como uma espécie de briefing e os prompts seguintes como mudanças incrementais."
   },
   {
    "type": "p",
    "text": "O primeiro prompt estabelece:"
   },
   {
    "type": "p",
    "text": "o que estamos construindo"
   },
   {
    "type": "p",
    "text": "Os seguintes definem:"
   },
   {
    "type": "p",
    "text": "o que mudou"
   },
   {
    "type": "p",
    "text": "Essa lógica é muito parecida com trabalhar em produto."
   },
   {
    "type": "p",
    "text": "Você não deveria redefinir todo o produto sempre que muda um botão."
   },
   {
    "type": "p",
    "text": "Você define a base e depois trabalha com alterações controladas."
   },
   {
    "type": "h2",
    "text": "A pergunta que o designer deveria fazer"
   },
   {
    "type": "p",
    "text": "Antes de escrever:"
   },
   {
    "type": "quote",
    "text": "O que eu quero pedir para a IA?"
   },
   {
    "type": "p",
    "text": "Talvez seja melhor perguntar:"
   },
   {
    "type": "quote",
    "text": "Qual decisão preciso tomar agora?"
   },
   {
    "type": "p",
    "text": "Se a decisão é sobre arquitetura, não precisamos pedir uma interface final."
   },
   {
    "type": "p",
    "text": "Se a decisão é sobre navegação, não precisamos gerar o produto inteiro."
   },
   {
    "type": "p",
    "text": "Se a decisão é sobre hierarquia visual, não precisamos reconstruir todas as funcionalidades."
   },
   {
    "type": "p",
    "text": "IA pode acelerar bastante o processo."
   },
   {
    "type": "p",
    "text": "Mas também pode acelerar a produção de coisas que ainda não deveriam existir."
   },
   {
    "type": "p",
    "text": "Por isso, gastar menos tokens não é simplesmente economizar dinheiro."
   },
   {
    "type": "p",
    "text": "Pode ser uma consequência de pensar melhor."
   },
   {
    "type": "scene",
    "id": "kinetic-quote",
    "data": {
     "lines": [
      "Menos geração desnecessária.",
      "Mais intenção."
     ],
     "emphasis": [
      1
     ],
     "tone": "violet"
    }
   },
   {
    "type": "visual",
    "id": "prompt-funnel",
    "caption": "Clareza reduz desperdício: cada etapa descarta possibilidades até sobrar uma solução."
   }
  ],
  "lab": true
 },
 {
  "slug": "pergunta-generica-interface-generica",
  "title": "Quanto mais genérica a pergunta, mais genérica a interface",
  "description": "A IA preenche os espaços vazios com padrões conhecidos. Quanto mais ela conhece o problema real, menos precisa inventar.",
  "date": "2026-10-01",
  "category": "ai",
  "tags": [
   "IA",
   "Prompt",
   "Contexto"
  ],
  "cover": "/blog/pergunta-generica-interface-generica.webp",
  "readMinutes": 4,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: IA dentro de um CRM, com o designer definindo contexto, limites e critérios."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Existe uma coisa curiosa acontecendo com as ferramentas de IA para design."
   },
   {
    "type": "p",
    "text": "Elas estão ficando muito boas em produzir interfaces bonitas."
   },
   {
    "type": "p",
    "text": "Cards bem organizados."
   },
   {
    "type": "p",
    "text": "Botões consistentes."
   },
   {
    "type": "p",
    "text": "Tipografia equilibrada."
   },
   {
    "type": "p",
    "text": "Dashboards convincentes."
   },
   {
    "type": "p",
    "text": "Landing pages com aparência profissional."
   },
   {
    "type": "p",
    "text": "E justamente por isso existe um novo problema."
   },
   {
    "type": "p",
    "text": "Muitas interfaces começam a parecer iguais."
   },
   {
    "type": "h2",
    "text": "A estética já não é suficiente"
   },
   {
    "type": "p",
    "text": "Quando uma ferramenta consegue gerar uma interface visualmente aceitável em segundos, estética deixa de ser uma vantagem tão difícil de alcançar."
   },
   {
    "type": "p",
    "text": "O desafio passa a ser outro:"
   },
   {
    "type": "p",
    "text": "por que essa interface deveria ser assim?"
   },
   {
    "type": "p",
    "text": "Essa pergunta continua sendo responsabilidade do designer."
   },
   {
    "type": "p",
    "text": "Uma IA pode criar um dashboard bonito."
   },
   {
    "type": "p",
    "text": "Mas qual informação deveria aparecer primeiro?"
   },
   {
    "type": "p",
    "text": "Pode criar um onboarding."
   },
   {
    "type": "p",
    "text": "Mas qual etapa deveria ser eliminada?"
   },
   {
    "type": "p",
    "text": "Pode criar uma página de checkout."
   },
   {
    "type": "p",
    "text": "Mas qual informação está impedindo a conversão?"
   },
   {
    "type": "p",
    "text": "Pode criar dez alternativas."
   },
   {
    "type": "p",
    "text": "Mas qual delas resolve melhor o problema?"
   },
   {
    "type": "h2",
    "text": "A IA preenche espaços vazios"
   },
   {
    "type": "scene",
    "id": "gap-filler",
    "data": {
     "lead": "Quando você escreve:",
     "prompt": "Crie um app moderno de finanças.",
     "open": "Existe uma quantidade enorme de decisões em aberto.",
     "questions": [
      "Qual público?",
      "Pessoa física ou empresa?",
      "Qual objetivo?",
      "Investir, controlar gastos, pagar contas?",
      "Qual contexto?",
      "Mobile ou desktop?",
      "Qual comportamento?",
      "Qual modelo de negócio?",
      "Qual identidade visual?"
     ],
     "fills": "E essas suposições geralmente vêm de padrões conhecidos. Por isso aparecem cards, dashboards, gráficos, menus laterais, hero sections, botões de CTA e métricas em destaque.",
     "close": [
      "Sem essas respostas, o modelo precisa fazer suposições.",
      "",
      "Tudo funciona.",
      "Mas nada necessariamente pertence àquele produto."
     ]
    }
   },
   {
    "type": "h2",
    "text": "O problema não é a IA ser genérica"
   },
   {
    "type": "p",
    "text": "A ferramenta está fazendo exatamente o que foi solicitado."
   },
   {
    "type": "p",
    "text": "Se o briefing é genérico, a solução provavelmente também será."
   },
   {
    "type": "p",
    "text": "É por isso que contexto se tornou tão importante."
   },
   {
    "type": "p",
    "text": "A lógica é simples:"
   },
   {
    "type": "p",
    "text": "quanto mais a ferramenta conhece o problema real, menos precisa inventar."
   },
   {
    "type": "h2",
    "text": "Contexto é parte do design"
   },
   {
    "type": "p",
    "text": "Talvez o prompt esteja começando a funcionar como uma nova camada de especificação."
   },
   {
    "type": "scene",
    "id": "orders-story",
    "data": {
     "lead": "Não basta dizer:",
     "shortP": "Crie uma tela de pedidos.",
     "lead2": "Podemos dizer:",
     "context": "Esta tela será utilizada por operadores de restaurantes durante horários de alta demanda. O usuário precisa identificar rapidamente novos pedidos, pedidos atrasados e pedidos que precisam de intervenção. A informação mais importante é o status. A interação precisa exigir poucos cliques. O sistema já possui componentes para status, filtros e tabelas.",
     "close": [
      "Agora existe um problema.",
      "E não apenas uma estética.",
      "A IA tem mais informações para tomar decisões.",
      "E o designer tem mais controle sobre o resultado."
     ]
    }
   },
   {
    "type": "visual",
    "id": "generic-vs-context",
    "caption": "O mesmo pedido, com e sem contexto. O contexto é a matéria-prima da especificidade."
   },
   {
    "type": "h2",
    "text": "A precisão começa antes do prompt"
   },
   {
    "type": "p",
    "text": "Um designer que não sabe exatamente o que quer dificilmente vai resolver isso simplesmente usando IA."
   },
   {
    "type": "p",
    "text": "A ferramenta pode produzir mais alternativas."
   },
   {
    "type": "p",
    "text": "Mas mais alternativas não significam necessariamente mais clareza."
   },
   {
    "type": "p",
    "text": "Às vezes significam apenas mais coisas para analisar."
   },
   {
    "type": "p",
    "text": "Por isso, antes do prompt existe um trabalho importante:"
   },
   {
    "type": "p",
    "text": "entender o problema."
   },
   {
    "type": "p",
    "text": "Depois:"
   },
   {
    "type": "p",
    "text": "definir o que importa."
   },
   {
    "type": "p",
    "text": "Depois:"
   },
   {
    "type": "p",
    "text": "definir o que não pode acontecer."
   },
   {
    "type": "p",
    "text": "E só então:"
   },
   {
    "type": "p",
    "text": "pedir para a IA explorar."
   },
   {
    "type": "h2",
    "text": "O designer passa a trabalhar com graus de liberdade"
   },
   {
    "type": "p",
    "text": "Você pode deixar a IA livre para explorar:"
   },
   {
    "type": "ul",
    "items": [
     "composição",
     "alternativas de layout",
     "microinterações",
     "variações visuais",
     "soluções técnicas"
    ]
   },
   {
    "type": "p",
    "text": "Mas pode restringir:"
   },
   {
    "type": "ul",
    "items": [
     "identidade visual",
     "componentes",
     "acessibilidade",
     "comportamento",
     "arquitetura",
     "conteúdo",
     "regras de negócio"
    ]
   },
   {
    "type": "p",
    "text": "O trabalho do designer passa a ser também decidir:"
   },
   {
    "type": "p",
    "text": "onde a IA pode explorar e onde ela não deve improvisar."
   },
   {
    "type": "p",
    "text": "Isso aproxima prompting de uma habilidade muito conhecida no design:"
   },
   {
    "type": "p",
    "text": "trabalhar com restrições."
   },
   {
    "type": "p",
    "text": "E restrição não necessariamente reduz criatividade."
   },
   {
    "type": "p",
    "text": "Muitas vezes, ela torna a criatividade mais direcionada."
   },
   {
    "type": "visual",
    "id": "freedom-dial",
    "caption": "Parte do trabalho é decidir onde a IA pode explorar e onde ela não deve improvisar."
   }
  ],
  "lab": true
 },
 {
  "slug": "novo-skill-do-designer-dizer-o-que-quer",
  "title": "O novo skill do designer: saber dizer exatamente o que quer",
  "description": "A IA executa rápido, inclusive a ambiguidade. Por que escrever critérios e intenção virou uma das habilidades centrais do Product Designer.",
  "date": "2026-10-01",
  "category": "ai",
  "tags": [
   "IA",
   "Prompt",
   "Product Design"
  ],
  "cover": "/blog/novo-skill-do-designer-dizer-o-que-quer.webp",
  "readMinutes": 4,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: IA dentro de um CRM, com o designer definindo contexto, limites e critérios."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Existe uma habilidade que sempre fez parte do trabalho de um bom designer:"
   },
   {
    "type": "p",
    "text": "saber explicar uma ideia."
   },
   {
    "type": "p",
    "text": "Para um desenvolvedor."
   },
   {
    "type": "p",
    "text": "Para um PM."
   },
   {
    "type": "p",
    "text": "Para um stakeholder."
   },
   {
    "type": "p",
    "text": "Para um usuário."
   },
   {
    "type": "p",
    "text": "Para outro designer."
   },
   {
    "type": "p",
    "text": "Agora precisamos explicar para uma IA."
   },
   {
    "type": "p",
    "text": "E existe uma diferença importante."
   },
   {
    "type": "p",
    "text": "A IA consegue executar muito rápido."
   },
   {
    "type": "p",
    "text": "Então qualquer ambiguidade também pode ser executada muito rápido."
   },
   {
    "type": "h2",
    "text": "Antes, uma ideia vaga precisava passar por várias etapas"
   },
   {
    "type": "scene",
    "id": "two-routes",
    "data": {
     "lead": "Você dizia:",
     "idea": "Acho que essa tela poderia ser melhor.",
     "beforeSteps": [
      "Isso provavelmente gerava uma conversa.",
      "O designer fazia perguntas.",
      "O time discutia.",
      "Um wireframe aparecia.",
      "Depois um protótipo."
     ],
     "beforeNote": "Existiam vários momentos para perceber que a ideia ainda não estava clara.",
     "withAi": "Com IA, podemos ir diretamente de:",
     "to": "para:",
     "result": "uma nova interface em segundos.",
     "risk": [
      "Isso parece ótimo.",
      "Mas existe um risco.",
      "Podemos começar a produzir antes de entender."
     ]
    }
   },
   {
    "type": "h2",
    "text": "A velocidade muda o custo da ambiguidade"
   },
   {
    "type": "scene",
    "id": "five-interfaces",
    "data": {
     "lines": [
      "Quando criar algo era caro, pensar antes era quase obrigatório.",
      "Agora criar é barato.",
      "Podemos gerar cinco interfaces em poucos minutos.",
      "Isso é ótimo para exploração.",
      "Mas cria uma nova pergunta:"
     ],
     "question": "quantas dessas interfaces precisávamos realmente criar?",
     "after": [
      "O designer pode acabar passando mais tempo avaliando possibilidades do que construindo a solução.",
      "Por isso, a habilidade não é simplesmente saber gerar."
     ],
     "punch": "É saber direcionar."
    }
   },
   {
    "type": "h2",
    "text": "Precisão não significa controlar tudo"
   },
   {
    "type": "p",
    "text": "Um bom prompt não precisa dizer para a IA exatamente onde cada botão deve ficar."
   },
   {
    "type": "p",
    "text": "Precisão significa definir aquilo que realmente importa."
   },
   {
    "type": "p",
    "text": "Por exemplo:"
   },
   {
    "type": "p",
    "text": "Objetivo"
   },
   {
    "type": "p",
    "text": "Aumentar a ativação no primeiro uso."
   },
   {
    "type": "p",
    "text": "Usuário"
   },
   {
    "type": "p",
    "text": "Pessoa que acabou de criar uma conta."
   },
   {
    "type": "p",
    "text": "Problema"
   },
   {
    "type": "p",
    "text": "O usuário não entende qual ação deve realizar primeiro."
   },
   {
    "type": "p",
    "text": "Comportamento"
   },
   {
    "type": "p",
    "text": "O sistema deve indicar uma próxima ação clara."
   },
   {
    "type": "p",
    "text": "Restrições"
   },
   {
    "type": "p",
    "text": "Não criar uma nova etapa obrigatória."
   },
   {
    "type": "p",
    "text": "Critério"
   },
   {
    "type": "p",
    "text": "O usuário deve conseguir identificar o próximo passo sem explicação adicional."
   },
   {
    "type": "p",
    "text": "Isso é muito mais útil do que simplesmente:"
   },
   {
    "type": "quote",
    "text": "Faça um onboarding mais intuitivo."
   },
   {
    "type": "h2",
    "text": "O designer precisa aprender a escrever critérios"
   },
   {
    "type": "scene",
    "id": "criteria-morph",
    "data": {
     "lead": "Em vez de apenas dizer:",
     "vague": "Faça melhor.",
     "lead2": "Começar a dizer:",
     "open": "Faça com que...",
     "intro": "Por exemplo:",
     "criteria": [
      "Faça com que o usuário consiga encontrar o filtro principal em menos de cinco segundos.",
      "Faça com que o estado de erro explique o que aconteceu e qual ação pode ser tomada.",
      "Faça com que a tabela possa ser entendida sem precisar abrir cada linha.",
      "Faça com que o CTA principal tenha prioridade visual sobre as ações secundárias."
     ],
     "close": [
      "Essas instruções são muito mais próximas de design de produto.",
      "Porque descrevem comportamento e intenção.",
      "Não apenas aparência."
     ]
    }
   },
   {
    "type": "visual",
    "id": "criteria-rewrite",
    "caption": "Critérios descrevem comportamento e intenção, e dão algo concreto para avaliar o resultado."
   },
   {
    "type": "h2",
    "text": "Prompt é uma forma de pensamento"
   },
   {
    "type": "p",
    "text": "Aprender a escrever bons prompts não deveria significar decorar fórmulas."
   },
   {
    "type": "p",
    "text": "Deveria significar aprender a:"
   },
   {
    "type": "ul",
    "items": [
     "definir problemas",
     "organizar contexto",
     "identificar prioridades",
     "estabelecer restrições",
     "explicar comportamentos",
     "criar critérios",
     "avaliar resultados",
     "iterar"
    ]
   },
   {
    "type": "p",
    "text": "Ou seja, várias coisas que já fazem parte do trabalho de Product Design."
   },
   {
    "type": "p",
    "text": "A IA não elimina essas habilidades."
   },
   {
    "type": "p",
    "text": "Em alguns casos, ela torna essas habilidades ainda mais visíveis."
   },
   {
    "type": "p",
    "text": "Porque agora a distância entre uma ideia e uma solução diminuiu muito."
   },
   {
    "type": "p",
    "text": "E quando a produção fica mais rápida, a qualidade da decisão passa a aparecer ainda mais."
   },
   {
    "type": "h2",
    "text": "Talvez o futuro não seja saber usar melhor a IA"
   },
   {
    "type": "p",
    "text": "Talvez seja saber melhor o que pedir para ela."
   },
   {
    "type": "p",
    "text": "Essa diferença parece pequena."
   },
   {
    "type": "p",
    "text": "Mas muda bastante o papel do designer."
   },
   {
    "type": "p",
    "text": "Antes, uma boa ideia precisava ser traduzida para uma ferramenta."
   },
   {
    "type": "p",
    "text": "Agora, a ferramenta consegue produzir a partir da ideia."
   },
   {
    "type": "scene",
    "id": "intent-morph",
    "data": {
     "lines": [
      "O problema é que uma ideia vaga continua sendo vaga.",
      "A IA pode transformar uma intenção em uma interface.",
      "Mas ainda precisamos saber qual intenção vale a pena transformar em interface.",
      "E talvez esse seja um dos novos diferenciais do Product Designer:",
      "não gerar mais.",
      "Gerar melhor."
     ]
    }
   },
   {
    "type": "visual",
    "id": "intent-loop",
    "caption": "A intenção ganha forma a cada etapa, e a avaliação volta ao problema. Prompt é uma etapa do pensamento, não o fim."
   }
  ],
  "lab": true
 }
];
