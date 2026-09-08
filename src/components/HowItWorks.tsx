import React from 'react';
import { 
  Globe, 
  ShoppingBag, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  QrCode,
  MessageCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { howItWorksData, getWhatsAppLink } from '../data/content';

export const HowItWorks: React.FC = () => {
  const stepIcons = [Globe, ShoppingBag, Send];

  return (
    <section id="como-funciona" className="py-24 md:py-32 relative overflow-hidden scroll-mt-24 border-b border-slate-900/80">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono font-bold text-emerald-300 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="uppercase tracking-wider">SIMPLES PARA O CLIENTE, PODEROSO PARA A FARMÁCIA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-5 leading-tight">
            Do Primeiro Clique à Entrega: <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Como Funciona na Prática.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Uma jornada fluida projetada para o cliente comprar sem atrito e sua equipe atender sem sobrecarga de mensagens repetidas.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {howItWorksData.map((item, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-7 sm:p-8 bg-slate-950/80 border border-slate-800/90 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 backdrop-blur-sm"
              >
                {/* Top Step Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-extrabold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 tracking-wider">
                      PASSO {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-950/40 transition-colors shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Step Preview Mockup Badge */}
                <div>
                  {idx === 0 && (
                    <div className="p-3 bg-slate-900/90 rounded-2xl border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2 truncate">
                        <QrCode className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="truncate text-cyan-300">farmaflow.site/sua-farmacia</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold">1 Clique</span>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="p-3 bg-slate-900/90 rounded-2xl border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-emerald-400" />
                        <span className="text-white font-sans font-medium">3 itens adicionados</span>
                      </div>
                      <span className="text-emerald-400 font-bold">R$ 84,90</span>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="p-3 bg-emerald-950/40 rounded-2xl border border-emerald-800/60 text-[11px] font-mono text-emerald-300 flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span className="font-sans font-medium">Pedido formatado enviado</span>
                      </div>
                      <span className="text-emerald-400 font-bold">10 seg</span>
                    </div>
                  )}

                  {/* Highlight pill */}
                  <div className="pt-3 border-t border-slate-900 flex items-center gap-2 text-xs font-medium text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading mb-1">
              Quer ver como o seu catálogo vai ficar no celular?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Agende uma demonstração gratuita de 10 minutos e receba uma prévia interativa personalizada.
            </p>
          </div>

          <a
            id="how-it-works-whatsapp-cta"
            href={getWhatsAppLink('Olá! Gostaria de ver como o catálogo do FarmaFlow funciona na prática para a minha drogaria.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg shadow-emerald-500/25 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ver na Prática no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
