'use client';

import Link from "next/link";
import Image from "next/image";
import { CONSTANTS } from "@/lib/seo";
import { channelsData } from "@/lib/zenders-data";
import { Facebook, Instagram, Twitter } from "lucide-react";

// Lightweight Circular Flags (NL, DE, BE, NO, CH) - Updated to rounded-none squares
const FlagNL = () => (
  <svg className="w-5 h-5 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
    <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
    <path fill="#21468B" d="M0 21.3h32V32H0z" />
  </svg>
);

const FlagDE = () => (
  <svg className="w-5 h-5 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <path fill="#000" d="M0 0h32v10.7H0z" />
    <path fill="#D00" d="M0 10.7h32v10.6H0z" />
    <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
  </svg>
);

const FlagBE = () => (
  <svg className="w-5 h-5 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <path fill="#000" d="M0 0h10.7v32H0z" />
    <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
    <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
  </svg>
);

const FlagNO = () => (
  <svg className="w-5 h-5 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <path fill="#BA0C2F" d="M0 0h32v32H0z" />
    <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
    <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <path fill="#D52B1E" d="M0 0h32v32H0z" />
    <path fill="#FFF" d="M13 7h6v18h-6zM7 13h18v6H7z" />
  </svg>
);

const flags = [
  { name: 'Nederland', code: 'NL', component: FlagNL },
  { name: 'Duitsland', code: 'DE', component: FlagDE },
  { name: 'België', code: 'BE', component: FlagBE },
  { name: 'Noorwegen', code: 'NO', component: FlagNO },
  { name: 'Zwitserland', code: 'CH', component: FlagCH },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A1A2F] text-[#FFFFFF]/80 py-16 px-6 lg:px-12 border-t-4 border-[#39FF14] overflow-hidden min-h-[380px]">
      {/* Structural Accent Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#39FF14]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Strict 40% (5 cols) | 20% (2 cols) | 20% (3 cols) | 20% (2 cols) Desktop Distribution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column (~40% on Desktop) */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-3 mb-5 group inline-flex"
                aria-label={`${CONSTANTS.BRAND_NAME} - Home`}
              >
                <div className="w-auto h-12 flex items-center group-hover:scale-105 transition-transform">
                  <Image
                    src="/img/iptv-logo.png"
                    alt={`${CONSTANTS.BRAND_NAME} Logo`}
                    width={180}
                    height={48}
                    className="object-contain h-full w-auto"
                    loading="lazy"
                  />
                </div>
              </Link>

              {/* Description */}
              <p className="text-sm md:text-base font-bold text-[#FFFFFF]/90 max-w-sm leading-relaxed mb-5">
                Ervaar de toekomst van digitale televisie met{" "}
                <strong className="text-[#39FF14]">{CONSTANTS.BRAND_NAME}</strong>. 
                Toonaangevende IPTV streams in Nederland en Europa met meer dan 20.000 live zenders en 60.000+ films en series.
              </p>

              {/* FLAGS UNDER LOGO & DESCRIPTION IN ONE LINE */}
              <div className="inline-flex items-center flex-nowrap gap-2 sm:gap-3 py-1.5 px-3 mb-6 rounded-none bg-white/[0.04] border border-[#39FF14]/40 w-fit">
                <span className="text-[10px] uppercase font-black tracking-wider text-[#FFD700] shrink-0">
                  Focus:
                </span>
                <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                  {flags.map((flag) => {
                    const FlagComp = flag.component;
                    return (
                      <div 
                        key={flag.code} 
                        className="flex items-center gap-1 group cursor-default" 
                        title={flag.name}
                      >
                        <FlagComp />
                        <span className="text-[10px] font-black uppercase text-[#FFFFFF] group-hover:text-[#39FF14] transition-colors">
                          {flag.code}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label={`Volg ${CONSTANTS.BRAND_NAME} op Twitter`}
                className="group w-10 h-10 rounded-none bg-white/[0.03] border border-[#39FF14]/40 flex items-center justify-center hover:bg-[#39FF14] hover:border-[#39FF14] transition-all duration-300"
              >
                <Twitter className="w-4 h-4 text-[#FFD700] group-hover:text-[#0A1A2F] transition-colors" />
              </a>

              <a
                href="#"
                aria-label={`Volg ${CONSTANTS.BRAND_NAME} op Instagram`}
                className="group w-10 h-10 rounded-none bg-white/[0.03] border border-[#39FF14]/40 flex items-center justify-center hover:bg-[#39FF14] hover:border-[#39FF14] transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-[#FFD700] group-hover:text-[#0A1A2F] transition-colors" />
              </a>

              <a
                href="#"
                aria-label={`Volg ${CONSTANTS.BRAND_NAME} op Facebook`}
                className="group w-10 h-10 rounded-none bg-white/[0.03] border border-[#39FF14]/40 flex items-center justify-center hover:bg-[#39FF14] hover:border-[#39FF14] transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-[#FFD700] group-hover:text-[#0A1A2F] transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigatie (~20% on Desktop) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#FFD700] font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#39FF14] pb-1 inline-block">
              Navigatie
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li>
                <Link href="/" className="text-[#FFFFFF]/70 hover:text-[#FFD700] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pakketten" className="text-[#FFFFFF]/70 hover:text-[#FFD700] transition-colors">
                  Pakketten
                </Link>
              </li>
              <li>
                <Link href="/installatie" className="text-[#FFFFFF]/70 hover:text-[#FFD700] transition-colors">
                  Installatie
                </Link>
              </li>
              <li>
                <Link href="/ervaringen" className="text-[#FFFFFF]/70 hover:text-[#FFD700] transition-colors">
                  Reviews & Ervaringen
                </Link>
              </li>
              <li>
                <Link href="/veelgestelde-vragen" className="text-[#FFFFFF]/70 hover:text-[#FFD700] transition-colors">
                  Veelgestelde Vragen
                </Link>
              </li>
              <li>
                <Link href="/kennisbank" className="text-[#FFFFFF]/70 hover:text-[#FFD700] transition-colors">
                  Kennisbank
                </Link>
              </li>
              <li>
                <Link href="/klantenservice" className="text-[#FFFFFF]/70 hover:text-[#FFD700] transition-colors">
                  Klantenservice
                </Link>
              </li>
            </ul>
          </div>

          {/* Centered Zenderpakketten (~20% on Desktop) */}
          <div className="lg:col-span-3">
            <h3 className="text-[#FFD700] font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#39FF14] pb-1 inline-block">
              Zenderpakketten
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {channelsData.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/zenders/${category.slug}`}
                    className="text-[#FFFFFF]/70 hover:text-[#FFD700] transition-colors block"
                  >
                    {category.name.replace(/\s*\([^)]*\)/g, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Juridisch (~20% on Desktop) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#FFD700] font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#39FF14] pb-1 inline-block">
              Juridisch
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li>
                <Link href="/over-ons" className="text-[#FFFFFF]/70 hover:text-[#FFD700] transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/voorwaarden" className="text-[#FFFFFF]/70 hover:text-[#FFD700] transition-colors">
                  Voorwaarden
                </Link>
              </li>
              <li>
                <Link href="/privacybeleid" className="text-[#FFFFFF]/70 hover:text-[#FFD700] transition-colors">
                  Privacybeleid
                </Link>
              </li>
              <li>
                <Link href="/garantiebeleid" className="text-[#FFFFFF]/70 hover:text-[#FFD700] transition-colors">
                  Garantiebeleid
                </Link>
              </li>
              <li>
                <Link href="/dmca-beleid" className="text-[#FFFFFF]/70 hover:text-[#FFD700] transition-colors">
                  DMCA Beleid
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar Payment & Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#FFFFFF]/60 font-bold text-center md:text-left">
          © {new Date().getFullYear()} {CONSTANTS.BRAND_NAME}. Alle rechten voorbehouden.
        </p>

        <div className="flex items-center gap-3 flex-wrap justify-center">
          {[
            { src: "/img/payment/1.png", alt: "PayPal" },
            { src: "/img/payment/2.png", alt: "Bitcoin & Crypto" },
            { src: "/img/payment/3.png", alt: "Visa" },
            { src: "/img/payment/4.png", alt: "Mastercard" },
          ].map((item) => (
            <div
              key={item.alt}
              className="relative h-9 w-14 flex-shrink-0 rounded-none border border-[#39FF14]/40 bg-white/[0.03] backdrop-blur-sm flex items-center justify-center hover:border-[#FFD700] hover:bg-[#39FF14]/10 transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain p-1 opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="56px"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}