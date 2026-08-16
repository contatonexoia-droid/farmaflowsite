export interface NavItem {
  label: string;
  href: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  highlightTag?: string;
  popular?: boolean;
  isAiPlan?: boolean;
  price: number;
  period: string;
  billingNote?: string;
  description: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  pharmacy: string;
  city: string;
  avatar: string;
  quote: string;
  metric: string;
  metricLabel: string;
}

export interface PharmacyMetric {
  id: string;
  value: string;
  label: string;
  description: string;
  trend?: string;
  category: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Geral' | 'Receitas' | 'Integração' | 'Vendas' | 'Planos';
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  originalPrice: number;
  promoPrice: number;
  discount: number;
  isFlashOffer?: boolean;
  isControlled?: boolean;
  recipeRequired?: boolean;
  image: string;
  badge?: string;
}

export interface PrescriptionOrder {
  id: string;
  patientName: string;
  medication: string;
  doctorName: string;
  crm: string;
  recipeFile: string;
  status: 'pending' | 'approved' | 'rejected';
  timestamp: string;
  total: number;
}
