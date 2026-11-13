import React from 'react';
import { HeartHandshake, Syringe, Sparkles, Home, CheckCircle2 } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      icon: Home,
      number: '1.420+',
      label: 'Adoções Concluídas',
      desc: 'Cães e gatos em lares responsáveis',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      icon: Syringe,
      number: '100%',
      label: 'Saúde Protegida',
      desc: 'Castrados, vermifugados e vacinados',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: HeartHandshake,
      number: 'R$ 0,00',
      label: 'Taxa de Adoção',
      desc: 'Adotar é um ato de amor e compromisso',
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
    },
    {
      icon: Sparkles,
      number: '98.7%',
      label: 'Adaptação Positiva',
      desc: 'Acompanhamento dedicado pós-adoção',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section className="py-8 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-4 rounded-2xl hover:bg-slate-50/80 transition-colors"
              >
                <div className={`p-3 rounded-2xl ${item.bgColor} ${item.color} shrink-0 shadow-xs`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {item.number}
                  </div>
                  <div className="text-sm font-bold text-slate-800 flex items-center justify-center sm:justify-start gap-1">
                    <span>{item.label}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 inline" />
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
