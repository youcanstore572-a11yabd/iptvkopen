'use client';

import { FadeIn } from './AnimatedSection';
import { Wifi, Server, ShieldCheck, Zap } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';
import Image from 'next/image';

export default function GlobalServerMap() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0A1A2F] py-16 sm:py-20 lg:py-28"
      aria-label="Global IPTV server coverage map"
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,212,255,0.08),_transparent_65%)] pointer-events-none" />

      <FadeIn className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-none bg-[#132948] border border-[#00D4FF]/30 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#39FF14] shadow-md">
            <Wifi className="h-4 w-4 text-[#39FF14]" />
            Wereldwijd Servernetwerk
          </div>

          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-[#FFFFFF] sm:text-4xl md:text-5xl">
            Wereldwijde Dekking In <span className="text-[#39FF14]">100+ Landen</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#F4F6F9]/90 sm:text-base font-bold">
            Geniet van stabiele 4K IPTV streams met {CONSTANTS.BRAND_NAME}[cite: 6]. Onze supersnelle Europese servers garanderen 99.9% uptime voor live tv, sport en films zonder buffering in heel Nederland[cite: 6].
          </p>
        </div>

        {/* Medium-Sized Map Graphic - NO BORDERS OR BORDER COLORS */}
        <div className="relative mx-auto my-8 max-w-5xl px-4 bg-transparent p-0 shadow-none">
          <Image
            src="/img/global.png"
            alt={`Global IPTV server network coverage map for ${CONSTANTS.BRAND_NAME}`}
            width={1400}
            height={787}
            className="w-full h-auto max-h-[600px] object-contain block mx-auto opacity-95"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-[#132948] border-2 border-white/10 p-6 rounded-none shadow-xl transition-all duration-300 hover:border-[#00D4FF]/50">
            <div className="flex justify-center mb-3">
              <Zap className="h-6 w-6 text-[#39FF14]" />
            </div>
            <h3 className="text-base font-black uppercase text-[#FFFFFF]">Ultra-Lage Latency</h3>
            <p className="text-xs text-[#F4F6F9]/80 mt-1 font-medium">
              Geoptimaliseerde netwerkrouting voor naadloze live sport en direct zender schakelen in Nederland[cite: 6].
            </p>
          </div>

          <div className="bg-[#132948] border-2 border-white/10 p-6 rounded-none shadow-xl transition-all duration-300 hover:border-[#00D4FF]/50">
            <div className="flex justify-center mb-3">
              <Server className="h-6 w-6 text-[#39FF14]" />
            </div>
            <h3 className="text-base font-black uppercase text-[#FFFFFF]">Redundante Servers</h3>
            <p className="text-xs text-[#F4F6F9]/80 mt-1 font-medium">
              Geautomatiseerde failover-systemen zorgen voor consistente levering en ononderbroken prestaties[cite: 6].
            </p>
          </div>

          <div className="bg-[#132948] border-2 border-white/10 p-6 rounded-none shadow-xl transition-all duration-300 hover:border-[#00D4FF]/50">
            <div className="flex justify-center mb-3">
              <ShieldCheck className="h-6 w-6 text-[#39FF14]" />
            </div>
            <h3 className="text-base font-black uppercase text-[#FFFFFF]">99.9% Uptime</h3>
            <p className="text-xs text-[#F4F6F9]/80 mt-1 font-medium">
              24/7 infrastructuurmonitoring voor een betrouwbare en zorgeloze kijkervaring[cite: 6].
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}