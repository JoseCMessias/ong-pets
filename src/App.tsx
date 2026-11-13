import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { PetCatalog } from './components/PetCatalog';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { SuccessStories } from './components/SuccessStories';
import { DonationSection } from './components/DonationSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

// Modals
import { PetDetailModal } from './components/PetDetailModal';
import { AdoptionModal } from './components/AdoptionModal';
import { PetCompareModal } from './components/PetCompareModal';
import { MyAdoptionsModal } from './components/MyAdoptionsModal';

import { Pet, AdoptionApplication } from './data/pets';
import { getFavorites, toggleFavorite, getMyAdoptions } from './utils/storage';

export const App: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [myAdoptions, setMyAdoptions] = useState<AdoptionApplication[]>([]);

  // Modals state
  const [selectedPetForDetails, setSelectedPetForDetails] = useState<Pet | null>(null);
  const [selectedPetForAdoption, setSelectedPetForAdoption] = useState<Pet | null>(null);
  const [petsForComparison, setPetsForComparison] = useState<Pet[] | null>(null);
  const [isAdoptionsModalOpen, setIsAdoptionsModalOpen] = useState(false);

  // Quick filters coming from Hero Search Bar
  const [heroFilters, setHeroFilters] = useState<{
    species?: string;
    ageCategory?: string;
    size?: string;
  }>({});

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setFavorites(getFavorites());
    setMyAdoptions(getMyAdoptions());
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleFavorite = (petId: string) => {
    const updated = toggleFavorite(petId);
    setFavorites(updated);
    if (updated.includes(petId)) {
      showToast('🐾 Pet adicionado aos seus favoritos!');
    } else {
      showToast('Pet removido dos favoritos.');
    }
  };

  const handleOpenAdoption = (pet: Pet) => {
    setSelectedPetForAdoption(pet);
  };

  const handleAdoptionSubmitted = (app: AdoptionApplication) => {
    setMyAdoptions(getMyAdoptions());
    showToast(`🎉 Solicitação para ${app.petName} enviada com sucesso!`);
  };

  const handleQuickFilterFromHero = (filters: {
    species?: string;
    ageCategory?: string;
    size?: string;
  }) => {
    setHeroFilters(filters);
  };

  const handleOpenFavoritesFilter = () => {
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
    // You could also toggle a favorites filter flag
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 bg-slate-900 text-white text-xs sm:text-sm font-bold px-4 py-3 rounded-2xl shadow-xl border border-slate-700 animate-in fade-in slide-in-from-top-3 flex items-center gap-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navbar */}
      <Navbar
        favoritesCount={favorites.length}
        adoptionsCount={myAdoptions.length}
        onOpenFavorites={handleOpenFavoritesFilter}
        onOpenAdoptions={() => setIsAdoptionsModalOpen(true)}
        onOpenCatalog={() => {
          const el = document.getElementById('catalogo');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onQuickFilter={handleQuickFilterFromHero}
          onExploreCatalog={() => {
            const el = document.getElementById('catalogo');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Stats Banner */}
        <StatsBanner />

        {/* Interactive Pet Catalog */}
        <PetCatalog
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onViewDetails={(pet) => setSelectedPetForDetails(pet)}
          onAdopt={handleOpenAdoption}
          onCompare={(pets) => setPetsForComparison(pets)}
          initialFilters={heroFilters}
        />

        {/* How it Works */}
        <HowItWorks />

        {/* About Section */}
        <AboutSection />

        {/* Success Stories */}
        <SuccessStories />

        {/* Donation & Support */}
        <DonationSection />

        {/* FAQ */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {selectedPetForDetails && (
        <PetDetailModal
          pet={selectedPetForDetails}
          onClose={() => setSelectedPetForDetails(null)}
          onAdopt={(pet) => {
            setSelectedPetForDetails(null);
            handleOpenAdoption(pet);
          }}
          isFavorite={favorites.includes(selectedPetForDetails.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {selectedPetForAdoption && (
        <AdoptionModal
          pet={selectedPetForAdoption}
          onClose={() => setSelectedPetForAdoption(null)}
          onAdoptionSubmitted={handleAdoptionSubmitted}
        />
      )}

      {petsForComparison && petsForComparison.length >= 2 && (
        <PetCompareModal
          pets={petsForComparison}
          onClose={() => setPetsForComparison(null)}
          onSelectPetForDetails={(pet) => {
            setPetsForComparison(null);
            setSelectedPetForDetails(pet);
          }}
          onAdopt={(pet) => {
            setPetsForComparison(null);
            handleOpenAdoption(pet);
          }}
        />
      )}

      {isAdoptionsModalOpen && (
        <MyAdoptionsModal
          adoptions={myAdoptions}
          onClose={() => setIsAdoptionsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
