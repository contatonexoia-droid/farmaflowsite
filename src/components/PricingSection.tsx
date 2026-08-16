import React from 'react';
import { Check, MessageCircle, Sparkles, Shield, ArrowRight, Star, Bot } from 'lucide-react';
import { pricingPlans, getWhatsAppLink } from '../data/content';

export const PricingSection: React.FC = () => {
  return (
    <section id="planos" className="py-24 relative overflow-hidden">
      
      {/* Background glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INVESTIMENTO TRANSPARENTE & SEM SURPRESAS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Escolha o Plano Ideal
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Planos transparentes e acessíveis para acelerar as vendas da sua farmácia. Sem taxas ocultas e sem cobrança de comissão sobre suas vendas.
          </p>
        </div>

        {/* Pricing Cards Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">
          {pricingPlans.map((plan) => {
            const isPopular = plan.popular;
            const isAi = plan.isAiPlan;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 ${
                  isAi
                    ? 'glass-card bg-slate-950/95 border-2 border-purple-500/80 shadow-2xl shadow-purple-500/20 lg:-translate-y-3 z-20 hover:border-purple-400'
                    : isPopular
                    ? 'glass-card bg-slate-950/95 border-2 border-emerald-500/70 shadow-2xl shadow-emerald-500/15 lg:-translate-y-2 z-10 hover:border-emerald-400'
                    : 'glass-card bg-slate-950/70 border border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {/* Popular / Recommended Pill Floating Above */}
                {plan.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full font-mono font-extrabold text-[10px] sm:text-[11px] tracking-wide shadow-md flex items-center gap-1.5 whitespace-nowrap ${
                    isAi
                      ? 'bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 text-slate-950 shadow-purple-500/30'
                      : isPopular
                      ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-slate-950 shadow-emerald-500/30'
                      : 'bg-slate-800 text-slate-200 border border-slate-700'
                  }`}>
                    {isAi && <Bot className="w-3.5 h-3.5 fill-slate-950" />}
                    {isPopular && !isAi && <Star className="w-3.5 h-3.5 fill-slate-950" />}
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {/* Plan Title & Tag */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-white font-heading">{plan.name}</h3>
                      
                      {plan.highlightTag && (
                        <span className={`px-2.5 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold tracking-wide border ${
                          isAi
                            ? 'bg-purple-950/80 text-purple-300 border-purple-600/60'
                            : 'bg-emerald-950/80 text-emerald-300 border-emerald-600/60'
                        }`}>
                          {plan.highlightTag}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-400 mt-2 leading-relaxed min-h-[38px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className={`mb-6 p-4 rounded-2xl border ${
                    isAi 
                      ? 'bg-purple-950/30 border-purple-800/60' 
                      : isPopular
                      ? 'bg-emerald-950/20 border-emerald-800/40'
                      : 'bg-slate-900/80 border-slate-800/80'
                  }`}>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm text-slate-400 font-mono">R$</span>
                      <span className={`text-4xl font-extrabold font-mono font-heading ${
                        isAi 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300' 
                          : isPopular
                          ? 'text-emerald-300'
                          : 'text-white'
                      }`}>
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{plan.period}</span>
                    </div>

                    {plan.billingNote && (
                      <span className="text-[11px] text-slate-400 block mt-1.5 font-mono">
                        {plan.billingNote}
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2 font-bold">
                      Recursos Inclusos:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isAi
                            ? 'bg-purple-500/20 text-purple-300'
                            : isPopular
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : 'bg-cyan-500/20 text-cyan-300'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug text-slate-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button & Bottom details */}
                <div className="pt-3 border-t border-slate-800/60">
                  <a
                    href={getWhatsAppLink(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                      isAi
                        ? 'bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 hover:from-purple-400 hover:to-cyan-300 text-slate-950 shadow-lg shadow-purple-500/30 hover:scale-[1.02]'
                        : isPopular
                        ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 shadow-lg shadow-emerald-500/30 hover:scale-[1.02]'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-500/40 hover:scale-[1.02]'
                    }`}
                  >
                    {isAi ? <Bot className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  {plan.billingNote && (
                    <p className="text-[10px] text-center text-slate-500 mt-2.5 font-mono">
                      {plan.billingNote}
                    </p>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Security & Guarantee Strip */}
        <div className="mt-16 max-w-4xl mx-auto p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>0% de comissão sobre suas vendas</span>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>Ativação rápida no mesmo dia</span>
          </div>
          <div className="flex items-center gap-3">
            <Bot className="w-5 h-5 text-purple-400 shrink-0" />
            <span>Chat e Agente de IA 24/7 disponíveis</span>
          </div>
        </div>

      </div>
    </section>
  );
};

