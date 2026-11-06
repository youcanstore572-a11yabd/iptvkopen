import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { 
  RefreshCw, 
  ShieldCheck, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Mail, 
  MessageSquare,
  Wrench,
  Wifi,
  FileCheck,
  ArrowRight
} from 'lucide-react';

export const metadata = generateSEOMetadata(
  'Garantie & Terugbetalingsbeleid',
  `Bekijk de officiële voorwaarden van de 7 dagen kwaliteitsgarantie van ${CONSTANTS.BRAND_NAME}. Transparante technische richtlijnen en ondersteuningsprocedures.`,
  '/garantiebeleid'
);

export default function RefundPolicyPage() {
  const cleanPhone = (CONSTANTS.CONTACT.phone || '+31612345678').replace(/[^0-9]/g, '');

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
              Geverifieerde Servergarantie
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Garantie & <span className="text-[#39FF14]">Terugbetaling</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F4F6F9]/90 font-bold max-w-2xl mx-auto leading-relaxed">
            {CONSTANTS.BRAND_NAME} staat voor ongeëvenaarde stabiliteit. Wij hanteren een transparante 7-daagse technische kwaliteitsgarantie op al onze actieve streamingverbindingen.
          </p>
          <p className="text-xs text-[#F4F6F9]/50 mt-4 font-bold uppercase tracking-wider">
            Laatst herzien: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full relative z-10">
        
        {/* Marketing Trust Banner */}
        <div className="bg-[#111111] border-2 border-[#39FF14] rounded-2xl p-6 md:p-8 mb-12 shadow-2xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/15 flex items-center justify-center border border-[#39FF14]/30">
                <RefreshCw className="w-6 h-6 text-[#39FF14]" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight mb-1">
                Onze 7 Dagen Kwaliteitsgarantie
              </h2>
              <p className="text-[#F4F6F9]/85 font-bold text-sm md:text-base leading-relaxed">
                Wij leveren uitsluitend hoogwaardige 4K- en Full HD-streams. Om misbruik van digitale licenties te voorkomen en onze serverintegriteit te waarborgen, treedt deze garantie in werking zodra er sprake is van een geverifieerd technisch defect dat onze storingsdienst niet binnen de gestelde hersteltijd kan verhelpen.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Policy Sections */}
        <div className="space-y-10">
          
          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              1. Toepassingsgebied van de Technische Garantie
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed mb-4">
              Een terugbetaling wordt uitsluitend toegekend indien de geleverde dienst structureel en aantoonbaar niet functioneert door oorzaken binnen onze serverinfrastructuur. De volgende voorwaarden zijn cumulatief van toepassing:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "De melding wordt schriftelijk ingediend binnen exact 7 kalenderdagen na het initiële aankooptijdstip.",
                "Er is sprake van een aanhoudende, server-gerelateerde totale uitval van de zenderinfrastructuur.",
                "Onze 24/7 technische helpdesk heeft minimaal 24 uur de gelegenheid gekregen om het gemelde verbindingsprobleem op te lossen of alternatieve routering in te stellen.",
                "De gebruiker heeft de standaard diagnostische verificatiestappen (zoals router-herstart, app-cache legen en DNS-controle) doorlopen."
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
              2. Uitzonderingen & Niet-Vergoedbare Situaties (Niet-Technische Redenen)
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed mb-4">
              Aangezien digitale M3U-afspeellijsten en Xtream-toegangscodes direct na aankoop definitief worden aangemaakt op onze load-balancers, kan <strong className="text-[#FFFFFF]">geen aanspraak</strong> worden gemaakt op restitutie in de volgende situaties:
            </p>

            <div className="bg-[#000000] border-2 border-[#39FF14] rounded-2xl p-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-2xl bg-[#39FF14]/15 flex items-center justify-center border border-[#39FF14]/30">
                    <AlertCircle className="w-5 h-5 text-[#39FF14]" />
                  </div>
                </div>
                <div>
                  <ul className="space-y-2.5 text-[#F4F6F9] text-xs sm:text-sm font-bold leading-relaxed">
                    <li>• <strong className="text-[#39FF14]">Persoonlijke voorkeur:</strong> Verzoeken gebaseerd op smaak, interface-beleving of het &quot;niet meer nodig hebben&quot; van het abonnement.</li>
                    <li>• <strong className="text-[#39FF14]">Lokale netwerkbeperkingen:</strong> Buffering veroorzaakt door een instabiele Wi-Fi verbinding, lokale netwerkcongestie of een internetsnelheid van minder dan 25 Mbps.</li>
                    <li>• <strong className="text-[#39FF14]">Apparaat-incompatibiliteit:</strong> Problemen veroorzaakt door verouderde Smart TV-firmware, niet-ondersteunde IPTV-applicaties van derden of onjuiste lokale configuratie.</li>
                    <li>• <strong className="text-[#39FF14]">Zenderwijzigingen:</strong> Tijdelijke herstructurering of wijziging van individuele zenders binnen de tienduizenden beschikbare kanalen.</li>
                    <li>• <strong className="text-[#39FF14]">Fair Use schendingen:</strong> Accounts die automatisch zijn geblokkeerd wegens illegaal gelijktijdig streamen op meer schermen dan aangeschaft.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              3. Verplichte Diagnose- & Herstelprocedure
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed mb-4">
              Alvorens een terugbetaling kan worden geautoriseerd, doorloopt onze storingsdienst onderstaand drie-stappenprotocol:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-[#000000] border border-white/10 text-center flex flex-col justify-between shadow-md">
                <div>
                  <Wrench className="w-6 h-6 text-[#39FF14] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">1. Lijnverificatie</h4>
                  <p className="text-xs text-[#F4F6F9]/60 font-medium">Controle van uw M3U-token op onze actieve serverpoorten.</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#000000] border border-white/10 text-center flex flex-col justify-between shadow-md">
                <div>
                  <Wifi className="w-6 h-6 text-[#39FF14] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">2. Server Reset</h4>
                  <p className="text-xs text-[#F4F6F9]/60 font-medium">Herroutering van uw streamingsprofiel naar een alternatieve Europese node.</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#000000] border border-white/10 text-center flex flex-col justify-between shadow-md">
                <div>
                  <FileCheck className="w-6 h-6 text-[#39FF14] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">3. Vrijgave</h4>
                  <p className="text-xs text-[#F4F6F9]/60 font-medium">Blijft de storing onoplosbaar? Dan volgt onmiddellijke restitutiegoedkeuring.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              4. Aanvraagprocedure & Verwerkingstijd
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed mb-6">
              Voldoet uw melding aan de technische garantievoorwaarden? Dien uw verzoek in via een van de onderstaande kanalen met vermelding van uw bestelnummer en een korte foutomschrijving:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-[#000000] border-2 border-[#39FF14]/40 rounded-2xl p-6 shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#39FF14]/15 flex items-center justify-center mb-3 border border-[#39FF14]/30">
                    <MessageSquare className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <h3 className="text-lg font-black text-[#FFFFFF] uppercase tracking-tight mb-1">
                    WhatsApp Storingsdienst (Direct)
                  </h3>
                  <p className="text-[#F4F6F9]/80 text-xs sm:text-sm font-bold leading-relaxed mb-4">
                    Stuur uw bestelgegevens en een schermafbeelding van de foutmelding voor real-time storingsdiagnose.
                  </p>
                </div>
                <a
                  href={`https://support-tv.online/?text=${encodeURIComponent('Hallo, ik ervaar een aanhoudend technisch probleem met mijn account en wil graag de diagnoseprocedure starten.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 rounded-2xl bg-[#39FF14] text-[#000000] font-black text-xs uppercase tracking-wider hover:bg-[#FFFFFF] transition-all shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] border border-green-300"
                >
                  Start Diagnose via WhatsApp →
                </a>
              </div>

              <div className="bg-[#000000] border-2 border-[#39FF14]/40 rounded-2xl p-6 shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#39FF14]/15 flex items-center justify-center mb-3 border border-[#39FF14]/30">
                    <Mail className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <h3 className="text-lg font-black text-[#FFFFFF] uppercase tracking-tight mb-1">
                    Schriftelijk per E-mail
                  </h3>
                  <p className="text-[#F4F6F9]/80 text-xs sm:text-sm font-bold leading-relaxed mb-4">
                    Stuur uw transactiebewijs en foutcode naar support@{CONSTANTS.DOMAIN}.
                  </p>
                </div>
                <a
                  href={`mailto:support@${CONSTANTS.DOMAIN}?subject=Technisch%20Storingsverzoek`}
                  className="w-full text-center py-4 rounded-2xl bg-[#39FF14] text-[#000000] font-black text-xs uppercase tracking-wider hover:bg-[#FFFFFF] transition-all shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] border border-green-300"
                >
                  E-mail Storingsdienst →
                </a>
              </div>
            </div>

            <p className="text-[#F4F6F9]/60 text-xs leading-relaxed font-medium">
              Na officiële technische autorisatie wordt het bedrag binnen 1 tot 3 werkdagen teruggestort via de oorspronkelijke betaalmethode (iDEAL, Bancontact, Creditcard of Crypto).
            </p>
          </section>
        </div>

        {/* Support CTA Banner */}
        <div className="mt-16 text-center">
          <div className="bg-[#111111] border-2 border-[#39FF14]/40 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(57,255,20,0.1),_transparent_60%)] pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-2">
                Hulp nodig bij uw installatie?
              </h3>
              <p className="text-[#39FF14] font-bold text-sm md:text-base max-w-md mx-auto mb-6">
                In 99% van de gevallen lossen onze streaming-experts haperingen binnen 2 minuten op.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-2xl bg-[#39FF14] text-[#000000] font-black text-xs uppercase tracking-widest hover:bg-[#FFFFFF] transition-all shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] border border-green-300"
                >
                  Direct Hulp Vragen
                </Link>
                <Link 
                  href="/installatie" 
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-2xl bg-[#000000] text-[#FFFFFF] font-black text-xs uppercase tracking-widest border-2 border-[#39FF14] hover:bg-[#39FF14] hover:text-[#000000] transition-all shadow-md"
                >
                  Installatie Handleiding
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Return Pathway */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[#39FF14] hover:text-white transition-colors font-black text-xs uppercase tracking-widest">
            ← Terug naar de homepage
          </Link>
        </div>
      </div>
    </div>
  );
}