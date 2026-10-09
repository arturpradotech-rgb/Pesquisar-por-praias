'use client';

import React, { useState } from 'react';
import { MapPin, ChevronDown, Search } from 'lucide-react';
import { SANTO_ANDRE_NEIGHBORHOODS } from '@/data/abcLogistics';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, destinationId?: string) => void;
  selectedNeighborhoodId: string;
  onSelectNeighborhood: (id: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  savedCount: number;
}

export default function Header({
  currentView,
  onNavigate,
  selectedNeighborhoodId,
  onSelectNeighborhood,
  searchQuery,
  onSearchChange,
  savedCount,
}: HeaderProps) {
  const [isNeighborhoodOpen, setIsNeighborhoodOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const currentNeighborhood =
    SANTO_ANDRE_NEIGHBORHOODS.find((n) => n.id === selectedNeighborhoodId) ||
    SANTO_ANDRE_NEIGHBORHOODS[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fbf8ff]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(2,48,71,0.06)] border-b border-[#e0e0fc]/60">
      <div className="h-20 w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
        {/* Logo and Origin */}
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 min-w-0">
          <button
            onClick={() => onNavigate('radar')}
            className="flex items-center gap-2 sm:gap-2.5 text-left group transition-transform active:scale-98 flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ffb703] via-[#fd8603] to-[#7d5800] flex items-center justify-center shadow-md text-white font-bold text-xl group-hover:rotate-12 transition-transform flex-shrink-0">
              ☀️
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-['Plus Jakarta Sans'] text-[16px] sm:text-[18px] font-bold text-[#7d5800] tracking-tight leading-tight break-words">
                Onde tem o Sol
              </span>
              <span className="font-['Work Sans'] text-[10px] sm:text-[11px] font-bold text-[#934b00] uppercase tracking-wider mt-0.5 break-words">
                Litoral SP • ABC Paulista
              </span>
            </div>
          </button>

          {/* Departure Selector Pill (Desktop) */}
          <div className="hidden xl:relative xl:block">
            <div className="flex items-center gap-1.5 bg-[#f4f2ff] px-3.5 py-1.5 rounded-full shadow-[0_1px_4px_rgba(2,48,71,0.04)] border border-[#e0e0fc]">
              <MapPin className="w-4 h-4 text-[#934b00] flex-shrink-0" />
              <span className="font-['Work Sans'] text-[12px] text-[#181a2e] font-medium flex-shrink-0">
                Partindo de:
              </span>
              <button
                type="button"
                onClick={() => setIsNeighborhoodOpen(!isNeighborhoodOpen)}
                className="font-['Work Sans'] text-[12px] text-[#934b00] hover:text-[#5f2f00] transition-colors flex items-center gap-1 font-bold max-w-[200px] min-w-0"
              >
                <span className="truncate">{currentNeighborhood.fullName}</span>
                <ChevronDown className="w-4 h-4 text-[#934b00] flex-shrink-0" />
              </button>
            </div>

            {/* Dropdown Menu */}
            {isNeighborhoodOpen && (
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-[#e0e0fc] py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#934b00]">
                    Selecione seu Bairro no ABC
                  </span>
                </div>
                {SANTO_ANDRE_NEIGHBORHOODS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectNeighborhood(item.id);
                      setIsNeighborhoodOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 hover:bg-[#f4f2ff] flex flex-col transition-colors ${
                      item.id === selectedNeighborhoodId ? 'bg-[#edecff]' : ''
                    }`}
                  >
                    <span className="text-[13px] font-bold text-[#181a2e] break-words">{item.name}</span>
                    <span className="text-[11px] text-[#514532] break-words">{item.highwayAccess}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Global Search Bar (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm mx-2">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#837560]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar praia, cidade litorânea ou rodovia..."
              className="w-full bg-white pl-10 pr-4 py-2 rounded-full font-['Work Sans'] text-[12px] text-[#181a2e] placeholder-[#837560] focus:outline-none focus:ring-2 focus:ring-[#66d2f1] shadow-[0_1px_4px_rgba(2,48,71,0.05)] border border-[#e0e0fc] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={() => onNavigate('radar')}
            className={`px-3.5 py-2 text-[14px] font-semibold rounded-lg transition-all ${
              currentView === 'radar'
                ? 'bg-[#ffb703] text-[#6b4b00] shadow-sm font-bold'
                : 'text-[#514532] hover:text-[#181a2e] hover:bg-[#f4f2ff]'
            }`}
          >
            Explorar Destinos
          </button>
          <button
            onClick={() => onNavigate('mapa')}
            className={`px-3.5 py-2 text-[14px] font-semibold rounded-lg transition-all ${
              currentView === 'mapa'
                ? 'bg-[#ffb703] text-[#6b4b00] shadow-sm font-bold'
                : 'text-[#514532] hover:text-[#181a2e] hover:bg-[#f4f2ff]'
            }`}
          >
            Mapa das Praias
          </button>
          <button
            onClick={() => onNavigate('calculadora')}
            className={`px-3.5 py-2 text-[14px] font-semibold rounded-lg transition-all ${
              currentView === 'calculadora'
                ? 'bg-[#ffb703] text-[#6b4b00] shadow-sm font-bold'
                : 'text-[#514532] hover:text-[#181a2e] hover:bg-[#f4f2ff]'
            }`}
          >
            Calculadora de Rotas
          </button>
          <button
            onClick={() => onNavigate('salvos')}
            className={`px-3.5 py-2 text-[14px] font-semibold rounded-lg transition-all relative flex items-center gap-1.5 ${
              currentView === 'salvos'
                ? 'bg-[#ffb703] text-[#6b4b00] shadow-sm font-bold'
                : 'text-[#514532] hover:text-[#181a2e] hover:bg-[#f4f2ff]'
            }`}
          >
            <span>Roteiros Salvos (Offline)</span>
            {savedCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#934b00] text-white text-[10px] font-bold flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile Search Toggle & User Profile */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            aria-label="Buscar"
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            className="md:hidden p-2 text-[#514532] hover:text-[#181a2e] rounded-lg"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('salvos')}
            className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-[#ffb703] transition-all"
            title="Meu Perfil • Viajante de Santo André"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#934b00] to-[#fd8603] text-white flex items-center justify-center font-bold text-xs shadow-sm">
              SA
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Search Drawer */}
      {isMobileSearchOpen && (
        <div className="md:hidden px-4 pb-3 pt-1 border-t border-[#e0e0fc] bg-white">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#837560]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar praia, cidade litorânea ou rodovia..."
              className="w-full bg-[#f4f2ff] pl-9 pr-4 py-2 rounded-full text-[13px] text-[#181a2e] focus:outline-none focus:ring-2 focus:ring-[#ffb703]"
            />
          </div>
          {/* Mobile Quick Nav */}
          <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                onNavigate('radar');
                setIsMobileSearchOpen(false);
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-center bg-[#f4f2ff] text-[#181a2e]"
            >
              ☀️ Explorar Destinos
            </button>
            <button
              onClick={() => {
                onNavigate('mapa');
                setIsMobileSearchOpen(false);
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-center bg-[#f4f2ff] text-[#181a2e]"
            >
              🗺️ Mapa & Calculadora
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
