import { PricingPlan, Testimonial, FaqItem, ProductItem, PrescriptionOrder, PharmacyMetric, PainPointItem, ComparisonRow, HowItWorksStep } from '../types';
import vitaminaCImg from '../assets/images/vitamina_c_suplemento_1786878956085.jpg';
import protetorSolarImg from '../assets/images/protetor_solar_facial_1786878971904.jpg';

export const WHATSAPP_NUMBER = '5522981552881';
export const WHATSAPP_DISPLAY = '(22) 98155-2881';
export const WHATSAPP_URL_BASE = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

export const getWhatsAppLink = (message: string) => {
  return `${WHATSAPP_URL_BASE}${encodeURIComponent(message)}`;
};

export const sampleProducts: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Vitamina C 1000mg + Zinco Quelato',
    category: 'Suplementos & Vitaminas',
    originalPrice: 49.90,
    promoPrice: 34.90,
    discount: 30,
    isFlashOffer: true,
    badge: 'Oferta Relâmpago',
    image: vitaminaCImg,
  },
  {
    id: 'prod-2',
    name: 'Protetor Solar Facial FPS 70 Toque Seco 50g',
    category: 'Dermocosméticos',
    originalPrice: 79.90,
    promoPrice: 59.90,
    discount: 25,
    badge: 'Cupom 15% OFF',
    image: protetorSolarImg,
  },
  {
    id: 'prod-3',
    name: 'Clonazepam 2mg (Rivotril) 30 Comprimidos',
    category: 'Medicamentos Controlados',
    originalPrice: 32.50,
    promoPrice: 28.90,
    discount: 11,
    isControlled: true,
    recipeRequired: true,
    badge: 'Receita Obrigatória',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'prod-4',
    name: 'Dipirona Monoidratada 500mg 20 Comprimidos',
    category: 'Medicamentos Gerais',
    originalPrice: 12.90,
    promoPrice: 7.90,
    discount: 38,
    isFlashOffer: true,
    badge: 'Leve 2 Pague 1',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80',
  }
];

export const samplePrescriptions: PrescriptionOrder[] = [
  {
    id: 'REC-8492',
    patientName: 'Marcos Vinícius Silva',
    medication: 'Clonazepam 2mg - 30 comp',
    doctorName: 'Dr. Roberto Mendes (CRM 12489-RJ)',
    crm: '12489-RJ',
    recipeFile: 'receita_marcos_silva.pdf',
    status: 'approved',
    timestamp: 'Há 4 minutos',
    total: 28.90
  },
  {
    id: 'REC-8493',
    patientName: 'Juliana Castro de Souza',
    medication: 'Zolpidem 10mg - 20 comp',
    doctorName: 'Dra. Camila Nogueira (CRM 34812-SP)',
    crm: '34812-SP',
    recipeFile: 'receita_juliana_digital.pdf',
    status: 'pending',
    timestamp: 'Há 12 minutos',
    total: 44.50
  },
  {
    id: 'REC-8490',
    patientName: 'Antônio Carlos Pereira',
    medication: 'Venlafaxina 75mg - 30 cápsulas',
    doctorName: 'Dr. Paulo Henrique (CRM 9821-MG)',
    crm: '9821-MG',
    recipeFile: 'receita_foto_ilegivel.jpg',
    status: 'rejected',
    timestamp: 'Há 35 minutos',
    total: 58.00
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'mensal',
    name: 'Plano Mensal',
    price: 197,
    period: '/mês',
    description: 'Flexibilidade total para sua drogaria, sem fidelidade.',
    features: [
      'Catálogo de produtos ilimitado',
      'Módulo de Ofertas Relâmpago',
      'Envio automático no WhatsApp'
    ],
    billingNote: 'Cobrança mensal recorrente',
    ctaText: 'Contratar Plano Mensal',
    whatsappMessage: 'Olá Evandro! Quero contratar o Plano Mensal do FarmaFlow por R$ 197/mês para a minha farmácia.'
  },
  {
    id: 'semestral',
    name: 'Plano Semestral',
    price: 177,
    period: '/mês',
    description: 'Economia garantida com ciclos de 6 meses.',
    features: [
      'Catálogo de produtos ilimitado',
      'Filtro de Campanhas e Banners',
      'Atualizações automáticas inclusas'
    ],
    billingNote: 'Cobrado a cada 6 meses',
    ctaText: 'Contratar Plano Semestral',
    whatsappMessage: 'Olá Evandro! Quero contratar o Plano Semestral do FarmaFlow por R$ 177/mês para a minha farmácia.'
  },
  {
    id: 'anual',
    name: 'Plano Anual',
    badge: 'MAIS RECOMENDADO',
    highlightTag: 'Maior Economia',
    popular: true,
    price: 159,
    period: '/mês',
    description: 'O maior desconto garantido para contratos de 12 meses.',
    features: [
      'Todas as funcionalidades inclusas',
      'Backup completo do catálogo',
      'Suporte prioritário de implantação'
    ],
    billingNote: 'Economize mais no plano de 1 ano',
    ctaText: 'Contratar Plano Anual',
    whatsappMessage: 'Olá Evandro! Quero contratar o Plano Anual do FarmaFlow por R$ 159/mês (Mais Recomendado).'
  },
  {
    id: 'premium',
    name: 'Plano Premium',
    badge: 'COM CHAT & AGENTE DE IA',
    highlightTag: 'Inteligência Artificial',
    isAiPlan: true,
    price: 297,
    period: '/mês',
    description: 'Potência máxima com Chat inteligente 24/7 e Agente de IA para atendimento automático e conversão.',
    features: [
      'Acesso completo ao Chat com IA 24/7',
      'Agente de IA Especialista em Farmácia & Balcão',
      'Atendimento e dúvidas de posologia automático',
      'Recomendações e Cross-sell inteligente no WhatsApp',
      'Todas as funcionalidades dos planos inclusas',
      'Suporte prioritário VIP de implantação'
    ],
    billingNote: 'Acesso completo ao Chat e Agente de IA',
    ctaText: 'Quero o Plano Premium com IA',
    whatsappMessage: 'Olá Evandro! Quero contratar o Plano Premium do FarmaFlow por R$ 297/mês com Chat e Agente de IA.'
  }
];

export const pharmacyMetrics: PharmacyMetric[] = [
  {
    id: 'met-1',
    value: '-85%',
    label: 'Tempo de Validação de Receitas',
    description: 'Redução drástica no tempo de triagem de prescrições médicas de controle especial e antimicrobianos anexadas ao pedido.',
    trend: 'Agilidade Imediata',
    category: 'Conformidade & SNGPC'
  },
  {
    id: 'met-2',
    value: '+38%',
    label: 'Velocidade no Atendimento WhatsApp',
    description: 'Eliminação da digitação manual de preços no balcão. O cliente envia o carrinho fechado com fotos e quantidades.',
    trend: 'Mais Vendas por Balconista',
    category: 'Produtividade de Vendas'
  },
  {
    id: 'met-3',
    value: '3.4x',
    label: 'Conversão em Ofertas Relâmpago',
    description: 'Aumento na taxa de fechamento com cronômetro regressivo em tempo real e gatilho de escassez no catálogo.',
    trend: 'Pico de Fechamento',
    category: 'Vendas & Margem'
  },
  {
    id: 'met-4',
    value: '< 1s',
    label: 'Tempo de Resposta do Agente de IA',
    description: 'Atendimento instantâneo com Inteligência Artificial 24h para tirar dúvidas de posologia e sugerir itens complementares.',
    trend: 'Disponibilidade 24/7',
    category: 'Inteligência Artificial'
  },
  {
    id: 'met-5',
    value: '0%',
    label: 'Taxa ou Comissão sobre Pedidos',
    description: 'Sem percentual sobre o seu faturamento. Todo o lucro das vendas pelo WhatsApp e catálogo é 100% da sua farmácia.',
    trend: 'Lucro 100% Retido',
    category: 'Modelo Financeiro'
  },
  {
    id: 'met-6',
    value: '99.9%',
    label: 'Estabilidade com Agente Desktop',
    description: 'Sincronização em segundo plano no computador do balcão sem travamentos, sem lentidão e sem quedas de catálogo.',
    trend: 'Zero Travamentos',
    category: 'Tecnologia'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dra. Mariana Vasconcellos',
    role: 'Farmacêutica Responsável & Proprietária',
    pharmacy: 'Drogaria FarmaVida',
    city: 'Campos dos Goytacazes - RJ',
    avatar: 'https://images.unsplash.com/photo-1594824813598-a3f124430a91?auto=format&fit=crop&w=200&q=80',
    quote: 'O módulo de receitas controladas mudou o nosso fluxo. Antes era uma bagunça de fotos soltas no WhatsApp sem saber qual cliente mandou o quê. Agora a receita chega organizada e atrelada ao pedido exato.',
    metric: '-85%',
    metricLabel: 'tempo para validar receitas'
  },
  {
    id: 'test-2',
    name: 'Carlos Eduardo Nogueira',
    role: 'Gestor Comercial & Sócio',
    pharmacy: 'Rede Farma Mais',
    city: 'Macaé - RJ',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Nossos atendentes perdiam 10 a 15 minutos digitando preço por preço. Com o FarmaFlow, o cliente envia a lista pronta do carrinho. Dobramos a capacidade de atendimento do WhatsApp com a mesma equipe.',
    metric: '+38%',
    metricLabel: 'aumento nas vendas no WhatsApp'
  },
  {
    id: 'test-3',
    name: 'Renata Albuquerque',
    role: 'Gerente Operacional',
    pharmacy: 'Drogaria São Lucas',
    city: 'Niterói - RJ',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'As ofertas relâmpago com cronômetro em tempo real disparam as vendas nos fins de semana. O cliente vê o tempo acabando e fecha o carrinho na hora. O retorno do investimento se pagou na primeira semana.',
    metric: '3.4x',
    metricLabel: 'conversão de ofertas relâmpago'
  }
];

export const faqItems: FaqItem[] = [
  {
    id: 'faq-gov-1',
    category: 'Geral',
    question: 'O FarmaFlow substitui o meu sistema de gestão (ERP)?',
    answer: 'Não. O foco do FarmaFlow é organizar e acelerar o canal de vendas digital da sua farmácia no WhatsApp. Ele opera em sincronia com o seu sistema atual para atualizar produtos, preços e estoque, conforme a compatibilidade técnica.'
  },
  {
    id: 'faq-gov-2',
    category: 'Vendas',
    question: 'Os pedidos continuam chegando diretamente no WhatsApp da farmácia?',
    answer: 'Sim! O cliente navega no catálogo online com fotos e preços atualizados, monta o carrinho e clica em finalizar. O FarmaFlow gera o pedido totalmente formatado com nome do cliente, itens, quantidades, valores e endereço de entrega direto no WhatsApp do balcão para sua equipe só aprovar.'
  },
  {
    id: 'faq-gov-3',
    category: 'Integração',
    question: 'Funciona com o sistema que já uso no balcão da farmácia?',
    answer: 'A integração depende da estrutura e dos acessos do seu software de farmácia. Durante a demonstração inicial, avaliamos o seu sistema para garantir a melhor opção de sincronização e importação ágil do seu catálogo.'
  },
  {
    id: 'faq-gov-4',
    category: 'Vendas',
    question: 'O catálogo pode ser acessado pelo cliente fora do horário de funcionamento?',
    answer: 'Sim! O link do catálogo fica 100% online 24 horas por dia para o cliente explorar produtos e montar pedidos. A confirmação, o atendimento e o despacho da entrega seguem rigorosamente o horário de expediente e as regras comerciais da sua drogaria.'
  },
  {
    id: 'faq-gov-5',
    category: 'Receitas',
    question: 'O FarmaFlow faz atendimento farmacêutico ou dispensação automática?',
    answer: 'Não. A plataforma agiliza a visualização do catálogo e a triagem das prescrições. Orientações sobre posologia, avaliação sanitária de receitas médicas e decisões clínicas de dispensação permanecem sob responsabilidade exclusiva do farmacêutico habilitado.'
  },
  {
    id: 'faq-1',
    category: 'Receitas',
    question: 'Como funciona o Módulo de Receitas para Medicamentos Controlados?',
    answer: 'Quando o cliente adiciona qualquer medicamento classificado como tarja preta, vermelha sob retenção ou controle especial (SNGPC), o FarmaFlow exige automaticamente o anexo da foto ou PDF da receita médica antes de prosseguir com o pedido. A notificação chega imediatamente no WhatsApp do balcão já com o link direto da receita anexada ao pedido formatado.'
  },
  {
    id: 'faq-2',
    category: 'Receitas',
    question: 'Como o farmacêutico aprova ou reprova as receitas no sistema?',
    answer: 'No Painel de Pedidos do FarmaFlow, cada pedido com receita exibe um badge em tempo real: "Receita Pendente", "Receita Aprovada" ou "Receita Reprovada". Com apenas 1 clique, o farmacêutico valida a dosagem, CRM e validade da prescrição, atualizando o status do cliente e gerando a mensagem automática de confirmação.'
  },
  {
    id: 'faq-7',
    category: 'Planos',
    question: 'Preciso pagar comissão ou porcentagem sobre as vendas da farmácia?',
    answer: 'Não! O FarmaFlow trabalha com modelo de assinatura mensal fixa, sem nenhuma taxa oculta ou porcentagem sobre suas vendas. Todo o lucro das vendas é 100% da sua farmácia.'
  },
  {
    id: 'faq-8',
    category: 'Geral',
    question: 'Como conheço os planos e começo a usar na minha loja?',
    answer: 'Basta clicar no botão de demonstração para falar diretamente com nossa equipe técnica pelo WhatsApp. Configuramos seu catálogo, orientamos sua equipe e deixamos seu canal de vendas pronto para faturar.'
  }
];

export const painPointsData: PainPointItem[] = [
  {
    id: 'pain-1',
    number: '01 / ATENDIMENTO',
    category: 'Atendimento Lento',
    title: 'A mesma pergunta. De novo. E de novo.',
    description: 'Consultar preço no sistema, procurar produto no estoque e digitar respostas consome o tempo que sua equipe deveria dedicar a orientar e vender mais.',
    chatQuote: '“Tem esse produto? Quanto custa?”'
  },
  {
    id: 'pain-2',
    number: '02 / OPERAÇÃO',
    category: 'Pedidos Desorganizados',
    title: 'Pedido espalhado em várias mensagens.',
    description: 'Áudios, fotos soltas e informações picadas tornam a conferência cansativa, aumentam o tempo de balcão e causam esquecimento de itens.',
    chatQuote: '“Ah, coloca mais esse aqui também...”'
  },
  {
    id: 'pain-3',
    number: '03 / OPORTUNIDADE',
    category: 'Vendas Perdidas',
    title: 'Quem não vê, não lembra de comprar.',
    description: 'Quando o cliente pergunta só por um remédio, itens de conveniência, vitaminas e cuidados pessoais do seu mix passam totalmente despercebidos.',
    chatQuote: '“Não sabia que vocês vendiam isso!”'
  }
];

export const howItWorksData: HowItWorksStep[] = [
  {
    step: '01',
    title: 'O cliente acessa seu catálogo',
    description: 'Pelo link na bio do Instagram, mensagem automática de saudação no WhatsApp ou QR Code impresso no balcão. Sem necessidade de baixar aplicativo.',
    highlight: 'Sem cadastro obrigatório para navegar'
  },
  {
    step: '02',
    title: 'Escolhe os produtos com calma',
    description: 'Com fotos nítidas, preços atualizados em tempo real, categorias organizadas e busca rápida. O cliente descobre e adiciona mais do que pediria no balcão.',
    highlight: 'Estimula a compra de mais itens do seu mix'
  },
  {
    step: '03',
    title: 'Envia o pedido pronto no WhatsApp',
    description: 'Com endereço de entrega, forma de pagamento e até foto da receita anexada. Sua equipe só confere, separa os produtos e combina a entrega.',
    highlight: 'Menos tempo digitando, mais tempo vendendo'
  }
];

export const comparisonRowsData: ComparisonRow[] = [
  {
    routine: 'Consulta de produtos e preços',
    manual: 'Depende de perguntas e respostas demoradas mensagem por mensagem',
    farmaflow: 'Cliente consulta o catálogo online com fotos e preços na hora'
  },
  {
    routine: 'Montagem do pedido',
    manual: 'Informações picadas em áudios, fotos e mensagens soltas',
    farmaflow: 'Itens reunidos em um carrinho pronto com total calculado'
  },
  {
    routine: 'Preços e estoque',
    manual: 'Atualizações manuais repetitivas e risco de preço desatualizado',
    farmaflow: 'Sincronização com integração configurada para sua drogaria'
  },
  {
    routine: 'Visibilidade do mix de produtos',
    manual: 'Limitada ao único item que o cliente lembrou de perguntar',
    farmaflow: 'Mix completo exposto para o cliente adicionar itens por impulso'
  },
  {
    routine: 'Controle de receitas controladas',
    manual: 'Fotos perdidas na conversa com risco sanitário e retrabalho',
    farmaflow: 'Módulo SNGPC com upload no carrinho e validação farmacêutica'
  },
  {
    routine: 'Análise das vendas',
    manual: 'Informações dispersas e sem histórico claro no WhatsApp',
    farmaflow: 'Painel com produtos mais vendidos, clientes VIPs e curva ABC'
  }
];
