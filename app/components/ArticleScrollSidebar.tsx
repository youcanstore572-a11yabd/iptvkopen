// app/components/ArticleScrollSidebar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  Sparkles,
  Zap,
  MessageCircle,
  Flame,
  Crown,
  CheckCircle2,
} from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

const BRAND = CONSTANTS.BRAND_NAME;

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
function getCategoryLabel(post: any): string {
  if (post.category) {
    const map: Record<string, string> = {
      setup: 'Installatiegids',
      review: 'Review',
      sports: 'Live Sport',
      tips: 'Tips & Trucs',
      news: 'Nieuws',
    };
    return map[post.category] || post.category;
  }
  if (post.keywords && post.keywords.length > 0) return post.keywords[0];
  return 'IPTV Gids';
}

function getReadTime(post: any): number {
  if (post.readTime) {
    const match = String(post.readTime).match(/(\d+)/);
    if (match) return parseInt(match[1]);
  }
  const words = (post.content || '')
    .replace(/<[^>]*>/g, '')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(3, Math.ceil(words / 200));
}

function formatDateShort(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('nl-NL', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

// ---------------------------------------------------------------------------
// SIDEBAR
// ---------------------------------------------------------------------------
export default function ArticleScrollSidebar({
  relatedPosts,
  whatsappIboMsg,
  whatsappSubMsg,
}: {
  relatedPosts: any[];
  whatsappIboMsg: string;
  whatsappSubMsg: string;
}) {
  const whatsappUrl = CONSTANTS.CONTACT?.whatsapp || '#';

  return (
    <aside className="lg:col-span-4 order-2 lg:order-2 lg:self-start lg:sticky lg:top-24 h-fit">
      <div className="space-y-6">
        {/* =====================================================
            Kaart 1 — IPTV Smarters Pro Aanbevolen
        ===================================================== */}
        <div className="bg-[#111111] border-2 border-[#39FF14]/40 rounded-none p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#39FF14]/10 rounded-none blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 bg-[#39FF14] text-[#000000] px-3 py-1 rounded-none text-[10px] font-black uppercase tracking-widest mb-3 shadow-md">
            <Flame className="w-3.5 h-3.5" /> Aanbevolen Speler
          </div>

          <h2 className="text-lg sm:text-xl font-black text-[#FFFFFF] uppercase tracking-tight mb-2">
            Krijg IPTV Smarters Pro Toegang
          </h2>
          <p className="text-[#FFFFFF]/80 text-xs sm:text-sm font-bold leading-relaxed mb-6">
            IPTV Smarters Pro is een van onze favoriete spelers voor snelle en stabiele streaming met minimale buffering. Ons team helpt u direct op weg met de installatie.
          </p>

          <a
            href={`${whatsappUrl}?text=${whatsappIboMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-none bg-[#39FF14] text-[#000000] font-black text-xs uppercase tracking-widest cursor-pointer transition-all duration-300 hover:bg-white hover:scale-[1.01] active:scale-[0.98] shadow-[0_8px_25px_rgba(57,255,20,0.3)] border border-white/20"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Bestel IPTV Smarters Pro</span>
          </a>
        </div>

        {/* =====================================================
            Kaart 2 — Officiële Pakketten
        ===================================================== */}
        <div className="relative rounded-none overflow-hidden shadow-2xl bg-[#111111] border-2 border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#111111] to-[#000000]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(57,255,20,0.08),_transparent_60%)] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 p-6">
            <div className="inline-flex items-center gap-1.5 bg-[#39FF14] text-[#000000] px-3 py-1 rounded-none text-[10px] font-black uppercase tracking-widest mb-4 shadow-md">
              <Crown className="w-3.5 h-3.5" /> Officiële Pakketten
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight mb-2 drop-shadow-md">
              {BRAND} <br />
              <span className="text-[#39FF14]">Abonnementen</span>
            </h2>
            <p className="text-[#FFFFFF]/85 text-xs sm:text-sm font-bold leading-relaxed mb-6">
              36.000+ live zenders · 120.000+ films &amp; series · 4K Ultra HD · Anti-freeze servers.
            </p>

            <div className="space-y-3">
              {/* Standard — 3 Maanden */}
              <div className="group bg-[#000000] border-2 border-white/10 rounded-none p-4 hover:border-[#39FF14] hover:-translate-y-0.5 transition-all shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-none bg-[#39FF14]/15 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[#39FF14]" />
                    </div>
                    <span className="text-[#FFFFFF] font-black text-sm uppercase tracking-tight">
                      Standard
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-[#39FF14] font-black text-xl leading-none">
                      €35
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-wider text-[#FFFFFF]/50 mt-0.5">
                      3 Maanden
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-[#FFFFFF]/70">
                  <CheckCircle2 className="w-3 h-3 text-[#39FF14]" />
                  <span>Directe levering via WhatsApp</span>
                </div>
                <a
                  href={`${whatsappUrl}?text=${whatsappSubMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-none bg-[#39FF14] text-[#000000] hover:bg-white transition-all font-black text-[10px] uppercase tracking-widest cursor-pointer block shadow-[0_6px_20px_rgba(57,255,20,0.3)] border border-white/20"
                >
                  Bestel via WhatsApp
                </a>
              </div>

              {/* VIP — 12 Maanden */}
              <div className="group relative bg-[#000000] border-2 border-[#39FF14] rounded-none p-4 hover:border-white hover:-translate-y-0.5 transition-all shadow-2xl">
                <div className="absolute -top-3 right-4 bg-[#39FF14] text-[#000000] px-2.5 py-0.5 rounded-none text-[9px] font-black uppercase tracking-widest shadow-md">
                  ⭐ Beste Waarde
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-none bg-[#39FF14]/20 flex items-center justify-center">
                      <Crown className="w-4 h-4 text-[#39FF14]" />
                    </div>
                    <span className="text-[#FFFFFF] font-black text-sm uppercase tracking-tight">
                      12 Maanden VIP
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-[#39FF14] font-black text-xl leading-none">
                      €65
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-wider text-[#FFFFFF]/50 mt-0.5">
                      Bespaar 60%
                    </div>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#FFFFFF]/80">
                    <CheckCircle2 className="w-3 h-3 text-[#39FF14]" />
                    <span>4K Anti-Freeze Servers</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#FFFFFF]/80">
                    <CheckCircle2 className="w-3 h-3 text-[#39FF14]" />
                    <span>Gratis test vooraf mogelijk</span>
                  </div>
                </div>

                <a
                  href={`${whatsappUrl}?text=${whatsappSubMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-none bg-[#39FF14] text-[#000000] hover:bg-white transition-all font-black text-[10px] uppercase tracking-widest cursor-pointer block shadow-[0_6px_20px_rgba(57,255,20,0.3)] border border-white/20"
                >
                  Bestel VIP via WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 text-center">
              <Link
                href="/pricing"
                className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider hover:underline inline-flex items-center gap-1 group"
              >
                Bekijk alle IPTV abonnementsprijzen
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#39FF14]" />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            Kaart 3 — Gerelateerde Artikelen
        ===================================================== */}
        {relatedPosts.length > 0 && (
          <div className="bg-[#111111] border-2 border-[#39FF14]/40 rounded-none p-5 shadow-2xl">
            <h2 className="text-lg font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#39FF14]" /> Gerelateerde Artikelen
            </h2>

            <div className="space-y-4">
              {relatedPosts.map((relPost) => {
                const relCategory = getCategoryLabel(relPost);
                const relReadTime = getReadTime(relPost);
                const relDate = formatDateShort(relPost.date);
                const cleanSlug = (relPost.slug || '').trim().replace(/^\/+/, '');

                return (
                  <Link
                    key={relPost.slug}
                    href={`/kennisbank/${cleanSlug}`}
                    className="group block bg-[#000000] rounded-none overflow-hidden border-2 border-white/10 hover:border-[#39FF14] hover:shadow-[0_15px_35px_rgba(57,255,20,0.15)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#000000]">
                      <Image
                        src={relPost.image}
                        alt={relPost.title}
                        width={400}
                        height={250}
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 350px"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                      <div className="absolute top-2 left-2 z-10">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-none bg-[#39FF14] text-[#000000] text-[9px] font-black uppercase tracking-wider shadow-lg">
                          <Tag className="w-2.5 h-2.5" />
                          {relCategory}
                        </span>
                      </div>

                      <div className="absolute top-2 right-2 z-10">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-none bg-[#000000]/80 backdrop-blur-md text-[#FFFFFF] text-[9px] font-black uppercase tracking-wider border border-[#39FF14]/40">
                          <Clock className="w-2.5 h-2.5 text-[#39FF14]" />
                          {relReadTime} min
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#FFFFFF]/60 mb-2">
                        <Calendar className="w-3 h-3 text-[#39FF14]" />
                        <span>{relDate}</span>
                      </div>

                      <h3 className="text-sm font-black text-[#FFFFFF] uppercase tracking-tight leading-snug mb-2 line-clamp-2 group-hover:text-[#39FF14] transition-colors">
                        {relPost.title}
                      </h3>

                      <p className="text-[#FFFFFF]/70 text-xs font-medium leading-relaxed line-clamp-2 mb-3">
                        {relPost.description || relPost.excerpt}
                      </p>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-[#39FF14] font-black text-[10px] uppercase tracking-widest group-hover:text-white group-hover:gap-2 transition-all">
                          Lees Meer
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        <div className="w-6 h-6 rounded-none bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-[#000000] transition-all duration-300">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}