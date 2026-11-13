import React from 'react';
import { AdoptionApplication } from '../data/pets';
import { X, FileText, CheckCircle2, Clock, Calendar, MapPin, ExternalLink, MessageCircle } from 'lucide-react';

interface MyAdoptionsModalProps {
  adoptions: AdoptionApplication[];
  onClose: () => void;
}

export const MyAdoptionsModal: React.FC<MyAdoptionsModalProps> = ({
  adoptions,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-emerald-700 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <h2 className="text-xl font-black">Minhas Solicitações de Adoção</h2>
              <p className="text-xs text-emerald-200">
                Acompanhe o andamento dos seus pedidos registrados
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Applications */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
          {adoptions.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-700">Nenhum pedido de adoção registrado ainda</p>
              <p className="text-xs text-slate-500 mt-1">
                Explore nosso catálogo e clique em "Adotar" no perfil do seu pet favorito!
              </p>
            </div>
          ) : (
            adoptions.map((app) => (
              <div
                key={app.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <img
                    src={app.petImage}
                    alt={app.petName}
                    className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-slate-900 text-base">{app.petName}</h4>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900">
                        {app.petSpecies}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      Protocolo: <span className="font-bold text-slate-700">{app.id}</span>
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Solicitado em: {app.submittedAt} • Por: {app.applicantName}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{app.status}</span>
                  </span>

                  <a
                    href={`https://wa.me/5511999998888?text=${encodeURIComponent(
                      `Olá! Gostaria de saber sobre o status do protocolo ${app.id} referente à adoção do ${app.petName}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Consultar Equipe</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
