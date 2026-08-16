import React from 'react';
import { Activity, MessageCircle, Heart, ArrowUp, Smartphone } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';
import farmaflowLogo from '../assets/images/farmaflow/logo.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs sm:text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 rounded-xl overflow-hidden flex items-center justify-center p-1 bg-slate-900 border border-slate-800 shadow-md">
                <img 
                  src={farmaflowLogo} 
                  alt="FarmaFlow Logo" 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Farma<span className="text-cyan-400">Flow</span>
              </span>
              <span className="text-[10px] font-mono uppercase bg-slate-900 text-cyan-400 px-2 py-0.5 rounded border border-slate-800">
                by nexoIa
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Catálogo digital inteligente e automação de orçamentos no WhatsApp para farmácias e drogarias que buscam alta conversão e conformidade com receitas controladas.
            </p>

            <div className="pt-2 text-xs text-slate-400 font-mono">
              Idealizado e Desenvolvido por <strong className="text-white">Evandro Luiz Cabral da Silva</strong> — Farmacêutico & Dev <span className="text-cyan-400">nexoIa</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-white tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#telas-app" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5" /> Telas do App (10)</a></li>
              <li><a href="#funcionalidades" className="hover:text-cyan-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#modulo-receitas" className="hover:text-cyan-400 transition-colors">Módulo de Receitas</a></li>
              <li><a href="#comparativo" className="hover:text-cyan-400 transition-colors">Caos vs FarmaFlow</a></li>
              <li><a href="#calculadora" className="hover:text-cyan-400 transition-colors">Calculadora ROI</a></li>
              <li><a href="#planos" className="hover:text-cyan-400 transition-colors">Planos & Preços</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Support */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase font-bold text-white tracking-wider">
              Atendimento & Suporte
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dúvidas sobre integração, migração de produtos ou suporte técnico? Fale conosco:
            </p>

            <a
              href={getWhatsAppLink('Olá! Gostaria de suporte sobre o FarmaFlow.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-emerald-400 hover:text-white font-mono text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: (22) 98155-2881</span>
            </a>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; 2026 FarmaFlow & nexoIa. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
