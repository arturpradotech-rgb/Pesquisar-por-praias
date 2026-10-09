'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Bookmark, Trash2, Clock, CheckSquare, PhoneCall, Download, ListChecks, AlertCircle } from 'lucide-react';
import { DESTINATIONS_DATA, Destination } from '@/data/destinations';

interface SavedRoutesViewProps {
  savedDestinations: string[];
  onSelectDestination: (id: string) => void;
  onToggleSave: (id: string) => void;
  onExploreMore: () => void;
}

export default function SavedRoutesView({
  savedDestinations,
  onSelectDestination,
  onToggleSave,
  onExploreMore,
}: SavedRoutesViewProps) {
  const [checklist, setChecklist] = useState<{ id: string; text: string; done: boolean }[]>([
    { id: '1', text: 'Tag de pedágio (Sem Parar / ConectCar / Veloe) abastecida', done: true },
    { id: '2', text: 'Protetor solar corporal e facial FPS 50+ na mala', done: true },
    { id: '3', text: 'Checar neblina na Imigrantes ou Tamoios antes de sair', done: false },
    { id: '4', text: 'Garrafa térmica com água e lanche para descida da serra', done: true },
    { id: '5', text: 'Se for para Ilhabela: Agendar Hora Marcada na Balsa', done: false },
  ]);

  const toggleCheck = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const savedList = DESTINATIONS_DATA.filter((d) => savedDestinations.includes(d.id));

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-8 flex flex-col gap-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#edecff] via-[#f4f2ff] to-[#ffdcc4] p-6 md:p-8 rounded-3xl border border-[#e0e0fc] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#934b00] text-xs font-bold shadow-sm mb-2">
            <Download className="w-4 h-4 text-[#934b00]" />
            <span>MODO OFFLINE SOBERANO</span>
          </div>
          <h1 className="font-['Plus Jakarta Sans'] text-2xl md:text-3xl font-extrabold text-[#181a2e]">
            Meus Roteiros Salvos (Offline)
          </h1>
          <p className="text-[14px] text-[#514532] mt-1 max-w-xl">
            Acesse seus guias de viagem mesmo em trechos de serra sem sinal de operadora (Vivo,
            Claro, TIM) na Rodovia Rio-Santos e descida da Serra do Mar.
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#e0e0fc] flex items-center gap-4 flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-[#ffdcc4] text-[#934b00] flex items-center justify-center font-bold text-xl">
            {savedDestinations.length}
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#514532] block">
              Destinos em Cache
            </span>
            <span className="text-[13px] font-bold text-[#181a2e]">
              100% Disponível Offline
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Saved Destinations List (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-['Plus Jakarta Sans'] text-xl font-bold text-[#181a2e]">
              Roteiros Gravados no Dispositivo
            </h2>
            <span className="text-xs text-[#514532]">
              Partida de Santo André pré-configurada
            </span>
          </div>

          {savedList.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl text-center border border-[#e0e0fc] shadow-sm flex flex-col items-center gap-3">
              <Bookmark className="w-12 h-12 text-[#fd8603]" />
              <h3 className="text-lg font-bold text-[#181a2e]">Nenhum roteiro salvo ainda</h3>
              <p className="text-sm text-[#514532] max-w-md">
                Ao explorar destinos como Ubatuba, Santos ou Ilhabela, clique no botão de salvar para
                ter todos os dados disponíveis mesmo sem internet na serra.
              </p>
              <button
                type="button"
                onClick={onExploreMore}
                className="mt-2 px-6 py-2.5 rounded-xl bg-[#fd8603] text-white font-bold text-sm shadow-md hover:bg-[#e07502] transition-colors"
              >
                Explorar Destinos Ensolarados →
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {savedList.map((dest) => (
                <div
                  key={dest.id}
                  className="bg-white rounded-3xl p-5 shadow-sm border border-[#e0e0fc] flex flex-col sm:flex-row items-stretch gap-4 hover:shadow-md transition-shadow min-h-fit"
                >
                  <div className="relative w-full sm:w-48 min-h-[140px] sm:h-36 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100">
                    <Image
                      src={dest.coverImage}
                      alt={dest.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 192px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/95 text-[10px] font-bold text-[#934b00]">
                      ☀️ {dest.tempC}°C
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between gap-3 min-w-0 min-h-fit">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="text-[11px] font-bold text-[#00677d] uppercase tracking-wider flex-shrink-0">
                          {dest.regionBadge}
                        </span>
                        <button
                          type="button"
                          onClick={() => onToggleSave(dest.id)}
                          className="text-xs text-red-500 font-semibold hover:underline flex items-center gap-1 flex-shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Remover
                        </button>
                      </div>

                      <h3 className="font-['Plus Jakarta Sans'] text-lg font-bold text-[#181a2e] mt-1 break-words leading-snug">
                        {dest.name}
                      </h3>
                      <p className="text-[12px] text-[#514532] mt-1 break-words leading-relaxed">
                        {dest.subtitleHero}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#e0e0fc] mt-auto">
                      <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#514532]">
                        <span className="flex items-center gap-1 font-semibold text-[#181a2e] flex-shrink-0">
                          <Clock className="w-3.5 h-3.5 text-[#934b00]" />
                          {dest.carTimeFromABC}
                        </span>
                        <span className="break-words">Pedágios: {dest.tollsCostOneWay}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectDestination(dest.id)}
                        className="px-4 py-1.5 rounded-xl bg-[#ffb703] text-[#6b4b00] font-bold text-xs hover:bg-[#e0a202] transition-colors flex-shrink-0"
                      >
                        Abrir Guia Offline →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar: Checklist & Emergency Support (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Traveler Checklist */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#e0e0fc] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-[#934b00]" />
              <h3 className="font-['Plus Jakarta Sans'] text-base font-bold text-[#181a2e]">
                Checklist do Viajante do ABC
              </h3>
            </div>

            <p className="text-xs text-[#514532]">
              Itens recomendados para não esquecer antes de pegar a Imigrantes ou Tamoios:
            </p>

            <div className="flex flex-col gap-2.5">
              {checklist.map((item) => (
                <label
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#f4f2ff] cursor-pointer transition-colors text-[12px]"
                >
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => {}}
                    className="mt-0.5 rounded text-[#fd8603] focus:ring-[#fd8603]"
                  />
                  <span
                    className={`${
                      item.done ? 'line-through text-[#837560]' : 'text-[#181a2e] font-medium'
                    }`}
                  >
                    {item.text}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Emergency Contacts on Serra */}
          <div className="bg-[#f4f2ff] p-6 rounded-3xl border border-[#e0e0fc] flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#ba1a1a]" />
              <h3 className="font-['Plus Jakarta Sans'] text-base font-bold text-[#181a2e]">
                Telefones de Emergência na Serra
              </h3>
            </div>
            <p className="text-xs text-[#514532]">
              Guarde estes números salvos para acionamento rápido de guincho e resgate:
            </p>

            <div className="space-y-2 text-[12px]">
              <div className="p-3 rounded-xl bg-white flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 border border-[#e0e0fc] min-h-fit">
                <div className="min-w-0">
                  <span className="font-bold text-[#181a2e] block break-words">Ecovias (Imigrantes/Anchieta)</span>
                  <span className="text-[11px] text-[#514532] break-words">Guincho e SOS 24h</span>
                </div>
                <span className="font-mono font-bold text-[#00677d] flex-shrink-0">0800 019 7878</span>
              </div>

              <div className="p-3 rounded-xl bg-white flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 border border-[#e0e0fc] min-h-fit">
                <div className="min-w-0">
                  <span className="font-bold text-[#181a2e] block break-words">Concessionária Tamoios</span>
                  <span className="text-[11px] text-[#514532] break-words">Túneis e Serra</span>
                </div>
                <span className="font-mono font-bold text-[#00677d] flex-shrink-0">0800 545 0000</span>
              </div>

              <div className="p-3 rounded-xl bg-white flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 border border-[#e0e0fc] min-h-fit">
                <div className="min-w-0">
                  <span className="font-bold text-[#181a2e] block break-words">GBMar (Salva-Vidas Marítimo)</span>
                  <span className="text-[11px] text-[#514532] break-words">Emergência nas praias</span>
                </div>
                <span className="font-mono font-bold text-[#ba1a1a] flex-shrink-0">Ligue 193</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
