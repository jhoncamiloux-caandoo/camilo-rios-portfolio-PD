/* Série "Métricas, CRO e Landing Pages": cenas em components/blog/motion/scenes-cro.tsx. Exemplos numéricos são ilustrativos. */
import type { Post } from "./posts";

export const croPosts: Post[] = [
 {
  "slug": "landing-page-entender-por-que-nao-converte",
  "title": "Sua landing page não precisa de mais visitas. Precisa entender por que as pessoas não convertem.",
  "description": "Antes de pedir mais tráfego ou redesenhar a página, entenda em que parte da jornada as pessoas desistem e por quê.",
  "date": "2026-10-12",
  "category": "growth",
  "tags": [
   "CRO",
   "Landing Page",
   "Métricas"
  ],
  "coverArt": {
   "icons": [
    "chart",
    "filter",
    "search"
   ]
  },
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
    "text": "Uma landing page pode receber milhares de visitas e continuar entregando pouco resultado."
   },
   {
    "type": "p",
    "text": "Nesse cenário, a primeira reação costuma ser pedir mais tráfego, trocar a cor do botão ou refazer o layout. Mas existe uma pergunta anterior: em que parte da experiência estamos perdendo pessoas e por quê?"
   },
   {
    "type": "p",
    "text": "Antes de redesenhar uma página, precisamos entender o comportamento que os dados estão mostrando."
   },
   {
    "type": "h2",
    "text": "Conversão é o resultado de uma jornada"
   },
   {
    "type": "p",
    "text": "A taxa de conversão costuma ser calculada dividindo o número de conversões pelo número de visitantes elegíveis e multiplicando o resultado por 100. Mas esse número sozinho não explica o que aconteceu."
   },
   {
    "type": "p",
    "text": "Imagine uma landing page que recebe 10.000 sessões e gera 300 leads. A conversão é de 3%. Esse dado descreve o resultado, mas não aponta automaticamente a causa."
   },
   {
    "type": "scene",
    "id": "conversion-math",
    "data": {}
   },
   {
    "type": "p",
    "text": "Talvez o anúncio prometa uma demonstração gratuita, mas a página fale de uma consultoria paga. Talvez o título não explique o valor do produto. Talvez o formulário peça informações demais. Ou talvez boa parte do tráfego não tenha intenção real de contratar."
   },
   {
    "type": "p",
    "text": "A taxa mostra que existe um resultado. O diagnóstico começa quando cruzamos esse resultado com outras evidências."
   },
   {
    "type": "h2",
    "text": "Leia o funil antes de mexer na interface"
   },
   {
    "type": "p",
    "text": "Uma análise inicial pode separar a jornada em etapas:"
   },
   {
    "type": "scene",
    "id": "funnel-reading",
    "data": {
     "steps": [
      {
       "t": "Impressão e clique",
       "q": "a mensagem chama atenção e atrai o público certo?"
      },
      {
       "t": "Chegada à página",
       "q": "a página carrega bem e mantém a promessa do anúncio?"
      },
      {
       "t": "Compreensão",
       "q": "a pessoa entende rapidamente o que está sendo oferecido?"
      },
      {
       "t": "Consideração",
       "q": "encontra benefícios, provas e respostas às dúvidas relevantes?"
      },
      {
       "t": "Ação",
       "q": "consegue concluir o formulário ou clicar no CTA sem dificuldade?"
      },
      {
       "t": "Qualificação",
       "q": "o lead gerado tem potencial de avançar no processo comercial?"
      }
     ]
    }
   },
   {
    "type": "p",
    "text": "Essa separação evita tratar todos os problemas como problemas de UI."
   },
   {
    "type": "p",
    "text": "Se o CTR do anúncio está baixo, talvez a mensagem ou a segmentação precise ser revista. Se o anúncio recebe cliques, mas a página perde visitantes rapidamente, investigue velocidade, coerência da promessa e relevância do conteúdo. Se muitas pessoas iniciam o formulário e poucas concluem, investigue fricção no formulário."
   },
   {
    "type": "scene",
    "id": "diagnostic-flow",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Combine métricas quantitativas com evidências qualitativas"
   },
   {
    "type": "p",
    "text": "Alguns indicadores ajudam a localizar oportunidades:"
   },
   {
    "type": "ul",
    "items": [
     "CTR: proporção de pessoas que clicam em um link ou anúncio depois de vê-lo.",
     "Taxa de conversão da landing page: proporção de visitantes que completam a ação definida.",
     "Início e conclusão do formulário: mostram em que ponto existe abandono.",
     "Taxa de rejeição ou engajamento: ajudam a entender a qualidade da visita, desde que a definição da ferramenta seja conhecida.",
     "Custo por lead e custo por lead qualificado: conectam a página ao investimento e à qualidade comercial.",
     "Conversão por canal e dispositivo: ajudam a identificar diferenças entre origens de tráfego e experiências mobile e desktop."
    ]
   },
   {
    "type": "p",
    "text": "Depois, use gravações de sessão, mapas de calor, entrevistas, testes de usabilidade e feedback do time comercial para investigar possíveis causas. Um mapa de calor pode sugerir onde as pessoas clicam, mas não explica sozinho por que clicam ou por que desistem."
   },
   {
    "type": "h2",
    "text": "Não otimize a métrica errada"
   },
   {
    "type": "p",
    "text": "Uma página pode aumentar a quantidade de leads e, ao mesmo tempo, diminuir a qualidade deles. Por isso, conversão não deve ser analisada isoladamente."
   },
   {
    "type": "p",
    "text": "Se o objetivo é gerar oportunidades comerciais, acompanhe também a proporção de leads qualificados, reuniões agendadas, oportunidades criadas e receita atribuída. O melhor resultado não é necessariamente captar mais contatos. É gerar mais valor com o tráfego disponível."
   },
   {
    "type": "p",
    "text": "Também vale separar sessões de usuários e eventos de conversão. Uma mesma pessoa pode visitar várias vezes ou converter mais de uma vez. A definição do denominador precisa ser consistente para que a comparação faça sentido."
   },
   {
    "type": "h2",
    "text": "Um processo simples para começar"
   },
   {
    "type": "ul",
    "items": [
     "Defina a conversão principal e confirme se o tracking funciona.",
     "Divida a jornada em etapas mensuráveis.",
     "Identifique a maior queda ou a maior oportunidade de negócio.",
     "Formule hipóteses que possam ser verificadas.",
     "Escolha uma mudança por vez quando possível.",
     "Avalie o efeito na métrica principal e nas métricas de proteção.",
     "Registre o aprendizado, inclusive quando a hipótese não se confirma."
    ]
   },
   {
    "type": "p",
    "text": "Benchmarks externos podem servir como referência, mas não substituem a linha de base da própria página. Relatórios como o Conversion Benchmark Report da Unbounce mostram diferenças entre setores e tipos de tráfego, reforçando que a comparação precisa considerar contexto. A mediana reportada pela Unbounce para seu conjunto de páginas não deve ser transformada em meta universal para qualquer negócio."
   },
   {
    "type": "p",
    "text": "A pergunta útil não é apenas “qual é a minha taxa de conversão?”. É: qual parte da jornada está impedindo que a intenção do visitante vire uma ação valiosa?"
   }
  ],
  "sources": [
   "Unbounce, Conversion Benchmark Report: https://unbounce.com/conversion-benchmark-report/",
   "Unbounce, What is the average landing page conversion rate?: https://unbounce.com/average-conversion-rates-landing-pages/",
   "Unbounce Documentation, Understanding Industry Benchmarks: https://documentation.unbounce.com/hc/en-us/articles/4418424059796-Understanding-Industry-Benchmarks"
  ]
 },
 {
  "slug": "cro-transformar-duvidas-em-experimentos",
  "title": "CRO não é trocar a cor do botão. É transformar dúvidas em experimentos.",
  "description": "CRO não é receita de botão. É um processo para entender barreiras, formular hipóteses e testar o que realmente ajuda as pessoas a avançar.",
  "date": "2026-10-11",
  "category": "growth",
  "tags": [
   "CRO",
   "Experimentos",
   "Teste A/B"
  ],
  "coverArt": {
   "icons": [
    "flask",
    "repeat",
    "target"
   ]
  },
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
    "text": "Quando alguém fala em otimização de conversão, é comum pensar em mudanças pequenas: trocar a cor de um CTA, alterar o texto de um botão ou mover um formulário alguns pixels para cima."
   },
   {
    "type": "p",
    "text": "Essas mudanças podem ter efeito. O problema é tratá-las como receita."
   },
   {
    "type": "p",
    "text": "CRO, ou Conversion Rate Optimization, é um processo contínuo para entender barreiras, formular hipóteses e avaliar se uma mudança melhora um resultado relevante. O foco não deveria ser testar por testar. Deveria ser reduzir a incerteza sobre o que ajuda as pessoas a avançar."
   },
   {
    "type": "h2",
    "text": "Comece pelo comportamento, não pela solução"
   },
   {
    "type": "p",
    "text": "Imagine que poucas pessoas enviam um formulário de demonstração. Uma solução apressada seria reduzir os campos imediatamente. Mas ainda não sabemos se o tamanho do formulário é a principal barreira."
   },
   {
    "type": "p",
    "text": "Talvez as pessoas não entendam o que acontece depois do envio. Talvez tenham receio de receber ligações comerciais. Talvez a página não explique o valor da demonstração. Talvez o tráfego venha de pessoas que ainda estão pesquisando o problema."
   },
   {
    "type": "p",
    "text": "Uma hipótese de CRO precisa conectar observação, causa provável, mudança e resultado esperado."
   },
   {
    "type": "p",
    "text": "Exemplo:"
   },
   {
    "type": "ul",
    "items": [
     "Observação: muitas pessoas começam o formulário, mas poucas concluem.",
     "Hipótese: alguns campos parecem exigir informações que o visitante ainda não tem ou não quer compartilhar.",
     "Mudança: remover os campos não essenciais e explicar por que os dados necessários são solicitados.",
     "Métrica principal: taxa de conclusão do formulário entre as pessoas que o iniciaram.",
     "Métricas de proteção: qualidade do lead, taxa de contato válido e avanço para reunião comercial."
    ]
   },
   {
    "type": "p",
    "text": "A hipótese não é um fato. É uma explicação que precisa ser testada."
   },
   {
    "type": "h2",
    "text": "Priorize as hipóteses"
   },
   {
    "type": "p",
    "text": "Nem toda ideia merece ser implementada agora. Uma forma prática de priorizar é avaliar:"
   },
   {
    "type": "ul",
    "items": [
     "Impacto esperado: se a hipótese estiver certa, qual resultado pode mudar?",
     "Confiança: que evidências sustentam a hipótese?",
     "Esforço: quanto tempo e dependência técnica a mudança exige?"
    ]
   },
   {
    "type": "p",
    "text": "Uma matriz simples de impacto, confiança e esforço ajuda a organizar o backlog. Ela não prova qual experimento vai vencer, mas torna a priorização mais transparente."
   },
   {
    "type": "p",
    "text": "Evite escolher uma mudança apenas porque é fácil ou visualmente interessante. Uma alteração pequena e bem fundamentada pode ser mais valiosa do que um redesign completo baseado em opinião."
   },
   {
    "type": "scene",
    "id": "priority-matrix",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Um bom teste precisa de uma pergunta clara"
   },
   {
    "type": "p",
    "text": "Antes de iniciar um teste A/B, registre:"
   },
   {
    "type": "ul",
    "items": [
     "qual problema está sendo investigado;",
     "qual é a hipótese;",
     "qual versão será comparada com qual;",
     "qual é a métrica principal;",
     "quais métricas podem indicar efeitos colaterais;",
     "qual público entra no teste;",
     "qual volume e duração são necessários para uma leitura confiável;",
     "quais condições levam a interromper ou encerrar o teste."
    ]
   },
   {
    "type": "p",
    "text": "Se várias mudanças grandes forem lançadas ao mesmo tempo, será mais difícil entender o que causou o resultado. Quando o tráfego é baixo, testes A/B podem demorar muito para produzir evidência suficiente. Nesses casos, pesquisa qualitativa, testes de usabilidade e análise de comportamento podem ajudar a aprender antes de investir em um experimento estatístico."
   },
   {
    "type": "scene",
    "id": "cro-loop",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Resultado positivo não é o único aprendizado"
   },
   {
    "type": "p",
    "text": "Um teste pode aumentar a taxa de clique no CTA, mas não melhorar a conclusão do formulário. Pode gerar mais leads, mas diminuir a proporção de contatos qualificados. Pode melhorar a conversão em desktop e piorar a experiência mobile."
   },
   {
    "type": "p",
    "text": "Por isso, defina a métrica principal e as métricas de proteção antes de olhar os resultados."
   },
   {
    "type": "p",
    "text": "Também evite encerrar o teste no primeiro sinal positivo. Verificar os dados repetidamente e parar quando aparece um número favorável pode aumentar o risco de concluir que uma mudança funciona quando a evidência ainda é insuficiente. A análise deve considerar volume, variabilidade, duração e o método estatístico utilizado."
   },
   {
    "type": "scene",
    "id": "peeking",
    "data": {}
   },
   {
    "type": "h2",
    "text": "CRO também é uma prática de aprendizado"
   },
   {
    "type": "p",
    "text": "Nem todo experimento vai melhorar a métrica principal. Isso não torna o trabalho inútil."
   },
   {
    "type": "p",
    "text": "Se a hipótese foi bem formulada e o teste foi executado corretamente, um resultado neutro pode indicar que a causa imaginada não era tão importante quanto parecia. Esse aprendizado ajuda a direcionar a próxima investigação."
   },
   {
    "type": "p",
    "text": "A maturidade de CRO não se mede apenas pela quantidade de testes lançados. Ela aparece na qualidade das perguntas, na confiabilidade da instrumentação e na capacidade de transformar resultados em decisões."
   },
   {
    "type": "p",
    "text": "No fim, trocar a cor de um botão é fácil. Mais difícil é entender por que alguém hesita, o que precisa saber para confiar e qual mudança realmente remove essa barreira."
   }
  ]
 },
 {
  "slug": "landing-page-promessa-experiencia-acao",
  "title": "Uma landing page converte quando a promessa, a experiência e a ação trabalham juntas",
  "description": "Message match, proposta de valor, confiança, fricção, contexto mobile e medição depois do clique: o que faz uma landing page converter.",
  "date": "2026-10-10",
  "category": "growth",
  "tags": [
   "Landing Page",
   "UX",
   "Conversão"
  ],
  "coverArt": {
   "icons": [
    "megaphone",
    "click",
    "checkCircle"
   ]
  },
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
    "text": "É possível ter uma landing page visualmente bonita e ainda assim criar dúvidas."
   },
   {
    "type": "p",
    "text": "O título fala de uma coisa, o anúncio prometeu outra, o CTA não deixa claro o próximo passo e o formulário pede dados antes de explicar o benefício. Cada detalhe pode parecer pequeno. Juntos, eles criam fricção."
   },
   {
    "type": "p",
    "text": "Uma landing page eficaz não é apenas uma página com um botão destacado. É uma experiência que ajuda a pessoa a entender uma oferta, avaliar se ela é relevante e realizar uma ação com segurança."
   },
   {
    "type": "h2",
    "text": "1. Mantenha a promessa entre anúncio e página"
   },
   {
    "type": "p",
    "text": "A experiência começa antes do carregamento da landing page."
   },
   {
    "type": "p",
    "text": "Se o anúncio promete “agende uma demonstração gratuita”, o título e o conteúdo inicial precisam confirmar essa expectativa. Se a página muda a linguagem ou apresenta uma oferta diferente, a pessoa precisa fazer um esforço extra para entender se chegou ao lugar certo."
   },
   {
    "type": "p",
    "text": "Essa coerência é frequentemente chamada de message match. Ela não significa repetir exatamente as mesmas palavras em todos os canais, mas preservar a promessa, o público e o benefício central."
   },
   {
    "type": "scene",
    "id": "message-match",
    "data": {}
   },
   {
    "type": "h2",
    "text": "2. Explique o valor antes de pedir esforço"
   },
   {
    "type": "p",
    "text": "No primeiro bloco da página, tente responder a três perguntas:"
   },
   {
    "type": "ul",
    "items": [
     "O que é esta oferta?",
     "Para quem ela é relevante?",
     "O que a pessoa ganha ao avançar?"
    ]
   },
   {
    "type": "p",
    "text": "Um título criativo pode chamar atenção, mas se não comunica a proposta de valor, pode aumentar a dúvida. Subtítulo, evidência e CTA devem trabalhar juntos para explicar o próximo passo."
   },
   {
    "type": "p",
    "text": "A ordem depende da oferta. Um produto conhecido pode precisar de menos explicação. Uma solução complexa ou de alto risco pode precisar de mais contexto, demonstração, casos e respostas a objeções."
   },
   {
    "type": "h2",
    "text": "3. Trate confiança como parte da interface"
   },
   {
    "type": "p",
    "text": "Pedir nome, e-mail, telefone, empresa e orçamento é pedir tempo e dados pessoais. A pessoa precisa entender por que essas informações são necessárias."
   },
   {
    "type": "p",
    "text": "Use provas relevantes, como depoimentos verificáveis, logos autorizados, números contextualizados, explicações sobre privacidade e informações claras sobre o que acontece depois do envio."
   },
   {
    "type": "p",
    "text": "Evite usar selos, avaliações ou estatísticas sem origem verificável. Elementos de confiança só ajudam quando são legítimos e relevantes para a decisão."
   },
   {
    "type": "h2",
    "text": "4. Reduza a fricção sem eliminar o que é necessário"
   },
   {
    "type": "p",
    "text": "Um formulário com menos campos pode ser mais fácil de concluir, mas não existe uma regra universal de que o menor formulário sempre gera o melhor resultado."
   },
   {
    "type": "p",
    "text": "Se o time comercial precisa de uma informação para qualificar o lead, retirar esse campo pode aumentar o volume e piorar a qualidade. Uma alternativa é solicitar apenas o essencial no primeiro passo e coletar informações adicionais depois, desde que isso faça sentido para o usuário e para a operação."
   },
   {
    "type": "p",
    "text": "Também é importante mostrar erros perto do campo correspondente, explicar como corrigi-los, preservar o que já foi preenchido e indicar claramente o estado de envio."
   },
   {
    "type": "h2",
    "text": "5. Projete para o contexto mobile"
   },
   {
    "type": "p",
    "text": "Não basta fazer a versão desktop caber em uma tela pequena."
   },
   {
    "type": "p",
    "text": "Em dispositivos móveis, o teclado ocupa espaço, o formulário pode exigir mais rolagem, a conexão pode ser instável e os elementos precisam continuar fáceis de tocar. Garanta legibilidade, áreas de toque adequadas, carregamento rápido e um CTA que faça sentido dentro do fluxo."
   },
   {
    "type": "p",
    "text": "Analise conversão por dispositivo, mas também observe o comportamento. Uma diferença entre mobile e desktop pode indicar problemas de experiência, diferença de intenção ou diferenças entre as fontes de tráfego. O número, sozinho, não identifica a causa."
   },
   {
    "type": "scene",
    "id": "mobile-keyboard",
    "data": {}
   },
   {
    "type": "h2",
    "text": "6. Meça o que acontece depois do clique"
   },
   {
    "type": "p",
    "text": "O clique no CTA não é necessariamente a conversão final."
   },
   {
    "type": "p",
    "text": "Para uma página de geração de leads, acompanhe a sequência:"
   },
   {
    "type": "scene",
    "id": "post-click",
    "data": {
     "chain": "Visualização → CTA clicado → Formulário iniciado → Formulário enviado → Lead qualificado → Reunião → Oportunidade"
    }
   },
   {
    "type": "p",
    "text": "Nem todo negócio precisa medir todas essas etapas na landing page, mas a equipe deve saber qual evento representa sucesso e como a qualidade será avaliada depois."
   },
   {
    "type": "p",
    "text": "Se o botão recebe muitos cliques e poucos formulários são enviados, investigue a etapa intermediária. Se o formulário é concluído, mas os leads não avançam, talvez a promessa atraia o público errado ou a oferta não esteja alinhada à necessidade comercial."
   },
   {
    "type": "h2",
    "text": "A conversão não começa no botão"
   },
   {
    "type": "p",
    "text": "O CTA é importante, mas ele não consegue compensar uma proposta de valor confusa, uma promessa incoerente ou uma experiência difícil."
   },
   {
    "type": "p",
    "text": "O trabalho de CRO é encontrar o obstáculo mais relevante, testar uma mudança e acompanhar o efeito no resultado de negócio. Às vezes a melhoria está na interface. Em outras, está na oferta, na mensagem, no público ou no processo que acontece depois da conversão."
   },
   {
    "type": "p",
    "text": "A melhor landing page não é necessariamente a mais curta, a mais longa ou a mais minimalista. É aquela que ajuda o público certo a tomar uma decisão informada com o menor esforço desnecessário."
   }
  ],
  "sources": [
   "Unbounce, Conversion Benchmark Report: https://unbounce.com/conversion-benchmark-report/",
   "Unbounce, What is the average landing page conversion rate?: https://unbounce.com/average-conversion-rates-landing-pages/"
  ]
 },
 {
  "slug": "dashboard-metricas-em-prioridades",
  "title": "O dashboard não toma decisões por você: como transformar métricas em prioridades de produto",
  "description": "Um dashboard não decide por você. Como organizar métricas em atividade, resultado e proteção, e transformá-las em perguntas e decisões.",
  "date": "2026-10-09",
  "category": "growth",
  "tags": [
   "Métricas",
   "Dashboard",
   "Produto"
  ],
  "coverArt": {
   "icons": [
    "chart",
    "branch",
    "target"
   ]
  },
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
    "text": "É fácil abrir um dashboard e encontrar dezenas de números: sessões, CTR, conversão, custo por lead, ativação, retenção, churn e receita."
   },
   {
    "type": "p",
    "text": "O problema começa quando a equipe tenta acompanhar tudo sem definir qual decisão cada indicador deveria ajudar a tomar."
   },
   {
    "type": "p",
    "text": "Um dashboard pode estar visualmente organizado e continuar sendo pouco útil. Métrica só ganha valor quando ajuda a entender um comportamento, avaliar um resultado ou escolher uma ação."
   },
   {
    "type": "h2",
    "text": "Comece pela decisão"
   },
   {
    "type": "p",
    "text": "Antes de adicionar um gráfico, pergunte:"
   },
   {
    "type": "ul",
    "items": [
     "Qual decisão precisamos tomar?",
     "Que comportamento pode explicar o resultado?",
     "Qual indicador é capaz de responder à pergunta?",
     "Que segmentação é necessária?",
     "Qual ação será considerada se o número subir ou cair?"
    ]
   },
   {
    "type": "p",
    "text": "Se o objetivo é melhorar a ativação de um SaaS, visitas à landing page podem ser úteis para aquisição, mas não explicam se novos usuários chegam ao primeiro momento de valor. Para isso, talvez seja necessário medir criação de conta, conclusão do onboarding e uso da funcionalidade principal."
   },
   {
    "type": "p",
    "text": "A métrica correta depende da pergunta."
   },
   {
    "type": "h2",
    "text": "Separe indicadores de atividade, resultado e qualidade"
   },
   {
    "type": "p",
    "text": "Uma estrutura útil pode organizar métricas em três grupos:"
   },
   {
    "type": "p",
    "lead": "Atividade:",
    "text": "o que as pessoas fazem? Exemplos: visitas, cliques, início de formulário, uso de uma funcionalidade."
   },
   {
    "type": "p",
    "lead": "Resultado:",
    "text": "o que o produto ou negócio alcança? Exemplos: conversão, ativação, receita, retenção e oportunidades geradas."
   },
   {
    "type": "p",
    "lead": "Qualidade e proteção:",
    "text": "o resultado está vindo com efeitos indesejados? Exemplos: leads inválidos, cancelamentos, erros, reclamações, tempo para concluir uma tarefa ou abandono em etapas críticas."
   },
   {
    "type": "p",
    "text": "Essas categorias não são uma taxonomia universal, mas ajudam a evitar que uma equipe celebre o aumento de um indicador sem verificar o efeito no restante da jornada."
   },
   {
    "type": "scene",
    "id": "metric-buckets",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Construa uma árvore de métricas"
   },
   {
    "type": "p",
    "text": "Uma métrica principal raramente explica tudo sozinha."
   },
   {
    "type": "p",
    "text": "Imagine que o objetivo seja aumentar oportunidades qualificadas geradas pela landing page. Uma árvore simples pode conectar:"
   },
   {
    "type": "quote",
    "text": "Tráfego relevante → Conversão em lead → Qualificação → Reunião → Oportunidade"
   },
   {
    "type": "p",
    "text": "Cada etapa possui indicadores e possíveis causas."
   },
   {
    "type": "p",
    "text": "Se o tráfego relevante cresce, mas a conversão cai, investigue a coerência entre canal, promessa e página. Se a conversão cresce, mas a qualificação cai, investigue a oferta, o público e as informações solicitadas. Se os leads são qualificados, mas não avançam para reunião, o problema pode estar no processo comercial ou no tempo de resposta."
   },
   {
    "type": "p",
    "text": "A árvore ajuda a transformar uma métrica final em perguntas investigáveis."
   },
   {
    "type": "scene",
    "id": "metric-tree",
    "data": {}
   },
   {
    "type": "h2",
    "text": "Defina métricas de proteção"
   },
   {
    "type": "p",
    "text": "Toda otimização precisa considerar possíveis efeitos colaterais."
   },
   {
    "type": "p",
    "text": "Uma mudança que aumenta os envios de formulário pode também aumentar spam. Um CTA mais agressivo pode gerar mais cliques e mais frustração. Uma simplificação do onboarding pode acelerar a entrada, mas deixar usuários sem entender como usar o produto."
   },
   {
    "type": "p",
    "text": "Por isso, defina uma métrica principal e indicadores de proteção antes de implementar uma mudança. Não é necessário criar um painel enorme. Escolha poucos indicadores que representem riscos relevantes para aquela decisão."
   },
   {
    "type": "h2",
    "text": "Cuidado com médias que escondem diferenças"
   },
   {
    "type": "p",
    "text": "Uma taxa geral pode esconder experiências muito distintas."
   },
   {
    "type": "p",
    "text": "A conversão total pode melhorar porque uma campanha de alto volume trouxe visitantes com intenção elevada, enquanto a experiência mobile piorou. O onboarding pode parecer eficiente para usuários experientes e continuar difícil para iniciantes."
   },
   {
    "type": "p",
    "text": "Sempre que fizer sentido, analise segmentos como canal, dispositivo, campanha, tipo de usuário ou etapa da jornada. Evite segmentar indefinidamente até encontrar um número favorável. As segmentações precisam responder a hipóteses claras e considerar volume suficiente para interpretações confiáveis."
   },
   {
    "type": "h2",
    "text": "Um dashboard útil termina em uma decisão"
   },
   {
    "type": "p",
    "text": "Uma boa visualização não serve apenas para mostrar o que aconteceu. Ela ajuda a perceber uma mudança, compreender seu contexto e decidir o que investigar."
   },
   {
    "type": "p",
    "text": "Por exemplo:"
   },
   {
    "type": "scene",
    "id": "signal-to-action",
    "data": {
     "cards": [
      {
       "k": "Sinal",
       "v": "a taxa de conclusão do formulário caiu."
      },
      {
       "k": "Contexto",
       "v": "a queda começou depois de uma mudança recente e aparece principalmente em mobile."
      },
      {
       "k": "Hipótese",
       "v": "a nova versão tornou a interação com os campos mais difícil em telas pequenas."
      },
      {
       "k": "Próxima ação",
       "v": "reproduzir o fluxo em dispositivos móveis, observar sessões e testar uma correção."
      }
     ],
     "close": "O dashboard não prova a hipótese. Ele ajuda a decidir onde procurar evidências."
    }
   },
   {
    "type": "p",
    "text": "Essa é uma diferença importante entre reportar métricas e trabalhar de forma orientada por dados. O objetivo não é produzir mais gráficos. É diminuir a distância entre perceber um problema e tomar uma decisão fundamentada."
   }
  ]
 }
];
