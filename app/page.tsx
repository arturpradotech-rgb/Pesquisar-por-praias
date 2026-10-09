'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import LiveTicker from '@/components/LiveTicker';
import Footer from '@/components/Footer';
import DestinationRadarView from '@/components/DestinationRadarView';
import DestinationDetailView from '@/components/DestinationDetailView';
import BeachMapView from '@/components/BeachMapView';
import SavedRoutesView from '@/components/SavedRoutesView';

export default function HomePage() {
  // Navigation & View state
  const [currentView, setCurrentView] = useState<string>('radar');
  const [selectedDestinationId, setSelectedDestinationId] = useState<string>('ubatuba');
  const [selectedNeighborhoodId, setSelectedNeighborhoodId] = useState<string>('jardim');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [savedDestinations, setSavedDestinations] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('onde_tem_o_sol_saved');
        if (stored) return JSON.parse(stored);
      } catch {
        // ignore
      }
    }
    return ['ubatuba', 'santos', 'ilhabela', 'maresias'];
  });

  const handleToggleSave = (id: string) => {
    setSavedDestinations((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('onde_tem_o_sol_saved', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleNavigate = (view: string, destinationId?: string) => {
    if (destinationId) {
      setSelectedDestinationId(destinationId);
    }
    setCurrentView(view);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectDestination = (destId: string) => {
    setSelectedDestinationId(destId);
    setCurrentView('detalhes');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf8ff] flex flex-col text-[#181a2e]">
      {/* Top Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        selectedNeighborhoodId={selectedNeighborhoodId}
        onSelectNeighborhood={setSelectedNeighborhoodId}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        savedCount={savedDestinations.length}
      />

      {/* Main Page Content */}
      <main className="w-full pt-20 flex-1">
        {/* Live Weather & Road Status Ticker */}
        <LiveTicker />

        {/* View Switching */}
        {currentView === 'radar' && (
          <DestinationRadarView
            onSelectDestination={handleSelectDestination}
            selectedNeighborhoodId={selectedNeighborhoodId}
            onSelectNeighborhood={setSelectedNeighborhoodId}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            savedDestinations={savedDestinations}
            onToggleSave={handleToggleSave}
            onNavigateToCalculator={() => handleNavigate('calculadora')}
          />
        )}

        {currentView === 'detalhes' && (
          <DestinationDetailView
            destinationId={selectedDestinationId}
            onBackToRadar={() => handleNavigate('radar')}
            savedDestinations={savedDestinations}
            onToggleSave={handleToggleSave}
          />
        )}

        {(currentView === 'mapa' || currentView === 'calculadora') && (
          <BeachMapView
            onSelectDestination={handleSelectDestination}
            selectedNeighborhoodId={selectedNeighborhoodId}
            onSelectNeighborhood={setSelectedNeighborhoodId}
          />
        )}

        {currentView === 'salvos' && (
          <SavedRoutesView
            savedDestinations={savedDestinations}
            onSelectDestination={handleSelectDestination}
            onToggleSave={handleToggleSave}
            onExploreMore={() => handleNavigate('radar')}
          />
        )}
      </main>

      {/* Persistent Global Footer */}
      <Footer />
    </div>
  );
}
