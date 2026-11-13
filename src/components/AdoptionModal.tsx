import React, { useState } from 'react';
import { Pet, AdoptionApplication } from '../data/pets';
import { saveAdoption } from '../utils/storage';
import confetti from 'canvas-confetti';
import {
  X,
  PawPrint,
  CheckCircle2,
  Heart,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Send,
  Home,
  MessageCircle,
} from 'lucide-react';

interface AdoptionModalProps {
  pet: Pet | null;
  onClose: () => void;
  onAdoptionSubmitted: (app: AdoptionApplication) => void;
}

export const AdoptionModal: React.FC<AdoptionModalProps> = ({
  pet,
  onClose,
  onAdoptionSubmitted,
}) => {
  if (!pet) return null;

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1); // Step 4 is Success state

  // Step 1: Tutor details
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    city: 'São Paulo - SP',
    occupation: '',
    // Step 2: Housing & Lifestyle
    housingType: 'Apartamento com telas de proteção',
    hasScreenedWindows: true,
    hasOtherPets: false,
    otherPetsDetails: '',
    hoursAlone: 'Até 4 horas',
    familyAgrees: true,
    // Step 3: Terms
    termHealth: true,
    termNoAbandon: true,
    termPostAdoptionFollowup: true,
  });

  const [generatedProtocol, setGeneratedProtocol] = useState('');

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
    } else {
      // Submit
      submitApplication();
    }
  };

  const submitApplication = () => {
    const protocol = `ONG-PETS-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedProtocol(protocol);

    const application: AdoptionApplication = {
      id: protocol,
      petId: pet.id,
      petName: pet.name,
      petSpecies: pet.species,
      petImage: pet.images[0],
      applicantName: formData.name || 'Adotante',
      whatsapp: formData.whatsapp,
      email: formData.email,
      city: formData.city,
      housingType: formData.housingType,
      hasScreenedWindows: formData.hasScreenedWindows,
      hasOtherPets: formData.hasOtherPets,
      routineNotes: `Fica sozinho: ${formData.hoursAlone}. Outros pets: ${
        formData.hasOtherPets ? formData.otherPetsDetails || 'Sim' : 'Não'
      }`,
      submittedAt: new Date().toLocaleDateString('pt-BR'),
      status: 'Em Análise',
    };

    saveAdoption(application);
    onAdoptionSubmitted(application);

    // Fire confetti celebration!
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#10b981', '#f43f5e', '#3b82f6', '#8b5cf6'],
      });
    } catch {
      // Fallback if canvas is unavailable
    }

    setStep(4);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá, equipe OngPets! Acabei de enviar meu formulário para adotar o(a) ${pet.name} (Protocolo: ${generatedProtocol}). Estou muito animado(a) e à disposição para a entrevista!`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/60 shadow-md shrink-0 bg-white/20">
              <img src={pet.images[0]} alt={pet.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-bold mb-1">
                <Sparkles className="w-3 h-3 text-amber-200" />
                <span>Processo de Adoção Responsável</span>
              </div>
              <h2 className="text-2xl font-black tracking-tight">
                Adotar o(a) {pet.name}
              </h2>
              <p className="text-xs text-amber-100 font-medium">
                {pet.species} • {pet.breed} • {pet.color} • {pet.ageLabel}
              </p>
            </div>
          </div>

          {/* Stepper (Only visible during steps 1-3) */}
          {step <= 3 && (
            <div className="mt-5 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold text-amber-100">
              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                    step >= 1 ? 'bg-white text-amber-600' : 'bg-white/30 text-white'
                  }`}
                >
                  1
                </span>
                <span className={step === 1 ? 'text-white' : ''}>Seus Dados</span>
              </div>

              <div className="h-0.5 flex-1 mx-3 bg-white/30" />

              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                    step >= 2 ? 'bg-white text-amber-600' : 'bg-white/30 text-white'
                  }`}
                >
                  2
                </span>
                <span className={step === 2 ? 'text-white' : ''}>Seu Lar</span>
              </div>

              <div className="h-0.5 flex-1 mx-3 bg-white/30" />

              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                    step >= 3 ? 'bg-white text-amber-600' : 'bg-white/30 text-white'
                  }`}
                >
                  3
                </span>
                <span className={step === 3 ? 'text-white' : ''}>Termo</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* STEP 1: Seus Dados */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div className="mb-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Passo 1: Dados para Contato
                </h3>
                <p className="text-xs text-slate-500">
                  Nossos voluntários entrarão em contato para combinar a entrevista e visita.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Mariana Silva"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    E-mail Principal *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Cidade / Bairro onde mora *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: São Paulo - Vila Mariana"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Profissão / Ocupação
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Designer / Home office"
                    value={formData.occupation}
                    onChange={(e) => handleInputChange('occupation', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Avançar para o Passo 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Seu Lar */}
          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div className="mb-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Passo 2: Condições do Imóvel e Rotina
                </h3>
                <p className="text-xs text-slate-500">
                  Buscamos entender a compatibilidade do perfil do {pet.name} com a sua rotina.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tipo de Moradia
                </label>
                <select
                  value={formData.housingType}
                  onChange={(e) => handleInputChange('housingType', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                >
                  <option value="Apartamento com redes de proteção">Apartamento com redes de proteção instaladas</option>
                  <option value="Apartamento (vou instalar as redes)">Apartamento (vou providenciar as telas)</option>
                  <option value="Casa com quintal seguro e muros altos">Casa com quintal seguro e muros altos</option>
                  <option value="Casa sem quintal">Casa sem quintal</option>
                  <option value="Chácara / Sítio cercado">Chácara / Sítio totalmente cercado</option>
                </select>
              </div>

              <div className="bg-amber-50/60 border border-amber-200/60 p-3 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">
                    Janelas e sacadas possuem telas de segurança?
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Obrigatório para gatos e filhotes para evitar quedas.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={formData.hasScreenedWindows}
                  onChange={(e) => handleInputChange('hasScreenedWindows', e.target.checked)}
                  className="w-5 h-5 rounded text-amber-500 focus:ring-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Já possui outros animais na casa?
                </label>
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <button
                    type="button"
                    onClick={() => handleInputChange('hasOtherPets', false)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                      !formData.hasOtherPets
                        ? 'border-amber-500 bg-amber-50 text-amber-900'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    Não, será filho único
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('hasOtherPets', true)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                      formData.hasOtherPets
                        ? 'border-amber-500 bg-amber-50 text-amber-900'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    Sim, já tenho outros pets
                  </button>
                </div>

                {formData.hasOtherPets && (
                  <input
                    type="text"
                    placeholder="Quais? Ex: 1 cão macho dócil e vacinado"
                    value={formData.otherPetsDetails}
                    onChange={(e) => handleInputChange('otherPetsDetails', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-800 mt-2"
                  />
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Quantas horas o pet ficará sozinho por dia?
                </label>
                <select
                  value={formData.hoursAlone}
                  onChange={(e) => handleInputChange('hoursAlone', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                >
                  <option value="Quase nunca (trabalho home office / tem sempre alguém)">Quase nunca (sempre tem alguém em casa)</option>
                  <option value="Até 4 horas por dia">Até 4 horas por dia</option>
                  <option value="De 4 a 8 horas por dia">De 4 a 8 horas por dia</option>
                  <option value="Mais de 8 horas por dia">Mais de 8 horas por dia</option>
                </select>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3 px-5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="submit"
                  className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Avançar para o Termo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Termo de Compromisso */}
          {step === 3 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div className="mb-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Passo 3: Termo de Posse Responsável
                </h3>
                <p className="text-xs text-slate-500">
                  Adoção é um ato para a vida inteira. Por favor, confirme os compromissos abaixo:
                </p>
              </div>

              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.termHealth}
                    onChange={(e) => handleInputChange('termHealth', e.target.checked)}
                    className="w-5 h-5 rounded text-amber-500 mt-0.5"
                  />
                  <span className="text-xs text-slate-700 leading-snug">
                    Comprometo-me a fornecer alimentação de qualidade, vacinação anual, vermifugação e atendimento veterinário sempre que necessário.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.termNoAbandon}
                    onChange={(e) => handleInputChange('termNoAbandon', e.target.checked)}
                    className="w-5 h-5 rounded text-amber-500 mt-0.5"
                  />
                  <span className="text-xs text-slate-700 leading-snug">
                    Estou ciente de que animais não são descartáveis e jamais o abandonarei ou repassarei a terceiros sem aviso prévio à OngPets.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.termPostAdoptionFollowup}
                    onChange={(e) => handleInputChange('termPostAdoptionFollowup', e.target.checked)}
                    className="w-5 h-5 rounded text-amber-500 mt-0.5"
                  />
                  <span className="text-xs text-slate-700 leading-snug">
                    Autorizo o acompanhamento voluntário pós-adoção com envio esporádico de fotos e notícias de adaptação do {pet.name}.
                  </span>
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="py-3 px-5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="submit"
                  className="py-3.5 px-7 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmar Pedido de Adoção</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success / Ticket State */}
          {step === 4 && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase mb-2">
                  🎉 Pedido Registrado com Sucesso!
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Parabéns, {formData.name || 'Futuro Tutor'}!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Seu interesse em adotar o(a) <strong>{pet.name}</strong> foi registrado em nossa base de dados.
                </p>
              </div>

              {/* Protocol Badge */}
              <div className="bg-slate-50 border-2 border-dashed border-amber-300 p-4 rounded-2xl max-w-sm mx-auto">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block">
                  Número de Protocolo
                </span>
                <span className="text-2xl font-black text-amber-600 tracking-wider">
                  {generatedProtocol}
                </span>
                <span className="text-[11px] text-slate-500 block mt-1">
                  Guarde este número para consultar seu status a qualquer momento.
                </span>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="space-y-3 max-w-md mx-auto">
                <a
                  href={`https://wa.me/5511999998888?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Agilizar Entrevista no WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-3 px-6 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Concluir e Voltar ao Site
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
