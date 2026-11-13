import React from 'react';
import { PawPrint, Heart, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
                <PawPrint className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Ong<span className="text-amber-500">Pets</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Conectando animais resgatados a lares cheios de amor, responsabilidade e respeito. Resgatamos, tratamos, castramos e encaminhamos para adoções para a vida inteira.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* Instagram SVG */}
              <a
                href="#inicio"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-amber-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href="#inicio"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-amber-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              {/* YouTube SVG */}
              <a
                href="#inicio"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-amber-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                title="YouTube"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-amber-400 transition-colors">
                  Nossa Missão & História
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-amber-400 transition-colors">
                  Como Funciona a Adoção
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-amber-400 transition-colors">
                  Catálogo de Pets (Cães & Gatos)
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-amber-400 transition-colors">
                  Finais Felizes & Relatos
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-amber-400 transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Fale Conosco
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Atuação em São Paulo, ABC e Região Metropolitana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>WhatsApp: (11) 99999-8888 (Plantão Voluntário)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <span>E-mail: contato@ongpets.org.br</span>
              </div>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-400 mt-4">
              <p className="font-semibold text-white mb-0.5">⚠️ Importante:</p>
              Não abandonamos animais e somos contra a venda indiscriminada. Denuncie maus-tratos ligando para o 190 ou disque denúncia local.
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} OngPets. Todos os direitos reservados. Organização Sem Fins Lucrativos.</p>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para salvar vidas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
