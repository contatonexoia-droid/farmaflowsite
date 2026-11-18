import React from 'react';
import { MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { getWhatsAppLink, WHATSAPP_DISPLAY } from '../data/content';

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
              <img 
                src="/logo.png" 
                alt="FarmaFlow - Catálogo Digital e Automação de WhatsApp para Farmácias" 
                className="h-8 sm:h-9 w-auto max-w-[150px] object-contain"
              />
              <span className="text-[10px] font-mono uppercase bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800 self-center">
                by nexoIa
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Catálogo digital inteligente e automação de orçamentos no WhatsApp para farmácias e drogarias que buscam alta conversão, 0% de comissão e conformidade com receitas controladas (SNGPC).
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
              <li><a href="#solucao" className="hover:text-cyan-400 transition-colors">O Problema no Balcão</a></li>
              <li><a href="#comparativo" className="hover:text-cyan-400 transition-colors">Comparativo Rotina</a></li>
              <li><a href="#como-funciona" className="hover:text-cyan-400 transition-colors">Como Funciona</a></li>
              <li><a href="#modulo-receitas" className="hover:text-cyan-400 transition-colors">Módulo de Receitas SNGPC</a></li>
              <li><a href="#recursos" className="hover:text-cyan-400 transition-colors">Recursos & Painel</a></li>
              <li><a href="#planos" className="hover:text-cyan-400 transition-colors">Planos & Preços</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Support */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase font-bold text-white tracking-wider">
              Atendimento & Implantação
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dúvidas sobre integração com o ERP da sua drogaria, migração de produtos ou demonstração ao vivo? Fale conosco:
            </p>

            <a
              href={getWhatsAppLink('Olá! Gostaria de conhecer o FarmaFlow para a minha farmácia.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-emerald-400 hover:text-white font-mono text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
          </div>

        </div>

        {/* Semantic SEO & AI Search (GEO) Authority Block for Pharmacy Niche */}
        <div className="py-8 border-b border-slate-900/80 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p className="font-mono text-slate-400 uppercase tracking-wider text-[10px]">
            Soluções Especializadas para o Varejo Farmacêutico
          </p>
          <p>
            O <strong className="text-slate-400">FarmaFlow</strong> é a plataforma de <strong className="text-slate-400">catálogo digital para farmácias e drogarias</strong> projetada para acelerar o <strong className="text-slate-400">atendimento e delivery no WhatsApp</strong> sem taxas de marketplace. Ideal para farmácias independentes, redes de drogarias e perfumarias que buscam <strong className="text-slate-400">validação digital de receitas controladas (SNGPC)</strong>, <strong className="text-slate-400">encarte digital interativo com ofertas relâmpago</strong>, sincronização via <strong className="text-slate-400">Agente Desktop</strong> e atendimento automatizado com <strong className="text-slate-400">Agente de Inteligência Artificial 24/7</strong>.
          </p>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <p>&copy; 2026 FarmaFlow & nexoIa. Todos os direitos reservados.</p>
            <span aria-hidden="true">·</span>
            <a href="/sitemap.xml" className="hover:text-slate-300 transition-colors">Sitemap</a>
            <span aria-hidden="true">·</span>
            <a href="/llms.txt" className="hover:text-slate-300 transition-colors" title="Documentação estruturada para Inteligência Artificial">Índice IA (LLMs)</a>
          </div>

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
