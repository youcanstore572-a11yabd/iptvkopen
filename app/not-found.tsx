'use client';

import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import { Home, ArrowLeft, Search, Tv, Film } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden justify-center items-center bg-[#000000]">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/error-404.webp"
          alt={`${CONSTANTS.BRAND_NAME} - Page Not Found Background`}
          className="w-full h-full object-cover opacity-95 brightness-50"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1920&auto=format";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/90 via-[#000000]/70 to-[#000000]/90" />
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#39FF14]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

      {/* Main Container Perfectly Centered Vertically & Horizontally */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
        <div className="max-w-3xl mx-auto">
          
          {/* 404 Number Layout Container */}
          <div className="mb-6">
            <div className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tighter uppercase select-none">
              <span className="text-[#39FF14]">4</span>
              <span className="text-[#FFFFFF]">0</span>
              <span className="text-[#39FF14]">4</span>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tighter">
            Pagina Niet Gevonden
          </h1>
          
          <div className="w-24 h-1.5 bg-[#39FF14] mx-auto mb-8 rounded-2xl" />
          
          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <Link
              href="/"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#111111] border-2 border-white/10 hover:border-[#39FF14] transition-all duration-300 shadow-xl"
            >
              <Home className="w-5 h-5 text-[#39FF14] group-hover:scale-110 transition-transform" />
              <span className="text-[#FFFFFF] text-xs font-black uppercase tracking-wider">Home</span>
            </Link>
            
            <Link
              href="/pricing"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#111111] border-2 border-white/10 hover:border-[#39FF14] transition-all duration-300 shadow-xl"
            >
              <Tv className="w-5 h-5 text-[#39FF14] group-hover:scale-110 transition-transform" />
              <span className="text-[#FFFFFF] text-xs font-black uppercase tracking-wider">Prijzen</span>
            </Link>
            
            <Link
              href="/installatie"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#111111] border-2 border-white/10 hover:border-[#39FF14] transition-all duration-300 shadow-xl"
            >
              <Film className="w-5 h-5 text-[#39FF14] group-hover:scale-110 transition-transform" />
              <span className="text-[#FFFFFF] text-xs font-black uppercase tracking-wider">Setup</span>
            </Link>
            
            <Link
              href="/kennisbank"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#111111] border-2 border-white/10 hover:border-[#39FF14] transition-all duration-300 shadow-xl"
            >
              <Search className="w-5 h-5 text-[#39FF14] group-hover:scale-110 transition-transform" />
              <span className="text-[#FFFFFF] text-xs font-black uppercase tracking-wider">Kennisbank</span>
            </Link>
          </div>

          {/* Main Action Control Elements */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#39FF14] text-[#000000] font-black uppercase tracking-widest text-sm transition-all hover:scale-105 shrink-0 shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] border border-green-300 hover:bg-[#FFFFFF]"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              Terug naar Home
            </Link>
            
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#000000] text-[#FFFFFF] font-black uppercase tracking-widest text-sm transition-all hover:scale-105 shrink-0 shadow-xl border-2 border-[#39FF14] hover:bg-[#39FF14] hover:text-[#000000]"
            >
              Bekijk Prijzen
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}