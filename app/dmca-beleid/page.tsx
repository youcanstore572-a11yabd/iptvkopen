import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, Mail, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = generateSEOMetadata(
  'DMCA Beleid & Copyright',
  `Lees het officiële DMCA en auteursrechtenbeleid van ${CONSTANTS.BRAND_NAME}. Informatie over copyright bescherming en procedures voor verwijderingsverzoeken.`,
  '/dmca-beleid'
);

export default function DMCAPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-[#F4F6F9]">
      
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(57,255,20,0.1),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#39FF14] text-[#000000] px-4 py-2 rounded-2xl mb-6 shadow-md border border-white/20">
            <ShieldCheck className="w-4 h-4 text-[#000000]" />
            <span className="text-[#000000] font-black text-xs uppercase tracking-widest">
              Auteursrechten & Copyright
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            DMCA <span className="text-[#39FF14]">Beleid</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F4F6F9]/90 font-bold max-w-2xl mx-auto leading-relaxed">
            {CONSTANTS.BRAND_NAME} respecteert de intellectuele eigendomsrechten van derden en leeft de Digital Millennium Copyright Act (DMCA) strikt na.
          </p>
        </div>
      </section>

      {/* Promotion Callout Banner */}
      <section className="w-full bg-[#111111] py-10 px-4 sm:px-6 border-y-2 border-[#39FF14]/40 shadow-2xl relative z-20 overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(57,255,20,0.1),_transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="bg-[#39FF14] text-[#000000] font-black text-xs px-5 py-2 rounded-2xl uppercase tracking-widest shadow-md">
            OFFICIËLE MEDEDELING
          </div>
          <h2 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            PREMIUM STREAMING MET INTEGRITEIT
          </h2>
          <p className="text-[#F4F6F9]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Heeft u vragen over onze diensten, abonnementen of ondersteuning? Ons team helpt u graag verder.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#39FF14] text-[#000000] hover:bg-[#FFFFFF] hover:text-[#000000] hover:scale-105 transition-all duration-300 px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] border border-green-300"
            >
              <span>Bekijk Pakketten</span>
              <ArrowRight className="w-5 h-5 text-[#000000]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full relative z-10">
        
        {/* Notice Card */}
        <div className="bg-[#111111] border-2 border-[#39FF14] rounded-2xl p-6 md:p-8 mb-12 shadow-2xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/15 flex items-center justify-center border border-[#39FF14]/30">
                <AlertCircle className="w-6 h-6 text-[#39FF14]" />
              </div>
            </div>
            <div>
              <p className="text-[#F4F6F9] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#39FF14] font-black uppercase tracking-wide block mb-1">Belangrijke Kennisgeving:</span> 
                {CONSTANTS.BRAND_NAME} host, uploadt of beheert zelf geen mediabestanden op eigen servers. Onze software indexeert en organiseert uitsluitend streams en afspeellijsten die openbaar beschikbaar zijn op het internet.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Text Body */}
        <div className="space-y-10">
          
          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              1. Naleving van het Auteursrecht
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed">
              {CONSTANTS.BRAND_NAME} (&apos;wij&apos;, &apos;ons&apos; of &apos;onze&apos;) zet zich in om de rechten van auteursrechthebbenden wereldwijd te respecteren en de bepalingen van de Digital Millennium Copyright Act (DMCA) en de toepasselijke Europese wetgeving strikt na te leven. Wij verwachten van al onze gebruikers en partners dat zij dezelfde normen hanteren.
            </p>
          </section>

          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              2. Wat Wij Niet Hosten
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed mb-4">
              Het is essentieel om te benadrukken dat <strong className="text-[#FFFFFF]">{CONSTANTS.BRAND_NAME}</strong> geen streamingmedia, videobestanden of tv-uitzendingen uitzendt, opslaat of host vanaf eigen hardware.
            </p>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed">
              Onze dienst fungeert als een technische interface en gids die openbare streamlinks indexeert. Wij hebben geen zeggenschap over, eigendom van of controle over de inhoud van streams die door externe providers op het internet worden gepubliceerd.
            </p>
          </section>

          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              3. Kennisgeving van Inbreuk (Takedown Notice)
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed">
              Indien u de rechtmatige eigenaar bent van een auteursrechtelijk beschermd werk, of bevoegd bent om namens een eigenaar op te treden, en u van mening bent dat inhoud binnen onze directory inbreuk maakt op uw rechten, kunt u een officieel verwijderingsverzoek (DMCA Notice) indienen. Na ontvangst van een geldige melding zullen wij de betreffende streamverwijzingen zo spoedig mogelijk deactiveren.
            </p>
          </section>

          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              4. Procedure voor het Indienen van een Verzoek
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed mb-6">
              Om een formeel DMCA-verzoek in te dienen bij {CONSTANTS.BRAND_NAME}, verzoeken wij u contact op te nemen via ons officiële e-mailadres:
            </p>
            
            {/* Contact Email Box */}
            <div className="bg-[#000000] border-2 border-[#39FF14] rounded-2xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#39FF14] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#FFFFFF]/60 tracking-widest mb-1">Auteursrechten Afdeling</p>
              <a 
                href={`mailto:dmca@${CONSTANTS.DOMAIN}`} 
                className="text-[#39FF14] font-black text-xl md:text-2xl hover:text-white transition-colors"
              >
                dmca@{CONSTANTS.DOMAIN}
              </a>
            </div>

            <p className="text-[#F4F6F9] font-bold text-sm md:text-base mb-4">
              Uw melding dient de volgende gegevens te bevatten:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Een fysieke of elektronische handtekening van de auteursrechthebbende of diens bevoegde vertegenwoordiger.",
                "Een duidelijke specificatie van het auteursrechtelijk beschermde werk waarop inbreuk zou zijn gemaakt.",
                "De exacte links of streamverwijzingen die verwijderd dienen te worden.",
                "Uw volledige contactgegevens: officiële naam, adres, telefoonnummer en e-mailadres.",
                "Een verklaring te goeder trouw dat het betwiste gebruik niet is toegestaan door de auteursrechthebbende.",
                "Een verklaring dat de verstrekte informatie accuraat is, opgesteld op straffe van meineed."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F4F6F9]/80 font-bold text-sm md:text-base bg-[#000000]/50 p-3 rounded-2xl border border-white/5">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              5. Herhaaldelijke Inbreukmakers
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed">
              {CONSTANTS.BRAND_NAME} hanteert een strikt beleid waarbij de accounts en toegangen van wederverkopers of gebruikers die herhaaldelijk inbreuk maken op intellectuele eigendomsrechten, onmiddellijk en definitief worden beëindigd.
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[#39FF14] hover:text-white transition-colors font-black text-xs uppercase tracking-widest">
            ← Terug naar de homepage
          </Link>
        </div>
      </div>
    </div>
  );
}