import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import {
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Tag,
  MessageCircle,
  BookOpen,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// CONSTANTS & SEO (NEDERLANDS)
// ---------------------------------------------------------------------------
const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const PAGE_URL = `${SITE_URL}/kennisbank`;
const POSTS_PER_PAGE = 6;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `${BRAND} Kennisbank | Handleidingen, Tips & Nieuws 2026`
);

const PAGE_DESCRIPTION = clampDescription(
  `${BRAND} kennisbank met installatiehandleidingen, app-reviews en streamingtips voor Firestick, Smart TV en mobiel. Wekelijks bijgewerkt.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_TITLE,
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: 'nl_NL',
    type: 'website',
  },
};

const CATEGORIES = [
  { id: 'all', label: 'Alle Artikelen' },
  { id: 'setup', label: 'Installatiegidsen' },
  { id: 'review', label: 'Reviews' },
  { id: 'sports', label: 'Live Sport' },
  { id: 'tips', label: 'Tips & Trucs' },
  { id: 'news', label: 'Nieuws' },
];

function getPostCategory(post: any): string {
  if (post.category) return post.category;
  const kw = (post.keywords || []).join(' ').toLowerCase();
  const title = (post.title || '').toLowerCase();
  if (title.includes('setup') || title.includes('install') || kw.includes('setup guide')) return 'setup';
  if (title.includes('review') || title.includes('compare') || title.includes('best')) return 'review';
  if (title.includes('sport') || kw.includes('live sports')) return 'sports';
  if (title.includes('tip') || title.includes('troubleshoot')) return 'tips';
  return 'news';
}

function getCategoryLabel(id: string): string {
  const map: Record<string, string> = {
    setup: 'Installatiegids',
    review: 'Review',
    sports: 'Live Sport',
    tips: 'Tips & Trucs',
    news: 'Nieuws',
  };
  return map[id] || 'Handleiding';
}

function getReadTime(post: any): string {
  if (post.readTime) return post.readTime.replace('min read', 'min leestijd');
  const words = (post.content || '').split(/\s+/).length;
  const mins = Math.max(5, Math.round(words / 220));
  return `${mins} min leestijd`;
}

function formatDate(dateStr: string): string {
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

const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const featuredPost = sortedPosts[0];
const restPosts = sortedPosts.slice(1);

function KennisbankCard({ post, priority = false }: { post: any; priority?: boolean }) {
  const categoryId = getPostCategory(post);
  const categoryLabel = getCategoryLabel(categoryId);
  const readTime = getReadTime(post);
  const dateStr = formatDate(post.date);
  const cleanSlug = (post.slug || '').trim().replace(/^\/+/, '');

  return (
    <Link
      href={`/kennisbank/${cleanSlug}`}
      className="group relative flex flex-col bg-[#132948] rounded-none overflow-hidden border-2 border-white/10 hover:border-[#39FF14] hover:shadow-[0_20px_50px_rgba(0,212,255,0.15)] hover:-translate-y-2 transition-all duration-500 shadow-2xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0A1A2F]">
        <Image
          src={post.image}
          alt={`${post.title} - ${BRAND} kennisbank`}
          width={800}
          height={500}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-[#0A1A2F]/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-none bg-[#39FF14] text-[#0A1A2F] text-[10px] font-black uppercase tracking-wider shadow-lg border border-white/20">
            <Tag className="w-3 h-3" />
            {categoryLabel}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-none bg-[#0A1A2F]/80 backdrop-blur-md text-[#FFFFFF] text-[10px] font-black uppercase tracking-wider border border-[#39FF14]/40">
            <Clock className="w-3 h-3" />
            {readTime}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#F4F6F9]/60 mb-3">
          <Calendar className="w-3 h-3 text-[#39FF14]" />
          <span>{dateStr}</span>
          <span className="text-[#39FF14]">•</span>
          <span>{post.author}</span>
        </div>

        <h3 className="text-base md:text-lg font-black text-[#FFFFFF] uppercase tracking-tight leading-snug mb-3 line-clamp-2 group-hover:text-[#FFD700] transition-colors">
          {post.title}
        </h3>

        <p className="text-[#F4F6F9]/70 text-sm font-medium leading-relaxed line-clamp-3 mb-4 flex-1">
          {post.description || post.excerpt || ''}
        </p>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[#39FF14] font-black text-xs uppercase tracking-widest group-hover:text-[#FFD700] group-hover:gap-2.5 transition-all">
            Lees Artikel
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
          <div className="w-8 h-8 rounded-none bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] group-hover:bg-[#FFD700] group-hover:text-[#0A1A2F] group-hover:border-[#FFD700] transition-all duration-300">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function FeaturedCard({ post }: { post: any }) {
  const categoryLabel = getCategoryLabel(getPostCategory(post));
  const readTime = getReadTime(post);
  const dateStr = formatDate(post.date);
  const cleanSlug = (post.slug || '').trim().replace(/^\/+/, '');

  return (
    <Link
      href={`/kennisbank/${cleanSlug}`}
      className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#132948] rounded-none overflow-hidden border-2 border-[#FFD700] hover:shadow-[0_25px_60px_rgba(255,215,0,0.2)] transition-all duration-500 shadow-2xl"
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-[#0A1A2F]">
        <Image
          src={post.image}
          alt={`${post.title} - Uitgelicht ${BRAND} artikel`}
          width={900}
          height={600}
          priority
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0A1A2F]/80 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-[#FFD700] text-[#0A1A2F] text-[11px] font-black uppercase tracking-widest shadow-xl border border-white/30">
            <Sparkles className="w-3.5 h-3.5 text-[#0A1A2F]" />
            Uitgelicht
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#F4F6F9]/60 mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-none bg-[#39FF14]/15 text-[#39FF14] border border-[#39FF14]/30">
            <Tag className="w-3 h-3" />
            {categoryLabel}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#39FF14]" />
            {dateStr}
          </span>
          <span className="text-[#39FF14]">•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#39FF14]" />
            {readTime}
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight leading-tight mb-4 group-hover:text-[#FFD700] transition-colors">
          {post.title}
        </h2>

        <p className="text-[#F4F6F9]/80 text-sm md:text-base font-medium leading-relaxed mb-6 line-clamp-3">
          {post.description || post.excerpt || ''}
        </p>

        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-[#FFD700] text-[#0A1A2F] font-black text-xs uppercase tracking-widest group-hover:bg-[#39FF14] group-hover:gap-3 transition-all shadow-lg border border-white/20">
            Lees Volledig Artikel
            <ArrowRight className="w-4 h-4" />
          </span>
          <span className="text-[#F4F6F9]/50 text-xs font-bold uppercase tracking-wider">
            door {post.author}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function KennisbankListing() {
  const postsForGrid = restPosts;
  const totalPages = Math.ceil(postsForGrid.length / POSTS_PER_PAGE);
  const currentPosts = postsForGrid.slice(0, POSTS_PER_PAGE);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1A2F] text-[#F4F6F9]">

      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#39FF14]/10 blur-[150px] rounded-none pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #39FF14 1px, transparent 1px), linear-gradient(to bottom, #39FF14 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#39FF14] text-[#0A1A2F] px-4 py-2 rounded-none mb-6 shadow-lg border border-white/25">
            <BookOpen className="w-4 h-4 text-[#0A1A2F]" />
            <span className="text-[#0A1A2F] font-black text-xs uppercase tracking-widest">
              {BRAND} Kennisbank
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-[#FFFFFF] mb-6">
            HANDLEIDINGEN & <br />
            <span className="text-[#FFD700]">STREAMING TIPS</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#F4F6F9]/80 font-bold max-w-2xl mx-auto leading-relaxed mb-8">
            Installatiegidsen, app-reviews en handige tips. Alles wat u nodig heeft om optimaal te genieten van uw {FOCUS_KEYWORD} abonnement.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#132948] border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider shadow-md">
              <TrendingUp className="w-3.5 h-3.5 text-[#FFD700]" />
              {blogPosts.length} Artikelen
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#132948] border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#39FF14]" />
              Wekelijks Bijgewerkt
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#132948] border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider shadow-md">
              <MessageCircle className="w-3.5 h-3.5 text-[#FFD700]" />
              24/7 Ondersteuning
            </span>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER CHIPS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-10 pt-10">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`px-4 sm:px-5 py-2 rounded-none text-xs font-black uppercase tracking-widest transition-all border-2 ${
                cat.id === 'all'
                  ? 'bg-[#FFD700] text-[#0A1A2F] border-[#FFD700] shadow-lg'
                  : 'bg-[#132948] text-[#F4F6F9]/80 border-white/10 hover:bg-[#39FF14]/20 hover:text-[#FFFFFF] hover:border-[#39FF14]'
              }`}
              aria-label={`Filter op ${cat.label}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-[#39FF14] rounded-none" />
            <h2 className="text-sm font-black uppercase tracking-widest text-[#39FF14]">
              Uitgelicht Artikel
            </h2>
          </div>
          <FeaturedCard post={featuredPost} />
        </section>
      )}

      {/* ARTICLES GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 w-12 bg-[#39FF14] rounded-none" />
          <h2 className="text-sm font-black uppercase tracking-widest text-[#39FF14]">
            Laatste Artikelen
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentPosts.map((post, i) => (
            <KennisbankCard key={post.id} post={post} priority={i < 3} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2 sm:gap-3">
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-none bg-[#132948] text-[#FFFFFF]/40 border border-white/10 text-xs font-black uppercase tracking-widest cursor-not-allowed"
              aria-label="Vorige pagina"
            >
              <ChevronLeft className="w-4 h-4" />
              Vorige
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`w-10 h-10 rounded-none text-xs font-black transition-all ${
                  idx === 0
                    ? 'bg-[#FFD700] text-[#0A1A2F] shadow-lg'
                    : 'bg-[#132948] text-[#F4F6F9]/80 border border-white/10 hover:bg-[#39FF14]/20 hover:text-[#FFFFFF] hover:border-[#39FF14]'
                }`}
                aria-label={`Ga naar pagina ${idx + 1}`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              type="button"
              disabled={totalPages <= 1}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-none text-xs font-black uppercase tracking-widest transition-all ${
                totalPages > 1
                  ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/40 hover:bg-[#FFD700] hover:text-[#0A1A2F] cursor-pointer'
                  : 'bg-[#132948] text-[#FFFFFF]/40 border border-white/10 cursor-not-allowed'
              }`}
              aria-label="Volgende pagina"
            >
              Volgende
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* WHATSAPP CTA STRIP */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
        <div className="relative rounded-none overflow-hidden border-2 border-[#39FF14]/40 bg-[#132948] p-8 md:p-10 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,212,255,0.1),_transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#39FF14] text-[#0A1A2F] px-4 py-2 rounded-none mb-5 shadow-lg">
              <MessageCircle className="w-4 h-4" />
              <span className="font-black text-xs uppercase tracking-widest">
                Hulp Nodig?
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-4">
              Ontvang Gratis {FOCUS_KEYWORD} Installatiehulp
            </h3>
            <p className="text-[#F4F6F9]/90 text-sm sm:text-base font-bold max-w-xl mx-auto mb-6">
              Ons team staat 24/7 klaar via WhatsApp om te helpen met Firestick, Smart TV of elk ander apparaat. Inclusief begeleide activatie.
            </p>
            <a
              href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                `Hallo ${BRAND}, ik kom uit de kennisbank en heb hulp nodig bij de installatie.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-none bg-[#25D366] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pb-20">
        <div className="bg-[#132948] rounded-none p-8 md:p-12 border-2 border-[#39FF14]/40 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#FFFFFF] leading-tight mb-4">
            Klaar om te Streamen met <span className="text-[#FFD700]">{FOCUS_KEYWORD}?</span>
          </h3>
          <p className="text-[#F4F6F9]/80 text-sm sm:text-base font-medium max-w-xl mx-auto mb-8">
            Kies uit 3, 6 of 12 maanden pakketten. Inclusief WhatsApp begeleiding, 36.000+ zenders en 120.000+ films en series.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-[#39FF14] text-[#0A1A2F] font-black text-sm uppercase tracking-widest hover:bg-[#FFD700] transition-all shadow-xl border border-white/20"
            >
              Bekijk Alle Pakketten <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/installatie"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-[#0A1A2F] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all border-2 border-[#FFD700] shadow-xl"
            >
              Installatiegids
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}