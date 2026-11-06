export interface Channel {
  name: string;
  quality: '4K UHD' | 'FHD 60FPS' | 'HD';
  genre?: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChannelCategory {
  slug: string;
  name: string;
  totalChannels: number;
  description: string;
  keywords: string[];
  channels: Channel[];
  faqs: FAQItem[];
}

export const channelsData: ChannelCategory[] = [
  {
    slug: 'sport',
    name: 'Live Sport & PPV',
    totalChannels: 1450,
    description: 'Bekijk alle live sportwedstrijden in vloeiende 60FPS beeldkwaliteit. Inclusief Viaplay, Ziggo Sport Totaal, ESPN Compleet, DAZN, Sky Sports en alle wereldwijde UFC & Boxing PPV gala’s.',
    keywords: [
      'IPTV Sport Kijken',
      'Viaplay IPTV Stream',
      'Ziggo Sport Totaal IPTV',
      'ESPN Compleet Live Stream',
      'Formule 1 Live Kijken IPTV',
      'Eredivisie Live Stream',
      'Premier League Live Stream',
      'UFC PPV IPTV Nederland',
      'Champions League IPTV Kijken'
    ],
    channels: [
      { name: 'Viaplay 1 Extra', quality: 'FHD 60FPS', genre: 'Formule 1 & Premier League', description: 'Live Formule 1 kwalificaties en grands prix met Nederlands commentaar van Nelson Valkenburg en Melroy Heemskerk.' },
      { name: 'Viaplay 2 Extra', quality: 'FHD 60FPS', genre: 'Premier League & Darts', description: 'Volledige dekking van de Engelse Premier League en alle PDC World Darts toernooien.' },
      { name: 'Ziggo Sport Select', quality: 'FHD 60FPS', genre: 'Champions League & La Liga', description: 'Hoofdkanaal voor UEFA Champions League, La Liga, Serie A en MotoGP.' },
      { name: 'Ziggo Sport Voetbal', quality: 'FHD 60FPS', genre: 'Internationaal Voetbal', description: 'Non-stop topwedstrijden uit Spanje, Italië, Frankrijk en Europese toernooien.' },
      { name: 'Ziggo Sport Golf & Tennis', quality: 'FHD 60FPS', genre: 'PGA Tour & ATP Tennis', description: 'Live verslaggeving van alle Grand Slams, ATP Masters en PGA Tour evenementen.' },
      { name: 'Ziggo Sport Racing', quality: 'FHD 60FPS', genre: 'Motorsport & IndyCar', description: 'Formule 2, Formule 3, NASCAR, IndyCar en DTM races live.' },
      { name: 'ESPN 1 HD Nederland', quality: 'FHD 60FPS', genre: 'Eredivisie Hoofdkanaal', description: 'Alle topduels uit de Nederlandse Eredivisie en Keuken Kampioen Divisie.' },
      { name: 'ESPN 2 HD', quality: 'FHD 60FPS', genre: 'Eredivisie & KNVB Beker', description: 'Aanvullende live Eredivisie wedstrijden, KNVB Beker en praatprogramma’s.' },
      { name: 'ESPN 3 HD', quality: 'FHD 60FPS', genre: 'Vrouwen Eredivisie & MLS', description: 'Amerikaanse MLS, Vrouwen Eredivisie en live schakelprogramma’s.' },
      { name: 'ESPN 4 HD', quality: 'FHD 60FPS', genre: 'Internationale Bekers', description: 'Europa League schakelkanaal, UEFA Conference League en live evenementen.' },
      { name: 'DAZN 1 Bar HD', quality: 'FHD 60FPS', genre: 'Boksen & Bundesliga', description: 'Exclusieve internationale boksgala’s en live Duitse Bundesliga voetbaltoppers.' },
      { name: 'DAZN Fights PPV', quality: 'FHD 60FPS', genre: 'Combat Sports', description: 'Alle pay-per-view gevechten van Matchroom Boxing en Golden Boy Promotions.' },
      { name: 'UFC Fight Pass Live', quality: 'FHD 60FPS', genre: 'MMA & Vechtsport', description: 'Vroege voorprogramma’s, Dana White’s Contender Series en live UFC Main Cards.' },
      { name: 'Sky Sports Main Event', quality: 'FHD 60FPS', genre: 'UK Premier League', description: 'Engels commentaar voor de grootste live voetbal- en internationale sportwedstrijden.' },
      { name: 'Sky Sports F1', quality: 'FHD 60FPS', genre: 'Dedicated F1 Feed', description: '24/7 Formule 1 analyses, onboard camera’s en weekend verslaggeving.' },
      { name: 'TNT Sports 1 Ultimate', quality: 'FHD 60FPS', genre: 'Champions League & UFC', description: 'Britse premium streams van UEFA toernooien en UFC PPV evenementen.' }
    ],
    faqs: [
      { question: 'Kan ik de Formule 1 en Eredivisie zonder vertraging kijken?', answer: 'Ja, onze dedicated sportservers maken gebruik van 60fps high-bitrate verbindingen met minimale latency, zodat u live meekijkt zonder vertraging.' },
      { question: 'Moet ik extra betalen voor UFC of Boxing PPV evenementen?', answer: 'Nee, alle grote pay-per-view evenementen (UFC, Glory Kickboxing, Boksen en WWE) zijn standaard inbegrepen in al onze abonnementen.' },
      { question: 'Is er een terugkijkfunctie voor gemiste wedstrijden?', answer: 'Ja, voor vrijwel alle sportkanalen bieden wij een 7-daagse terugkijkfunctie en automatische EPG-gids.' }
    ]
  },
  {
    slug: 'nederland',
    name: 'Nederlandse Zenders',
    totalChannels: 195,
    description: 'Het complete aanbod van de Nederlandse publieke en commerciële omroepen in Full HD beeldkwaliteit inclusief 7 dagen terugkijken en EPG.',
    keywords: [
      'Nederlandse TV Zenders IPTV',
      'NPO 1 2 3 Kijken',
      'RTL 4 5 7 8 IPTV Stream',
      'SBS6 Live Kijken IPTV',
      'Nederlandse Zenders Buitenland',
      'IPTV Nederland Pakket'
    ],
    channels: [
      { name: 'NPO 1 HD', quality: 'FHD 60FPS', genre: 'Publieke Omroep', description: 'Het belangrijkste nieuwskanaal, NOS Journaal, Studio Sport en grote nationale evenementen.' },
      { name: 'NPO 2 HD', quality: 'FHD 60FPS', genre: 'Verdieping & Cultuur', description: 'Nieuwsuur, documentaires, kunst, cultuur en achtergrondprogramma’s.' },
      { name: 'NPO 3 HD', quality: 'FHD 60FPS', genre: 'Jongeren & Entertainment', description: 'Zapp kinderblok overdag, series, comedy en festivals in de avond.' },
      { name: 'RTL 4 HD', quality: 'FHD 60FPS', genre: 'Commercieel Vlaggenschip', description: 'RTL Nieuws, RTL Boulevard, The Voice, Expeditie Robinson en talkshows.' },
      { name: 'RTL 5 HD', quality: 'FHD 60FPS', genre: 'Reality & Crime', description: 'Realitytelevisie, misdaadprogramma’s en internationale dramaseries.' },
      { name: 'RTL 7 HD', quality: 'FHD 60FPS', genre: 'Mannen & Sport', description: 'Darts, UEFA Europa League voetbal, actieseries en automotive programma’s.' },
      { name: 'RTL 8 HD', quality: 'FHD 60FPS', genre: 'Films & Series', description: 'Feelgood films, romantische drama’s en detectiveseries.' },
      { name: 'SBS6 HD', quality: 'FHD 60FPS', genre: 'Amusement & Showbizz', description: 'Hart van Nederland, Shownieuws, Vandaag Inside en grote spelshows.' },
      { name: 'Veronica HD', quality: 'FHD 60FPS', genre: 'Films & Voetbal', description: 'Internationale actiefilms, Champions League samenvattingen en komedies.' },
      { name: 'Net5 HD', quality: 'FHD 60FPS', genre: 'Lifestyle & Drama', description: 'Culinaire programma’s, internationale hitseries en romantische films.' },
      { name: 'SBS9 HD', quality: 'FHD 60FPS', genre: 'Non-stop Bioscoop', description: 'Thematische filmavonden en complete serie-marathons.' },
      { name: 'Comedy Central NL', quality: 'FHD 60FPS', genre: 'Humor & Animatie', description: 'South Park, Friends, The Daily Show en stand-up comedy.' },
      { name: 'Discovery Channel NL', quality: 'FHD 60FPS', genre: 'Documentaires & Wetenschap', description: 'Deadliest Catch, Gold Rush en wetenschappelijke series met Nederlandse ondertiteling.' },
      { name: 'National Geographic NL', quality: 'FHD 60FPS', genre: 'Natuur & Geschiedenis', description: 'Bekroonde natuurdocumentaires en historische expedities.' },
      { name: 'Investigation Discovery', quality: 'FHD 60FPS', genre: 'True Crime', description: 'Waargebeurde misdaadverhalen, forensisch onderzoek en documentaires.' },
      { name: 'RTL Crime NL', quality: 'FHD 60FPS', genre: 'Detectives & Thrillers', description: '24/7 nationale en internationale misdaad- en politieseries.' }
    ],
    faqs: [
      { question: 'Kan ik de Nederlandse zenders ook in het buitenland bekijken?', answer: 'Ja, onze IPTV streams werken wereldwijd zonder geografische blokkades. U heeft geen VPN nodig om in Spanje, Duitsland of elders te kijken.' },
      { question: 'Zijn alle Nederlandse zenders voorzien van Nederlandse ondertiteling?', answer: 'Ja, alle films, series en documentaires op de Nederlandse kanalen beschikken over originele Nederlandse ondertiteling.' },
      { question: 'Werkt de elektronische programmagids synchroon?', answer: 'Onze EPG wordt elke 6 uur geautomatiseerd bijgewerkt met de actuele Nederlandse programmatijden.' }
    ]
  },
  {
    slug: 'belgie',
    name: 'Belgische Zenders',
    totalChannels: 140,
    description: 'Volledige dekking van de Vlaamse en Waalse televisiekanalen in Full HD. Inclusief VRT 1, VTM, Play4, RTL-TVI en Eleven DAZN Pro League.',
    keywords: [
      'Belgische Zenders IPTV',
      'Vlaamse TV Kijken Nederland',
      'VTM Live Stream IPTV',
      'VRT 1 IPTV',
      'Jupiler Pro League IPTV',
      'Play4 Live Kijken'
    ],
    channels: [
      { name: 'VRT 1 HD', quality: 'FHD 60FPS', genre: 'Vlaamse Publieke Omroep', description: 'Het Journaal, Thuis, De Zevende Dag en ontspanningsprogramma’s.' },
      { name: 'VRT Canvas HD', quality: 'FHD 60FPS', genre: 'Cultuur & Duiding', description: 'Terzake, De Afspraak, documentaires, bioscoopfilms en buitenlands voetbal.' },
      { name: 'Ketnet HD', quality: 'FHD 60FPS', genre: 'Jeugd & Familie', description: 'Kwalitatieve kinderprogramma’s van de Vlaamse publieke omroep.' },
      { name: 'VTM HD', quality: 'FHD 60FPS', genre: 'Vlaams Amusement', description: 'Familie, The Voice van Vlaanderen, VTM Nieuws en entertainmentshows.' },
      { name: 'VTM 2 HD', quality: 'FHD 60FPS', genre: 'Reality & Sport', description: 'Darts toernooien, UEFA Champions League duels en realityseries.' },
      { name: 'VTM 3 HD', quality: 'FHD 60FPS', genre: 'Films & Sci-Fi', description: 'Topfilms, sitcoms en internationale dramareeksen.' },
      { name: 'VTM 4 HD', quality: 'FHD 60FPS', genre: 'Actie & Klassiekers', description: 'Actieklassiekers, politieseries en vintage entertainment.' },
      { name: 'Play4 HD', quality: 'FHD 60FPS', genre: 'Commercieel Vlaanderen', description: 'De Mol, De Slimste Mens ter Wereld, Huizenjagers en topamusement.' },
      { name: 'Play5 HD', quality: 'FHD 60FPS', genre: 'Series & Lifestyle', description: 'Amerikaanse dramareeksen, reality en lifestyle programma’s.' },
      { name: 'Play6 HD', quality: 'FHD 60FPS', genre: 'Actiefilms & Comedy', description: 'Ononderbroken filmavonden en populaire comedyseries.' },
      { name: 'Play7 HD', quality: 'FHD 60FPS', genre: 'Romantiek & Drama', description: 'Feelgood films, miniseries en romantische verhalen.' },
      { name: 'DAZN Pro League 1 HD', quality: 'FHD 60FPS', genre: 'Belgisch Voetbal', description: 'Alle live wedstrijden uit de Belgische Jupiler Pro League.' },
      { name: 'DAZN Pro League 2 HD', quality: 'FHD 60FPS', genre: 'Challenger Pro League', description: 'Tweede klasse Belgisch voetbal en schakelprogramma’s.' },
      { name: 'RTL-TVI HD', quality: 'FHD 60FPS', genre: 'Franstalig België', description: 'Het belangrijkste commerciële kanaal van Franstalig Wallonië.' },
      { name: 'La Une HD', quality: 'FHD 60FPS', genre: 'RTBF Publiek', description: 'Journaal, actualiteiten en live sport van de RTBF.' },
      { name: 'La Deux Tipik HD', quality: 'FHD 60FPS', genre: 'Jongeren & Voetbal', description: 'Europese voetbalduels en lifestyle content voor Franstalig België.' }
    ],
    faqs: [
      { question: 'Kan ik de Belgische Jupiler Pro League live bekijken?', answer: 'Ja, alle wedstrijden van de Jupiler Pro League en Challenger Pro League worden live uitgezonden via de DAZN Pro League kanalen.' },
      { question: 'Zijn Vlaamse programma’s zoals De Mol en Thuis live te volgen?', answer: 'Zeker, u kijkt live mee met dezelfde uitzendtijden als in Vlaanderen, inclusief optionele herstart en terugkijkfunctie.' }
    ]
  },
  {
    slug: 'films-series',
    name: 'Films & VOD Bibliotheek',
    totalChannels: 450,
    description: 'Toegang tot meer dan 60.000 bioscoopfilms en complete seizoenen van alle grote streamingdiensten in Full HD met Nederlandse ondertiteling.',
    keywords: [
      'IPTV Films Kijken',
      'VOD Films Nederlandse Ondertiteling',
      'Series Kijken IPTV',
      'Netflix Series op IPTV',
      'HBO Max Films IPTV',
      'Disney Plus Content IPTV'
    ],
    channels: [
      { name: 'Cinema Premiere', quality: 'FHD 60FPS', genre: 'Nieuwste Bioscoopreleases', description: 'De allernieuwste bioscoopfilms met Dolby 5.1 surround sound.' },
      { name: 'Cinema Actie & Thriller HD', quality: 'FHD 60FPS', genre: 'Actie & Blockbusters', description: '24/7 non-stop actiehits, martial arts en psychologische thrillers.' },
      { name: 'Cinema Comedy & Romance HD', quality: 'FHD 60FPS', genre: 'Romantiek & Humor', description: 'Komedies, romantische klassiekers en feelgood bioscoopfilms.' },
      { name: 'Cinema Sci-Fi & Fantasy', quality: 'FHD 60FPS', genre: 'Sci-Fi & Avontuur', description: 'Ruimte-avonturen, superheldenfilms en fantasy spektakels.' },
      { name: 'Cinema Classics Vault HD', quality: 'FHD 60FPS', genre: 'Klassieke Meesterwerken', description: 'Gerenoveerde filmklassiekers uit de jaren 70, 80 en 90 in HD.' },
      { name: 'HBO Series Central', quality: 'FHD 60FPS', genre: 'Premium HBO Originals', description: 'Complete seizoenen van Succession, House of the Dragon en The Last of Us.' },
      { name: 'Netflix Stream Hub', quality: 'FHD 60FPS', genre: 'Populaire Streaming Originals', description: 'Alle seizoenen van Stranger Things, Squid Game en topdocumentaires.' },
      { name: 'Disney & Marvel Vault', quality: 'FHD 60FPS', genre: 'Marvel, Star Wars & Pixar', description: 'Alle Marvel Cinematic Universe films, Star Wars reeksen en animaties.' },
      { name: 'Paramount Showcase HD', quality: 'FHD 60FPS', genre: 'Topdrama & Westerns', description: 'Yellowstone universum, Star Trek series en Paramount bioscoophits.' },
      { name: 'Apple Originals Channel', quality: 'FHD 60FPS', genre: 'Bekroonde Series', description: 'Ted Lasso, Severance, The Morning Show en bekroonde speelfilms.' },
      { name: 'Documentary World', quality: 'FHD 60FPS', genre: 'Natuur & Misdaad Documentaires', description: 'Hoogwaardige natuur- en misdaaddocumentaires van over de hele wereld.' },
      { name: 'Horror Nights HD', quality: 'FHD 60FPS', genre: 'Horror & Paranormaal', description: 'Spannende horrorfilms, slashers en paranormale documentaires.' }
    ],
    faqs: [
      { question: 'Hoe vaak wordt de VOD filmbibliotheek bijgewerkt?', answer: 'Onze film- en seriecatalogus wordt dagelijks geautomatiseerd bijgewerkt met de nieuwste bioscoopreleases en streamingtitels.' },
      { question: 'Hebben alle films Nederlandse ondertiteling?', answer: 'Ja, ruim 95% van alle buitenlandse films en series beschikt over selecteerbare Nederlandse ondertitels.' }
    ]
  },
  {
    slug: 'kids',
    name: 'Kids & Familie',
    totalChannels: 85,
    description: 'Veilige en vermakelijke kinderzenders voor alle leeftijden. Volledig Nederlands gesproken tekenfilms, jeugdseries en educatieve programma’s.',
    keywords: [
      'Kinderzenders IPTV',
      'Disney Channel Nederlands Gesproken',
      'Nickelodeon Live IPTV',
      'Cartoon Network Nederlands',
      'BabyTV IPTV Kijken',
      'Veilige Kindertv Streams'
    ],
    channels: [
      { name: 'Nickelodeon NL HD', quality: 'FHD 60FPS', genre: 'Tekenfilms & Jeugdseries', description: 'SpongeBob SquarePants, Paw Patrol, The Loud House en tienerreeksen.' },
      { name: 'Nick Jr. NL', quality: 'FHD 60FPS', genre: 'Peuters & Kleuters', description: 'Educatieve en vrolijke programma’s voor de allerkleinsten, volledig Nederlands gesproken.' },
      { name: 'Nicktoons NL', quality: 'FHD 60FPS', genre: 'Non-stop Animatie', description: '24 uur per dag de leukste animatieseries en cartoons.' },
      { name: 'Disney Channel NL HD', quality: 'FHD 60FPS', genre: 'Disney Series & Films', description: 'Populaire Disney series, tienershows en originele Disney films.' },
      { name: 'Disney Junior NL', quality: 'FHD 60FPS', genre: 'Peuteranimatie', description: 'Mickey Mouse Clubhuis, Spidey en zijn vriendjes en Bluey.' },
      { name: 'Cartoon Network NL HD', quality: 'FHD 60FPS', genre: 'Klassieke & Moderne Cartoons', description: 'Teen Titans Go!, Gumball, Adventure Time en Scooby-Doo.' },
      { name: 'Boomerang Cartoonito NL', quality: 'FHD 60FPS', genre: 'Klassieke Tekenfilms', description: 'Tom & Jerry, Looney Tunes, Mr. Bean animatie en kleuterreeksen.' },
      { name: 'BabyTV Nederlands', quality: 'FHD 60FPS', genre: 'Baby’s & Peuters', description: 'Rustgevende en leerzame muziekjes en animaties voor de allerkleinsten.' },
      { name: 'Telekids HD', quality: 'FHD 60FPS', genre: 'Nederlandse Kindertv', description: 'Brandweerman Sam, Chloe’s Toverkast en Buurman & Buurman.' },
      { name: 'Pebble TV HD', quality: 'FHD 60FPS', genre: 'Geweldloze Kindertv', description: 'Veilige Europese kinderseries en animaties zonder geweld of agressie.' }
    ],
    faqs: [
      { question: 'Zijn de kinderkanalen in het Nederlands gesproken?', answer: 'Ja, alle internationale kinderzenders zenden standaard het Nederlandse audiospoor uit.' },
      { question: 'Kan ik kindersloten instellen op de IPTV app?', answer: 'In vrijwel alle IPTV apps kunt u eenvoudig een ouderlijk toezicht pincode instellen om kanalen af te schermen.' }
    ]
  },
  {
    slug: 'internationaal',
    name: 'Internationale Kanalen',
    totalChannels: 19500,
    description: 'Toegang tot nationale live televisiezenders uit Europa (VK, Duitsland, Frankrijk, Spanje, Italië, Scandinavië), de Verenigde Staten en Azië (China CCTV/CGTN).',
    keywords: [
      'Internationale IPTV Zenders',
      'UK TV Channels IPTV',
      'USA TV Channels IPTV',
      'Duitse Zenders Live Stream',
      'Franse Zenders Kijken',
      'Chinese TV CCTV IPTV',
      'Wereldwijd IPTV Abonnement'
    ],
    channels: [
      // UK
      { name: 'BBC One HD', quality: 'FHD 60FPS', genre: 'Verenigd Koninkrijk', description: 'Het belangrijkste Britse publieke kanaal met BBC News, topdrama en live sport.' },
      { name: 'BBC Two HD', quality: 'FHD 60FPS', genre: 'Verenigd Koninkrijk', description: 'Documentaires, comedy en achtergrondprogramma’s uit Groot-Brittannië.' },
      { name: 'ITV 1 HD', quality: 'FHD 60FPS', genre: 'Verenigd Koninkrijk', description: 'Grootste Britse commerciële omroep met topentertainment en shows.' },
      { name: 'Channel 4 HD', quality: 'FHD 60FPS', genre: 'Verenigd Koninkrijk', description: 'Britse kwaliteitsfilms, documentaires en bekroonde series.' },
      
      // USA
      { name: 'HBO East HD', quality: 'FHD 60FPS', genre: 'Verenigde Staten', description: 'Amerikaanse bioscoopfilms en premium HBO series live.' },
      { name: 'CNN USA HD', quality: 'FHD 60FPS', genre: 'Verenigde Staten', description: '24/7 Amerikaans wereldnieuws, live debatten en diepte-interviews.' },
      { name: 'NBC East HD', quality: 'FHD 60FPS', genre: 'Verenigde Staten', description: 'Amerikaans entertainment, live talkshows en sportverslaggeving.' },
      { name: 'CBS HD USA', quality: 'FHD 60FPS', genre: 'Verenigde Staten', description: 'Grote Amerikaanse dramaseries, NFL Football en prime-time entertainment.' },
      { name: 'FOX News USA', quality: 'FHD 60FPS', genre: 'Verenigde Staten', description: 'Amerikaans nieuws, politieke analyses en opinieprogramma’s.' },

      // Germany
      { name: 'ARD Das Erste', quality: 'FHD 60FPS', genre: 'Duitsland', description: 'Duitse publieke hoofdpost met Tagesschau, Tatort en Bundesliga sport.' },
      { name: 'ZDF HD', quality: 'FHD 60FPS', genre: 'Duitsland', description: 'Kwaliteitstelevisie uit Duitsland met documentaires en live sport.' },
      { name: 'RTL Television HD', quality: 'FHD 60FPS', genre: 'Duitsland', description: 'Duits commercieel topkanaal met films, series en sportanalyses.' },

      // France & Spain & Italy
      { name: 'TF1 HD', quality: 'FHD 60FPS', genre: 'Frankrijk', description: 'Grootste Franse televisiezender met live sport, series en films.' },
      { name: 'France 2 HD', quality: 'FHD 60FPS', genre: 'Frankrijk', description: 'Franse publieke omroep met live Roland Garros tennis en Tour de France.' },
      { name: 'La 1 HD', quality: 'FHD 60FPS', genre: 'Spanje', description: 'Spaanse nationale hoofdtelevisiezender met nieuws en entertainment.' },
      { name: 'Antena 3 HD', quality: 'FHD 60FPS', genre: 'Spanje', description: 'Populaire Spaanse commerciële zender met nieuws en topseries.' },
      { name: 'Rai 1 HD', quality: 'FHD 60FPS', genre: 'Italië', description: 'Italiaanse publieke omroep met nieuws, Sanremo en entertainment.' },

      // China / Asia
      { name: 'CCTV-1 Comprehensive', quality: 'FHD 60FPS', genre: 'China', description: 'Het belangrijkste Chinese nationale nieuwskanaal en familie-entertainment.' },
      { name: 'CCTV-4 International', quality: 'FHD 60FPS', genre: 'China', description: 'Internationale Chinese uitzendingen met cultuur, geschiedenis en wereldnieuws.' },
      { name: 'CGTN English News', quality: 'FHD 60FPS', genre: 'China & Azië', description: '24/7 Engelstalig wereldnieuws en economische analyses vanuit Azië.' }
    ],
    faqs: [
      { question: 'Zijn alle internationale zenders netjes gesorteerd per land?', answer: 'Ja, al onze afspeellijsten zijn overzichtelijk ingedeeld in alfabetische landencategorieën met landvlaggen voor snel en intuïtief zappen.' },
      { question: 'Kan ik overbodige landen verbergen in mijn zenderlijst?', answer: 'Ja, via uw IPTV app of via onze WhatsApp klantenservice kunt u eenvoudig categorieën laten uitschakelen die u niet gebruikt.' }
    ]
  }
];

export function getChannelCategoryBySlug(slug: string): ChannelCategory | undefined {
  return channelsData.find((category) => category.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return channelsData.map((category) => category.slug);
}