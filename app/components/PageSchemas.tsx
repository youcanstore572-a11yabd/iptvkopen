// components/PageSchemas.tsx
import React from 'react';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;

export function ProductSchema() {
  const commonOfferDefaults = {
    validFrom: '2025-01-01',
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: ['NL', 'BE'],
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0.00',
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
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/#product`,
    name: `${CONSTANTS.BRAND_NAME} Premium Abonnement`,
    sku: `${CONSTANTS.BRAND_NAME.toUpperCase().replace(/\s+/g, '-')}-PREMIUM`,
    category: 'Streaming Service',
    description: `Ervaar premium ${CONSTANTS.FOCUS_KEYWORD} van ${CONSTANTS.BRAND_NAME}. Stream 36.000+ live tv-zenders en 120.000+ films en series in heldere 4K Ultra HD. De leidende ${CONSTANTS.SECONDARY_FOCUS_KEYWORD} voor ${CONSTANTS.TERTIARY_FOCUS_KEYWORD} entertainment — met snelle WhatsApp support en een vrijblijvende proefperiode.`,
    image: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#primaryimage`,
      url: `${SITE_URL}/img/structer.webp`,
      contentUrl: `${SITE_URL}/img/structer.webp`,
      width: { '@type': 'QuantitativeValue', value: 1200 },
      height: { '@type': 'QuantitativeValue', value: 630 },
      caption: `${CONSTANTS.BRAND_NAME} - Premium ${CONSTANTS.TERTIARY_FOCUS_KEYWORD} Streaming Service`,
      representativeOfPage: true,
    },
    brand: {
      '@type': 'Brand',
      name: CONSTANTS.BRAND_NAME,
    },
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
        name: 'Standard - 1 Scherm (3 Maanden)',
        price: '35.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'Standard - 1 Scherm (6 Maanden)',
        price: '45.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'Standard - 1 Scherm (12 Maanden)',
        price: '65.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'Premium - 2 Schermen (3 Maanden)',
        price: '45.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'Premium - 2 Schermen (6 Maanden)',
        price: '65.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'Premium - 2 Schermen (12 Maanden)',
        price: '85.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'VIP Multi-Room - 3 Schermen (3 Maanden)',
        price: '59.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'VIP Multi-Room - 3 Schermen (6 Maanden)',
        price: '79.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: 'VIP Multi-Room - 3 Schermen (12 Maanden)',
        price: '99.00',
        priceCurrency: CONSTANTS.CURRENCY,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}

export function FAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Wat maakt ${CONSTANTS.BRAND_NAME} een premium ${CONSTANTS.SECONDARY_FOCUS_KEYWORD}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${CONSTANTS.BRAND_NAME} levert uitstekende ${CONSTANTS.FOCUS_KEYWORD} tv-streaming in Nederland en België. In plaats van traditionele kabel of satelliet, streamen wij 36.000+ live zenders en meer dan 120.000 video-on-demand titels direct over je internetverbinding in 4K kwaliteit op smart tv's en streaming sticks.`,
        },
      },
      {
        '@type': 'Question',
        name: `Waarom wordt ${CONSTANTS.BRAND_NAME} beschouwd als de beste keuze voor ${CONSTANTS.TERTIARY_FOCUS_KEYWORD} klanten?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Als toonaangevende specialist voor ${CONSTANTS.TERTIARY_FOCUS_KEYWORD} content bieden wij een uitgebreid zenderaanbod voor elke sport-, film- en seriecategorie. Van live sportevenementen tot de nieuwste releases, klanten profiteren van ononderbroken anti-freeze servers voor maximale stabiliteit.`,
        },
      },
      {
        '@type': 'Question',
        name: `Welke apparaten kan ik gebruiken met ${CONSTANTS.BRAND_NAME}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Onze service is 100% compatibel met Amazon Fire TV Stick, Samsung & LG Smart TV’s, Android TV, Apple TV, MAG boxes, Formuler, en smartphones/tablets (iOS/Android). Onze technische ondersteuning helpt je graag bij de juiste keuze.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hoe werkt het installatieproces na de bestelling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Na het kiezen van je pakket nemen we direct contact met je op via WhatsApp. Ons team helpt je stap voor stap bij de installatie van populaire player apps (zoals TiviMate, IBO Player of IPTV Smarters Pro) en activeert je gegevens direct.',
        },
      },
      {
        '@type': 'Question',
        name: `Biedt ${CONSTANTS.BRAND_NAME} een proefperiode aan?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Jazeker! Je kunt eenvoudig een testtoegang aanvragen via WhatsApp. Ervaar zelf de uitstekende beeldkwaliteit, het enorme zenderaanbod en de soepele weergave voordat je een abonnement afsluit.',
        },
      },
      {
        '@type': 'Question',
        name: `Welke apps zijn het beste voor ${CONSTANTS.FOCUS_KEYWORD} streaming?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voor de beste ervaring adviseren wij high-end spelers zoals TiviMate, IPTV Smarters Pro, IBO Player of IPTV Extreme. Mocht je hulp nodig hebben bij de inrichting, dan staat onze WhatsApp support altijd klaar.',
        },
      },
      {
        '@type': 'Question',
        name: `Welke betaalopties zijn er beschikbaar bij ${CONSTANTS.BRAND_NAME}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wij accepteren veilige betalingen via iDEAL, Bancontact, creditcard en crypto. Alle abonnementen zijn transparant geprijsd zonder verborgen kosten en verplichten je niet tot automatische verlenging.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hoe krijg ik hulp bij technische vragen of verbindingsproblemen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Onze Nederlandstalige klantenservice is bereikbaar via WhatsApp. Of het nu gaat om installatievragen, app-aanbevelingen of serverupdates — wij bieden direct en vakkundig support.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}