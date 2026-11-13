import React, { useState, useEffect } from 'react';
import { PawPrint, Heart, FileText, Menu, X, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  favoritesCount: number;
  adoptionsCount: number;
  onOpenFavorites: () => void;
  onOpenAdoptions: () => void;
  onOpenCatalog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  favoritesCount,
  adoptionsCount,
  onOpenFavorites,
  onOpenAdoptions,
  onOpenCatalog,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Como Adotar', href: '#como-funciona' },
    { label: 'Catálogo de Pets', href: '#catalogo' },
    { label: 'Finais Felizes', href: '#depoimentos' },
    { label: 'FAQ', href: '#duvidas' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-amber-100/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <PawPrint className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-800">
                  Ong<span className="text-amber-600">Pets</span>
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Adoção
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 leading-tight">
                Amor em quatro patas
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-amber-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Favorites button */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2.5 rounded-xl border border-slate-200 hover:border-amber-300 text-slate-700 hover:text-amber-600 hover:bg-amber-50/60 transition-all"
              title="Meus Pets Favoritos"
            >
              <Heart className="w-5 h-5 text-rose-500" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white text-[11px] font-bold flex items-center justify-center animate-bounce">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* My adoptions */}
            {adoptionsCount > 0 && (
              <button
                onClick={onOpenAdoptions}
                className="relative px-3.5 py-2 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold flex items-center gap-1.5 transition-all"
                title="Minhas Adoções Solicitadas"
              >
                <FileText className="w-4 h-4" />
                <span>Minhas Adoções</span>
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center">
                  {adoptionsCount}
                </span>
              </button>
            )}

            {/* Primary CTA */}
            <a
              href="#catalogo"
              onClick={onOpenCatalog}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-md shadow-amber-500/25 hover:shadow-lg hover:shadow-amber-500/30 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Quero Adotar</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenFavorites}
              className="relative p-2 text-rose-500"
              aria-label="Favoritos"
            >
              <Heart className="w-6 h-6 fill-rose-500" />
              {favoritesCount > 0 && (
                <span className="absolute 0 right-0 w-4 h-4 rounded-full bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-xl space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-amber-600 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            {adoptionsCount > 0 && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdoptions();
                }}
                className="w-full py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 text-sm font-bold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Minhas Adoções ({adoptionsCount})</span>
              </button>
            )}

            <a
              href="#catalogo"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCatalog();
              }}
              className="w-full py-3 rounded-xl bg-amber-500 text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2"
            >
              <PawPrint className="w-4 h-4" />
              <span>Ver Catálogo de Pets</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
