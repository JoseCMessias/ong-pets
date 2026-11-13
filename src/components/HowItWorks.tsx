import React from 'react';
import { Search, FileEdit, PhoneCall, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: 'Encontre o Pet Perfeito',
      desc: 'Navegue pelo catálogo, filtre por espécie e analise idade, cor, porte e temperamento de cada animal.',
      badge: 'Catálogo Transparente',
    },
    {
      num: '02',
      icon: FileEdit,
      title: 'Preencha o Formulário',
      desc: 'Informe dados básicos do seu lar e rotina em apenas 2 minutos para avaliarmos a compatibilidade.',
      badge: 'Sem Burocracia',
    },
    {
      num: '03',
      icon: PhoneCall,
      title: 'Entrevista de Alinhamento',
      desc: 'Nossa equipe voluntária conversa com você via WhatsApp para tirar dúvidas e agendar o encontro com o pet.',
      badge: 'Acolhimento Humano',
    },
    {
      num: '04',
      icon: HeartHandshake,
      title: 'Boas-Vindas ao Novo Lar!',
      desc: 'Assinatura do termo de adoção responsável e entrega do seu novo melhor amigo com kit de vacinas e saúde.',
      badge: 'Amor para a Vida',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Processo Claro e Seguro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Como funciona a adoção na OngPets?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Prezamos pelo bem-estar dos animais e pela segurança da sua família em 4 etapas fluidas e transparentes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Number Stamp */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-lg shadow-md shadow-amber-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-amber-200 transition-colors">
                    {step.num}
                  </span>
                </div>

                {/* Text Content */}
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 mb-2">
                    {step.badge}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Garantia de bem-estar</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Requirements Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-3xl p-6 sm:p-8 border border-amber-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-slate-900">
              Requisitos básicos para adotar:
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Maior de 21 anos • Residência segura (janelas teladas para gatos ou muros para cães) • Amor e concordância de toda a família.
            </p>
          </div>

          <a
            href="#catalogo"
            className="py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shrink-0 transition-colors cursor-pointer shadow-md"
          >
            Ver Animais Disponíveis
          </a>
        </div>

      </div>
    </section>
  );
};
