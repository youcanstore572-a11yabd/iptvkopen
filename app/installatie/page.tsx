'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONSTANTS } from '@/lib/seo';
import Image from 'next/image';
import { 
  MonitorSmartphone, Tv, Apple, Laptop, Sparkles, Lock, Zap, Users, 
  CheckCircle2, PlayCircle, ArrowRight, MessageCircle, Clock, Headphones, 
  Shield, Download, Mail, Cpu, Search, AlertCircle, TrendingUp, X, ShoppingCart, ChevronDown
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import Link from 'next/link';
import ShareButtons from '../components/ShareButtons';

// Direct SVG Flag Badges (NL, DE, BE, NO, CH)
const FlagNL = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-nl"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#st-pg-nl)">
      <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
      <path fill="#21468B" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagDE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-de"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#st-pg-de)">
      <path fill="#000" d="M0 0h32v10.7H0z" />
      <path fill="#D00" d="M0 10.7h32v10.6H0z" />
      <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagBE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-be"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#st-pg-be)">
      <path fill="#000" d="M0 0h10.7v32H0z" />
      <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagNO = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-no"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#st-pg-no)">
      <path fill="#BA0C2F" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
      <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-ch"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#st-pg-ch)">
      <path fill="#D52B1E" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M13 7h6v18h-6zM7 13h18v6H7z" />
    </g>
  </svg>
);

const devices = [
  { id: 'firestick', name: 'Firestick / Android', icon: MonitorSmartphone, popular: true, steps: 6 },
  { id: 'smarttv', name: 'Smart TVs', icon: Tv, popular: false, steps: 6 },
  { id: 'apple', name: 'Apple Apparaten', icon: Apple, popular: false, steps: 6 },
  { id: 'pc', name: 'PC / Mac', icon: Laptop, popular: false, steps: 6 },
];

const stepData = {
  firestick: {
    title: 'Firestick & Android Box',
    icon: MonitorSmartphone,
    steps: [
      { 
        number: 1, 
        title: 'Maak uw account aan', 
        description: 'Het installatieproces begint wanneer u uw account bij ons aanmaakt. Bezoek onze prijzenpagina, selecteer uw gewenste abonnement (3, 6 of 12 maanden) en voltooi de veilige betaling. Na een succesvolle betaling ontvangt u binnen 1-2 minuten een e-mail met uw unieke inloggegevens, waaronder gebruikersnaam, wachtwoord en Portal URL. Controleer ook uw spammap indien nodig.', 
        duration: '2-3 min', 
        icon: Users, 
        tip: 'Gebruik een geldig e-mailadres waar u direct toegang toe heeft. Sla de inloggegevens goed op.' 
      },
      { 
        number: 2, 
        title: 'Onbekende bronnen inschakelen', 
        description: 'Ga vanaf het Firestick-startscherm naar Instellingen (tandwieltje) in de rechterbovenhoek. Selecteer "Mijn Fire TV" of "Apparaat". Ga naar "Opties voor ontwikkelaars". Als u dit niet ziet, klik dan bij "Over" 7 keer snel achter elkaar op de naam van uw Fire TV Stick om het menu te ontgrendelen. Zet vervolgens "Apps van onbekende bronnen" AAN.', 
        duration: '2 min', 
        icon: Shield, 
        tip: 'Deze instelling is volkomen veilig en is vereist voor het installeren van IPTV spelers die niet standaard in de Amazon App Store staan.' 
      },
      { 
        number: 3, 
        title: 'Installeer de Downloader App', 
        description: 'Klik op het startscherm van uw Firestick op het zoekicoon (vergrootglas) linksboven. Typ "Downloader" in met het virtuele toetsenbord. Selecteer de Downloader app met het oranje/witte icoon (ontwikkeld door AFTVnews). Klik op "Downloaden" of "Get". Open de app nadat de installatie is voltooid.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'Downloader is de officiële en veilige app om applicaties op uw Firestick te sideloaden.' 
      },
      { 
        number: 4, 
        title: 'Voer de installatiecode in', 
        description: `Open de Downloader app. Voer in de URL-balk de volgende officiële installatiecode in: 83492. Klik op "Go". De ${CONSTANTS.FOCUS_KEYWORD} app wordt nu automatisch gedownload. Zodra de download gereed is, verschijnt er een pop-up. Klik op "Installeren".`, 
        duration: '2 min', 
        icon: MonitorSmartphone, 
        tip: 'Zorg voor een stabiele internetverbinding voordat u de code invoert. Mocht er een storing zijn, neem dan contact op met onze support.' 
      },
      { 
        number: 5, 
        title: 'Inloggen met inloggegevens', 
        description: `Open de zojuist geïnstalleerde ${CONSTANTS.FOCUS_KEYWORD} app. Selecteer op het inlogscherm "Inloggen via Xtream Codes API". Voer uw Portal URL, Gebruikersnaam en Wachtwoord in exact zoals vermeld in uw welkomstmail. Klik op "Inloggen" of "Gebruiker toevoegen".`, 
        duration: '3 min', 
        icon: Mail, 
        tip: 'Controleer of u de Xtream Codes methode geselecteerd heeft (niet M3U). De inloggegevens zijn hoofdlettergevoelig.' 
      },
      { 
        number: 6, 
        title: 'Start met streamen!', 
        description: 'Gefeliciteerd! Uw apparaat is nu volledig geconfigureerd. U heeft direct toegang tot 20.000+ live zenders, sportkanalen, VOD films en series. Gebruik de EPG tv-gids om programma’s te bekijken en geniet van buffervrije 4K kwaliteit.', 
        duration: 'Klaar!', 
        icon: PlayCircle, 
        tip: 'Ontdek alle app-functies zoals favorieten en ouderlijk toezicht. Neem bij vragen gerust contact op met onze 24/7 support.' 
      },
    ]
  },
  smarttv: {
    title: 'Smart TV Setup',
    icon: Tv,
    steps: [
      { 
        number: 1, 
        title: 'Maak uw account aan', 
        description: 'Begin met het aanmaken van een account op onze website. Kies uw abonnementsvorm (3, 6 of 12 maanden) en voltooi de beveiligde betaling. Binnen enkele minuten ontvangt u per e-mail uw inloggegevens (Gebruikersnaam, Wachtwoord en Portal URL).', 
        duration: '2-3 min', 
        icon: Users, 
        tip: 'Bewaar uw welkomstmail goed voor eventuele herinstallatie op een ander apparaat.' 
      },
      { 
        number: 2, 
        title: 'Open de App Store', 
        description: 'Druk op de afstandsbediening van uw Samsung, LG of Sony Smart TV op de Home-knop. Open de Samsung Apps Store, LG Content Store of Google Play Store (afhankelijk van uw televisiamerk). Zorg dat uw tv verbonden is met internet.', 
        duration: '1 min', 
        icon: MonitorSmartphone, 
        tip: 'Controleer of uw televisie is verbonden via een stabiele netwerkkabel of 5GHz WiFi.' 
      },
      { 
        number: 3, 
        title: 'Zoek naar IPTV Player', 
        description: 'Typ in de zoekbalk van de app store "IPTV Smarters Pro" of "IBO Player". Beide zijn uitstekende en gebruiksvriendelijke spelers die perfect samenwerken met onze streamingdiensten.', 
        duration: '2 min', 
        icon: Search, 
        tip: 'Wij raden IPTV Smarters Pro aan omdat deze app volledig gratis en zeer stabiel is.' 
      },
      { 
        number: 4, 
        title: 'Installeer de App', 
        description: 'Klik op "Installeren" of "Downloaden". Zodra de installatie is voltooid, kunt u de app openen via het startscherm van uw televisie.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'Bij een melding over onvoldoende opslagruimte kunt u ongebruikte apps verwijderen om ruimte vrij te maken.' 
      },
      { 
        number: 5, 
        title: 'Inloggen met gegevens', 
        description: `Open de app en selecteer "Login with Xtream Codes API". Voer de Portal URL, Gebruikersnaam en Wachtwoord in die u per e-mail heeft ontvangen. Klik op "Inloggen" om de zenderlijsten in te laden.`, 
        duration: '3 min', 
        icon: Mail, 
        tip: 'Zorg dat er geen spaties voor of na uw inloggegevens staan bij het overtypen.' 
      },
      { 
        number: 6, 
        title: 'Start met streamen!', 
        description: 'Uw Smart TV is klaar voor gebruik! Blader door alle sport-, nieuws- en entertainmentzenders of kies een film uit de VOD-bibliotheek in scherpe Full HD en 4K kwaliteit.', 
        duration: 'Klaar!', 
        icon: PlayCircle, 
        tip: 'Pas eventueel de bufferinstellingen in de app aan voor een nog vloeierdere weergave.' 
      },
    ]
  },
  apple: {
    title: 'Apple Apparaten',
    icon: Apple,
    steps: [
      { 
        number: 1, 
        title: 'Maak uw account aan', 
        description: 'Kies op onze website uw gewenste IPTV pakket en voltooi de betaling. U ontvangt direct uw inloggegevens in uw mailbox.', 
        duration: '2-3 min', 
        icon: Users, 
        tip: 'Het jaarabonnement biedt de hoogste korting en gratis extra voordelen.' 
      },
      { 
        number: 2, 
        title: 'Open de App Store', 
        description: 'Open op uw iPhone, iPad of Apple TV de App Store en zorg dat u bent ingelogd met uw Apple ID.', 
        duration: '1 min', 
        icon: MonitorSmartphone, 
        tip: 'Gebruik dezelfde Apple ID op al uw Apple apparaten om apps makkelijk te synchroniseren.' 
      },
      { 
        number: 3, 
        title: 'Zoek naar IPTV app', 
        description: 'Zoek in de App Store naar "IPTV Smarters Pro" of "IPTVX". Deze apps zijn speciaal geoptimaliseerd voor iOS en tvOS.', 
        duration: '1 min', 
        icon: Search, 
        tip: 'IPTV Smarters Pro is gratis te downloaden in de App Store.' 
      },
      { 
        number: 4, 
        title: 'Download & Installeer', 
        description: 'Tik op "Download" of "Verkrijg" om de app te installeren op uw Apple apparaat.', 
        duration: '2 min', 
        icon: Download, 
        tip: 'Bevestig eventueel met Face ID of uw Apple ID wachtwoord.' 
      },
      { 
        number: 5, 
        title: 'Inloggen met gegevens', 
        description: 'Open de app en kies voor inloggen via Xtream Codes API. Vul uw server-URL, gebruikersnaam en wachtwoord in.', 
        duration: '3 min', 
        icon: Mail, 
        tip: 'U kunt op Apple apparaten handig gebruikmaken van kopiëren en plakken vanuit uw e-mail.' 
      },
      { 
        number: 6, 
        title: 'Start met streamen!', 
        description: 'Uw Apple apparaat is ingesteld. Geniet van live sport, series en films met ondersteuning voor AirPlay en Picture-in-Picture.', 
        duration: 'Klaar!', 
        icon: PlayCircle, 
        tip: 'Gebruik de zoekfunctie in de app om snel uw favoriete zenders te vinden.' 
      },
    ]
  },
  pc: {
    title: 'PC & Mac',
    icon: Laptop,
    steps: [
      { 
        number: 1, 
        title: 'Maak uw account aan', 
        description: 'Schrijf u in via onze website en kies een abonnementsvorm naar keuze. Ontvang uw M3U-link en Xtream inloggegevens per e-mail.', 
        duration: '2-3 min', 
        icon: Users, 
        tip: 'Bewaar uw M3U-link goed; deze kunt u direct gebruiken op desktops.' 
      },
      { 
        number: 2, 
        title: 'Download VLC Media Player', 
        description: 'Voor computers raden wij VLC Media Player aan. Ga naar videolan.org en download de gratis versie voor Windows of Mac.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'VLC is lichtgewicht en speelt probleemloos alle video- en streamformaten af.' 
      },
      { 
        number: 3, 
        title: 'Installeer het programma', 
        description: 'Voer het gedownloade installatiebestand uit en volg de standaardstappen van de installatiewizard.', 
        duration: '2 min', 
        icon: Cpu, 
        tip: 'De standaardinstallatie-instellingen werken direct uitstekend.' 
      },
      { 
        number: 4, 
        title: 'Kopieer uw M3U URL', 
        description: 'Open uw welkomstmail en kopieer de volledige M3U afspeellijst URL naar uw klembord.', 
        duration: '1 min', 
        icon: Mail, 
        tip: 'De M3U-link bevat uw persoonlijke abonnementssleutel.' 
      },
      { 
        number: 5, 
        title: 'Open Netwerk Stream in VLC', 
        description: 'Open VLC, klik in het bovenste menu op "Media" en kies "Open Netwerkstream" (Ctrl+N / Cmd+N). Plak uw M3U-link in het invoerveld en klik op "Afspelen".', 
        duration: '3 min', 
        icon: PlayCircle, 
        tip: 'Druk in VLC op Ctrl+L om de afspeellijst-zijbalk te openen met alle categorieën.' 
      },
      { 
        number: 6, 
        title: 'Start met streamen!', 
        description: 'Uw computer is nu klaar om alle live zenders en VOD films af te spelen in hoge kwaliteit. Sluit eventueel een HDMI-kabel aan op uw tv.', 
        duration: 'Klaar!', 
        icon: TrendingUp, 
        tip: 'Gebruik de sneltoets F voor volledig scherm in VLC.' 
      },
    ]
  }
};

const setupFaqs = [
  {
    q: "Hoe lang duurt de activatie na aankoop?",
    a: "Onze servers activeren uw account direct. Uw unieke inloggegevens, Portal URL en Xtream API tokens worden binnen 1 tot 2 minuten na een succesvolle betaling per e-mail verzonden."
  },
  {
    q: "Kan ik mijn inloggegevens op meerdere apparaten gebruiken?",
    a: "U kunt de app op onbeperkt apparaten installeren. Het aantal gelijktijdige streams is echter afhankelijk van uw gekozen pakket (1 scherm bij Standaard, 2 of 3 schermen bij Multi-room)."
  },
  {
    q: "Wat moet ik doen bij een inlogfout in Xtream Codes?",
    a: "Controleer of u de Xtream Codes API methode heeft geselecteerd in plaats van een M3U-bestand. Zorg dat er geen extra spaties voor of na uw wachtwoord staan, aangezien de inloggegevens hoofdlettergevoelig zijn."
  },
  {
    q: "Heb ik een VPN nodig om te streamen?",
    a: "Nee, onze servers maken gebruik van beveiligde en geoptimaliseerde netwerken. Mocht uw internetprovider echter specifieke snelheidsbeperkingen opleggen op streaming, dan kunt u probleemloos een VPN inschakelen."
  },
  {
    q: "Welke internetsnelheid is minimaal vereist voor 4K?",
    a: "Voor stabiele 4K Ultra HD streams adviseren wij een minimale downloadsnelheid van 30 Mbps. Voor standaard Full HD 1080p kanalen is 15 Mbps ruimschoots voldoende."
  },
  {
    q: "Kan ik live sportwedstrijden en PPV gala's bekijken?",
    a: "Ja, alle belangrijke internationale pay-per-view evenementen, voetbalcompetities en sportkanalen zijn standaard en zonder extra kosten inbegrepen in uw zenderoverzicht."
  },
  {
    q: "Hoe kan ik de EPG tv-gids bijwerken?",
    a: "Onze EPG-gids synchroniseert automatisch. Mocht het voorkomen dat de gids achterloopt, dan kunt u in de instellingen van uw speler kiezen voor 'Afspeellijst bijwerken' of 'EPG verversen'."
  }
];

function StepItem({ step, index, isLast }: { step: any; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative">
      <div className="flex gap-5 md:gap-6">
        
        <div className="flex flex-col items-center">
          <motion.div 
            className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center z-10 transition-all duration-500 ${
              isInView 
                ? 'bg-[#39FF14] text-[#000000] shadow-[0_0_30px_rgba(57,255,20,0.4)] scale-110 border border-white/20' 
                : 'bg-[#111111] text-[#39FF14] border border-white/10'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.4, type: 'spring', delay: index * 0.1 }}
          >
            <span className={`text-2xl md:text-3xl font-black transition-all duration-300 ${
              isInView ? 'text-[#000000]' : 'text-[#39FF14]'
            }`}>
              {step.number}
            </span>
          </motion.div>
          
          {!isLast && (
            <motion.div 
              className="relative w-1 h-28 md:h-36 my-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle,_#39FF14_1px,_transparent_1px)] bg-[length:4px_8px] bg-repeat-y opacity-20" />
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#39FF14] to-[#FFFFFF]"
                initial={{ height: 0 }}
                animate={{ height: isInView ? '100%' : 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
              />
              {isInView && (
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#39FF14] rounded-2xl shadow-[0_0_15px_rgba(57,255,20,0.5)]"
                  initial={{ top: 0 }}
                  animate={{ top: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: "easeOut" }}
                />
              )}
            </motion.div>
          )}
        </div>
        
        <motion.div 
          className="flex-1 pb-16 md:pb-20"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -40 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={`bg-[#111111] border-2 rounded-2xl p-6 md:p-8 transition-all duration-500 shadow-2xl ${
            isInView 
              ? 'border-[#39FF14] shadow-[0_0_40px_rgba(57,255,20,0.15)]' 
              : 'border-white/10'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                  isInView ? 'bg-[#39FF14]/20 border-[#39FF14]/40 text-[#39FF14]' : 'bg-white/5 border-white/10 text-white/40'
                }`}>
                  <Icon className="w-5 h-5 shrink-0" />
                </div>
                <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight transition-colors duration-300 ${
                  isInView ? 'text-[#FFFFFF]' : 'text-[#F4F6F9]'
                }`}>
                  {step.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#000000] border border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#39FF14]" />
                <span className="text-[#F4F6F9]/60 text-xs font-bold">{step.duration}</span>
              </div>
            </div>
            
            <p className="text-[#F4F6F9]/80 font-medium leading-relaxed text-sm md:text-base">
              {step.description}
            </p>
            
            {isInView && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 p-4 rounded-2xl bg-[#000000] border border-[#39FF14]/30 shadow-inner"
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-2xl bg-[#39FF14]/20 flex items-center justify-center border border-[#39FF14]/40">
                      <AlertCircle className="w-4 h-4 text-[#39FF14]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#39FF14] font-black text-sm uppercase tracking-wide">Pro Tip</p>
                    <p className="text-[#F4F6F9]/70 text-sm font-medium mt-0.5">{step.tip}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SetupPage() {
  const [activeDevice, setActiveDevice] = useState('firestick');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaqIndex, setOpenIndex] = useState<number | null>(0);
  const currentData = stepData[activeDevice as keyof typeof stepData];
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const cleanPhone = (CONSTANTS.CONTACT.phone || '+31612345678').replace(/[^0-9]/g, '');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoOpen(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (iframeRef.current) {
      iframeRef.current.src = '';
    }
  };

  const openVideo = () => {
    setIsVideoOpen(true);
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.src = 'https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0';
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-[#F4F6F9]">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/10">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-1.webp"
            alt={`${CONSTANTS.BRAND_NAME} apparaat installatie handleiding - Eenvoudige Setup`}
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover brightness-[0.25]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#000000]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]" />
        </div>
        
        <div 
          className="absolute inset-0 z-0 opacity-5 pointer-events-none"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #39FF14 1px, transparent 1px),
              linear-gradient(to bottom, #39FF14 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39FF14]/10 blur-[150px] rounded-2xl pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto px-1 pt-25 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#39FF14] text-[#000000] px-4 py-2 rounded-2xl mb-6 shadow-md border border-white/25">
                <Sparkles className="w-4 h-4 text-[#000000]" />
                <span className="text-[#000000] font-black text-xs uppercase tracking-widest">Eenvoudige Installatie Gids</span>
              </div>
            </FadeInItem>
            
            <FadeInItem>
              <h1 className="text-5xl md:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none text-center">
                Installatie Handleiding <br />
                <span className="text-[#39FF14]">Direct Starten</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-lg md:text-xl text-[#F4F6F9]/90 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center mb-6">
                Volg onderstaande stappen om uw {CONSTANTS.BRAND_NAME} account in te stellen en direct te genieten van al uw favoriete zenders.
              </p>
            </FadeInItem>

            {/* ONE-LINE FLAGS ROW DIRECTLY UNDER HERO DESCRIPTION */}
            <FadeInItem>
              <div className="w-full flex items-center justify-center mb-8">
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
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-6 text-[#F4F6F9]/60 text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-[#39FF14]" /> Veilige Setup</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#39FF14]" /> 5 Minuten Klaar</span>
                <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-[#39FF14]" /> 24/7 Ondersteuning</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[#39FF14]" /> 20.000+ Kijkers</span>
              </div>
            </FadeInItem>
            
            <FadeInItem className="mt-12 relative flex justify-center">
              <button 
                onClick={openVideo}
                className="inline-flex items-center justify-center p-2 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#39FF14] transition-all duration-300 relative z-10 shadow-xl group cursor-pointer"
                aria-label="Bekijk installatie video tutorial"
              >
                <div className="flex items-center gap-4 bg-[#000000] px-8 py-5 rounded-2xl border border-white/10 hover:bg-[#111111] transition-colors">
                  <PlayCircle className="w-10 h-10 text-[#39FF14] shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-[#FFFFFF] font-black uppercase tracking-widest text-sm md:text-base">Video Handleiding</p>
                    <p className="text-[#F4F6F9]/60 text-xs font-bold uppercase tracking-wide mt-0.5">Visuele stap-voor-stap uitleg</p>
                  </div>
                </div>
              </button>
              <div className="absolute inset-0 rounded-2xl bg-[#39FF14]/10 animate-pulse blur-md scale-110 pointer-events-none" />
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* HIGH-CTR CENTRALIZED CALL-TO-ACTION BANNER */}
      <section className="w-full bg-[#111111] py-10 px-4 sm:px-6 border-y-2 border-[#39FF14]/40 shadow-2xl relative z-20 overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(57,255,20,0.1),_transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="relative inline-block">
            <div className="bg-[#39FF14] text-[#000000] font-black text-xs px-5 py-2 rounded-2xl uppercase tracking-widest shadow-md animate-bounce">
              AANBEVOLEN
            </div>
            <div className="absolute inset-0 rounded-2xl bg-[#39FF14]/30 animate-ping opacity-75 pointer-events-none" />
          </div>
          <h4 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            ERVAAR DE BESTE STREAMING<br/>BESTEL UW IPTV PAKKET VANDAAG!
          </h4>
          <p className="text-[#F4F6F9]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Profiteer van stabiele, buffervrije 4K streams en alle live sport in 60FPS. Direct geactiveerd.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#39FF14] text-[#000000] hover:bg-[#FFFFFF] hover:text-[#000000] hover:scale-105 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-300 px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] relative group/btn border border-green-300 animate-pulse"
            >
              <span>Bekijk Alle Pakketten</span>
              <ArrowRight className="w-5 h-5 text-[#000000] group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Device Selection Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#000000]">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tighter leading-none">
            Kies Uw <span className="text-[#39FF14]">Apparaat</span>
          </h2>
          <p className="text-[#F4F6F9]/70 text-lg font-bold max-w-2xl mx-auto mt-4">
            Selecteer hieronder uw platform voor gedetailleerde installatie-instructies.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((device) => {
            const Icon = device.icon;
            const isActive = activeDevice === device.id;
            return (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`relative p-6 rounded-2xl text-center transition-all duration-300 cursor-pointer group shadow-xl ${
                  isActive 
                    ? 'bg-[#111111] text-[#FFFFFF] border-2 border-[#39FF14] scale-[1.02] shadow-[0_10px_30px_rgba(57,255,20,0.2)]' 
                    : 'bg-[#111111] text-[#F4F6F9] border-2 border-white/10 hover:border-[#39FF14]/50'
                }`}
              >
                {device.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#39FF14] text-[#000000] font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-2xl whitespace-nowrap shadow-md">
                    Meest Gekozen
                  </div>
                )}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors border ${
                  isActive ? 'bg-[#39FF14] text-[#000000] border-white/20 shadow-[0_5px_15px_rgba(57,255,20,0.4),inset_0_2px_4px_rgba(255,255,255,0.9)]' : 'bg-[#000000] text-[#39FF14] border-white/10'
                }`}>
                  <Icon className="w-8 h-8 shrink-0" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-wide mb-2">{device.name}</h3>
                <p className={`text-xs font-bold ${isActive ? 'text-[#39FF14]' : 'text-[#F4F6F9]/50'}`}>{device.steps} eenvoudige stappen</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Vertical Timeline Process Display */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#000000]">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#39FF14] text-[#000000] font-black uppercase text-xs tracking-widest mb-4 shadow-md border border-white/20">
            <currentData.icon className="w-4 h-4 text-[#000000] shrink-0" />
            <span>{currentData.title}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tighter">
            Stappenplan
          </h2>
          <p className="text-[#F4F6F9]/60 text-base font-bold uppercase tracking-widest mt-2">
            Volg onderstaande stappen voor een feilloze installatie
          </p>
        </div>

        <div className="relative px-2">
          {currentData.steps.map((step, index) => (
            <StepItem 
              key={step.number}
              step={step}
              index={index}
              isLast={index === currentData.steps.length - 1}
            />
          ))}
        </div>

        {/* System Verification Metrics Card */}
        <motion.div 
          className="text-center mt-12 p-8 md:p-10 rounded-2xl bg-[#111111] border-2 border-[#39FF14] shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(57,255,20,0.1),_transparent_60%)] pointer-events-none" />
          
          <div className="relative z-10">
            <CheckCircle2 className="w-14 h-14 text-[#39FF14] mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-3">Installatie Voltooid!</h3>
            <p className="text-[#39FF14] font-bold text-base max-w-md mx-auto mb-8">
              U heeft uw apparaat succesvol ingesteld. Geniet direct van al uw favoriete live zenders en films in haarscherpe 4K kwaliteit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto px-4">
              <Link
                href="/"
                className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-4 rounded-2xl bg-[#39FF14] text-[#000000] font-black text-sm uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] border border-green-300"
              >
                Naar de Homepage
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-4 rounded-2xl bg-[#39FF14] text-[#000000] font-black text-sm uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] border border-green-300 shrink-0 shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)]"
              >
                Bekijk Pakketten
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Support Grid Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#000000]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#111111] border-2 border-white/10 hover:border-[#39FF14] rounded-2xl p-8 text-center transition-all duration-300 shadow-xl group">
            <div className="w-16 h-16 rounded-2xl bg-[#39FF14]/15 flex items-center justify-center mx-auto mb-5 border border-[#39FF14]/30 group-hover:bg-[#39FF14]/25 transition-colors">
              <PlayCircle className="w-8 h-8 text-[#39FF14]" />
            </div>
            <h3 className="text-xl font-black text-[#FFFFFF] mb-2 uppercase tracking-wide">Video Handleiding</h3>
            <p className="text-[#F4F6F9]/80 text-sm font-medium mb-5">Bekijk onze visuele video-tutorial om de installatie stap voor stap live te volgen.</p>
            <button 
              onClick={openVideo}
              className="inline-flex items-center gap-2 text-[#39FF14] font-black uppercase text-xs tracking-widest hover:text-white hover:gap-3 transition-all cursor-pointer"
            >
              Bekijk Video <ArrowRight className="w-4 h-4 text-[#39FF14]" />
            </button>
          </div>

          <div className="bg-[#111111] border-2 border-white/10 hover:border-[#25D366] rounded-2xl p-8 text-center transition-all duration-300 shadow-xl group">
            <div className="w-16 h-16 rounded-2xl bg-[#25D366]/15 flex items-center justify-center mx-auto mb-5 border border-[#25D366]/30 group-hover:bg-[#25D366]/25 transition-colors">
              <MessageCircle className="w-8 h-8 text-[#25D366]" />
            </div>
            <h3 className="text-xl font-black text-[#FFFFFF] mb-2 uppercase tracking-wide">24/7 WhatsApp Support</h3>
            <p className="text-[#F4F6F9]/80 text-sm font-medium mb-5">Heeft u hulp nodig bij het instellen? Onze Nederlandstalige experts helpen u direct verder.</p>
            <a 
              href={`https://support-tv.online/?text=${encodeURIComponent(`Hallo, ik heb hulp nodig bij de installatie.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] font-black uppercase text-xs tracking-widest hover:text-white hover:gap-3 transition-all cursor-pointer"
            >
              Chat via WhatsApp <ArrowRight className="w-4 h-4 text-[#25D366]" />
            </a>
          </div>
        </div>
      </section>

      {/* Share Component */}
      <div className="w-full flex justify-center items-center mb-10">
        <ShareButtons />
      </div>

      {/* Dedicated Setup Page FAQ Accordion Module */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#000000] relative" aria-label="Veelgestelde vragen over apparaat installatie">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#39FF14]/5 blur-[120px] rounded-2xl pointer-events-none" />
        
        <FadeIn className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#39FF14] text-[#000000] px-4 py-2 rounded-2xl mb-6 shadow-md border border-white/20">
            <span className="text-[#000000] font-black text-xs uppercase tracking-widest">Installatie FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tighter leading-none">
            Veelgestelde <span className="text-[#39FF14]">Vragen</span>
          </h2>
          <p className="text-[#F4F6F9]/80 font-bold text-lg max-w-2xl mx-auto mt-4">
            Alles wat u moet weten over het configureren van uw IPTV account.
          </p>
        </FadeIn>
        
        <FadeInStagger className="space-y-4 relative z-10">
          {setupFaqs.map((faq, i) => (
            <FadeInItem key={i}>
              <button
                onClick={() => setOpenIndex(openFaqIndex === i ? null : i)}
                className={`w-full text-left bg-[#111111] border-2 ${openFaqIndex === i ? 'border-[#39FF14]' : 'border-white/10'} rounded-2xl p-6 hover:border-[#39FF14]/65 transition-all duration-300 group cursor-pointer shadow-xl`}
                aria-expanded={openFaqIndex === i}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${openFaqIndex === i ? 'text-[#39FF14]' : 'text-[#FFFFFF] group-hover:text-[#39FF14]'} flex items-center gap-3`}>
                    <span className={`${openFaqIndex === i ? 'text-[#39FF14]' : 'text-white/30'} font-black text-2xl`}>V.</span> 
                    {faq.q}
                  </h3>
                  <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180 text-[#39FF14]' : 'text-white/30 group-hover:text-[#39FF14]/70'}`} />
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#F4F6F9]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#39FF14] ml-2 py-2">
                    {faq.a}
                  </p>
                </div>
              </button>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeVideo();
            }
          }}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-[#FFFFFF]/60 hover:text-[#39FF14] transition-colors cursor-pointer flex items-center gap-2 text-sm font-bold z-10 uppercase tracking-widest"
            >
              <X className="w-5 h-5 shrink-0" /> Video Sluiten
            </button>
            
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#39FF14] bg-black">
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0&modestbranding=1"
                title="Installatie Handleiding - Complete Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}