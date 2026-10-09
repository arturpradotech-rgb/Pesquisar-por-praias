'use client';

import React, { useState } from 'react';
import {
  Map,
  Globe,
  Satellite,
  MapPin,
  Plus,
  Minus,
  Navigation,
  Calculator,
  Umbrella,
  ChevronDown,
  Coins,
  Fuel,
  Leaf,
  Bus,
  Sun,
  Bookmark,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';
import { DESTINATIONS_DATA, Destination } from '@/data/destinations';
import { SANTO_ANDRE_NEIGHBORHOODS, TERRESA_DEPARTURES } from '@/data/abcLogistics';

interface BeachMapViewProps {
  onSelectDestination: (id: string) => void;
  selectedNeighborhoodId: string;
  onSelectNeighborhood: (id: string) => void;
}

export default function BeachMapView({
  onSelectDestination,
  selectedNeighborhoodId,
  onSelectNeighborhood,
}: BeachMapViewProps) {
  const [mapViewMode, setMapViewMode] = useState<'sp' | 'br' | 'sat'>('sp');
  const [activeLayer, setActiveLayer] = useState<string>('all');
  const [selectedPinKey, setSelectedPinKey] = useState<string>('santos');
  const [isDownloadingOffline, setIsDownloadingOffline] = useState(false);
  const [isOfflineSaved, setIsOfflineSaved] = useState(false);

  const selectedDestData =
    DESTINATIONS_DATA.find((d) => d.id === selectedPinKey) || DESTINATIONS_DATA[0];

  const currentNeighborhood =
    SANTO_ANDRE_NEIGHBORHOODS.find((n) => n.id === selectedNeighborhoodId) ||
    SANTO_ANDRE_NEIGHBORHOODS[0];

  const handleDownloadOffline = () => {
    setIsDownloadingOffline(true);
    setTimeout(() => {
      setIsDownloadingOffline(false);
      setIsOfflineSaved(true);
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Interactive Control Strip */}
      <section className="w-full bg-white shadow-sm border-b border-[#e0e0fc] sticky top-20 z-30">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-3.5 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Viewport Switcher */}
          <div className="flex items-center p-1 bg-[#edecff] rounded-2xl overflow-x-auto border border-[#e0e0fc]">
            <button
              type="button"
              onClick={() => setMapViewMode('sp')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[12px] font-semibold transition-all ${
                mapViewMode === 'sp'
                  ? 'bg-[#ffb703] text-[#6b4b00] shadow-sm font-bold'
                  : 'text-[#514532] hover:text-[#181a2e]'
              }`}
            >
              <Map className="w-4 h-4 text-[#7d5800]" />
              <span>Litoral Paulista (Norte & Sul)</span>
            </button>
            <button
              type="button"
              onClick={() => setMapViewMode('br')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[12px] font-semibold transition-all ${
                mapViewMode === 'br'
                  ? 'bg-[#ffb703] text-[#6b4b00] shadow-sm font-bold'
                  : 'text-[#514532] hover:text-[#181a2e]'
              }`}
            >
              <Globe className="w-4 h-4 text-[#7d5800]" />
              <span>Brasil Completo</span>
            </button>
            <button
              type="button"
              onClick={() => setMapViewMode('sat')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[12px] font-semibold transition-all ${
                mapViewMode === 'sat'
                  ? 'bg-[#ffb703] text-[#6b4b00] shadow-sm font-bold'
                  : 'text-[#514532] hover:text-[#181a2e]'
              }`}
            >
              <Satellite className="w-4 h-4 text-[#7d5800]" />
              <span>Satélite & Radiação Solar</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 no-scrollbar">
            <button
              type="button"
              onClick={() => setActiveLayer(activeLayer === 'clean' ? 'all' : 'clean')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all border ${
                activeLayer === 'clean'
                  ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm'
                  : 'bg-white text-[#181a2e] border-[#e0e0fc] hover:bg-[#edecff]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Mar Calmo / Própria</span>
              <span className="text-[10px] bg-black/10 px-1 rounded-full font-bold">14</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveLayer(activeLayer === 'gastro' ? 'all' : 'gastro')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all border ${
                activeLayer === 'gastro'
                  ? 'bg-[#fd8603] text-white border-[#e07502] shadow-sm'
                  : 'bg-white text-[#181a2e] border-[#e0e0fc] hover:bg-[#edecff]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#fd8603]"></span>
              <span>Gastronomia Caiçara</span>
              <span className="text-[10px] bg-black/10 px-1 rounded-full font-bold">28</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveLayer(activeLayer === 'stay' ? 'all' : 'stay')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all border ${
                activeLayer === 'stay'
                  ? 'bg-[#00677d] text-white border-[#005263] shadow-sm'
                  : 'bg-white text-[#181a2e] border-[#e0e0fc] hover:bg-[#edecff]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#00677d]"></span>
              <span>Pousadas & Hotéis</span>
              <span className="text-[10px] bg-black/10 px-1 rounded-full font-bold">19</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveLayer(activeLayer === 'sun' ? 'all' : 'sun')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all border ${
                activeLayer === 'sun'
                  ? 'bg-[#ffb703] text-[#6b4b00] border-[#e0a202] shadow-sm'
                  : 'bg-[#ffdea9] text-[#7d5800] border-[#ffdcc4]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#fd8603] animate-pulse"></span>
              <span>100% Sol Garantido</span>
              <span className="text-[10px] bg-white/70 px-1 rounded-full">Hoje</span>
            </button>
          </div>

          {/* Departure Pin Badge */}
          <div className="flex items-center gap-2 bg-[#f4f2ff] px-3.5 py-1.5 rounded-2xl border border-[#e0e0fc] flex-shrink-0">
            <MapPin className="w-4 h-4 text-[#934b00]" />
            <div className="flex flex-col">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#514532]">
                Origem Fixa
              </span>
              <span className="text-[12px] text-[#181a2e] font-bold leading-none">
                {currentNeighborhood.fullName.split('/')[0]}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Map & Calculation Workspace Grid */}
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-6 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Coastal Map Canvas Container (8 Cols on XL) */}
        <div className="xl:col-span-8 flex flex-col gap-4">
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-[#012338] border border-[#024263]">
            {/* SVG Coastal Vector Map */}
            <svg
              className="w-full h-full object-cover select-none cursor-grab active:cursor-grabbing"
              viewBox="0 0 1000 700"
            >
              <defs>
                {/* Water Gradient */}
                <radialGradient id="oceanShallow" cx="35%" cy="65%" r="65%">
                  <stop offset="0%" stopColor="#023c5b" />
                  <stop offset="45%" stopColor="#023047" />
                  <stop offset="100%" stopColor="#011b2b" />
                </radialGradient>
                <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f5efe6" />
                  <stop offset="50%" stopColor="#eae3d7" />
                  <stop offset="100%" stopColor="#d8ccbb" />
                </linearGradient>
                {/* Serra Pattern */}
                <pattern id="serraPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 0 10 L 10 0 L 20 10 Z" fill="#bfae98" opacity="0.25" />
                </pattern>
              </defs>

              {/* Ocean */}
              <rect width="1000" height="700" fill="url(#oceanShallow)" />

              {/* Bathymetry Contours */}
              <path
                d="M 0 700 C 300 680, 500 520, 750 480 C 850 460, 950 350, 1000 320 L 1000 700 Z"
                fill="#01283d"
                opacity="0.6"
              />
              <path
                d="M 120 700 C 400 620, 620 480, 850 410 C 920 380, 970 290, 1000 240 L 1000 700 Z"
                fill="#024263"
                opacity="0.4"
              />

              {/* Landmass Coastline (São Paulo & Rio Coast) */}
              <path
                d="M 0 0 L 1000 0 L 1000 210
                   C 950 220, 910 240, 880 230
                   C 860 215, 840 225, 820 250
                   C 790 280, 770 285, 750 310
                   C 730 330, 700 335, 680 370
                   C 660 400, 620 415, 590 420
                   C 560 425, 530 450, 500 460
                   C 470 470, 440 465, 410 490
                   C 370 525, 340 520, 310 545
                   C 260 585, 200 620, 150 635
                   C 90 655, 30 685, 0 700 Z"
                fill="url(#landGradient)"
              />

              {/* Serra do Mar Relief */}
              <path
                d="M 100 0 L 1000 0 L 1000 150
                   C 860 180, 750 240, 680 300
                   C 590 350, 510 390, 440 430
                   C 360 470, 240 540, 120 590
                   C 60 620, 0 650, 0 0 Z"
                fill="url(#serraPattern)"
              />

              {/* Ilhabela Island */}
              <path
                d="M 720 365 C 735 350, 755 360, 755 385 C 750 405, 730 415, 715 400 C 705 385, 710 375, 720 365 Z"
                fill="url(#landGradient)"
                filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"
              />

              {/* Santo Amaro Island (Guarujá) */}
              <path
                d="M 525 455 C 545 448, 560 460, 555 480 C 545 490, 530 488, 520 475 Z"
                fill="url(#landGradient)"
              />

              {/* Grid Lines */}
              <g stroke="#ffffff" strokeWidth="1" strokeDasharray="2,4" strokeOpacity="0.12">
                <line x1="200" y1="0" x2="200" y2="700" />
                <line x1="400" y1="0" x2="400" y2="700" />
                <line x1="600" y1="0" x2="600" y2="700" />
                <line x1="800" y1="0" x2="800" y2="700" />
                <line x1="0" y1="200" x2="1000" y2="200" />
                <line x1="0" y1="400" x2="1000" y2="400" />
                <line x1="0" y1="600" x2="1000" y2="600" />
              </g>

              {/* Map Labels */}
              <text
                x="750"
                y="600"
                fill="#219ebc"
                fontSize="16"
                fontWeight="700"
                letterSpacing="4"
                opacity="0.4"
                className="select-none font-bold"
              >
                OCEANO ATLÂNTICO
              </text>
              <text
                x="250"
                y="320"
                fill="#837560"
                fontSize="14"
                fontWeight="600"
                letterSpacing="3"
                opacity="0.3"
                className="select-none"
              >
                SERRA DO MAR
              </text>

              {/* Active Highway Departure Lines from Santo André (x: 410, y: 350) */}
              {/* Route to Santos */}
              <path
                d="M 410 350 Q 440 400, 470 470"
                fill="none"
                stroke="#fd8603"
                strokeWidth="3.5"
                strokeDasharray="6,4"
                strokeLinecap="round"
                className="animate-pulse"
              />
              {/* Route to Guarujá */}
              <path
                d="M 470 470 Q 500 475, 535 470"
                fill="none"
                stroke="#fd8603"
                strokeWidth="2.5"
                strokeDasharray="4,4"
                opacity="0.8"
              />
              {/* Route to Maresias */}
              <path
                d="M 410 350 Q 520 340, 645 385"
                fill="none"
                stroke="#ffb703"
                strokeWidth="2.5"
                strokeDasharray="4,4"
                opacity="0.8"
              />
              {/* Route to Ilhabela */}
              <path
                d="M 645 385 L 735 390"
                fill="none"
                stroke="#219ebc"
                strokeWidth="2"
                strokeDasharray="2,3"
              />
              {/* Route to Ubatuba */}
              <path
                d="M 410 350 Q 600 280, 805 260"
                fill="none"
                stroke="#fd8603"
                strokeWidth="2.5"
                strokeDasharray="4,4"
                opacity="0.7"
              />
              {/* Route to Paraty */}
              <path
                d="M 805 260 Q 860 240, 895 220"
                fill="none"
                stroke="#fd8603"
                strokeWidth="2"
                strokeDasharray="4,4"
                opacity="0.5"
              />

              {/* ORIGIN ANCHOR: Santo André */}
              <g transform="translate(410, 350)" className="cursor-pointer">
                <circle r="18" fill="#fd8603" opacity="0.25" className="animate-ping" />
                <circle r="10" fill="#934b00" />
                <circle r="5" fill="#ffffff" />
                <rect x="-85" y="-38" width="170" height="26" rx="13" fill="#181a2e" opacity="0.95" />
                <text
                  x="0"
                  y="-21"
                  fill="#ffb703"
                  fontSize="11"
                  fontWeight="700"
                  textAnchor="middle"
                  fontFamily="Plus Jakarta Sans"
                >
                  📍 SANTO ANDRÉ (PARTIDA)
                </text>
              </g>

              {/* DESTINATION PINS */}
              {/* 1. Santos */}
              <g
                transform="translate(470, 470)"
                className="cursor-pointer group"
                onClick={() => setSelectedPinKey('santos')}
              >
                <circle r="14" fill="#22c55e" opacity="0.3" className="animate-pulse" />
                <circle r="8" fill="#15803d" />
                <circle r="3.5" fill="#ffffff" />
                <g transform="translate(10, -18)">
                  <rect
                    width="142"
                    height="26"
                    rx="6"
                    fill="#ffffff"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))"
                  />
                  <text
                    x="8"
                    y="17"
                    fill="#181a2e"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Plus Jakarta Sans"
                  >
                    Santos • 55m | 31°C ☀️
                  </text>
                </g>
              </g>

              {/* 2. Guarujá */}
              <g
                transform="translate(535, 470)"
                className="cursor-pointer group"
                onClick={() => setSelectedPinKey('guaruja')}
              >
                <circle r="12" fill="#fd8603" opacity="0.3" />
                <circle r="7" fill="#ea580c" />
                <circle r="3" fill="#ffffff" />
                <g transform="translate(-100, 16)">
                  <rect
                    width="145"
                    height="24"
                    rx="6"
                    fill="#ffffff"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))"
                  />
                  <text
                    x="8"
                    y="16"
                    fill="#181a2e"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Plus Jakarta Sans"
                  >
                    Guarujá • 1h 10m 🏖️
                  </text>
                </g>
              </g>

              {/* 3. Maresias */}
              <g
                transform="translate(645, 385)"
                className="cursor-pointer group"
                onClick={() => setSelectedPinKey('maresias')}
              >
                <circle r="12" fill="#00677d" opacity="0.3" />
                <circle r="7" fill="#0284c7" />
                <circle r="3" fill="#ffffff" />
                <g transform="translate(12, -18)">
                  <rect
                    width="155"
                    height="26"
                    rx="6"
                    fill="#ffffff"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))"
                  />
                  <text
                    x="8"
                    y="17"
                    fill="#181a2e"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Plus Jakarta Sans"
                  >
                    Maresias • 2h 40m 🌊
                  </text>
                </g>
              </g>

              {/* 4. Ilhabela */}
              <g
                transform="translate(735, 390)"
                className="cursor-pointer group"
                onClick={() => setSelectedPinKey('ilhabela')}
              >
                <circle r="14" fill="#ffb703" opacity="0.4" className="animate-pulse" />
                <circle r="8" fill="#eab308" />
                <circle r="3.5" fill="#181a2e" />
                <g transform="translate(12, 10)">
                  <rect
                    width="165"
                    height="26"
                    rx="6"
                    fill="#181a2e"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.35))"
                  />
                  <text
                    x="8"
                    y="17"
                    fill="#ffb703"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Plus Jakarta Sans"
                  >
                    Ilhabela • Balsa 15m ⛵
                  </text>
                </g>
              </g>

              {/* 5. Ubatuba */}
              <g
                transform="translate(805, 260)"
                className="cursor-pointer group"
                onClick={() => setSelectedPinKey('ubatuba')}
              >
                <circle r="14" fill="#ffb703" opacity="0.4" className="animate-pulse" />
                <circle r="8" fill="#eab308" />
                <circle r="3.5" fill="#181a2e" />
                <g transform="translate(-165, -18)">
                  <rect
                    width="158"
                    height="26"
                    rx="6"
                    fill="#ffffff"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))"
                  />
                  <text
                    x="8"
                    y="17"
                    fill="#181a2e"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Plus Jakarta Sans"
                  >
                    Ubatuba • 3h 10m | 29°C ☀️
                  </text>
                </g>
              </g>

              {/* 6. Paraty */}
              <g
                transform="translate(895, 220)"
                className="cursor-pointer group"
                onClick={() => setSelectedPinKey('paraty')}
              >
                <circle r="12" fill="#00677d" opacity="0.3" />
                <circle r="7" fill="#0369a1" />
                <circle r="3" fill="#ffffff" />
                <g transform="translate(-165, 12)">
                  <rect
                    width="155"
                    height="26"
                    rx="6"
                    fill="#ffffff"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))"
                  />
                  <text
                    x="8"
                    y="17"
                    fill="#181a2e"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Plus Jakarta Sans"
                  >
                    Paraty • 4h 30m Histórico
                  </text>
                </g>
              </g>
            </svg>

            {/* Floating Interactive Map Overlay Card (Active Tooltip) */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-3xl shadow-2xl border border-white/60 transition-all duration-300 min-h-fit max-h-[85%] overflow-y-auto">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex-shrink-0">
                    {selectedDestData.cetesbScore}
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ffdcc4] text-[#934b00] flex-shrink-0">
                    ☀️ {selectedDestData.weatherSummary.split('.')[0] || '100% Sol'}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-2 mt-1">
                <div className="min-w-0 flex-1">
                  <h3 className="font-['Plus Jakarta Sans'] text-[17px] sm:text-[18px] font-bold text-[#181a2e] break-words leading-snug">
                    {selectedDestData.name} • {selectedDestData.beaches[0]?.name || 'Centro & Praias'}
                  </h3>
                  <p className="text-[12px] text-[#514532] break-words leading-relaxed mt-0.5">
                    {selectedDestData.regionBadge} • {selectedDestData.bestRouteDescription}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-['Plus Jakarta Sans'] text-2xl font-extrabold text-[#7d5800] leading-none">
                    {selectedDestData.tempC}°C
                  </span>
                  <span className="block text-[10px] text-[#514532] font-medium break-words">
                    Sensação {selectedDestData.sensacaoC}°C
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 py-2 bg-[#f4f2ff] rounded-2xl px-3 text-center border border-[#e0e0fc]">
                <div className="p-0.5">
                  <span className="text-[9px] uppercase font-bold text-[#837560] block">
                    Sto André Carro
                  </span>
                  <span className="text-[13px] font-bold text-[#934b00] break-words">
                    {selectedDestData.carTimeFromABC}
                  </span>
                </div>
                <div className="p-0.5">
                  <span className="text-[9px] uppercase font-bold text-[#837560] block">
                    TERRESA Ônibus
                  </span>
                  <span className="text-[13px] font-bold text-[#181a2e] break-words">
                    {selectedDestData.busTime}
                  </span>
                </div>
                <div className="p-0.5">
                  <span className="text-[9px] uppercase font-bold text-[#837560] block">
                    Mar • Ondas
                  </span>
                  <span className="text-[13px] font-bold text-[#00677d] break-words">
                    {selectedDestData.waterTempC}°C (Água)
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-1">
                <span className="text-[11px] text-[#514532] flex items-center gap-1 break-words">
                  <Coins className="w-4 h-4 text-[#934b00] flex-shrink-0" />
                  <span>Pedágios: <strong>{selectedDestData.tollsCostOneWay}</strong></span>
                </span>
                <button
                  type="button"
                  onClick={() => onSelectDestination(selectedDestData.id)}
                  className="bg-[#fd8603] text-white px-4 py-2 rounded-xl text-[12px] font-bold hover:bg-[#e07502] transition-all shadow-sm active:scale-95 flex-shrink-0"
                >
                  Ver Guia Completo →
                </button>
              </div>
            </div>

            {/* Floating Zoom & Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <button
                type="button"
                className="w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md text-[#181a2e] flex items-center justify-center shadow-md hover:bg-white transition-all"
                title="Aproximar"
              >
                <Plus className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md text-[#181a2e] flex items-center justify-center shadow-md hover:bg-white transition-all"
                title="Afastar"
              >
                <Minus className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedPinKey('santos')}
                className="w-10 h-10 rounded-2xl bg-[#ffb703] text-[#6b4b00] flex items-center justify-center shadow-md hover:scale-105 transition-all"
                title="Centralizar Ponto de Saída no ABC"
              >
                <Navigation className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Destination Strip Cards Below Map */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              onClick={() => onSelectDestination('ubatuba')}
              className="cursor-pointer bg-white p-4 sm:p-5 rounded-3xl shadow-sm hover:shadow-md transition-all border border-[#e0e0fc] group flex flex-col justify-between min-h-fit"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#934b00] font-bold">
                    Litoral Norte Profundo
                  </span>
                  <span className="bg-[#ffdcc4] text-[#934b00] px-2 py-0.5 rounded-full text-[10px] font-bold flex-shrink-0">
                    29°C ☀️
                  </span>
                </div>
                <h4 className="font-['Plus Jakarta Sans'] text-[16px] font-bold text-[#181a2e] group-hover:text-[#934b00] transition-colors break-words leading-snug">
                  Ubatuba
                </h4>
                <p className="text-[12px] text-[#514532] mt-0.5 break-words leading-relaxed">
                  102 praias selvagens e cachoeiras preservadas.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#e0e0fc] flex flex-wrap items-center justify-between gap-1 text-[11px] text-[#514532]">
                <span className="break-words">🚗 3h 10m via Tamoios</span>
                <span className="text-[#00677d] font-bold flex-shrink-0">Ver Praias →</span>
              </div>
            </div>

            <div
              onClick={() => onSelectDestination('ilhabela')}
              className="cursor-pointer bg-white p-4 sm:p-5 rounded-3xl shadow-sm hover:shadow-md transition-all border border-[#e0e0fc] group flex flex-col justify-between min-h-fit"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#934b00] font-bold">
                    Ilha Oceânica
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[10px] font-bold flex-shrink-0">
                    Balsa 15 min
                  </span>
                </div>
                <h4 className="font-['Plus Jakarta Sans'] text-[16px] font-bold text-[#181a2e] group-hover:text-[#934b00] transition-colors break-words leading-snug">
                  Ilhabela
                </h4>
                <p className="text-[12px] text-[#514532] mt-0.5 break-words leading-relaxed">
                  Vela, praias oceânicas e centro histórico da Vila.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#e0e0fc] flex flex-wrap items-center justify-between gap-1 text-[11px] text-[#514532]">
                <span className="break-words">🚗 3h 25m + Travessia</span>
                <span className="text-[#00677d] font-bold flex-shrink-0">Ver Praias →</span>
              </div>
            </div>

            <div
              onClick={() => onSelectDestination('guaruja')}
              className="cursor-pointer bg-white p-4 sm:p-5 rounded-3xl shadow-sm hover:shadow-md transition-all border border-[#e0e0fc] group flex flex-col justify-between min-h-fit"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#934b00] font-bold">
                    Bate e Volta Rápido
                  </span>
                  <span className="bg-[#ffdcc4] text-[#934b00] font-bold px-2 py-0.5 rounded-full text-[10px] flex-shrink-0">
                    Mais Perto
                  </span>
                </div>
                <h4 className="font-['Plus Jakarta Sans'] text-[16px] font-bold text-[#181a2e] group-hover:text-[#934b00] transition-colors break-words leading-snug">
                  Guarujá
                </h4>
                <p className="text-[12px] text-[#514532] mt-0.5 break-words leading-relaxed">
                  Enseada, Pitangueiras e surf no Tombo com selo Bandeira Azul.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#e0e0fc] flex flex-wrap items-center justify-between gap-1 text-[11px] text-[#514532]">
                <span className="break-words">🚗 1h 10m via Piaçaguera</span>
                <span className="text-[#00677d] font-bold flex-shrink-0">Ver Praias →</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Drawer / Smart Route Calculator (4 Cols on XL) */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-sm border border-[#e0e0fc] flex flex-col gap-4 min-h-fit">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#934b00]" />
                <h3 className="font-['Plus Jakarta Sans'] text-lg font-bold text-[#181a2e]">
                  Calculadora de Rota
                </h3>
              </div>
              <span className="text-[10px] text-[#7d5800] uppercase font-bold tracking-wider bg-[#edecff] px-2 py-0.5 rounded-full flex-shrink-0">
                Tempo Real
              </span>
            </div>

            {/* Origin Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-[#514532]">
                Ponto de Saída em Santo André:
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#934b00]" />
                <select
                  value={selectedNeighborhoodId}
                  onChange={(e) => onSelectNeighborhood(e.target.value)}
                  className="w-full bg-[#f4f2ff] pl-10 pr-8 py-2.5 rounded-xl text-[13px] font-medium text-[#181a2e] appearance-none focus:outline-none focus:bg-[#edecff] border border-[#e0e0fc]"
                >
                  {SANTO_ANDRE_NEIGHBORHOODS.map((nh) => (
                    <option key={nh.id} value={nh.id}>
                      {nh.fullName}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#837560] pointer-events-none" />
              </div>
            </div>

            {/* Target Destination Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-[#514532]">
                Destino Litoral Selecionado:
              </label>
              <div className="relative">
                <Umbrella className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#00677d]" />
                <select
                  value={selectedPinKey}
                  onChange={(e) => setSelectedPinKey(e.target.value)}
                  className="w-full bg-[#f4f2ff] pl-10 pr-8 py-2.5 rounded-xl text-[13px] font-medium text-[#181a2e] appearance-none focus:outline-none focus:bg-[#edecff] border border-[#e0e0fc]"
                >
                  {DESTINATIONS_DATA.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} ({d.carTimeFromABC})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#837560] pointer-events-none" />
              </div>
            </div>

            {/* Cost Breakdown Visual Card */}
            <div className="bg-[#edecff] rounded-2xl p-4 flex flex-col gap-3 border border-[#e0e0fc] min-h-fit">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span className="text-[12px] font-semibold text-[#514532] break-words">
                  Estimativa Total (Ida e Volta):
                </span>
                <span className="font-['Plus Jakarta Sans'] text-xl font-bold text-[#7d5800] break-words">
                  {selectedDestData.id === 'santos'
                    ? 'R$ 91,00'
                    : selectedDestData.id === 'guaruja'
                    ? 'R$ 104,80'
                    : selectedDestData.id === 'ubatuba'
                    ? 'R$ 194,60'
                    : selectedDestData.id === 'ilhabela'
                    ? 'R$ 203,50'
                    : selectedDestData.id === 'maresias'
                    ? 'R$ 163,20'
                    : 'R$ 259,80'}
                </span>
              </div>

              <div className="flex flex-col gap-1.5 pt-1 text-[12px] text-[#514532]">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="flex items-center gap-1.5">
                    <Coins className="w-4 h-4 text-[#934b00] flex-shrink-0" />
                    <span>Pedágios (Sistema Ecovias / ARTESP):</span>
                  </span>
                  <strong className="text-[#181a2e] break-words">{selectedDestData.tollsCostRoundTrip}</strong>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="flex items-center gap-1.5">
                    <Fuel className="w-4 h-4 text-[#934b00] flex-shrink-0" />
                    <span>Combustível Estimado:</span>
                  </span>
                  <strong className="text-[#181a2e] break-words">
                    R${' '}
                    {(
                      Math.max(selectedDestData.carDistanceKm * 2, 80) * 0.45 +
                      30
                    ).toFixed(2)}
                  </strong>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="flex items-center gap-1.5">
                    <Leaf className="w-4 h-4 text-[#00677d] flex-shrink-0" />
                    <span>Pegada Carbono Compensável:</span>
                  </span>
                  <strong className="text-[#00677d] break-words">
                    {(selectedDestData.carDistanceKm * 0.12).toFixed(1)} kg CO₂
                  </strong>
                </div>
              </div>
            </div>

            {/* TERRESA Bus options */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span className="text-[12px] font-bold text-[#181a2e] flex items-center gap-1">
                  <Bus className="w-4 h-4 text-[#00677d] flex-shrink-0" />
                  <span>Partidas do TERRESA Santo André</span>
                </span>
                <span className="text-[10px] text-[#00677d] font-bold flex-shrink-0">Hoje • Terminal</span>
              </div>

              <div className="space-y-1.5">
                {TERRESA_DEPARTURES.slice(0, 2).map((dep, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 bg-[#f4f2ff] px-3.5 py-2.5 rounded-xl text-[#181a2e] border border-[#e0e0fc] min-h-fit"
                  >
                    <div className="min-w-0">
                      <span className="text-[12px] font-bold block break-words">
                        {dep.departureTime} → {dep.arrivalTime}
                      </span>
                      <span className="text-[10px] text-[#514532] break-words">
                        {dep.destination} • {dep.platform}
                      </span>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-[12px] font-bold text-[#934b00]">{dep.price}</span>
                      <span className="block text-[10px] text-emerald-600 font-semibold">
                        {dep.availableSeats} assentos livres
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* UV Sparkline Progression */}
            <div className="bg-[#f4f2ff] p-4 rounded-2xl flex flex-col gap-2 border border-[#e0e0fc]">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold text-[#181a2e] flex items-center gap-1">
                  <Sun className="w-4 h-4 text-[#7d5800]" />
                  Curva Solar UV no Destino
                </span>
                <span className="text-[10px] font-bold text-[#934b00]">Pico às 12:30</span>
              </div>

              {/* Minimal SVG Sparkline */}
              <div className="w-full h-14 pt-1">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 280 60">
                  <defs>
                    <linearGradient id="uvGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffb703" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#ffb703" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10 50 Q 75 42, 110 20 Q 140 5, 170 20 Q 205 38, 270 50 L 270 55 L 10 55 Z"
                    fill="url(#uvGradient)"
                  />
                  <path
                    d="M 10 50 Q 75 42, 110 20 Q 140 5, 170 20 Q 205 38, 270 50"
                    fill="none"
                    stroke="#fd8603"
                    strokeWidth="2.5"
                  />
                  <circle cx="10" cy="50" r="3" fill="#fd8603" />
                  <circle cx="75" cy="40" r="3" fill="#fd8603" />
                  <circle cx="140" cy="8" r="4.5" fill="#934b00" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="205" cy="38" r="3" fill="#fd8603" />
                  <circle cx="270" cy="50" r="3" fill="#fd8603" />
                  <text
                    x="140"
                    y="2"
                    fill="#934b00"
                    fontSize="9"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    UV {selectedDestData.uvIndex}.4
                  </text>
                </svg>
              </div>

              <div className="flex items-center justify-between text-[9px] font-semibold text-[#837560] px-1">
                <span>08:00 (UV 3)</span>
                <span>10:30 (UV 7)</span>
                <span>13:00 (UV 11)</span>
                <span>15:30 (UV 6)</span>
                <span>18:00 (UV 0)</span>
              </div>
            </div>

            {/* Offline Download Button */}
            <button
              type="button"
              onClick={handleDownloadOffline}
              className={`w-full py-3 rounded-xl text-[13px] font-bold flex items-center justify-center gap-2 shadow-sm transition-all ${
                isOfflineSaved
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#934b00] hover:bg-[#703800] text-white'
              }`}
            >
              {isOfflineSaved ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
              <span>
                {isDownloadingOffline
                  ? 'Gravando Mapa e Rotas no Cache...'
                  : isOfflineSaved
                  ? 'Mapa de Santo André Salvo Offline!'
                  : 'Baixar Mapa para Uso Offline (Sem Sinal)'}
              </span>
            </button>
            <p className="text-[10px] text-center text-[#837560]">
              Ideal para trechos de serra sem sinal 4G/5G na Rod. Rio-Santos e descida da Serra de
              Boiçucanga.
            </p>
          </div>

          {/* Quick Tips Card */}
          <div className="bg-[#edecff] p-5 rounded-3xl flex items-start gap-3 text-[#181a2e] border border-[#e0e0fc]">
            <Lightbulb className="w-6 h-6 text-[#934b00] flex-shrink-0" />
            <div>
              <h4 className="text-[13px] font-bold text-[#181a2e]">Dica Local do ABC Paulista</h4>
              <p className="text-[12px] text-[#514532] mt-0.5 leading-relaxed">
                Evite a saída da Av. Lions após às 17h nas sextas-feiras. A melhor rota alternativa
                para a Imigrantes parte via{' '}
                <strong>Av. Prestes Maia ➔ Rodoanel Sul</strong> com ganho médio de 25 minutos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
