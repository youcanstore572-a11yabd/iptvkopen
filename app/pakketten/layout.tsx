// app/pricing/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS — enforce char limits
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// SEO CONSTANTS
const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/pricing`;

// ---------------------------------------------------------------------------
// SEO STRINGS — DUTCH LOCALIZED FOR IPTV KOPEN PLUS
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `IPTV Abonnement Prijzen & Pakketten | 4K Live Zenders`
);

const PAGE_DESCRIPTION = clampDescription(
  `Bespaar tot 60% op IPTV Kopen Plus abonnementen vanaf €35. 36.000+ live zenders, 120.000+ films, gratis test vooraf. 3, 6 of 12 maanden.`
);

// ---------------------------------------------------------------------------
// METADATA CONFIGURATION
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
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
        alt: `${BRAND} Prijzen — 4K IPTV Abonnement Pakketten`,
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
    'iptv kopen plus prijzen',
    'iptv abonnement kosten',
    'iptv pakketten nederland',
    'goedkoop iptv abonnement',
    'iptv provider prijzen',
    'iptv kopen',
    '4k iptv nederland',
    'gratis iptv test',
    'iptv firestick',
    'smart tv iptv',
    'premium iptv nederland',
  ],
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMAS — Organization, Product, FAQ, BreadcrumbList
// ---------------------------------------------------------------------------
const PricingPageSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  // Common Digital Delivery Schema Specs
  const digitalDeliveryDetails = {
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: CONSTANTS.CURRENCY,
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: ['NL', 'BE'],
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
      },
    },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: ['NL', 'BE'],
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
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
        sameAs: Object.values(CONSTANTS.SOCIALS ?? {}),
      },

      // PRODUCT - Pricing Offers with Digital Delivery
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: `${BRAND} IPTV Abonnement Pakketten`,
        alternateName: 'IPTV Kopen Plus Abonnement',
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} biedt premium IPTV pakketten vanaf €35 met 36.000+ live zenders en 120.000+ films en series in 4K Ultra HD. Installatie wordt begeleid via WhatsApp en een gratis test is beschikbaar.`,
        brand: {
          '@type': 'Brand',
          '@id': `${SITE_URL}/#brand`,
          name: BRAND,
        },
        sku: 'IPTV-KOPEN-PLUS-PRICING',
        category: 'Streaming Service',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1255',
          bestRating: '5',
          worstRating: '1',
        },
        offers: [
          {
            '@type': 'Offer',
            name: '1 Scherm - 3 Maanden',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '35.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `3 maanden ${BRAND} abonnement op 1 scherm met 36.000+ live zenders en 120.000+ films en series.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '1 Scherm - 6 Maanden',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '45.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `6 maanden ${BRAND} abonnement op 1 scherm met 36.000+ live zenders en 120.000+ films en series.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '1 Scherm - 12 Maanden',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '65.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `12 maanden ${BRAND} abonnement op 1 scherm met 36.000+ live zenders en 120.000+ films en series.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 Schermen - 3 Maanden',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '45.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `3 maanden ${BRAND} abonnement op 2 schermen met 36.000+ live zenders en 120.000+ films en series.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 Schermen - 6 Maanden',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '65.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `6 maanden ${BRAND} abonnement op 2 schermen met 36.000+ live zenders en 120.000+ films en series.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 Schermen - 12 Maanden',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '85.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `12 maanden ${BRAND} abonnement op 2 schermen met 36.000+ live zenders en 120.000+ films en series.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 Schermen - 3 Maanden',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '59.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `3 maanden ${BRAND} abonnement op 3 schermen met 36.000+ live zenders en 120.000+ films en series.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 Schermen - 6 Maanden',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '79.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `6 maanden ${BRAND} abonnement op 3 schermen met 36.000+ live zenders en 120.000+ films en series.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 Schermen - 12 Maanden',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '99.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `12 maanden ${BRAND} abonnement op 3 schermen met 36.000+ live zenders en 120.000+ films en series.`,
            ...digitalDeliveryDetails,
          },
        ],
      },

      // FAQ SECTION
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `Welke betaalmethoden accepteert ${BRAND}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${BRAND} accepteert iDEAL, Bancontact, creditcards (Visa, Mastercard), PayPal en diverse cryptocurrencies. Elke betaling wordt veilig verwerkt via versleutelde verbindingen.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ik mijn abonnement later upgraden of aanpassen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Ja, je kunt op elk moment upgraden om meer schermen toe te voegen of te kiezen voor een langere periode. Stuur eenvoudig een bericht naar onze WhatsApp helpdesk.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Zit ik vast aan een contract of automatische verlenging?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Nee, absoluut niet. Er zijn geen langlopende contracten en geen automatische verlengingen. Elk pakket is een vooraf betaalde eenmalige betaling die vanzelf stopt na afloop.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Wat gebeurt er wanneer mijn abonnement verloopt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `We sturen je tijdig een herinnering voordat je abonnement afloopt. Je kunt eenvoudig verlengen via WhatsApp. Besluit je niet te verlengen, dan stopt de service automatisch zonder verdere verplichtingen.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ik eerst een gratis test aanvragen voordat ik betaal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Ja. Stuur ons een bericht op WhatsApp en we voorzien je van een gratis proefperiode van 24 uur, zodat je de 4K beeldkwaliteit en zenderlijst zelf kunt testen op je eigen apparatuur.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ik de service op meerdere schermen tegelijk gebruiken?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Ja, afhankelijk van je gekozen pakket kun je tijdens het afrekenen kiezen voor 1, 2 of 3 gelijktijdige schermen om in meerdere kamers tegelijk te kijken.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Zijn er kortingen voor langere abonnementen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Ja. Onze 12-maanden pakketten bieden de hoogste korting, tot wel 60% voordeel vergeleken met kortere periodes. Dit is de slimste optie voor het hele huishouden.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Heb ik een VPN nodig om deze IPTV service te gebruiken?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Een VPN is niet verplicht. Onze servers zijn geoptimaliseerd om stabiele en vloeiende streams te leveren op je eigen internetverbinding in Nederland en België.`,
            },
          },
        ],
      },

      // BREADCRUMB
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
            name: 'Prijzen',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="pricing-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// RESPONSIVE PRICING LAYOUT
// ---------------------------------------------------------------------------
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#000000] text-[#FFFFFF]">
      <PricingPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}