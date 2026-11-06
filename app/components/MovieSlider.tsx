// components/MovieSlider.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';

const movies = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `movie-${i}`,
    imagePath: `/img/sliders/movies/omniptv-movies-${number}`,
  };
});

const series = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `series-${i}`,
    imagePath: `/img/sliders/series/omniptv-serie-${number}`,
  };
});

const sports = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `sport-${i}`,
    imagePath: `/img/sliders/sports/omniptv-sports-${number}`,
  };
});

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const InfiniteSlider = ({
  items,
  direction = 'left',
  speed = 50,
  category,
}: {
  items: any[];
  direction?: 'left' | 'right';
  speed?: number;
  category: string;
}) => {
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>({});
  const infiniteItems = useMemo(() => [...items, ...items], [items]);
  const duration = (items.length * speed) / 10;

  return (
    <div className="relative w-full overflow-hidden" aria-hidden="true">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0A1A2F] via-[#0A1A2F]/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0A1A2F] via-[#0A1A2F]/50 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex w-max gap-3 md:gap-4"
        animate={{ x: direction === 'left' ? [0, '-50%'] : ['-50%', 0] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration, ease: 'linear' }}
      >
        {infiniteItems.map((item, idx) => (
          <button
            key={`${item.id}-${idx}`}
            onClick={scrollToPricing}
            tabIndex={idx >= items.length ? -1 : 0}
            aria-hidden="true"
            className="flex-shrink-0 w-28 sm:w-32 md:w-44 lg:w-48 block cursor-pointer group text-left bg-transparent border-none p-0"
          >
            <div className="relative aspect-[2/3] rounded-none overflow-hidden bg-[#0A1A2F] border-2 border-[#39FF14] shadow-xl">
              {!failedImages[`${item.id}-${idx}`] ? (
                <Image
                  src={`${item.imagePath}.webp`}
                  alt=""
                  width={192}
                  height={288}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  aria-hidden="true"
                  onError={() =>
                    setFailedImages((prev) => ({ ...prev, [`${item.id}-${idx}`]: true }))
                  }
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#39FF14]">
                  <span className="text-[#0A1A2F] text-xs font-bold uppercase">{category}</span>
                </div>
              )}
            </div>
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default function MovieSlider() {
  return (
    <section className="w-full py-16 bg-[#0A1A2F]" aria-label="Media overzicht">
      {/* Movies Row */}
      <div className="mb-12">
        <div className="w-[80%] mx-auto px-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-7 bg-[#39FF14] rounded-none" />
            <h3 className="text-2xl lg:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight">
              Nieuwste Bioscoopfilms
            </h3>
          </div>
          <p className="text-[#FFD700] text-sm mt-2 font-bold hidden md:block">
            Stream de nieuwste blockbusters en films in 4K beeldkwaliteit met Nederlandse ondertiteling.
          </p>
        </div>
        <InfiniteSlider items={movies} direction="left" speed={45} category="Film" />
      </div>

      {/* Series Row */}
      <div className="py-6 my-6 bg-[#008000] ">
        <div className="w-[80%]  mx-auto px-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-7 bg-[#fff] rounded-none" />
            <h3 className="text-2xl lg:text-3xl font-black text-[#ffff] uppercase tracking-tight">
              Populaire Series & VOD
            </h3>
          </div>
          <p className="text-[#fff]/90 text-sm mt-2 font-bold hidden md:block">
            Bekijk complete seizoenen van Netflix, HBO Max, Disney+ en meer zonder extra kosten.
          </p>
        </div>
        <InfiniteSlider items={series} direction="right" speed={40} category="Serie" />
      </div>

      {/* Sports Row */}
      <div>
        <div className="w-[80%] mx-auto px-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-7 bg-[#FFD700] rounded-none" />
            <h3 className="text-2xl lg:text-3xl font-black text-[#FFD700] uppercase tracking-tight">
              Live Sport & Wedstrijden
            </h3>
          </div>
          <p className="text-[#FFFFFF] text-sm mt-2 font-bold hidden md:block">
            Live toegang tot de Eredivisie, Formule 1, Champions League, Viaplay, Ziggo Sport en UFC PPV.
          </p>
        </div>
        <InfiniteSlider items={sports} direction="left" speed={50} category="Sport" />
      </div>
    </section>
  );
}