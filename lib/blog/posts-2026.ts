/* Série "UX, Product Design e tendências atuais" (artigos 24 a 27): cenas em components/blog/motion/scenes-2026.tsx. Exemplos das cenas são hipotéticos. */
import type { Post } from "./posts";

export const trendPosts: Post[] = [
 {
  "slug": "ia-agentes-ux-desenhar-limites",
  "title": "Quando a IA começa a agir pelo usuário, UX precisa desenhar limites",
  "description": "Quando a IA executa tarefas, o usuário precisa entender o que ela fará, acompanhar o que fez e conseguir interromper ou corrigir.",
  "date": "2026-10-13",
  "category": "ai",
  "tags": [
   "IA",
   "Agentes",
   "UX"
  ],
  "readMinutes": 4,
  "lab": true,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: fluxos em que agentes de IA, automações e revisão humana trabalham com limites e estados visíveis."
  },
  "blocks": [
   {
    "type": "p",
    "text": "A mudança mais importante em uma experiência com inteligência artificial nem sempre acontece quando a resposta fica mais natural. Ela acontece quando o sistema deixa de apenas responder e começa a executar tarefas."
   },
   {
    "type": "p",
    "text": "Uma IA que sugere opções funciona de um jeito. Um agente que pesquisa, compara, preenche formulários ou inicia uma compra exige outro tipo de experiência."
   },
   {
    "type": "p",
    "text": "A pergunta de design deixa de ser apenas “a resposta é boa?” e passa a incluir: o usuário entende o que o sistema vai fazer, o que já fez e como pode interromper ou corrigir a ação?"
   },
   {
    "type": "h2",
    "text": "Responder e agir são experiências diferentes"
   },
   {
    "type": "p",
    "text": "Em uma interface tradicional, a pessoa escolhe uma ação e o sistema responde. Em uma experiência com agente, a pessoa pode declarar um objetivo enquanto o sistema decide quais etapas executar."
   },
   {
    "type": "p",
    "text": "Isso pode reduzir trabalho repetitivo, mas também cria dúvidas:"
   },
   {
    "type": "ul",
    "items": [
     "Que informações o agente está usando?",
     "Pode tomar uma decisão sem pedir confirmação?",
     "O que acontece se interpretar o objetivo errado?",
     "Como revisar o que foi feito?",
     "Como cancelar uma ação ou voltar atrás?",
     "Quem responde quando algo dá errado?"
    ]
   },
   {
    "type": "p",
    "text": "Se a interface não responde a essas perguntas, a automação pode parecer conveniente no início e imprevisível quando algo importante acontece."
   },
   {
    "type": "h2",
    "text": "Desenhe níveis de autonomia"
   },
   {
    "type": "p",
    "text": "Uma forma prática de projetar a experiência é separar ações em níveis:"
   },
   {
    "type": "p",
    "lead": "1. Sugerir.",
    "text": "O agente apresenta uma recomendação, mas a pessoa decide."
   },
   {
    "type": "p",
    "lead": "2. Preparar.",
    "text": "O agente preenche campos ou monta uma proposta, mas espera revisão."
   },
   {
    "type": "p",
    "lead": "3. Executar com confirmação.",
    "text": "O agente explica a ação e pede autorização antes de realizá-la."
   },
   {
    "type": "p",
    "lead": "4. Executar dentro de regras acordadas.",
    "text": "A pessoa define limites antecipadamente e quando o sistema precisa pedir confirmação."
   },
   {
    "type": "p",
    "text": "Esse modelo é uma ferramenta de design, não um padrão universal. O nível adequado depende do impacto, da reversibilidade e do risco. Organizar uma lista é diferente de transferir dinheiro, cancelar um serviço ou enviar uma mensagem em nome da pessoa."
   },
   {
    "type": "scene",
    "id": "autonomy-ladder",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Confirmação precisa acontecer no momento certo"
   },
   {
    "type": "p",
    "text": "Pedir confirmação para cada pequeno passo torna a experiência cansativa. Não pedir confirmação para ações irreversíveis pode criar riscos."
   },
   {
    "type": "p",
    "text": "Considere três fatores:"
   },
   {
    "type": "ul",
    "items": [
     "Impacto: qual é a consequência se a ação estiver errada?",
     "Reversibilidade: é fácil desfazer?",
     "Ambiguidade: o objetivo e os dados necessários estão claros?"
    ]
   },
   {
    "type": "p",
    "text": "Quanto maior o impacto e menor a reversibilidade, mais importante é explicar a ação e obter confirmação explícita. Para ações de baixo risco e reversíveis, pode fazer sentido permitir execução automática, desde que a pessoa consiga acompanhar o que aconteceu."
   },
   {
    "type": "scene",
    "id": "confirmation-dial",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Mostre o estado da tarefa"
   },
   {
    "type": "p",
    "text": "Uma mensagem vaga como “trabalhando...” não ajuda quando o agente executa várias etapas. Quando for útil e seguro, mostre etapas compreensíveis: encontrando opções, comparando critérios, preparando uma recomendação, aguardando confirmação e concluindo a ação."
   },
   {
    "type": "p",
    "text": "A interface precisa distinguir uma etapa concluída, uma hipótese, uma ação pendente e um erro. Não apresente uma tarefa como concluída se o agente apenas preparou uma sugestão."
   },
   {
    "type": "scene",
    "id": "agent-task-state",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Projete para falhas e recuperação"
   },
   {
    "type": "p",
    "text": "O agente pode interpretar mal uma instrução, encontrar dados incompletos ou concluir uma ação parcialmente. Boas práticas incluem:"
   },
   {
    "type": "ul",
    "items": [
     "Mostrar qual etapa falhou",
     "Separar o que foi concluído do que continua pendente",
     "Oferecer uma forma clara de tentar novamente",
     "Permitir editar os dados antes de repetir",
     "Evitar executar duas vezes uma ação já concluída",
     "Registrar um resumo das ações realizadas",
     "Disponibilizar cancelamento ou reversão quando possível."
    ]
   },
   {
    "type": "p",
    "text": "A experiência de erro faz parte do produto, não é um detalhe para resolver depois do lançamento."
   },
   {
    "type": "h2",
    "text": "Checklist antes de lançar"
   },
   {
    "type": "p",
    "text": "Teste com usuários se eles entendem quais ações o agente pode realizar, quando haverá confirmação, como revisar informações, como interromper o processo e como recuperar-se de um erro. Inclua cenários de instruções ambíguas, interrupção de conexão, resultados parciais e ações fora dos limites definidos."
   },
   {
    "type": "p",
    "text": "A qualidade de uma experiência com agentes não depende apenas de quantas tarefas automatiza. Depende de a pessoa conseguir delegar sem perder a compreensão e o controle sobre o que importa."
   }
  ],
  "sources": [
   "Nielsen Norman Group, tópicos sobre IA e interação humano-computador: https://www.nngroup.com/topic/artificial-intelligence/",
   "OpenAI, documentação de avaliações de sistemas com IA: https://platform.openai.com/docs/guides/evals",
   "W3C, WCAG: https://www.w3.org/WAI/standards-guidelines/wcag/"
  ],
  "cover": "/blog/ia-agentes-ux-desenhar-limites.webp"
 },
 {
  "slug": "descoberta-de-produtos-pesquisa-com-ia",
  "title": "A descoberta de produtos está mudando: como desenhar experiências para quem pesquisa com IA",
  "description": "Parte da descoberta acontece fora do seu site, em buscas e assistentes de IA. Informação clara e consistente ajuda pessoas e sistemas a decidir.",
  "date": "2026-10-13",
  "category": "growth",
  "tags": [
   "Descoberta",
   "IA",
   "Arquitetura da informação",
   "Conteúdo"
  ],
  "readMinutes": 4,
  "lab": true,
  "related": {
   "href": "/cases/whatsapp-next",
   "title": "WhatsApp Next",
   "body": "Na prática: blog, landing page e campanha contando a mesma história em todos os pontos de contato."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Durante muito tempo, a descoberta digital seguia um caminho conhecido: a pessoa pesquisava, abria resultados, comparava páginas e chegava a uma decisão."
   },
   {
    "type": "p",
    "text": "Esse caminho continua existindo, mas convive com novas formas de busca e assistência. Pessoas podem pedir a uma IA que compare alternativas, resuma características ou ajude a entender qual solução combina com suas necessidades."
   },
   {
    "type": "p",
    "text": "Para quem trabalha com UX e conteúdo, isso cria uma questão importante: como ajudar alguém a tomar uma boa decisão quando parte da descoberta acontece fora da interface do produto?"
   },
   {
    "type": "h2",
    "text": "A jornada não começa necessariamente no seu site"
   },
   {
    "type": "p",
    "text": "Uma pessoa pode chegar à página de um produto depois de ler uma comparação gerada por IA, receber uma recomendação ou consultar um resumo. Pode entrar com uma hipótese sobre o produto, mas também trazer uma expectativa incompleta ou incorreta."
   },
   {
    "type": "p",
    "text": "Isso torna a coerência entre canais ainda mais importante. A página precisa confirmar rapidamente o que o produto faz, para quem é indicado, quais são suas limitações e o que diferencia a oferta."
   },
   {
    "type": "p",
    "text": "Não se trata de escrever para agradar a um algoritmo. Trata-se de tornar a informação clara, consistente e verificável para pessoas e sistemas que tentam interpretá-la."
   },
   {
    "type": "scene",
    "id": "discovery-map",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Organize o conteúdo para responder a perguntas reais"
   },
   {
    "type": "p",
    "text": "Em vez de produzir páginas cheias de adjetivos, identifique as perguntas que ajudam o público a decidir. Para um SaaS, por exemplo:"
   },
   {
    "type": "ul",
    "items": [
     "Que problema resolve e para quem?",
     "Como funciona no dia a dia?",
     "Com quais ferramentas se integra?",
     "Quais são os limites?",
     "Quanto custa e o que está incluído?",
     "Como é feita a migração?",
     "Como são tratados os dados?",
     "Que suporte existe?"
    ]
   },
   {
    "type": "p",
    "text": "As respostas devem ser específicas e consistentes com o produto. Quando uma informação não estiver disponível, não invente. Explique o que é conhecido e encaminhe para a fonte apropriada."
   },
   {
    "type": "h2",
    "text": "Não esconda limitações atrás de uma promessa de marketing"
   },
   {
    "type": "p",
    "text": "Quando uma IA resume uma página, nuances podem desaparecer. Informações essenciais não devem ficar espalhadas em textos vagos ou escondidas em elementos difíceis de encontrar."
   },
   {
    "type": "p",
    "text": "Use títulos descritivos, tabelas comparativas quando fizerem sentido, listas de requisitos, exemplos de uso e explicações claras de limitações. Em páginas de preço, deixe explícito o que cada plano inclui. Em páginas de funcionalidades, diferencie o que já está disponível do que está planejado."
   },
   {
    "type": "p",
    "text": "Isso também ajuda pessoas que não usam IA. Uma boa arquitetura de informação melhora a compreensão em qualquer canal."
   },
   {
    "type": "h2",
    "text": "Desenhe comparações que apoiem decisões"
   },
   {
    "type": "p",
    "text": "Uma tabela de comparação útil não precisa listar dezenas de recursos. Ela deve destacar critérios relevantes para a escolha."
   },
   {
    "type": "ul",
    "items": [
     "Identifique os critérios que realmente diferenciam as opções.",
     "Explique termos técnicos em linguagem simples.",
     "Mostre limites e condições, não apenas vantagens.",
     "Permita comparar sem perder o contexto da página.",
     "Não destaque visualmente uma opção que não atende à necessidade.",
     "Teste se as pessoas conseguem justificar a escolha com base nas informações disponíveis."
    ]
   },
   {
    "type": "p",
    "text": "A meta é reduzir o esforço de comparação, não empurrar todo mundo para o plano mais caro."
   },
   {
    "type": "scene",
    "id": "decision-comparison",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Meça qualidade da descoberta, não apenas tráfego"
   },
   {
    "type": "p",
    "text": "Combine indicadores quantitativos e qualitativos: buscas internas sem resultado, caminhos até a conversão, cliques em comparações e documentação, perguntas recorrentes para suporte ou vendas, dúvidas observadas em testes e qualidade dos leads por canal, quando a atribuição for confiável."
   },
   {
    "type": "p",
    "text": "Não atribua automaticamente uma conversão a uma ferramenta de IA só porque a pessoa diz que a utilizou. A atribuição pode ser incompleta. Use pesquisas de origem, dados analíticos e feedback, deixando claras as limitações."
   },
   {
    "type": "h2",
    "text": "Conteúdo claro é parte da experiência do produto"
   },
   {
    "type": "p",
    "text": "A página de marketing, a documentação, a central de ajuda e a interface precisam contar a mesma história. Se cada canal descreve uma funcionalidade de forma diferente, a pessoa terá dificuldade para entender o que é real."
   },
   {
    "type": "p",
    "text": "Monte uma matriz simples: pergunta do usuário, resposta disponível, fonte responsável pela informação e lugar onde a resposta aparece. Isso ajuda a encontrar lacunas e contradições antes de tentar resolver tudo com mais conteúdo."
   },
   {
    "type": "scene",
    "id": "answer-matrix",
    "data": {}
   },
   {
    "type": "p",
    "text": "A descoberta mediada por IA não elimina a necessidade de UX. Ela aumenta a importância de informações claras, consistentes e úteis para a decisão."
   }
  ],
  "sources": [
   "Google Search Central, conteúdo útil e confiável: https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
   "Google Search Central, dados estruturados: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
   "Nielsen Norman Group, arquitetura da informação: https://www.nngroup.com/topic/information-architecture/"
  ],
  "cover": "/blog/descoberta-de-produtos-pesquisa-com-ia.webp"
 },
 {
  "slug": "personalizacao-sem-contexto-piora-experiencia",
  "title": "Personalização sem contexto pode piorar a experiência",
  "description": "Personalizar não é automaticamente útil. Use contexto relevante, explique recomendações e deixe a pessoa corrigir o que o sistema supôs.",
  "date": "2026-10-13",
  "category": "ux",
  "tags": [
   "Personalização",
   "UX",
   "Privacidade"
  ],
  "readMinutes": 4,
  "lab": true,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: recomendações e automações que mostram o porquê e podem ser ajustadas por quem usa."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Personalizar uma experiência parece uma escolha óbvia: se o produto conhece a pessoa, pode mostrar conteúdo mais relevante, antecipar necessidades e reduzir etapas."
   },
   {
    "type": "p",
    "text": "Mas personalização não é automaticamente útil. Uma recomendação pode parecer invasiva, uma interface pode esconder opções importantes e uma automação pode reforçar uma suposição errada sobre o usuário."
   },
   {
    "type": "p",
    "text": "O desafio não é personalizar o máximo possível. É decidir quando a personalização ajuda, quais dados justificam essa decisão e como a pessoa mantém controle sobre a experiência."
   },
   {
    "type": "h2",
    "text": "Personalização precisa resolver um problema"
   },
   {
    "type": "p",
    "text": "Antes de criar uma experiência personalizada, descreva o benefício esperado: reduzir o tempo para encontrar uma funcionalidade, destacar conteúdo relevante para uma tarefa, lembrar uma preferência escolhida ou evitar que alguém repita informações."
   },
   {
    "type": "p",
    "text": "Se não existe um benefício claro, personalizar pode apenas adicionar complexidade ao produto."
   },
   {
    "type": "h2",
    "text": "Diferencie preferência declarada de comportamento inferido"
   },
   {
    "type": "p",
    "text": "Existe uma diferença entre a pessoa escolher que prefere notificações semanais e o sistema inferir que ela quer receber mais mensagens porque abriu várias notificações."
   },
   {
    "type": "p",
    "text": "Preferências declaradas geralmente são mais fáceis de explicar e corrigir. Inferências comportamentais podem estar erradas ou perder validade com o tempo."
   },
   {
    "type": "p",
    "text": "Quando uma personalização depende de uma inferência importante, dê à pessoa uma forma de entender, ajustar ou desativar a escolha. Evite apresentar suposições como fatos."
   },
   {
    "type": "scene",
    "id": "declared-inferred",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Não transforme personalização em uma caixa-preta"
   },
   {
    "type": "p",
    "text": "Se a interface muda sem explicação, a pessoa pode acreditar que perdeu uma funcionalidade ou que o produto está inconsistente."
   },
   {
    "type": "p",
    "text": "Algumas práticas ajudam:"
   },
   {
    "type": "ul",
    "items": [
     "Explique por que uma recomendação aparece quando isso influencia a decisão",
     "Permita alterar filtros ou preferências",
     "Mantenha acesso às opções importantes",
     "Ofereça uma forma de corrigir recomendações ruins",
     "Evite esconder informações essenciais em nome de uma experiência “mais simples”",
     "Indique quando o conteúdo é patrocinado ou influenciado por interesses comerciais."
    ]
   },
   {
    "type": "p",
    "text": "Personalização deve apoiar a autonomia, não reduzir escolhas sem que a pessoa perceba."
   },
   {
    "type": "scene",
    "id": "personalization-loop",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Cuidado com o ciclo de feedback"
   },
   {
    "type": "p",
    "text": "Sistemas de recomendação podem reforçar os próprios resultados. Se uma pessoa recebe mais conteúdo de um tipo, passa a interagir mais com ele porque é o que está visível. O sistema pode interpretar esse comportamento como preferência definitiva e reduzir a variedade ainda mais."
   },
   {
    "type": "p",
    "text": "Avalie não só cliques e tempo de uso, mas também relevância percebida, diversidade de resultados, capacidade de encontrar alternativas e facilidade para corrigir recomendações. As métricas devem refletir o contexto do produto e o risco de estreitar as opções."
   },
   {
    "type": "scene",
    "id": "feedback-narrowing",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Meça valor e efeitos colaterais"
   },
   {
    "type": "p",
    "text": "Uma experiência personalizada pode aumentar cliques e ainda assim piorar satisfação ou descoberta de alternativas. Defina uma métrica principal ligada ao objetivo e métricas de proteção ligadas a possíveis danos."
   },
   {
    "type": "p",
    "text": "Exemplo hipotético para uma plataforma de conteúdo:"
   },
   {
    "type": "ul",
    "items": [
     "Objetivo: ajudar as pessoas a encontrar conteúdo relevante.",
     "Métrica principal: proporção de sessões em que a pessoa encontra e abre conteúdo que considera útil.",
     "Métricas de proteção: diversidade de temas, recomendações ocultadas, feedback negativo e facilidade de encontrar conteúdo fora das recomendações."
    ]
   },
   {
    "type": "p",
    "text": "Não use essas métricas como receita universal. Adapte-as ao trabalho do usuário e valide se refletem uma boa experiência."
   },
   {
    "type": "h2",
    "text": "Dê controle sem transformar configurações em um labirinto"
   },
   {
    "type": "p",
    "text": "Controle não significa expor dezenas de opções em uma tela complexa. Significa permitir que a pessoa compreenda e altere decisões importantes."
   },
   {
    "type": "p",
    "text": "Comece com controles simples, como “mostrar menos deste tipo”, “não usar esta preferência” ou “editar meus interesses”, quando forem adequados ao produto. Explique o efeito de cada controle e dê feedback depois da mudança."
   },
   {
    "type": "p",
    "text": "Teste se as pessoas entendem por que receberam uma recomendação e se conseguem corrigir o resultado. Se o controle existe tecnicamente, mas ninguém consegue encontrá-lo, ele não está resolvendo o problema."
   },
   {
    "type": "p",
    "text": "Personalização bem projetada não é aquela que sabe mais sobre a pessoa. É aquela que usa contexto relevante de maneira útil, transparente e corrigível."
   }
  ],
  "sources": [
   "Comissão Europeia, proteção de dados e GDPR: https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en",
   "W3C, WCAG: https://www.w3.org/WAI/standards-guidelines/wcag/",
   "Nielsen Norman Group: https://www.nngroup.com/"
  ],
  "cover": "/blog/personalizacao-sem-contexto-piora-experiencia.webp"
 },
 {
  "slug": "acessibilidade-qualidade-de-produto",
  "title": "Acessibilidade não é uma auditoria no fim do projeto. É qualidade de produto.",
  "description": "Acessibilidade tratada só no fim vira lista de correções. Inclua no briefing, no design system e nos testes com pessoas.",
  "date": "2026-10-13",
  "category": "ux",
  "tags": [
   "Acessibilidade",
   "Design Systems",
   "Qualidade"
  ],
  "readMinutes": 4,
  "lab": true,
  "related": {
   "href": "/cases/scale",
   "title": "Clint Scale",
   "body": "Na prática: um design system com tokens, estados e componentes documentados para manter consistência em escala."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Acessibilidade costuma aparecer tarde no processo: depois que o layout está pronto, quando alguém revisa contraste, adiciona um atributo ou tenta navegar usando teclado."
   },
   {
    "type": "p",
    "text": "Esse caminho transforma acessibilidade em uma lista de correções e aumenta a chance de descobrir problemas estruturais quando já existe pouco tempo para mudar a interface."
   },
   {
    "type": "p",
    "text": "A abordagem mais útil é tratar acessibilidade como parte da qualidade do produto desde a definição do problema até a validação da solução."
   },
   {
    "type": "h2",
    "text": "Comece pelo fluxo, não apenas pelo componente"
   },
   {
    "type": "p",
    "text": "Um botão pode ter contraste adequado e ainda ser difícil de usar se o foco do teclado não aparece, se o rótulo não explica a ação ou se o estado de carregamento não é anunciado para tecnologias assistivas."
   },
   {
    "type": "p",
    "text": "Avaliar componentes isolados não é suficiente. Observe o fluxo completo: como a pessoa chega à tarefa, entende o conteúdo, interage, recebe feedback, corrige erros e conclui a ação."
   },
   {
    "type": "p",
    "text": "A acessibilidade está na combinação de conteúdo, comportamento, estrutura semântica, foco, estados e tecnologia utilizada."
   },
   {
    "type": "scene",
    "id": "flow-not-component",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Inclua acessibilidade no briefing"
   },
   {
    "type": "p",
    "text": "Antes de desenhar, registre perguntas como:"
   },
   {
    "type": "ul",
    "items": [
     "O fluxo pode ser concluído sem mouse?",
     "Os campos têm rótulos compreensíveis?",
     "A ordem de foco acompanha a ordem de leitura?",
     "O erro explica como corrigir o problema?",
     "A informação é compreensível sem depender só de cor?",
     "O conteúdo continua legível com zoom?",
     "As animações podem ser reduzidas?",
     "Os componentes têm estados de foco, erro, sucesso e desabilitado?",
     "O conteúdo é compatível com leitores de tela?"
    ]
   },
   {
    "type": "p",
    "text": "Nem toda pergunta terá a mesma relevância em todos os projetos, mas elas ajudam a evitar que acessibilidade seja tratada como ajuste visual no final."
   },
   {
    "type": "h2",
    "text": "Contraste é importante, mas não é tudo"
   },
   {
    "type": "p",
    "text": "Contraste, foco visível, tamanho e espaçamento afetam a legibilidade. Mas conformidade depende de critérios e contextos específicos, como tamanho do texto, tipo de componente e conteúdo."
   },
   {
    "type": "p",
    "text": "Use ferramentas de contraste como apoio, não como única validação. Verifique hierarquia, zoom, foco, navegação por teclado, semântica, mensagens de estado e comportamento em diferentes dispositivos."
   },
   {
    "type": "p",
    "text": "Não declare que uma interface está “100% acessível” porque passou por um plugin ou auditoria automática. Ferramentas automáticas identificam alguns problemas, mas não substituem testes manuais e avaliação com pessoas."
   },
   {
    "type": "h2",
    "text": "Design system pode prevenir problemas em escala"
   },
   {
    "type": "p",
    "text": "Se cada time implementa foco, erro, modal, campo e mensagem de sucesso de uma forma, a consistência fica difícil de manter."
   },
   {
    "type": "p",
    "text": "Um design system pode incluir:"
   },
   {
    "type": "ul",
    "items": [
     "Tokens de cor validados para usos específicos",
     "Estados de foco e interação",
     "Padrões de formulário e mensagens de erro",
     "Componentes com semântica e comportamento documentados",
     "Diretrizes de teclado e leitores de tela",
     "Exemplos de uso correto e incorreto",
     "Critérios de validação antes de publicar mudanças."
    ]
   },
   {
    "type": "p",
    "text": "Documentar não basta. É importante testar os componentes no código real e revisar como se comportam em fluxos completos."
   },
   {
    "type": "scene",
    "id": "a11y-quality-loop",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Teste com pessoas e tecnologias diferentes"
   },
   {
    "type": "p",
    "text": "Uma avaliação prática pode combinar navegação por teclado, leitor de tela, zoom, checagem de contraste, auditoria automática e testes de tarefas com pessoas com diferentes necessidades de acesso."
   },
   {
    "type": "p",
    "text": "Essas abordagens encontram tipos diferentes de problema. Uma auditoria automática pode sinalizar ausência de nome acessível, mas não determina sozinha se o texto ajuda a pessoa a concluir a tarefa. Um teste de usabilidade pode revelar confusão no fluxo que não aparece em uma lista técnica."
   },
   {
    "type": "p",
    "text": "Planeje tempo para corrigir e retestar. Encontrar um problema sem validar a correção deixa o trabalho incompleto."
   },
   {
    "type": "scene",
    "id": "a11y-methods",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Meça acessibilidade como parte da qualidade"
   },
   {
    "type": "p",
    "text": "Não existe uma única métrica que represente toda a acessibilidade. Escolha indicadores ligados aos riscos e tarefas do produto, como conclusão de uma tarefa usando teclado, erros em formulários, sucesso em tarefas com leitor de tela ou barreiras críticas identificadas e corrigidas."
   },
   {
    "type": "p",
    "text": "Use essas medidas com cuidado: o resultado de uma sessão pequena não representa automaticamente todas as pessoas com deficiência. Combine indicadores, auditorias e feedback e registre quais cenários foram avaliados."
   },
   {
    "type": "p",
    "text": "Acessibilidade não é apenas conformidade. É garantir que mais pessoas consigam entender, navegar e usar o produto com autonomia."
   }
  ],
  "sources": [
   "W3C, Web Content Accessibility Guidelines: https://www.w3.org/WAI/standards-guidelines/wcag/",
   "W3C, WAI Tutorials: https://www.w3.org/WAI/tutorials/",
   "W3C, Accessibility Fundamentals: https://www.w3.org/WAI/fundamentals/"
  ],
  "cover": "/blog/acessibilidade-qualidade-de-produto.webp"
 }
];
