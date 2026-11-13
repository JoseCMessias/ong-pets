import React from 'react';
import { Pet } from '../data/pets';
import { X, Check, Calendar, Palette, Scale, Activity, Heart, Smile, Home, PawPrint } from 'lucide-react';

interface PetCompareModalProps {
  pets: Pet[];
  onClose: () => void;
  onSelectPetForDetails: (pet: Pet) => void;
  onAdopt: (pet: Pet) => void;
}

export const PetCompareModal: React.FC<PetCompareModalProps> = ({
  pets,
  onClose,
  onSelectPetForDetails,
  onAdopt,
}) => {
  if (pets.length < 2) return null;
  const [petA, petB] = pets;

  const compareRow = (
    label: string,
    valA: React.ReactNode,
    valB: React.ReactNode,
    icon?: React.ReactNode
  ) => (
    <div className="grid grid-cols-12 py-3 px-4 border-b border-slate-100 hover:bg-slate-50/70 items-center text-xs">
      <div className="col-span-4 font-bold text-slate-700 flex items-center gap-1.5">
        {icon}
        <span>{label}</span>
      </div>
      <div className="col-span-4 text-slate-800 font-semibold px-2">{valA}</div>
      <div className="col-span-4 text-slate-800 font-semibold px-2">{valB}</div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-100 my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black">Comparação Lado a Lado</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Analise detalhadamente a idade, cor, porte e temperamento dos dois pets.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Header Cards */}
        <div className="grid grid-cols-12 p-4 bg-slate-50 border-b border-slate-200 items-center">
          <div className="col-span-4 text-xs font-bold uppercase tracking-wider text-slate-400">
            Características
          </div>

          {/* Pet A */}
          <div className="col-span-4 px-2 flex items-center gap-3">
            <img
              src={petA.images[0]}
              alt={petA.name}
              className="w-12 h-12 rounded-xl object-cover border border-amber-300 shadow-xs"
            />
            <div>
              <h4 className="font-black text-slate-900 text-base">{petA.name}</h4>
              <span className="text-[11px] text-amber-700 font-bold">{petA.species}</span>
            </div>
          </div>

          {/* Pet B */}
          <div className="col-span-4 px-2 flex items-center gap-3">
            <img
              src={petB.images[0]}
              alt={petB.name}
              className="w-12 h-12 rounded-xl object-cover border border-amber-300 shadow-xs"
            />
            <div>
              <h4 className="font-black text-slate-900 text-base">{petB.name}</h4>
              <span className="text-[11px] text-amber-700 font-bold">{petB.species}</span>
            </div>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="max-h-[60vh] overflow-y-auto">
          {compareRow(
            'Idade & Ciclo',
            <span className="text-amber-800 font-bold">{petA.ageLabel}</span>,
            <span className="text-amber-800 font-bold">{petB.ageLabel}</span>,
            <Calendar className="w-3.5 h-3.5 text-amber-500" />
          )}

          {compareRow(
            'Cor da Pelagem',
            <span>{petA.color}</span>,
            <span>{petB.color}</span>,
            <Palette className="w-3.5 h-3.5 text-indigo-500" />
          )}

          {compareRow(
            'Tipo de Pelo',
            <span>{petA.coatType}</span>,
            <span>{petB.coatType}</span>,
            <Palette className="w-3.5 h-3.5 text-slate-400" />
          )}

          {compareRow(
            'Porte & Peso',
            <span>{petA.size} ({petA.weight})</span>,
            <span>{petB.size} ({petB.weight})</span>,
            <Scale className="w-3.5 h-3.5 text-emerald-500" />
          )}

          {compareRow(
            'Nível de Energia',
            <span>{'⚡'.repeat(petA.temperamentMetrics.energy)} ({petA.temperamentMetrics.energy}/5)</span>,
            <span>{'⚡'.repeat(petB.temperamentMetrics.energy)} ({petB.temperamentMetrics.energy}/5)</span>,
            <Activity className="w-3.5 h-3.5 text-amber-500" />
          )}

          {compareRow(
            'Nível de Afeto',
            <span>{'💖'.repeat(petA.temperamentMetrics.affection)} ({petA.temperamentMetrics.affection}/5)</span>,
            <span>{'💖'.repeat(petB.temperamentMetrics.affection)} ({petB.temperamentMetrics.affection}/5)</span>,
            <Heart className="w-3.5 h-3.5 text-rose-500" />
          )}

          {compareRow(
            'Com Crianças',
            <span>{petA.temperamentMetrics.sociableWithKids}/5</span>,
            <span>{petB.temperamentMetrics.sociableWithKids}/5</span>,
            <Smile className="w-3.5 h-3.5 text-blue-500" />
          )}

          {compareRow(
            'Ideal para Apartamento',
            <span>{petA.goodForApartment ? 'Sim (com telas)' : 'Requer quintal'}</span>,
            <span>{petB.goodForApartment ? 'Sim (com telas)' : 'Requer quintal'}</span>,
            <Home className="w-3.5 h-3.5 text-teal-500" />
          )}

          {compareRow(
            'Castrado & Vacinado',
            <span className="text-emerald-700 font-bold">✓ 100% Garantido</span>,
            <span className="text-emerald-700 font-bold">✓ 100% Garantido</span>,
            <Check className="w-3.5 h-3.5 text-emerald-600" />
          )}
        </div>

        {/* Footer Actions */}
        <div className="grid grid-cols-12 p-4 bg-slate-50 border-t border-slate-200">
          <div className="col-span-4" />
          <div className="col-span-4 px-2">
            <button
              onClick={() => {
                onClose();
                onAdopt(petA);
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-amber-500 text-white font-bold text-xs shadow-xs hover:bg-amber-600 transition-colors flex items-center justify-center gap-1.5"
            >
              <PawPrint className="w-4 h-4" />
              <span>Adotar {petA.name}</span>
            </button>
          </div>
          <div className="col-span-4 px-2">
            <button
              onClick={() => {
                onClose();
                onAdopt(petB);
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-amber-500 text-white font-bold text-xs shadow-xs hover:bg-amber-600 transition-colors flex items-center justify-center gap-1.5"
            >
              <PawPrint className="w-4 h-4" />
              <span>Adotar {petB.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
