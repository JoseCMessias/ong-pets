import React from 'react';
import { ShieldCheck, Heart, Sparkles, Award, Users, Stethoscope } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Stethoscope,
      title: 'Medicina Preventiva',
      desc: 'Nenhum animal é doado sem vacinação polivalente, vermifugação e castração 100% concluídas.',
    },
    {
      icon: Users,
      title: 'Socialização & Afeto',
      desc: 'Nossos voluntários e lares temporários trabalham o convívio, reduzindo traumas e medos do abandono.',
    },
    {
      icon: ShieldCheck,
      title: 'Adoção Ética e Responsável',
      desc: 'Não fazemos entregas impulsivas. Nosso objetivo é garantir que cada adoção seja definitiva e feliz.',
    },
    {
      icon: Heart,
      title: 'Suporte Vitalício',
      desc: 'Aconselhamos os tutores em momentos de dúvida, mudanças de casa ou adaptação com outros membros.',
    },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Grid */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80"
                  alt="Voluntária da OngPets cuidando de cão"
                  className="rounded-3xl shadow-lg object-cover h-64 w-full"
                />
                <img
                  src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=600&q=80"
                  alt="Cachorrinho feliz pós resgate"
                  className="rounded-3xl shadow-lg object-cover h-64 w-full mt-6"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-100 text-center w-64">
                <span className="text-2xl font-black text-amber-600 block">7 Anos</span>
                <span className="text-xs font-bold text-slate-700">De Dedicação e Amor Animal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Sobre a OngPets</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Transformando vidas resgatadas em histórias de pura gratidão.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A <strong>OngPets</strong> nasceu do sonho de voluntários unidos para combater o abandono e a crueldade. Mais do que resgatar, nosso compromisso é reabilitar física e emocionalmente cada cão e gato acolhido, garantindo que cheguem à sua nova família saudáveis, castrados e cheios de vontade de viver.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/80 space-y-1.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
