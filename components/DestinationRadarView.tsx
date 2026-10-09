'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  Sun,
  MapPin,
  ChevronDown,
  Route,
  Navigation,
  Compass,
  Gauge,
  Search,
  SlidersHorizontal,
  Grid,
  List,
  Clock,
  ShieldCheck,
  Bookmark,
  Coins,
  Bus,
  ExternalLink,
  Video,
  Droplets,
  CheckCircle2,
  Waves,
  Car,
  CloudSun,
} from 'lucide-react';
import { DESTINATIONS_DATA, Destination } from '@/data/destinations';
import { SANTO_ANDRE_NEIGHBORHOODS, HIGHWAYS_STATUS } from '@/data/abcLogistics';

interface DestinationRadarViewProps {
  onSelectDestination: (destinationId: string) => void;
  selectedNeighborhoodId: string;
  onSelectNeighborhood: (id: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  savedDestinations: string[];
  onToggleSave: (id: string) => void;
  onNavigateToCalculator: () => void;
}

export default function DestinationRadarView({
  onSelectDestination,
  selectedNeighborhoodId,
  onSelectNeighborhood,
  searchQuery,
  onSearchChange,
  savedDestinations,
  onToggleSave,
  onNavigateToCalculator,
}: DestinationRadarViewProps) {
  const [selectedRadius, setSelectedRadius] = useState<string>('all');
  const [selectedVibe, setSelectedVibe] = useState<string>('Todos');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [saveToast, setSaveToast] = useState<string | null>(null);

  const currentNeighborhood =
    SANTO_ANDRE_NEIGHBORHOODS.find((n) => n.id === selectedNeighborhoodId) ||
    SANTO_ANDRE_NEIGHBORHOODS[0];

  const handleSaveWithToast = (id: string, name: string) => {
    onToggleSave(id);
    const isNowSaved = !savedDestinations.includes(id);
    setSaveToast(
      isNowSaved
        ? `"${name}" salvo para consulta offline!`
        : `"${name}" removido dos salvos.`
    );
    setTimeout(() => {
      setSaveToast(null);
    }, 2800);
  };

  // Filter logic
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS_DATA.filter((dest) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = dest.name.toLowerCase().includes(q);
        const matchesRegion = dest.regionBadge.toLowerCase().includes(q);
        const matchesRoute = dest.bestRouteDescription.toLowerCase().includes(q);
        const matchesBeach = dest.beaches.some((b) =>
          b.name.toLowerCase().includes(q) || b.description.toLowerCase().includes(q)
        );
        if (!matchesName && !matchesRegion && !matchesRoute && !matchesBeach) {
          return false;
        }
      }

      // Radius filter
      if (selectedRadius !== 'all') {
        if (dest.radiusCategory !== selectedRadius) {
          return false;
        }
      }

      // Vibe filter
      if (selectedVibe !== 'Todos') {
        if (!dest.vibes.includes(selectedVibe)) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedRadius, selectedVibe]);

  const vibesList = [
    'Todos',
    'Sol Máximo Hoje',
    'Praias Estruturadas',
    'Trilhas & Selvagens',
    'Gastronomia Pé na Areia',
    'Família & Águas Calmas',
    'Vida Noturna & Beach Club',
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Toast Notification */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#181a2e] text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-sm font-semibold animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-[#ffb703] flex-shrink-0" />
          <span>{saveToast}</span>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-[#f4f2ff] via-[#fbf8ff] to-[#fbf8ff] pt-8 pb-12 px-4 md:px-6 lg:px-8 overflow-hidden">
        {/* Ambient sun rays overlay */}
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#ffb703]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute top-48 -left-20 w-80 h-80 rounded-full bg-[#66d2f1]/15 blur-2xl pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto flex flex-col gap-6 relative z-10">
          {/* Top Title and Origin Dropdown */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-[#934b00] font-['Work Sans'] text-xs uppercase tracking-widest font-bold">
                <Sun className="w-4 h-4 text-[#934b00]" />
                <span>Guia Solar Inteligente Grande ABC</span>
              </div>
              <h1 className="font-['Plus Jakarta Sans'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#181a2e] tracking-tight leading-tight break-words">
                Onde tem o Sol, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd8603] via-[#7d5800] to-[#00677d]">
                  é pra lá que eu vou
                </span>{' '}
                ☀️
              </h1>
              <p className="font-['Work Sans'] text-base md:text-lg text-[#514532] break-words leading-relaxed">
                Encontre sol garantido, mar limpo e a rota mais rápida saindo de Santo André com
                base nos dados climáticos e de trânsito em tempo real.
              </p>
            </div>

            {/* Neighborhood Origin Selector Box */}
            <div className="w-full lg:w-auto flex-shrink-0 bg-white p-4 rounded-2xl shadow-md border border-[#e0e0fc] flex flex-col gap-2 min-h-fit">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-[#514532] uppercase tracking-wider">
                <span className="flex items-center gap-1 text-[#934b00] flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#934b00]" />
                  Ponto de Partida Definido
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#edecff] text-[#00677d] font-bold flex-shrink-0">
                  SP-160 / SP-150
                </span>
              </div>

              <div className="relative">
                <select
                  value={selectedNeighborhoodId}
                  onChange={(e) => onSelectNeighborhood(e.target.value)}
                  className="w-full appearance-none bg-[#f4f2ff] hover:bg-[#edecff] text-[#181a2e] font-['Plus Jakarta Sans'] text-[14px] sm:text-[15px] font-bold py-2.5 pl-3.5 pr-10 rounded-xl cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffb703] border border-[#e0e0fc] break-words"
                >
                  {SANTO_ANDRE_NEIGHBORHOODS.map((nh) => (
                    <option key={nh.id} value={nh.id}>
                      📍 {nh.fullName}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#514532] w-5 h-5" />
              </div>

              <div className="flex items-center gap-1 text-[11px] text-[#514532] break-words">
                <Route className="w-3.5 h-3.5 text-[#00677d] flex-shrink-0" />
                <span className="break-words leading-tight">{currentNeighborhood.highwayAccess}</span>
              </div>
            </div>
          </div>

          {/* Traffic Mountain Passes Resumo Cards (3 Rodovias principais do ABC) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {HIGHWAYS_STATUS.map((hw) => (
              <div
                key={hw.code}
                className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#e0e0fc] flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-3 min-h-fit"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-11 h-11 rounded-xl bg-[#edecff] flex items-center justify-center text-[#7d5800] flex-shrink-0">
                    {hw.code === 'SP-160' ? (
                      <Navigation className="w-6 h-6 text-[#7d5800]" />
                    ) : hw.code === 'SP-099' ? (
                      <Compass className="w-6 h-6 text-[#7d5800]" />
                    ) : (
                      <Gauge className="w-6 h-6 text-[#7d5800]" />
                    )}
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[11px] uppercase font-bold text-[#934b00] tracking-wider leading-tight">
                      {hw.name}
                    </span>
                    <span className="font-['Plus Jakarta Sans'] text-[14px] font-bold text-[#181a2e] leading-snug mt-0.5 whitespace-nowrap">
                      {hw.descidaTime}
                    </span>
                    <span className="text-[11px] text-[#514532] flex items-center gap-1.5 leading-tight mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                      <span>{hw.details}</span>
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#edecff] text-[#00677d] text-[11px] font-bold flex-shrink-0 self-start sm:self-center whitespace-nowrap">
                  {hw.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH, TRAVEL RADIUS & VIBE SMART CONTROLS */}
      <section className="w-full px-4 md:px-6 lg:px-8 -mt-6 z-20">
        <div className="max-w-[1280px] mx-auto bg-white rounded-3xl shadow-xl p-5 lg:p-6 border border-[#e0e0fc] flex flex-col gap-4">
          {/* Input Search bar */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#934b00]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar por cidade, praia específica ou arquipélago (ex: Ubatuba, Maresias, Santos, Ilhabela, Paraty)..."
                className="w-full bg-[#f4f2ff] pl-12 pr-4 py-3.5 rounded-2xl text-[14px] text-[#181a2e] placeholder-[#837560] focus:outline-none focus:ring-2 focus:ring-[#fd8603] border border-[#e0e0fc]"
              />
            </div>
            <button
              type="button"
              onClick={() => {}}
              className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-[#fd8603] text-white font-['Plus Jakarta Sans'] text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-[#e07502] shadow-md transition-all active:scale-95"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Buscar Destinos Ensolarados</span>
            </button>
          </div>

          {/* Segmented Travel Distance Radius Departing Santo André */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-bold text-[#514532] uppercase tracking-wider">
              Tempo de Viagem estimado saindo de Santo André
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedRadius('all')}
                className={`px-3.5 py-2 rounded-xl text-[13px] font-semibold transition-all flex items-center gap-1.5 ${
                  selectedRadius === 'all'
                    ? 'bg-[#edecff] text-[#181a2e] font-bold border border-[#e0e0fc] shadow-sm'
                    : 'bg-[#f4f2ff] text-[#514532] hover:bg-[#ffdcc4] hover:text-[#934b00]'
                }`}
              >
                <Grid className="w-4 h-4 text-[#7d5800]" />
                Todos os Raios
              </button>
              <button
                type="button"
                onClick={() => setSelectedRadius('curto')}
                className={`px-3.5 py-2 rounded-xl text-[13px] font-semibold transition-all flex items-center gap-1.5 ${
                  selectedRadius === 'curto'
                    ? 'bg-[#edecff] text-[#181a2e] font-bold border border-[#e0e0fc] shadow-sm'
                    : 'bg-[#f4f2ff] text-[#514532] hover:bg-[#ffdcc4] hover:text-[#934b00]'
                }`}
              >
                <Navigation className="w-4 h-4 text-[#00677d]" />
                Perto de Casa (Até 1h30 • Baixada Santista)
              </button>
              <button
                type="button"
                onClick={() => setSelectedRadius('medio')}
                className={`px-3.5 py-2 rounded-xl text-[13px] font-semibold transition-all flex items-center gap-1.5 ${
                  selectedRadius === 'medio'
                    ? 'bg-[#edecff] text-[#181a2e] font-bold border border-[#e0e0fc] shadow-sm'
                    : 'bg-[#f4f2ff] text-[#514532] hover:bg-[#ffdcc4] hover:text-[#934b00]'
                }`}
              >
                <Car className="w-4 h-4 text-[#7d5800]" />
                Bate-Volta Solar (1h30 a 3h • Litoral Norte/Sul)
              </button>
              <button
                type="button"
                onClick={() => setSelectedRadius('estendido')}
                className={`px-3.5 py-2 rounded-xl text-[13px] font-semibold transition-all flex items-center gap-1.5 ${
                  selectedRadius === 'estendido'
                    ? 'bg-[#edecff] text-[#181a2e] font-bold border border-[#e0e0fc] shadow-sm'
                    : 'bg-[#f4f2ff] text-[#514532] hover:bg-[#ffdcc4] hover:text-[#934b00]'
                }`}
              >
                <Compass className="w-4 h-4 text-[#934b00]" />
                Fim de Semana Estendido (3h a 6h • Ubatuba / Paraty)
              </button>
              <button
                type="button"
                onClick={() => setSelectedRadius('voo')}
                className={`px-3.5 py-2 rounded-xl text-[13px] font-semibold transition-all flex items-center gap-1.5 ${
                  selectedRadius === 'voo'
                    ? 'bg-[#edecff] text-[#181a2e] font-bold border border-[#e0e0fc] shadow-sm'
                    : 'bg-[#f4f2ff] text-[#514532] hover:bg-[#ffdcc4] hover:text-[#934b00]'
                }`}
              >
                <Waves className="w-4 h-4 text-[#00677d]" />
                Voo + Carro (Bahia / Nordeste)
              </button>
            </div>
          </div>

          {/* Vibe Filter Chips */}
          <div className="flex flex-col gap-2 pt-1 border-t border-[#e0e0fc]">
            <span className="text-[11px] font-bold text-[#514532] uppercase tracking-wider">
              Escolha a Vibe Desejada
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {vibesList.map((vibe) => (
                <button
                  key={vibe}
                  type="button"
                  onClick={() => setSelectedVibe(vibe)}
                  className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap transition-colors flex items-center gap-1 ${
                    selectedVibe === vibe
                      ? 'bg-[#934b00] text-white shadow-sm'
                      : 'bg-[#edecff] text-[#181a2e] hover:bg-[#ffdea9]'
                  }`}
                >
                  {vibe === 'Todos'
                    ? '✨ Todos'
                    : vibe === 'Sol Máximo Hoje'
                    ? '☀️ Sol Máximo Hoje'
                    : vibe === 'Praias Estruturadas'
                    ? '🏖️ Praias Estruturadas'
                    : vibe === 'Trilhas & Selvagens'
                    ? '🌿 Trilhas & Selvagens'
                    : vibe === 'Gastronomia Pé na Areia'
                    ? '🦐 Gastronomia Pé na Areia'
                    : vibe === 'Família & Águas Calmas'
                    ? '👨‍👩‍👧‍👦 Família & Águas Calmas'
                    : '🍹 Vida Noturna & Beach Club'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATION RESULTS DASHBOARD */}
      <main className="w-full px-4 md:px-6 lg:px-8 py-12">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="font-['Plus Jakarta Sans'] text-2xl lg:text-3xl text-[#181a2e] font-bold">
                Destinos Solares em Destaque
              </h2>
              <p className="text-[14px] text-[#514532]">
                Ordenado por menor índice de nebulosidade e melhor tempo de viagem via Santo André.
              </p>
            </div>
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="text-[13px] text-[#514532]">
                {filteredDestinations.length} destinos encontrados
              </span>
              <div className="flex items-center bg-[#edecff] rounded-xl p-1 border border-[#e0e0fc]">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white shadow-sm text-[#934b00]'
                      : 'text-[#514532] hover:text-[#181a2e]'
                  }`}
                  title="Visualização em Grade"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white shadow-sm text-[#934b00]'
                      : 'text-[#514532] hover:text-[#181a2e]'
                  }`}
                  title="Visualização em Lista"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Cards Grid or List */}
          {filteredDestinations.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl text-center border border-[#e0e0fc] shadow-sm">
              <CloudSun className="w-12 h-12 text-[#fd8603] mx-auto" />
              <h3 className="text-xl font-bold text-[#181a2e] mt-2">Nenhum destino encontrado</h3>
              <p className="text-sm text-[#514532] mt-1">
                Tente ajustar os filtros de tempo de viagem ou termo de busca.
              </p>
              <button
                onClick={() => {
                  setSelectedRadius('all');
                  setSelectedVibe('Todos');
                  onSearchChange('');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#ffb703] text-[#6b4b00] font-bold text-sm"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div
              className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {filteredDestinations.map((dest) => {
                const isSaved = savedDestinations.includes(dest.id);
                return (
                  <article
                    key={dest.id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#e0e0fc] min-h-fit"
                  >
                    <div className="flex flex-col flex-1">
                      {/* Image Banner with Structured Overlay Container */}
                      <div className="relative w-full min-h-[240px] overflow-hidden bg-slate-100 flex flex-col justify-between p-4">
                        <Image
                          src={dest.coverImage}
                          alt={dest.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#181a2e] via-[#181a2e]/60 to-black/35 pointer-events-none"></div>

                        {/* Top Row: Flex Wrap to prevent any overlapping */}
                        <div className="relative z-10 flex flex-wrap items-start justify-between gap-1.5 w-full">
                          <div className="flex flex-wrap items-center gap-1.5 flex-shrink-0">
                            <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] text-[#934b00] font-bold shadow-sm inline-flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
                              ☀️ {dest.tempC}°C
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#66d2f1]/95 text-[#00596c] text-[10px] font-bold flex-shrink-0 whitespace-nowrap">
                              UV {dest.uvIndex}
                            </span>
                          </div>

                          <span className="px-2.5 py-1 rounded-full bg-white/95 text-[#00677d] text-[11px] font-bold shadow-sm inline-flex items-center gap-1 flex-shrink-0 ml-auto whitespace-nowrap">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#00677d] flex-shrink-0" />
                            <span>{dest.cetesbScore}</span>
                          </span>
                        </div>

                        {/* Bottom Row: Departure Time and Distance */}
                        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 text-white mt-auto pt-4">
                          <div className="inline-flex items-center gap-1.5 bg-[#934b00]/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow border border-white/20 flex-shrink-0 max-w-full">
                            <Clock className="w-4 h-4 text-white flex-shrink-0" />
                            <span className="font-['Plus Jakarta Sans'] text-[12px] font-bold whitespace-nowrap">
                              {dest.carTimeFromABC} de Sto André
                            </span>
                          </div>
                          <span className="text-[11px] bg-[#181a2e]/85 backdrop-blur-md px-2.5 py-1 rounded-lg font-medium border border-white/10 flex-shrink-0 whitespace-nowrap">
                            {dest.carDistanceKm > 1000
                              ? 'CGH 35m Sto André'
                              : `${dest.carDistanceKm} km`}
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3 min-h-fit">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <h3 className="font-['Plus Jakarta Sans'] text-[19px] sm:text-[20px] text-[#181a2e] font-bold group-hover:text-[#934b00] transition-colors break-words leading-snug">
                              {dest.name}
                            </h3>
                            <span className="text-[12px] text-[#514532] font-medium block mt-1 break-words leading-relaxed">
                              {dest.regionBadge} • {dest.specialBadge}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleSaveWithToast(dest.id, dest.name)}
                            className={`p-2 rounded-full transition-colors flex-shrink-0 ${
                              isSaved
                                ? 'text-[#fd8603] bg-[#ffdcc4]'
                                : 'text-[#837560] hover:text-[#934b00] hover:bg-[#f4f2ff]'
                            }`}
                            title={isSaved ? 'Roteiro salvo offline' : 'Salvar roteiro offline'}
                          >
                            <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                          </button>
                        </div>

                        {/* Route & Toll summary */}
                        <div className="bg-[#f4f2ff] p-3 rounded-2xl flex flex-col gap-2 text-[12px] text-[#514532] border border-[#e0e0fc]">
                          <div className="flex flex-wrap items-center justify-between gap-1">
                            <span className="flex items-center gap-1.5 font-semibold text-[#181a2e] flex-shrink-0">
                              <Coins className="w-4 h-4 text-[#934b00]" />
                              Pedágios (Ida):
                            </span>
                            <span className="font-bold text-[#181a2e] break-words">
                              {dest.tollsCostOneWay}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] pt-1.5 border-t border-[#e0e0fc]">
                            <span className="flex items-center gap-1 text-[#00677d] font-medium flex-shrink-0">
                              <Bus className="w-4 h-4 text-[#00677d]" />
                              Ônibus direto TERRESA:
                            </span>
                            <span className="font-bold text-[#181a2e] break-words">
                              {dest.busTicketPrice}
                            </span>
                          </div>
                        </div>

                        {/* Vibe Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {dest.beaches.slice(0, 2).map((b) => (
                            <span
                              key={b.id}
                              className="px-2.5 py-1 rounded-lg bg-[#edecff] text-[#181a2e] text-[11px] font-medium break-words max-w-full"
                            >
                              🏖️ {b.name}
                            </span>
                          ))}
                          {dest.vibes.slice(0, 2).map((v) => (
                            <span
                              key={v}
                              className="px-2.5 py-1 rounded-lg bg-[#f4f2ff] text-[#514532] text-[11px] break-words max-w-full"
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="p-4 sm:p-5 pt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 mt-auto">
                      <button
                        type="button"
                        onClick={() => onSelectDestination(dest.id)}
                        className="flex-1 min-w-[140px] py-2.5 px-3 rounded-xl bg-[#fd8603] text-white font-['Plus Jakarta Sans'] text-[13px] font-bold hover:bg-[#e07502] transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-98 break-words text-center leading-tight"
                      >
                        <Compass className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">Ver Guia & Praias</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSaveWithToast(dest.id, dest.name)}
                        className={`p-2.5 rounded-xl transition-colors flex items-center justify-center flex-shrink-0 ${
                          isSaved
                            ? 'bg-[#ffdcc4] text-[#934b00]'
                            : 'bg-[#edecff] hover:bg-[#e0e0fc] text-[#181a2e]'
                        }`}
                        title="Salvar rota offline"
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* MONITORAMENTO DE SERRA & RECURSOS ÚTEIS (BENTO SECTION) */}
      <section className="w-full bg-[#f4f2ff] py-12 px-4 md:px-6 lg:px-8 border-t border-[#e0e0fc]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-[#934b00] text-[11px] uppercase font-bold tracking-wider">
                Segurança & Praticidade para quem desce a serra
              </span>
              <h2 className="font-['Plus Jakarta Sans'] text-2xl lg:text-3xl text-[#181a2e] font-bold">
                Monitoramento de Serra & Recursos Úteis
              </h2>
            </div>
            {/* Offline Sync Indicator */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-[#e0e0fc]">
              <CheckCircle2 className="w-5 h-5 text-[#00677d] flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-[12px] font-bold text-[#181a2e]">Modo Offline Ativado</span>
                <span className="text-[11px] text-[#514532]">
                  {savedDestinations.length} roteiros salvos no dispositivo
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Camera Live Preview */}
            <div className="bg-white p-5 rounded-3xl shadow-sm flex flex-col justify-between gap-3 border border-[#e0e0fc] min-h-fit">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-['Plus Jakarta Sans'] text-[15px] font-bold text-[#181a2e] flex items-center gap-1.5 break-words">
                  <Video className="w-5 h-5 text-[#934b00] flex-shrink-0" />
                  <span>Câmera Rod. Imigrantes km 43</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#fd8603] text-white text-[10px] font-bold flex items-center gap-1 flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  AO VIVO
                </span>
              </div>

              {/* Video preview simulation */}
              <div className="relative w-full min-h-[160px] h-40 rounded-2xl overflow-hidden bg-slate-900">
                <div
                  className="w-full h-full bg-cover bg-center opacity-90"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBY9ZbNr7HJDubPbj5VZOLW8rbT-67McGu6LXKRU06o83k3rzuDzLYSMCpbbsD-0mvwVvY8IudoMoP0Ojxbf5xDt1xutpz6NiK1BmE2uqJOS0GlWhjD2ubPbLnmgDBwG3B5k-CCTPuiFxfDxqNsi86xr9IRQPzDHYPlniWA2vLKEBTeZ6puC8vTpn-ojuqyyCgfpWOxolQnuCIOeAFgvytyxBStx3jUY_a2GbI_klJff6koxenQJJSu')",
                  }}
                ></div>
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-lg bg-[#181a2e]/85 backdrop-blur-md text-white text-[11px] break-words">
                  Sentido Litoral • Km 43 (Planalto/Serra)
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#514532]">
                <span>
                  Operação Atual: <strong className="text-[#181a2e]">Normal (7x3)</strong>
                </span>
                <span>
                  Neblina: <strong className="text-[#00677d]">Ausente</strong>
                </span>
              </div>
            </div>

            {/* CETESB Water Quality Snapshot */}
            <div className="bg-white p-5 rounded-3xl shadow-sm flex flex-col justify-between gap-3 border border-[#e0e0fc] min-h-fit">
              <div className="flex items-center justify-between">
                <span className="font-['Plus Jakarta Sans'] text-[15px] font-bold text-[#181a2e] flex items-center gap-1.5">
                  <Droplets className="w-5 h-5 text-[#00677d] flex-shrink-0" />
                  <span>Balneabilidade CETESB</span>
                </span>
                <span className="text-[11px] text-[#00677d] font-bold flex-shrink-0">Semanal</span>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 py-2">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-[#edecff]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                    />
                    <path
                      className="text-[#00677d]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="92, 100"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-['Plus Jakarta Sans'] text-[16px] font-bold text-[#181a2e]">
                      92%
                    </span>
                    <span className="text-[8px] uppercase tracking-wider text-[#514532] font-bold">
                      Próprias
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-[12px] text-[#514532] min-w-0 flex-1">
                  <p className="leading-snug break-words">
                    Excelente qualidade da água nas praias do <strong>Litoral Norte</strong> e{' '}
                    <strong>Guarujá</strong>.
                  </p>
                  <span className="text-[11px] text-[#00677d] font-bold flex items-center gap-1 mt-1 break-words">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00677d] flex-shrink-0" />
                    <span>164 praias liberadas</span>
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#e0e0fc] flex flex-wrap items-center justify-between gap-1 text-[12px]">
                <span className="text-[#514532]">Boletim de quinta-feira</span>
                <span className="text-[#934b00] font-bold">Semana ensolarada</span>
              </div>
            </div>

            {/* Santo André Transit Connections */}
            <div className="bg-white p-5 rounded-3xl shadow-sm flex flex-col justify-between gap-3 border border-[#e0e0fc] min-h-fit">
              <div className="flex items-center justify-between">
                <span className="font-['Plus Jakarta Sans'] text-[15px] font-bold text-[#181a2e] flex items-center gap-1.5">
                  <Bus className="w-5 h-5 text-[#7d5800] flex-shrink-0" />
                  <span>Hub Rodoviário TERRESA</span>
                </span>
                <span className="px-2 py-0.5 rounded-lg bg-[#edecff] text-[10px] text-[#514532] font-bold flex-shrink-0">
                  Pref. Saladino
                </span>
              </div>
              <p className="text-[12px] text-[#514532] break-words">
                Próximas partidas para o litoral saindo direto da Rodoviária de Santo André:
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-1 p-2 rounded-xl bg-[#f4f2ff] text-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#fd8603] flex-shrink-0"></span>
                    <span className="font-bold text-[#181a2e] break-words">Santos (Via Imigrantes)</span>
                  </div>
                  <span className="font-mono text-[12px] font-bold text-[#934b00] flex-shrink-0">
                    08:30 • R$ 34,90
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-1 p-2 rounded-xl bg-[#f4f2ff] text-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00677d] flex-shrink-0"></span>
                    <span className="font-bold text-[#181a2e] break-words">São Sebastião / Ilhabela</span>
                  </div>
                  <span className="font-mono text-[12px] font-bold text-[#00677d] flex-shrink-0">
                    09:15 • R$ 78,50
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-1 p-2 rounded-xl bg-[#f4f2ff] text-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7d5800] flex-shrink-0"></span>
                    <span className="font-bold text-[#181a2e] break-words">Ubatuba Direto</span>
                  </div>
                  <span className="font-mono text-[12px] font-bold text-[#7d5800] flex-shrink-0">
                    10:00 • R$ 89,00
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t border-[#e0e0fc] flex flex-wrap items-center justify-between gap-2 text-[12px]">
                <span className="text-[#514532]">Integração CPTM Linha 10</span>
                <button
                  onClick={onNavigateToCalculator}
                  className="text-[#934b00] font-bold hover:underline"
                >
                  Ver Calculadora de Rotas →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
