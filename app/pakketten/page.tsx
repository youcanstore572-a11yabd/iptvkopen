'use client';

import { useState } from 'react';
import Image from 'next/image';
import PricingSection from '../components/PricingSection';
import ShareButtons from '../components/ShareButtons';
import { 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  CreditCard, 
  Award, 
  Globe, 
  Server, 
  Trophy, 
  Tv, 
  Film, 
  MonitorPlay, 
  Wifi, 
  Calendar, 
  Lock, 
  ThumbsUp, 
  Users, 
  LifeBuoy, 
  Sparkles, 
  Headphones, 
  ShoppingCart,
  ArrowRight
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';

// Direct SVG Flag Badges (NL, DE, BE, NO, CH)
const FlagNL = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-nl"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#p-fl-nl)">
      <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
      <path fill="#21468B" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagDE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-de"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#p-fl-de)">
      <path fill="#000" d="M0 0h32v10.7H0z" />
      <path fill="#D00" d="M0 10.7h32v10.6H0z" />
      <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagBE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-be"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#p-fl-be)">
      <path fill="#000" d="M0 0h10.7v32H0z" />
      <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagNO = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-no"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#p-fl-no)">
      <path fill="#BA0C2F" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
      <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-ch"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#p-fl-ch)">
      <path fill="#D52B1E" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M13 7h6v18h-6zM7 13h18v6H7z" />
    </g>
  </svg>
);

// FAQ Item Component with sharp square borders (rounded-none)
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full text-left bg-[#132948] border-4 ${isOpen ? 'border-[#39FF14]' : 'border-white/10'} rounded-none p-6 hover:border-[#39FF14]/60 transition-all duration-300 group shadow-lg`}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${isOpen ? 'text-[#FFD700]' : 'text-[#FFFFFF] group-hover:text-[#39FF14]'} flex items-center gap-3`}>
          <span className={`${isOpen ? 'text-[#FFD700]' : 'text-[#39FF14]/60'} font-black text-2xl`}>V.</span> 
          {question}
        </h3>
        <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#39FF14]' : 'text-[#FFFFFF]/40 group-hover:text-[#39FF14]'}`} />
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#F4F6F9]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#FFD700] ml-2 py-2">
          {answer}
        </p>
      </div>
    </button>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0A1A2F] flex flex-col text-[#F4F6F9]">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-2.webp"
            alt={`${CONSTANTS.BRAND_NAME} premium IPTV abonnementen - Beste IPTV Kopen Deals`}
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover brightness-[0.25]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#0A1A2F]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-transparent to-[#0A1A2F]" />
        </div>
        
        {/* Square Pattern Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #39FF14 1px, transparent 1px),
              linear-gradient(to bottom, #39FF14 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39FF14]/10 blur-[150px] pointer-events-none z-0" />
        
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center pt-28 pb-16">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#39FF14] text-[#0A1A2F] px-4 py-2 rounded-none mb-6 shadow-lg border border-white/20">
                <Sparkles className="w-4 h-4 text-[#0A1A2F]" />
                <span className="text-[#0A1A2F] font-black text-xs uppercase tracking-widest">Beste Waarde Pakketten 2026</span>
              </div>
            </FadeInItem>
            
            <FadeInItem>
              <h1 className="text-5xl md:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none text-center">
                {CONSTANTS.BRAND_NAME} Pakketten & <br />
                <span className="text-[#FFD700]">Beste Deals</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-lg md:text-xl text-[#F4F6F9]/80 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center mb-6">
                Geniet overal van live tv, films en sport met een snelle, betrouwbare {CONSTANTS.BRAND_NAME} streamingervaring in 4K & 60FPS.
              </p>
            </FadeInItem>

            {/* ONE-LINE FLAGS ROW */}
            <FadeInItem>
              <div className="w-full flex items-center justify-center mb-8">
                <div className="inline-flex items-center justify-center flex-nowrap gap-2.5 sm:gap-4 px-4 py-2 rounded-none bg-[#132948] border border-[#39FF14]/40 shadow-xl">
                  
                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagNL />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FFFFFF]">Nederland</span>
                  </div>

                  <span className="text-white/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagDE />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FFFFFF]">Duitsland</span>
                  </div>

                  <span className="text-white/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagBE />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FFFFFF]">België</span>
                  </div>

                  <span className="text-white/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagNO />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FFFFFF]">Noorwegen</span>
                  </div>

                  <span className="text-white/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagCH />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FFFFFF]">Zwitserland</span>
                  </div>

                </div>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-6 text-[#F4F6F9]/60 text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-[#39FF14]" /> Geen Contract</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#39FF14]" /> Directe Activatie</span>
                <span className="flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-[#39FF14]" /> 7 Dagen Garantie</span>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Main Pricing Cards Component */}
      <div className="w-full relative z-20 bg-[#0A1A2F] py-12" id="pricing-section">
        <PricingSection />
      </div>

      {/* Features Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0A1A2F] w-full">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tighter leading-none">
            Alles Inbegrepen In <span className="text-[#FFD700]">Elk Pakket</span>
          </h2>
          <p className="text-[#F4F6F9]/70 text-lg font-bold max-w-2xl mx-auto mt-4">
            Alle {CONSTANTS.BRAND_NAME} abonnementen worden standaard geleverd met deze premium functies en specificaties.
          </p>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Tv, title: "20.000+ Live Zenders", desc: `Sport, nieuws, entertainment en nationale zenders uit meer dan 50 landen via ${CONSTANTS.BRAND_NAME}.` },
            { icon: Film, title: "60.000+ VOD Bibliotheek", desc: `De nieuwste films, series en documentaires dagelijks automatisch bijgewerkt op ${CONSTANTS.BRAND_NAME}.` },
            { icon: MonitorPlay, title: "4K & 60FPS Kwaliteit", desc: `Kristalheldere streaming op compatibele kanalen en apparaten zonder haperingen via ${CONSTANTS.BRAND_NAME}.` },
            { icon: Wifi, title: "Anti-Freeze Technologie", desc: `Buffervrij kijken dankzij geavanceerde streaming-optimalisatie en dedicated loadbalancers.` },
            { icon: Calendar, title: "Volledige EPG TV-Gids", desc: `7-daagse interactieve elektronische programmagids voor alle Nederlandse en Europese zenders.` },
            { icon: Trophy, title: "PPV Evenementen Inbegrepen", desc: `Alle grote UFC, Glory Kickboxing en boks Pay-Per-View gala's zonder extra kosten.` },
            { icon: Globe, title: "Wereldwijde Dekking", desc: `Dedicated servers in Europese datacenters voor minimale vertraging bij live sportuitzendingen.` },
            { icon: Server, title: "99.9% Server Uptime", desc: `Enterprise-infrastructuur met redundante back-up servers voor gegarandeerde stabiliteit.` },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <FadeInItem key={idx} className="bg-[#132948] border-4 border-white/10 rounded-none p-6 hover:border-[#39FF14] shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-none bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center mb-4 group-hover:bg-[#39FF14]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#39FF14]" />
                </div>
                <h3 className="font-black text-[#FFFFFF] uppercase tracking-wide text-lg mb-2">{feature.title}</h3>
                <p className="text-[#F4F6F9]/70 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-[#0A1A2F] border-y border-white/10 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tighter">
              Vergelijk <span className="text-[#FFD700]">{CONSTANTS.BRAND_NAME} Pakketten</span>
            </h2>
            <p className="text-[#39FF14] text-base font-bold uppercase tracking-widest mt-2">
              Vind het perfecte abonnement dat aansluit bij uw kijkwensen
            </p>
          </FadeIn>

          <div className="overflow-x-auto bg-[#132948] border-4 border-[#39FF14]/40 rounded-none p-4 md:p-6 shadow-2xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-white/10">
                  <th className="text-left p-4 text-[#FFFFFF] font-black uppercase tracking-wider text-base md:text-lg">Specificatie</th>
                  <th className="text-center p-4 text-[#39FF14] font-black uppercase tracking-wider text-base md:text-lg">3 Maanden</th>
                  <th className="text-center p-4 text-[#FFD700] font-black uppercase tracking-wider text-base md:text-lg bg-black/20 rounded-none">12 Maanden (VIP)</th>
                  <th className="text-center p-4 text-[#39FF14] font-black uppercase tracking-wider text-base md:text-lg">6 Maanden</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { feature: "Live Kanalen", basic: "20.000+", pro: "20.000+ VIP", premium: "20.000+" },
                  { feature: "VOD Films & Series", basic: "60.000+", pro: "60.000+ (Dagelijks Nieuw)", premium: "60.000+" },
                  { feature: "4K & 60FPS Streaming", basic: "Ja", pro: "Ja (Ultra Bitrate)", premium: "Ja" },
                  { feature: "Live Sport & PPV", basic: "Inbegrepen", pro: "Alle PPV + VIP Feeds", premium: "Inbegrepen" },
                  { feature: "EPG & Terugkijken", basic: "Standaard EPG", pro: "7 Dagen Catch-Up + EPG", premium: "Volledige EPG" },
                  { feature: "Anti-Freeze Technologie", basic: "Standaard", pro: "VIP Prioriteit Routing", premium: "Geavanceerd" },
                  { feature: "VPN Compatibel", basic: "Ja (Niet Verplicht)", pro: "100% Compatibel", premium: "Ja" },
                  { feature: "Aantal Schermen", basic: "1 of 2 Schermen", pro: "1, 2 of 3 Schermen", premium: "1 of 2 Schermen" },
                  { feature: "Klantenservice", basic: "WhatsApp Support", pro: "24/7 VIP Prioriteit", premium: "Prioriteit Support" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-[#FFFFFF] font-black uppercase text-sm">{row.feature}</td>
                    <td className="p-4 text-center text-[#F4F6F9]/80 font-bold text-sm">{row.basic}</td>
                    <td className="p-4 text-center text-[#FFD700] font-black text-sm bg-black/10">{row.pro}</td>
                    <td className="p-4 text-center text-[#F4F6F9]/80 font-bold text-sm">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0A1A2F] w-full">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tighter">
            Waarom Kiezen Voor <span className="text-[#FFD700]">{CONSTANTS.BRAND_NAME}</span>
          </h2>
          <p className="text-[#F4F6F9]/70 text-lg font-bold max-w-2xl mx-auto mt-4">
            Vertrouwd door meer dan 20.000 tevreden klanten in Nederland en België.
          </p>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#132948] border-4 border-[#39FF14]/40 rounded-none shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-none bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8 text-[#39FF14]" />
            </div>
            <h4 className="text-xl font-black text-[#FFFFFF] mb-2 uppercase tracking-wide">Veilig Betalen</h4>
            <p className="text-[#F4F6F9]/70 text-sm font-medium">Veilige transacties via iDEAL, Bancontact, Creditcard en Crypto met SSL-versleuteling.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#132948] border-4 border-[#39FF14]/40 rounded-none shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-none bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-[#39FF14]" />
            </div>
            <h4 className="text-xl font-black text-[#FFFFFF] mb-2 uppercase tracking-wide">Directe Activatie</h4>
            <p className="text-[#F4F6F9]/70 text-sm font-medium">Ontvang uw inloggegevens en installatie-instructies binnen 5 minuten per e-mail en WhatsApp.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#132948] border-4 border-[#39FF14]/40 rounded-none shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-none bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center mb-4">
              <CreditCard className="w-8 h-8 text-[#39FF14]" />
            </div>
            <h4 className="text-xl font-black text-[#FFFFFF] mb-2 uppercase tracking-wide">Geld-Terug-Garantie</h4>
            <p className="text-[#F4F6F9]/70 text-sm font-medium">7 dagen niet-goed-geld-terug garantie op al onze actieve streamingabonnementen.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#132948] border-4 border-[#39FF14]/40 rounded-none shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-none bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center mb-4">
              <Headphones className="w-8 h-8 text-[#39FF14]" />
            </div>
            <h4 className="text-xl font-black text-[#FFFFFF] mb-2 uppercase tracking-wide">24/7 Ondersteuning</h4>
            <p className="text-[#F4F6F9]/70 text-sm font-medium">Deskundig Nederlandstalig ondersteuningsteam staat altijd direct voor u klaar via WhatsApp.</p>
          </FadeInItem>
        </FadeInStagger>
      </section>

      {/* Money Back Guarantee Banner */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0A1A2F] w-full">
        <div className="bg-[#132948] border-4 border-[#008000] rounded-none p-8 md:p-10 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-[#008000]/20 text-[#39FF14] border border-[#008000]/40 px-4 py-2 rounded-none mb-4 shadow-md">
            <Award className="w-4 h-4 text-[#39FF14]" />
            <span className="font-black text-xs uppercase tracking-widest">100% Zonder Risico</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-3">7 Dagen Kwaliteitsgarantie</h3>
          <p className="text-[#F4F6F9]/80 max-w-2xl mx-auto text-sm md:text-base font-bold leading-relaxed">
            Probeer {CONSTANTS.BRAND_NAME} 7 dagen zonder risico. Ervaart u aanhoudende haperingen die wij niet kunnen verhelpen? Dan ontvangt u uw aankoopbedrag direct terug.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 bg-[#0A1A2F] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#39FF14]/5 blur-[120px] rounded-none pointer-events-none" />
        
        <FadeIn className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tighter">
            Veelgestelde <span className="text-[#FFD700]">Vragen</span>
          </h2>
          <p className="text-[#39FF14] font-bold text-lg">Alles wat u moet weten over onze abonnementen, tarieven en mogelijkheden.</p>
        </FadeIn>
        
        <FadeInStagger className="space-y-4 relative z-10">
          <FAQItem 
            question={`Welke betaalmethoden accepteert ${CONSTANTS.BRAND_NAME}?`} 
            answer={`${CONSTANTS.BRAND_NAME} accepteert iDEAL, Bancontact, alle grote creditcards (Visa, Mastercard, American Express), PayPal en cryptovaluta (Bitcoin, Ethereum, USDT). Alle betalingen worden veilig verwerkt via versleutelde 256-bit SSL-verbindingen.`}
          />
          <FAQItem 
            question={`Kan ik mijn abonnement later upgraden of aanpassen?`} 
            answer={`Ja, u kunt uw streamingabonnement op elk gewenst moment upgraden naar meerdere schermen of een langere periode. Neem eenvoudig contact op met onze WhatsApp helpdesk en wij passen uw account direct aan.`}
          />
          <FAQItem 
            question={`Zit ik vast aan een contract of automatische verlenging?`} 
            answer={`Nee, absoluut niet. Er zijn geen langlopende contracten of automatische incasso's. Alle pakketten zijn eenmalig prepaid en stoppen automatisch na afloop van de gekozen periode.`}
          />
          <FAQItem 
            question={`Wat gebeurt er als mijn abonnement afloopt?`} 
            answer={`Voor het verlopen van uw periode ontvangt u van ons een herinnering. U kunt vervolgens eenvoudig zelf verlengen. Verlengt u niet? Dan stopt de verbinding automatisch zonder verdere verplichtingen.`}
          />
          <FAQItem 
            question={`Bieden jullie een geld-terug-garantie?`} 
            answer={`Ja, wij bieden een volledige 7 dagen niet-goed-geld-terug-garantie op alle pakketten. Mocht u aanhoudende serverproblemen ervaren die wij niet kunnen oplossen, dan storten wij het volledige aankoopbedrag direct terug.`}
          />
          <FAQItem 
            question={`Can ik de dienst op meerdere apparaten tegelijk gebruiken?`} 
            answer={`Ja, afhankelijk van uw gekozen pakket. Ons standaardabonnement is voor 1 gelijktijdige stream, maar u kunt tijdens het bestellen kiezen voor een 2- of 3-schermen multi-room optie om gelijktijdig in meerdere kamers te kijken.`}
          />
          <FAQItem 
            question={`Zijn er kortingen voor langere abonnementen?`} 
            answer={`Ja, onze 12-maanden pakketten bieden de allerhoogste besparing (tot wel 58% korting ten opzichte van losse maandcontracten) inclusief VIP-serverroutering en prioriteitssupport.`}
          />
        </FadeInStagger>
      </div>

      {/* Share Component */}
      <div className="w-full flex justify-center items-center mb-16">
        <ShareButtons />
      </div>

      {/* Bottom CTA Section with exact 3D pill/rounded-2xl button styling matching the reference image layout */}
      <section className="py-20 bg-[#0A1A2F] border-t border-white/10 w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tight">
              Klaar om te beginnen met streamen?
            </h2>
            <p className="text-[#39FF14] font-bold text-lg mb-8 max-w-2xl mx-auto">
              Sluit u aan bij meer dan 20.000 tevreden klanten en geniet vandaag nog van premium digitale televisie.
            </p>
            
            {/* 3D Soft Rounded Buttons matching the reference image design layout */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-md mx-auto">
              
              {/* Primary 3D Button matching the reference image shape (rounded-2xl pill layout, #39FF14 green color, top inner highlight border, subtle multi-layer drop shadow) */}
              <Link
                href="#pricing-section"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-2xl bg-[#39FF14] text-[#0A1A2F] font-black uppercase tracking-widest text-sm transition-all hover:scale-[1.03] active:scale-[0.98] shadow-[0_10px_25px_rgba(57,255,20,0.4),inset_0_1px_0_rgba(255,255,255,0.6)] border border-green-300 flex items-center justify-center gap-2 group"
              >
                <span>Kies Uw Pakket</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary 3D Soft Rounded Clean White Button matching the left item in the reference image */}
              <Link
                href="/installatie"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-2xl bg-[#FFFFFF] text-[#0A1A2F] font-black uppercase tracking-widest text-sm transition-all hover:scale-[1.03] active:scale-[0.98] shadow-[0_10px_25px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,1)] border border-slate-200 flex items-center justify-center gap-2"
              >
                Installatie Handleiding
              </Link>

            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-[#F4F6F9]/40 text-xs font-black uppercase tracking-widest">
              <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-[#39FF14]" /> Directe Activatie</span>
              <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5 text-[#39FF14]" /> Veilig Afrekenen</span>
              <span className="flex items-center gap-2"><CreditCard className="w-3.5 h-3.5 text-[#39FF14]" /> iDEAL, Bancontact & Crypto</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}