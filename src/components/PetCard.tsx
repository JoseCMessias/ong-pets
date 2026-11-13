import React from 'react';
import { Pet } from '../data/pets';
import { Heart, Sparkles, ShieldCheck, Check, Eye, PawPrint, Scale, Calendar, Palette } from 'lucide-react';

interface PetCardProps {
  pet: Pet;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onViewDetails: (pet: Pet) => void;
  onAdopt: (pet: Pet) => void;
  onToggleCompare?: (pet: Pet) => void;
  isSelectedForCompare?: boolean;
}

export const PetCard: React.FC<PetCardProps> = ({
  pet,
  isFavorite,
  onToggleFavorite,
  onViewDetails,
  onAdopt,
  onToggleCompare,
  isSelectedForCompare,
}) => {
  // Color badge helper to give a nice color dot
  const getColorDot = (color: string) => {
    const c = color.toLowerCase();
    if (c.includes('preto')) return 'bg-slate-900';
    if (c.includes('branco')) return 'bg-white border border-slate-300';
    if (c.includes('caramelo')) return 'bg-amber-600';
    if (c.includes('amarelo') || c.includes('creme')) return 'bg-amber-300';
    if (c.includes('laranja')) return 'bg-orange-500';
    if (c.includes('cinza')) return 'bg-slate-400';
    return 'bg-amber-700';
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 flex flex-col h-full">
      {/* Top Image Section */}
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={pet.images[0]}
          alt={pet.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/90 backdrop-blur-md text-slate-800 shadow-xs">
              {pet.species === 'Cão' ? '🐶 Cão' : '🐱 Gato'}
            </span>
            {pet.urgencyBadge && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/90 backdrop-blur-md text-white shadow-xs">
                {pet.urgencyBadge}
              </span>
            )}
          </div>

          {/* Favorite button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(pet.id);
            }}
            className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-white transition-all shadow-md active:scale-90"
            title={isFavorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
            aria-label="Favoritar"
          >
            <Heart
              className={`w-5 h-5 transition-transform ${
                isFavorite
                  ? 'fill-rose-500 text-rose-500 scale-110'
                  : 'stroke-[2.2] group-hover:scale-105'
              }`}
            />
          </button>
        </div>

        {/* Bottom tags on image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white pointer-events-none">
          <div>
            <h3 className="text-2xl font-black tracking-tight leading-none drop-shadow-sm">
              {pet.name}
            </h3>
            <p className="text-xs text-white/90 font-medium drop-shadow-xs mt-1">
              {pet.breed} • {pet.gender}
            </p>
          </div>

          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-500/90 backdrop-blur-md text-white shadow-xs">
            {pet.location.split('-')[0].trim()}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Characteristics Grid */}
        <div className="space-y-3">
          {/* Key Traits: Idade, Cor, Porte */}
          <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-100/80">
            {/* Idade */}
            <div className="flex flex-col items-center justify-center text-center p-1">
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                <Calendar className="w-3 h-3 text-amber-500" />
                <span>Idade</span>
              </div>
              <span className="text-xs font-extrabold text-slate-800">
                {pet.ageYears < 1
                  ? `${Math.round(pet.ageYears * 12)} meses`
                  : `${pet.ageYears} ${pet.ageYears === 1 ? 'ano' : 'anos'}`}
              </span>
              <span className="text-[10px] text-amber-700 capitalize font-medium">
                {pet.ageCategory}
              </span>
            </div>

            {/* Cor */}
            <div className="flex flex-col items-center justify-center text-center p-1 border-x border-slate-200/60">
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                <Palette className="w-3 h-3 text-indigo-500" />
                <span>Cor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${getColorDot(pet.color)}`} />
                <span className="text-xs font-bold text-slate-800 truncate max-w-[70px]" title={pet.color}>
                  {pet.color.split(' ')[0]}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 truncate max-w-[75px]" title={pet.color}>
                {pet.coatType.split(' ')[0]}
              </span>
            </div>

            {/* Porte & Peso */}
            <div className="flex flex-col items-center justify-center text-center p-1">
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                <Scale className="w-3 h-3 text-emerald-500" />
                <span>Porte</span>
              </div>
              <span className="text-xs font-extrabold text-slate-800">
                {pet.size}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                {pet.weight}
              </span>
            </div>
          </div>

          {/* Personality pills */}
          <div className="flex flex-wrap gap-1.5">
            {pet.personalityTraits.slice(0, 3).map((trait, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/60"
              >
                {trait}
              </span>
            ))}
            {pet.personalityTraits.length > 3 && (
              <span className="px-2 py-0.5 rounded-lg text-xs font-medium text-slate-400">
                +{pet.personalityTraits.length - 3}
              </span>
            )}
          </div>

          {/* Health Guarantee Badges */}
          <div className="flex items-center gap-2 pt-1 text-xs text-slate-600 font-medium">
            <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold text-[11px]">
              <Check className="w-3 h-3 text-emerald-600" />
              {pet.health.neutered ? 'Castrado' : 'Castração garantida'}
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold text-[11px]">
              <Check className="w-3 h-3 text-emerald-600" />
              Vacinado
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="grid grid-cols-2 gap-2">
            {/* View Details / Analyze */}
            <button
              onClick={() => onViewDetails(pet)}
              className="py-2.5 px-3 rounded-xl border border-slate-200 hover:border-amber-400 bg-white hover:bg-amber-50/50 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs"
            >
              <Eye className="w-4 h-4 text-amber-600" />
              <span>Analisar</span>
            </button>

            {/* Adopt CTA */}
            <button
              onClick={() => onAdopt(pet)}
              className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <PawPrint className="w-4 h-4" />
              <span>Adotar</span>
            </button>
          </div>

          {/* Compare toggle */}
          {onToggleCompare && (
            <button
              onClick={() => onToggleCompare(pet)}
              className={`w-full py-1 text-[11px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer ${
                isSelectedForCompare
                  ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>{isSelectedForCompare ? '✓ Selecionado para Comparação' : '+ Comparar com outro pet'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
