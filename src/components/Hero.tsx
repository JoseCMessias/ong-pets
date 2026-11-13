import React from 'react';
import { Search, Heart, Sparkles, ShieldCheck, ArrowRight, Award } from 'lucide-react';

interface HeroProps {
  onQuickFilter: (filters: { species?: string; ageCategory?: string; size?: string }) => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuickFilter, onExploreCatalog }) => {
  const [selectedSpecies, setSelectedSpecies] = React.useState('all');
  const [selectedAge, setSelectedAge] = React.useState('all');
  const [selectedSize, setSelectedSize] = React.useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickFilter({
      species: selectedSpecies !== 'all' ? selectedSpecies : undefined,
      ageCategory: selectedAge !== 'all' ? selectedAge : undefined,
      size: selectedSize !== 'all' ? selectedSize : undefined,
    });
    const catalogElement = document.getElementById('catalogo');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-amber-200/40 via-emerald-100/30 to-rose-100/30 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs font-bold uppercase tracking-wide mb-6 shadow-xs animate-float">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Adoção com Amor e Responsabilidade</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.12] tracking-tight mb-6">
              Dê um lar cheio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-500 to-amber-700">amor</span> a quem só quer te fazer feliz.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Na <strong className="text-slate-800 font-bold">OngPets</strong>, cada olhar resgatado guarda uma história de superação. Explore nosso catálogo interativo, analise idade, cor, temperamento e encontre a alma gêmea para sua família de forma simples e segura.
            </p>

            {/* Quick Filter Search Bar */}
            <form
              onSubmit={handleSearch}
              className="bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl shadow-amber-900/5 border border-amber-100/80 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3">
                {/* Espécie */}
                <div className="flex flex-col text-left">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 px-1">
                    Espécie
                  </label>
                  <select
                    value={selectedSpecies}
                    onChange={(e) => setSelectedSpecies(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  >
                    <option value="all">🐶🐱 Todos</option>
                    <option value="Cão">🐶 Cães</option>
                    <option value="Gato">🐱 Gatos</option>
                  </select>
                </div>

                {/* Idade */}
                <div className="flex flex-col text-left">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 px-1">
                    Idade
                  </label>
                  <select
                    value={selectedAge}
                    onChange={(e) => setSelectedAge(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  >
                    <option value="all">Todas as Idades</option>
                    <option value="filhote">Filhote (&lt; 1 ano)</option>
                    <option value="jovem">Jovem (1 a 3 anos)</option>
                    <option value="adulto">Adulto (3 a 7 anos)</option>
                    <option value="idoso">Idoso Sênior (7+)</option>
                  </select>
                </div>

                {/* Porte */}
                <div className="flex flex-col text-left">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 px-1">
                    Porte
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  >
                    <option value="all">Todos os Portes</option>
                    <option value="Pequeno">Pequeno (até 10kg)</option>
                    <option value="Médio">Médio (10 a 20kg)</option>
                    <option value="Grande">Grande (20kg+)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-md shadow-amber-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer group"
              >
                <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Encontrar Meu Novo Amigo</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </form>

            {/* Micro Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5 bg-white/80 border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Castrados & Vacinados</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-xs">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Acompanhamento Pós-Adoção</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-xs">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Taxa Zero de Adoção</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80"
                  alt="Pipoca, cão resgatado pela OngPets"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/10" />

                {/* Floating Bottom Info Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-amber-100 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-lg font-black text-slate-800">Pipoca</span>
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-extrabold rounded-md uppercase">
                        Pronta para Adoção
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      1 ano e meio • Caramelo Dourado • Dócil com crianças
                    </p>
                  </div>
                  <button
                    onClick={onExploreCatalog}
                    className="p-2.5 rounded-xl bg-amber-500 text-white hover:bg-amber-600 transition-colors cursor-pointer shadow-md shadow-amber-500/30"
                    title="Conhecer Pipoca e outros pets"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Floating review sticker */}
              <div className="hidden sm:flex absolute -top-5 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-black">
                  ❤️
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">+1.400 Lares Felizes</p>
                  <p className="text-[11px] text-slate-500">Histórias reais de amor</p>
                </div>
              </div>

              {/* Floating health badge */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                  🐾
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Protocolo Veterinário</p>
                  <p className="text-[11px] text-emerald-600 font-semibold">Exames & Vacinas em Dia</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
