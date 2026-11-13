import React, { useState } from 'react';
import { Gift, Copy, Check, Heart, Sparkles, HandHeart, Utensils, Home } from 'lucide-react';

export const DonationSection: React.FC = () => {
  const [copiedPix, setCopiedPix] = useState(false);
  const pixKey = 'contato@ongpets.org.br';

  const handleCopyPix = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(pixKey);
      setCopiedPix(true);
      setTimeout(() => setCopiedPix(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-amber-100 text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-rose-300 text-rose-300" />
              <span>Não pode adotar agora?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Ajude a manter os potinhos cheios e os focinhos saudáveis.
            </h2>

            <p className="text-sm sm:text-base text-amber-100 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A OngPets é mantida exclusivamente por doações voluntárias. Toda contribuição é 100% revertida para rações premium, medicamentos, vacinas e procedimentos cirúrgicos de animais resgatados das ruas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                <Utensils className="w-5 h-5 text-amber-200 mx-auto mb-1.5" />
                <span className="text-xs font-bold block">Doe Ração</span>
                <span className="text-[11px] text-amber-200">Pontos de coleta em SP</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                <HandHeart className="w-5 h-5 text-rose-300 mx-auto mb-1.5" />
                <span className="text-xs font-bold block">Apadrinhe um Pet</span>
                <span className="text-[11px] text-amber-200">Custos mensais de um pet</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
                <Home className="w-5 h-5 text-emerald-300 mx-auto mb-1.5" />
                <span className="text-xs font-bold block">Lar Temporário</span>
                <span className="text-[11px] text-amber-200">Acolha até a adoção</span>
              </div>
            </div>
          </div>

          {/* Right PIX Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl border border-white/20 text-center max-w-md mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-3">
                <Gift className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-1">
                Contribua via PIX
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Qualquer valor faz a diferença na vida de um animal resgatado!
              </p>

              {/* PIX Key Box */}
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex items-center justify-between mb-4">
                <div className="text-left overflow-hidden mr-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Chave PIX (E-mail)
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-800 truncate block">
                    {pixKey}
                  </span>
                </div>

                <button
                  onClick={handleCopyPix}
                  className="py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                >
                  {copiedPix ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-400">
                Razão Social: Associação OngPets Proteção Animal • CNPJ: 45.123.890/0001-22
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
