import React from 'react';
import { Heart, Star, Sparkles, Quote } from 'lucide-react';

export const SuccessStories: React.FC = () => {
  const stories = [
    {
      adopter: 'Camila & Lucas',
      petName: 'Paçoca (ex-Amendoim)',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      petImage: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=300&q=80',
      text: 'Adotar na OngPets foi a melhor decisão da nossa vida! O processo foi super atencioso, analisamos as características dele no site e quando ele chegou em casa parecia que já nos conhecia há anos.',
      location: 'São Paulo - SP',
      timeAdopted: 'Adotado há 8 meses',
    },
    {
      adopter: 'Rodrigo Medeiros',
      petName: 'Mimi',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      petImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80',
      text: 'Eu moro sozinho em apartamento e precisava de um pet calmo para o home office. As métricas do site me ajudaram muito a escolher a Mimi, que é um doce de gatinha!',
      location: 'Campinas - SP',
      timeAdopted: 'Adotada há 1 ano',
    },
    {
      adopter: 'Família Fernandes',
      petName: 'Barão',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      petImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=300&q=80',
      text: 'Nossos filhos se apaixonaram pelo Barão na foto. Ele veio castrado, vacinado e hoje é o protetor mais carinhoso e dócil do nosso quintal. Amor define!',
      location: 'Santo André - SP',
      timeAdopted: 'Adotado há 4 meses',
    },
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            <span>Finais Felizes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Histórias de quem encontrou seu melhor amigo
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Cada adoção concluída renova nossa esperança. Veja alguns relatos de famílias que abriram as portas e o coração.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-3xl p-6 border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Adopter info */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.adopter}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                  />
                  <img
                    src={item.petImage}
                    alt={item.petName}
                    className="w-6 h-6 rounded-full object-cover border border-white absolute -bottom-1 -right-1"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.adopter}</h4>
                  <p className="text-xs text-amber-700 font-semibold">Tutor(a) de {item.petName}</p>
                  <p className="text-[11px] text-slate-400">{item.location} • {item.timeAdopted}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
