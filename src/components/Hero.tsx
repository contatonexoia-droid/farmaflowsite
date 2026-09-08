import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ShoppingBag, 
  FileText, 
  TrendingUp, 
  Laptop, 
  Sparkles,
  Lock,
  Send,
  Paperclip,
  Flame,
  Bot,
  User,
  Check
} from 'lucide-react';
import { getWhatsAppLink, sampleProducts, samplePrescriptions } from '../data/content';
import vitaminaCImg from '../assets/images/vitamina_c_suplemento_1786878956085.jpg';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'catalogo' | 'receitas' | 'whatsapp' | 'agente' | 'ia'>('catalogo');
  const [timerSeconds, setTimerSeconds] = useState(942); // 15:42
  const [cartItems, setCartItems] = useState<string[]>(['prod-1']);
  const [couponApplied, setCouponApplied] = useState(true);
  const [aiQuestion, setAiQuestion] = useState('Tem algo bom para imunidade e cansaço?');

  // Live countdown timer simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 1800));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `00:${m}:${s}`;
  };

  const toggleCartItem = (id: string) => {
    if (cartItems.includes(id)) {
      setCartItems(cartItems.filter(i => i !== id));
    } else {
      setCartItems([...cartItems, id]);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/15 via-teal-500/10 to-emerald-500/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-2/3 -left-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none -z-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Animated Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs sm:text-sm font-mono text-emerald-300 mb-8 backdrop-blur-md shadow-lg shadow-emerald-500/10 hover:border-emerald-400/50 transition-colors">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-semibold tracking-wide uppercase">O Próximo Passo da Sua Farmácia</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span className="text-slate-400 hidden sm:inline-block">Vendas pelo WhatsApp</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] max-w-5xl mx-auto font-heading text-white">
          Seu WhatsApp Não Precisa Ser <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
            Um Balcão Lotado.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          Transforme perguntas repetidas em pedidos organizados. Dê ao cliente liberdade para escolher e à sua equipe tempo para atender melhor.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            id="hero-primary-whatsapp-btn"
            href={getWhatsAppLink('Olá! Quero conhecer o FarmaFlow e organizar as vendas no WhatsApp da minha farmácia.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative group overflow-hidden rounded-full p-px font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full animate-pulse"></span>
            <span className="relative block px-8 py-4 bg-slate-950 rounded-full text-white font-heading font-bold flex items-center justify-center gap-3 transition-colors group-hover:bg-transparent">
              <MessageCircle className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />
              <span>Quero Vender com Mais Organização</span>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="#demonstracao"
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Veja na Prática ↓</span>
          </a>
        </div>

        {/* Hero Trust Points */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-7 mb-12 text-xs sm:text-sm text-slate-300 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Catálogo com a sua marca</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Pedidos organizados no WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Estoque e preços sincronizados</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Módulo de receitas SNGPC</span>
          </div>
        </div>

        {/* INTERACTIVE PRODUCT SIMULATOR */}
        <div id="demonstracao" className="relative max-w-5xl mx-auto scroll-mt-28">
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/25 via-emerald-500/20 to-teal-500/25 rounded-3xl blur-2xl opacity-75 pointer-events-none"></div>

          <div className="relative rounded-2xl sm:rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-2xl text-left">
            
            {/* Top Window Bar */}
            <div className="h-12 bg-slate-900/90 border-b border-slate-800/90 px-4 sm:px-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>

              {/* URL simulator */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950/80 px-4 py-1.5 rounded-full border border-slate-800 max-w-xs sm:max-w-md truncate">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">farmaflow.site/drogaria-saolucas</span>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>AO VIVO</span>
              </div>
            </div>

            {/* Interactive Feature Tabs Switcher */}
            <div className="bg-slate-950/80 border-b border-slate-800/80 px-4 sm:px-6 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveTab('catalogo')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'catalogo'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Flame className="w-4 h-4 text-orange-400" />
                <span>1. Catálogo & Ofertas Relâmpago</span>
              </button>

              <button
                onClick={() => setActiveTab('receitas')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'receitas'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>2. Validador de Receitas (SNGPC)</span>
              </button>

              <button
                onClick={() => setActiveTab('whatsapp')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'whatsapp'
                    ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm shadow-teal-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <MessageCircle className="w-4 h-4 text-teal-400" />
                <span>3. Pedido WhatsApp 1-Click</span>
              </button>

              <button
                onClick={() => setActiveTab('agente')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'agente'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm shadow-purple-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Laptop className="w-4 h-4 text-purple-400" />
                <span>4. Agente Desktop Sync</span>
              </button>

              <button
                onClick={() => setActiveTab('ia')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'ia'
                    ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 border border-purple-500/60 shadow-md shadow-purple-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Bot className="w-4 h-4 text-pink-400" />
                <span>5. Chat & Agente de IA</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-purple-900/80 text-purple-300 border border-purple-600/60">
                  PREMIUM
                </span>
              </button>
            </div>

            {/* TAB CONTENT 1: CATALOGO & OFERTAS */}
            {activeTab === 'catalogo' && (
              <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950">
                {/* Left: Product Showcase */}
                <div className="lg:col-span-8 space-y-4">
                  {/* Realtime Flash Offer Header */}
                  <div className="p-3.5 bg-gradient-to-r from-red-950/80 via-slate-900 to-slate-900 border border-red-500/40 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-lg shadow-red-950/30">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-3 w-3 rounded-full bg-red-500 animate-ping"></span>
                      <div>
                        <span className="text-red-300 text-xs sm:text-sm font-bold uppercase tracking-wider block">
                          Ofertas Relâmpago de Hoje
                        </span>
                        <span className="text-[11px] text-slate-400">Preços voltam ao normal ao zerar</span>
                      </div>
                    </div>
                    <div className="bg-slate-950 border border-red-500/40 text-red-400 font-mono font-extrabold text-sm sm:text-base px-3.5 py-1.5 rounded-xl flex items-center gap-2 shadow-inner">
                      <Clock className="w-4 h-4" />
                      <span>{formatTimer(timerSeconds)}</span>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {sampleProducts.slice(0, 2).map((product) => {
                      const inCart = cartItems.includes(product.id);
                      return (
                        <div 
                          key={product.id}
                          className={`rounded-2xl border transition-all p-3.5 flex flex-col justify-between ${
                            inCart 
                              ? 'bg-slate-900/90 border-cyan-500/50 shadow-md shadow-cyan-500/10' 
                              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <div className="relative rounded-xl overflow-hidden mb-3 bg-slate-950 h-32">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            {product.badge && (
                              <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-500/90 text-white shadow-md">
                                {product.badge}
                              </span>
                            )}
                            <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950/80 text-cyan-300 border border-slate-700">
                              -{product.discount}%
                            </span>
                          </div>

                          <div>
                            <span className="text-[10px] font-mono uppercase text-slate-400">{product.category}</span>
                            <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1 mt-0.5">{product.name}</h4>
                            
                            <div className="flex items-baseline gap-2 mt-2">
                              <span className="text-emerald-400 font-extrabold text-base font-mono">
                                R$ {product.promoPrice.toFixed(2).replace('.', ',')}
                              </span>
                              <span className="text-xs text-slate-500 line-through">
                                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={() => toggleCartItem(product.id)}
                            className={`mt-3 w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                              inCart
                                ? 'bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/30'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                            }`}
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>{inCart ? 'Adicionado ao Carrinho' : '+ Adicionar'}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Cart Summary */}
                <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                      <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-cyan-400" />
                        <span>Carrinho Inteligente</span>
                      </span>
                      <span className="text-[11px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-800 font-mono">
                        {cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'}
                      </span>
                    </div>

                    {/* Cart Items List */}
                    <div className="space-y-2 text-xs">
                      {cartItems.length === 0 ? (
                        <div className="py-8 text-center text-slate-500">
                          Clique em "+ Adicionar" nos produtos ao lado para simular o pedido
                        </div>
                      ) : (
                        cartItems.map((id) => {
                          const prod = sampleProducts.find(p => p.id === id);
                          if (!prod) return null;
                          return (
                            <div key={id} className="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800 flex justify-between items-center">
                              <div className="max-w-[140px] truncate">
                                <span className="font-semibold text-slate-200 block truncate">{prod.name}</span>
                                <span className="text-[10px] text-slate-400 font-mono">1 un.</span>
                              </div>
                              <span className="font-mono text-emerald-400 font-bold">
                                R$ {prod.promoPrice.toFixed(2).replace('.', ',')}
                              </span>
                            </div>
                          );
                        })
                      )}
                    </div>

                    {/* Coupon Box */}
                    <div className="mt-3 p-2 bg-slate-950/60 rounded-xl border border-dashed border-emerald-500/30 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-mono">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Cupom: <strong>IMPOSTOZERO</strong></span>
                      </div>
                      <span className="text-emerald-300 font-bold">-10% OFF</span>
                    </div>
                  </div>

                  {/* Cart Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="text-xs text-slate-400">Total com Desconto:</span>
                      <span className="text-lg font-mono font-extrabold text-emerald-400">
                        R$ {cartItems.length > 0 ? (cartItems.length === 1 ? '31,41' : '85,32') : '0,00'}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveTab('whatsapp')}
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Gerar Pedido no WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: RECEITAS CONTROLADAS & SNGPC */}
            {activeTab === 'receitas' && (
              <div className="p-4 sm:p-6 lg:p-8 bg-slate-950 space-y-6">
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono text-emerald-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>CONFORMIDADE LEGAL & RETENÇÃO DE RECEITAS</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      Módulo de Receitas para Medicamentos Tarja Preta e Controlados
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      O cliente adiciona remédios sob controle especial (SNGPC) e o FarmaFlow bloqueia o envio até que o paciente faça o upload legível da receita. No WhatsApp do balcão, o farmacêutico visualiza a foto e o CRM do médico na mesma hora.
                    </p>
                  </div>

                  <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                      <span className="text-xs font-bold text-slate-200">Painel do Farmacêutico</span>
                      <span className="text-[10px] font-mono text-cyan-400">Tempo Real</span>
                    </div>

                    {samplePrescriptions.map((rec) => (
                      <div key={rec.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-white">{rec.id} - {rec.patientName}</span>
                          {rec.status === 'approved' && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800 flex items-center gap-1">
                              <CheckCircle2 className="w-2.5 h-2.5" /> Aprovada
                            </span>
                          )}
                          {rec.status === 'pending' && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-800 flex items-center gap-1">
                              <Clock className="w-2.5 h-2.5 animate-pulse" /> Pendente
                            </span>
                          )}
                          {rec.status === 'rejected' && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-950 text-red-300 border border-red-800">
                              Reprovada
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span>{rec.medication}</span>
                          <span className="font-mono text-emerald-400 font-semibold">R$ {rec.total.toFixed(2).replace('.', ',')}</span>
                        </div>

                        <div className="p-2 bg-slate-900 rounded border border-dashed border-cyan-500/30 flex items-center justify-between text-[11px] text-slate-300">
                          <div className="flex items-center gap-1.5 truncate">
                            <Paperclip className="w-3 h-3 text-cyan-400" />
                            <span className="truncate">{rec.recipeFile}</span>
                          </div>
                          <span className="text-[10px] text-cyan-300 font-mono">Ver PDF</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: WHATSAPP SIMULATOR */}
            {activeTab === 'whatsapp' && (
              <div className="p-4 sm:p-6 lg:p-8 bg-slate-950">
                <div className="max-w-2xl mx-auto bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-2xl">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">WhatsApp da Farmácia</h4>
                      <p className="text-[11px] text-emerald-400 font-mono">● Pedido gerado automaticamente pelo FarmaFlow</p>
                    </div>
                  </div>

                  {/* Chat bubble */}
                  <div className="bg-[#0b1b16] border border-emerald-900/50 rounded-2xl p-4 text-xs font-mono text-slate-200 space-y-2 leading-relaxed">
                    <div className="text-emerald-400 font-bold">🛒 NOVO PEDIDO #8494 - FARMAFLOW</div>
                    <div className="text-slate-400 text-[11px]">Cliente: Juliana Castro | Tel: (22) 99876-5432</div>
                    <div className="border-t border-emerald-900/40 pt-2 space-y-1">
                      <div>📦 1x Vitamina C + Zinco - R$ 34,90</div>
                      <div>📦 1x Protetor Solar FPS 70 - R$ 59,90</div>
                      <div>📋 Receita Anexada: https://farmaflow.site/r/8494.pdf</div>
                    </div>
                    <div className="border-t border-emerald-900/40 pt-2 flex justify-between font-bold text-emerald-300">
                      <span>Total:</span>
                      <span>R$ 85,32 (Cupom Aplicado)</span>
                    </div>
                    <div className="text-[11px] text-slate-400 pt-1">
                      📍 Entrega: Rua das Flores, 142 - Centro (Macaé - RJ)
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                    <span>O atendente só precisa responder: "Confirmado! Entregamos em 30 min."</span>
                    <span className="text-emerald-400 font-bold font-mono">0 retrabalho</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 4: AGENTE DESKTOP */}
            {activeTab === 'agente' && (
              <div className="p-4 sm:p-6 lg:p-8 bg-slate-950">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-500/40 text-xs font-mono text-purple-300">
                      <Laptop className="w-3.5 h-3.5 text-purple-400" />
                      <span>ALTA DISPONIBILIDADE & ESTABILIDADE</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      Agente Desktop no Computador do Balcão
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Uma aplicação leve que roda em segundo plano na bandeja do Windows (System Tray). Mantém os estoques, preços e promoções 100% atualizados sem consumir memória da máquina do atendente.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between text-purple-300 border-b border-slate-800 pb-2">
                      <span className="font-bold">FarmaFlow Desktop Agent v2.4</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">ONLINE</span>
                    </div>
                    <div className="space-y-1.5 text-slate-300 text-[11px]">
                      <div className="flex justify-between">
                        <span>Latência de Sincronização:</span>
                        <span className="text-emerald-400 font-bold">18ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Itens no Catálogo Ativo:</span>
                        <span className="text-white font-bold">4.820 produtos</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status das Ofertas:</span>
                        <span className="text-cyan-400">Realtime Sincronizado</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Uso de CPU / RAM:</span>
                        <span className="text-slate-400">0.4% / 18MB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 5: CHAT & AGENTE DE IA (PLANO PREMIUM) */}
            {activeTab === 'ia' && (
              <div className="p-4 sm:p-6 lg:p-8 bg-slate-950">
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left explanation */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r from-purple-950/80 to-pink-950/80 border border-purple-500/40 text-xs font-mono text-purple-300">
                      <Bot className="w-3.5 h-3.5 text-pink-400" />
                      <span>EXCLUSIVO NO PLANO PREMIUM</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      Chat com Inteligência Artificial & Agente Farmacêutico 24/7
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      O Agente de IA do FarmaFlow atende seus clientes no WhatsApp e no catálogo no exato segundo em que eles chamam. Tira dúvidas de posologia, sugere produtos complementares com alta conversão e fecha a venda mesmo de madrugada.
                    </p>

                    <div className="space-y-2 text-xs text-slate-300 pt-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Respostas em menos de 1 segundo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>Cross-sell automático (ex: antibiótico + probiótico)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Transbordo inteligente para farmacêutico humano</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Chat Interactive Simulator */}
                  <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-purple-900/40 p-4 sm:p-5 shadow-2xl space-y-3.5">
                    
                    {/* Chat Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md">
                            <Bot className="w-5 h-5" />
                          </div>
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900"></span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs sm:text-sm font-bold text-white">FarmaBot IA Especialista</h4>
                            <span className="px-2 py-0.2 rounded text-[9px] font-mono bg-purple-950 text-purple-300 border border-purple-700">
                              PLANO PREMIUM
                            </span>
                          </div>
                          <p className="text-[10px] text-emerald-400 font-mono">Pronto para responder 24h/dia</p>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                        Atendimento IA
                      </span>
                    </div>

                    {/* Messages Flow */}
                    <div className="space-y-3 text-xs">
                      
                      {/* Customer message */}
                      <div className="flex items-start gap-2.5 justify-end">
                        <div className="bg-slate-800 text-slate-100 rounded-2xl rounded-tr-sm p-3 max-w-[85%] border border-slate-700">
                          <p className="leading-relaxed">
                            Olá! Estou me sentindo com imunidade baixa e muito cansaço ultimamente. Vocês têm algo bom em promoção hoje?
                          </p>
                          <span className="text-[10px] text-slate-400 font-mono block text-right mt-1">14:32</span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 shrink-0 text-[10px] font-bold">
                          C
                        </div>
                      </div>

                      {/* Bot AI message */}
                      <div className="flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shrink-0 text-[10px]">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                        <div className="bg-[#150f24] border border-purple-900/50 rounded-2xl rounded-tl-sm p-3.5 max-w-[90%] text-slate-200 space-y-2.5">
                          <p className="leading-relaxed">
                            Olá! Sim! Para imunidade e disposição, recomendamos a combinação de <strong>Vitamina C 1g + Zinco Quelato</strong> associado a um <strong>Complexo B de alta absorção</strong>.
                          </p>

                          {/* Dynamic Recommended Product Card inside Chat */}
                          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-purple-500/30 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-10 h-10 rounded-lg bg-slate-900 overflow-hidden shrink-0">
                                <img 
                                  src={vitaminaCImg} 
                                  alt="Vitamina C" 
                                  className="w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <div>
                                <span className="font-bold text-white text-[11px] block">Kit Imunidade Forte 60 caps</span>
                                <span className="text-[10px] text-emerald-400 font-mono font-bold">De R$ 54,90 por R$ 34,90</span>
                              </div>
                            </div>

                            <button 
                              onClick={() => {
                                setActiveTab('whatsapp');
                              }}
                              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-[10px] whitespace-nowrap shadow hover:scale-105 transition-transform"
                            >
                              + Adicionar Pedido
                            </button>
                          </div>

                          <p className="text-[11px] text-purple-300">
                            💡 <em>Deseja que eu monte o seu pedido para entrega agora pelo WhatsApp?</em>
                          </p>
                          <span className="text-[10px] text-slate-500 font-mono block text-right">14:32 • Resposta em 0.4s</span>
                        </div>
                      </div>

                    </div>

                    {/* Chat Input Simulated */}
                    <div className="pt-2 flex items-center gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={aiQuestion}
                          onChange={(e) => setAiQuestion(e.target.value)}
                          placeholder="Pergunte qualquer medicamento ou sintoma..."
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-purple-500/60 font-sans"
                        />
                      </div>
                      <button
                        onClick={() => setActiveTab('whatsapp')}
                        className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-purple-600/30 transition-all"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Enviar</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            )}

          </div>
        </div>

        {/* Hero Footer Strip from Attachment */}
        <div className="mt-14 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <span className="text-emerald-400 font-bold uppercase tracking-wider text-center md:text-left">
            FEITO PARA A ROTINA REAL DAS DROGARIAS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-slate-300">
            <span>Catálogo digital</span>
            <span className="text-emerald-400">✦</span>
            <span>Carrinho de compras</span>
            <span className="text-emerald-400">✦</span>
            <span>Estoque integrado</span>
            <span className="text-emerald-400">✦</span>
            <span>Inteligência de vendas</span>
          </div>
        </div>

      </div>
    </section>
  );
};
