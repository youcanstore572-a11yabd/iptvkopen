import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/installatie`;

// ---------------------------------------------------------------------------
// SEO STRINGS — DUTCH LOCALIZED FOR IPTV KOPEN PLUS
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `IPTV Installatie Gids | Firestick, Smart TV & Mobiel`
);

const PAGE_DESCRIPTION = clampDescription(
  `IPTV installatie handleiding voor Firestick, Smart TV, Android & iOS. Installeer IPTV Smarters Pro in 10 min met WhatsApp help en gratis test.`
);

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'nl-NL': PAGE_URL,
      'nl-BE': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} Installatie Gids voor Firestick, Smart TV en Mobiel`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  category: 'entertainment',
  keywords: [
    'iptv kopen plus installatie',
    'iptv handleiding firestick',
    'smart tv iptv installeren',
    'iptv smarters pro installatie',
    'beste iptv provider nederland',
    'iptv installatie gids',
    'hoe installeer je iptv',
    'android tv iptv instellen',
    'apple tv iptv app',
    'xtream codes invoeren iptv',
    'm3u playlist installeren',
    'gratis iptv test',
  ],
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA — HowTo + FAQPage + Breadcrumbs
// ---------------------------------------------------------------------------
const SetupPageSchema = () => {
  const whatsappUrl = CONSTANTS.CONTACT?.whatsapp || '#';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // BRAND ENTITY
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Nederland`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/structer.webp`,
        email: CONSTANTS.CONTACT?.email || '',
        telephone: CONSTANTS.CONTACT?.phone || '',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT?.phone || '',
          email: CONSTANTS.CONTACT?.email || '',
          contactType: 'klantenservice',
          availableLanguage: ['Dutch', 'English'],
          areaServed: ['NL', 'BE'],
          contactOption: 'https://schema.org/TollFree',
        },
      },

      // HOW TO SCHEMA
      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}/#howto`,
        name: `Hoe installeer je ${BRAND} op elk apparaat`,
        description: `Volledige stapsgewijze installatiehandleiding voor ${BRAND} op Firestick, Smart TV, Android, Apple TV en pc of Mac. Begeleide WhatsApp setup en een gratis 24-uurs test.`,
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: '35.00',
        },
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/img/structer.webp`,
          width: 1200,
          height: 630,
        },
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Smart TV, Firestick, Android TV, Apple TV, of pc/Mac',
          },
          {
            '@type': 'HowToSupply',
            name: 'Stabiele internetverbinding (minimaal 15 Mbps, 30 Mbps voor 4K)',
          },
          {
            '@type': 'HowToSupply',
            name: `Actief ${BRAND} abonnement of gratis test`,
          },
        ],
        tool: [
          {
            '@type': 'HowToTool',
            name: 'IPTV Smarters Pro (aanbevolen IPTV speler)',
          },
          {
            '@type': 'HowToTool',
            name: 'WhatsApp (voor 24/7 installatie support)',
          },
        ],
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Kies Je Pakket',
            text: `Bezoek onze prijzenpagina en selecteer een ${BRAND} abonnement. Kies voor 3, 6 of 12 maanden met 1, 2 of 3 gelijktijdige schermen.`,
            url: `${SITE_URL}/pricing`,
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Neem Contact op via WhatsApp',
            text: 'Stuur ons team een bericht via WhatsApp. We bevestigen je keuze, sturen een veilige betaallink en begeleiden je stap voor stap door de installatie.',
            url: whatsappUrl,
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Download IPTV Smarters Pro',
            text: 'Installeer IPTV Smarters Pro, een van de snelste en meest stabiele IPTV-spelers voor Firestick, Smart TV’s, Apple apparaten en pc of Mac.',
            url: 'https://iboplayer.pro/',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Kies Automatische of Handmatige Setup',
            text: 'Kies voor automatische setup waarbij ons team op afstand activeert, of handmatige setup waarbij je de M3U URL of Xtream Codes invoert die we via WhatsApp sturen.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Laad Content in 1 tot 2 Minuten',
            text: 'Zodra je gegevens zijn ingevoerd, laadt IPTV Smarters Pro automatisch je complete zenderlijst, films en series bibliotheek en de 7-daagse EPG-gids in.',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Test via de Gratis Proefperiode',
            text: 'Probeer alles uit via de gratis test van 24 uur. Controleer de beeldkwaliteit, het sportaanbod en de soepele werking op jouw apparaat.',
          },
          {
            '@type': 'HowToStep',
            position: 7,
            name: 'Start met Streamen',
            text: 'Geniet direct van 36.000+ live zenders en 120.000+ films en series in 4K kwaliteit. Sportomvat onder meer Eredivisie, Champions League, Formule 1, UFC, Premier League, ESPN en Ziggo Sport.',
          },
        ],
      },

      // FAQ SCHEMA
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Hoe ontvang ik mijn inloggegevens na aanschaf van een pakket?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Alles wordt direct geregeld via WhatsApp. Zodra je pakket is gekozen en de betaling is voldaan, stuurt ons team je installatiegegevens direct in de chat, meestal binnen enkele minuten.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welke IPTV speler raden jullie aan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Wij raden IPTV Smarters Pro aan vanwege de razendsnelle zaptijden, het lage geheugengebruik en de uitstekende 4K prestaties op Firestick, Smart TV’s, Apple apparaten en pc/Mac.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Moet ik IPTV Smarters Pro apart activeren?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'De activeringsservice is gratis inbegrepen bij elk abonnement. Kies automatische setup waarbij je ons je gegevens stuurt, of handmatige setup via Xtream Codes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe lang duurt de volledige installatie?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'De meeste klanten streamen al binnen 10 minuten. Het installeren van IPTV Smarters Pro duurt ongeveer 2 minuten, activatie 1 tot 2 minuten en het inladen van de zenders 1 tot 2 minuten.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ik mijn inloggegevens op meerdere apparaten gebruiken?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, je kunt de app op meerdere apparaten installeren. Het aantal gelijktijdige streams hangt af van je pakket: 1 scherm voor Standard of 2 en 3 schermen voor Multi-room.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wat moet ik doen als ik een inlogfout krijg in IPTV Smarters Pro?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Controleer of je de Xtream Codes API methode hebt geselecteerd in plaats van M3U, en of er geen spaties staan in je gebruikersnaam of wachtwoord. Blijft het probleem bestaan? Stuur ons direct een bericht via WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welke internetsnelheid heb ik nodig voor 4K streaming?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Voor 4K Ultra HD adviseren wij minimaal 30 Mbps. Full HD 1080p loopt soepel op 15 Mbps. Onze anti-freeze servertechnologie past zich automatisch aan je verbinding aan.',
            },
          },
          {
            '@type': 'Question',
            name: 'Heb ik een VPN nodig om jullie service te gebruiken?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nee, onze wereldwijde servers zijn geoptimaliseerd en beveiligd. Als je internetprovider (ISP) videostreams afknijpt tijdens piekuren, kun je eventueel probleemloos een VPN inschakelen.',
            },
          },
        ],
      },

      // BREADCRUMBS
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Installatie Gids',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="setup-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// RESPONSIVE SETUP LAYOUT
// ---------------------------------------------------------------------------
export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#000000] text-[#FFFFFF]">
      <SetupPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}