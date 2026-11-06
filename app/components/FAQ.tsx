'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown, HelpCircle, ShieldCheck, MessageSquare } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

const faqs = [
  { 
    q: 'Wat is IPTV en hoe werkt IPTV Kopen precies?', 
    a: `IPTV staat voor Internet Protocol Television. Hiermee kijkt u live televisiezenders, sport en on-demand films via uw internetverbinding in plaats van via een traditionele kabel- of satellietaansluiting. Met ${CONSTANTS.BRAND_NAME} streamt u direct in 4K op uw Smart TV of mobiele apparaten.` 
  },
  { 
    q: `Wat maakt ${CONSTANTS.BRAND_NAME} de beste IPTV Nederland provider?`, 
    a: `${CONSTANTS.BRAND_NAME} levert maximale streamstabiliteit met meer dan 20.000 zenders en 60.000+ films en series. Dankzij onze geavanceerde anti-freeze servertechnologie geniet u van live sport (Eredivisie, Viaplay, Ziggo Sport, ESPN) zonder vervelende buffering of haperingen.` 
  },
  { 
    q: 'Op welke apparaten kan ik mijn IPTV abonnement gebruiken?', 
    a: `Onze IPTV service is compatibel met vrijwel elk apparaat: Samsung & LG Smart TV's, Android TV, Google TV, Amazon Firestick, Apple TV, iPhone, iPad, Windows PC, Mac en MAG- of Formuler-boxen.` 
  },
  { 
    q: 'Hoe snel wordt mijn IPTV Kopen abonnement geactiveerd?', 
    a: 'Direct na het afronden van uw bestelling worden uw M3U-link en Xtream Codes automatisch gegenereerd. U ontvangt uw inloggegevens binnen enkele minuten via WhatsApp en e-mail inclusief duidelijke installatie-instructies.' 
  },
  { 
    q: 'Kan ik eerst een gratis 24-uurs IPTV test aanvragen?', 
    a: `Ja, absoluut! U kunt via onze website direct contact opnemen via WhatsApp om een gratis, vrijblijvende 24-uurs proefperiode aan te vragen om onze 4K zenders en serverstabiliteit voor IPTV Nederland zelf te testen.` 
  },
  { 
    q: 'Hoe installeer ik de IPTV app op mijn Smart TV?', 
    a: 'Download een aanbevolen IPTV app zoals IBO Player, TiviMate, Smart IPTV of IPTV Smarters via de app store van uw TV. Voer vervolgens uw M3U-afspeellijst of inloggegevens in om direct te beginnen met kijken.' 
  },
  { 
    q: 'Welke betaalmethoden worden er ondersteund bij het bestellen?', 
    a: 'U kunt bij ons snel en veilig betalen via diverse methoden, waaronder iDEAL, Bancontact, Creditcard (Visa/Mastercard), PayPal en Cryptocurrency (Bitcoin/USDT) voor optimale privacy.' 
  },
  { 
    q: 'Zijn er Nederlandse ondertitels en een elektronische TV-gids (EPG) beschikbaar?', 
    a: `Ja, al onze abonnementen zijn voorzien van een uitgebreide, realtime EPG (elektronische programmagids) en bieden ondersteuning voor Nederlandse ondertiteling bij duizenden on-demand films en series op ${CONSTANTS.BRAND_NAME}.` 
  },
  { 
    q: 'Heb ik een speciale VPN nodig om IPTV te kunnen gebruiken?', 
    a: `Nee, een VPN is niet verplicht omdat onze servers beschikken over beveiligde en versleutelde verbindingen. Mocht u echter om privacyredenen toch een VPN willen gebruiken, dan werkt onze service daar probleemloos mee samen.` 
  },
  { 
    q: 'Wat moet ik doen als een zender hapert of buffert?', 
    a: 'Dankzij onze anti-freeze servers komt dit nagenoeg nooit voor. Mocht u toch last hebben van haperingen, controleer dan eerst uw internetverbinding, herstart uw IPTV app of neem direct contact op met onze 24/7 klantenservice.' 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleWhatsAppSupport = () => {
    const message = `Hallo, ik heb een vraag over ${CONSTANTS.BRAND_NAME} IPTV abonnementen.`;
    const redirectUrl = `https://live-support.netlify.app/?text=${encodeURIComponent(message)}`;
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t-4 border-[#39FF14] mt-16 relative bg-[#0A1A2F]" 
      aria-label={`Veelgestelde vragen over ${CONSTANTS.BRAND_NAME}`}
    >
      {/* Subtiel achtergrondraster voor moderne SaaS-look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <FadeIn className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#39FF14]/10 border border-[#39FF14]/30 px-4 py-2 rounded-none mb-6 shadow-md">
          <HelpCircle className="w-4 h-4 text-[#39FF14]" />
          <span className="text-[#39FF14] font-black text-xs uppercase tracking-widest">Uitgebreide Kennisbank & FAQ</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight leading-none">
          VEELGESTELDE <span className="text-[#39FF14]">VRAGEN</span>
        </h2>
        <p className="text-[#F4F6F9]/80 font-bold text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Alles wat u moet weten over onze {CONSTANTS.BRAND_NAME} abonnementen, snelle installatie, betaalmethoden, sportzenders en stabiele streams in heel Nederland.
        </p>
      </FadeIn>
      
      <FadeInStagger className="space-y-4 relative z-10 max-w-4xl mx-auto">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <FadeInItem key={i}>
              <div
                className={`w-full text-left transition-all duration-300 rounded-none border-2 ${
                  isOpen 
                    ? 'bg-[#132948] border-[#39FF14] shadow-[0_0_30px_rgba(0,212,255,0.15)]' 
                    : 'bg-[#0E2038] border-white/10 hover:border-[#39FF14]/50'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-black text-sm tracking-wider px-2.5 py-1 rounded-none border ${
                      isOpen ? 'bg-[#39FF14] text-[#0A1A2F] border-[#39FF14]' : 'bg-white/5 text-[#39FF14] border-white/10'
                    }`}>
                      {i < 9 ? `0${i + 1}` : i + 1}
                    </span>
                    <h3 className={`text-base md:text-lg font-black uppercase tracking-tight transition-colors ${
                      isOpen ? 'text-[#39FF14]' : 'text-[#FFFFFF] hover:text-[#39FF14]'
                    }`}>
                      {faq.q}
                    </h3>
                  </div>
                  
                  <div className={`p-2 rounded-none transition-transform duration-300 shrink-0 ${
                    isOpen ? 'bg-[#39FF14] text-[#0A1A2F] rotate-180' : 'bg-white/5 text-[#39FF14]'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <div 
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-300 px-6 ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                  role="region"
                >
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-[#F4F6F9]/90 font-medium text-sm md:text-base leading-relaxed pl-4 border-l-4 border-[#39FF14]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInItem>
          );
        })}
      </FadeInStagger>

      {/* Extra ondersteunende callout onderaan met WhatsApp actie */}
      <div className="mt-12 max-w-4xl mx-auto bg-[#132948] border-2 border-[#39FF14] p-6 sm:p-8 rounded-none flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="bg-[#39FF14] p-3.5 text-[#0A1A2F] rounded-none shrink-0 shadow-lg">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-white font-black text-lg uppercase tracking-wider mb-1">Staat uw vraag er niet tussen?</h4>
            <p className="text-[#F4F6F9]/80 text-sm font-medium">Onze technische klantenservice staat 24/7 klaar om al uw vragen te beantwoorden.</p>
          </div>
        </div>

        <button 
          onClick={handleWhatsAppSupport}
          className="whitespace-nowrap px-6 py-4 rounded-none bg-[#39FF14] text-[#0A1A2F] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-xl flex items-center gap-2 shrink-0"
        >
          <MessageSquare className="w-4 h-4" /> Vraag het via WhatsApp
        </button>
      </div>
    </section>
  );
}