import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Existe alguma taxa obrigatória para adotar um pet?',
      a: 'Não cobramos nenhuma taxa pela adoção! A OngPets é uma organização sem fins lucrativos. Caso o adotante queira e possa fazer uma doação espontânea para ajudar a cobrir custos dos próximos resgates, ela é muito bem-vinda.',
    },
    {
      q: 'Os pets já são entregues castrados e com vacinas?',
      a: 'Sim, 100%! Todos os animais adultos são entregues devidamente castrados, vacinados com polivalente e antirrábica, vermifugados e microchipados. No caso de filhotes muito novos que ainda não atingiram o peso para cirurgia, a castração futura é garantida e custeada pela ONG.',
    },
    {
      q: 'Moro em apartamento. Posso adotar cães ou gatos?',
      a: 'Com certeza! No caso de gatos, é requisito indispensável que todas as janelas e sacadas possuam redes de proteção devidamente instaladas para prevenir acidentes. Para cães, temos diversos portes pequenos e médios perfeitamente adaptáveis à rotina de apartamento.',
    },
    {
      q: 'Como funciona o período de adaptação do pet?',
      a: 'Apoiamos a regra dos "3 dias, 3 semanas, 3 meses" para a adaptação de animais resgatados. Nossa equipe voluntária mantém contato regular para dar dicas de enriquecimento ambiental, rotina de passeios e alimentação.',
    },
    {
      q: 'Posso visitar o pet antes de confirmar a adoção?',
      a: 'Sim! Após o pré-alinhamento do formulário, agendamos uma visita ao lar temporário ou organizamos uma videochamada detalhada para você interagir e sentir a conexão com o animal.',
    },
    {
      q: 'O que acontece se eu não me adaptar ou surgir um imprevisto grave?',
      a: 'Prezamos pela posse responsável e fazemos uma triagem cuidadosa justamente para evitar devoluções. Contudo, em casos excepcionais e de força maior, o animal deve obrigatoriamente ser devolvido à OngPets, nunca abandonado ou repassado a terceiros desconhecidos.',
    },
  ];

  return (
    <section id="duvidas" className="py-16 md:py-24 bg-slate-50/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ficou com alguma dúvida?
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Confira as respostas para as perguntas mais comuns de futuros tutores.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-100 text-amber-700' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
