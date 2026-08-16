import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, MessageCircle, ArrowRight } from 'lucide-react';
import { faqItems, getWhatsAppLink } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Receitas', 'Vendas', 'Integração', 'Planos'];

  const filteredItems = faqItems.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'Todos' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-5">
            Perguntas Frequentes sobre o FarmaFlow
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Tudo o que você precisa saber sobre o catálogo, validação de receitas e ativação na sua drogaria.
          </p>
        </div>

        {/* Search Input & Category Pills */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar dúvida (Ex: receitas, valores, WhatsApp, Agente Desktop)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500/60 focus:outline-none text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 transition-colors"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 p-6 glass-card rounded-2xl border border-slate-800 text-slate-400 text-xs">
              Nenhuma pergunta encontrada com o termo pesquisado. 
              <br />
              Fale diretamente conosco no WhatsApp para tirar sua dúvida!
            </div>
          ) : (
            filteredItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`glass-card rounded-2xl border transition-all overflow-hidden ${
                    isOpen ? 'border-cyan-500/40 bg-slate-950/90 shadow-md shadow-cyan-950/20' : 'border-slate-800/80 bg-slate-950/60'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono uppercase bg-slate-900 text-cyan-400 px-2 py-0.5 rounded border border-slate-800 hidden sm:inline-block">
                        {item.category}
                      </span>
                      <span className="font-bold text-xs sm:text-sm text-white font-heading">
                        {item.question}
                      </span>
                    </div>

                    <div className={`w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-cyan-400 border-cyan-500/30' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold text-white block">Ainda tem alguma pergunta sobre a sua farmácia?</span>
            <span className="text-[11px] text-slate-400">Nosso consultor farmacêutico responde em menos de 2 minutos no WhatsApp.</span>
          </div>

          <a
            href={getWhatsAppLink('Olá! Gostaria de tirar uma dúvida sobre o FarmaFlow.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 hover:text-white font-semibold text-xs flex items-center gap-2 border border-emerald-500/30 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
