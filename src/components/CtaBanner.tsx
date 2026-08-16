import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 text-center border-2 border-cyan-500/30 relative overflow-hidden shadow-2xl shadow-cyan-500/10 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950">
          
          {/* Glowing Accents */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono text-xs uppercase tracking-widest bg-emerald-950/90 px-3.5 py-1.5 rounded-full border border-emerald-800/80 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSFORME O BALCÃO DA SUA FARMÁCIA HOJE</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading leading-tight max-w-3xl mx-auto mb-6">
            Pronto para Faturar Mais e Eliminar Gargalos no WhatsApp?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Acelere seus orçamentos, valide receitas de medicamentos controlados e ofereça uma experiência de compra moderna para os clientes da sua região.
          </p>

          {/* WhatsApp CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              id="final-cta-whatsapp-btn"
              href={getWhatsAppLink('Olá Evandro! Quero contratar o FarmaFlow e começar a vender com velocidade no WhatsApp.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto relative group overflow-hidden rounded-full p-px font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full animate-pulse"></span>
              <span className="relative block px-10 py-5 bg-slate-950 rounded-full text-white font-heading font-bold flex items-center justify-center gap-3 transition-colors group-hover:bg-transparent">
                <MessageCircle className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />
                <span>Quero Começar no FarmaFlow Agora</span>
                <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sem taxa de adesão</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ativação no mesmo dia</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>0% de comissão sobre vendas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
