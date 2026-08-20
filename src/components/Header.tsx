import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Módulo de Receitas', href: '#modulo-receitas' },
    { label: 'Caos vs FarmaFlow', href: '#comparativo' },
    { label: 'Calculadora ROI', href: '#calculadora' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300 pointer-events-auto">
      <div className={`mx-auto transition-all duration-300 px-4 sm:px-6 lg:px-8 ${isScrolled ? 'pt-2.5 max-w-6xl' : 'pt-4 max-w-7xl'}`}>
        <nav 
          id="main-navigation"
          className={`glass-panel rounded-full transition-all duration-300 flex items-center justify-between border ${
            isScrolled 
              ? 'py-2.5 px-5 bg-slate-950/90 shadow-2xl shadow-cyan-950/40 border-cyan-500/20 backdrop-blur-2xl' 
              : 'py-3.5 px-6 bg-slate-950/70 shadow-xl shadow-black/60 border-slate-800/80 backdrop-blur-xl'
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="h-9 sm:h-10 flex items-center">
              <img 
                src="https://i.postimg.cc/pVzNnT3b/file-0000000000cc820eb03e0bab6fe634f2.png" 
                alt="FarmaFlow Logo" 
                className="h-8 sm:h-9 w-auto max-w-[140px] sm:max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="flex h-2 w-2 relative self-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 hover:-translate-y-0.5 inline-flex items-center gap-1"
              >
                {link.label === 'Módulo de Receitas' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#planos"
              className="text-xs font-semibold text-slate-300 hover:text-white px-3.5 py-2 rounded-full transition-colors hidden md:inline-block"
            >
              Ver Planos
            </a>
            
            <a
              id="header-cta-whatsapp"
              href={getWhatsAppLink('Olá! Gostaria de ver uma demonstração do FarmaFlow para a minha farmácia.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
              <span>Demonstração Grátis</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 rounded-2xl glass-panel bg-slate-950/95 border border-slate-800 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-slate-900/60 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
              <a
                href={getWhatsAppLink('Olá! Gostaria de conhecer os planos do FarmaFlow para a minha farmácia.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Falar no WhatsApp com Farmacêutico</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
