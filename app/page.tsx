'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import { ProductSchema, FAQSchema } from './components/PageSchemas';
import { 
  PlayCircle, 
  ShieldCheck, 
  MonitorPlay, 
  Zap, 
  Download, 
  CreditCard, 
  CheckCircle2, 
  MonitorSmartphone, 
  Tv2, 
  Globe, 
  Cpu, 
  ArrowRight, 
  Award, 
  Lock, 
  ThumbsUp, 
  Users, 
  Server, 
  Film, 
  Trophy, 
  Calendar, 
  ShoppingCart,
  Database, 
  Tv, 
  Volume2, 
  Activity, 
  BarChart, 
  Medal, 
  Settings, 
  LifeBuoy,
  Shield
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import AnimatedCounter from './components/AnimatedCounter';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { blogPosts } from '@/lib/blog';
import TargetCountries from './components/TargetCountries';
import ShareButtons from './components/ShareButtons';

// Lazy load below-the-fold components for optimal Core Web Vitals
const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center bg-[#0A1A2F]">
      <div className="h-12 w-12 animate-spin rounded-none border-4 border-[#39FF14] border-t-transparent" />
    </div>
  ),
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#0A1A2F] rounded-none animate-pulse" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const GlobalServerMap = dynamic(() => import('./components/GlobalServerMap'), {
  loading: () => <div className="h-[400px] bg-[#0A1A2F] rounded-none animate-pulse max-w-7xl mx-auto" />,
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center bg-[#0A1A2F]">
      <div className="h-12 w-12 animate-spin rounded-none border-4 border-[#39FF14] border-t-transparent" />
    </div>
  ),
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1A2F] text-[#FFFFFF] overflow-hidden">
      
      <ProductSchema />
      <FAQSchema />

      {/* Hero Section */}
      <section className="relative px-6 py-45 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt={`4K Ultra HD IPTV streaming achtergrond Nederland`}
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.25]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#0A1A2F]/70" />
        </div>
        
        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-[#008000] px-4 py-2 rounded-none mb-6 shadow-md border border-[#39FF14]/30">
            <Award className="w-4 h-4 text-[#FFD700]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
              #1 IPTV Provider van Nederland
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-[#FFFFFF] mb-6 leading-none whitespace-normal break-words drop-shadow-sm">
            <span className="text-[#39FF14]">IPTV KOPEN</span> IN NEDERLAND
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-[#F4F6F9] max-w-3xl mx-auto mb-10 font-bold leading-relaxed px-2">
            Ervaar de beste <strong>IPTV Kopen</strong> service van <strong>IPTV Nederland</strong>. Stream direct meer dan 20.000+ live zenders, sport en films in 4K Ultra HD zonder haperingen.
          </p>
          
          {/* Action Buttons with 3D Watery Pill Style */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link 
              href="/pakketten" 
              className="w-full sm:w-auto text-center whitespace-nowrap px-6 sm:px-8 py-4 rounded-2xl bg-[#FFD700] text-[#0A1A2F] font-black text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wider shrink-0 shadow-[0_10px_30px_rgba(255,215,0,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(184,155,0,0.6)] border border-yellow-200 flex flex-row items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5 shrink-0 text-[#0A1A2F]" />
              <span>Bekijk Abonnementen</span>
            </Link>

            <Link 
              href="#channels" 
              className="w-full sm:w-auto text-center whitespace-nowrap px-6 sm:px-8 py-4 rounded-2xl bg-[#39FF14] text-[#0A1A2F] font-black text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wider shrink-0 shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] border border-green-300 flex flex-row items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5 shrink-0 text-[#0A1A2F]" />
              <span>Zenderaanbod</span>
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#FFFFFF] font-black uppercase tracking-widest bg-[#132948] backdrop-blur-sm px-8 py-4 rounded-none border border-[#39FF14]/30 shadow-md">
            <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-[#39FF14]" /> 4K & Full HD Beeld</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#39FF14]" /> 99.9% Server Uptime</span>
            <span className="flex items-center gap-2"><Activity className="w-5 h-5 text-[#39FF14]" /> Anti-Freeze Servers</span>
          </div>
        </FadeIn>
      </section>

      {/* Partner Slider Section */}
      <div className="min-h-[128px] bg-[#0A1A2F]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* 3-Step Setup Section */}
      <section className="py-24 bg-[#0A1A2F] border-t border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
               <span className="text-[#0A1A2F] bg-[#39FF14] px-4 py-1 rounded-none font-black uppercase tracking-widest text-xs mb-4 shadow-md">
                 Eenvoudige Installatie
               </span>
               <h2 className="text-4xl md:text-6xl font-black text-[#FFFFFF] tracking-tighter uppercase leading-none">
                 BEGIN MET KIJKEN IN <br/><span className="text-[#39FF14]">3 SIMPELE STAPPEN</span>
               </h2>
               <p className="text-[#F4F6F9] text-lg mt-6 font-bold">
                 Bestel vandaag nog uw abonnement voor <strong>IPTV Kopen</strong> en configureer uw afspeellijst binnen 5 minuten.
               </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <FadeInItem className="relative flex flex-col items-center text-center z-10 group bg-[#132948] p-8 rounded-none border-2 border-white/10 hover:border-[#39FF14] transition-all hover:-translate-y-2 text-[#FFFFFF] shadow-xl">
              <div className="w-20 h-20 rounded-none bg-[#008000] flex items-center justify-center mb-6 relative shadow-md border border-[#39FF14]/30">
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-none bg-[#39FF14] text-[#0A1A2F] font-black flex items-center justify-center text-sm shadow-lg">1</div>
                <CreditCard className="w-10 h-10 text-[#FFFFFF]" />
              </div>
              <h3 className="text-2xl font-black text-[#FFFFFF] mb-4 tracking-tighter uppercase">1. Kies Uw Abonnement</h3>
              <p className="text-[#F4F6F9]/80 text-base font-bold leading-relaxed">
                Selecteer de gewenste abonnementsduur en het aantal schermen voor de ultieme <strong>IPTV Nederland</strong> ervaring.
              </p>
            </FadeInItem>

            <FadeInItem className="relative flex flex-col items-center text-center z-10 group bg-[#132948] p-8 rounded-none border-2 border-white/10 hover:border-[#39FF14] transition-all hover:-translate-y-2 text-[#FFFFFF] shadow-xl">
              <div className="w-20 h-20 rounded-none bg-[#008000] flex items-center justify-center mb-6 relative shadow-md border border-[#39FF14]/30">
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-none bg-[#39FF14] text-[#0A1A2F] font-black flex items-center justify-center text-sm shadow-lg">2</div>
                <Download className="w-10 h-10 text-[#FFFFFF]" />
              </div>
              <h3 className="text-2xl font-black text-[#FFFFFF] mb-4 tracking-tighter uppercase">2. Ontvang Gegevens</h3>
              <p className="text-[#F4F6F9]/80 text-base font-bold leading-relaxed">
                Ontvang binnen 5 minuten uw M3U-link en Xtream codes direct via WhatsApp en e-mail om te starten met <strong>IPTV Kopen</strong>.
              </p>
            </FadeInItem>

            <FadeInItem className="relative flex flex-col items-center text-center z-10 group bg-[#132948] p-8 rounded-none border-2 border-white/10 hover:border-[#39FF14] transition-all hover:-translate-y-2 text-[#FFFFFF] shadow-xl">
              <div className="w-20 h-20 rounded-none bg-[#008000] flex items-center justify-center mb-6 relative shadow-md border border-[#39FF14]/30">
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-none bg-[#39FF14] text-[#0A1A2F] font-black flex items-center justify-center text-sm shadow-lg">3</div>
                <Tv2 className="w-10 h-10 text-[#FFFFFF]" />
              </div>
              <h3 className="text-2xl font-black text-[#FFFFFF] mb-4 tracking-tighter uppercase">3. Direct Kijken</h3>
              <p className="text-[#F4F6F9]/80 text-base font-bold leading-relaxed">
                Voer uw inloggegevens in op uw Smart TV, Firestick of IPTV app en geniet direct van al uw favoriete zenders in 4K.
              </p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Living Room Section */}
      <section className="w-full bg-[#0A1A2F] py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden border-b border-white/10">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-none bg-[#008000] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#FFFFFF] shadow-md border border-[#39FF14]/30">
            ULTIEME KIJKERVARING
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#FFFFFF] leading-none">
            HAAL DE BIOSCOOP NAAR UW <span className="text-[#39FF14]">WOONKAMER</span>
          </h2>
        </div>

        <div className="w-full bg-black/20 py-8 flex justify-center items-center">
          <div className="w-full max-w-[1100px] px-6 h-auto flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt={`Bioscoopkwaliteit IPTV streaming in de woonkamer`}
              width={1200}
              height={480}
              loading="lazy"
              className="h-full w-full object-cover"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-[#F4F6F9] font-bold">
            Geniet van ongecomprimeerde 4K livestreams en uw favoriete series vanuit uw eigen bank. Kies voor betrouwbare <strong>IPTV Kopen</strong> diensten en ervaar topkwaliteit.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link 
              href="/pakketten" 
              className="px-10 py-4 text-sm font-black uppercase tracking-widest text-[#0A1A2F] rounded-2xl bg-[#FFD700] hover:scale-[1.02] active:scale-[0.98] transition duration-300 shadow-[0_10px_30px_rgba(255,215,0,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(184,155,0,0.6)] border border-yellow-200"
            >
              Activeer Uw Abonnement Direct
            </Link>
          </div>
        </div>
      </section>

      {/* Media Grid Section */}
      <section id="channels" className="pt-24 bg-[#0A1A2F] max-w-[100vw] overflow-hidden relative min-h-[400px] pb-12">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tighter leading-none">
              HET MEEST COMPLETE <span className="text-[#39FF14]">ZENDERAANBOD</span>
            </h2>
            <p className="text-[#F4F6F9] font-bold text-lg">
              Toegang tot meer dan 20.000 live televisiezenders en 60.000+ VOD films en series met Nederlandse ondertiteling via <strong>IPTV Nederland</strong>.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#FFFFFF]/10 rounded-none" />
            ))}
          </div>
        )}
      </section>

      <section className="max-w-8xl mx-auto px-4 w-full bg-[#0A1A2F] py-12">
        <TargetCountries />
      </section>

      {/* Pricing Section */}
      <div className="min-h-[600px] bg-[#0A1A2F]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      {/* Trust Badges */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0A1A2F]">
        <div className="bg-[#132948] rounded-none p-8 md:p-12 shadow-2xl border-2 border-white/10 text-[#FFFFFF]">
          <FadeInStagger className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-none bg-[#0A1A2F] flex items-center justify-center shrink-0 shadow-md border border-[#39FF14]/30">
                <Lock className="w-8 h-8 text-[#39FF14]" />
              </div>
              <div>
                <div className="font-black text-[#FFFFFF] text-xl uppercase tracking-tight">Veilige Betaling</div>
                <p className="text-[#F4F6F9]/70 font-bold text-sm">Beveiligde transacties via iDEAL, PayPal en Crypto</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-none bg-[#0A1A2F] flex items-center justify-center shrink-0 shadow-md border border-[#39FF14]/30">
                <ThumbsUp className="w-8 h-8 text-[#39FF14]" />
              </div>
              <div>
                <div className="font-black text-[#FFFFFF] text-xl uppercase tracking-tight">Niet Goed, Geld Terug</div>
                <p className="text-[#F4F6F9]/70 font-bold text-sm">7 dagen volledige tevredenheidsgarantie</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-none bg-[#0A1A2F] flex items-center justify-center shrink-0 shadow-md border border-[#39FF14]/30">
                <LifeBuoy className="w-8 h-8 text-[#39FF14]" />
              </div>
              <div>
                <div className="font-black text-[#FFFFFF] text-xl uppercase tracking-tight">24/7 Ondersteuning</div>
                <p className="text-[#F4F6F9]/70 font-bold text-sm">Direct persoonlijk contact via WhatsApp & E-mail</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-none bg-[#0A1A2F] flex items-center justify-center shrink-0 shadow-md border border-[#39FF14]/30">
                <Medal className="w-8 h-8 text-[#39FF14]" />
              </div>
              <div>
                <div className="font-black text-[#FFFFFF] text-xl uppercase tracking-tight">Beste Serverkwaliteit</div>
                <p className="text-[#F4F6F9]/70 font-bold text-sm">Hoogste score van Nederlandse IPTV gebruikers</p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="py-24 bg-[#ffff] relative overflow-hidden border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-[#0A1A2F] mb-4 uppercase tracking-tighter">
              {CONSTANTS.BRAND_NAME} <span className="text-[#0A1A2F] bg-[#39FF14] px-3">IN CIJFERS</span>
            </h3>
            <p className="text-[#0A1A2F] text-base font-bold mt-4">
              Bewezen betrouwbaarheid en tevreden kijkers door heel Nederland met <strong>IPTV Kopen</strong>.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center bg-[#0A1A2F] p-6 border-2 border-white/10 shadow-xl">
              <span className="text-5xl md:text-7xl font-black text-[#39FF14] mb-2">
                <AnimatedCounter value={15} suffix="K+" />
              </span>
              <span className="text-sm text-[#FFFFFF] font-black uppercase tracking-widest mt-2">Actieve Abonnees</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center bg-[#0A1A2F] p-6 border-2 border-white/10 shadow-xl">
              <span className="text-5xl md:text-7xl font-black text-[#39FF14] mb-2">
                <AnimatedCounter value={20} suffix="K+" />
              </span>
              <span className="text-sm text-[#FFFFFF] font-black uppercase tracking-widest mt-2">Live Zenders</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center bg-[#0A1A2F] p-6 border-2 border-white/10 shadow-xl">
              <span className="text-5xl md:text-7xl font-black text-[#39FF14] mb-2">
                <AnimatedCounter value={60} suffix="K+" />
              </span>
              <span className="text-sm text-[#FFFFFF] font-black uppercase tracking-widest mt-2">VOD Titels</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center bg-[#0A1A2F] p-6 border-2 border-white/10 shadow-xl">
              <span className="text-5xl md:text-7xl font-black text-[#39FF14] mb-2">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-sm text-[#FFFFFF] font-black uppercase tracking-widest mt-2">Server Uptime</span>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Global Server Map */}
      <div className="min-h-[400px] bg-[#0A1A2F]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* Benefits Section */}
      <section className="py-24 bg-[#0A1A2F] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tighter leading-none">
              WAAROM KIEZEN VOOR <span className="text-[#39FF14]">{CONSTANTS.BRAND_NAME}</span>?
            </h2>
            <p className="text-[#F4F6F9] font-bold text-lg max-w-3xl mx-auto">
              Ontdek waarom duizenden Nederlandse huishoudens kiezen voor onze stabiele service bij <strong>IPTV Kopen</strong>.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              { 
                icon: Database, 
                title: "Enorme Content Bibliotheek", 
                desc: `Elk abonnement biedt meer dan 20.000 live tv-zenders en 60.000+ films en series die dagelijks worden bijgewerkt.` 
              },
              { 
                icon: Activity, 
                title: "Anti-Freeze Technologie", 
                desc: "Onze geavanceerde servers voorkomen automatisch buffering en haperingen tijdens populaire live sportwedstrijden." 
              },
              { 
                icon: Server, 
                title: "Europese Supersnelle Servers", 
                desc: "Dedicated high-speed servers in Nederland en Europa garanderen een razendsnelle zaptijd en constante 4K kwaliteit." 
              },
              { 
                icon: Trophy, 
                title: "Alle Sportkanalen Inbegrepen", 
                desc: "Bekijk de Eredivisie, Champions League, Formule 1, Viaplay, Ziggo Sport en alle grote vechtsport PPV evenementen." 
              },
              { 
                icon: Calendar, 
                title: "Elektronische TV-Gids (EPG)", 
                desc: "Volg gemakkelijk het actuele programmaoverzicht en kijk gemiste uitzendingen tot 7 dagen terug met catch-up." 
              },
              { 
                icon: Users, 
                title: "Multi-Screen Verbindingen", 
                desc: "Koppel eenvoudig 1, 2 of 3 apparaten tegelijkertijd zodat iedereen in huis naar zijn eigen favoriete zender kan kijken." 
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#132948] text-[#FFFFFF] rounded-none p-8 border-2 border-white/10 hover:border-[#39FF14] transition-all group shadow-xl">
                  <div className="w-14 h-14 rounded-none bg-[#008000] flex items-center justify-center mb-6 shadow-md border border-[#39FF14]/30">
                    <Icon className="w-7 h-7 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-xl font-black text-[#FFFFFF] mb-3 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-[#F4F6F9]/80 font-bold">{item.desc}</p>
                </div>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* Channel Categories */}
      <section className="py-24 bg-[#39FF14] text-[#0A1A2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-none">
              ZENDERCATEGORIEËN
            </h2>
            <p className="font-bold text-lg max-w-3xl mx-auto">
              Ons zenderaanbod dekt al uw favoriete live sport, Nederlandse televisie en internationale kanalen.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { cat: "Live Sport", channels: "Viaplay, Ziggo Sport, ESPN, DAZN, Formule 1 & Eredivisie", icon: Trophy },
              { cat: "Nederlandse Zenders", channels: "NPO 1/2/3, RTL 4/5/7/8, SBS6, Veronica, Net5 in 4K", icon: Tv },
              { cat: "Films & Series (VOD)", channels: "Nieuwste releases, Netflix, HBO Max & Disney+ content", icon: Film },
              { cat: "Kids & Familie", channels: "Nickelodeon, Disney Channel, Cartoon Network, Telekids", icon: Shield },
              { cat: "Internationaal", channels: "België, Turkije, Marokko, VK, Duitsland, Frankrijk, Spanje", icon: Globe },
              { cat: "Muziek Zenders", channels: "MTV, XITE, Slam! TV, 100% NL TV, Club Dance zenders", icon: Volume2 },
              { cat: "Documentaires", channels: "Discovery Channel, National Geographic, History, Animal Planet", icon: Globe },
              { cat: "PPV & Evenementen", channels: "Alle UFC Main Cards, Glory Kickboxing, Boksen & WWE", icon: Trophy }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#FFFFFF] text-[#0A1A2F] rounded-none p-4 border-2 border-[#0A1A2F] hover:border-[#FFD700] transition-all shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-[#008000]" />
                    <h3 className="font-black text-[#0A1A2F] text-sm sm:text-base uppercase tracking-wider">{item.cat}</h3>
                  </div>
                  <p className="text-[#0A1A2F]/70 font-bold text-xs">{item.channels}</p>
                </div>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="bg-[#0A1A2F] py-20 border-t border-b border-white/10">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          
          {/* Block 1 */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-1 overflow-hidden rounded-none bg-[#132948] p-3 shadow-2xl border-2 border-white/10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-none sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/image-1.webp"
                  alt={`4K Ultra HD streaming kwaliteit op Smart TV`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute left-4 top-4 rounded-none bg-[#0A1A2F] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#39FF14] shadow-md border border-[#39FF14]/30">
                  4K Ultra HD Kwaliteit
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-none bg-[#0A1A2F] p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[320px] border border-white/20 shadow-xl">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-none bg-[#008000] text-[#FFFFFF] shrink-0 border border-[#39FF14]/30">
                      <PlayCircle className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-lg font-black uppercase text-[#FFFFFF]">Haarscherpe Streams</p>
                      <p className="text-xs font-bold text-[#39FF14]">
                        Geniet van ongecomprimeerde 4K resolutie en 60fps vloeiende live uitzendingen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FadeIn className="order-2">
              <span className="mb-4 inline-flex rounded-none bg-[#008000] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#FFFFFF] shadow-md border border-[#39FF14]/30">
                PREMIUM STREAMING ERVARING
              </span>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF] leading-none mb-4">
                ERVAAR ONGEËVENAARDE <span className="text-[#39FF14]">4K BEELDKWALITEIT</span>
              </h3>
              <p className="mt-6 text-base leading-relaxed text-[#F4F6F9] font-bold">
                Dankzij onze krachtige servers heeft u direct toegang tot stabiele digitale televisiekanalen. Met <strong>IPTV Kopen</strong> bent u verzekerd van naadloze streams op al uw apparaten zonder kwaliteitsverlies.
              </p>
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Anti-freeze technologie zonder buffering', 
                  'Alle Nederlandse zenders in 4K & Full HD', 
                  'Dagelijks geüpdatete VOD bibliotheek', 
                  'Geschikt voor Smart TV, Firestick en Android'
                ].map((item) => (
                  <div key={item} className="rounded-none bg-[#132948] px-4 py-3 text-sm font-black uppercase text-[#FFFFFF] shadow-md border border-white/10">✓ {item}</div>
                ))}
              </div>
              
              <div className="w-full flex sm:inline-flex mt-8 px-1">
                <Link 
                  href="/pakketten" 
                  className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 text-sm font-black uppercase tracking-widest text-[#0A1A2F] rounded-2xl bg-[#FFD700] hover:scale-[1.02] active:scale-[0.98] transition duration-300 shadow-[0_10px_30px_rgba(255,215,0,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(184,155,0,0.6)] border border-yellow-200 shrink-0"
                >
                  Bestel Direct Uw Toegang
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Block 2 */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <span className="mb-4 inline-flex rounded-none bg-[#008000] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#FFFFFF] shadow-md border border-[#39FF14]/30">
                LIVE SPORT & PPV EVENEMENTEN
              </span>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FFFFFF] leading-none mb-4">
                MIS GEEN ENKELE <span className="text-[#39FF14]">LIVE WEDSTRIJD</span>
              </h3>
              <p className="mt-6 text-base leading-relaxed text-[#F4F6F9] font-bold">
                Sportliefhebbers kijken onbeperkt naar de Eredivisie, Champions League, Formule 1, UFC en Premier League. Via onze <strong>IPTV Nederland</strong> dienst streamt u alle live evenementen in 50/60fps met minimale vertraging.
              </p>
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Alle Viaplay & Ziggo Sport kanalen', 
                  'UFC & Glory Kickboxing PPV inbegrepen', 
                  'Lage latency en minimale vertraging', 
                  'Constante hoge bitrate streams'
                ].map((item) => (
                  <div key={item} className="rounded-none bg-[#132948] px-4 py-3 text-sm font-black uppercase text-[#FFFFFF] shadow-md border border-white/10">✓ {item}</div>
                ))}
              </div>
              
              <div className="w-full flex sm:inline-flex mt-8 px-1">
                <Link 
                  href="/pakketten" 
                  className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 text-sm font-black uppercase tracking-widest text-[#0A1A2F] rounded-2xl bg-[#FFD700] hover:scale-[1.02] active:scale-[0.98] transition duration-300 shadow-[0_10px_30px_rgba(255,215,0,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(184,155,0,0.6)] border border-yellow-200 shrink-0"
                >
                  Ontgrendel Alle Sportkanalen
                </Link>
              </div>
            </FadeIn>
            <div className="relative order-1 overflow-hidden rounded-none bg-[#132948] p-3 lg:order-2 shadow-2xl border-2 border-white/10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-none sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/bg-1.webp"
                  alt={`Live sport Eredivisie en Formule 1 uitzendingen`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute left-4 top-4 rounded-none bg-[#0A1A2F] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#39FF14] shadow-md border border-[#39FF14]/30">
                  Live Sport Streams
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-none bg-[#0A1A2F] p-4 border border-white/20 shadow-xl">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-[#008000] text-[#FFFFFF] border border-[#39FF14]/30">
                      <Trophy className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-lg font-black uppercase text-[#FFFFFF]">VIP Sport Pass</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#39FF14]">Alle Wedstrijden Live</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 relative overflow-hidden bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#008000] px-4 py-2 rounded-none border border-[#39FF14]/30 mb-6 shadow-md">
              <BarChart className="w-4 h-4 text-[#FFD700]" />
              <span className="text-[#FFFFFF] font-black text-sm uppercase tracking-wider">Vergelijking</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight">
              {CONSTANTS.BRAND_NAME} <span className="text-[#39FF14]">VS TRADITIONELE KABEL</span>
            </h2>
            <p className="text-[#F4F6F9] text-lg font-bold max-w-3xl mx-auto">
              Ontdek waarom duizenden overstappen op onze service: voordeliger, flexibeler en véél meer zenders dan traditionele kabel-tv.
            </p>
          </FadeIn>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <div className="bg-[#132948] text-[#FFFFFF] rounded-none border-2 border-white/10 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 border-b border-r border-white/10 bg-[#0A1A2F]"><h3 className="text-xl font-black text-[#FFFFFF]">Functies</h3></div>
                <div className="p-6 border-b border-r border-white/10 bg-[#008000] text-[#FFFFFF]"><h3 className="text-xl font-black text-[#FFFFFF]">IPTVKopen.plus</h3></div>
                <div className="p-6 border-b border-white/10 bg-[#0A1A2F]"><h3 className="text-xl font-black text-[#FFFFFF]/50">Traditionele Kabel</h3></div>
                
                {[
                  { feature: "Maandelijkse Kosten", us: "Vanaf €4,08 / maand", cable: "€60 - €120 per maand", highlight: true },
                  { feature: "Contractduur", us: "Geen contract (Geheel flexibel)", cable: "12 tot 24 maanden vast" },
                  { feature: "Aantal Live Zenders", us: "20.000+ Kanalen", cable: "60 - 150 Kanalen", highlight: true },
                  { feature: "VOD Films & Series", us: "60.000+ Titels (Wekelijks nieuw)", cable: "Beperkt / Extra betalen per film" },
                  { feature: "4K & FHD Kwaliteit", us: "Inbegrepen", cable: "Zelden / Alleen duur pluspakket", usIcon: true },
                  { feature: "Multi-Scherm Ondersteuning", us: "Tot 3 apparaten tegelijk", cable: "Extra kosten per decoder", usIcon: true },
                  { feature: "Live Sport & PPV", us: "Volledig Inbegrepen", cable: "€15 - €30 extra per sportpakket", usIcon: true },
                  { feature: "Internationale Kanalen", us: "100+ Landen beschikbaar", cable: "Alleen lokaal", highlight: true }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-0 contents">
                    <div className={`p-6 border-r border-white/10 ${idx % 2 === 0 ? 'bg-[#0A1A2F]' : 'bg-[#132948]'}`}>
                      <span className="text-[#FFFFFF] font-bold">{row.feature}</span>
                    </div>
                    <div className={`p-6 border-r border-white/10 ${idx % 2 === 0 ? 'bg-[#0A1A2F]/80' : 'bg-[#132948]'}`}>
                      {row.usIcon ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#39FF14]" />
                          <span className="text-[#FFFFFF] font-black">{row.us}</span>
                        </div>
                      ) : (
                        <span className={`${row.highlight ? 'text-[#39FF14] font-black' : 'text-[#FFFFFF]'}`}>{row.us}</span>
                      )}
                    </div>
                    <div className={`p-6 ${idx % 2 === 0 ? 'bg-[#0A1A2F]' : 'bg-[#132948]'}`}>
                      <span className="text-[#FFFFFF]/40 line-through">{row.cable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-6">
            {[
              { feature: "Maandelijkse Kosten", us: "Vanaf €4,08 / mnd", cable: "€60 - €120/mnd" },
              { feature: "Contractduur", us: "Geen contract", cable: "12-24 maanden vast" },
              { feature: "Live Zenders", us: "20.000+", cable: "60-150" },
              { feature: "VOD Bibliotheek", us: "60.000+ films & series", cable: "Beperkt" },
              { feature: "4K Streaming", us: "Inbegrepen", cable: "Zelden" },
              { feature: "Multi-Scherm", us: "Tot 3 schermen", cable: "Extra kosten" },
              { feature: "Sport & PPV", us: "Inbegrepen", cable: "Extra €15-30/mnd" },
              { feature: "Internationale Zenders", us: "100+ landen", cable: "Alleen lokaal" }
            ].map((row, idx) => (
              <div key={idx} className="bg-[#132948] text-[#FFFFFF] rounded-none border-2 border-white/10 p-6 shadow-xl">
                <div className="text-center mb-4">
                  <span className="text-[#FFFFFF]/60 text-sm uppercase tracking-wider font-bold">{row.feature}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <div className="text-[#39FF14] font-black text-lg">{row.us}</div>
                    <div className="text-[#FFFFFF]/70 text-xs font-bold">IPTVKopen.plus</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#FFFFFF]/40 line-through text-lg">{row.cable}</div>
                    <div className="text-[#FFFFFF]/30 text-xs">Kabel TV</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-8xl mx-auto px-4 my-8 flex justify-center items-center bg-[#0A1A2F]">
        <ShareButtons />
      </section>


{/* Dutch Testimonials Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight">
            VERTROUWD DOOR MEER DAN <span className="text-[#39FF14]">20.000+ KLANTEN</span>
          </h2>
          <p className="text-[#F4F6F9] text-lg font-bold max-w-2xl mx-auto">
            Lees authentieke ervaringen en reviews van tevreden IPTV kijkers door heel Nederland.
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "Julia V.", 
              text: "Eindelijk een IPTV aanbieder die niet hapert tijdens de Klassieker of Formule 1 races. De 4K beeldkwaliteit op mijn OLED TV is geweldig scherp.", 
              role: "Amsterdam",
              avatar: "/img/profile/img-1.jpeg"
            },
            { 
              name: "Emma K.", 
              text: "Mijn dure kabelabonnement direct opgezegd. Binnen 5 minuten geïnstalleerd op mijn Samsung Smart TV dankzij de snelle service.", 
              role: "Rotterdam",
              avatar: "/img/profile/img-3.jpeg"
            },
            { 
              name: "Noah B.", 
              text: "Enorm aanbod aan Nederlandse en buitenlandse zenders. Films hebben actuele Nederlandse ondertitels en het werkt simpelweg perfect.", 
              role: "Utrecht",
              avatar: "/img/profile/img-2.jpeg"
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-[#111111] text-[#FFFFFF] p-8 border-2 border-white/10 shadow-2xl transition-transform hover:-translate-y-2 duration-300 flex flex-col justify-between">
              <div>
                {/* Header with 5-Star Rating & Quote Icon */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#39FF14] text-sm">★</span>
                    ))}
                  </div>
                  <span className="text-xs uppercase font-black tracking-widest text-[#39FF14] bg-[#39FF14]/10 px-3 py-1 rounded-2xl border border-[#39FF14]/20">
                    Geverifieerd
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-[#FFFFFF]/90 font-bold text-base md:text-lg leading-relaxed mb-8 italic">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>

              {/* Profile Pic & Author Info */}
              <div className="border-t border-white/10 pt-5 flex items-center gap-4">
                <div className="relative w-14 h-14 overflow-hidden border-2 border-[#39FF14] shrink-0 shadow-md">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-black text-[#FFFFFF] text-lg uppercase tracking-tight">{testimonial.name}</div>
                  <div className="text-[#39FF14] text-xs font-black uppercase tracking-wider mt-0.5">📍 {testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </FadeInStagger>
      </section>


      {/* Supported Devices Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full relative bg-[#0A1A2F] border-t border-white/10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight">
            COMPATIBEL MET ELKE <span className="text-[#39FF14]">IPTV PLAYER</span>
          </h2>
          <p className="text-[#F4F6F9] text-lg font-black max-w-3xl mx-auto mb-16">
            Onze service werkt soepel op al uw favoriete schermen. Configureer eenvoudig een player app en begin direct met streamen.
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
          {[
            { tag: "Smart TV (Samsung & LG)", icon: Tv2 },
            { tag: "Android TV & Boxen", icon: Cpu },
            { tag: "Apple TV & iOS", icon: MonitorSmartphone },
            { tag: "Amazon Firestick", icon: Zap },
            { tag: "Windows PC & Mac", icon: MonitorPlay },
            { tag: "MAG & Formuler Boxen", icon: ShieldCheck },
          ].map((device) => {
            const Icon = device.icon;
            return (
              <div key={device.tag} className="bg-[#132948] text-[#FFFFFF] backdrop-blur-sm border-2 border-white/10 rounded-none p-6 flex flex-col items-center justify-center gap-4 hover:border-[#39FF14] hover:bg-[#132948]/80 hover:-translate-y-2 transition-all cursor-pointer group shadow-xl">
                <Icon className="w-12 h-12 text-[#39FF14] group-hover:scale-110 transition-all" />
                <span className="text-sm font-black text-[#FFFFFF] text-center">{device.tag}</span>
              </div>
            );
          })}
        </FadeInStagger>
      </section>

      {/* FAQ Section */}
      <div className="min-h-[400px] max-w-8xl bg-[#0A1A2F]">
        {isMounted ? <FAQ /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* Blog Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative bg-[#0A1A2F] border-t-4 border-[#39FF14]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#39FF14]/10 border border-[#39FF14]/30 px-4 py-2 rounded-none mb-4 shadow-md">
              <span className="text-[#39FF14] font-black text-xs uppercase tracking-widest">Kennisbank & Tips</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tight leading-tight">
              LAATSTE <span className="text-[#FFD700]">ARTIKELEN & HANDLEIDINGEN</span>
            </h2>
            <p className="text-[#F4F6F9]/80 text-base md:text-lg font-bold mt-3 max-w-2xl">
              Lees onze handige tips over installatie, app-instellingen en de nieuwste updates voor optimale IPTV streaming in Nederland.
            </p>
          </div>
          
          <div className="flex shrink-0">
            <Link 
              href="/kennisbank" 
              className="whitespace-nowrap px-6 py-4 rounded-2xl bg-[#FFD700] text-[#0A1A2F] font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 group shrink-0 shadow-[0_10px_30px_rgba(255,215,0,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(184,155,0,0.6)] border border-yellow-200"
            >
              <span>Bekijk Kennisbank</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {blogPosts.slice(0, 3).map((post, index) => (
            <div 
              key={post.slug ? `${post.slug}-${index}` : index} 
              className="group bg-[#132948] border-2 border-white/10 hover:border-[#39FF14] p-5 rounded-none transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] flex flex-col justify-between hover:-translate-y-1"
            >
              <Link href={`/kennisbank/${post.slug}`} className="block h-full flex flex-col justify-between">
                <div>
                  <div className="relative aspect-video rounded-none overflow-hidden mb-6 bg-[#0A1A2F] border border-white/10 shadow-lg group-hover:border-[#39FF14]/50 transition-colors duration-300">
                    <Image 
                      src={post.image} 
                      alt={`${post.title} Handleiding`} 
                      width={800} 
                      height={450} 
                      loading="lazy" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      sizes="(max-width: 768px) 100vw, 33vw" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-[#39FF14] text-[#0A1A2F] text-[10px] font-black uppercase tracking-widest rounded-none inline-block shadow-md">
                        {post.author}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#FFFFFF] mb-3 group-hover:text-[#39FF14] transition-colors tracking-tight line-clamp-2 uppercase">
                    {post.title}
                  </h3>

                  <p className="text-[#F4F6F9]/80 text-sm mb-6 line-clamp-2 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-black text-[#39FF14] uppercase tracking-widest group-hover:text-[#0A1A2F] px-3 py-2 group-hover:bg-[#FFFFFF] transition-transform group-hover:gap-3 transition-all">
                    Lees Artikel <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] font-bold text-[#F4F6F9]/60 uppercase tracking-wider">
                    Handleiding
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </FadeInStagger>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A1A2F]">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-none border-2 border-white/20 bg-[#132948] text-[#FFFFFF] shadow-[0_0_80px_rgba(57,255,20,0.15)]">
            <Image
              src="/img/bg-2.webp"
              alt={`Stabiele verbinding en directe activatie`}
              width={1400}
              height={600}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-15 brightness-[0.4]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#0A1A2F]/90" />
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#39FF14]/20 blur-[110px]" />

            <FadeIn className="relative z-10 px-6 py-14 text-center sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">
              <div className="mb-6 inline-flex items-center gap-2 rounded-none border border-[#39FF14]/40 bg-[#39FF14]/10 px-4 py-2 backdrop-blur-md shadow-md">
                <svg className="h-4 w-4 text-[#39FF14]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L13 7L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7 7L10 2Z" />
                </svg>
                <span className="text-xs font-black uppercase tracking-[0.22em] text-[#FFFFFF]">
                  Premium 4K Kwaliteit
                </span>
              </div>
              <h2 className="mx-auto max-w-5xl text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-[#FFFFFF] leading-none mb-6">
                UPGRADE UW <br/><span className="text-[#39FF14]">TV ERVARING VANDAAG</span>
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#F4F6F9]/90 md:text-lg font-bold">
                Krijg direct toegang tot alle sportkanalen, films en live televisie in 4K Ultra HD kwaliteit. Snelle activatie binnen 5 minuten op al uw apparaten.
              </p>
              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['20K+', 'Live Zenders'],
                  ['4K Ultra', 'Beeldkwaliteit'],
                  ['99.9%', 'Server Uptime'],
                  ['24/7', 'WhatsApp Support'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-none border-2 border-white/10 bg-[#0A1A2F] p-4 backdrop-blur-md shadow-lg">
                    <div className="text-2xl font-black text-[#39FF14] sm:text-3xl">{value}</div>
                    <div className="mt-1 text-[10px] font-black uppercase tracking-widest text-[#FFFFFF]/70">{label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto px-4">
                <Link 
                  href="/pakketten" 
                  className="w-full sm:w-auto text-center whitespace-nowrap px-10 py-4 text-sm font-black uppercase tracking-widest text-[#0A1A2F] rounded-2xl bg-[#FFD700] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_30px_rgba(255,215,0,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(184,155,0,0.6)] border border-yellow-200 shrink-0"
                >
                  Kies Uw Abonnement
                </Link>
                <Link 
                  href="/installatie" 
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-[#FFFFFF] rounded-2xl bg-[#132948] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_30px_rgba(0,212,255,0.2),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.2)] border border-white/30 shrink-0"
                >
                  <Settings className="h-5 w-5 text-[#39FF14] shrink-0" /> Installatie Handleiding
                </Link>
              </div>
              
              <p className="mt-8 text-sm font-black text-[#FFFFFF]/70">
                Veilig Betalen • Geen Vast Contract • Directe Activatie Binnen 5 Minuten
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}