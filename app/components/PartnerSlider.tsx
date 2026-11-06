'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';
import { CONSTANTS } from '@/lib/seo';

const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const SECONDARY_KEYWORD = CONSTANTS.SECONDARY_FOCUS_KEYWORD;
const TERTIARY_KEYWORD = CONSTANTS.TERTIARY_FOCUS_KEYWORD;

export default function PartnerSlider() {
  // -------------------------------------------------------------------------
  // PARTNER LOGOS (Row 1) — Apps & Platforms
  // -------------------------------------------------------------------------
  const partners = [
    { name: 'Amazon Firestick', alt: `Amazon Firestick streaming ${FOCUS_KEYWORD} in 4K` },
    { name: 'Samsung Smart TV', alt: `Samsung Smart TV running the best ${SECONDARY_KEYWORD} service` },
    { name: 'LG Smart TV', alt: `LG Smart TV watching live sports on ${FOCUS_KEYWORD}` },
    { name: 'Apple TV 4K', alt: `Apple TV 4K with the best ${FOCUS_KEYWORD} player` },
    { name: 'Android TV', alt: `Android TV Box streaming 4K Ultra HD with ${FOCUS_KEYWORD}` },
    { name: 'Nvidia Shield', alt: `Nvidia Shield for high-performance ${FOCUS_KEYWORD} streams` },
    { name: 'IBO Player Pro', alt: `IBO Player Pro on the ${FOCUS_KEYWORD} recommended apps list` },
    { name: 'TiviMate Player', alt: `TiviMate IPTV Player for ${FOCUS_KEYWORD} viewers on Smart TV` },
    { name: 'IPTV Extreme', alt: `IPTV Extreme Pro set up for ${FOCUS_KEYWORD} subscribers` },
    { name: 'MAG & Formuler', alt: `MAG and Formuler set-top boxes compatible with ${FOCUS_KEYWORD}` },
  ].map((p, i) => {
    const number = String(i + 1).padStart(2, '0');
    return {
      ...p,
      imagePath: `/img/partners/omniptv-partners-${number}.png`,
      width: 128,
      height: 128,
    };
  });

  // -------------------------------------------------------------------------
  // DEVICE LOGOS (Row 2 - Reverse Slider) — Hardware Devices
  // -------------------------------------------------------------------------
  const devices = [
    { name: 'Samsung Smart TV', imagePath: '/img/devices/samsung.webp', alt: `Samsung Smart TV ${FOCUS_KEYWORD} compatibility` },
    { name: 'Roku Streaming Device', imagePath: '/img/devices/roku.webp', alt: `Roku player for ${FOCUS_KEYWORD} streaming` },
    { name: 'Apple TV 4K', imagePath: '/img/devices/appletv.webp', alt: `Apple TV 4K ${FOCUS_KEYWORD} stream` },
    { name: 'Windows PC', imagePath: '/img/devices/windows.webp', alt: `Windows PC ${FOCUS_KEYWORD} player` },
    { name: 'Amazon Fire TV', imagePath: '/img/devices/firetv.webp', alt: `Fire TV Stick ${FOCUS_KEYWORD} setup` },
    { name: 'Android TV', imagePath: '/img/devices/android.webp', alt: `Android TV Box ${FOCUS_KEYWORD} software` },
    { name: 'Google TV', imagePath: '/img/devices/googletv.webp', alt: `Google TV ${FOCUS_KEYWORD} app` },
    { name: 'LG Smart TV', imagePath: '/img/devices/lg.webp', alt: `LG webOS ${FOCUS_KEYWORD} app` },
    { name: 'Sony Smart TV', imagePath: '/img/devices/sonny.webp', alt: `Sony Bravia Smart TV ${FOCUS_KEYWORD} Ultra HD` },
  ].map((d) => ({
    ...d,
    width: 128,
    height: 128,
  }));

  // Duplicate arrays for seamless infinity looping
  const sliderItems = useMemo(() => [...partners, ...partners], [partners]);
  const deviceItems = useMemo(() => [...devices, ...devices], [devices]);

  // Total animation travel distances
  const animationDistancePartners = partners.length * 150;
  const animationDistanceDevices = devices.length * 150;

  return (
    <div className="w-full relative py-12 bg-[#0A1A2F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm text-[#FFD700] font-black uppercase tracking-widest flex items-center justify-center gap-2">
          <span>Supported {FOCUS_KEYWORD} Apps &amp; Devices</span>
        </p>
      </div>

      {/* Row 1: Forward Slider (Upper Row - Dark Navy Background) */}
      <div className="relative bg-[#0A1A2F] overflow-hidden mb-8 pt-11 border-y border-white/10">
        {/* Blended dark gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#0A1A2F] via-[#0A1A2F]/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#0A1A2F] via-[#0A1A2F]/50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 md:gap-16 items-center w-max"
          animate={{
            x: [0, -animationDistancePartners],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {sliderItems.map((partner, idx) => {
            const isDuplicate = idx >= partners.length;
            const halfLabel = isDuplicate ? 'Repeat' : 'View';
            const position = isDuplicate ? idx - partners.length + 1 : idx + 1;
            const altText = `${partner.alt} – ${halfLabel} ${position} of ${partners.length}`;

            return (
              <div
                key={`partner-${partner.name}-${idx}`}
                className="flex items-center justify-center min-w-[120px] md:min-w-[150px] opacity-80 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
              >
                <div className="relative w-20 h-20 md:w-28 md:h-28">
                  <Image 
                    src={partner.imagePath} 
                    alt={altText} 
                    width={partner.width} 
                    height={partner.height} 
                    className="object-contain" 
                    loading="lazy" 
                    sizes="(max-width: 768px) 80px, 112px" 
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Row 2: Reverse Slider (Lower Row - Light Cool Gray Background) */}
      <div className="relative w-full bg-[#F4F6F9] py-6 overflow-hidden shadow-inner border-y border-black/10">
        {/* Blended light gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#F4F6F9] via-[#F4F6F9]/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#F4F6F9] via-[#F4F6F9]/60 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 md:gap-16 items-center w-max"
          animate={{
            x: [-animationDistanceDevices, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 28,
              ease: 'linear',
            },
          }}
        >
          {deviceItems.map((device, idx) => {
            const isDuplicate = idx >= devices.length;
            const halfLabel = isDuplicate ? 'Repeat' : 'View';
            const position = isDuplicate ? idx - devices.length + 1 : idx + 1;
            const altText = `${device.alt} – ${halfLabel} ${position} of ${devices.length}`;

            return (
              <div
                key={`device-${device.name}-${idx}`}
                className="flex items-center justify-center min-w-[120px] md:min-w-[150px] transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                  <Image 
                    src={device.imagePath} 
                    alt={altText} 
                    width={device.width} 
                    height={device.height} 
                    className="object-contain w-full h-full drop-shadow-sm" 
                    loading="lazy" 
                    sizes="(max-width: 768px) 80px, 112px" 
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}