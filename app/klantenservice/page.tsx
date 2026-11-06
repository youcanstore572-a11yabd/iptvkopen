'use client';

import { useState, useRef, useEffect } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import { 
  Mail, 
  User, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Phone,
  Clock,
  Check,
  X,
  Headphones,
  Zap,
  ShieldCheck,
  Users,
  LifeBuoy
} from 'lucide-react';
import Link from 'next/link';

// Toast / Melding Component
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 z-50 max-w-md w-full animate-slide-in">
      <div className={`rounded-2xl p-6 shadow-2xl border-2 backdrop-blur-xl ${
        type === 'success' 
          ? 'bg-[#111111] border-[#39FF14] text-[#FFFFFF]' 
          : 'bg-[#111111] border-[#39FF14] text-[#FFFFFF]'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center ${
            type === 'success' ? 'bg-[#39FF14]/20' : 'bg-[#39FF14]/20'
          }`}>
            {type === 'success' ? (
              <Check className="w-5 h-5 text-[#39FF14]" />
            ) : (
              <AlertCircle className="w-5 h-5 text-[#39FF14]" />
            )}
          </div>
          <div className="flex-1">
            <p className="text-[#FFFFFF] font-black uppercase text-sm">{message}</p>
          </div>
          <button 
            onClick={onClose}
            aria-label="Melding sluiten"
            className="flex-shrink-0 text-[#F4F6F9]/60 hover:text-[#39FF14] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Succes Popup Modal
const SuccessPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="bg-[#111111] border-2 border-[#39FF14] rounded-2xl p-8 md:p-12 max-w-md w-full mx-4 shadow-2xl text-center animate-scale-up text-[#FFFFFF]">
        <div className="w-24 h-24 rounded-2xl bg-[#39FF14]/20 flex items-center justify-center mx-auto mb-6 border border-[#39FF14]/40">
          <div className="w-16 h-16 rounded-2xl bg-[#39FF14]/30 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-[#39FF14]" />
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight">
          Bericht Verzonden!
        </h3>
        
        <p className="text-[#39FF14] font-bold text-sm leading-relaxed mb-6">
          Bedankt voor uw bericht aan {CONSTANTS.BRAND_NAME}. Onze klantenservice neemt zo snel mogelijk contact met u op.
        </p>
        
        <div className="bg-[#000000] rounded-2xl border border-white/10 p-5 mb-6 text-left">
          <p className="text-[#39FF14] text-xs uppercase tracking-widest font-black mb-3">Wat gebeurt er nu?</p>
          <ul className="space-y-2 text-sm text-[#F4F6F9]/90 font-bold uppercase tracking-wide">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#39FF14] shrink-0" />
              Behandeling door een IPTV specialist
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#39FF14] shrink-0" />
              Controle van uw aanvraag of test
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#39FF14] shrink-0" />
              Reactie binnen enkele minuten via WhatsApp
            </li>
          </ul>
        </div>
        
        <button
          onClick={onClose}
          className="w-full py-4 rounded-2xl bg-[#39FF14] text-[#000000] font-black text-sm uppercase tracking-widest hover:bg-[#FFFFFF] transition-all hover:scale-105 shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] cursor-pointer border border-green-300"
        >
          Begrepen
        </button>
      </div>
    </div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const cleanPhone = (CONSTANTS.CONTACT.phone || '+31612345678').replace(/[^0-9]/g, '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const encodedMsg = encodeURIComponent(
        `Hallo ${CONSTANTS.BRAND_NAME},\n\nNaam: ${formData.name}\nE-mail: ${formData.email}\nOnderwerp: ${formData.subject}\nBericht: ${formData.message}`
      );
      window.open(`https://wa.me/${cleanPhone}?text=${encodedMsg}`, '_blank');

      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setToast({ message: 'Uw bericht is succesvol verzonden!', type: 'success' });
    } catch {
      setToast({ message: 'Verzenden mislukt. Probeer het opnieuw via WhatsApp.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const startWhatsAppChat = () => {
    const defaultText = encodeURIComponent(`Hallo ${CONSTANTS.BRAND_NAME}, ik heb een vraag over uw IPTV abonnement.`);
    window.open(`https://wa.me/${cleanPhone}?text=${defaultText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#000000] pt-32 pb-16 text-[#F4F6F9]">
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {showSuccessPopup && (
        <SuccessPopup onClose={() => setShowSuccessPopup(false)} />
      )}

      {/* Hero Header Section */}
      <section className="relative px-6 pb-16 md:pb-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(57,255,20,0.1),_transparent_50%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#39FF14] text-[#000000] px-4 py-2 rounded-2xl mb-6 shadow-lg border border-white/25">
              <Mail className="w-4 h-4 text-[#000000]" />
              <span className="text-[#000000] font-black text-xs uppercase tracking-widest">
                24/7 Klantenservice
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none">
              Contact <span className="text-[#39FF14]">{CONSTANTS.BRAND_NAME}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#F4F6F9]/80 font-bold max-w-2xl mx-auto leading-relaxed">
              Heeft u vragen over onze IPTV zenders, installatie op Smart TV of betalingen? Ons ondersteuningsteam staat 24/7 voor u klaar.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Sidebar Info */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="bg-[#111111] border-2 border-[#39FF14]/40 rounded-2xl p-6 md:p-8 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-2">
                  Stuur ons een bericht
                </h2>
                <p className="text-[#39FF14] font-bold text-sm mb-6">
                  Vul het onderstaande formulier in en we reageren direct via WhatsApp of e-mail.
                </p>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-black text-[#FFFFFF] uppercase tracking-wide mb-2">
                      Volledige Naam <span className="text-[#39FF14]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F4F6F9]/40" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-[#000000] border-2 border-white/10 rounded-2xl text-[#FFFFFF] font-bold placeholder-[#F4F6F9]/30 focus:border-[#39FF14] transition-colors outline-none"
                        placeholder="bijv. Jan Jansen"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-black text-[#FFFFFF] uppercase tracking-wide mb-2">
                      E-mailadres <span className="text-[#39FF14]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F4F6F9]/40" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-[#000000] border-2 border-white/10 rounded-2xl text-[#FFFFFF] font-bold placeholder-[#F4F6F9]/30 focus:border-[#39FF14] transition-colors outline-none"
                        placeholder="naam@voorbeeld.nl"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-black text-[#FFFFFF] uppercase tracking-wide mb-2">
                      Onderwerp <span className="text-[#39FF14]">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F4F6F9]/40" />
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-10 py-3.5 bg-[#000000] border-2 border-white/10 rounded-2xl text-[#FFFFFF] font-bold focus:border-[#39FF14] transition-colors outline-none appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#111111] text-[#F4F6F9]">Selecteer een onderwerp...</option>
                        <option value="test" className="bg-[#111111] text-[#F4F6F9]">Gratis 24-uurs IPTV Test Aanvragen</option>
                        <option value="setup" className="bg-[#111111] text-[#F4F6F9]">Installatiehulp & App Setup</option>
                        <option value="pricing" className="bg-[#111111] text-[#F4F6F9]">Vragen over Pakketten & Tarieven</option>
                        <option value="technical" className="bg-[#111111] text-[#F4F6F9]">Technische Ondersteuning</option>
                        <option value="billing" className="bg-[#111111] text-[#F4F6F9]">Betalingen (iDEAL / Crypto / PayPal)</option>
                        <option value="general" className="bg-[#111111] text-[#F4F6F9]">Algemene Vraag</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#F4F6F9]/40">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5z"/></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-black text-[#FFFFFF] uppercase tracking-wide mb-2">
                      Bericht <span className="text-[#39FF14]">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 bg-[#000000] border-2 border-white/10 rounded-2xl text-[#FFFFFF] font-bold placeholder-[#F4F6F9]/30 focus:border-[#39FF14] transition-colors outline-none resize-none"
                        placeholder="Schrijf hier uw vraag of apparaattype..."
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-2xl bg-[#39FF14] text-[#000000] font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 border border-green-300 shadow-[0_10px_30px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] ${
                      loading 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:bg-[#FFFFFF] hover:scale-[1.01] cursor-pointer'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-[#000000]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Verzenden...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Verstuur Bericht
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="bg-[#111111] border-2 border-[#39FF14]/40 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
                <h3 className="text-xl font-black text-[#FFFFFF] uppercase tracking-tight mb-6">
                  Contactgegevens
                </h3>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="text-[#39FF14] text-xs uppercase tracking-widest font-black">E-mail</p>
                    <a href={`mailto:${CONSTANTS.CONTACT.email}`} className="text-[#FFFFFF] hover:text-[#39FF14] transition-colors text-sm font-bold">
                      {CONSTANTS.CONTACT.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="text-[#39FF14] text-xs uppercase tracking-widest font-black">WhatsApp</p>
                    <a href={`https://wa.me/${cleanPhone}`} target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF] hover:text-[#39FF14] transition-colors text-sm font-bold">
                      {CONSTANTS.CONTACT.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="text-[#39FF14] text-xs uppercase tracking-widest font-black">Direct Contact</p>
                    <p className="text-[#FFFFFF] text-sm font-bold">24/7 Bereikbaar</p>
                    <button 
                      onClick={startWhatsAppChat}
                      className="text-[#39FF14] text-xs font-black uppercase tracking-widest hover:text-white transition-colors mt-1 cursor-pointer block"
                    >
                      Start WhatsApp Chat →
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="text-[#39FF14] text-xs uppercase tracking-widest font-black">Reactietijd</p>
                    <p className="text-[#FFFFFF] text-sm font-bold">Binnen 5 tot 15 minuten</p>
                  </div>
                </div>
                
                {/* Badges Grid */}
                <div className="pt-6 border-t-2 border-white/10">
                  <p className="text-[#39FF14] text-xs uppercase tracking-widest font-black mb-4">Gegarandeerde Service</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#000000] rounded-2xl p-3 text-center border border-white/10">
                      <Headphones className="w-5 h-5 text-[#39FF14] mx-auto mb-1" />
                      <p className="text-[#FFFFFF] text-[9px] uppercase font-black tracking-wider">24/7 Hulp</p>
                    </div>
                    <div className="bg-[#000000] rounded-2xl p-3 text-center border border-white/10">
                      <ShieldCheck className="w-5 h-5 text-[#39FF14] mx-auto mb-1" />
                      <p className="text-[#FFFFFF] text-[9px] uppercase font-black tracking-wider">Veilig</p>
                    </div>
                    <div className="bg-[#000000] rounded-2xl p-3 text-center border border-white/10">
                      <Zap className="w-5 h-5 text-[#39FF14] mx-auto mb-1" />
                      <p className="text-[#FFFFFF] text-[9px] uppercase font-black tracking-wider">Snel Actief</p>
                    </div>
                    <div className="bg-[#000000] rounded-2xl p-3 text-center border border-white/10">
                      <Users className="w-5 h-5 text-[#39FF14] mx-auto mb-1" />
                      <p className="text-[#FFFFFF] text-[9px] uppercase font-black tracking-wider">20K+ Klanten</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Badges Footer Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <FadeIn>
          <div className="bg-[#111111] border-2 border-[#39FF14]/40 rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center mx-auto mb-3">
                  <LifeBuoy className="w-6 h-6 text-[#39FF14]" />
                </div>
                <h4 className="text-[#FFFFFF] font-black text-sm uppercase tracking-wide">24/7 Ondersteuning</h4>
                <p className="text-[#F4F6F9]/70 text-xs font-bold mt-0.5">Altijd bereikbaar</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-[#39FF14]" />
                </div>
                <h4 className="text-[#FFFFFF] font-black text-sm uppercase tracking-wide">Snelle Reactie</h4>
                <p className="text-[#F4F6F9]/70 text-xs font-bold mt-0.5">Direct via WhatsApp</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-6 h-6 text-[#39FF14]" />
                </div>
                <h4 className="text-[#FFFFFF] font-black text-sm uppercase tracking-wide">Privacy Garantie</h4>
                <p className="text-[#F4F6F9]/70 text-xs font-bold mt-0.5">Veilige verbinding</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-[#39FF14]" />
                </div>
                <h4 className="text-[#FFFFFF] font-black text-sm uppercase tracking-wide">Beste Service</h4>
                <p className="text-[#F4F6F9]/70 text-xs font-bold mt-0.5">#1 IPTV Provider</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Mini FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 w-full">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight">
            Veelgestelde <span className="text-[#39FF14]">Vragen</span>
          </h2>
          <p className="text-[#39FF14] font-bold text-base">Direct antwoord op uw belangrijkste vragen</p>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: "Hoe neem ik het snelst contact op?",
              a: `Voor de allersnelste service kunt u direct een bericht sturen via WhatsApp naar ${CONSTANTS.CONTACT.phone}. Wij reageren binnen enkele minuten.`
            },
            {
              q: "Bieden jullie hulp bij installatie?",
              a: "Ja, onze technische experts begeleiden u stap voor stap bij het instellen van IPTV op uw Smart TV, Firestick, Android of Apple TV."
            },
            {
              q: "Kan ik eerst een gratis test aanvragen?",
              a: "Zeker! Vraag eenvoudig via WhatsApp een gratis 24-uurs IPTV testcode aan om al onze 4K zenders vrijblijvend uit te proberen."
            },
            {
              q: "Hoe snel ontvang ik mijn inloggegevens?",
              a: "Na bestelling worden uw M3U-link en Xtream codes binnen 5 minuten automatisch per e-mail en WhatsApp geleverd."
            }
          ].map((faq, idx) => (
            <FadeInItem key={idx} className="bg-[#111111] border-2 border-[#39FF14]/40 rounded-2xl p-6 shadow-xl transition-all">
              <h3 className="text-[#FFFFFF] font-black text-base uppercase tracking-tight mb-2">{faq.q}</h3>
              <p className="text-[#F4F6F9]/80 text-sm font-bold leading-relaxed">{faq.a}</p>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-slide-in { animation: slide-in 0.4s ease-out; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-up { animation: scale-up 0.4s ease-out; }
      `}</style>
    </div>
  );
}