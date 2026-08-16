import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const InteractiveRoiCalculator: React.FC = () => {
  const [dailyQuotes, setDailyQuotes] = useState<number>(45);
  const [averageTicket, setAverageTicket] = useState<number>(65);

  // Calculations
  // Manual time per quote: ~12 minutes; FarmaFlow time: ~1 minute -> saved: 11 minutes per quote
  const minutesSavedPerMonth = dailyQuotes * 11 * 30;
  const hoursSavedPerMonth = Math.round(minutesSavedPerMonth / 60);

  // Conversion boost: FarmaFlow recovers ~25% of quotes that would be lost due to delay
  const recoveredSalesPerDay = dailyQuotes * 0.25;
  const monthlyRevenueBoost = Math.round(recoveredSalesPerDay * averageTicket * 30);

  // Annual gain
  const annualGain = monthlyRevenueBoost * 12;

  return (
    <section id="calculadora" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-900/80">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-4">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>CALCULADORA DE RETORNO SOBRE INVESTIMENTO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-5">
            Quanto a Sua Farmácia Pode Faturar a Mais com o FarmaFlow?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Arraste os controles abaixo de acordo com o volume de orçamentos e ticket médio da sua drogaria para simular os ganhos imediatos.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl max-w-5xl mx-auto bg-gradient-to-b from-slate-900/90 to-slate-950">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Sliders Area */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Slider 1: Daily Quotes */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                    <span>Orçamentos/Mensagens no WhatsApp por dia:</span>
                  </label>
                  <span className="text-lg font-mono font-extrabold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-xl border border-cyan-800/60">
                    {dailyQuotes} pedidos/dia
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={dailyQuotes}
                  onChange={(e) => setDailyQuotes(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>10/dia (drogaria pequena)</span>
                  <span>100/dia (médio porte)</span>
                  <span>200/dia (alto volume)</span>
                </div>
              </div>

              {/* Slider 2: Average Ticket */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                    <span>Ticket Médio da Farmácia:</span>
                  </label>
                  <span className="text-lg font-mono font-extrabold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-xl border border-emerald-800/60">
                    R$ {averageTicket},00
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="5"
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>R$ 20,00</span>
                  <span>R$ 100,00</span>
                  <span>R$ 200,00</span>
                </div>
              </div>

              <div className="p-4 bg-slate-950/70 rounded-2xl border border-slate-800 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Por que esse cálculo é real?</span>
                </div>
                <p className="leading-relaxed">
                  Reduzimos o tempo de fechamento de 15 minutos para 10 segundos e eliminamos o abandono de clientes impacientes que desistiam enquanto aguardavam preço.
                </p>
              </div>

            </div>

            {/* Results Display Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl border-2 border-emerald-500/40 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none"></div>

              <div>
                <span className="text-[11px] font-mono uppercase text-emerald-400 tracking-wider block mb-1">
                  ESTIMATIVA DE RETORNO MENSAL
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono flex items-baseline gap-2">
                  <span className="text-emerald-400">R$ {monthlyRevenueBoost.toLocaleString('pt-BR')}</span>
                  <span className="text-xs text-slate-400 font-normal">/mês a mais</span>
                </div>
                <span className="text-xs text-slate-400 block mt-1">
                  Ou até <strong>R$ {annualGain.toLocaleString('pt-BR')}</strong> em faturamento recuperado no ano.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="p-3.5 bg-slate-950/90 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Tempo Economizado</span>
                  </div>
                  <div className="text-xl font-bold text-white font-mono">{hoursSavedPerMonth}h</div>
                  <span className="text-[10px] text-slate-400 block">por mês no balcão</span>
                </div>

                <div className="p-3.5 bg-slate-950/90 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-purple-400 text-xs font-mono">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Payback do FarmaFlow</span>
                  </div>
                  <div className="text-xl font-bold text-purple-300 font-mono">&lt; 3 dias</div>
                  <span className="text-[10px] text-slate-400 block">retorno do plano Pro</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppLink(`Olá Evandro! Calculei que a minha farmácia pode faturar R$ ${monthlyRevenueBoost.toLocaleString('pt-BR')} a mais por mês com o FarmaFlow. Quero começar!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg shadow-emerald-500/25"
                >
                  <span>Garantir Esse Resultado na Minha Farmácia</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
