/* Série "Product Design, métricas, dashboards, CRO e IA" (artigos 20 a 23): cenas em components/blog/motion/scenes-advanced.tsx. Números das cenas são ilustrativos. */
import type { Post } from "./posts";

export const advancedPosts: Post[] = [
 {
  "slug": "funcionalidade-de-ia-uso-nao-e-valor",
  "title": "Sua funcionalidade de IA está funcionando? Uso não é o mesmo que valor",
  "description": "Cliques e mensagens mostram que as pessoas experimentam. Para saber se a IA ajuda, meça qualidade, resultado da tarefa e sinais de proteção.",
  "date": "2026-10-13",
  "category": "ai",
  "tags": [
   "IA",
   "Métricas",
   "Product Design"
  ],
  "cover": "/blog/funcionalidade-de-ia-uso-nao-e-valor.webp",
  "readMinutes": 4,
  "lab": true,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: fluxos em que modelos, automações e revisão humana trabalham juntos, com critérios de qualidade definidos pelo time."
  },
  "blocks": [
   {
    "type": "p",
    "text": "É tentador avaliar uma funcionalidade de inteligência artificial olhando para quantas pessoas clicam nela, quantas mensagens enviam ou quantas vezes voltam a usá-la."
   },
   {
    "type": "p",
    "text": "Esses números são úteis. Mas não respondem, sozinhos, à pergunta mais importante: a funcionalidade está ajudando as pessoas a alcançar um resultado melhor?"
   },
   {
    "type": "p",
    "text": "Uma pessoa pode experimentar um recurso de IA por curiosidade e nunca mais voltar. Outra pode usá-lo poucas vezes, mas economizar tempo em uma tarefa importante. Se medimos apenas volume de uso, corremos o risco de confundir novidade com valor."
   },
   {
    "type": "h2",
    "text": "Comece pelo trabalho que a pessoa quer realizar"
   },
   {
    "type": "p",
    "text": "Antes de escolher métricas, descreva a tarefa que a funcionalidade pretende melhorar. Em um produto de atendimento, por exemplo, a IA pode resumir uma conversa, sugerir uma resposta ou classificar uma solicitação. Cada ação tem uma finalidade diferente e precisa de critérios próprios."
   },
   {
    "type": "ul",
    "items": [
     "Se a IA resume conversas, avalie se a pessoa compreende o caso mais rápido e se o resumo omite informações críticas.",
     "Se sugere respostas, observe quanto as sugestões são aceitas, editadas ou descartadas, mas também a qualidade da resposta final.",
     "Se classifica solicitações, avalie a precisão, a quantidade de correções humanas e o impacto no tempo de resolução."
    ]
   },
   {
    "type": "p",
    "text": "A métrica precisa estar ligada ao trabalho real, não apenas à presença da IA na interface."
   },
   {
    "type": "h2",
    "text": "Crie uma árvore de métricas"
   },
   {
    "type": "p",
    "text": "Uma estrutura útil separa quatro dimensões:"
   },
   {
    "type": "p",
    "lead": "Descoberta e ativação:",
    "text": "as pessoas encontram o recurso e conseguem completar a primeira tarefa?"
   },
   {
    "type": "p",
    "lead": "Qualidade:",
    "text": "o resultado é correto, útil, relevante e compreensível?"
   },
   {
    "type": "p",
    "lead": "Resultado para o usuário:",
    "text": "a tarefa fica mais rápida, simples ou confiável? A pessoa precisa corrigir muito a saída?"
   },
   {
    "type": "p",
    "lead": "Resultado para o negócio e risco:",
    "text": "há impacto em retenção, custo operacional ou qualidade do serviço? Aumentam erros, retrabalho, reclamações ou necessidade de suporte?"
   },
   {
    "type": "scene",
    "id": "ai-metric-tree",
    "data": {}
   },
   {
    "type": "p",
    "text": "Essa árvore evita que a equipe celebre um alto número de gerações sem verificar se o resultado foi aproveitado."
   },
   {
    "type": "scene",
    "id": "ai-value-dashboard",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Meça também a correção humana"
   },
   {
    "type": "p",
    "text": "Em experiências com IA, o comportamento depois da geração é especialmente importante. Uma resposta copiada sem alterações pode indicar utilidade, mas também pode indicar que a pessoa não percebeu um erro. Uma resposta muito editada pode significar que o recurso ajudou a começar, mas ainda exige bastante trabalho. Uma resposta rejeitada pode revelar baixa relevância, falta de confiança ou apenas que a pessoa queria explorar outra alternativa."
   },
   {
    "type": "scene",
    "id": "human-correction",
    "data": {}
   },
   {
    "type": "p",
    "text": "Interprete sinais em conjunto. Combine eventos de produto com amostras de qualidade revisadas por pessoas, feedback contextual, testes de usabilidade e análise de tarefas. Defina critérios de qualidade antes de olhar os resultados para evitar avaliar a IA apenas pelo que parece convincente."
   },
   {
    "type": "h2",
    "text": "Inclua métricas de proteção"
   },
   {
    "type": "p",
    "text": "Uma funcionalidade pode reduzir o tempo de uma tarefa e, ainda assim, introduzir riscos. Uma sugestão de resposta pode acelerar o atendimento, mas aumentar informações incorretas ou mensagens inadequadas."
   },
   {
    "type": "p",
    "text": "Escolha métricas de proteção relacionadas ao contexto: taxa de correção, escalonamento para uma pessoa, erro crítico, reclamações, retrabalho ou abandono. Nem todas serão relevantes para todos os produtos. O importante é decidir antes do lançamento quais sinais indicariam que a otimização está prejudicando a experiência."
   },
   {
    "type": "h2",
    "text": "Compare com uma linha de base"
   },
   {
    "type": "p",
    "text": "Sem uma linha de base, é difícil dizer se houve melhoria. Antes de lançar, registre como a tarefa funciona hoje: tempo para concluir, taxa de sucesso, quantidade de erros, satisfação ou esforço percebido. Depois, compare com cuidado e considere diferenças de público, complexidade e frequência de uso."
   },
   {
    "type": "p",
    "text": "Quando for possível e apropriado, faça testes controlados. Quando não for, combine análise antes e depois com pesquisa qualitativa e seja transparente sobre as limitações. O comportamento pode mudar com novas versões do modelo, novos contextos e diferentes tipos de solicitação. Monitoramento e avaliação contínua fazem parte do produto."
   },
   {
    "type": "quote",
    "text": "A pergunta não é apenas se as pessoas usam a IA. É se ela ajuda a realizar melhor o trabalho para o qual foi criada."
   }
  ],
  "sources": [
   "Nielsen Norman Group, One AI Output Is an Example, Not an Evaluation: https://www.nngroup.com/articles/one-ai-output-is-an-example-not-an-evaluation/",
   "OpenAI, documentação de avaliações: https://platform.openai.com/docs/guides/evals"
  ]
 },
 {
  "slug": "dashboard-bonito-nao-basta",
  "title": "Dashboard bonito não basta: como desenhar dados que ajudam a decidir",
  "description": "Um painel bem desenhado ainda pode não ajudar ninguém a decidir. Comece pela pergunta, dê contexto ao número e organize pela decisão.",
  "date": "2026-10-13",
  "category": "ux",
  "tags": [
   "Dashboards",
   "Dados",
   "Product Design"
  ],
  "cover": "/blog/dashboard-bonito-nao-basta.webp",
  "readMinutes": 4,
  "lab": true,
  "related": {
   "href": "/cases/intelligence",
   "title": "Clint Intelligence",
   "body": "Na prática: interfaces de produto que transformam dados de operação em sinais que o time consegue interpretar."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Um dashboard pode ter boa hierarquia, gráficos consistentes e uma paleta bem escolhida e, ainda assim, não ajudar ninguém a tomar uma decisão."
   },
   {
    "type": "p",
    "text": "Isso acontece quando o painel mostra o que é fácil medir, mas não deixa claro o que mudou, por que isso importa ou qual pergunta precisa ser investigada."
   },
   {
    "type": "quote",
    "text": "O objetivo de um dashboard de produto não é exibir o máximo de dados. É reduzir o tempo entre perceber um sinal e decidir o que fazer a seguir."
   },
   {
    "type": "h2",
    "text": "Comece pela pergunta de negócio"
   },
   {
    "type": "p",
    "text": "Antes de escolher gráficos, defina quem vai usar o painel e qual decisão precisa tomar. Uma liderança de produto pode precisar entender se a ativação está evoluindo. Growth pode investigar em qual etapa do funil a conversão caiu. Design pode comparar a conclusão de uma tarefa antes e depois de uma mudança."
   },
   {
    "type": "p",
    "text": "Essas perguntas exigem visões diferentes. Um dashboard que tenta responder a tudo acaba sem prioridade clara. Para cada visualização, escreva uma pergunta em linguagem simples. Se não consegue explicar que decisão o gráfico apoia, talvez ele não precise estar no painel principal."
   },
   {
    "type": "h2",
    "text": "Dê contexto ao número"
   },
   {
    "type": "p",
    "text": "“Conversão: 4,2%” deixa perguntas em aberto. Esse número subiu ou caiu? Em relação a qual período? Qual é o tamanho da amostra? A composição do tráfego mudou? Existe uma meta definida? A diferença é relevante para o negócio ou pode ser variação normal?"
   },
   {
    "type": "scene",
    "id": "number-context",
    "data": {}
   },
   {
    "type": "p",
    "text": "Um bom painel ajuda a responder sem obrigar a pessoa a abrir várias ferramentas. Inclua período, comparação relevante, definição da métrica e, quando necessário, volume observado. Evite setas verdes ou vermelhas sem explicar a regra usada para definir melhora ou piora."
   },
   {
    "type": "h2",
    "text": "Escolha o gráfico de acordo com a pergunta"
   },
   {
    "type": "ul",
    "items": [
     "Linha: acompanhar evolução ao longo do tempo.",
     "Barras: comparar categorias ou segmentos.",
     "Funil: mostrar etapas de uma jornada e onde ocorre abandono.",
     "Dispersão: investigar relação entre duas variáveis, sem presumir causalidade.",
     "Tabela: consultar valores precisos ou comparar vários atributos.",
     "Cohort: comparar grupos que começaram em períodos diferentes e acompanhar retenção ou comportamento."
    ]
   },
   {
    "type": "scene",
    "id": "chart-chooser",
    "data": {}
   },
   {
    "type": "p",
    "text": "Não escolha um gráfico porque está na moda ou parece sofisticado. Escolha o formato que torna a comparação mais fácil e não distorce a leitura."
   },
   {
    "type": "h2",
    "text": "Mostre o sinal, mas não finja conhecer a causa"
   },
   {
    "type": "p",
    "text": "Se a conversão caiu depois de uma mudança de interface, existe uma associação temporal. Isso não prova que a mudança causou a queda. O dashboard pode destacar quando o comportamento mudou e permitir segmentar por dispositivo, canal ou tipo de usuário. A causa precisa ser investigada com contexto adicional, validação da instrumentação, pesquisa ou experimentos apropriados."
   },
   {
    "type": "h2",
    "text": "Organize a hierarquia pela importância"
   },
   {
    "type": "p",
    "text": "Uma estrutura possível:"
   },
   {
    "type": "ul",
    "items": [
     "Resultado principal: a métrica que representa o objetivo.",
     "Indicadores explicativos: etapas do funil ou comportamentos associados.",
     "Segmentações relevantes: dispositivo, canal, tipo de usuário ou plano.",
     "Métricas de proteção: sinais de qualidade, erros ou efeitos colaterais.",
     "Detalhamento: tabela ou exploração complementar."
    ]
   },
   {
    "type": "p",
    "text": "A hierarquia deve seguir as decisões da equipe, não uma fórmula visual fixa. Evite encher a primeira tela com cartões que competem entre si."
   },
   {
    "type": "scene",
    "id": "dashboard-hierarchy",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Acessibilidade também melhora a análise"
   },
   {
    "type": "p",
    "text": "Contraste insuficiente, rótulos pequenos, eixos truncados e uso exclusivo de vermelho e verde dificultam a interpretação. Use rótulos diretos, escalas coerentes, unidades visíveis e anotações que expliquem mudanças importantes. Não dependa só da cor para distinguir séries: combine cor com rótulos, formas, padrões ou estilos de linha. Teste a leitura em desktop e mobile."
   },
   {
    "type": "h2",
    "text": "Um dashboard precisa levar a uma próxima ação"
   },
   {
    "type": "p",
    "text": "Uma boa visualização pode terminar com uma pergunta de investigação, não com uma conclusão automática."
   },
   {
    "type": "scene",
    "id": "signal-to-action",
    "data": {
     "cards": [
      {
       "k": "Sinal",
       "v": "a conclusão do onboarding caiu."
      },
      {
       "k": "Contexto",
       "v": "a queda aparece principalmente em dispositivos móveis."
      },
      {
       "k": "Pergunta",
       "v": "houve uma mudança na interação ou no perfil de quem chega pelo mobile?"
      },
      {
       "k": "Próximo passo",
       "v": "verificar eventos, reproduzir o fluxo e observar usuários reais."
      }
     ],
     "close": "O dashboard não substitui análise. Ele ajuda a direcioná-la."
    }
   }
  ],
  "sources": [
   "Nielsen Norman Group, tópico Analytics & Metrics: https://www.nngroup.com/topic/analytics-metrics/",
   "Data Visualization Society: https://www.datavisualizationsociety.org/",
   "W3C, WCAG: https://www.w3.org/WAI/standards-guidelines/wcag/"
  ]
 },
 {
  "slug": "cro-2026-investigar-decisoes",
  "title": "CRO em 2026: pare de testar botões e comece a investigar decisões",
  "description": "Trocar botões não é estratégia. CRO começa por entender quais perguntas impedem a pessoa de avançar e escolher o método certo para investigar.",
  "date": "2026-10-13",
  "category": "growth",
  "tags": [
   "CRO",
   "Experimentos",
   "Growth"
  ],
  "cover": "/blog/cro-2026-investigar-decisoes.webp",
  "readMinutes": 4,
  "lab": true,
  "related": {
   "href": "/cases/acquire",
   "title": "Clint Acquire",
   "body": "Na prática: uma landing page e um fluxo conversacional desenhados a partir do funil e das métricas de conversão."
  },
  "blocks": [
   {
    "type": "p",
    "text": "Otimização de conversão às vezes é reduzida a mudanças pequenas: trocar a cor de um botão, testar um título ou mover o formulário para cima. Essas mudanças podem ser úteis, mas não são uma estratégia completa."
   },
   {
    "type": "p",
    "text": "Uma pessoa converte quando entende a oferta, acredita que ela é relevante, confia no próximo passo e consegue concluir a ação. Cada etapa pode criar dúvidas diferentes."
   },
   {
    "type": "quote",
    "text": "CRO começa com uma investigação sobre o comportamento, não com uma lista de elementos para testar."
   },
   {
    "type": "h2",
    "text": "A conversão é uma sequência de decisões"
   },
   {
    "type": "p",
    "text": "Em uma landing page, a pessoa pode se perguntar: estou no lugar certo? Entendo o que está sendo oferecido? Isso resolve um problema que tenho? Tenho evidências suficientes para confiar? Sei o que vai acontecer se clicar? Vale a pena fornecer meus dados agora?"
   },
   {
    "type": "scene",
    "id": "cro-questions",
    "data": {}
   },
   {
    "type": "p",
    "text": "A ordem e a importância dessas perguntas variam conforme o público, a oferta e o risco percebido. O trabalho de CRO é descobrir quais delas estão impedindo o avanço."
   },
   {
    "type": "h2",
    "text": "Use dados para localizar a fricção"
   },
   {
    "type": "p",
    "text": "Considere o funil:"
   },
   {
    "type": "p",
    "text": "Sessão → CTA clicado → Formulário iniciado → Formulário enviado → Lead qualificado"
   },
   {
    "type": "p",
    "text": "Se muitas pessoas chegam à página, mas poucas clicam no CTA, investigue relevância da mensagem, clareza da proposta e adequação do tráfego. Se clicam e iniciam o formulário, mas não enviam, investigue campos, mensagens de erro, confiança, privacidade e funcionamento técnico. Se os formulários são enviados, mas poucos leads são qualificados, examine a promessa e a origem do tráfego."
   },
   {
    "type": "p",
    "text": "Esses sinais ajudam a escolher onde investigar, mas não provam a causa. Combine análise quantitativa com testes de usabilidade, feedback, gravações de sessão e conversa com o time comercial, respeitando privacidade e consentimento."
   },
   {
    "type": "scene",
    "id": "cro-investigation-map",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Escreva hipóteses que possam ser refutadas"
   },
   {
    "type": "p",
    "text": "Uma hipótese útil não é “a página precisa ser mais moderna”. Ela explica um comportamento e prevê um resultado observável."
   },
   {
    "type": "scene",
    "id": "hypothesis-card",
    "data": {}
   },
   {
    "type": "p",
    "text": "O teste pode confirmar ou rejeitar a hipótese. Se o resultado não mudar, a equipe precisa rever a explicação, a relevância do campo ou o diagnóstico inicial."
   },
   {
    "type": "h2",
    "text": "Nem todo site tem tráfego suficiente para A/B testing"
   },
   {
    "type": "p",
    "text": "Testes A/B podem ser valiosos, mas exigem volume, instrumentação confiável e um plano de análise. Em páginas com pouco tráfego, um teste pode demorar muito para detectar um efeito, especialmente quando a diferença esperada é pequena."
   },
   {
    "type": "p",
    "text": "Nesses casos, não invente certeza estatística. Testes de usabilidade, entrevistas, revisão heurística, análise de funil e feedback contextual podem identificar problemas evidentes antes de investir em um experimento. Esses métodos não substituem a medição causal de um teste controlado, mas ajudam a reduzir incerteza e melhorar a próxima hipótese."
   },
   {
    "type": "h2",
    "text": "Personalização precisa resolver uma diferença real"
   },
   {
    "type": "p",
    "text": "Personalizar uma página por canal, segmento ou intenção pode melhorar a relevância, mas também aumenta a complexidade. Se a equipe cria muitas variantes sem volume suficiente, fica difícil entender qual mudança fez diferença. Se a personalização usa dados sensíveis ou surpreende a pessoa, pode prejudicar confiança."
   },
   {
    "type": "p",
    "text": "Comece por diferenças relevantes e observáveis, como a mensagem associada a uma campanha ou as necessidades de públicos com tarefas distintas. Explique o que é necessário, respeite privacidade e avalie o resultado por segmento, sem assumir que uma variante serve para todos."
   },
   {
    "type": "h2",
    "text": "Otimize valor, não apenas o clique"
   },
   {
    "type": "p",
    "text": "Um CTA pode receber mais cliques e ainda assim gerar menos oportunidades qualificadas. Uma página pode aumentar leads, mas elevar spam ou reduzir a taxa de comparecimento às reuniões."
   },
   {
    "type": "p",
    "text": "Defina a conversão principal e acompanhe o que acontece depois dela. O objetivo é melhorar o resultado do negócio sem deteriorar a experiência ou a qualidade."
   },
   {
    "type": "p",
    "text": "CRO maduro não é uma competição para lançar mais variantes. É a capacidade de encontrar a barreira certa, escolher um método adequado e transformar evidências em uma decisão."
   }
  ],
  "sources": [
   "Unbounce, Conversion Benchmark Report: https://unbounce.com/conversion-benchmark-report/",
   "Nielsen Norman Group, Analytics & Metrics: https://www.nngroup.com/topic/analytics-metrics/",
   "GOV.UK Service Manual, A/B testing: https://www.gov.uk/service-manual/agile-delivery/how-to-set-up-and-run-an-ab-test"
  ]
 },
 {
  "slug": "provar-impacto-de-ux-sem-roi",
  "title": "Como provar o impacto de UX sem transformar tudo em ROI",
  "description": "Mostrar dois números lado a lado não prova impacto. Linha de base, métricas certas e honestidade sobre o que os dados permitem concluir.",
  "date": "2026-10-13",
  "category": "ux",
  "tags": [
   "UX",
   "Métricas",
   "Impacto"
  ],
  "cover": "/blog/provar-impacto-de-ux-sem-roi.webp",
  "readMinutes": 4,
  "lab": true,
  "related": {
   "href": "/cases/acquire",
   "title": "Clint Acquire",
   "body": "Na prática: decisões de produto e de conversão acompanhadas por métricas definidas antes da entrega."
  },
  "blocks": [
   {
    "type": "p",
    "text": "UX precisa demonstrar valor para o negócio. Mas existe uma diferença entre medir resultados, acompanhar indicadores de experiência e atribuir causalidade a uma mudança."
   },
   {
    "type": "p",
    "text": "Às vezes, uma apresentação mostra que uma métrica melhorou depois de um redesign e conclui que o redesign gerou o resultado. A relação pode ser plausível, mas outras mudanças também podem ter contribuído: campanha, sazonalidade, preço, perfil de tráfego, mudança comercial ou evolução do produto."
   },
   {
    "type": "p",
    "text": "Provar impacto exige mais do que colocar dois números lado a lado."
   },
   {
    "type": "h2",
    "text": "Defina uma linha de base antes de começar"
   },
   {
    "type": "p",
    "text": "Antes de alterar um fluxo, registre como ele funciona hoje. A linha de base pode incluir taxa de conclusão, tempo de tarefa, erros, pedidos de suporte, conversão, retenção ou satisfação, dependendo do problema."
   },
   {
    "type": "p",
    "text": "Defina também a população, o período e a forma de cálculo. “A conversão melhorou” é incompleto se não sabemos qual evento representa conversão, qual é o denominador e quais usuários foram incluídos. Quando possível, mantenha consistência na instrumentação e documente alterações no tracking."
   },
   {
    "type": "h2",
    "text": "Conecte métricas de UX a resultados de produto"
   },
   {
    "type": "p",
    "text": "Uma estrutura prática conecta três níveis:"
   },
   {
    "type": "p",
    "lead": "Experiência:",
    "text": "a pessoa consegue completar a tarefa? Quantos erros comete? Quanto esforço relata?"
   },
   {
    "type": "p",
    "lead": "Comportamento do produto:",
    "text": "conclui onboarding, utiliza a funcionalidade principal, retorna ou abandona?"
   },
   {
    "type": "p",
    "lead": "Resultado de negócio:",
    "text": "há impacto em ativação, retenção, custo de suporte, receita ou oportunidades qualificadas?"
   },
   {
    "type": "p",
    "text": "A conexão não é automática. Uma redução no tempo de tarefa pode ser positiva, mas também pode indicar que a pessoa pulou uma etapa importante. Um aumento de cliques pode significar interesse ou dificuldade para encontrar a ação correta. Interprete as métricas com contexto."
   },
   {
    "type": "scene",
    "id": "ux-impact-evidence",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Escolha métricas que representem a mudança"
   },
   {
    "type": "p",
    "text": "Se o projeto busca simplificar um formulário, a taxa de conclusão pode ser uma métrica principal. Tempo de preenchimento e erros podem ajudar a explicar o comportamento. Qualidade dos leads pode funcionar como métrica de proteção."
   },
   {
    "type": "p",
    "text": "Se o objetivo é melhorar onboarding, talvez seja mais útil medir a proporção de novos usuários que chegam ao primeiro momento de valor do que medir quantos concluíram cada tela. A definição de “momento de valor” deve ser coerente com o produto e validada com evidências."
   },
   {
    "type": "p",
    "text": "Evite escolher uma métrica só porque ela subiu. Escolha a métrica que representa o problema que a equipe pretende resolver."
   },
   {
    "type": "h2",
    "text": "Separe evidência de atribuição"
   },
   {
    "type": "scene",
    "id": "evidence-methods",
    "data": {}
   },
   {
    "type": "p",
    "text": "Esses métodos se complementam. Não é necessário que todo projeto de UX tenha um experimento A/B, mas é necessário descrever honestamente o que os dados permitem concluir."
   },
   {
    "type": "h2",
    "text": "Transforme o resultado em uma narrativa clara"
   },
   {
    "type": "p",
    "text": "Ao apresentar o impacto, organize a história:"
   },
   {
    "type": "scene",
    "id": "impact-narrative",
    "data": {}
   },
   {
    "type": "p",
    "text": "Essa estrutura ajuda stakeholders a entender o raciocínio, não apenas o número final. Se os dados são confidenciais, use intervalos ou índices normalizados apenas quando isso não distorcer a interpretação, e deixe explícito que os valores foram normalizados."
   },
   {
    "type": "h2",
    "text": "ROI de UX não é uma fórmula mágica"
   },
   {
    "type": "p",
    "text": "Pode ser possível estimar retorno financeiro quando há uma relação bem definida entre a mudança e custos ou receitas. Por exemplo, uma redução verificada no volume de chamados pode ser relacionada ao custo médio de atendimento, desde que as premissas estejam claras."
   },
   {
    "type": "p",
    "text": "Mas nem todo benefício de UX pode ser convertido com confiança em reais. Clareza, acessibilidade, confiança, redução de risco e qualidade de decisão também importam. Quando o cálculo financeiro não é sólido, é melhor apresentar evidências de experiência e comportamento do que forçar um ROI artificial."
   },
   {
    "type": "p",
    "text": "O papel de métricas não é fazer o trabalho de UX parecer importante a qualquer custo. É tornar mais claro qual problema foi resolvido, para quem, com quais evidências e quais limitações."
   }
  ],
  "sources": [
   "Nielsen Norman Group, Stop Reporting UX Activity and Report Business Outcomes: https://www.nngroup.com/articles/stop-reporting-ux-activity/",
   "Nielsen Norman Group, Your New UX Habit: Establishing Baselines for Impact: https://www.nngroup.com/articles/establish-baselines-impact/",
   "Nielsen Norman Group, tópico Analytics & Metrics: https://www.nngroup.com/topic/analytics-metrics/"
  ]
 }
];
