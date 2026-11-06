import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  CreditCard, 
  UserCheck, 
  Ban, 
  RefreshCw, 
  Mail, 
  Scale, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';

export const metadata = generateSEOMetadata(
  'Algemene Voorwaarden',
  `Lees de algemene voorwaarden van ${CONSTANTS.BRAND_NAME}. Duidelijke afspraken over abonnementen, onze 7 dagen geld-terug-garantie en acceptabel gebruik.`,
  '/voorwaarden'
);

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-[#F4F6F9]">
      
      {/* Hero Section Container */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(57,255,20,0.1),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#39FF1408_1px,transparent_1px),linear-gradient(to_bottom,#39FF1408_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#39FF14] text-[#000000] px-4 py-2 rounded-2xl mb-6 shadow-md border border-white/20">
            <Scale className="w-4 h-4 text-[#000000]" />
            <span className="text-[#000000] font-black text-xs uppercase tracking-widest">
              Juridische Overeenkomst
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Algemene <span className="text-[#39FF14]">Voorwaarden</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F4F6F9]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            Lees deze voorwaarden zorgvuldig door voordat u gebruikmaakt van de diensten en streamingabonnementen van {CONSTANTS.BRAND_NAME}.
          </p>
          <p className="text-xs text-[#F4F6F9]/40 mt-4 font-bold uppercase tracking-wider">
            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        
        {/* Acceptance Box */}
        <div className="bg-[#111111] border-2 border-[#39FF14] rounded-2xl p-6 md:p-8 mb-12 shadow-2xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/15 flex items-center justify-center border border-[#39FF14]/30">
                <FileText className="w-6 h-6 text-[#39FF14]" />
              </div>
            </div>
            <div>
              <p className="text-[#F4F6F9] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#39FF14] font-black uppercase tracking-wide block mb-1">Aanvaarding van Voorwaarden:</span> 
                Door een abonnement af te sluiten of gebruik te maken van de website en diensten van {CONSTANTS.BRAND_NAME}, verklaart u zich akkoord met deze Algemene Voorwaarden en ons Privacybeleid.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Sections */}
        <div className="space-y-10">
          
          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              1. Omschrijving van de Dienst
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed">
              {CONSTANTS.BRAND_NAME} levert digitale IPTV streamingdiensten waarmee abonnees toegang krijgen tot live televisiezenders, video-on-demand (VOD) films en series via het internet. Onze dienst is uitsluitend bestemd voor persoonlijk, niet-commercieel thuisgebruik.
            </p>
          </section>

          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              2. Toegankelijkheid & Verantwoordelijkheid
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed mb-4">
              Door gebruik te maken van onze diensten verklaart en garandeert u dat:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "U minimaal 18 jaar oud bent en handelingsbekwaam om een overeenkomst aan te gaan.",
                "U correcte en actuele gegevens verstrekt bij het aanvragen van uw account.",
                "U uw persoonlijke inloggegevens en M3U-afspeellijsten strikt geheimhoudt en niet doorverkoopt.",
                "U onze service niet gebruikt voor commerciële heruitzending of openbare vertoning.",
                "U beschikt over een geschikte internetverbinding (minimaal 25 Mbps voor soepel 4K streamen)."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F4F6F9]/80 font-bold text-sm md:text-base bg-[#000000]/50 p-3 rounded-2xl border border-white/5">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#000000] border-2 border-[#39FF14] rounded-2xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-2xl bg-[#39FF14]/15 flex items-center justify-center border border-[#39FF14]/30">
                    <UserCheck className="w-5 h-5 text-[#39FF14]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#F4F6F9] text-sm font-bold leading-relaxed">
                    <span className="text-[#39FF14] font-black uppercase tracking-wide block mb-0.5">Accountbeveiliging:</span> 
                    U bent te allen tijde zelf verantwoordelijk voor alle activiteiten die plaatsvinden onder uw account en M3U-inloggegevens.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              3. Abonnementen, Prijzen & Betaling
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed mb-4">
              Onze actuele abonnementsopties en tarieven staan vermeld op de pagina Pakketten. Bij aankoop stemt u in met het volgende:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Betalingen worden vooraf voldaan via de beveiligde betaalmethoden (o.a. iDEAL, Crypto, Creditcard of PayPal).",
                "Abonnementen worden niet stilzwijgend verlengd; u bepaalt zelf wanneer u verlengt.",
                "Uw account wordt direct geactiveerd zodra de betalingsbevestiging is afgerond.",
                "Prijzen zijn inclusief alle toepasselijke heffingen, tenzij uitdrukkelijk anders aangegeven."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F4F6F9]/80 font-bold text-sm md:text-base bg-[#000000]/50 p-3 rounded-2xl border border-white/5">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#000000] border-2 border-[#39FF14] rounded-2xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-2xl bg-[#39FF14]/15 flex items-center justify-center border border-[#39FF14]/30">
                    <CreditCard className="w-5 h-5 text-[#39FF14]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#F4F6F9] text-sm font-bold leading-relaxed">
                    <span className="text-[#39FF14] font-black uppercase tracking-wide block mb-0.5">Veilige Betaling:</span> 
                    Alle transacties verlopen via PCI-DSS gecertificeerde betaalgateways met 256-bit SSL-versleuteling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              4. Beleid voor Acceptabel Gebruik (Fair Use)
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed mb-4">
              Het is ten strengste verboden om de dienst te gebruiken voor:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Het doorverkopen, restreamen of klonen van uw toegewezen streamingslijnen.",
                "Het gelijktijdig streamen op meer apparaten dan uw gekozen pakket toestaat.",
                "Pogingen tot reverse-engineering, server-scraping of netwerkoverbelasting (DDoS).",
                "Het downloaden, permanent opnemen of herdistribueren van digitale uitzendingen.",
                "Elk gebruik dat in strijd is met de toepasselijke nationale of internationale wetgeving."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F4F6F9]/80 font-bold text-sm md:text-base bg-[#000000]/50 p-3 rounded-2xl border border-white/5">
                  <Ban className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#000000] border-2 border-[#39FF14] rounded-2xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-2xl bg-[#39FF14]/15 flex items-center justify-center border border-[#39FF14]/30">
                    <AlertCircle className="w-6 h-6 text-[#39FF14]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#F4F6F9] text-sm font-bold leading-relaxed">
                    <span className="text-[#39FF14] font-black uppercase tracking-wide block mb-0.5">Gevolgen van Misbruik:</span> 
                    Bij overtreding van het acceptabel gebruik beleid behouden wij ons het recht voor om het account direct te blokkeren zonder recht op restitutie.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              5. 7 Dagen Niet-Goed-Geld-Terug Garantie
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed mb-4">
              Wij hanteren een volledige tevredenheidsgarantie van 7 dagen. Mocht onze dienst niet aan uw verwachtingen voldoen of mocht u technische problemen ervaren die niet opgelost kunnen worden, dan kunt u binnen 7 dagen na aankoop een volledige terugbetaling aanvragen via onze klantenservice.
            </p>
          </section>

          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              6. Beschikbaarheid & Zenderwijzigingen
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed mb-4">
              Wij streven naar een constante 99.9% uptime. Desondanks kan het voorkomen dat tijdelijk onderhoud nodig is of dat externe zenders wijzigen. {CONSTANTS.BRAND_NAME} behoudt zich het recht voor om:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Zenderlijsten en VOD-catalogi te updaten of te optimaliseren voor een betere beeldkwaliteit.",
                "Kortstondig gepland serveronderhoud uit te voeren buiten piekuren.",
                "Prijswijzigingen door te voeren voor nieuwe abonnementsperioden."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F4F6F9]/80 font-bold text-sm md:text-base bg-[#000000]/50 p-3 rounded-2xl border border-white/5">
                  <RefreshCw className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              7. Intellectueel Eigendom & Aansprakelijkheid
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed">
              Alle merktekens, logo’s, teksten en softwarecode op deze website zijn het intellectuele eigendom van {CONSTANTS.BRAND_NAME}. Voor zover wettelijk toegestaan is {CONSTANTS.BRAND_NAME} niet aansprakelijk voor indirecte schade, dataverlies of storingen veroorzaakt door externe internetproviders of apparatuur van de gebruiker.
            </p>
          </section>

          <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#39FF14] rounded-2xl inline-block shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
              8. Contact & Klantenservice
            </h2>
            <p className="text-[#F4F6F9]/80 text-base font-medium leading-relaxed mb-4">
              Voor vragen over deze algemene voorwaarden of ondersteuning bij uw abonnement kunt u contact opnemen met onze juridische en supportafdeling:
            </p>
            <div className="bg-[#000000] border-2 border-[#39FF14] rounded-2xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#39FF14] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#FFFFFF]/60 tracking-widest mb-1">Klantenservice & Juridische Zaken</p>
              <a 
                href={`mailto:legal@${CONSTANTS.DOMAIN}`} 
                className="text-[#39FF14] font-black text-xl md:text-2xl hover:text-white transition-colors"
              >
                legal@{CONSTANTS.DOMAIN}
              </a>
            </div>
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