import { AdoptionApplication } from '../data/pets';

const FAVORITES_KEY = 'ongpets_favorites';
const ADOPTIONS_KEY = 'ongpets_adoptions';

export const getFavorites = (): string[] => {
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const toggleFavorite = (petId: string): string[] => {
  const current = getFavorites();
  let updated: string[];
  if (current.includes(petId)) {
    updated = current.filter((id) => id !== petId);
  } else {
    updated = [...current, petId];
  }
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save favorites', e);
  }
  return updated;
};

export const getMyAdoptions = (): AdoptionApplication[] => {
  try {
    const data = localStorage.getItem(ADOPTIONS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveAdoption = (application: AdoptionApplication): AdoptionApplication[] => {
  const current = getMyAdoptions();
  const updated = [application, ...current];
  try {
    localStorage.setItem(ADOPTIONS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save adoption application', e);
  }
  return updated;
};
