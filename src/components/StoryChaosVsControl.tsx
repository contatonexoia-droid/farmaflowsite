import React, { useState } from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  TrendingDown, 
  TrendingUp,
  MessageSquare,
  FileSpreadsheet,
  Layers
} from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const StoryChaosVsControl: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'both' | 'chaos' | 'farmaflow'>('both');

  const chaosPoints = [
    {
      title: 'Troca Interminável de Mensagens',
      desc: 'Até 15 minutos digitando valores, dosagens e marcas para um único cliente de R$ 30,00.',
      metric: '15 min/atendimento',
      icon: Clock
    },
    {
      title: 'Fila & Desistência de Clientes',
      desc: 'Enquanto o balconista consulta o preço no sistema, o cliente pesquisa no concorrente e compra lá.',
      metric: '35% de abandono',
      icon: TrendingDown
    },
    {
      title: 'Erros e Preços Informados Errado',
      desc: 'Digitação manual causa divergência de valores no caixa, estresse no balcão e prejuízo financeiro.',
      metric: 'Retrabalho constante',
      icon: AlertTriangle
    },
    {
      title: 'Receitas Médicas Perdidas no Chat',
      desc: 'Fotos de receitas chegam soltas sem identificação clara, gerando confusão no SNGPC e risco legal.',
      metric: 'Risco de conformidade',
      icon: XCircle
    }
  ];

  const controlPoints = [
    {
      title: 'Pedido Pronto em 10 Segundos',
      desc: 'O cliente monta o carrinho com fotos, dosagens e cupons e envia tudo formatado no WhatsApp.',
      metric: '10 seg/fechamento',
      icon: Zap
    },
    {
      title: 'Zero Fila & Máxima Conversão',
      desc: 'O cliente não espera orçamento. Ele visualiza produtos com preços atualizados e compra na hora.',
      metric: '+38% nas vendas',
      icon: TrendingUp
    },
    {
      title: 'Precisão e Totais Automáticos',
      desc: 'Preços, descontos e taxas de entrega calculados diretamente pelo catálogo sem intervenção manual.',
      metric: '100% de precisão',
      icon: CheckCircle2
    },
    {
      title: 'Módulo de Receitas SNGPC Integrado',
      desc: 'Upload obrigatório no carrinho com anexo direto na comanda do WhatsApp e painel do farmacêutico.',
      metric: 'Conformidade total',
      icon: Sparkles
    }
  ];

  return (
    <section id="comparativo" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>A VERDADE DO BALCÃO FARMACÊUTICO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-5">
            Do Caos do Atendimento Manual à <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Alta Performance FarmaFlow
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Se a sua drogaria ainda responde cotações digitando item por item no WhatsApp, você está desperdiçando tempo da equipe e deixando faturamento na mesa todos os dias.
          </p>
        </div>

        {/* View Toggle Tabs on Mobile/Desktop */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-900/90 border border-slate-800 p-1.5 rounded-2xl flex items-center gap-1">
            <button
              onClick={() => setSelectedView('both')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedView === 'both'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Comparativo Completo
            </button>
            <button
              onClick={() => setSelectedView('chaos')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedView === 'chaos'
                  ? 'bg-rose-950/80 text-rose-300 border border-rose-800/60 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              O Caos Manual
            </button>
            <button
              onClick={() => setSelectedView('farmaflow')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedView === 'farmaflow'
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Com FarmaFlow
            </button>
          </div>
        </div>

        {/* COMPARATIVE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* O CAOS MANUAL */}
          {(selectedView === 'both' || selectedView === 'chaos') && (
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-rose-500/25 bg-gradient-to-b from-rose-950/20 via-slate-950/90 to-slate-950 relative flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between border-b border-rose-900/30 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-rose-950/90 border border-rose-700/60 flex items-center justify-center text-rose-400 shadow-lg shadow-rose-950/40">
                      <XCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-rose-400 tracking-wider">MÉTODO ANTIGO</span>
                      <h3 className="text-xl font-bold text-white font-heading">O Caos do Atendimento Manual</h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-950/80 text-rose-300 border border-rose-800">
                    Demorado
                  </span>
                </div>

                <div className="space-y-4">
                  {chaosPoints.map((pt, idx) => {
                    const Icon = pt.icon;
                    return (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-rose-900/20 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-rose-300 font-bold text-sm">
                            <Icon className="w-4 h-4 text-rose-400 shrink-0" />
                            <span>{pt.title}</span>
                          </div>
                          <span className="text-[11px] font-mono text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-900/50">
                            {pt.metric}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pl-6">
                          {pt.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
                <span>Resultado: Perda de até 40% das vendas no WhatsApp</span>
                <span className="text-rose-400 font-mono font-bold">Gargalo Crítico</span>
              </div>
            </div>
          )}

          {/* A ALTA PERFORMANCE FARMAFLOW */}
          {(selectedView === 'both' || selectedView === 'farmaflow') && (
            <div className="glass-card rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-950/25 via-slate-950/90 to-slate-950 relative flex flex-col justify-between shadow-2xl shadow-emerald-500/10">
              
              {/* Highlight Badge */}
              <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-mono font-extrabold text-[11px] tracking-wide shadow-md">
                10X MAIS RÁPIDO
              </div>

              <div>
                <div className="flex items-center justify-between border-b border-emerald-900/30 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-950/90 border border-emerald-600/60 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-950/40">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider">EXPERIÊNCIA MODERNA</span>
                      <h3 className="text-xl font-bold text-white font-heading">A Alta Velocidade FarmaFlow</h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                    Automático
                  </span>
                </div>

                <div className="space-y-4">
                  {controlPoints.map((pt, idx) => {
                    const Icon = pt.icon;
                    return (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 space-y-1.5 hover:border-emerald-400/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                            <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{pt.title}</span>
                          </div>
                          <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-800/80">
                            {pt.metric}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed pl-6">
                          {pt.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-300">
                  <span className="text-emerald-400 font-bold">Economize até 120 horas</span> da sua equipe por mês
                </div>

                <a
                  href={getWhatsAppLink('Olá! Quero transformar o atendimento no WhatsApp da minha farmácia com o FarmaFlow.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-md shadow-emerald-500/20"
                >
                  <span>Quero Essa Velocidade</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
