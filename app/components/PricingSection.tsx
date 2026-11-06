// components/PricingSection.tsx
'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { Check, Zap, Crown, MonitorPlay, Gift, Sparkles, Star, ShoppingCart } from 'lucide-react';

export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  // Official authoritative Euro pricing structure
  const pricing = {
    1: {
      3: { total: 35, mo: (35 / 3).toFixed(2), benefit: '' },
      6: { total: 45, mo: (45 / 6).toFixed(2), benefit: '' },
      12: { total: 75, mo: (75 / 12).toFixed(2), benefit: 'Gratis IPTV speler voor 12 maanden' },
    },
    2: {
      3: { total: 59, mo: (59 / 3).toFixed(2), benefit: '' },
      6: { total: 59, mo: (59 / 6).toFixed(2), benefit: '' },
      12: { total: 99, mo: (99 / 12).toFixed(2), benefit: 'Gratis IPTV speler voor 12 maanden voor 2 schermen' },
    },
    3: {
      3: { total: 69, mo: (69 / 3).toFixed(2), benefit: '' },
      6: { total: 79, mo: (79 / 6).toFixed(2), benefit: '' },
      12: { total: 129, mo: (129 / 12).toFixed(2), benefit: 'Gratis IPTV speler voor 12 maanden voor 3 schermen' },
    },
  };

  const currentPricing = pricing[devices] || pricing[1];

  const handleWhatsAppRedirect = (months: number) => {
    const message = `Hallo, ik wil graag een service-abonnement van ${months} maanden bestellen voor ${devices} ${
      devices > 1 ? 'schermen' : 'scherm'
    }.`;
    const redirectUrl = `https://support-tv.online/?text=${encodeURIComponent(message)}`;
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
  };

  const handleFreeTrialRedirect = () => {
    const message = `Hallo, ik wil graag een gratis test aanvragen voor jullie service in Nederland`;
    const redirectUrl = `https://support-tv.online/?text=${encodeURIComponent(message)}`;
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="pricing-section" 
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 scroll-mt-20 bg-[#0A1A2F]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#008000] px-4 py-2 rounded-none mb-6 shadow-md border border-[#FFD700]/30">
          <Crown className="w-4 h-4 text-[#FFD700]" />
          <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
            Beste Prijs-Kwaliteitverhouding voor IPTV Kopen
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight">
          KIES UW <span className="text-[#FFD700]">IPTV ABONNEMENT</span>
        </h2>
        <p className="text-base sm:text-lg text-[#F4F6F9] mb-10 max-w-2xl mx-auto leading-relaxed font-bold px-2">
          Kies de gewenste abonnementsduur. Profiteer van maximale voordelen bij jaarplannen en stream tegelijkertijd op meerdere schermen in uw huishouden in heel Nederland.
        </p>

        <div className="flex flex-col items-center justify-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-[#FFD700]" />
            <span className="text-sm text-[#FFFFFF] font-black uppercase tracking-widest">
              Aantal Verbindingen / Schermen
            </span>
          </div>
          <div className="inline-flex flex-wrap justify-center bg-[#0A1A2F] border-2 border-[#FFD700] rounded-none p-2 relative shadow-xl gap-1 sm:gap-2">
            {[1, 2, 3].map((d) => (
              <button 
                key={d}
                onClick={() => setDevices(d as 1 | 2 | 3)}
                className={`px-4 sm:px-8 py-2 md:py-3 text-xs sm:text-base font-black tracking-wider uppercase cursor-pointer transition-all duration-300 ${
                  devices === d 
                    ? 'bg-[#FFD700] text-[#0A1A2F] rounded-2xl shadow-[0_8px_25px_rgba(255,215,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.2)] border border-yellow-200' 
                    : 'text-[#F4F6F9] hover:text-[#0A1A2F] hover:bg-[#FFD700]/70 rounded-none'
                }`}
              >
                {d} {d > 1 ? 'Schermen' : 'Scherm'}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mt-16 relative">
        
        {/* 3 Months Plan */}
        <FadeInItem className="bg-[#FFFFFF] border-4 border-white/20 rounded-none p-6 md:p-8 flex flex-col group relative overflow-hidden shadow-2xl text-[#0A1A2F]">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black text-[#008000] uppercase tracking-[0.2em]">Starter</h3>
              <MonitorPlay className="w-5 h-5 text-[#FFD700]" />
            </div>
            <div className="text-3xl font-black text-[#0A1A2F] mb-2 tracking-tighter uppercase">3 Maanden</div>
            
            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-5xl font-black text-[#0A1A2F] tracking-tighter">
                €{currentPricing[3]?.total || 0}
              </span>
            </div>
            <div className="text-xs font-black text-[#FFFFFF] mb-6 uppercase tracking-widest border-2 border-[#008000] self-start px-3 py-1.5 rounded-none inline-block bg-[#008000] shadow-md">
              Slechts €{currentPricing[3]?.mo || 0} / mnd
            </div>

            {/* Liquid Watery 3D Pill Button matching the uploaded image style */}
            <div className="w-full flex mb-8">
              <button 
                onClick={() => handleWhatsAppRedirect(3)}
                className="w-full text-center whitespace-nowrap px-6 py-4 rounded-2xl bg-[#FFD700] text-[#0A1A2F] font-black text-sm uppercase tracking-widest cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:bg-[#e6c200] active:scale-[0.98] shadow-[0_10px_30px_rgba(255,215,0,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,0,0,0.2)] border border-yellow-200 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4 text-[#0A1A2F]" />
                <span>Kies 3 Maanden</span>
              </button>
            </div>
            
            <ul className="w-full space-y-3 flex-grow relative">
              {[
                `${devices} Gelijktijdige ${devices > 1 ? 'schermen' : 'verbinding'}`,
                'Haarscherpe 4K Ultra HD & Full HD',
                '20.000+ Nationale & Internationale Zenders',
                '60.000+ Films & Series (Dagelijks Bijgewerkt)',
                'Alle Sportzenders (Viaplay, Ziggo Sport, ESPN)',
                'Volledige TV-Gids (EPG) & 7 Dagen Terugkijken',
                'Anti-Freeze & Anti-Buffer VIP Servers',
                'Geschikt voor Smart TV, Firestick, Android & iOS',
                '24/7 VIP Klantenservice via WhatsApp',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#0A1A2F] text-sm font-bold">
                  <span className="w-5 h-5 bg-[#008000] rounded-none flex items-center justify-center shrink-0 shadow-md">
                    <Check className="w-3.5 h-3.5 text-[#FFFFFF] stroke-[3]" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInItem>

        {/* 12 Months Plan (Most Popular) */}
        <FadeInItem className="relative bg-[#FFFFFF] border-4 border-[#FFD700] rounded-none p-6 md:p-10 flex flex-col transform lg:-translate-y-4 shadow-[0_0_50px_rgba(255,215,0,0.3)] z-20 group overflow-visible mt-6 lg:mt-0 text-[#0A1A2F]">
          
          {/* Centered Half-In / Half-Out Top Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
            <div className="bg-[#FFD700] text-[#0A1A2F] text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-2xl flex items-center gap-1.5 border-2 border-[#FFFFFF] shadow-xl whitespace-nowrap">
              <Sparkles className="w-4 h-4 text-[#0A1A2F]" /> MEEST GEKOZEN
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col h-full pt-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black text-[#008000] uppercase tracking-[0.2em]">Beste Waarde</h3>
              <Star className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
            </div>
            <div className="text-3xl font-black text-[#0A1A2F] mb-2 tracking-tighter uppercase">12 Maanden</div>
            
            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-6xl font-black text-[#0A1A2F] tracking-tighter">
                €{currentPricing[12]?.total || 0}
              </span>
            </div>
            
            <div className="text-xs font-black text-[#FFFFFF] mb-4 uppercase tracking-widest border-2 border-[#008000] self-start px-4 py-2 rounded-none inline-block bg-[#008000] shadow-md">
              Slechts €{currentPricing[12]?.mo || 0} / mnd
            </div>

            {/* Gift Banner */}
            {currentPricing[12]?.benefit && (
              <div className="w-full mb-6 bg-[#F4F6F9] border-2 border-[#008000] p-3.5 rounded-none flex items-center gap-3 shadow-xl">
                <div className="bg-[#008000] p-2 rounded-none shrink-0 shadow-md">
                  <Gift className="w-5 h-5 text-[#FFFFFF]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-[#0A1A2F] uppercase tracking-wide leading-tight">
                    {currentPricing[12].benefit}
                  </span>
                </div>
              </div>
            )}

            {/* Liquid Watery 3D Pill Button matching the uploaded image style */}
            <div className="w-full flex mb-8">
              <button 
                onClick={() => handleWhatsAppRedirect(12)}
                className="w-full text-center whitespace-nowrap px-6 py-4 cursor-pointer rounded-2xl bg-[#FFD700] text-[#0A1A2F] font-black text-base uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] hover:bg-[#e6c200] active:scale-[0.98] shadow-[0_12px_35px_rgba(255,215,0,0.55),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,0,0,0.2)] border border-yellow-200 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5 text-[#0A1A2F]" />
                <span>Bestel 12 Maanden</span>
              </button>
            </div>

            <ul className="w-full space-y-3 flex-grow relative">
              {[
                `${devices} Gelijktijdige ${devices > 1 ? 'schermen' : 'verbinding'}`,
                'Haarscherpe 4K Ultra HD & Full HD',
                '20.000+ Nationale & Internationale Zenders',
                '60.000+ Films & Series (Dagelijks Bijgewerkt)',
                'Alle Sportzenders (Viaplay, Ziggo Sport, ESPN)',
                'Volledige TV-Gids (EPG) & 7 Dagen Terugkijken',
                'Anti-Freeze & Anti-Buffer VIP Servers',
                'Geschikt voor Smart TV, Firestick, Android & iOS',
                '24/7 VIP Klantenservice via WhatsApp',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#0A1A2F] font-bold text-sm">
                  <span className="w-5 h-5 bg-[#008000] rounded-none flex items-center justify-center shrink-0 shadow-md">
                    <Check className="w-3.5 h-3.5 text-[#FFFFFF] stroke-[3]" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInItem>

        {/* 6 Months Plan */}
        <FadeInItem className="bg-[#FFFFFF] border-4 border-white/20 rounded-none p-6 md:p-8 flex flex-col group relative overflow-hidden shadow-2xl text-[#0A1A2F]">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black text-[#008000] uppercase tracking-[0.2em]">Populair</h3>
              <MonitorPlay className="w-5 h-5 text-[#FFD700]" />
            </div>
            <div className="text-3xl font-black text-[#0A1A2F] mb-2 tracking-tighter uppercase">6 Maanden</div>
            
            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-5xl font-black text-[#0A1A2F] tracking-tighter">
                €{currentPricing[6]?.total || 0}
              </span>
            </div>
            <div className="text-xs font-black text-[#FFFFFF] mb-6 uppercase tracking-widest border-2 border-[#008000] self-start px-3 py-1.5 rounded-none inline-block bg-[#008000] shadow-md">
              Slechts €{currentPricing[6]?.mo || 0} / mnd
            </div>

            {/* Liquid Watery 3D Pill Button matching the uploaded image style */}
            <div className="w-full flex mb-8">
              <button 
                onClick={() => handleWhatsAppRedirect(6)}
                className="w-full text-center whitespace-nowrap px-6 py-4 rounded-2xl bg-[#FFD700] text-[#0A1A2F] font-black text-sm uppercase tracking-widest cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:bg-[#e6c200] active:scale-[0.98] shadow-[0_10px_30px_rgba(255,215,0,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,0,0,0.2)] border border-yellow-200 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4 text-[#0A1A2F]" />
                <span>Kies 6 Maanden</span>
              </button>
            </div>
            
            <ul className="w-full space-y-3 flex-grow relative">
              {[
                `${devices} Gelijktijdige ${devices > 1 ? 'schermen' : 'verbinding'}`,
                'Haarscherpe 4K Ultra HD & Full HD',
                '20.000+ Nationale & Internationale Zenders',
                '60.000+ Films & Series (Dagelijks Bijgewerkt)',
                'Alle Sportzenders (Viaplay, Ziggo Sport, ESPN)',
                'Volledige TV-Gids (EPG) & 7 Dagen Terugkijken',
                'Anti-Freeze & Anti-Buffer VIP Servers',
                'Geschikt voor Smart TV, Firestick, Android & iOS',
                '24/7 VIP Klantenservice via WhatsApp',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#0A1A2F]/80 text-sm font-bold">
                  <span className="w-5 h-5 bg-[#008000] rounded-none flex items-center justify-center shrink-0 shadow-md">
                    <Check className="w-3.5 h-3.5 text-[#FFFFFF] stroke-[3]" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInItem>
      </FadeInStagger>

      {/* Standalone Horizontal Full-Width Card */}
      <FadeIn className="max-w-2xl mx-auto mt-12 relative z-30 px-2 sm:px-0">
        <div className="bg-[#FFFFFF] border-4 border-[#008000] rounded-none p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl text-[#0A1A2F]">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="bg-[#008000] p-2.5 rounded-none text-[#FFFFFF] shrink-0 hidden sm:block shadow-md">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-[#0A1A2F] uppercase tracking-tight">
                Gratis IPTV Test Aanvragen?
              </h4>
              <p className="text-xs text-[#0A1A2F]/70 font-bold">
                Test eerst onze zenders en 4K beeldkwaliteit geheel vrijblijvend voor IPTV Nederland.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <button 
              onClick={handleFreeTrialRedirect}
              className="w-full md:w-auto text-center whitespace-nowrap px-8 py-3.5 rounded-2xl bg-[#FFD700] text-[#0A1A2F] font-black text-sm uppercase tracking-widest cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:bg-[#e6c200] active:scale-[0.98] shadow-[0_10px_30px_rgba(255,215,0,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,0,0,0.2)] border border-yellow-200 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4 text-[#0A1A2F]" />
              <span>Test Nu Gratis</span>
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}