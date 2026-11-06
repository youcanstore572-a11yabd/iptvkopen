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
      setup: 'Setup Guide',
      review: 'Review',
      sports: 'Live Sports',
      tips: 'Tips & Tricks',
      news: 'News',
    };
    return map[post.category] || post.category;
  }
  if (post.keywords && post.keywords.length > 0) return post.keywords[0];
  return 'IPTV Provider Guide';
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
    return d.toLocaleDateString('en-US', {
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
  return (
    <aside className="lg:col-span-4 order-2 lg:order-2 lg:self-start lg:sticky lg:top-24 h-fit">
      <div className="space-y-6">
        {/* =====================================================
            Card 1 — IPTV Smarter Pro
        ===================================================== */}
        <div className="bg-[#132948] border-2 border-[#39FF14]/40 rounded-none p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#39FF14]/10 rounded-none blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 bg-[#39FF14] text-[#0A1A2F] px-3 py-1 rounded-none text-[10px] font-black uppercase tracking-widest mb-3 shadow-md">
            <Flame className="w-3.5 h-3.5" /> Recommended Player
          </div>

          <h2 className="text-lg sm:text-xl font-black text-[#FFFFFF] uppercase tracking-tight mb-2">
            Get IPTV Smarter Pro Access
          </h2>
          <p className="text-[#F4F6F9]/80 text-xs sm:text-sm font-bold leading-relaxed mb-6">
            IPTV Smarter Pro is one of our top-pick players for fast, secure playback with minimal buffering. Our team helps you get set up and stays on hand throughout your whole subscription.
          </p>

          <a
            href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappIboMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#39FF14] text-[#0A1A2F] font-black text-xs uppercase tracking-widest hover:bg-[#32e012] transition-all shadow-[0_8px_25px_rgba(57,255,20,0.45),inset_0_2px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,128,0,0.6)] border border-green-300"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Order IPTV Smarter Pro</span>
          </a>
        </div>

        {/* =====================================================
            Card 2 — Official Plans
        ===================================================== */}
        <div className="relative rounded-none overflow-hidden shadow-2xl bg-[#132948] border-2 border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#132948] to-[#0A1A2F]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,215,0,0.1),_transparent_60%)] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 p-6">
            <div className="inline-flex items-center gap-1.5 bg-[#FFD700] text-[#0A1A2F] px-3 py-1 rounded-none text-[10px] font-black uppercase tracking-widest mb-4 shadow-md">
              <Crown className="w-3.5 h-3.5" /> Official Plans
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight mb-2 drop-shadow-md">
              {BRAND} <br />
              <span className="text-[#FFD700]">Subscriptions</span>
            </h2>
            <p className="text-[#F4F6F9]/85 text-xs sm:text-sm font-bold leading-relaxed mb-6">
              20,000+ live channels · 120,000+ movies &amp; TV shows · 4K Ultra HD · Anti-freeze servers.
            </p>

            <div className="space-y-3">
              {/* Standard — 3 Months */}
              <div className="group bg-[#0A1A2F] border-2 border-white/10 rounded-none p-4 hover:border-[#39FF14] hover:-translate-y-0.5 transition-all shadow-lg">
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
                    <div className="text-[#FFD700] font-black text-xl leading-none">
                      $35
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-wider text-[#F4F6F9]/50 mt-0.5">
                      3 Months
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-[#F4F6F9]/70">
                  <CheckCircle2 className="w-3 h-3 text-[#39FF14]" />
                  <span>Set up by email in minutes</span>
                </div>
                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappSubMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-2xl bg-[#39FF14] text-[#0A1A2F] hover:bg-[#32e012] transition-all font-black text-[10px] uppercase tracking-widest block shadow-[0_6px_20px_rgba(57,255,20,0.45),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(0,128,0,0.6)] border border-green-300"
                >
                  Order on WhatsApp
                </a>
              </div>

              {/* VIP — 12 Months */}
              <div className="group relative bg-[#0A1A2F] border-2 border-[#FFD700] rounded-none p-4 hover:border-[#39FF14] hover:-translate-y-0.5 transition-all shadow-2xl">
                <div className="absolute -top-3 right-4 bg-[#FFD700] text-[#0A1A2F] px-2.5 py-0.5 rounded-none text-[9px] font-black uppercase tracking-widest shadow-md">
                  ⭐ Best Value
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-none bg-[#FFD700]/20 flex items-center justify-center">
                      <Crown className="w-4 h-4 text-[#FFD700]" />
                    </div>
                    <span className="text-[#FFFFFF] font-black text-sm uppercase tracking-tight">
                      12 Months VIP
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-[#FFD700] font-black text-xl leading-none">
                      $65
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-wider text-[#F4F6F9]/50 mt-0.5">
                      Save 60%
                    </div>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#F4F6F9]/80">
                    <CheckCircle2 className="w-3 h-3 text-[#FFD700]" />
                    <span>4K Anti-Freeze Servers</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#F4F6F9]/80">
                    <CheckCircle2 className="w-3 h-3 text-[#FFD700]" />
                    <span>Free trial before you pay</span>
                  </div>
                </div>

                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappSubMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-2xl bg-[#39FF14] text-[#0A1A2F] hover:bg-[#32e012] transition-all font-black text-[10px] uppercase tracking-widest block shadow-[0_6px_20px_rgba(57,255,20,0.45),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(0,128,0,0.6)] border border-green-300"
                >
                  Order VIP on WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 text-center">
              <Link
                href="/pricing"
                className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider hover:underline inline-flex items-center gap-1 group"
              >
                View all IPTV Subscription plans
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#FFD700]" />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            Card 3 — Related Articles
        ===================================================== */}
        {relatedPosts.length > 0 && (
          <div className="bg-[#132948] border-2 border-[#39FF14]/40 rounded-none p-5 shadow-2xl">
            <h2 className="text-lg font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#39FF14]" /> Related Articles
            </h2>

            <div className="space-y-4">
              {relatedPosts.map((relPost) => {
                const relCategory = getCategoryLabel(relPost);
                const relReadTime = getReadTime(relPost);
                const relDate = formatDateShort(relPost.date);

                return (
                  <Link
                    key={relPost.slug}
                    href={`/blog/${relPost.slug}`}
                    className="group block bg-[#0A1A2F] rounded-none overflow-hidden border-2 border-white/10 hover:border-[#39FF14] hover:shadow-[0_15px_35px_rgba(57,255,20,0.15)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0A1A2F]">
                      <Image
                        src={relPost.image}
                        alt={relPost.title}
                        width={400}
                        height={250}
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 350px"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-[#0A1A2F]/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                      <div className="absolute top-2 left-2 z-10">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-none bg-[#39FF14] text-[#0A1A2F] text-[9px] font-black uppercase tracking-wider shadow-lg">
                          <Tag className="w-2.5 h-2.5" />
                          {relCategory}
                        </span>
                      </div>

                      <div className="absolute top-2 right-2 z-10">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-none bg-[#0A1A2F]/80 backdrop-blur-md text-[#FFFFFF] text-[9px] font-black uppercase tracking-wider border border-[#39FF14]/40">
                          <Clock className="w-2.5 h-2.5" />
                          {relReadTime} min
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#F4F6F9]/60 mb-2">
                        <Calendar className="w-3 h-3 text-[#39FF14]" />
                        <span>{relDate}</span>
                      </div>

                      <h3 className="text-sm font-black text-[#FFFFFF] uppercase tracking-tight leading-snug mb-2 line-clamp-2 group-hover:text-[#FFD700] transition-colors">
                        {relPost.title}
                      </h3>

                      <p className="text-[#F4F6F9]/70 text-xs font-medium leading-relaxed line-clamp-2 mb-3">
                        {relPost.description || relPost.excerpt}
                      </p>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-[#39FF14] font-black text-[10px] uppercase tracking-widest group-hover:text-[#FFD700] group-hover:gap-2 transition-all">
                          Read
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        <div className="w-6 h-6 rounded-none bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-[#0A1A2F] transition-all duration-300">
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