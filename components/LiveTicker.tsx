'use client';

import React from 'react';
import { Eye, Sun, Droplets, Radio } from 'lucide-react';

export default function LiveTicker() {
  return (
    <div className="w-full bg-[#edecff] py-2 px-4 md:px-6 lg:px-8 text-[#181a2e] shadow-sm border-b border-[#e0e0fc]/60">
      <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-2 text-[12px] font-['Work Sans']">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fd8603] text-white font-bold text-[11px] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            RADAR AO VIVO
          </span>
          <span className="text-[#514532] hidden sm:inline">Descida da Serra do Mar:</span>
          <span className="font-semibold text-[#00677d] flex items-center gap-1">
            <Eye className="w-4 h-4 text-[#00677d] flex-shrink-0" />
            Visibilidade Plena (Sem neblina na Imigrantes)
          </span>
        </div>
        <div className="flex items-center gap-4 text-[#514532]">
          <div className="flex items-center gap-1">
            <Sun className="w-4 h-4 text-[#7d5800] flex-shrink-0" />
            <span>
              Índice Solar ABC-Litoral:{' '}
              <strong className="text-[#934b00]">9.4/10 Excelente</strong>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1 text-[#00677d]">
            <Droplets className="w-4 h-4 text-[#00677d] flex-shrink-0" />
            <span>92% das praias próprias (CETESB)</span>
          </div>
          <div className="hidden lg:flex items-center gap-1 bg-white/70 px-2 py-0.5 rounded-full text-[10px] font-bold text-[#934b00]">
            <Radio className="w-3.5 h-3.5 text-[#934b00] flex-shrink-0" />
            CACHE OFFLINE DISPONÍVEL
          </div>
        </div>
      </div>
    </div>
  );
}
