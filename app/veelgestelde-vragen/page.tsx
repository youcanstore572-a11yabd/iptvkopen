'use client';

import { useState, useMemo } from 'react';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import { 
  HelpCircle, 
  Tv, 
  Zap, 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  MessageSquare, 
  Search,
  ChevronDown,
  Sparkles,
  ArrowRight,
  LifeBuoy,
  Wrench,
  Wifi,
  Cpu,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import ShareButtons from '../components/ShareButtons';

// Direct SVG Flag Badges (NL, DE, BE, NO, CH)
const FlagNL = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-fl-nl"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-fl-nl)">
      <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
      <path fill="#21468B" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagDE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-fl-de"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-fl-de)">
      <path fill="#000" d="M0 0h32v10.7H0z" />
      <path fill="#D00" d="M0 10.7h32v10.6H0z" />
      <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagBE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-fl-be"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-fl-be)">
      <path fill="#000" d="M0 0h10.7v32H0z" />
      <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagNO = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-fl-no"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-fl-no)">
      <path fill="#BA0C2F" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
      <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-fl-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-fl-ch)">
      <path fill="#D52B1E" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M13 7h6v18h-6zM7 13h18v6H7z" />
    </g>
  </svg>
);

interface FAQItem {
  id: string;
  category: 'algemeen' | 'sport' | 'apparaten' | 'betaling';
  q: string;
  a: string;
}

const faqList: FAQItem[] = [
  // 1. Algemeen & Service
  {
    id: 'alg-1',
    category: 'algemeen',
    q: 'Wat is IPTV en hoe verschilt dit van traditionele kabeltelevisie?',
    a: 'IPTV staat voor Internet Protocol Television. In plaats van een coaxkabel, glasvezelontvanger of schotelantenne van traditionele kabelaanbieders (zoals Ziggo of KPN) worden de televisiesignalen rechtstreeks via het internet gestreamd. Hierdoor heeft u geen fysieke tv-ontvanger of kabels meer nodig en kunt u overal ter wereld met een internetverbinding duizenden zenders bekijken in Full HD en 4K.'
  },
  {
    id: 'alg-2',
    category: 'algemeen',
    q: 'Hoe snel na de betaling ontvang ik mijn inloggegevens?',
    a: 'Onze serverinfrastructuur genereert uw inlogcodes direct na een succesvolle betaling. Binnen 2 tot 5 minuten ontvangt u uw persoonlijke M3U-afspeellijst, EPG XML-tv-gids en Xtream Codes API-parameters per e-mail. Onze WhatsApp-storingsdienst kan uw lijn tevens direct verzenden.'
  },
  {
    id: 'alg-3',
    category: 'algemeen',
    q: 'Kan ik op meerdere televisies of schermen tegelijk kijken?',
    a: 'Standaard is elk basisaccount geconfigureerd voor 1 actieve verbinding tegelijk. U kunt de inloggegevens wel op meerdere apparaten installeren (bijvoorbeeld tv, tablet en smartphone), zolang u niet gelijktijdig streamt. Wilt u met meerdere gezinsleden tegelijkertijd op verschillende schermen kijken? Kies dan tijdens het afrekenen voor onze voordelige 2-schermen optie.'
  },
  {
    id: 'alg-4',
    category: 'algemeen',
    q: 'Hoe werkt de 7 dagen niet-goed-geld-terug-garantie?',
    a: 'Wij garanderen 99.9% serverstabiliteit. Mocht u binnen 7 kalenderdagen na aanschaf aanhoudende verbindingsproblemen of serverstoringen ervaren die onze technische servicedesk niet binnen 24 uur kan oplossen, dan storten wij het volledige aankoopbedrag direct terug via uw gekozen betaalmethode.'
  },
  {
    id: 'alg-5',
    category: 'algemeen',
    q: 'Zit ik vast aan een stilzwijgende verlenging of abonnement?',
    a: 'Nee, absoluut niet. Bij ons sluit u een vooraf betaald contract af voor 1, 3, 6 of 12 maanden. Na afloop stopt de streamingverbinding automatisch. Er vinden nooit automatische incasso’s of stilzwijgende verlengingen plaats; u bepaalt altijd zelf wanneer u verlengt.'
  },
  {
    id: 'alg-6',
    category: 'algemeen',
    q: 'Kan ik eerst een gratis proefperiode testen?',
    a: 'Ja! Wij bieden serieuze geïnteresseerden een vrijblijvende 24-uurs testlijn aan. Neem contact op met onze WhatsApp helpdesk om direct een tijdelijke testcode te ontvangen en de beeldkwaliteit op uw eigen televisie te beoordelen.'
  },

  // 2. Sport & Zenders
  {
    id: 'sport-1',
    category: 'sport',
    q: 'Zijn Viaplay, Ziggo Sport Totaal en ESPN Compleet inbegrepen?',
    a: 'Ja, al onze zenderpakketten beschikken over het volledige Nederlandse premiumsportaanbod in 60FPS vloeiende beeldkwaliteit. U kijkt live naar Formule 1 (Viaplay 1 & 2 Extra), UEFA Champions League & Premier League (Ziggo Sport Select & Voetbal), en alle Eredivisie & Keuken Kampioen Divisie wedstrijden (ESPN 1 t/m 4).'
  },
  {
    id: 'sport-2',
    category: 'sport',
    q: 'Moet ik extra betalen voor UFC of Boxing PPV gala’s?',
    a: 'Nee, alle wereldwijde Pay-Per-View evenementen zijn standaard inbegrepen. Dit omvat genummerde UFC Main Cards, Glory Kickboxing, Matchroom Boxing, DAZN Fights en WWE evenementen zonder enige meerprijs.'
  },
  {
    id: 'sport-3',
    category: 'sport',
    q: 'Beschikken buitenlandse films en series over Nederlandse ondertitels?',
    a: 'Ruim 95% van onze complete Video-on-Demand (VOD) catalogus (meer dan 60.000 films en series van Netflix, HBO Max, Disney+ en bioscoopreleases) beschikt over selecteerbare Nederlandse ondertiteling en optionele originele audiosporen.'
  },
  {
    id: 'sport-4',
    category: 'sport',
    q: 'Werkt de Elektronische Programmagids (EPG) en terugkijkfunctie (Catch-up)?',
    a: 'Ja, onze interactieve EPG tv-gids wordt elke 6 uur automatisch gesynchroniseerd met de actuele programmering. Voor de belangrijkste Nederlandse, Belgische, Britse en Duitse zenders is een 7-daagse terugkijkfunctie (Catch-up / Replay) beschikbaar.'
  },
  {
    id: 'sport-5',
    category: 'sport',
    q: 'Kan ik onnodige buitenlandse zenderlijsten uitschakelen of verbergen?',
    a: 'Zeker. U kunt via uw IPTV speler (zoals TiviMate of IBO Player) eenvoudig landengroepen verbergen. Tevens kan onze helpdesk op verzoek uw account aanpassen zodat u alleen zenders uit Nederland, België en uw gewenste landen ontvangt.'
  },
  {
    id: 'sport-6',
    category: 'sport',
    q: 'Hoe zit het met de beeldkwaliteit tijdens drukbezochte sportevenementen?',
    a: 'Onze servers maken gebruik van dynamische loadbalancing via dedicated Europese tier-1 datacenters (AMS-IX & DE-CIX). Zelfs tijdens piekmomenten (zoals Ajax vs Feyenoord of F1 races) blijft de bitrate stabiel zonder framedrops of buffering.'
  },

  // 3. Apparaten & Installatie
  {
    id: 'app-1',
    category: 'apparaten',
    q: 'Op welke televisies en apparaten kan ik IPTV installeren?',
    a: 'Onze dienst is universeel compatibel met Smart TV’s (Samsung Tizen, LG webOS, Sony Android TV, Philips), Amazon Fire TV Stick, Google Chromecast met Google TV, Apple TV 4K, Nvidia Shield, MAG boxen, Windows PC, Mac, iPhone, iPad en Android telefoons.'
  },
  {
    id: 'app-2',
    category: 'apparaten',
    q: 'Welke IPTV applicaties leveren de beste kijkervaring?',
    a: 'Voor Android TV en Fire TV Stick adviseren wij TiviMate IPTV Player (ultieme zapsnelheid). Voor Samsung en LG Smart TV raden wij IBO Player Pro of IPTV Smarters Pro aan. Voor Apple TV gebruikers is IPTVX of GSE Smart IPTV de beste keuze.'
  },
  {
    id: 'app-3',
    category: 'apparaten',
    q: 'Welke minimale downloadsnelheid heb ik nodig voor 4K en 60FPS?',
    a: 'Voor standaard Full HD kanalen adviseren wij een stabiele downloadsnelheid van minimaal 15 tot 20 Mbps. Voor 4K Ultra HD en 60FPS sportstreams is een verbinding van 25 tot 30 Mbps gewenst. Een bekabelde ethernetkabel (LAN) of 5GHz Wi-Fi netwerk biedt altijd de meest stabiele ervaring.'
  },
  {
    id: 'app-4',
    category: 'apparaten',
    q: 'Wat moet ik doen als een zender even buffert of stilstaat?',
    a: 'Buffering wordt in 99% van de gevallen veroorzaakt door tijdelijke Wi-Fi interferentie of een volle app-cache. Herstart uw router en modem, herstart uw IPTV app of schakel in de spelerinstellingen tussen de HLS en TS stream-engine.'
  },
  {
    id: 'app-5',
    category: 'apparaten',
    q: 'Heb ik technische kennis nodig om de installatie te voltooien?',
    a: 'Nee, de installatie duurt gemiddeld minder dan 5 minuten. U downloadt een speler-app uit de App Store op uw televisie, vult de 3 verstrekte inlogregels (server-URL, gebruikersnaam, wachtwoord) in, en de zenders laden automatisch in.'
  },
  {
    id: 'app-6',
    category: 'apparaten',
    q: 'Kan ik mijn account ook meenemen op vakantie in het buitenland?',
    a: 'Ja! Onze streams zijn wereldwijd toegankelijk zonder geografische restricties. U kunt uw IPTV account zorgeloos gebruiken in uw vakantiehuis in Spanje, Frankrijk of waar dan ook.'
  },

  // 4. Betaling & Veiligheid
  {
    id: 'pay-1',
    category: 'betaling',
    q: 'Welke veilige betaalopties ondersteunen jullie?',
    a: 'U kunt veilig en direct afrekenen via iDEAL (Nederland), Bancontact (België), Creditcard (Visa / Mastercard), PayPal en diverse cryptocurrencies (Bitcoin, USDT, Ethereum) via een zwaarbeveiligde 256-bit SSL-verbinding.'
  },
  {
    id: 'pay-2',
    category: 'betaling',
    q: 'Is het gebruik van een VPN noodzakelijk?',
    a: 'Nee, een VPN is niet vereist omdat al onze streams via beveiligde, versleutelde verbindingen lopen. Geeft u de voorkeur aan extra privacy? Onze streamingservers zijn 100% compatibel met alle VPN-aanbieders (zoals NordVPN, Surfshark en ExpressVPN).'
  },
  {
    id: 'pay-3',
    category: 'betaling',
    q: 'Hoe worden mijn persoonsgegevens beschermd (AVG/GDPR)?',
    a: 'Wij respecteren de Europese privacywetgeving (AVG). Wij slaan nooit kijkgeschiedenis of zenderlogs op, verkopen geen gegevens aan derden en bewaren geen creditcard- of bankrekeningnummers op onze lokale servers.'
  },
  {
    id: 'pay-4',
    category: 'betaling',
    q: 'Wat gebeurt er als ik mijn inloggegevens kwijtraak?',
    a: 'Geen probleem. Stuur een bericht met uw bestelnummer of registratie-e-mail naar onze WhatsApp klantenservice of mail support@, en onze helpdesk zendt uw inloggegevens binnen 5 minuten opnieuw toe.'
  },
  {
    id: 'pay-5',
    category: 'betaling',
    q: 'Krijg ik een factuur of aankoopbewijs na betaling?',
    a: 'Ja, direct na afronding van de transactie ontvangt u een geautomatiseerde digitale bestelbevestiging en factuur in uw mailbox.'
  },
  {
    id: 'pay-6',
    category: 'betaling',
    q: 'Zijn er verborgen kosten of administratiekosten?',
    a: 'Nee, de getoonde prijzen op onze tarievenpagina zijn volledig all-in. U betaalt eenmalig voor uw gekozen periode zonder onverwachte toeslagen of aansluitkosten.'
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'algemeen' | 'sport' | 'apparaten' | 'betaling'>('all');
  const [openAccordion, setOpenAccordion] = useState<string | null>('alg-1');

  const cleanPhone = (CONSTANTS.CONTACT.phone || '+31612345678').replace(/[^0-9]/g, '');

  const filteredFaqs = useMemo(() => {
    return faqList.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-[#F4F6F9] overflow-hidden">
      
      {/* Schema Markup for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(57,255,20,0.1),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#39FF1408_1px,transparent_1px),linear-gradient(to_bottom,#39FF1408_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#39FF14] text-[#000000] px-4 py-2 rounded-2xl mb-6 shadow-lg border border-white/20">
            <HelpCircle className="w-4 h-4 text-[#000000]" />
            <span className="text-[#000000] font-black text-xs uppercase tracking-widest">
              Kennisbank & Antwoorden
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none whitespace-normal break-words">
            Veelgestelde <span className="text-[#39FF14]">Vragen</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#F4F6F9]/80 font-bold max-w-2xl mx-auto leading-relaxed mb-6">
            Vind direct een helder antwoord op al uw vragen over onze IPTV abonnementen, 60FPS sportstreams, Smart TV installatie en betaalmethoden.
          </p>

          {/* FLAG ROW UNDER DESCRIPTION */}
          <div className="w-full flex items-center justify-center mb-6">
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

          {/* Interactive Live Search Bar */}
          <div className="w-full max-w-xl relative mt-4">
            <Search className="w-5 h-5 text-[#39FF14] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Zoek een vraag (bijv. Viaplay, TiviMate, iDEAL, buffering)..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#111111] text-[#FFFFFF] placeholder-[#FFFFFF]/50 font-bold border-2 border-[#39FF14] focus:outline-none shadow-2xl transition-all"
            />
          </div>
        </div>
      </section>

      {/* Main FAQ Container Area */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'Alle Vragen (24)', icon: HelpCircle },
            { id: 'algemeen', label: 'Algemeen & Service', icon: Tv },
            { id: 'sport', label: 'Sport & Zenders', icon: Zap },
            { id: 'apparaten', label: 'Smart TV & Apps', icon: Smartphone },
            { id: 'betaling', label: 'Betaling & Veiligheid', icon: CreditCard },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md ${
                  activeCategory === tab.id
                    ? 'bg-[#39FF14] text-[#000000] scale-105 ring-2 ring-[#39FF14]'
                    : 'bg-[#111111] text-[#F4F6F9]/80 border border-white/10 hover:border-[#39FF14] hover:text-[#FFFFFF]'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openAccordion === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#111111] border-2 border-white/10 hover:border-[#39FF14] rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-black text-[#FFFFFF] text-base sm:text-lg uppercase tracking-tight leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-2xl bg-[#000000] text-[#FFFFFF] flex items-center justify-center shrink-0 transition-transform duration-300 border border-white/10 ${
                      isOpen ? 'rotate-180 bg-[#39FF14] text-[#000000] border-transparent font-black' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-[#F4F6F9]/85 text-xs sm:text-sm font-bold leading-relaxed border-t border-white/10">
                      <p className="pl-4 border-l-4 border-[#39FF14] mt-3">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-[#111111] border-2 border-[#39FF14] rounded-2xl p-10 text-center text-[#FFFFFF] shadow-xl">
            <AlertCircle className="w-8 h-8 text-[#39FF14] mx-auto mb-2" />
            <p className="font-black text-lg uppercase tracking-tight mb-1">Geen resultaten gevonden</p>
            <p className="text-xs sm:text-sm font-bold text-[#F4F6F9]/70">
              Probeer een andere zoekterm of neem direct contact op met onze WhatsApp helpdesk.
            </p>
          </div>
        )}
      </section>

      {/* Technical Diagnostic & Compatibility Matrix */}
      <section className="py-16 bg-[#111111] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight mb-3">
              Aanbevolen <span className="text-[#39FF14]">Apparaten & Apps</span>
            </h2>
            <p className="text-sm sm:text-base text-[#F4F6F9]/70 font-bold max-w-xl mx-auto">
              Overzicht van de meest geschikte spelers en minimale internetsnelheden voor een storingsvrije kijkervaring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#000000] border-2 border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#39FF14] transition-colors">
              <div>
                <Smartphone className="w-8 h-8 text-[#39FF14] mb-3" />
                <h3 className="text-lg font-black text-[#FFFFFF] uppercase mb-1">Android & Firestick</h3>
                <p className="text-xs text-[#F4F6F9]/60 font-bold mb-4">Hoogste stabiliteit en snelste zaptijden.</p>
                <ul className="space-y-2 text-xs font-bold text-[#F4F6F9]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" /> TiviMate IPTV Player Pro
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" /> IPTV Smarters Pro
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" /> XCIPTV Player
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-black text-[#39FF14]">
                Min. Snelheid: 20 Mbps
              </div>
            </div>

            <div className="bg-[#000000] border-2 border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#39FF14] transition-colors">
              <div>
                <Tv className="w-8 h-8 text-[#39FF14] mb-3" />
                <h3 className="text-lg font-black text-[#FFFFFF] uppercase mb-1">Samsung & LG Smart TV</h3>
                <p className="text-xs text-[#F4F6F9]/60 font-bold mb-4">Direct streamen zonder extern kastje.</p>
                <ul className="space-y-2 text-xs font-bold text-[#F4F6F9]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" /> IBO Player Pro (webOS/Tizen)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" /> Smart IPTV (SIPTV)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" /> SET IPTV Player
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-black text-[#39FF14]">
                Min. Snelheid: 25 Mbps
              </div>
            </div>

            <div className="bg-[#000000] border-2 border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#39FF14] transition-colors">
              <div>
                <Cpu className="w-8 h-8 text-[#39FF14] mb-3" />
                <h3 className="text-lg font-black text-[#FFFFFF] uppercase mb-1">Apple TV & iOS</h3>
                <p className="text-xs text-[#F4F6F9]/60 font-bold mb-4">Haarscherpe 4K interface voor Apple devices.</p>
                <ul className="space-y-2 text-xs font-bold text-[#F4F6F9]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" /> IPTVX (tvOS)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" /> GSE Smart IPTV
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" /> Smarters Player Lite
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-black text-[#39FF14]">
                Min. Snelheid: 25 Mbps
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Troubleshooting 3-Step Quick Guide */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#111111] border-2 border-[#39FF14] rounded-2xl p-8 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-7 h-7 text-[#39FF14]" />
            <h2 className="text-2xl sm:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight">
              Eenvoudige Zelfhulp bij Kleine Haperingen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#F4F6F9]">
            <div className="p-5 bg-[#000000] rounded-2xl border border-white/10">
              <span className="w-7 h-7 rounded-2xl bg-[#39FF14] text-[#000000] font-black text-xs flex items-center justify-center mb-3">1</span>
              <h3 className="font-black text-sm uppercase mb-1 text-white">Herstart Uw Router</h3>
              <p className="text-xs font-bold text-[#F4F6F9]/80 leading-relaxed">
                Schakel uw modem en tv 30 seconden uit om opgebouwde DNS-cache en netwerkcongestie te legen.
              </p>
            </div>

            <div className="p-5 bg-[#000000] rounded-2xl border border-white/10">
              <span className="w-7 h-7 rounded-2xl bg-[#39FF14] text-[#000000] font-black text-xs flex items-center justify-center mb-3">2</span>
              <h3 className="font-black text-sm uppercase mb-1 text-white">Ververs de Afspeellijst</h3>
              <p className="text-xs font-bold text-[#F4F6F9]/80 leading-relaxed">
                Kies in uw IPTV app voor {"Update Playlist"} of {"Reload Portal"} om nieuwe zenders en EPG in te laden.
              </p>
            </div>

            <div className="p-5 bg-[#000000] rounded-2xl border border-white/10">
              <span className="w-7 h-7 rounded-2xl bg-[#39FF14] text-[#000000] font-black text-xs flex items-center justify-center mb-3">3</span>
              <h3 className="font-black text-sm uppercase mb-1 text-white">Wissel Stream Formaat</h3>
              <p className="text-xs font-bold text-[#F4F6F9]/80 leading-relaxed">
                Verander in de instellingen van uw speler het streamtype van TS naar HLS voor een soepelere dataoverdracht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <div className="w-full flex justify-center items-center my-10">
        <ShareButtons />
      </div>

      {/* Support CTA Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <div className="bg-[#111111] border-2 border-[#39FF14] rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(57,255,20,0.1),_transparent_60%)] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#39FF14] text-[#000000] px-4 py-2 rounded-2xl mb-4 shadow-md">
              <LifeBuoy className="w-4 h-4 text-[#000000]" />
              <span className="text-[#000000] font-black text-xs uppercase tracking-widest">
                Persoonlijke Hulp
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight mb-3">
              Heeft u nog een specifieke vraag?
            </h2>

            <p className="text-[#39FF14] font-bold text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Onze Nederlandstalige streaming-experts zijn 24/7 bereikbaar via WhatsApp voor installatiehulp, zendervragen en gratis 24-uurs testlijnen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hallo ${CONSTANTS.BRAND_NAME}, ik heb een vraag over de IPTV service.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#39FF14] text-[#000000] font-black text-xs uppercase tracking-widest hover:bg-[#FFFFFF] transition-all hover:scale-105 shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] border border-green-300"
              >
                WhatsApp Klantenservice
              </a>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#000000] text-[#FFFFFF] font-black text-xs uppercase tracking-widest border-2 border-[#39FF14] hover:bg-[#39FF14] hover:text-[#000000] transition-all hover:scale-105 shadow-xl"
              >
                Bekijk Alle Pakketten
              </Link>
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