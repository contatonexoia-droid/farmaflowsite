import React, { useState } from 'react';
import { 
  Smartphone, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  X, 
  CheckCircle2, 
  Layers, 
  ShoppingBag, 
  FileText, 
  Zap, 
  ShieldCheck,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { getWhatsAppLink } from '../data/content';
import farmaflowLogo from '../assets/images/farmaflow/logo.png';

interface ScreenItem {
  id: string;
  title: string;
  category: 'catalogo' | 'carrinho' | 'receitas' | 'navegacao';
  categoryLabel: string;
  image: string;
  description: string;
  highlight: string;
}

export const AppScreenshotsShowcase: React.FC = () => {
  const screens: ScreenItem[] = [
    {
      id: 'screen-1',
      title: 'Página Inicial & Catálogo Dinâmico',
      category: 'catalogo',
      categoryLabel: 'Vitrine Digital',
      image: '/screens/104821.jpg',
      description: 'Interface limpa com banners de promoções, busca rápida de medicamentos e categorias organizadas.',
      highlight: 'Design responsivo e carregamento instantâneo'
    },
    {
      id: 'screen-2',
      title: 'Ofertas Relâmpago & Cupons',
      category: 'catalogo',
      categoryLabel: 'Campanhas',
      image: '/screens/104822.jpg',
      description: 'Destaque visual para produtos em promoção, descontos progressivos e cupons ativos para o cliente.',
      highlight: 'Aumento de ticket médio e conversão'
    },
    {
      id: 'screen-3',
      title: 'Detalhes do Medicamento & Posologia',
      category: 'catalogo',
      categoryLabel: 'Ficha Técnica',
      image: '/screens/104823.jpg',
      description: 'Apresentação clara de dosagem, fabricante, indicação de uso e aviso de receita médica obrigatória.',
      highlight: 'Transparência e segurança farmacêutica'
    },
    {
      id: 'screen-4',
      title: 'Upload de Receita Médica no Carrinho',
      category: 'receitas',
      categoryLabel: 'Módulo Receitas',
      image: '/screens/104824.jpg',
      description: 'Bloqueio inteligente de finalização que exige a foto ou PDF legível antes do envio do pedido.',
      highlight: 'Conformidade com a legislação da Anvisa'
    },
    {
      id: 'screen-5',
      title: 'Carrinho de Compras & Resumo',
      category: 'carrinho',
      categoryLabel: 'Carrinho Ágil',
      image: '/screens/104825.jpg',
      description: 'Revisão simples de itens, cálculo de descontos, opções de entrega e forma de pagamento preferida.',
      highlight: 'Zero atrito para o paciente finalizar'
    },
    {
      id: 'screen-6',
      title: 'Envio Formatado Direto no WhatsApp',
      category: 'carrinho',
      categoryLabel: 'Integração WhatsApp',
      image: '/screens/104826.jpg',
      description: 'O orçamento chega pronto no WhatsApp do balcão, com link da receita e dados completos do cliente.',
      highlight: 'Economia de 5 a 10 min por atendimento'
    },
    {
      id: 'screen-7',
      title: 'Navegação por Categorias Especializadas',
      category: 'navegacao',
      categoryLabel: 'Categorias',
      image: '/screens/104827.jpg',
      description: 'Dermocosméticos, higiene, suplementos, infantil e medicamentos organizados com ícones intuitivos.',
      highlight: 'Facilidade para todas as faixas etárias'
    },
    {
      id: 'screen-8',
      title: 'Módulo de Dermocosméticos & Beleza',
      category: 'catalogo',
      categoryLabel: 'Dermocosméticos',
      image: '/screens/104828.jpg',
      description: 'Apresentação nobre para protetores solares, hidratantes e séruns com fotos em alta definição.',
      highlight: 'Valorização de linhas de maior margem'
    },
    {
      id: 'screen-9',
      title: 'Confirmação de Pedido & Localização',
      category: 'carrinho',
      categoryLabel: 'Checkout',
      image: '/screens/104829.jpg',
      description: 'Coleta precisa de endereço para tele-entrega ou opção de retirada expressa no balcão da farmácia.',
      highlight: 'Logística de entrega sem erros de endereço'
    },
    {
      id: 'screen-10',
      title: 'Painel do Farmacêutico & Gestão',
      category: 'receitas',
      categoryLabel: 'Gestão RT',
      image: '/screens/104830.jpg',
      description: 'Visualização rápida das receitas pendentes, aprovação com um clique e histórico de pedidos.',
      highlight: 'Controle operacional total do balcão'
    }
  ];

  const [activeFilter, setActiveFilter] = useState<'all' | 'catalogo' | 'carrinho' | 'receitas' | 'navegacao'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [zoomImage, setZoomImage] = useState<ScreenItem | null>(null);

  const filteredScreens = activeFilter === 'all' 
    ? screens 
    : screens.filter(s => s.category === activeFilter);

  const activeScreen = filteredScreens[currentIndex] || filteredScreens[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredScreens.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredScreens.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="telas-app" className="py-24 relative overflow-hidden bg-slate-950 border-b border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-mono mb-4">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Telas Reais do Aplicativo FarmaFlow</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-5">
            Veja a Experiência Real do <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">FarmaFlow</span> no Celular
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Desenvolvido sob medida para a rotina da farmácia. Navegue pelas telas reais do catálogo, carrinho, módulo de receitas e envio automático no WhatsApp.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {[
            { id: 'all', label: 'Todas as Telas (10)', icon: Layers },
            { id: 'catalogo', label: 'Catálogo & Ofertas', icon: ShoppingBag },
            { id: 'carrinho', label: 'Carrinho & Checkout', icon: Zap },
            { id: 'receitas', label: 'Módulo de Receitas', icon: ShieldCheck },
            { id: 'navegacao', label: 'Categorias & Busca', icon: Smartphone }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id as any);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Smartphone Mockup Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              
              {/* Outer Phone Frame */}
              <div className="w-[290px] sm:w-[330px] rounded-[44px] p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 border-4 border-slate-700 shadow-2xl shadow-cyan-950/80 relative">
                
                {/* Speaker Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 mr-2 border border-slate-800"></div>
                  <div className="w-8 h-1 rounded-full bg-slate-800"></div>
                </div>

                {/* Inner Screen Display */}
                <div className="relative rounded-[36px] overflow-hidden bg-black aspect-[9/19.5] border border-slate-800">
                  <img
                    src={activeScreen.image}
                    alt={activeScreen.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Zoom Overlay Trigger Button */}
                  <button
                    onClick={() => setZoomImage(activeScreen)}
                    className="absolute bottom-4 right-4 p-2.5 rounded-full bg-slate-950/85 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 border border-slate-800 shadow-xl transition-all flex items-center justify-center gap-1.5 backdrop-blur-md text-xs font-mono font-bold group/btn"
                    title="Ampliar Tela"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span className="hidden group-hover/btn:inline pr-1">Ampliar</span>
                  </button>

                  {/* Screen Number Badge */}
                  <div className="absolute top-5 left-4 z-10 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-cyan-300 font-bold">
                    Tela {currentIndex + 1} / {filteredScreens.length}
                  </div>
                </div>

              </div>

              {/* Navigation Arrows for Mobile */}
              <div className="flex items-center justify-between mt-5 px-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-400 transition-all hover:scale-110 flex items-center justify-center"
                  aria-label="Tela anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1.5">
                  {filteredScreens.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx 
                          ? 'w-6 bg-cyan-400' 
                          : 'w-2 bg-slate-800 hover:bg-slate-700'
                      }`}
                      aria-label={`Ir para tela ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-400 transition-all hover:scale-110 flex items-center justify-center"
                  aria-label="Próxima tela"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>

          {/* Right: Screen Details & Thumbnail Selector */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Active Screen Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
              
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  {activeScreen.categoryLabel}
                </span>

                <span className="text-xs font-mono text-slate-400">
                  {activeScreen.id.toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {activeScreen.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeScreen.description}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5 text-xs text-emerald-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Diferencial FarmaFlow:</strong> {activeScreen.highlight}</span>
              </div>

              <div className="pt-2 flex items-center gap-3 flex-wrap">
                <a
                  href={getWhatsAppLink(`Olá! Vi as telas do aplicativo FarmaFlow no site e gostaria de agendar uma demonstração para a minha farmácia.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-heading font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-102 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-slate-950 fill-current" />
                  <span>Quero Esse Aplicativo na Minha Farmácia</span>
                </a>

                <button
                  onClick={() => setZoomImage(activeScreen)}
                  className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium transition-colors border border-slate-700 flex items-center gap-1.5"
                >
                  <ZoomIn className="w-4 h-4 text-cyan-400" />
                  <span>Ver em Tela Cheia</span>
                </button>
              </div>

            </div>

            {/* Thumbnails Strip */}
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
                <span>Clique para alternar entre as telas:</span>
                <span>{filteredScreens.length} telas disponíveis</span>
              </div>

              <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
                {filteredScreens.map((s, idx) => {
                  const isSelected = currentIndex === idx;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative rounded-xl overflow-hidden aspect-[9/16] border-2 transition-all group ${
                        isSelected
                          ? 'border-cyan-400 ring-2 ring-cyan-400/40 scale-105 shadow-lg'
                          : 'border-slate-800 hover:border-slate-600 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1">
                        <span className="text-[9px] font-mono text-white font-bold truncate w-full text-left">
                          #{idx + 1}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* FULLSCREEN ZOOM MODAL */}
      {zoomImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setZoomImage(null)}
        >
          <div 
            className="relative max-w-md w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-slate-900 text-white hover:bg-red-600 transition-colors border border-slate-700"
              aria-label="Fechar zoom"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-3xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl bg-slate-950 max-h-[80vh]">
              <img
                src={zoomImage.image}
                alt={zoomImage.title}
                className="w-full h-auto max-h-[75vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-slate-950 border-t border-slate-800 text-center">
                <h4 className="text-white font-bold font-heading text-sm">{zoomImage.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{zoomImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
