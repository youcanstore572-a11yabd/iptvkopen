import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { 
  Award, 
  Globe, 
  Users, 
  Server, 
  Zap, 
  ShieldCheck, 
  Trophy, 
  Headphones, 
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  Tv,
  Film,
  Activity
} from 'lucide-react';

export const metadata = generateSEOMetadata(
  'Over Ons',
  `Ontdek het verhaal achter ${CONSTANTS.BRAND_NAME}: dé betrouwbare IPTV aanbieder van Nederland en België met 20.000+ zenders in 4K Ultra HD en 99.9% uptime.`,
  '/about'
);

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A1A2F] text-[#F4F6F9]">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,212,255,0.1),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#39FF1408_1px,transparent_1px),linear-gradient(to_bottom,#39FF1408_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#39FF14] text-[#0A1A2F] px-4 py-2 rounded-none mb-6 shadow-lg border border-white/25">
            <Sparkles className="w-4 h-4 text-[#0A1A2F]" />
            <span className="text-[#0A1A2F] font-black text-xs uppercase tracking-widest">
              Ons Verhaal & Missie
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Over <span className="text-[#FFD700]">{CONSTANTS.BRAND_NAME}</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F4F6F9]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            De nummer #1 premium IPTV provider voor Nederland en België. Ervaar grenzeloos streamen in 4K beeldkwaliteit zonder haperingen of dure contracten.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" aria-label="Bedrijfsstatistieken">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: "20.000+", label: "Tevreden Klanten" },
            { icon: Globe, value: "100+", label: "Landen Beschikbaar" },
            { icon: Server, value: "99.9%", label: "Server Uptime" },
            { icon: Trophy, value: "4.9/5", label: "Gemiddelde Score" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-[#132948] border-4 border-[#39FF14]/40 rounded-none shadow-xl hover:scale-[1.02] transition-transform">
              <stat.icon className="w-10 h-10 text-[#39FF14] mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight">{stat.value}</div>
              <div className="text-[#F4F6F9]/70 text-xs font-black uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* High-CTR Promotion Banner */}
      <section className="w-full bg-gradient-to-r from-[#39FF14] via-[#132948] to-[#39FF14] py-10 px-4 sm:px-6 border-y-4 border-white/10 shadow-[0_0_50px_rgba(0,212,255,0.2)] relative z-20 overflow-hidden group">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="bg-[#FFD700] text-[#0A1A2F] font-black text-xs px-5 py-2 rounded-none uppercase tracking-widest shadow-md border border-white/20">
            DIRECT BESPAREN OP KABELTEVISIE
          </div>
          <h2 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            KLAAR VOOR DE BESTE IPTV ERVARING?
          </h2>
          <p className="text-[#F4F6F9]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Stop met teveel betalen voor losse abonnementen. Krijg alle sport, films en Nederlandse zenders in één compleet pakket.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/pakketten"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FFD700] text-[#0A1A2F] hover:bg-[#39FF14] hover:scale-105 transition-all duration-300 px-10 py-4 rounded-none font-black text-sm uppercase tracking-widest shadow-2xl border border-white/20"
            >
              <span>Bekijk Abonnementen</span>
              <ArrowRight className="w-5 h-5 text-[#0A1A2F]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        
        {/* Intro Card */}
        <div className="bg-[#132948] border-4 border-[#39FF14]/40 rounded-none p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-none bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#39FF14]" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight mb-2">
                Welkom bij {CONSTANTS.BRAND_NAME}
              </h2>
              <p className="text-[#F4F6F9]/90 font-bold text-base leading-relaxed">
                Wij zijn opgericht met een helder doel: premium live televisie en on-demand media toegankelijk en betaalbaar maken voor iedereen in Nederland en Vlaanderen, zonder concessies te doen aan beeldkwaliteit of stabiliteit.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Narrative Sections */}
        <div className="space-y-12">
          
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#39FF14] rounded-none inline-block" />
              Onze Missie & Visie
            </h2>
            <p className="text-[#F4F6F9]/80 text-base leading-relaxed font-medium mb-4">
              Traditionele kabelabonnementen worden elk jaar duurder, terwijl het zenderaanbod beperkt blijft. Consumenten worden gedwongen om meerdere losse abonnementen af te sluiten voor voetbal, Formule 1 en films.
            </p>
            <p className="text-[#F4F6F9]/80 text-base leading-relaxed font-medium">
              Bij {CONSTANTS.BRAND_NAME} bundelen we alles op één intuïtief platform: live sport, nationale zenders en de nieuwste bioscoopfilms in 4K Ultra HD. Wij investeren continu in geavanceerde servercapaciteit om haperingen definitief tot het verleden te laten behoren.
            </p>
          </section>

          {/* Feature Grid */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#39FF14] rounded-none inline-block" />
              Waarom {CONSTANTS.BRAND_NAME} De Beste Keuze Is
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  icon: ShieldCheck, 
                  title: "99.9% Uptime Garantie", 
                  desc: "Onze redundante serverclusters zorgen ervoor dat uw favoriete uitzendingen altijd live en storingsvrij beschikbaar zijn." 
                },
                { 
                  icon: Zap, 
                  title: "Anti-Freeze Technologie", 
                  desc: "Geavanceerde load-balancers voorkomen buffering tijdens piekuren en drukbezochte live sportevenementen." 
                },
                { 
                  icon: Server, 
                  title: "Europese High-Speed Servers", 
                  desc: "Direct aangesloten op grote Europese internetknooppunten (AMS-IX) voor minimale vertraging en snelle zaptijden." 
                },
                { 
                  icon: Headphones, 
                  title: "24/7 WhatsApp Klantenservice", 
                  desc: "Deskundige hulp bij installatie, app-keuze en zenderconfiguratie binnen enkele minuten." 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-[#132948] rounded-none border-4 border-[#39FF14]/40 shadow-lg">
                  <item.icon className="w-8 h-8 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-black text-[#FFFFFF] text-base uppercase tracking-wider">{item.title}</h3>
                    <p className="text-[#F4F6F9]/80 text-xs font-bold mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Infrastructure Explanatory Card */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#39FF14] rounded-none inline-block" />
              Onze Technische Serverinfrastructuur
            </h2>
            <p className="text-[#F4F6F9]/80 text-base leading-relaxed font-medium mb-6">
              In tegenstelling tot standaard IPTV wederverkopers beheren wij onze eigen streamingservers met dedicated 10 Gbps glasvezelverbindingen. Onze servers routeren het videosignaal automatisch via het dichtstbijzijnde knooppunt, waardoor u altijd geniet van een vloeiende 50/60 fps streamkwaliteit.
            </p>
            <div className="bg-[#132948] border border-white/10 rounded-none p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white/5 rounded-none border border-white/5">
                  <Activity className="w-8 h-8 text-[#39FF14] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">Lage Latency</div>
                  <p className="text-xs text-[#F4F6F9]/60 font-bold mt-1">Minimale vertraging bij live sport</p>
                </div>
                <div className="p-4 bg-white/5 rounded-none border border-white/5">
                  <Film className="w-8 h-8 text-[#39FF14] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">H.265 / HEVC</div>
                  <p className="text-xs text-[#F4F6F9]/60 font-bold mt-1">Optimaal dataverbruik bij 4K</p>
                </div>
                <div className="p-4 bg-white/5 rounded-none border border-white/5">
                  <Tv className="w-8 h-8 text-[#39FF14] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">Universeel</div>
                  <p className="text-xs text-[#F4F6F9]/60 font-bold mt-1">Werkt op elk Smart TV systeem</p>
                </div>
              </div>
            </div>
          </section>

          {/* Content Catalog Details */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#39FF14] rounded-none inline-block" />
              Het Meest Complete Zenderaanbod
            </h2>
            <p className="text-[#F4F6F9]/80 text-base leading-relaxed font-medium mb-6">
              Met meer dan <strong className="text-[#FFFFFF]">20.000 live televisiezenders</strong> en een videobibliotheek van <strong className="text-[#FFFFFF]">60.000+ films en series</strong> bieden wij het breedste zenderpakket van de Benelux:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Alle Nederlandse zenders (NPO 1/2/3, RTL 4/5/7/8, SBS6, Veronica, Net5) in 4K & Full HD",
                "Live sportzenders inclusief Viaplay, Ziggo Sport Totaal, ESPN Compleet en DAZN",
                "Formule 1, Eredivisie, Premier League, Champions League en alle UFC PPV evenementen",
                "Groot internationaal aanbod uit België, het Verenigd Koninkrijk, Duitsland, Frankrijk, Turkije en Marokko",
                "Dagelijks bijgewerkte VOD-catalogus met Nederlandse ondertiteling voor bioscoopfilms en topseries",
                "Elektronische Programmagids (EPG) en 7-daagse terugkijkfunctie (Catch-up)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F4F6F9]/80 font-bold text-sm md:text-base">
                  <Star className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Consumer Guarantee & Safety */}
          <section>
            <div className="bg-[#132948] border-4 border-green-500 rounded-none p-6 md:p-8 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-none bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-green-400 font-black text-lg md:text-xl uppercase tracking-tight mb-2">
                    Onze 7 Dagen Tevredenheidsgarantie
                  </h3>
                  <p className="text-[#FFFFFF] text-sm md:text-base font-bold leading-relaxed">
                    Wij zijn 100% overtuigd van de kwaliteit van ons platform. Mocht u binnen 7 dagen om welke reden dan ook niet tevreden zijn over de streams of zenders, dan storten wij uw aankoopbedrag direct terug. Geen gedoe, geen kleine lettertjes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Call-To-Action Card */}
        <div className="mt-16 text-center">
          <div className="bg-[#132948] border-4 border-[#39FF14]/40 rounded-none p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight mb-3">
              Ervaar Het Zelf Zonder Risico
            </h2>
            <p className="text-[#39FF14] font-bold text-base max-w-lg mx-auto mb-8">
              Sluit u aan bij duizenden tevreden huishoudens in Nederland en België. Binnen 5 minuten na bestelling geïnstalleerd en geactiveerd.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto px-4">
              <Link 
                href="/pakketten" 
                className="w-full sm:w-auto text-center px-8 py-4 rounded-none bg-[#39FF14] text-[#0A1A2F] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-md border border-white/20 hover:bg-[#FFD700]"
              >
                Kies Uw Pakket
              </Link>
              <Link 
                href="/installatie" 
                className="w-full sm:w-auto text-center px-8 py-4 rounded-none bg-[#0A1A2F] text-[#FFFFFF] font-black text-sm uppercase tracking-widest border-2 border-[#FFD700] transition-transform hover:scale-105 shadow-md"
              >
                Installatie Handleiding
              </Link>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[#39FF14] hover:text-[#FFD700] transition-colors font-black text-xs uppercase tracking-widest">
            ← Terug naar de homepage
          </Link>
        </div>
      </div>
    </div>
  );
}