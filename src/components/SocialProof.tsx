import React from 'react';
import { Award, ShieldCheck, HeartPulse, Sparkles, TrendingUp, Zap, Clock, CheckCircle2, MessageSquareCode } from 'lucide-react';
import { pharmacyMetrics } from '../data/content';
import evandroPortrait from '../assets/images/evandro_original_raw_1786873248805.jpg';

export const SocialProof: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 mb-4">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>MÉTRICAS & EFICIÊNCIA OPERACIONAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-5">
            Quem Usa, Transforma o Atendimento da Farmácia
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Indicadores reais de velocidade de atendimento, conformidade de receitas e aumento de conversão no balcão e WhatsApp.
          </p>
        </div>

        {/* Data & Metrics Grid (6 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {pharmacyMetrics.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-800/80 flex flex-col justify-between relative group hover:border-cyan-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Metric Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-slate-900 text-cyan-300 border border-slate-800">
                    {item.category}
                  </span>
                  {item.trend && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold">
                      <TrendingUp className="w-3 h-3" />
                      <span>{item.trend}</span>
                    </span>
                  )}
                </div>

                {/* Big Metric Value */}
                <div className="mb-3">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 font-heading block">
                    {item.value}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1.5 font-heading">
                    {item.label}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Verified Icon Indicator */}
              <div className="flex items-center gap-2 pt-5 mt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Padrão nativo FarmaFlow</span>
              </div>
            </div>
          ))}
        </div>

        {/* Creator / Founder & Developer Authority Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/40 max-w-4xl mx-auto bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid sm:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
            <div className="sm:col-span-4 text-center sm:text-left flex flex-col items-center sm:items-start">
              <div className="relative inline-block group">
                <img
                  src={evandroPortrait}
                  alt="Evandro Luiz Cabral da Silva - Farmacêutico e Desenvolvedor do FarmaFlow"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-cyan-400/60 shadow-xl shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 p-1.5 rounded-xl shadow-lg border border-slate-950">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3 text-center sm:text-left">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                  <CheckCircle2 className="w-3 h-3" /> Farmacêutico & Dev
                </span>
              </div>
            </div>

            <div className="sm:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-cyan-400 text-xs font-mono">
                <HeartPulse className="w-3.5 h-3.5" />
                <span>DESENVOLVIDO POR QUEM VIVE A ROTINA DA FARMÁCIA</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Criado por Farmacêutico para Farmacêuticos
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                "O FarmaFlow nasceu da vivência diária no balcão e no plantão farmacêutico. Desenvolvemos cada detalhe do sistema — desde a retenção e conformidade das receitas médicas até a velocidade 1-Click no WhatsApp e a inteligência artificial — para que a sua drogaria venda com máxima agilidade e total segurança jurídica."
              </p>

              <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400 font-mono">
                <div>
                  <strong className="text-white text-sm block sm:inline">Evandro Luiz Cabral da Silva</strong>
                  <span className="text-slate-400 sm:ml-2">— Farmacêutico & Idealizador</span>
                </div>
                <span className="text-cyan-400 font-bold bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-800/50 self-start sm:self-auto">
                  nexoIa Tecnologia
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

