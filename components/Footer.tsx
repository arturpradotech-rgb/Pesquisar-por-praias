'use client';

import React from 'react';
import { Sun, MapPin, Route, Bus, ArrowRight, CloudSun, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f2ff] text-[#181a2e] mt-16 shadow-[0_-1px_12px_rgba(2,48,71,0.03)] border-t border-[#e0e0fc]">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Origin Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Sun className="w-6 h-6 text-[#934b00]" />
              <span className="font-['Plus Jakarta Sans'] text-[18px] font-bold text-[#7d5800]">
                Onde tem o Sol
              </span>
            </div>
            <p className="font-['Work Sans'] text-[12px] text-[#514532] leading-relaxed">
              O guia solar inteligente desenhado especialmente para quem escapa do ABC Paulista em
              busca do mar, da brisa e do melhor índice UV do litoral paulista.
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-[#514532] font-['Work Sans'] text-[12px] font-semibold bg-white/60 p-2 rounded-lg border border-[#e0e0fc]">
              <MapPin className="w-4 h-4 text-[#00677d] flex-shrink-0" />
              <span>Origem Fixa: Santo André / Região Metropolitana SP</span>
            </div>
          </div>

          {/* Highway Connections */}
          <div className="flex flex-col gap-3">
            <h3 className="font-['Work Sans'] text-[13px] font-bold text-[#7d5800] uppercase tracking-wider flex items-center gap-1.5">
              <Route className="w-4 h-4 text-[#7d5800]" />
              Rodovias de Conexão
            </h3>
            <ul className="flex flex-col gap-2 font-['Work Sans'] text-[12px] text-[#514532]">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#fd8603] mt-1 flex-shrink-0"></span>
                <span>
                  <strong>Rod. dos Imigrantes (SP-160):</strong> Descida rápida Baixada Santista
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#fd8603] mt-1 flex-shrink-0"></span>
                <span>
                  <strong>Via Anchieta (SP-150):</strong> Saída direta ABC via Av. Lions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffb703] mt-1 flex-shrink-0"></span>
                <span>
                  <strong>Rod. dos Tamoios (SP-099):</strong> Conexão Litoral Norte
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffb703] mt-1 flex-shrink-0"></span>
                <span>
                  <strong>Rod. Ayrton Senna (SP-070):</strong> Rota via Jacu-Pêssego / Rodoanel
                  Leste
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#66d2f1] mt-1 flex-shrink-0"></span>
                <span>
                  <strong>Rod. Rio-Santos (SP-055):</strong> Praias e enseadas costeiras
                </span>
              </li>
            </ul>
          </div>

          {/* Bus Departures TERRESA */}
          <div className="flex flex-col gap-3">
            <h3 className="font-['Work Sans'] text-[13px] font-bold text-[#7d5800] uppercase tracking-wider flex items-center gap-1.5">
              <Bus className="w-4 h-4 text-[#7d5800]" />
              Conexões TERRESA
            </h3>
            <p className="font-['Work Sans'] text-[12px] text-[#514532] leading-relaxed">
              Linhas litorâneas diretas a partir do{' '}
              <strong>Terminal Rodoviário de Santo André (TERRESA - Pref. Saladino)</strong>:
            </p>
            <ul className="flex flex-col gap-1.5 font-['Work Sans'] text-[12px] text-[#514532]">
              <li className="flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-[#00677d] flex-shrink-0" />
                <span>Santos & São Vicente (Viação Cometa / Expressul)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-[#00677d] flex-shrink-0" />
                <span>Praia Grande, Mongaguá, Itanhaém & Peruíbe</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-[#00677d] flex-shrink-0" />
                <span>Guarujá & Bertioga (Fretamentos de fim de semana)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-[#00677d] flex-shrink-0" />
                <span>Integração rápida: CPTM Linha 10-Turquesa</span>
              </li>
            </ul>
          </div>

          {/* Monitoring & Status */}
          <div className="flex flex-col gap-3">
            <h3 className="font-['Work Sans'] text-[13px] font-bold text-[#7d5800] uppercase tracking-wider flex items-center gap-1.5">
              <CloudSun className="w-4 h-4 text-[#7d5800]" />
              Monitoramento Serra & Mar
            </h3>
            <p className="font-['Work Sans'] text-[12px] text-[#514532] leading-relaxed">
              Acompanhamento em tempo real das condições de descida da serra: Operação Comboio
              Ecovias, neblina na Serra do Mar e índice de balneabilidade da Cetesb.
            </p>
            <div className="bg-[#edecff] p-3 rounded-xl flex items-center gap-3 border border-[#e0e0fc]">
              <Sparkles className="w-6 h-6 text-[#934b00] flex-shrink-0" />
              <div>
                <span className="font-['Work Sans'] text-[12px] font-bold text-[#181a2e] block">
                  Bússola Solar Ativa
                </span>
                <span className="font-['Work Sans'] text-[11px] text-[#514532]">
                  Atualizado para o fim de semana em Santo André
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-[#d5c4ac]/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#514532] font-['Work Sans'] text-[12px]">
          <p>© 2026 Onde tem o Sol, é pra lá que eu vou • Conexão Santo André - Litoral Paulista. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 font-semibold">
            <span className="inline-flex items-center gap-1 text-[#7d5800]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7d5800]" />
              Dados CETESB & ARTESP
            </span>
            <span className="hover:text-[#181a2e] cursor-pointer">Termos de Uso</span>
            <span className="hover:text-[#181a2e] cursor-pointer">Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
