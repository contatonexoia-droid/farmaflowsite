import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  UploadCloud, 
  AlertCircle, 
  Eye, 
  FileCheck, 
  Sparkles,
  ArrowRight,
  Lock,
  UserCheck,
  MessageSquare,
  Copy,
  Check,
  AlertTriangle,
  Send
} from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

interface MockRecipe {
  id: string;
  patient: string;
  doctor: string;
  crm: string;
  medicine: string;
  dosage: string;
  file: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  uploadedAt: string;
}

export const PrescriptionModule: React.FC = () => {
  const [recipes, setRecipes] = useState<MockRecipe[]>([
    {
      id: 'PED-9041',
      patient: 'Marcos Vinícius Silva',
      doctor: 'Dr. Roberto Mendes',
      crm: 'CRM 12.489/RJ',
      medicine: 'Clonazepam 2mg (Rivotril) - 30 Comprimidos',
      dosage: '1 comprimido à noite por 30 dias',
      file: 'receita_marcos_silva_crm12489.pdf',
      status: 'approved',
      uploadedAt: 'Há 5 min'
    },
    {
      id: 'PED-9042',
      patient: 'Juliana Castro de Souza',
      doctor: 'Dra. Camila Nogueira',
      crm: 'CRM 34.812/SP',
      medicine: 'Zolpidem 10mg - 20 Comprimidos Revestidos',
      dosage: '1 comprimido antes de deitar',
      file: 'receita_juliana_digital_crm34812.pdf',
      status: 'pending',
      uploadedAt: 'Há 12 min'
    },
    {
      id: 'PED-9039',
      patient: 'Antônio Carlos Pereira',
      doctor: 'Dr. Paulo Henrique',
      crm: 'CRM 9.821/MG',
      medicine: 'Venlafaxina 75mg - 30 Cápsulas',
      dosage: '1 cápsula pela manhã',
      file: 'foto_receita_borrada.jpg',
      status: 'rejected',
      rejectionReason: 'Foto da receita ilegível / cortada sem visualização do CRM',
      uploadedAt: 'Há 45 min'
    }
  ]);

  const [selectedRecipeId, setSelectedRecipeId] = useState<string>('PED-9042');
  const [selectedReason, setSelectedReason] = useState<string>('Foto da receita ilegível / cortada sem visualização do CRM');
  const [copiedMessage, setCopiedMessage] = useState<boolean>(false);

  const rejectionOptions = [
    'Foto da receita ilegível / cortada sem visualização do CRM',
    'Receita médica com prazo de validade expirado',
    'Ausência de assinatura digital ou carimbo legível do médico',
    'Medicamento sob controle especial exige retenção da via física no balcão',
    'Divergência entre o produto solicitado no carrinho e o receitado'
  ];

  const updateStatus = (id: string, newStatus: 'approved' | 'rejected' | 'pending') => {
    setRecipes(recipes.map(r => {
      if (r.id === id) {
        return { 
          ...r, 
          status: newStatus,
          rejectionReason: newStatus === 'rejected' ? selectedReason : undefined
        };
      }
      return r;
    }));
  };

  const currentSelected = recipes.find(r => r.id === selectedRecipeId) || recipes[0];
  const activeRejectionReason = currentSelected.rejectionReason || selectedReason;

  const rejectionMessageText = `Olá ${currentSelected.patient}! Aqui é o Farmacêutico Responsável da Drogaria.\n\nAnalisamos a receita médica anexada ao seu pedido *#${currentSelected.id}* (${currentSelected.medicine}).\n\n⚠️ *Aviso de Validação:* Não foi possível aprovar a receita pelo seguinte motivo:\n👉 *${activeRejectionReason}*\n\nPara que possamos liberar seu pedido com total segurança sanitária, por favor envie uma foto nítida e completa da sua receita respondendo a esta mensagem ou apresente a via original no balcão.`;

  const handleCopyMessage = () => {
    navigator.clipboard?.writeText?.(rejectionMessageText);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  return (
    <section id="modulo-receitas" className="py-24 relative overflow-hidden bg-slate-950/60 border-y border-slate-900">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-xs sm:text-sm font-mono text-cyan-300 mb-4 shadow-lg shadow-cyan-950">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
            <span className="font-bold">DESTAQUE EXCLUSIVO FARMAFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-6">
            Módulo de Receitas para Medicamentos Controlados
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Venda medicamentos tarja preta e sob controle especial com total conformidade e segurança. O FarmaFlow exige o upload do documento no carrinho e entrega o pedido pronto para o farmacêutico validar.
          </p>
        </div>

        {/* 3 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 font-mono font-bold">
              01
            </div>
            <h4 className="text-base font-bold text-white font-heading">Upload Obrigatório no Carrinho</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ao adicionar produtos de controle especial, o sistema bloqueia a finalização até o anexo da foto ou PDF da receita médica.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 font-mono font-bold">
              02
            </div>
            <h4 className="text-base font-bold text-white font-heading">Notificação no WhatsApp</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              A drogaria recebe no WhatsApp o pedido pronto contendo os dados do paciente, dosagem e o link direto para o documento anexado.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400 font-mono font-bold">
              03
            </div>
            <h4 className="text-base font-bold text-white font-heading">Validação & Mensagem de Feedback</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              O farmacêutico avalia a receita. Se for recusada, uma mensagem pré-configurada é disponibilizada para informar ao cliente o motivo exato.
            </p>
          </div>
        </div>

        {/* INTERACTIVE PHARMACIST WORKFLOW SIMULATOR */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border-2 border-cyan-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-950">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div>
              <span className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider">SIMULAÇÃO INTERATIVA</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Painel de Validação do Farmacêutico Responsável
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">Triagem Farmacêutica:</span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                Módulo Ativo
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Recipe Queue */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono text-slate-400 block mb-2">Fila de Receitas Aguardando Validação:</span>
              
              {recipes.map((r) => {
                const isSelected = r.id === selectedRecipeId;
                return (
                  <div
                    key={r.id}
                    onClick={() => {
                      setSelectedRecipeId(r.id);
                      if (r.rejectionReason) setSelectedReason(r.rejectionReason);
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-500 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-950/80 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-white text-xs">{r.id}</span>
                        <span className="text-[11px] text-slate-400">({r.uploadedAt})</span>
                      </div>

                      {/* Status Badges */}
                      {r.status === 'approved' && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          RECEITA APROVADA
                        </span>
                      )}
                      {r.status === 'pending' && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-600 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-400 animate-pulse" />
                          RECEITA PENDENTE
                        </span>
                      )}
                      {r.status === 'rejected' && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-950 text-red-300 border border-red-600 flex items-center gap-1">
                          <XCircle className="w-3 h-3 text-red-400" />
                          RECUSADA PELO RT
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-semibold text-white truncate">{r.patient}</h4>
                    <p className="text-xs text-slate-400 truncate mt-0.5">{r.medicine}</p>
                  </div>
                );
              })}
            </div>

            {/* Right: Recipe Inspector & Pharmacist Controls */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400">{currentSelected.id}</span>
                  <h4 className="text-lg font-bold text-white font-heading">{currentSelected.patient}</h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block font-mono">{currentSelected.crm}</span>
                  <span className="text-xs text-slate-300 font-semibold">{currentSelected.doctor}</span>
                </div>
              </div>

              {/* Medicine & Dosage */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-mono">Medicamento Prescrito:</span>
                  <span className="text-white font-bold">{currentSelected.medicine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-mono">Posologia Informada:</span>
                  <span className="text-cyan-300 font-semibold">{currentSelected.dosage}</span>
                </div>
              </div>

              {/* Attached Document Preview */}
              <div className="p-4 bg-slate-950/80 rounded-xl border border-dashed border-cyan-500/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{currentSelected.file}</span>
                    <span className="text-[11px] text-slate-400 font-mono">Documento Anexado pelo Paciente</span>
                  </div>
                </div>

                <button 
                  onClick={() => alert(`Visualizando documento anexado: ${currentSelected.file}`)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspecionar</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-slate-400 block">Ações do Farmacêutico:</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => updateStatus(currentSelected.id, 'approved')}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      currentSelected.status === 'approved'
                        ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                        : 'bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-700/60'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Aprovar Receita</span>
                  </button>

                  <button
                    onClick={() => updateStatus(currentSelected.id, 'pending')}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      currentSelected.status === 'pending'
                        ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                        : 'bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 border border-amber-700/60'
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    <span>Marcar Pendente</span>
                  </button>

                  <button
                    onClick={() => updateStatus(currentSelected.id, 'rejected')}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      currentSelected.status === 'rejected'
                        ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                        : 'bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-700/60'
                    }`}
                  >
                    <XCircle className="w-4 h-4" />
                    <span>Recusar Receita</span>
                  </button>
                </div>
              </div>

              {/* REJECTION MESSAGE SECTION (SHOWN WHEN RECUSADA OR TO CONFIGURE) */}
              {currentSelected.status === 'rejected' ? (
                <div className="p-4 bg-red-950/30 rounded-2xl border border-red-500/40 space-y-3.5 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span>Mensagem de Recusa Configurada para o WhatsApp:</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-800">
                      Pronta para Envio
                    </span>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1.5">
                      Selecione o motivo da recusa:
                    </label>
                    <select
                      value={activeRejectionReason}
                      onChange={(e) => {
                        setSelectedReason(e.target.value);
                        setRecipes(recipes.map(r => r.id === currentSelected.id ? { ...r, rejectionReason: e.target.value } : r));
                      }}
                      className="w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:border-red-500 focus:outline-none"
                    >
                      {rejectionOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message Preview Box */}
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <MessageSquare className="w-3.5 h-3.5" /> Texto formatado para o paciente
                      </span>
                    </div>
                    <div className="text-xs text-slate-300 font-mono whitespace-pre-line leading-relaxed bg-slate-900/90 p-3 rounded-lg border border-slate-800/80">
                      {rejectionMessageText}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={handleCopyMessage}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all border border-slate-700"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400">Mensagem Copiada!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-cyan-400" />
                          <span>Copiar Mensagem de Recusa</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(rejectionMessageText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Information Note */
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-300 flex items-start gap-2.5 leading-relaxed">
                  <UserCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Quando a receita é recusada, o farmacêutico conta com uma <strong className="text-white">mensagem configurada</strong> pronta para enviar ao cliente pelo WhatsApp, informando com clareza o motivo técnico da recusa e orientando o reenvio correto.
                  </span>
                </div>
              )}

            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              Disponível a partir do <strong className="text-cyan-400">Plano Anual</strong> e <strong className="text-purple-400">Plano Premium IA</strong>
            </div>

            <a
              href={getWhatsAppLink('Olá Evandro! Quero entender como implementar o Módulo de Receitas Controladas na minha farmácia.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>Contratar com Módulo de Receitas</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

