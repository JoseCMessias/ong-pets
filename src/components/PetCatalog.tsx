import React, { useState, useMemo } from 'react';
import { Pet, PETS_DATA } from '../data/pets';
import { PetCard } from './PetCard';
import {
  Search,
  Filter,
  RotateCcw,
  SlidersHorizontal,
  Heart,
  Scale,
  Calendar,
  Palette,
  Sparkles,
  ArrowUpDown,
  Layers,
  X,
} from 'lucide-react';

interface PetCatalogProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onViewDetails: (pet: Pet) => void;
  onAdopt: (pet: Pet) => void;
  onCompare: (pets: Pet[]) => void;
  initialFilters?: { species?: string; ageCategory?: string; size?: string };
}

export const PetCatalog: React.FC<PetCatalogProps> = ({
  favorites,
  onToggleFavorite,
  onViewDetails,
  onAdopt,
  onCompare,
  initialFilters,
}) => {
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState<string>(initialFilters?.species || 'all');
  const [selectedSize, setSelectedSize] = useState<string>(initialFilters?.size || 'all');
  const [selectedAge, setSelectedAge] = useState<string>(initialFilters?.ageCategory || 'all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [onlyApartment, setOnlyApartment] = useState(false);
  const [sortBy, setSortBy] = useState<'relevance' | 'age_asc' | 'age_desc' | 'energy'>('relevance');

  // Compare selection state (max 2 pets)
  const [selectedForCompare, setSelectedForCompare] = useState<Pet[]>([]);

  // Update if initialFilters change from Hero
  React.useEffect(() => {
    if (initialFilters?.species) setSelectedSpecies(initialFilters.species);
    if (initialFilters?.ageCategory) setSelectedAge(initialFilters.ageCategory);
    if (initialFilters?.size) setSelectedSize(initialFilters.size);
  }, [initialFilters]);

  // Color options extracted dynamically or preset
  const colorOptions = [
    { label: 'Todas as Cores', value: 'all' },
    { label: 'Caramelo / Dourado', value: 'caramelo' },
    { label: 'Preto / Frajola', value: 'preto' },
    { label: 'Branco / Claro', value: 'branco' },
    { label: 'Laranja / Ruivo', value: 'laranja' },
    { label: 'Tricolor / Mesclado', value: 'tricolor' },
  ];

  const handleToggleCompare = (pet: Pet) => {
    if (selectedForCompare.some((p) => p.id === pet.id)) {
      setSelectedForCompare(selectedForCompare.filter((p) => p.id !== pet.id));
    } else {
      if (selectedForCompare.length >= 2) {
        // Replace second or warn
        setSelectedForCompare([selectedForCompare[0], pet]);
      } else {
        setSelectedForCompare([...selectedForCompare, pet]);
      }
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedSpecies('all');
    setSelectedSize('all');
    setSelectedAge('all');
    setSelectedColor('all');
    setSelectedGender('all');
    setOnlyFavorites(false);
    setOnlyApartment(false);
    setSortBy('relevance');
  };

  // Filtered & Sorted Pets
  const filteredPets = useMemo(() => {
    return PETS_DATA.filter((pet) => {
      // Search text
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesName = pet.name.toLowerCase().includes(query);
        const matchesBreed = pet.breed.toLowerCase().includes(query);
        const matchesColor = pet.color.toLowerCase().includes(query);
        const matchesTrait = pet.personalityTraits.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesBreed && !matchesColor && !matchesTrait) {
          return false;
        }
      }

      // Species
      if (selectedSpecies !== 'all' && pet.species !== selectedSpecies) {
        return false;
      }

      // Size
      if (selectedSize !== 'all' && pet.size !== selectedSize) {
        return false;
      }

      // Age category
      if (selectedAge !== 'all' && pet.ageCategory !== selectedAge) {
        return false;
      }

      // Gender
      if (selectedGender !== 'all' && pet.gender !== selectedGender) {
        return false;
      }

      // Color
      if (selectedColor !== 'all') {
        const petColorLower = pet.color.toLowerCase();
        if (!petColorLower.includes(selectedColor.toLowerCase())) {
          return false;
        }
      }

      // Only favorites
      if (onlyFavorites && !favorites.includes(pet.id)) {
        return false;
      }

      // Only apartment
      if (onlyApartment && !pet.goodForApartment) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'age_asc') return a.ageYears - b.ageYears;
      if (sortBy === 'age_desc') return b.ageYears - a.ageYears;
      if (sortBy === 'energy') return b.temperamentMetrics.energy - a.temperamentMetrics.energy;
      return 0; // relevance
    });
  }, [
    searchTerm,
    selectedSpecies,
    selectedSize,
    selectedAge,
    selectedColor,
    selectedGender,
    onlyFavorites,
    onlyApartment,
    sortBy,
    favorites,
  ]);

  const hasActiveFilters =
    searchTerm !== '' ||
    selectedSpecies !== 'all' ||
    selectedSize !== 'all' ||
    selectedAge !== 'all' ||
    selectedColor !== 'all' ||
    selectedGender !== 'all' ||
    onlyFavorites ||
    onlyApartment;

  return (
    <section id="catalogo" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF9F6] to-slate-100/60 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Catálogo Interativo de Pets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conheça quem está esperando por você
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Filtre por espécie, analise idade, cor da pelagem e personalidade em detalhes. Adote com total transparência e segurança.
          </p>
        </div>

        {/* Filter Controls Panel */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200/80 mb-8 space-y-4">
          {/* Top Bar: Search and Sort */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por nome, raça, cor (ex: 'caramelo', 'frajola') ou traço..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-2xl pl-11 pr-10 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                <ArrowUpDown className="w-4 h-4 text-amber-600" />
                <span className="hidden sm:inline">Ordenar:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              >
                <option value="relevance">Relevância Geral</option>
                <option value="age_asc">Mais Jovens Primeiro</option>
                <option value="age_desc">Mais Experientes / Idosos</option>
                <option value="energy">Maior Nível de Energia</option>
              </select>
            </div>
          </div>

          {/* Quick Filter Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2.5 pt-2 border-t border-slate-100">
            {/* Espécie */}
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Espécie
              </label>
              <select
                value={selectedSpecies}
                onChange={(e) => setSelectedSpecies(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none"
              >
                <option value="all">Todos</option>
                <option value="Cão">🐶 Cães</option>
                <option value="Gato">🐱 Gatos</option>
              </select>
            </div>

            {/* Idade */}
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Idade
              </label>
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none"
              >
                <option value="all">Todas as Idades</option>
                <option value="filhote">Filhote (&lt; 1 ano)</option>
                <option value="jovem">Jovem (1 a 3 anos)</option>
                <option value="adulto">Adulto (3 a 7 anos)</option>
                <option value="idoso">Idoso (7+ anos)</option>
              </select>
            </div>

            {/* Porte */}
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Porte
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none"
              >
                <option value="all">Todos os Portes</option>
                <option value="Pequeno">Pequeno (até 10kg)</option>
                <option value="Médio">Médio (10 a 20kg)</option>
                <option value="Grande">Grande (20kg+)</option>
              </select>
            </div>

            {/* Cor */}
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Cor da Pelagem
              </label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none"
              >
                {colorOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sexo */}
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Sexo
              </label>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none"
              >
                <option value="all">Todos</option>
                <option value="Macho">Macho</option>
                <option value="Fêmea">Fêmea</option>
              </select>
            </div>

            {/* Special Toggles & Reset */}
            <div className="flex flex-col justify-end">
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="w-full py-1.5 px-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Limpar Filtros</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick toggle pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              onClick={() => setOnlyFavorites(!onlyFavorites)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                onlyFavorites
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-white' : 'text-rose-500'}`} />
              <span>Apenas Meus Favoritos ({favorites.length})</span>
            </button>

            <button
              onClick={() => setOnlyApartment(!onlyApartment)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                onlyApartment
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>🏢 Ideal para Apartamento</span>
            </button>
          </div>
        </div>

        {/* Results Counter Bar */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs sm:text-sm font-bold text-slate-600">
            Exibindo <span className="text-amber-600 font-extrabold">{filteredPets.length}</span>{' '}
            {filteredPets.length === 1 ? 'pet disponível' : 'pets disponíveis'}
          </p>

          {selectedForCompare.length > 0 && (
            <p className="text-xs text-indigo-700 font-bold">
              {selectedForCompare.length} de 2 pets para comparação
            </p>
          )}
        </div>

        {/* Pet Grid */}
        {filteredPets.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Nenhum pet encontrado com esses filtros
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Tente redefinir sua busca por cor, idade ou espécie para ver todos os nossos amigos peludos.
            </p>
            <button
              onClick={resetFilters}
              className="py-2.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              Ver Todos os Pets
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPets.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                isFavorite={favorites.includes(pet.id)}
                onToggleFavorite={onToggleFavorite}
                onViewDetails={onViewDetails}
                onAdopt={onAdopt}
                onToggleCompare={handleToggleCompare}
                isSelectedForCompare={selectedForCompare.some((p) => p.id === pet.id)}
              />
            ))}
          </div>
        )}

      </div>

      {/* Sticky Compare Bottom Drawer */}
      {selectedForCompare.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-4 animate-in slide-in-from-bottom-6 max-w-xl w-[92vw]">
          <div className="flex items-center gap-2">
            {selectedForCompare.map((pet) => (
              <div key={pet.id} className="relative group">
                <img
                  src={pet.images[0]}
                  alt={pet.name}
                  className="w-10 h-10 rounded-xl object-cover border-2 border-amber-400"
                />
                <button
                  onClick={() => handleToggleCompare(pet)}
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px]"
                >
                  ×
                </button>
              </div>
            ))}
            {selectedForCompare.length === 1 && (
              <div className="w-10 h-10 rounded-xl border-2 border-dashed border-slate-600 flex items-center justify-center text-xs text-slate-400 font-bold">
                +1
              </div>
            )}
          </div>

          <div className="flex-1">
            <span className="text-xs font-bold block">
              {selectedForCompare.length === 1
                ? 'Escolha outro pet para comparar'
                : '2 pets selecionados para análise'}
            </span>
            <span className="text-[10px] text-slate-400">
              Analise idade, cor e comportamento lado a lado
            </span>
          </div>

          <button
            disabled={selectedForCompare.length < 2}
            onClick={() => onCompare(selectedForCompare)}
            className={`py-2 px-4 rounded-xl font-bold text-xs transition-all ${
              selectedForCompare.length === 2
                ? 'bg-amber-500 hover:bg-amber-600 text-white cursor-pointer shadow-md'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            Comparar
          </button>
        </div>
      )}
    </section>
  );
};
