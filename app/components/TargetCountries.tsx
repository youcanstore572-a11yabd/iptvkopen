'use client';

// Lightweight Circular Vector Flags with unique clip-paths
const FlagNL = () => (
  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full shadow-md shrink-0 ring-2 ring-white/10 group-hover:ring-[#00D4FF] transition-all duration-300" viewBox="0 0 32 32">
    <clipPath id="circle-flag-nl"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#circle-flag-nl)">
      <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
      <path fill="#21468B" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagBE = () => (
  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full shadow-md shrink-0 ring-2 ring-white/10 group-hover:ring-[#00D4FF] transition-all duration-300" viewBox="0 0 32 32">
    <clipPath id="circle-flag-be"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#circle-flag-be)">
      <path fill="#000" d="M0 0h10.7v32H0z" />
      <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagDE = () => (
  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full shadow-md shrink-0 ring-2 ring-white/10 group-hover:ring-[#00D4FF] transition-all duration-300" viewBox="0 0 32 32">
    <clipPath id="circle-flag-de"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#circle-flag-de)">
      <path fill="#000" d="M0 0h32v10.7H0z" />
      <path fill="#D00" d="M0 10.7h32v10.6H0z" />
      <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagNO = () => (
  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full shadow-md shrink-0 ring-2 ring-white/10 group-hover:ring-[#00D4FF] transition-all duration-300" viewBox="0 0 32 32">
    <clipPath id="circle-flag-no"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#circle-flag-no)">
      <path fill="#BA0C2F" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
      <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full shadow-md shrink-0 ring-2 ring-white/10 group-hover:ring-[#00D4FF] transition-all duration-300" viewBox="0 0 32 32">
    <clipPath id="circle-flag-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#circle-flag-ch)">
      <path fill="#D52B1E" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M13 7h6v18h-6zM7 13h18v6H7z" />
    </g>
  </svg>
);

const FlagSE = () => (
  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full shadow-md shrink-0 ring-2 ring-white/10 group-hover:ring-[#00D4FF] transition-all duration-300" viewBox="0 0 32 32">
    <clipPath id="circle-flag-se"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#circle-flag-se)">
      <path fill="#006AA7" d="M0 0h32v32H0z" />
      <path fill="#FECC00" d="M9 0h4v32H9zM0 14h32v4H0z" />
    </g>
  </svg>
);

export default function CountryFlagsBar() {
  const countries = [
    { name: 'Nederland', code: 'NL', flag: FlagNL },
    { name: 'België', code: 'BE', flag: FlagBE },
    { name: 'Duitsland', code: 'DE', flag: FlagDE },
    { name: 'Noorwegen', code: 'NO', flag: FlagNO },
    { name: 'Zwitserland', code: 'CH', flag: FlagCH },
    { name: 'Zweden', code: 'SE', flag: FlagSE },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 my-6 relative z-10">
      <div className="bg-[#132948]/90 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-full py-3 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 shadow-xl">
        
        {/* Label with Cyan Pulse */}
        <div className="flex items-center gap-2 shrink-0 md:pr-4 md:border-r border-white/10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D4FF]" />
          </span>
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#FFFFFF]">
            Populaire Zenders:
          </span>
        </div>

        {/* Responsive Scrollable / Flex Flags Row */}
        <div className="w-full md:w-auto overflow-x-auto scrollbar-none py-1">
          <div className="flex items-center justify-start md:justify-between flex-nowrap md:flex-wrap gap-4 sm:gap-6 min-w-max md:min-w-0">
            {countries.map((c) => {
              const Flag = c.flag;
              return (
                <div
                  key={c.code}
                  className="flex items-center gap-2 group cursor-default transition-all duration-300 hover:scale-105 shrink-0"
                >
                  <Flag />
                  <span className="text-xs sm:text-sm font-bold text-[#F4F6F9]/80 group-hover:text-[#FFD700] transition-colors whitespace-nowrap">
                    {c.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
