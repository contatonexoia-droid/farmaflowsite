import React, { useState } from 'react';
import { 
  Flame, 
  Filter, 
  Laptop, 
  Tag, 
  Layers, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  BarChart3, 
  Headphones, 
  CheckCircle2, 
  ArrowRight,
  Bot
} from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const FeatureShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const features = [
    {
      id: 'inteligencia-vendas',
      title: 'Painel de Inteligência de Vendas',
      category: 'Gestão & Decisão',
      icon: BarChart3,
      iconColor: 'text-emerald-400',
      bgGlow: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/40',
      desc: 'Saiba com precisão quais produtos mais vendem, os horários de maior movimento no WhatsApp e identifique seus clientes VIPs com curva ABC para ações de fidelização.',
      bullets: [
        'Ranking dos mais vendidos com barras de volume',
        'Visão de clientes frequentes e ticket médio',
        'Filtros por Hoje, Últimos 7 dias e Mês'
      ]
    },
    {
      id: 'agente-ia',
      title: 'Agente de IA & Chat 24/7',
      category: 'Exclusivo Premium',
      icon: Bot,
      iconColor: 'text-purple-400',
      bgGlow: 'bg-purple-500/10',
      borderColor: 'border-purple-500/40',
      desc: 'Atendimento com Inteligência Artificial para tirar dúvidas sobre posologia, indicar itens complementares (cross-sell) e montar orçamentos instantâneos no WhatsApp e no catálogo.',
      bullets: [
        'Respostas instantâneas 24h por dia',
        'Sugestões inteligentes de produtos associados',
        'Transbordo para atendente humano em 1 clique'
      ]
    },
    {
      id: 'receitas-sngpc',
      title: 'Módulo de Receitas Controladas',
      category: 'Conformidade SNGPC',
      icon: ShieldCheck,
      iconColor: 'text-cyan-400',
      bgGlow: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/40',
      desc: 'Validação obrigatória de receitas para medicamentos tarja preta e vermelha. O cliente anexa PDF/foto e o farmacêutico aprova diretamente no painel com total segurança jurídica.',
      bullets: [
        'Upload obrigatório no checkout',
        'Badges de status (Aprovado/Pendente/Reprovado)',
        'Notificação instantânea no WhatsApp do balcão'
      ]
    },
    {
      id: 'ofertas',
      title: 'Ofertas Relâmpago Realtime',
      category: 'Conversão',
      icon: Flame,
      iconColor: 'text-orange-400',
      bgGlow: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      desc: 'Cronômetros dinâmicos que criam senso de urgência real. Ao zerar o tempo, a tecnologia Realtime atualiza os preços instantaneamente no catálogo sem permitir compras com preços antigos.',
      bullets: [
        'Cálculo automático de porcentagem de desconto (-20%, -35%)',
        'Expiração sincronizada com proteção contra fraudes',
        'Destaque no topo do catálogo com efeito pulsar'
      ]
    },
    {
      id: 'agente-desktop',
      title: 'Agente Desktop & Zero Quedas',
      category: 'Tecnologia',
      icon: Laptop,
      iconColor: 'text-emerald-400',
      bgGlow: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      desc: 'Aplicação leve que roda em segundo plano no computador da farmácia. Garante estabilidade contínua, sincronização de dados sem lentidão e evita qualquer travamento no balcão.',
      bullets: [
        'Consome menos de 20MB de memória RAM',
        'Monitoramento contínuo da integridade do catálogo',
        'Sincronização instantânea com a loja web'
      ]
    },
    {
      id: 'cupons-desconto',
      title: 'Gerenciador de Cupons & Descontos',
      category: 'Vendas',
      icon: Tag,
      iconColor: 'text-teal-400',
      bgGlow: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      desc: 'Crie cupons personalizados (Ex: PRIMEIRACOMPRA, IMPOSTOZERO, VOLTESEMPRE) com regras de valor mínimo, limite de uso e desconto percentual ou fixo aplicados diretamente no carrinho.',
      bullets: [
        'Aplica desconto com recálculo em tempo real',
        'Gera tags visuais nos produtos participantes',
        'Estímulo ao aumento do ticket médio'
      ]
    },
    {
      id: 'filtro-campanhas',
      title: 'Filtro Dinâmico de Tabloides',
      category: 'Navegação',
      icon: Filter,
      iconColor: 'text-blue-400',
      bgGlow: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      desc: 'Ao clicar nos banners de campanhas promocionais (Ex: Tabloide de Inverno, Semana da Gripe), o catálogo filtra em 1 clique apenas os itens daquela promoção, acelerando a decisão de compra.',
      bullets: [
        'Encaixe perfeito para tabloides impressos e digitais',
        'Navegação fluida sem recarregar a página',
        'Segmentação por departamentos farmacêuticos'
      ]
    }
  ];

  return (
    <section id="recursos" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>ECOSSISTEMA COMPLETO PARA DROGARIAS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-5">
            Recursos Projetados para a Rotina Real da Farmácia
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Cada detalhe do FarmaFlow foi desenhado com base nos desafios diários de balconistas, farmacêuticos e donos de drogarias.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="glass-card rounded-3xl p-7 border border-slate-800/80 flex flex-col justify-between group hover:border-cyan-500/40 relative overflow-hidden"
              >
                {/* Background Corner Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${feat.bgGlow} rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500`}></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-slate-900 border ${feat.borderColor} flex items-center justify-center ${feat.iconColor} shadow-md`}>
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-slate-900/90 text-slate-400 px-3 py-1 rounded-full border border-slate-800">
                      {feat.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 font-heading group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {feat.desc}
                  </p>
                </div>

                <div className="border-t border-slate-800/80 pt-4 space-y-2 text-xs text-slate-400">
                  {feat.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-heading">
              Precisa de uma funcionalidade específica para a sua rede?
            </h4>
            <p className="text-xs text-slate-400">
              Personalizamos regras de negócio, tabelas especiais de convênio e fluxos multiloja.
            </p>
          </div>

          <a
            href={getWhatsAppLink('Olá! Gostaria de tirar dúvidas técnicas sobre as funcionalidades do FarmaFlow.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-white font-semibold text-xs font-mono border border-cyan-500/40 hover:border-cyan-400 flex items-center gap-2 transition-all whitespace-nowrap"
          >
            <span>Consultar Suporte Técnico</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
