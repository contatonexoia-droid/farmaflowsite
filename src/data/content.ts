import { PricingPlan, Testimonial, FaqItem, ProductItem, PrescriptionOrder, PharmacyMetric } from '../types';
import vitaminaCImg from '../assets/images/vitamina_c_suplemento_1786878956085.jpg';
import protetorSolarImg from '../assets/images/protetor_solar_facial_1786878971904.jpg';

export const WHATSAPP_NUMBER = '5522981552881';
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
    id: 'faq-3',
    category: 'Integração',
    question: 'O que é o Agente Desktop e como ele garante a estabilidade?',
    answer: 'O Agente Desktop é um utilitário ultraleve instalado no computador do balcão da farmácia que roda em segundo plano. Ele monitora a conexão em tempo real, sincroniza alterações de preços e ofertas sem lentidão e garante que o catálogo esteja 100% online mesmo em conexões oscilantes.'
  },
  {
    id: 'faq-4',
    category: 'Vendas',
    question: 'A Oferta Relâmpago realmente encerra quando o cronômetro zera?',
    answer: 'Sim! Utilizamos arquitetura Realtime sincronizada. Quando o cronômetro regressivo atinge zero, o preço volta imediatamente ao valor original ou o produto sai da vitrine de destaque, sem que o cliente consiga burlar ou comprar com preço promocional vencido.'
  },
  {
    id: 'faq-5',
    category: 'Vendas',
    question: 'Como o cliente faz para enviar o pedido para o WhatsApp?',
    answer: 'O cliente navega pelo catálogo com visualização rápida, seleciona variações (miligramas, dosagens, marcas), aplica cupons se houver e clica em "Finalizar Pedido". O FarmaFlow abre automaticamente o WhatsApp com uma mensagem padronizada contendo a lista dos itens, quantidades, valores e endereço de entrega.'
  },
  {
    id: 'faq-6',
    category: 'Planos',
    question: 'O que está incluso no Plano Premium com Agente de IA e Chat por R$ 297/mês?',
    answer: 'O Plano Premium inclui todas as funcionalidades da plataforma (catálogo ilimitado, ofertas relâmpago, cupons, suporte prioritário) e adiciona com exclusividade o Chat Inteligente 24/7 e o nosso Agente de IA Farmacêutico. O robô inteligente responde clientes no WhatsApp e no site em tempo real, tira dúvidas de saúde e posologia, recomenda produtos de forma persuasiva (cross-sell) e monta orçamentos em segundos.'
  },
  {
    id: 'faq-7',
    category: 'Planos',
    question: 'Preciso pagar comissão sobre as vendas da minha farmácia?',
    answer: 'Não! O FarmaFlow trabalha com modelo de assinatura mensal fixa, sem nenhuma taxa oculta ou porcentagem sobre suas vendas. Todo o lucro das vendas é 100% da sua farmácia.'
  },
  {
    id: 'faq-8',
    category: 'Geral',
    question: 'Quanto tempo leva para colocar o catálogo da minha drogaria no ar?',
    answer: 'Nossa equipe de suporte assistido realiza a ativação e configuração inicial no mesmo dia. Você já recebe o link personalizado da sua farmácia pronto para divulgar no Instagram, Google Meu Negócio, WhatsApp e materiais impressos.'
  }
];
