import React, { useState } from 'react';
import { Pet } from '../data/pets';
import {
  X,
  Heart,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Palette,
  Scale,
  MapPin,
  PawPrint,
  Smile,
  Activity,
  Home,
  AlertCircle,
  Share2,
} from 'lucide-react';

interface PetDetailModalProps {
  pet: Pet | null;
  onClose: () => void;
  onAdopt: (pet: Pet) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const PetDetailModal: React.FC<PetDetailModalProps> = ({
  pet,
  onClose,
  onAdopt,
  isFavorite,
  onToggleFavorite,
}) => {
  if (!pet) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Meter component for visual temperament analysis
  const renderMeter = (label: string, value: number, icon: React.ReactNode, helper: string) => {
    return (
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-700">
            {icon}
            <span>{label}</span>
          </div>
          <span className="font-extrabold text-amber-600">{value}/5</span>
        </div>
        <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-700"
            style={{ width: `${(value / 5) * 100}%` }}
          />
        </div>
        <p className="text-[11px] text-slate-500">{helper}</p>
      </div>
    );
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-100 my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-all cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Photos and Quick Stats */}
          <div className="lg:col-span-5 bg-slate-50 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100">
            <div>
              {/* Main Photo */}
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-200 shadow-md mb-3">
                <img
                  src={pet.images[activeImageIndex] || pet.images[0]}
                  alt={pet.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-black bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
                  {pet.species === 'Cão' ? '🐶 Cão Resgatado' : '🐱 Gato Resgatado'}
                </span>
              </div>

              {/* Thumbnails */}
              {pet.images.length > 1 && (
                <div className="flex gap-2.5 mb-5">
                  {pet.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-amber-500 scale-105 shadow-sm'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Foto ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Rescue & Location Info */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Localização: <strong>{pet.location}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Data de Resgate: <strong>{pet.rescueDate}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <Home className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Adaptação em Apartamento: <strong>{pet.goodForApartment ? 'Ideal (com telas)' : 'Requer quintal/espaço'}</strong></span>
                </div>
              </div>
            </div>

            {/* Micro Action Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => onToggleFavorite(pet.id)}
                className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  isFavorite
                    ? 'border-rose-200 bg-rose-50 text-rose-600'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500' : ''}`} />
                <span>{isFavorite ? 'Salvo nos Favoritos' : 'Salvar Favorito'}</span>
              </button>

              <button
                onClick={handleShare}
                className="py-2.5 px-3 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                title="Compartilhar pet"
              >
                <Share2 className="w-4 h-4" />
                <span>{copiedLink ? 'Copiado!' : 'Compartilhar'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Deep Characteristics Analysis */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            {/* Header Title */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                    {pet.name}
                  </h2>
                  <span className="px-3 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800">
                    Disponível
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-600 font-medium">
                {pet.breed} • {pet.gender} • Resgatado com amor
              </p>
            </div>

            {/* Section 1: Detailed Physical Analysis (Idade, Cor, Porte) */}
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Análise Física e Morfologia</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Idade Detalhada */}
                <div className="bg-amber-50/70 border border-amber-200/60 p-3.5 rounded-2xl">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>Idade & Ciclo</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-800">
                    {pet.ageLabel}
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-tight">
                    {pet.ageCategory === 'filhote' && 'Fase de aprendizado, muita energia e curiosidade.'}
                    {pet.ageCategory === 'jovem' && 'Comportamento estável, dócil e adaptável.'}
                    {pet.ageCategory === 'adulto' && 'Personalidade definida, educado e carinhoso.'}
                    {pet.ageCategory === 'idoso' && 'Super tranquilo, leal e companheiro sereno.'}
                  </p>
                </div>

                {/* Cor & Pelagem Detalhada */}
                <div className="bg-indigo-50/60 border border-indigo-200/50 p-3.5 rounded-2xl">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900 mb-1">
                    <Palette className="w-4 h-4 text-indigo-600" />
                    <span>Cor & Pelagem</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-800">
                    {pet.color}
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-tight">
                    {pet.coatType}. Escovação semanal recomendada.
                  </p>
                </div>

                {/* Porte & Peso */}
                <div className="bg-emerald-50/70 border border-emerald-200/60 p-3.5 rounded-2xl">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-1">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    <span>Porte & Peso</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-800">
                    Porte {pet.size}
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-tight">
                    Peso atual: {pet.weight}. Porte ideal para sua residência.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Story and Personality */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Smile className="w-3.5 h-3.5 text-amber-500" />
                <span>História e Convivência</span>
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/70 italic">
                "{pet.story}"
              </p>
              
              <div className="flex flex-wrap gap-1.5 pt-1">
                {pet.personalityTraits.map((trait, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300/40"
                  >
                    ★ {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Section 3: Visual Temperament Breakdown */}
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-amber-500" />
                <span>Métricas de Temperamento e Adaptação</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/70">
                {renderMeter('Nível de Energia', pet.temperamentMetrics.energy, <Activity className="w-3.5 h-3.5 text-amber-500" />, 'Necessidade de exercícios diários e passeios')}
                {renderMeter('Nível de Afeto', pet.temperamentMetrics.affection, <Heart className="w-3.5 h-3.5 text-rose-500" />, 'Busca constante por cafuné e companhia humana')}
                {renderMeter('Com Crianças', pet.temperamentMetrics.sociableWithKids, <Smile className="w-3.5 h-3.5 text-blue-500" />, 'Paciência e docilidade no convívio infantil')}
                {renderMeter('Com Outros Pets', pet.temperamentMetrics.sociableWithPets, <PawPrint className="w-3.5 h-3.5 text-emerald-500" />, 'Socialização com outros cães ou gatos')}
              </div>
            </div>

            {/* Section 4: Health & Veterinary Protocol */}
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Protocolo Veterinário Completo (Garantido pela ONG)</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/70 text-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <span className="text-xs font-bold text-emerald-950 block">Castrado</span>
                  <span className="text-[10px] text-emerald-700">Certificado</span>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/70 text-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <span className="text-xs font-bold text-emerald-950 block">Vacinado</span>
                  <span className="text-[10px] text-emerald-700">Polivalente + Raiva</span>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/70 text-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <span className="text-xs font-bold text-emerald-950 block">Vermifugado</span>
                  <span className="text-[10px] text-emerald-700">Dose recente</span>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/70 text-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <span className="text-xs font-bold text-emerald-950 block">Microchip</span>
                  <span className="text-[10px] text-emerald-700">Identificado</span>
                </div>
              </div>

              {pet.health.specialCare && (
                <div className="flex items-start gap-2 bg-amber-50/80 border border-amber-200 p-3 rounded-xl text-xs text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Observação de Saúde:</strong> {pet.health.specialCare}</span>
                </div>
              )}
            </div>

            {/* Bottom Adopt CTA */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onAdopt(pet);
                }}
                className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-black text-sm shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.01] active:scale-95"
              >
                <PawPrint className="w-5 h-5 text-amber-200" />
                <span>Quero Adotar o(a) {pet.name}</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto py-4 px-6 rounded-2xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm transition-colors cursor-pointer"
              >
                Continuar Olhando
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
