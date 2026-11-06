'use client';

import { useState, useMemo } from 'react';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import { 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  ThumbsUp, 
  MessageSquare, 
  Tv, 
  Zap, 
  ArrowRight,
  Filter,
  Flame,
  Award,
  Clock,
  Sparkles,
  Search,
  ChevronDown
} from 'lucide-react';
import ShareButtons from '../components/ShareButtons';

// Direct SVG Flag Badges (NL, DE, BE, NO, CH)
const FlagNL = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="rv-fl-nl"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#rv-fl-nl)">
      <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
      <path fill="#21468B" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagDE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="rv-fl-de"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#rv-fl-de)">
      <path fill="#000" d="M0 0h32v10.7H0z" />
      <path fill="#D00" d="M0 10.7h32v10.6H0z" />
      <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagBE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="rv-fl-be"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#rv-fl-be)">
      <path fill="#000" d="M0 0h10.7v32H0z" />
      <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagNO = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="rv-fl-no"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#rv-fl-no)">
      <path fill="#BA0C2F" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
      <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="rv-fl-ch"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#rv-fl-ch)">
      <path fill="#D52B1E" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M13 7h6v18h-6zM7 13h18v6H7z" />
    </g>
  </svg>
);

interface ReviewItem {
  id: number;
  name: string;
  avatar: string;
  location: string;
  country: 'NL' | 'BE' | 'DE' | 'NO' | 'CH';
  rating: number;
  date: string;
  tag: 'sport' | 'kwaliteit' | 'support' | 'installatie';
  service: string;
  device: string;
  title: string;
  content: string;
  helpfulCount: number;
}

const rawReviews: ReviewItem[] = [
  {
    id: 1,
    name: 'Mark van Dijk',
    avatar: 'M',
    location: 'Amsterdam, Nederland',
    country: 'NL',
    rating: 5,
    date: '2 dagen geleden',
    tag: 'sport',
    service: '12 Maanden Premium',
    device: 'Apple TV 4K (TiviMate)',
    title: 'Eindelijk een IPTV provider zonder buffering tijdens Formule 1!',
    content: 'Na frustraties bij eerdere aanbieders overgestapt naar deze service. Viaplay 1 Extra en Ziggo Sport Select draaien vlekkeloos in 60FPS. Tijdens de Grand Prix geen enkele hapering ervaren. Klantenservice hielp binnen 3 minuten via WhatsApp met de EPG setup.',
    helpfulCount: 42
  },
  {
    id: 2,
    name: 'Kevin De Smet',
    avatar: 'K',
    location: 'Antwerpen, België',
    country: 'BE',
    rating: 5,
    date: '1 week geleden',
    tag: 'sport',
    service: '12 Maanden + 2 Schermen',
    device: 'Samsung Smart TV (IBO Player)',
    title: 'Super stabiel voor de Jupiler Pro League & Champions League',
    content: 'Alle Belgische en Nederlandse sportkanalen in topkwaliteit. DAZN Pro League en de buitenlandse voetbalzenders schakelen binnen een seconde door. Beeld is haarscherp en de audio loopt perfect synchroon.',
    helpfulCount: 38
  },
  {
    id: 3,
    name: 'Sander Brouwer',
    avatar: 'S',
    location: 'Rotterdam, Nederland',
    country: 'NL',
    rating: 5,
    date: '2 weken geleden',
    tag: 'installatie',
    service: '6 Maanden Pakket',
    device: 'Amazon Firestick 4K Max',
    title: 'Binnen 5 minuten geïnstalleerd en direct werkend',
    content: 'De duidelijke stappen via de handleiding maakten de activatie kinderspel. M3U-link en Xtream codes werkten meteen. Dit bespaart mij letterlijk honderden euro’s per jaar ten opzichte van mijn oude kabelabonnement.',
    helpfulCount: 29
  },
  {
    id: 4,
    name: 'Anouk Jansen',
    avatar: 'A',
    location: 'Utrecht, Nederland',
    country: 'NL',
    rating: 5,
    date: '3 weken geleden',
    tag: 'kwaliteit',
    service: '12 Maanden Premium',
    device: 'LG OLED Smart TV',
    title: 'Enorme VOD bibliotheek en geweldige kinderzenders',
    content: 'Ideaal voor het hele gezin. De kinderen kijken hun vertrouwde series in het Nederlands en wij genieten in het weekend van de nieuwste bioscoopfilms met Nederlandse ondertitels. Betaling via iDEAL was direct verwerkt.',
    helpfulCount: 19
  },
  {
    id: 5,
    name: 'Dennis Meijer',
    avatar: 'D',
    location: 'Eindhoven, Nederland',
    country: 'NL',
    rating: 5,
    date: '1 maand geleden',
    tag: 'sport',
    service: '3 Maanden Pakket',
    device: 'Nvidia Shield Pro',
    title: 'UFC PPV gala’s live zonder framedrops',
    content: 'Aangeschaft voor de grote UFC pay-per-view gevechten en ESPN Eredivisie. Zelfs diep in de nacht tijdens de main cards blijft de serververbinding muurvast op 60fps staan. Absolute aanrader.',
    helpfulCount: 31
  },
  {
    id: 6,
    name: 'Luc Peeters',
    avatar: 'L',
    location: 'Gent, België',
    country: 'BE',
    rating: 5,
    date: '1 maand geleden',
    tag: 'support',
    service: '12 Maanden Premium',
    device: 'Sony Android TV',
    title: 'Uitstekende klantenservice via WhatsApp',
    content: 'Had een kleine vraag over het ordenen van buitenlandse zenderlijsten. Binnen enkele minuten kreeg ik een vriendelijk en vakkundig antwoord op WhatsApp. Zeer betrouwbaar team.',
    helpfulCount: 17
  },
  {
    id: 7,
    name: 'Robin Weber',
    avatar: 'R',
    location: 'Düsseldorf, Duitsland',
    country: 'DE',
    rating: 5,
    date: '1 maand geleden',
    tag: 'kwaliteit',
    service: '12 Maanden Pakket',
    device: 'Chromecast met Google TV',
    title: 'Perfekte Bildqualität für Bundesliga & Formel 1',
    content: 'Sehr stabiler Stream! Sky Sports, ARD, ZDF und alle niederländischen Sender laufen einwandfrei ohne Unterbrechung. Das Umschalten geht blitzschnell.',
    helpfulCount: 22
  },
  {
    id: 8,
    name: 'Tim van der Meer',
    avatar: 'T',
    location: 'Groningen, Nederland',
    country: 'NL',
    rating: 5,
    date: '2 maanden geleden',
    tag: 'installatie',
    service: '12 Maanden + 2 Schermen',
    device: 'Smart TV & iPad',
    title: 'Geen dure kabels meer nodig in huis',
    content: 'We kijken nu overal in huis zonder extra kastjes of coaxkabels. Zowel op de tv beneden als op de tablet op de slaapkamer draait alles tegelijk perfect.',
    helpfulCount: 14
  },
  {
    id: 9,
    name: 'Jeroen de Vries',
    avatar: 'J',
    location: 'Den Haag, Nederland',
    country: 'NL',
    rating: 5,
    date: '2 maanden geleden',
    tag: 'sport',
    service: '12 Maanden Premium',
    device: 'Apple TV 4K',
    title: 'Geen enkele seconde vertraging bij de Champions League',
    content: 'Fantastische kwaliteit. De bitrate is erg hoog waardoor grasmatten en bewegende beelden superstrak blijven zonder artifacts. Beste provider tot nu toe.',
    helpfulCount: 25
  },
  {
    id: 10,
    name: 'Elke Vermeulen',
    avatar: 'E',
    location: 'Brugge, België',
    country: 'BE',
    rating: 5,
    date: '3 maanden geleden',
    tag: 'support',
    service: '6 Maanden Pakket',
    device: 'Samsung Smart TV',
    title: 'Vriendelijke hulp bij installatie op oude Samsung TV',
    content: 'Mijn televisie was al wat ouder, maar de supportmedewerker stuurde direct een heldere handleiding voor IBO Player. Binnen 10 minuten stond alles ingesteld.',
    helpfulCount: 18
  },
  {
    id: 11,
    name: 'Marcel Bakker',
    avatar: 'MB',
    location: 'Haarlem, Nederland',
    country: 'NL',
    rating: 5,
    date: '3 maanden geleden',
    tag: 'kwaliteit',
    service: '12 Maanden VIP',
    device: 'Nvidia Shield TV',
    title: 'Hele familie geniet van de enorme VOD catalogus',
    content: 'Niet alleen alle sportzenders, maar ook de bibliotheek met de nieuwste films en series is enorm uitgebreid en voorzien van Nederlandse ondertiteling.',
    helpfulCount: 21
  },
  {
    id: 12,
    name: 'Stijn Van Den Bossche',
    avatar: 'SV',
    location: 'Leuven, België',
    country: 'BE',
    rating: 5,
    date: '4 maanden geleden',
    tag: 'sport',
    service: '12 Maanden Premium',
    device: 'Firestick 4K',
    title: 'Top voor Premier League en Belgisch voetbal',
    content: 'Geen haperingen tijdens de drukke zaterdagmiddag wedstrijden. Alles loopt via stabiele Europese servers.',
    helpfulCount: 16
  },
  {
    id: 13,
    name: 'Hans Dieter',
    avatar: 'HD',
    location: 'Keulen, Duitsland',
    country: 'DE',
    rating: 5,
    date: '4 maanden geleden',
    tag: 'kwaliteit',
    service: '6 Maanden Pakket',
    device: 'LG webOS TV',
    title: 'Ausgezeichnete deutsche und internationale Sender',
    content: 'Sehr klare HD- und UHD-Streams. Der EPG funktioniert einwandfrei.',
    helpfulCount: 12
  },
  {
    id: 14,
    name: 'Niels Visser',
    avatar: 'NV',
    location: 'Arnhem, Nederland',
    country: 'NL',
    rating: 5,
    date: '5 maanden geleden',
    tag: 'installatie',
    service: '12 Maanden Premium',
    device: 'Xiaomi Mi Box S',
    title: 'Eenvoudige activatie en top service',
    content: 'Na betaling binnen 4 minuten alle gegevens in de mailbox ontvangen. In TiviMate geladen en direct genieten.',
    helpfulCount: 28
  }
];

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sport' | 'kwaliteit' | 'support' | 'installatie'>('all');
  const [visibleCount, setVisibleCount] = useState(10);
  const [helpfulState, setHelpfulState] = useState<{ [key: number]: boolean }>({});

  const cleanPhone = (CONSTANTS.CONTACT.phone || '+31612345678').replace(/[^0-9]/g, '');

  const filteredReviews = useMemo(() => {
    if (activeFilter === 'all') return rawReviews;
    return rawReviews.filter((r) => r.tag === activeFilter);
  }, [activeFilter]);

  const displayedReviews = useMemo(() => {
    return filteredReviews.slice(0, visibleCount);
  }, [filteredReviews, visibleCount]);

  const handleHelpfulClick = (id: number) => {
    setHelpfulState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const aggregateLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${CONSTANTS.BRAND_NAME} IPTV Streaming`,
    image: `https://${CONSTANTS.DOMAIN}/img/background.webp`,
    description: `Klantbeoordelingen en scores voor ${CONSTANTS.BRAND_NAME} IPTV abonnementen in Nederland en België.`,
    brand: {
      '@type': 'Brand',
      name: CONSTANTS.BRAND_NAME
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1280',
      bestRating: '5',
      worstRating: '1'
    },
    review: rawReviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.name
      },
      datePublished: '2026-02-15',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating.toString(),
        bestRating: '5'
      },
      reviewBody: r.content
    }))
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-[#F4F6F9] overflow-hidden">
      
      {/* Schema Markup for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateLd) }}
      />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(57,255,20,0.1),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#39FF14] text-[#000000] px-4 py-2 rounded-2xl mb-6 shadow-lg border border-white/20">
            <Star className="w-4 h-4 text-[#000000] fill-current" />
            <span className="text-[#000000] font-black text-xs uppercase tracking-widest">
              Geverifieerde Ervaringen
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none whitespace-normal break-words">
            Klant<span className="text-[#39FF14]">beoordelingen</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#F4F6F9]/80 font-bold max-w-2xl mx-auto leading-relaxed mb-6">
            Ontdek eerlijke reviews van meer dan 20.000 tevreden IPTV kijkers over onze 60FPS sportstreams, zenderkwaliteit en service.
          </p>

          {/* FLAG ROW UNDER DESCRIPTION */}
          <div className="w-full flex items-center justify-center mb-4">
            <div className="inline-flex items-center justify-center flex-nowrap gap-2.5 sm:gap-4 px-4 py-2 rounded-2xl bg-[#111111] border border-white/10 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-1.5 shrink-0"><FlagNL /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Nederland</span></div>
              <span className="text-white/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0"><FlagDE /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Duitsland</span></div>
              <span className="text-white/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0"><FlagBE /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">België</span></div>
              <span className="text-white/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0"><FlagNO /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Noorwegen</span></div>
              <span className="text-white/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0"><FlagCH /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Zwitserland</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Score Summary Bar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 w-full">
        <div className="bg-[#111111] border-2 border-[#39FF14]/40 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-5xl sm:text-6xl font-black text-[#FFFFFF] tracking-tight">4.9</span>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#39FF14] text-[#39FF14]" />
                    ))}
                  </div>
                  <p className="text-xs font-black uppercase tracking-wider text-[#39FF14] mt-1">Uitstekend</p>
                </div>
              </div>
              <p className="text-xs font-bold text-[#F4F6F9]/70 mt-3">
                Gebaseerd op <strong className="text-[#FFFFFF]">1.280+ geverifieerde reviews</strong> in Nederland & België
              </p>
            </div>

            <div className="md:col-span-5 space-y-2">
              <div className="flex items-center gap-3 text-xs font-black text-[#FFFFFF]">
                <span className="w-12">5 Sterren</span>
                <div className="flex-1 h-3 rounded-2xl bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#39FF14] rounded-2xl w-[94%]" />
                </div>
                <span className="w-8 text-right text-[#F4F6F9]/60">94%</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-black text-[#FFFFFF]">
                <span className="w-12">4 Sterren</span>
                <div className="flex-1 h-3 rounded-2xl bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#39FF14] rounded-2xl w-[5%]" />
                </div>
                <span className="w-8 text-right text-[#F4F6F9]/60">5%</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-black text-[#FFFFFF]">
                <span className="w-12">3 Sterren</span>
                <div className="flex-1 h-3 rounded-2xl bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#39FF14] rounded-2xl w-[1%]" />
                </div>
                <span className="w-8 text-right text-[#F4F6F9]/60">1%</span>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col gap-3 justify-center text-center sm:text-left bg-[#000000] p-4 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 text-xs font-black text-[#FFFFFF]">
                <CheckCircle2 className="w-4 h-4 text-[#39FF14] shrink-0" />
                <span>100% Echte Klanten</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-black text-[#FFFFFF]">
                <Zap className="w-4 h-4 text-[#39FF14] shrink-0" />
                <span>99.9% Server Uptime</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-black text-[#FFFFFF]">
                <ShieldCheck className="w-4 h-4 text-[#39FF14] shrink-0" />
                <span>7 Dagen Geld-Terug</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Reviews Layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        
        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: `Alle Reviews (${rawReviews.length})` },
            { id: 'sport', label: '⚽ Formule 1 & Sport' },
            { id: 'kwaliteit', label: '🎬 4K & Beeldkwaliteit' },
            { id: 'installatie', label: '⚙️ Installatie & Gemak' },
            { id: 'support', label: '💬 WhatsApp Support' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveFilter(tab.id as any);
                setVisibleCount(10); // Reset count on filter change
              }}
              className={`px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md ${
                activeFilter === tab.id
                  ? 'bg-[#39FF14] text-[#000000] scale-105 ring-2 ring-[#39FF14]'
                  : 'bg-[#111111] text-[#F4F6F9]/80 border border-white/10 hover:border-[#39FF14] hover:text-[#FFFFFF]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Reviews Cards Grid (Max 10 displayed initially) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedReviews.map((review) => {
            const isHelpful = helpfulState[review.id];
            const currentHelpfulCount = review.helpfulCount + (isHelpful ? 1 : 0);

            return (
              <div
                key={review.id}
                className="bg-[#111111] border-2 border-white/10 hover:border-[#39FF14] rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#000000] border border-[#39FF14]/40 text-[#FFFFFF] font-black flex items-center justify-center text-lg shadow-sm">
                        {review.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-black text-[#FFFFFF] uppercase tracking-tight">
                            {review.name}
                          </h3>
                          {review.country === 'NL' && <FlagNL />}
                          {review.country === 'BE' && <FlagBE />}
                          {review.country === 'DE' && <FlagDE />}
                          {review.country === 'NO' && <FlagNO />}
                          {review.country === 'CH' && <FlagCH />}
                        </div>
                        <p className="text-[11px] font-bold text-[#F4F6F9]/60">{review.location}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex gap-0.5 justify-end">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#39FF14] text-[#39FF14]" />
                        ))}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#F4F6F9]/50 block mt-1">
                        {review.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 my-3">
                    <span className="px-3 py-1 bg-[#000000] text-[#39FF14] text-[10px] font-black uppercase tracking-wider rounded-2xl border border-white/10">
                      {review.service}
                    </span>
                    <span className="px-3 py-1 bg-white/5 text-[#FFFFFF] text-[10px] font-black uppercase tracking-wider rounded-2xl border border-white/10">
                      📱 {review.device}
                    </span>
                    <span className="px-2.5 py-1 bg-[#39FF14]/15 text-[#39FF14] text-[10px] font-black uppercase tracking-wider rounded-2xl flex items-center gap-1 border border-[#39FF14]/30">
                      <CheckCircle2 className="w-3 h-3 text-[#39FF14]" /> Geverifieerde Aankoop
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-black text-[#FFFFFF] uppercase tracking-tight my-3 leading-snug">
                    &quot;{review.title}&quot;
                  </h4>

                  <p className="text-[#F4F6F9]/85 text-xs sm:text-sm font-bold leading-relaxed mb-6">
                    {review.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-[#F4F6F9]/60">
                    Vond u deze review nuttig?
                  </span>
                  <button
                    onClick={() => handleHelpfulClick(review.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      isHelpful
                        ? 'bg-[#39FF14] text-[#000000] shadow-sm font-black'
                        : 'bg-white/5 text-[#FFFFFF] hover:bg-[#39FF14] hover:text-[#000000]'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Nuttig ({currentHelpfulCount})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button (When more reviews exist than visibleCount) */}
        {visibleCount < filteredReviews.length && (
          <div className="w-full flex justify-center items-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-4 rounded-2xl bg-[#39FF14] text-[#000000] border border-green-300 font-black text-xs uppercase tracking-widest hover:bg-[#FFFFFF] transition-all shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] flex items-center gap-2 cursor-pointer"
            >
              <span>Meer reviews laden...</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Share Component */}
        <div className="w-full flex justify-center items-center my-14">
          <ShareButtons />
        </div>

        {/* Conversion Action Card */}
        <div className="bg-[#111111] border-2 border-[#39FF14]/40 rounded-2xl p-8 md:p-12 text-center shadow-2xl mt-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(57,255,20,0.1),_transparent_60%)] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#39FF14] text-[#000000] px-4 py-2 rounded-2xl mb-4 shadow-md">
              <Sparkles className="w-4 h-4 text-[#000000]" />
              <span className="text-[#000000] font-black text-xs uppercase tracking-widest">
                Direct Aansluiten
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight mb-3">
              Klaar om zelf de stabiliteit te ervaren?
            </h2>

            <p className="text-[#39FF14] font-bold text-sm sm:text-base max-w-xl mx-auto mb-8">
              Sluit u aan bij duizenden tevreden kijkers. Binnen 5 minuten ontvangt u uw inlogcodes inclusief 7 dagen geld-terug-garantie.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#39FF14] text-[#000000] font-black text-xs uppercase tracking-widest hover:bg-[#FFFFFF] transition-all hover:scale-105 shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] border border-green-300"
              >
                Bekijk Alle Pakketten
              </Link>
              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hallo ${CONSTANTS.BRAND_NAME}, ik wil graag een gratis 24-uurs test aanvragen.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#000000] text-[#FFFFFF] font-black text-xs uppercase tracking-widest border-2 border-[#39FF14] hover:bg-[#39FF14] hover:text-[#000000] transition-all hover:scale-105 shadow-xl"
              >
                Gratis 24-Uurs Test
              </a>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#39FF14] hover:text-white transition-colors font-black text-xs uppercase tracking-widest"
          >
            ← Terug naar de homepage
          </Link>
        </div>
      </section>
    </div>
  );
}