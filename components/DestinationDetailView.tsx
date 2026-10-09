'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Bus,
  Car,
  Sun,
  Navigation,
  Share2,
  Bookmark,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
  ArrowLeft,
  Umbrella,
  Waves,
  Utensils,
  Bed,
  Building2,
  Compass,
  Coins,
  Route,
  Fuel,
  ExternalLink,
  ShieldCheck,
  Droplets,
  Wifi,
  Hospital,
  CreditCard,
  Store,
  Home,
} from 'lucide-react';
import { DESTINATIONS_DATA, Destination } from '@/data/destinations';

interface DestinationDetailViewProps {
  destinationId: string;
  onBackToRadar: () => void;
  savedDestinations: string[];
  onToggleSave: (id: string) => void;
}

function renderInfraIcon(iconName: string) {
  switch (iconName) {
    case 'shower':
      return <Droplets className="w-6 h-6 text-[#934b00]" />;
    case 'wifi_tethering':
    case 'wifi':
      return <Wifi className="w-6 h-6 text-[#934b00]" />;
    case 'medical_services':
    case 'hospital':
      return <Hospital className="w-6 h-6 text-[#934b00]" />;
    case 'local_parking':
    case 'parking':
      return <Car className="w-6 h-6 text-[#934b00]" />;
    case 'account_balance':
    case 'atm':
      return <CreditCard className="w-6 h-6 text-[#934b00]" />;
    case 'storefront':
      return <Store className="w-6 h-6 text-[#934b00]" />;
    default:
      return <Building2 className="w-6 h-6 text-[#934b00]" />;
  }
}

export default function DestinationDetailView({
  destinationId,
  onBackToRadar,
  savedDestinations,
  onToggleSave,
}: DestinationDetailViewProps) {
  const [activeTab, setActiveTab] = useState<
    'praias' | 'infra' | 'pontos' | 'gastronomia' | 'hospedagem'
  >('praias');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const destination: Destination =
    DESTINATIONS_DATA.find((d) => d.id === destinationId) || DESTINATIONS_DATA[0];

  const isSaved = savedDestinations.includes(destination.id);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: `${destination.name} - Guia Solar Santo André`,
          text: `Confira as condições solares, rotas do ABC e praias de ${destination.name}!`,
          url: typeof window !== 'undefined' ? window.location.href : '',
        })
        .catch(() => {});
    } else {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
      }
      showToast(`Link do roteiro de ${destination.name} copiado com sucesso!`);
    }
  };

  const handleWaze = () => {
    const url = `https://www.waze.com/ul?q=${encodeURIComponent(
      destination.name + ', SP'
    )}&navigate=yes`;
    window.open(url, '_blank');
  };

  const handleSave = () => {
    onToggleSave(destination.id);
    showToast(
      !isSaved
        ? `Roteiro de ${destination.name} salvo para visualização offline!`
        : `Roteiro de ${destination.name} removido dos salvos.`
    );
  };

  return (
    <div className="w-full flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#181a2e] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-sm font-semibold animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-[#ffb703] flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Ambient Banner & Breadcrumb Tracker */}
      <section className="relative w-full bg-[#f4f2ff] py-3.5 border-b border-[#e0e0fc]">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs md:text-sm text-[#514532] flex-wrap font-['Work Sans']">
            <button
              onClick={onBackToRadar}
              className="hover:text-[#7d5800] transition-colors flex items-center gap-1 font-semibold"
            >
              <Home className="w-4 h-4 text-[#7d5800]" /> Início
            </button>
            <span className="text-[#d5c4ac] font-bold">/</span>
            <span className="text-[#514532]">{destination.regionBadge}</span>
            <span className="text-[#d5c4ac] font-bold">/</span>
            <span className="text-[#181a2e] font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#fd8603]"></span>
              {destination.name} - {destination.state}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edecff] text-[#00677d] text-[11px] font-bold shadow-sm">
              <Sun className="w-3.5 h-3.5 text-[#00677d]" />
              MONITOR SOLAR ATIVO DO ABC
            </span>
            <span className="hidden sm:inline-block text-[#514532] text-[11px]">
              Atualizado há 14 min
            </span>
          </div>
        </div>
      </section>

      {/* Hero Editorial Destino */}
      <section className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-6">
        <div className="relative rounded-3xl overflow-hidden bg-[#2d2f44] text-[#f1efff] shadow-2xl">
          {/* Background Visual */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={destination.coverImage}
              alt={destination.titleHero}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-45 scale-105 hover:scale-100 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181a2e] via-[#181a2e]/90 to-transparent pointer-events-none"></div>

          <div className="relative z-10 p-5 sm:p-8 lg:p-12 flex flex-col gap-6 min-h-fit">
            {/* Header & Badges Row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-3xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-[#ffb703] text-[#6b4b00] text-[11px] uppercase tracking-wider font-extrabold flex items-center gap-1 shadow-sm flex-shrink-0">
                    <Waves className="w-3.5 h-3.5 text-[#6b4b00]" />
                    {destination.specialBadge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#66d2f1] text-[#00596c] text-[11px] font-bold flex items-center gap-1 flex-shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00596c]" />
                    {destination.cetesbScore}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1 flex-shrink-0">
                    <Compass className="w-3.5 h-3.5 text-[#fd8603]" />
                    {destination.regionBadge}
                  </span>
                </div>

                <h1 className="font-['Plus Jakarta Sans'] text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-1 drop-shadow-sm break-words leading-tight">
                  {destination.name}{' '}
                  <span className="text-[#ffb703] font-bold">
                    — {destination.titleHero.split('—')[1] || 'Paraíso Litorâneo'}
                  </span>
                </h1>

                <p className="font-['Work Sans'] text-sm sm:text-base md:text-lg text-[#f4f2ff] max-w-2xl leading-relaxed break-words">
                  {destination.subtitleHero}
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 lg:pt-0">
                <button
                  type="button"
                  onClick={handleSave}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-['Work Sans'] text-[13px] font-bold transition-all shadow-md active:scale-95 flex-shrink-0 ${
                    isSaved
                      ? 'bg-[#ffdcc4] text-[#934b00]'
                      : 'bg-white/95 backdrop-blur text-[#181a2e] hover:bg-white'
                  }`}
                >
                  {isSaved ? (
                    <CheckCircle2 className="w-5 h-5 text-[#934b00] flex-shrink-0" />
                  ) : (
                    <Bookmark className="w-5 h-5 text-[#934b00] flex-shrink-0" />
                  )}
                  <span>{isSaved ? 'Salvo Offline' : 'Salvar Offline'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWaze}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#fd8603] text-white font-['Work Sans'] text-[13px] font-bold hover:bg-[#ffb703] hover:text-[#6b4b00] transition-all shadow-lg active:scale-95 flex-shrink-0"
                >
                  <Navigation className="w-5 h-5 flex-shrink-0" />
                  <span>Traçar Rota Waze/Maps</span>
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  title="Compartilhar Roteiro"
                  className="p-2.5 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-all shadow-md active:scale-95 flex-shrink-0"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Travel & Micro-Weather Bento Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 pt-2">
              {/* Rota Carro Card (5 cols) */}
              <div className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 text-[#181a2e] shadow-md flex flex-col justify-between gap-3 border border-white/40 min-h-fit">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-11 h-11 rounded-xl bg-[#ffdcc4] flex items-center justify-center text-[#934b00] flex-shrink-0 shadow-sm">
                      <Car className="w-6 h-6 text-[#934b00] select-none" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-['Plus Jakarta Sans'] text-lg sm:text-xl font-bold text-[#181a2e] whitespace-nowrap">
                          {destination.carTimeFromABC}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#edecff] text-[#514532] text-[11px] font-semibold flex-shrink-0 whitespace-nowrap">
                          {destination.carDistanceKm > 1000
                            ? 'Voo + Conexão'
                            : `${destination.carDistanceKm} km`}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#934b00] uppercase font-bold tracking-wider block mt-0.5">
                        Origem: Santo André (Bairro Jardim)
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[#00677d] text-[11px] font-bold bg-[#b2ebff]/60 px-2.5 py-1 rounded-lg flex-shrink-0 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-[#00677d] flex-shrink-0"></span>
                    <span>{destination.trafficStatus}</span>
                  </span>
                </div>

                <div className="space-y-1.5 text-[#514532] text-[12px]">
                  <p className="flex items-start gap-2 leading-relaxed">
                    <Route className="w-4 h-4 text-[#7d5800] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Melhor Rota:</strong> {destination.bestRouteDescription}
                    </span>
                  </p>
                  <p className="flex items-start gap-2 leading-relaxed">
                    <Coins className="w-4 h-4 text-[#837560] flex-shrink-0 mt-0.5" />
                    <span>
                      Pedágios: {destination.tollsCostOneWay} (Ida). Sem tag? Pagamento por
                      aproximação aceito.
                    </span>
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-1.5 text-[#514532] text-[11px] bg-[#f4f2ff] px-3.5 py-2 rounded-xl">
                  <span className="flex items-center gap-1 font-semibold text-[#934b00] flex-shrink-0 whitespace-nowrap">
                    <Clock className="w-4 h-4 text-[#934b00]" />
                    Saída expressa ABC:
                  </span>
                  <span className="font-medium">{destination.abcQuickExitTip}</span>
                </div>
              </div>

              {/* Transporte Rodoviário Card (3 cols) */}
              <div className="lg:col-span-3 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 text-[#181a2e] shadow-md flex flex-col justify-between gap-3 border border-white/40 min-h-fit">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#b2ebff] flex items-center justify-center text-[#00677d] flex-shrink-0 shadow-sm">
                    <span className="inline-flex items-center justify-center select-none whitespace-nowrap">
                      <Bus className="w-6 h-6 text-[#00677d]" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className="font-['Plus Jakarta Sans'] text-lg sm:text-xl font-bold text-[#181a2e] whitespace-nowrap">
                        {destination.busTime}
                      </span>
                      <span className="text-[10px] text-[#00677d] font-bold bg-[#b2ebff]/70 px-1.5 py-0.2 rounded-md whitespace-nowrap">
                        TERRESA
                      </span>
                    </div>
                    <p className="text-[11px] text-[#514532] font-semibold leading-tight mt-0.5">
                      Direto da Rodoviária de Santo André
                    </p>
                  </div>
                </div>

                <div className="space-y-1 text-[#514532] text-[12px]">
                  <p className="font-bold text-[#181a2e]">{destination.busCompany}</p>
                  <p className="text-[11px] leading-relaxed">
                    Terminal Pref. Saladino (Integração CPTM L10).
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                    {destination.busSchedules.map((time, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-lg bg-[#edecff] text-[11px] font-bold text-[#7d5800] whitespace-nowrap flex-shrink-0"
                      >
                        {time}
                      </span>
                    ))}
                    <span className="text-[11px] text-[#837560] whitespace-nowrap flex-shrink-0">
                      (diários)
                    </span>
                  </div>
                </div>

                <div className="text-[#00677d] text-[12px] font-bold flex flex-wrap items-center justify-between gap-1 pt-1 border-t border-[#e0e0fc]">
                  <span className="whitespace-nowrap">Passagem: {destination.busTicketPrice}</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </div>
              </div>

              {/* Widget Climático & Balneabilidade (4 cols) */}
              <div className="lg:col-span-4 bg-gradient-to-br from-[#ffb703]/90 to-[#fd8603]/95 text-white rounded-2xl p-4 sm:p-5 shadow-md flex flex-col justify-between gap-3 min-h-fit">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Sun className="w-9 h-9 text-white flex-shrink-0" />
                    <div>
                      <span className="font-['Plus Jakarta Sans'] text-2xl font-extrabold text-white leading-none whitespace-nowrap">
                        {destination.tempC}°C
                      </span>
                      <span className="text-[11px] block opacity-95 font-medium mt-0.5 whitespace-nowrap">
                        Sensação {destination.sensacaoC}°C • {destination.windSpeed}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="px-2 py-1 rounded-lg bg-[#181a2e] text-white text-[11px] font-bold tracking-tight whitespace-nowrap">
                      ÍNDICE UV {destination.uvIndex}
                    </span>
                    <span className="block text-[11px] text-white mt-0.5 font-bold whitespace-nowrap">
                      {destination.uvDescription}
                    </span>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-[#181a2e]">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <span className="text-[12px] font-bold text-[#934b00] flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
                      <CheckCircle2 className="w-4 h-4 text-[#00677d] flex-shrink-0" />
                      {destination.cetesbScore}
                    </span>
                    <span className="text-[11px] text-[#837560] font-semibold flex-shrink-0 whitespace-nowrap">
                      Boletim CETESB
                    </span>
                  </div>
                  <p className="text-[12px] text-[#514532] leading-snug">
                    {destination.weatherSummary}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-white text-[11px] font-bold">
                  <span className="flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
                    <Umbrella className="w-4 h-4 flex-shrink-0" />
                    FPS 50+ indispensável
                  </span>
                  <span className="flex-shrink-0 whitespace-nowrap">Mar: {destination.waterTempC}°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Interactive Sub-Tabs Container */}
      <section className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-4">
        {/* Navigation Tab Bar */}
        <div className="sticky top-20 z-40 bg-[#fbf8ff]/95 backdrop-blur-xl py-2 rounded-2xl shadow-sm mb-6 border border-[#e0e0fc]">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar p-1.5">
            <button
              type="button"
              onClick={() => setActiveTab('praias')}
              className={`px-4 py-2.5 rounded-xl text-[13px] whitespace-nowrap transition-all flex items-center gap-2 font-bold ${
                activeTab === 'praias'
                  ? 'bg-[#934b00] text-white shadow-md'
                  : 'bg-[#f4f2ff] text-[#181a2e] hover:bg-[#edecff]'
              }`}
            >
              <Umbrella className="w-4 h-4" />
              <span>Praias e Acessos</span>
              <span className="px-2 py-0.2 rounded-full bg-[#fd8603] text-white text-[10px]">
                Top {destination.beaches.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('infra')}
              className={`px-4 py-2.5 rounded-xl text-[13px] whitespace-nowrap transition-all flex items-center gap-2 font-semibold ${
                activeTab === 'infra'
                  ? 'bg-[#934b00] text-white shadow-md font-bold'
                  : 'bg-[#f4f2ff] text-[#181a2e] hover:bg-[#edecff]'
              }`}
            >
              <Building2 className="w-4 h-4 text-[#934b00]" />
              <span>Infraestrutura Local</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('pontos')}
              className={`px-4 py-2.5 rounded-xl text-[13px] whitespace-nowrap transition-all flex items-center gap-2 font-semibold ${
                activeTab === 'pontos'
                  ? 'bg-[#934b00] text-white shadow-md font-bold'
                  : 'bg-[#f4f2ff] text-[#181a2e] hover:bg-[#edecff]'
              }`}
            >
              <Compass className="w-4 h-4 text-[#7d5800]" />
              <span>Pontos Turísticos & Passeios</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('gastronomia')}
              className={`px-4 py-2.5 rounded-xl text-[13px] whitespace-nowrap transition-all flex items-center gap-2 font-semibold ${
                activeTab === 'gastronomia'
                  ? 'bg-[#934b00] text-white shadow-md font-bold'
                  : 'bg-[#f4f2ff] text-[#181a2e] hover:bg-[#edecff]'
              }`}
            >
              <Utensils className="w-4 h-4 text-[#fd8603]" />
              <span>Gastronomia & Restaurantes</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('hospedagem')}
              className={`px-4 py-2.5 rounded-xl text-[13px] whitespace-nowrap transition-all flex items-center gap-2 font-semibold ${
                activeTab === 'hospedagem'
                  ? 'bg-[#934b00] text-white shadow-md font-bold'
                  : 'bg-[#f4f2ff] text-[#181a2e] hover:bg-[#edecff]'
              }`}
            >
              <Bed className="w-4 h-4 text-[#00677d]" />
              <span>Hospedagem & Pousadas</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PRAIAS E ACESSOS */}
        {activeTab === 'praias' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-[#f4f2ff] p-4 rounded-2xl border border-[#e0e0fc]">
              <div>
                <h2 className="font-['Plus Jakarta Sans'] text-xl font-bold text-[#181a2e]">
                  Seleção de Praias Imperdíveis de {destination.name}
                </h2>
                <p className="text-[13px] text-[#514532]">
                  Classificação por estilo de banho, acessibilidade para quem vem do ABC e
                  balneabilidade atualizada.
                </p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#edecff] text-[#181a2e] text-[11px] font-semibold">
                  Filtro Ativo: Partida Santo André
                </span>
                <span className="px-3 py-1 rounded-full bg-[#b2ebff] text-[#001f27] text-[11px] font-bold flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5 text-[#001f27]" /> Água Cristalina
                </span>
              </div>
            </div>

            {/* Praia Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.beaches.map((beach) => (
                <article
                  key={beach.id}
                  className="flex flex-col rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e0e0fc] group min-h-fit"
                >
                  {/* Image Banner with structured non-overlapping overlay */}
                  <div className="relative min-h-[240px] w-full overflow-hidden bg-slate-100 flex flex-col justify-between p-4">
                    <Image
                      src={beach.image}
                      alt={beach.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181a2e] via-[#181a2e]/60 to-black/35 pointer-events-none"></div>

                    {/* Top Row: flex-wrap to prevent any overlapping */}
                    <div className="relative z-10 flex flex-wrap items-start justify-between gap-1.5 w-full">
                      <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#181a2e] text-[11px] font-bold shadow-sm inline-flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
                        <Sun className="w-3.5 h-3.5 text-[#934b00]" />
                        <span>{beach.temp}</span>
                      </span>

                      <span className="px-2.5 py-1 rounded-full bg-[#00677d] text-white text-[11px] font-bold shadow-sm inline-flex items-center gap-1 flex-shrink-0 ml-auto whitespace-nowrap">
                        <ShieldCheck className="w-3.5 h-3.5 text-white" />
                        <span>{beach.waterStatus}</span>
                      </span>
                    </div>

                    {/* Bottom Row */}
                    <div className="relative z-10 text-white mt-auto pt-3">
                      <span className="text-[11px] uppercase tracking-wider text-[#ffdcc4] font-bold block break-words">
                        {beach.subLocation}
                      </span>
                      <h3 className="font-['Plus Jakarta Sans'] text-lg sm:text-xl font-bold text-white break-words leading-snug">
                        {beach.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-4 min-h-fit">
                    <p className="text-[13px] text-[#514532] leading-relaxed break-words">
                      {beach.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {beach.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-[#edecff] text-[#181a2e] text-[11px] font-semibold break-words max-w-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 bg-[#f4f2ff] -mx-4 sm:-mx-5 -mb-4 sm:-mb-5 p-4 flex flex-wrap items-center justify-between gap-2 text-[#181a2e] border-t border-[#e0e0fc] mt-auto">
                      <div className="flex items-center gap-1 text-[12px] font-semibold flex-shrink-0">
                        <Car className="w-4 h-4 text-[#934b00]" />
                        <span>{beach.distanceFromCenter}</span>
                      </div>
                      <span className="text-[12px] text-[#7d5800] font-bold flex items-center gap-0.5 break-words">
                        {beach.parkingCost || 'Zona Azul'}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: INFRAESTRUTURA LOCAL */}
        {activeTab === 'infra' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="bg-[#f4f2ff] p-4 rounded-2xl border border-[#e0e0fc]">
              <h2 className="font-['Plus Jakarta Sans'] text-xl font-bold text-[#181a2e] break-words">
                Suporte Urbano e Segurança ao Visitante em {destination.name}
              </h2>
              <p className="text-[13px] text-[#514532] break-words leading-relaxed">
                Tudo o que os viajantes de Santo André precisam saber antes de descer a serra com a
                família ou amigos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {destination.infrastructure.map((inf, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-[#e0e0fc] flex flex-col justify-between gap-3 min-h-fit"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#edecff] flex items-center justify-center text-[#934b00] flex-shrink-0">
                    {renderInfraIcon(inf.icon)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-['Plus Jakarta Sans'] text-[16px] font-bold text-[#181a2e] break-words leading-snug">
                      {inf.title}
                    </h3>
                    <p className="text-[12px] text-[#514532] mt-1.5 leading-relaxed break-words">
                      {inf.description}
                    </p>
                  </div>
                  <span className="mt-auto text-[11px] text-[#934b00] font-bold bg-[#ffdcc4]/60 p-1.5 rounded-lg break-words">
                    {inf.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: PONTOS TURÍSTICOS & PASSEIOS */}
        {activeTab === 'pontos' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="bg-[#f4f2ff] p-4 rounded-2xl border border-[#e0e0fc]">
              <h2 className="font-['Plus Jakarta Sans'] text-xl font-bold text-[#181a2e] break-words">
                Roteiros e Experiências Além da Areia em {destination.name}
              </h2>
              <p className="text-[13px] text-[#514532] break-words leading-relaxed">
                Atrações para todas as idades, passeios de barco e cachoeiras de água doce na Serra
                do Mar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {destination.tours.map((tour, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e0e0fc] flex flex-col justify-between min-h-fit"
                >
                  <div className="min-h-[160px] h-44 w-full relative bg-slate-100 flex-shrink-0">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-[#00677d] text-white text-[11px] font-bold shadow break-words max-w-[85%]">
                      {tour.category}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col flex-1 justify-between gap-2 min-h-fit">
                    <div>
                      <h3 className="font-['Plus Jakarta Sans'] text-[15px] font-bold text-[#181a2e] break-words leading-snug">
                        {tour.title}
                      </h3>
                      <p className="text-[12px] text-[#514532] mt-1 leading-relaxed break-words">
                        {tour.description}
                      </p>
                    </div>
                    <div className="pt-2 text-[#7d5800] text-[11px] font-bold border-t border-[#e0e0fc] break-words mt-auto">
                      {tour.hours}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: GASTRONOMIA & RESTAURANTES */}
        {activeTab === 'gastronomia' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="bg-[#f4f2ff] p-4 rounded-2xl border border-[#e0e0fc]">
              <h2 className="font-['Plus Jakarta Sans'] text-xl font-bold text-[#181a2e] break-words">
                Sabores Caiçaras & Noite Gastronômica
              </h2>
              <p className="text-[13px] text-[#514532] break-words leading-relaxed">
                Do peixe na telha à beira-mar aos bistrôs autorais e cafés artesanais.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {destination.gastronomy.map((gastro, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-[#e0e0fc] flex flex-col justify-between gap-3 min-h-fit"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="px-2.5 py-0.5 rounded-lg bg-[#ffdcc4] text-[#934b00] text-[11px] font-bold flex-shrink-0">
                        {gastro.category}
                      </span>
                      <span className="text-[12px] text-[#934b00] font-bold flex-shrink-0">
                        {gastro.priceLevel}
                      </span>
                    </div>
                    <h3 className="font-['Plus Jakarta Sans'] text-[16px] font-bold text-[#181a2e] mt-2 break-words leading-snug">
                      {gastro.title}
                    </h3>
                    <p className="text-[12px] text-[#514532] mt-1 leading-relaxed break-words">
                      {gastro.description}
                    </p>
                  </div>
                  <p className="text-[11px] text-[#514532] bg-[#f4f2ff] p-2 rounded-xl break-words leading-normal mt-auto">
                    {gastro.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: HOSPEDAGEM & POUSADAS */}
        {activeTab === 'hospedagem' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="bg-[#f4f2ff] p-4 rounded-2xl border border-[#e0e0fc]">
              <h2 className="font-['Plus Jakarta Sans'] text-xl font-bold text-[#181a2e] break-words">
                Onde Ficar: Das Pousadas de Charme aos Eco-Resorts
              </h2>
              <p className="text-[13px] text-[#514532] break-words leading-relaxed">
                Opções categorizadas para casais, famílias com crianças e grupos de amigos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {destination.lodging.map((stay, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-[#e0e0fc] flex flex-col justify-between gap-3 min-h-fit"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-[#b2ebff] text-[#001f27] text-[11px] font-bold flex-shrink-0">
                        {stay.category}
                      </span>
                      {stay.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-full bg-[#edecff] text-[#181a2e] text-[11px] flex-shrink-0"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-['Plus Jakarta Sans'] text-[17px] font-bold text-[#181a2e] break-words leading-snug">
                      {stay.title}
                    </h3>
                    <p className="text-[12px] text-[#514532] mt-2 leading-relaxed break-words">
                      {stay.description}
                    </p>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center justify-between gap-2 text-[#181a2e] border-t border-[#e0e0fc] mt-auto">
                    <span className="text-[13px] font-bold text-[#934b00] break-words">
                      {stay.priceEstimate}
                    </span>
                    <button
                      type="button"
                      onClick={() => showToast('Redirecionando para verificar disponibilidade...')}
                      className="px-3 py-1.5 rounded-xl bg-[#edecff] text-[#7d5800] text-[12px] font-bold hover:bg-[#e0e0fc] transition-colors flex-shrink-0"
                    >
                      Ver Vagas
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Section 3: Conexões Rodoviárias do ABC & Mapa Miniatura */}
      <section className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-[#e0e0fc] flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Column: ABC Travel Intelligence */}
          <div className="flex-1 flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#fd8603]"></span>
                <span className="text-[11px] uppercase tracking-widest text-[#934b00] font-extrabold">
                  Logística Direta do ABC
                </span>
              </div>
              <h2 className="font-['Plus Jakarta Sans'] text-2xl lg:text-3xl font-bold text-[#181a2e] mt-1">
                Conexão Santo André ⇄ {destination.name}
              </h2>
              <p className="text-[13px] text-[#514532] mt-2 leading-relaxed">
                Dicas estratégicas elaboradas para moradores de Santo André, São Caetano e São
                Bernardo que desejam fugir do trânsito na descida da serra e aproveitar o máximo de
                sol.
              </p>
            </div>

            {/* Strategy Bullets */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-[#f4f2ff] p-3.5 sm:p-4 rounded-2xl min-h-fit">
                <Clock className="w-5 h-5 text-[#934b00] flex-shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <span className="text-[13px] text-[#181a2e] font-bold block break-words">
                    Melhor Horário de Partida na Sexta-feira
                  </span>
                  <p className="text-[12px] text-[#514532] mt-0.5 break-words leading-relaxed">
                    {destination.bestDepartureFriday}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#f4f2ff] p-3.5 sm:p-4 rounded-2xl min-h-fit">
                <Route className="w-5 h-5 text-[#00677d] flex-shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <span className="text-[13px] text-[#181a2e] font-bold block break-words">
                    Rota Recomendada
                  </span>
                  <p className="text-[12px] text-[#514532] mt-0.5 break-words leading-relaxed">
                    {destination.recommendedRoads}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#f4f2ff] p-3.5 sm:p-4 rounded-2xl min-h-fit">
                <Fuel className="w-5 h-5 text-[#7d5800] flex-shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <span className="text-[13px] text-[#181a2e] font-bold block break-words">
                    Ponto de Parada Estratégico
                  </span>
                  <p className="text-[12px] text-[#514532] mt-0.5 break-words leading-relaxed">
                    {destination.recommendedRestStop}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleWaze}
                className="px-5 py-3 rounded-xl bg-[#934b00] text-white text-[13px] font-bold shadow-md hover:bg-[#703800] transition-all flex items-center gap-2 active:scale-95 flex-shrink-0"
              >
                <Navigation className="w-5 h-5 flex-shrink-0" />
                <span>Abrir Trajeto Completo no Waze</span>
              </button>
              <span className="text-[#514532] text-[12px] break-words">
                Distância total:{' '}
                {destination.carDistanceKm > 1000
                  ? 'Voo + Conexão'
                  : `${destination.carDistanceKm} km`}
              </span>
            </div>
          </div>

          {/* Right Column: Mini Map Component */}
          <div className="w-full lg:w-[460px] flex flex-col gap-3 min-h-fit">
            <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden shadow-inner bg-[#023047]">
              {/* Static / Vector styled map view */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6yz5gikR7Bf6EbXHH6-GUJEfGZGOXuP8TVESLhzoGRwFFLnov79eA3tynrE-Tq1wfCjBy1sLvU5S-_RdPSCOubWuLWRXJMvhGaNdZkqvsNsBwtEOIFvAN4RcagakO--kZktyDVccfMSXbE0bMYqGMHDFL8x155IHTyi6I2PHjG7NnUmmWgRBahmkDNdSWcDnqc_Ppi29RKHYjLYUMjsos4hN0DowPFsn_-SjZBZzX14s9S4ZG7Suv')`,
                }}
              ></div>

              {/* Map Floating Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg flex items-center justify-between border border-white/40 gap-2">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#934b00] font-bold block">
                    Destino Selecionado
                  </span>
                  <p className="font-['Plus Jakarta Sans'] text-[14px] sm:text-[15px] text-[#181a2e] font-bold truncate">
                    {destination.name} • Centro & Praias
                  </p>
                  <span className="text-[11px] text-[#00677d] flex items-center gap-1 font-semibold truncate">
                    <span className="w-2 h-2 rounded-full bg-[#00677d] flex-shrink-0"></span>
                    <span>Coordenadas sincronizadas</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onBackToRadar}
                  className="w-10 h-10 rounded-full bg-[#ffb703] text-[#6b4b00] flex items-center justify-center shadow hover:scale-105 transition-transform flex-shrink-0"
                  title="Voltar ao Radar"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Travel Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center bg-[#f4f2ff] p-3 rounded-2xl border border-[#e0e0fc]">
              <div className="p-1">
                <span className="block text-[11px] text-[#514532]">Tempo Estimado</span>
                <span className="font-['Plus Jakarta Sans'] text-[15px] text-[#7d5800] font-bold break-words">
                  {destination.carTimeFromABC}
                </span>
              </div>
              <div className="p-1">
                <span className="block text-[11px] text-[#514532]">Pedágios (Ida)</span>
                <span className="font-['Plus Jakarta Sans'] text-[15px] text-[#934b00] font-bold break-words">
                  {destination.tollsCostOneWay}
                </span>
              </div>
              <div className="p-1">
                <span className="block text-[11px] text-[#514532]">Status da Serra</span>
                <span className="font-['Plus Jakarta Sans'] text-[15px] text-[#00677d] font-bold break-words">
                  Sem Neblina
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
