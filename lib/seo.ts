import { Metadata } from 'next';

const DOMAIN = 'iptvkopen.plus';
const BRAND_NAME = 'IPTV Kopen';
const FOCUS_KEYWORD = 'IPTV Kopen';
const SECOND_FOCUS_KEYWORD = 'IPTV Nederland';

export const CONSTANTS = {
  DOMAIN,
  BRAND_NAME,
  FOCUS_KEYWORD,
  SECOND_FOCUS_KEYWORD,
  SITE_URL: `https://${DOMAIN}`,
  
  // Primary Focus Keywords (Top Dutch Search Terms & Brand Variations)
  PRIMARY_KEYWORDS: [
    'IPTV Kopen',
    'IPTV Nederland',
    'Beste IPTV',
    'IPTV Kopen Nederland',
    'IPTV Abonnement',
    'Beste IPTV Provider 2026',
  ],

  // Secondary & High-Intent Search Terms
  SECONDARY_KEYWORDS: [
    'Stabiele IPTV zonder haperingen',
    'Goedkope IPTV Kopen',
    'Nederlandse Zenders IPTV 4K',
    'Eredivisie Ziggo Sport Viaplay IPTV',
    'Smart TV IPTV App',
    'IPTV Test Aanvragen',
  ],

  // Business Contact Details
  CONTACT: {
    email: 'support@iptvkopen.plus',
    phone: '+44 7462 159850',
    whatsapp: 'https://support-tv.online',
    supportHours: '24/7 Klantenservice via WhatsApp en E-mail',
  },

  // Major Target Cities in the Netherlands
  TARGET_REGIONS: [
    'Amsterdam',
    'Rotterdam',
    'Den Haag',
    'Utrecht',
    'Eindhoven',
    'Groningen',
    'Tilburg',
    'Almere',
    'Breda',
    'Nijmegen',
  ],

  // Value Propositions in Native Dutch
  USPS: [
    'Geen haperingen of buffering dankzij anti-freeze servers',
    'Meer dan 20.000+ zenders en 50.000+ VOD films en series',
    'Directe activatie binnen 5 minuten na bestelling',
    'Alle Nederlandse sportzenders in 4K & Full HD',
    'Ondersteunt Smart TV, Firestick, Android, iOS en MAG-boxen',
  ],
};

export const generateSEOMetadata = (
  pageName: string,
  description?: string,
  path: string = '/'
): Metadata => {
  const defaultDescription = `Ontdek ${BRAND_NAME}: de beste IPTV van Nederland. Direct IPTV kopen met 20.000+ live zenders, sport en films in 4K Ultra HD zonder haperingen.`;
  const pageTitle = pageName ? `${pageName} | ${BRAND_NAME}` : `${BRAND_NAME} — #1 IPTV Kopen in Nederland`;

  return {
    title: pageTitle,
    description: description || defaultDescription,
    keywords: [
      ...CONSTANTS.PRIMARY_KEYWORDS,
      ...CONSTANTS.SECONDARY_KEYWORDS,
    ].join(', '),
    metadataBase: new URL(`https://${DOMAIN}`),
    alternates: {
      canonical: path,
      languages: {
        'nl-NL': `https://${DOMAIN}${path}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: description || defaultDescription,
      url: `https://${DOMAIN}${path}`,
      siteName: BRAND_NAME,
      locale: 'nl_NL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: description || defaultDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
};