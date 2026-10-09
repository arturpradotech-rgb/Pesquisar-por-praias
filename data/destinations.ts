export interface Beach {
  id: string;
  name: string;
  subLocation: string;
  image: string;
  temp: string;
  weather: string;
  waterStatus: 'Própria para Banho' | 'Imprópria';
  description: string;
  tags: string[];
  distanceFromCenter: string;
  accessType: string;
  waveType: string;
  parkingCost?: string;
}

export interface InfraItem {
  icon: string;
  title: string;
  description: string;
  badge: string;
  badgeColor?: string;
}

export interface TourItem {
  image: string;
  title: string;
  category: string;
  description: string;
  hours: string;
}

export interface GastroItem {
  title: string;
  category: string;
  priceLevel: string;
  description: string;
  tip: string;
}

export interface StayItem {
  title: string;
  category: string;
  tags: string[];
  description: string;
  priceEstimate: string;
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  titleHero: string;
  subtitleHero: string;
  coverImage: string;
  aerialImage?: string;
  regionBadge: string;
  cetesbScore: string;
  specialBadge: string;
  // ABC Metrics
  carTimeFromABC: string;
  carDistanceKm: number;
  bestRouteDescription: string;
  tollsCostRoundTrip: string;
  tollsCostOneWay: string;
  abcQuickExitTip: string;
  trafficStatus: 'Fluindo Bem' | 'Normal' | 'Tráfego Intenso';
  // Bus Terresa
  busTime: string;
  busCompany: string;
  busSchedules: string[];
  busTicketPrice: string;
  // Weather
  tempC: number;
  sensacaoC: number;
  windSpeed: string;
  uvIndex: number;
  uvDescription: string;
  waterTempC: number;
  beachCleanPercent: number;
  weatherSummary: string;
  // Filter Categories
  radiusCategory: 'curto' | 'medio' | 'estendido' | 'voo';
  vibes: string[];
  // Sub-tabs data
  beaches: Beach[];
  infrastructure: InfraItem[];
  tours: TourItem[];
  gastronomy: GastroItem[];
  lodging: StayItem[];
  // ABC logistics deep-dive
  bestDepartureFriday: string;
  recommendedRoads: string;
  recommendedRestStop: string;
  mapCoordinates: { x: number; y: number };
}

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'ubatuba',
    name: 'Ubatuba',
    state: 'SP',
    titleHero: 'Ubatuba — Mar Esmeralda & Mata Atlântica',
    subtitleHero:
      'Saindo de Santo André para o litoral mais preservado de São Paulo. Enseadas cristalinas, ilhas paradisíacas e o refúgio perfeito de fim de semana na Serra do Mar.',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAtnTe3yZLltMvnl5LtTw6s587ABiqWz1ewVp79bEgdPKXt7fQziUzATmSYmTf6xh0jGV7daic8YLDQAJhAtlyJFfOt5RfgXKaXHRyXcEgm_MpfKZ4qKyqPNWJCUQkcFcPH5_iKIDTa-jR3ZDP0Tt6z6eUWroken7yCrjBM0Zie7DtDuVb6B1QZWBEBYZlPeY4FcLrfB-BCZgRO0MhOjuC4vPbPCyK9fUGiJupFzEuMCAGB2l7VNdEO',
    regionBadge: 'Litoral Norte SP',
    cetesbScore: '92% Bandeira Verde CETESB',
    specialBadge: 'Capital do Surfe • 102 Praias',
    carTimeFromABC: '3h 10min',
    carDistanceKm: 218,
    bestRouteDescription:
      'Via Ayrton Senna/Carvalho Pinto (SP-070) e nova descida da Rodovia dos Tamoios (SP-099).',
    tollsCostOneWay: 'R$ 38,40',
    tollsCostRoundTrip: 'R$ 76,80',
    abcQuickExitTip: 'Acesse via Jacu-Pêssego ou Rodoanel Leste',
    trafficStatus: 'Fluindo Bem',
    busTime: '4h 15min',
    busCompany: 'Viação Pássaro Marron (TERRESA)',
    busSchedules: ['06:30', '13:45', '18:15'],
    busTicketPrice: 'R$ 89,00',
    tempC: 29,
    sensacaoC: 31,
    windSpeed: 'Vento 12 km/h SE',
    uvIndex: 9,
    uvDescription: 'Muito Alto',
    waterTempC: 24,
    beachCleanPercent: 92,
    weatherSummary:
      '☀️ Sol pleno garantido durante toda a tarde no litoral norte. Mar azul, águas limpas e sem risco de comboio na serra.',
    radiusCategory: 'estendido',
    vibes: [
      'Sol Máximo Hoje',
      'Praias Estruturadas',
      'Trilhas & Selvagens',
      'Gastronomia Pé na Areia',
      'Família & Águas Calmas',
    ],
    mapCoordinates: { x: 805, y: 260 },
    beaches: [
      {
        id: 'felix',
        name: 'Praia do Félix',
        subLocation: 'Norte de Ubatuba • km 34',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC9xhOKfBN75gc7jr4_NMGhmdflhlSDAYQC6R8Z-UiQ3IwtM5hZ9xN7DXO13vgdZRICXIfeX0Y8XKsGQDgmqVdfbV-QGdJr3VgG4jOCkgmAun7c8mFPF89OKRoqjmTJVA1bj92ILpulW8T_no82wbWVxsL9MU-45ULELiFj7zNA4W-s76J6lXwoN20tS0hQcjUNBrbpunJ6W2g-J8S7wRQWHnSxt79wv-7Wz9lCLwxsk4HCazyumxjf',
        temp: '29°C • Céu Aberto',
        weather: 'Ensolarado',
        waterStatus: 'Própria para Banho',
        description:
          'Fácil acesso por via pavimentada através de condomínio ecológico. Areia clara e cenário duplo clássico: o lado esquerdo abriga ondas fortes excelentes para surfe, enquanto o lado direito vira uma piscina natural transparente, ideal para famílias e snorkel.',
        tags: ['Areia Fofa', 'Piscina Natural', 'Surfe Lado Esquerdo', 'Fácil Estacionamento'],
        distanceFromCenter: '15 km do Centro',
        accessType: 'Condomínio fechado com guarita',
        waveType: 'Piscina à direita / Surf à esquerda',
        parkingCost: 'Zona Azul R$ 20',
      },
      {
        id: 'almada',
        name: 'Praia da Almada & Engenho',
        subLocation: 'Extremo Norte • Enseada Abrigada',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBNqDTOS2uz6FgYOPlFrdStrUI8JIWY_WqNJeV8OypANQ2hqzBk1KnsM9zVT__Qt1yFOXH8_I1qioFg-FnWnLdsngiiqUp-uWfWgGSwFY7Q8GfmVOzf6Ag86wrDdTYPcTLvFTWSvG9EOsLu-CIldGktoMHT-S8wb_On6oleM6Z2IsQYhoQ6EOjHmSCTyb4StAQqf2DjZHnnE9zLRqRoyinbba6UBgbsNfRHkWu_k7tb08j6McHiqSvV',
        temp: 'Ideal para Crianças',
        weather: 'Águas Calmas',
        waterStatus: 'Própria para Banho',
        description:
          'Águas ultra calmas sem ondas, amendoeiras que oferecem sombra natural perfeita na areia e aluguel prático de caiaques e SUP. Uma pequena passarela de pedras liga a Almada à vizinha Praia do Engenho. Estacionamento regulamentado com taxa local de apoio comunitário.',
        tags: ['Águas Ultra Calmas', 'Sombra Natural', 'Passeio de Caiaque', 'Quiosques Tradicionais'],
        distanceFromCenter: '35 km do Centro',
        accessType: 'Estrada asfaltada sinuosa',
        waveType: 'Sem ondas (piscina)',
        parkingCost: 'Estacionamento Local R$ 25',
      },
      {
        id: 'cedro',
        name: 'Praia do Cedro (Cedrinho)',
        subLocation: 'Península Central • Preservação',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBPJ0LaLigNWoPHR0qQiEqhsNQXOmpJHIS128lw4Aqs3rsgpeh6rvCDsqCqFAB5kJtKbz9V5FUcsrWoqAW7kyhc1s8dHSN5yyhXhJNqtACSi2tefl5FJOI_a2Uc1WVJ3BX4UMIsmOxL5chGJl-IWiN14Bucyk5IRCv-IkoyEZDNx4CvCFkP-8xSur_F6jf_950J8TCNRdf-E7_ONCVPGqY6DRV7yVaZ-0E8MZcCSs44x7naLTAUVDve',
        temp: 'Trilha Leve 15min',
        weather: 'Mar Esmeralda',
        waterStatus: 'Própria para Banho',
        description:
          'Pequena joia selvagem de mar cristalino verde-esmeralda e rica vida marinha. Requer caminhada sombreada de 15 minutos em declive ou táxi-boat saindo da Enseada. Perfeita para quem busca contemplação, mergulho livre com tartarugas e silêncio.',
        tags: ['Acesso por Trilha', 'Mergulho Snorkel', 'Natureza Intocada', 'Táxi Boat Opcional'],
        distanceFromCenter: '7 km do Centro',
        accessType: 'Trilha de terra 700m descida',
        waveType: 'Mar calmo verde translúcido',
        parkingCost: 'R$ 20 no topo da trilha',
      },
    ],
    infrastructure: [
      {
        icon: 'shower',
        title: 'Quiosques & Duchas',
        description:
          '18 praias estruturadas contam com banheiros públicos higienizados, duchas de água doce e restaurantes com mesas na areia. Praia Grande, Tenório e Toninhas possuem a maior concentração.',
        badge: 'Aceitam Cartão e Pix',
      },
      {
        icon: 'wifi_tethering',
        title: 'Conectividade 4G / 5G',
        description:
          'Sinal forte (Claro e Vivo 5G) em Itaguá, Praia Grande, Maranduba e Centro histórico. Atenção: nas praias selvagens do extremo norte (Prumirim, Puruba, Picinguaba) a cobertura oscila.',
        badge: 'Dica: Baixe os mapas antecipadamente',
      },
      {
        icon: 'medical_services',
        title: 'Saúde & Emergência',
        description:
          'Santa Casa de Ubatuba a 12 minutos do centro (Pronto-Socorro 24h). Posto de Salvamento e Grupamento de Bombeiros Marítimos (GBMar) ativos diariamente nas principais praias.',
        badge: 'Emergência Marítima: Ligue 193',
      },
      {
        icon: 'local_parking',
        title: 'Zona Azul & Bolsões',
        description:
          'Zona Azul Digital Municipal unificada: tarifa diária única de R$ 20 válida para rodízio de praias no mesmo dia. Bolsões amplos e monitorados na Praia Grande e Toninhas.',
        badge: 'App Estapar ou Monitores com colete',
      },
    ],
    tours: [
      {
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBWUxRqVAw4kECmlk563_cm615Y9mYkuf1dUOCcMgjQ40YF5NQGEsU2h94Mpmw9vHuUVPIzP-tcYFeXK3VhlpQDekiUgQbxrgc0O77nGexnIVUe-TSk1Gvx7YjbUH7fDKpwox3UJhSKa3f9tlZfEGldsVpoJrXsGLBx84aNe5G_aCe7_nLwaY4y0pida1wOYBKdApqJrHuMXyFQnL9-hywfhQX6Gn81dY__WHooxQ2NeqdeC2Zde-4J',
        title: 'Projeto TAMAR Ubatuba',
        category: 'Conservação',
        description:
          'Centro de proteção de tartarugas marinhas pioneiro no sudeste. Tanques interativos, museu do mar e biólogos no Itaguá.',
        hours: 'Aberto diariamente até as 18h',
      },
      {
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBPJXvpHZEwqZlIZp_5cMoByK2tWB3btNj9kpQ8V-fJcd1lbdXQZG2E8SAAlldT5DfrzHuYB4lj6Syy_rBMpZ_bOMT0qgiRtrVIGGetySZl2Da6yfZnwpuJRCg7hsJxt2sxf3lbSD8ybawGbou7e4us1A5dwZFYdoo4pmIrTc_q2EbnzJzDc3gSw3w6V8dlTqTi2tiDey_SQKpDXYix_obfB-ImA8XogbpMG_cp48yPzmp8yT-HHLjG',
        title: 'Aquário de Ubatuba',
        category: 'Imperdível Família',
        description:
          'Primeiro aquário privado do Brasil com tanque de toque, pinguinário e tubarões litorâneos da costa paulista.',
        hours: 'Rua Guarani • Itaguá',
      },
      {
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDCaaEsI9gN_gnfXpXdGqSMWB6ruqeuvdw21aevL357zG335Df1RTw8cdPdrDID70LcvB_Nu-M0Vsh8_TVorkFNyx48PU-_xaKxQmijAzOYLrOPNJEPQ8XknkunNMNiBvH0pvu4V5EiRWsAJA-6pGXEBowpM-ZCTLRJjGBUOP9_zgjeopdn2eHhrLoyue1DPfpImtdM1eE-ZBDCqa4sGM_hTiT-_Ol47AgTfYbqJPOomK68dwMQblM0',
        title: 'Ilha das Couves & Anchieta',
        category: 'Passeio Náutico',
        description:
          'Passeios de escuna e lanchas rápidas. Mergulho com visibilidade submarina de até 15 metros e ruínas históricas do antigo presídio.',
        hours: 'Embarque: Saco da Ribeira ou Itaguá',
      },
      {
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAUGIot5TGybbgBayUqaYv7qXDEOmiuORIsYVza1R2ALSSDLDdXKrss-CGkEZ9_A_ej_LFej6h8gjgVW265H9269vEJ4FvOpYEIZTs48yIZ-IKUCPz2NCN1E4ociCN0fcWSkpwqVzGlECPUb6PcBIZJ13e-F9r0h33kxqVbToUq41rWEsmZMiQ2URd0sLNa-gpcY42FsrM0rdKfschMNlEeVf2frRKp44rjzGiVokhOTn1JNEiP4Hyj',
        title: 'Cachoeira do Prumirim',
        category: 'Banho Doce',
        description:
          'Acesso super rápido a 3 minutos da Rodovia Rio-Santos (SP-055). Tobogã natural de pedra e piscinas naturais de água pura da serra.',
        hours: 'Trilha fácil de 5 minutos',
      },
    ],
    gastronomy: [
      {
        title: 'Quiosques Tradicionais',
        category: 'Pé na Areia',
        priceLevel: '$$',
        description:
          'Famoso Peixe na Telha com banana-da-terra, casquinha de siri fresca e lula à doré na Praia do Félix e Almada.',
        tip: 'Dica: Peça a porção de camarão sete-barbas caiçara.',
      },
      {
        title: 'Bistrôs do Itaguá',
        category: 'Alta Gastronomia',
        priceLevel: '$$$',
        description:
          'Restaurantes premiados na orla de Itaguá. Menu degustação com pescados nobres, polvo grelhado na brasa e cartas de vinhos.',
        tip: 'Recomendado reservar na alta temporada e feriados.',
      },
      {
        title: 'Rua Guarani & Orla',
        category: 'Bares & Luau',
        priceLevel: '$$',
        description:
          'O coração pulsante da vida noturna: chope artesanal local, drinks com cachaças de alambique do litoral e música ao vivo.',
        tip: 'Movimentado a partir das 19h30 até a madrugada.',
      },
      {
        title: 'Cafés & Açaí Artesanal',
        category: 'Veggie & Orgânico',
        priceLevel: '$$',
        description:
          'Açaí puro batido sem xarope colhido na mata, kombuchas artesanais, pães de fermentação lenta e pratos plant-based.',
        tip: 'Perfeito para o café da manhã pré-praia.',
      },
    ],
    lodging: [
      {
        title: 'Pousadas Charme & Românticas',
        category: 'Itaguá & Tenório',
        tags: ['Frente ao Mar', 'Casais', 'Chá da Tarde'],
        description:
          'Estruturas aconchegantes com piscina aquecida de borda infinita, vista direta para a baía de Ubatuba, serviço de chá da tarde caiçara e proximidade a pé dos melhores restaurantes.',
        priceEstimate: 'A partir de R$ 380/noite',
      },
      {
        title: 'Eco-Resorts em Meio à Mata',
        category: 'Extremo Norte',
        tags: ['Pet Friendly', 'Piscina Natural', 'Café Orgânico'],
        description:
          'Integração total com a floresta no Félix, Prumirim e Picinguaba. Café da manhã artesanal orgânico premiado, trilhas privativas para rios e praias desertas.',
        priceEstimate: 'A partir de R$ 520/noite',
      },
      {
        title: 'Casas & Flats de Temporada',
        category: 'Praia Grande & Toninhas',
        tags: ['Família Inteira', 'Churrasqueira', 'Garagem Privativa'],
        description:
          'Imóveis completos com churrasqueira, garagem para 2 ou mais carros e capacidade para 6 a 12 pessoas. A poucos metros da areia, ideal para grupos do ABC que dividem custos.',
        priceEstimate: 'A partir de R$ 450/diária total',
      },
    ],
    bestDepartureFriday:
      'Saia de Santo André até as 14h30 ou após as 20h30. Entre 17h e 19h30 há retenção na saída para Jacu-Pêssego e entroncamento do Rodoanel.',
    recommendedRoads:
      'Ayrton Senna (SP-070) ➔ Carvalho Pinto ➔ Nova Tamoios Duplicada (SP-099) ➔ Caraguatatuba ➔ Ubatuba (SP-055). Evite a descida pela serra de Bertioga.',
    recommendedRestStop:
      'Postos de conveniência no km 64 da Rod. Carvalho Pinto (São José dos Campos) oferecem abastecimento rápido e lanches antes da serra.',
  },
  {
    id: 'ilhabela',
    name: 'Ilhabela',
    state: 'SP',
    titleHero: 'Ilhabela — Arquipélago da Vela, Cachoeiras & Praias Selvagens',
    subtitleHero:
      'A maior ilha marítima do Brasil a poucas horas de Santo André. Águas calmas protegidas pelo canal, praias oceânicas e vida noturna sofisticada na Vila.',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6xz-rUV9iYf714CDN8JIMJohl9_rgHXzg5RIkKgmM4VgNOVJLrrENtuvi9GX0a-TDt8nQFdS6e_woWKrU79pdnY9VPwDmI59X0i2vU3-6TfPVpuurS8bZuJeNUOxcDODD6js2cowm49dQqMMvHgznZgnc6GZA2QyC4tpp3xQCrwM0wCCOjACBrZ4JsFL_qY5X7nG0mGCe2HFS-6MLwDZoowFOMWfhBwtlEEyEeD8Iz-d4GhsV85n6',
    regionBadge: 'Litoral Norte SP',
    cetesbScore: '100% Bandeira Verde CETESB',
    specialBadge: 'Capital Nacional da Vela',
    carTimeFromABC: '3h 25min',
    carDistanceKm: 205,
    bestRouteDescription:
      'Via Rodovia dos Tamoios (SP-099) até São Sebastião + Balsa para Ilhabela.',
    tollsCostOneWay: 'R$ 68,50 (com Balsa)',
    tollsCostRoundTrip: 'R$ 137,00',
    abcQuickExitTip: 'Agende Hora Marcada na Balsa pelo site da DERSA',
    trafficStatus: 'Fluindo Bem',
    busTime: '4h 00min',
    busCompany: 'Viação Pássaro Marron até São Sebastião',
    busSchedules: ['07:00', '12:30', '17:00'],
    busTicketPrice: 'R$ 78,50',
    tempC: 28,
    sensacaoC: 30,
    windSpeed: 'Vento 14 km/h E',
    uvIndex: 8,
    uvDescription: 'Alto',
    waterTempC: 25,
    beachCleanPercent: 100,
    weatherSummary:
      '🌤️ Sol e brisa constante com mar calmo no canal e águas mornas. Fila da balsa fluindo com tempo de espera reduzido.',
    radiusCategory: 'estendido',
    vibes: [
      'Sol Máximo Hoje',
      'Trilhas & Selvagens',
      'Gastronomia Pé na Areia',
      'Vida Noturna & Beach Club',
    ],
    mapCoordinates: { x: 735, y: 390 },
    beaches: [
      {
        id: 'feiticeira',
        name: 'Praia da Feiticeira',
        subLocation: 'Sul de Ilhabela',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        temp: '28°C • Mar Cristalino',
        weather: 'Águas Calmas',
        waterStatus: 'Própria para Banho',
        description:
          'Praia histórica com casarão colonial do século XIX. Mar verde e transparente, ideal para banho relaxante e stand-up paddle.',
        tags: ['Pé na Areia', 'Casarão Histórico', 'SUP & Caiaque', 'Mar Calmo'],
        distanceFromCenter: '5 km da Balsa',
        accessType: 'Rua calçada com estacionamento',
        waveType: 'Sem ondas',
        parkingCost: 'R$ 20 moradores locais',
      },
      {
        id: 'curral',
        name: 'Praia do Curral',
        subLocation: 'Sul de Ilhabela • Beach Clubs',
        image:
          'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
        temp: 'Sunset & Drinks',
        weather: 'Point dos Jovens',
        waterStatus: 'Própria para Banho',
        description:
          'A praia mais badalada da ilha, com lounge bars, duchas e música ao vivo. Excelente estrutura para passar o dia inteiro comendo bem.',
        tags: ['Beach Club', 'Música ao Vivo', 'Pôr do Sol Mágico', 'Estrutura Completa'],
        distanceFromCenter: '8 km da Balsa',
        accessType: 'Asfalto até a entrada',
        waveType: 'Ondulações fracas',
        parkingCost: 'R$ 30 bolsão fechado',
      },
      {
        id: 'castelhanos',
        name: 'Praia de Castelhanos',
        subLocation: 'Lado Oceânico Leste',
        image:
          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        temp: 'Aventura 4x4',
        weather: 'Oceânica Preservada',
        waterStatus: 'Própria para Banho',
        description:
          'Enseada em formato de coração acessada somente por veículos 4x4 ou barco. Mar aberto espetacular, rios de água doce e aldeia caiçara.',
        tags: ['Expedição 4x4', 'Formato de Coração', 'Mata Fechada', 'Selvagem'],
        distanceFromCenter: '22 km de trilha 4x4',
        accessType: 'Trilha do Parque Estadual 4x4',
        waveType: 'Ondas oceânicas fortes',
      },
    ],
    infrastructure: [
      {
        icon: 'directions_boat',
        title: 'Travessia de Balsa',
        description:
          'Balsas a cada 30 minutos 24 horas por dia. Sistema de câmeras monitora o tempo de espera em São Sebastião.',
        badge: 'Hora Marcada DERSA disponível',
      },
      {
        icon: 'local_hospital',
        title: 'Hospital Mário Covas',
        description:
          'Pronto atendimento central bem equipado para emergências e suporte a turistas no centro de Ilhabela.',
        badge: 'Atendimento 24h',
      },
    ],
    tours: [
      {
        image:
          'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
        title: 'Cachoeira do Gato & Paquetá',
        category: 'Banho Doce',
        description: 'Trilha em meio à mata fechada que leva a piscinas naturais com hidromassagem.',
        hours: 'Trilhas diárias das 08h às 17h',
      },
    ],
    gastronomy: [
      {
        title: 'Restaurantes da Vila',
        category: 'Culinária Caiçara & Mediterrânea',
        priceLevel: '$$$',
        description: 'Moquecas fumegantes, risoto de frutos do mar e mesinhas nas calçadas de pedra.',
        tip: 'Vila Histórica é o point noturno preferido.',
      },
    ],
    lodging: [
      {
        title: 'Pousadas Boutique no Canal',
        category: 'Charme & Vista Mar',
        tags: ['Piscina', 'Café da Manhã', 'Romântico'],
        description: 'Decks de madeira com vista para veleiros ancorados e café da manhã personalizado.',
        priceEstimate: 'A partir de R$ 420/noite',
      },
    ],
    bestDepartureFriday: 'Saia antes das 14h para garantir travessia sem fila na balsa de São Sebastião.',
    recommendedRoads: 'Rodovia dos Tamoios duplicada garante descida suave até Caraguatatuba e São Sebastião.',
    recommendedRestStop: 'Graal Tamoios no trecho de planalto.',
  },
  {
    id: 'santos',
    name: 'Santos / Ponta da Praia',
    state: 'SP',
    titleHero: 'Santos — O Maior Jardim de Orla do Mundo a 55 Minutos do ABC',
    subtitleHero:
      'O bate-volta perfeito saindo de Santo André. Descida direta pela Imigrantes ou Anchieta, quiosques modernos, cafés históricos e praias com calçadão impecável.',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBW53PjSZ8a-E5RlYbOiOEOe_Wb5w0Beye6qEL5rtE7WVSunvtSWYm0hZIBzFkXAoE63-iFw3DHIIzKZIIpexvBbScFMEjQdu_u1DESZ-TkC7RUYLzuFGZYthF4ffCa1dy-KlGDAAUNDrXWDDGy2TqF7WSzA2YlxW1_gSWKwD5wKHJ4h1vvnJLQkUjnR2iZKs51B7oo_rR1uqTJGl2maJiOCsy7fBnFLscAxG23qXXR18iihoQ1UEDX',
    regionBadge: 'Baixada Santista',
    cetesbScore: 'Boqueirão & Gonzaga Próprias',
    specialBadge: 'Bate-Volta Express • 55 Min',
    carTimeFromABC: '55min',
    carDistanceKm: 64,
    bestRouteDescription:
      'Via Rodovia dos Imigrantes (SP-160) ou Anchieta (SP-150) descendo direto pela Av. Lions.',
    tollsCostOneWay: 'R$ 36,80',
    tollsCostRoundTrip: 'R$ 36,80 (Cobrado só na descida)',
    abcQuickExitTip: 'Acesso direto via Av. Prestes Maia ou Av. Lions',
    trafficStatus: 'Fluindo Bem',
    busTime: '1h 15min',
    busCompany: 'Viação Cometa / Expressul (TERRESA)',
    busSchedules: ['A cada 20 min (06:00 às 22:30)'],
    busTicketPrice: 'R$ 34,90',
    tempC: 31,
    sensacaoC: 34,
    windSpeed: 'Vento 10 km/h S',
    uvIndex: 10,
    uvDescription: 'Extremo',
    waterTempC: 25,
    beachCleanPercent: 88,
    weatherSummary:
      '☀️ Sol aberto sem nuvens. Água calma e excelente para banho no Gonzaga e Boqueirão. Pista da Imigrantes 100% livre.',
    radiusCategory: 'curto',
    vibes: [
      'Sol Máximo Hoje',
      'Praias Estruturadas',
      'Família & Águas Calmas',
      'Gastronomia Pé na Areia',
    ],
    mapCoordinates: { x: 470, y: 470 },
    beaches: [
      {
        id: 'gonzaga',
        name: 'Praia do Gonzaga',
        subLocation: 'Coração Comercial & Turístico',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBW53PjSZ8a-E5RlYbOiOEOe_Wb5w0Beye6qEL5rtE7WVSunvtSWYm0hZIBzFkXAoE63-iFw3DHIIzKZIIpexvBbScFMEjQdu_u1DESZ-TkC7RUYLzuFGZYthF4ffCa1dy-KlGDAAUNDrXWDDGy2TqF7WSzA2YlxW1_gSWKwD5wKHJ4h1vvnJLQkUjnR2iZKs51B7oo_rR1uqTJGl2maJiOCsy7fBnFLscAxG23qXXR18iihoQ1UEDX',
        temp: '31°C • Sol Aberto',
        weather: 'Mar Calmo',
        waterStatus: 'Própria para Banho',
        description:
          'A praia mais emblemática de Santos. Areia ampla e firme para caminhadas, ciclovia conectada, quiosques com água de coco gelada e chopp artesanal, além de proximidade imediata dos melhores shoppings e restaurantes da cidade.',
        tags: ['Ciclovia', 'Quiosques Gourmet', 'Mar Calmo', 'Acessibilidade Total'],
        distanceFromCenter: 'Na área central',
        accessType: 'Avenida da praia duplicada',
        waveType: 'Ondas baixas calmas',
      },
      {
        id: 'ponta-praia',
        name: 'Ponta da Praia',
        subLocation: 'Canal de Entrada dos Navios',
        image:
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        temp: 'Mirante dos Navios',
        weather: 'Brisa Fresca',
        waterStatus: 'Própria para Banho',
        description:
          'Ponto espetacular para ver a passagem de transatlânticos e cargueiros. Mercado de Peixes modernizado e restaurantes com vista panorâmica.',
        tags: ['Mercado de Peixe', 'Passeio de Escuna', 'Mirante', 'Bate-e-Volta'],
        distanceFromCenter: 'Extremo Leste',
        accessType: 'Av. Bartolomeu de Gusmão',
        waveType: 'Águas calmas de baía',
      },
    ],
    infrastructure: [
      {
        icon: 'directions_bus',
        title: 'Ônibus Executivo TERRESA',
        description:
          'Partidas a cada 20 minutos direto da Rodoviária de Santo André. Desce pela Imigrantes com ar condicionado e Wi-Fi.',
        badge: 'R$ 34,90 por trecho',
      },
      {
        icon: 'local_hospital',
        title: 'Pronto Atendimento Gonzaga',
        description: 'Hospitais Santa Casa e Ana Costa a menos de 5 minutos da praia.',
        badge: 'Rede hospitalar de ponta',
      },
    ],
    tours: [
      {
        image:
          'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
        title: 'Museu do Café & Bonde Histórico',
        category: 'Patrimônio Histórico',
        description: 'Degustação dos melhores grãos de café do país e passeio pelos edifícios coloniais do Centro.',
        hours: 'Terça a Domingo até 17h',
      },
    ],
    gastronomy: [
      {
        title: 'Quiosques Gourmet & Chopp',
        category: 'Pé na Areia',
        priceLevel: '$$',
        description: 'Porções generosas de peixe fresco, pastéis crocantes de camarão e chopp artesanal trincando.',
        tip: 'Os novos quiosques têm mesas cobertas na calçada.',
      },
    ],
    lodging: [
      {
        title: 'Hotéis Frente ao Mar Gonzaga',
        category: 'Conforto & Praticidade',
        tags: ['Frente ao Mar', 'Piscina na Cobertura'],
        description: 'Hospedagem executiva e de lazer para quem decide estender o bate-volta.',
        priceEstimate: 'A partir de R$ 260/noite',
      },
    ],
    bestDepartureFriday: 'Saindo de Santo André por volta das 08h você chega em Santos antes das 09h da manhã.',
    recommendedRoads: 'Rodovia dos Imigrantes é mais rápida e ampla; Via Anchieta é a alternativa direta pelo ABC.',
    recommendedRestStop: 'Não necessita paradas intermediárias devido à curta distância de 64 km.',
  },
  {
    id: 'maresias',
    name: 'Maresias',
    state: 'SP',
    titleHero: 'Maresias — O Templo do Surf Mundial & Sunset Sofisticado',
    subtitleHero:
      'O point mais vibrante de São Sebastião. Ondas tubulares internacionalmente reconhecidas, beach clubs com DJs ao entardecer e gastronomia refinada.',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCe9W35z0TTHYOK6YCka9lJsIjR9K48KCNHkh5RsPTnT5QS31ha2RwlYkRtnq9zjLSMV54uNMD_iNvtAmoQ54PrdFaKb6ZJjV6rNnMguxWJQUyg9UkFELWQwHQPiJYvSQwYCmu11kc5Aizig_F87XHCVeoD9rACwj0gECb4raT4u8z5j71_zs3Hw9wdbPKUsCKiaxJO-UY_22bNC_wCoYPOFk81d8MN0z29H7tSh9HWdZSRmA6js8vX',
    regionBadge: 'Litoral Norte SP',
    cetesbScore: 'Própria para Banho',
    specialBadge: 'Berço de Campeões Mundiais',
    carTimeFromABC: '2h 40min',
    carDistanceKm: 165,
    bestRouteDescription:
      'Via Mogi-Bertioga (SP-098) ou Ayrton Senna + Tamoios (SP-099) até São Sebastião.',
    tollsCostOneWay: 'R$ 48,20',
    tollsCostRoundTrip: 'R$ 96,40',
    abcQuickExitTip: 'Acesse pela Av. dos Estados ➔ Jacu-Pêssego ➔ Ayrton Senna',
    trafficStatus: 'Normal',
    busTime: '3h 20min',
    busCompany: 'Viação Pássaro Marron',
    busSchedules: ['08:00', '14:00'],
    busTicketPrice: 'R$ 74,00',
    tempC: 27,
    sensacaoC: 28,
    windSpeed: 'Vento 15 km/h S',
    uvIndex: 8,
    uvDescription: 'Alto',
    waterTempC: 23,
    beachCleanPercent: 95,
    weatherSummary:
      '☀️ Céu limpo, sol forte e mar com excelentes condições de ondas para os praticantes de surfe.',
    radiusCategory: 'medio',
    vibes: [
      'Sol Máximo Hoje',
      'Vida Noturna & Beach Club',
      'Trilhas & Selvagens',
      'Gastronomia Pé na Areia',
    ],
    mapCoordinates: { x: 645, y: 385 },
    beaches: [
      {
        id: 'maresias-principal',
        name: 'Praia de Maresias',
        subLocation: 'São Sebastião • Entrada 8 a 15',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCe9W35z0TTHYOK6YCka9lJsIjR9K48KCNHkh5RsPTnT5QS31ha2RwlYkRtnq9zjLSMV54uNMD_iNvtAmoQ54PrdFaKb6ZJjV6rNnMguxWJQUyg9UkFELWQwHQPiJYvSQwYCmu11kc5Aizig_F87XHCVeoD9rACwj0gECb4raT4u8z5j71_zs3Hw9wdbPKUsCKiaxJO-UY_22bNC_wCoYPOFk81d8MN0z29H7tSh9HWdZSRmA6js8vX',
        temp: '27°C • Céu Limpo',
        weather: 'Ondas Perfeitas',
        waterStatus: 'Própria para Banho',
        description:
          'Areias alvas e fofas por quase 5 km. O canto do Moreira abriga as melhores formações de tubos do Brasil, enquanto o meio da praia conta com lounges descolados e serviço de praia requintado.',
        tags: ['Surf Mundial', 'Beach Club', 'Areia Branca', 'Canto do Moreira'],
        distanceFromCenter: '25 km de São Sebastião centro',
        accessType: 'Rodovia Rio-Santos',
        waveType: 'Ondas fortes tubulares',
      },
    ],
    infrastructure: [
      {
        icon: 'local_police',
        title: 'Segurança & GBMar',
        description: 'Posto de salvamento fixo com guarda-vidas ativos o dia todo devido às correntes marinhas.',
        badge: 'Atenção aos repuxos',
      },
    ],
    tours: [
      {
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        title: 'Trilha dos Mirantes Maresias-Paúba',
        category: 'Trilha Panorâmica',
        description: 'Caminhada de 30 minutos com visual de tirar o fôlego das duas baías e pôr do sol inesquecível.',
        hours: 'Trilha livre e sinalizada',
      },
    ],
    gastronomy: [
      {
        title: 'Lounges & Beach Clubs',
        category: 'Drinks & Sunset',
        priceLevel: '$$$',
        description: 'Gastronomia fusion asiática, ceviches frescos e coquetelaria autoral com DJ ao entardecer.',
        tip: 'Chegue às 16h para pegar lugar nos bangalôs.',
      },
    ],
    lodging: [
      {
        title: 'Pousadas de Design & Surf',
        category: 'Estilo & Piscina',
        tags: ['Piscina Climatizada', 'Próximo à Praia'],
        description: 'Pousadas charmosas com decoração caiçara contemporânea e empréstimo de bicicletas.',
        priceEstimate: 'A partir de R$ 350/noite',
      },
    ],
    bestDepartureFriday: 'Sexta-feira após 20h para evitar a retenção no planalto da Mogi-Bertioga.',
    recommendedRoads: 'Rodovia dos Tamoios é mais longa mas tem menor probabilidade de neblina e engarrafamento.',
    recommendedRestStop: 'Posto no início da serra em Mogi das Cruzes.',
  },
  {
    id: 'paraty',
    name: 'Paraty - RJ',
    state: 'RJ',
    titleHero: 'Paraty — Patrimônio da Humanidade, Charme Colonial & Ilhas Tropicais',
    subtitleHero:
      'A viagem mágica pela Costa Verde partindo de Santo André. Ruas de pedra pé-de-moleque, alambiques de cachaça premiada e escunas navegando em águas calmas esmeralda.',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAg7V6GWX5irxrbwyryRJ8KXMwjBhG3-dFvTFw2LxNjRQ9YAPorBMQXm1Ae10qlXl7KI_C_ezxxOnRg6_dzT8S2LOwSR8ps-NzcF8cQrIJakXpQ6usFndpPZVBVC0DA_KBmKaSti3WOeqoUVSkYb7wGKjG5HUpV8ocoSGDRv0w4cHaXoZreo5UZbcGcd_HW8eY3fbKejjLLaMQkyvYP4S_AwcogBrTGD7U2Rr250SZPajgix1M0lqio',
    regionBadge: 'Costa Verde Fluminense',
    cetesbScore: 'Águas Protegidas da Baía',
    specialBadge: 'Patrimônio Mundial UNESCO',
    carTimeFromABC: '4h 30min',
    carDistanceKm: 275,
    bestRouteDescription:
      'Via Ayrton Senna/Carvalho Pinto (SP-070) ➔ Tamoios ➔ Rio-Santos (BR-101) cruzando Ubatuba até Paraty.',
    tollsCostOneWay: 'R$ 64,80',
    tollsCostRoundTrip: 'R$ 129,60',
    abcQuickExitTip: 'Acesse pela Rodovia Carvalho Pinto com parada em Taubaté',
    trafficStatus: 'Normal',
    busTime: '5h 40min',
    busCompany: 'Viação Reunidas Paulista',
    busSchedules: ['07:30', '13:00'],
    busTicketPrice: 'R$ 115,00',
    tempC: 28,
    sensacaoC: 29,
    windSpeed: 'Vento 8 km/h SE',
    uvIndex: 7,
    uvDescription: 'Moderado',
    waterTempC: 24,
    beachCleanPercent: 96,
    weatherSummary:
      '☀️ Céu claro e sol ameno entre as montanhas da Serra da Bocaina e o mar protegido da baía de Paraty.',
    radiusCategory: 'estendido',
    vibes: [
      'Sol Máximo Hoje',
      'Trilhas & Selvagens',
      'Gastronomia Pé na Areia',
      'Família & Águas Calmas',
    ],
    mapCoordinates: { x: 895, y: 220 },
    beaches: [
      {
        id: 'trindade',
        name: 'Vila e Praias de Trindade',
        subLocation: 'Extremo Sul de Paraty • Parque Nacional',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        temp: '28°C • Céu Azul',
        weather: 'Praias Selvagens',
        waterStatus: 'Própria para Banho',
        description:
          'Vila caiçara rústica com praias de areia branca: Praia do Meio, Cachadaço e a famosa piscina natural do Cachadaço protegida por pedras colossais.',
        tags: ['Piscina do Cachadaço', 'Vila Hippie', 'Trilha Leve', 'Surf'],
        distanceFromCenter: '24 km do Centro Histórico',
        accessType: 'Estrada asfaltada com subida de serra',
        waveType: 'Piscina natural e ondas no Cepilho',
      },
    ],
    infrastructure: [
      {
        icon: 'museum',
        title: 'Centro Histórico Fechado para Carros',
        description: 'Tráfego exclusivo para pedestres preserva as construções dos séculos XVII e XVIII.',
        badge: 'Estacionamento na periferia',
      },
    ],
    tours: [
      {
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAg7V6GWX5irxrbwyryRJ8KXMwjBhG3-dFvTFw2LxNjRQ9YAPorBMQXm1Ae10qlXl7KI_C_ezxxOnRg6_dzT8S2LOwSR8ps-NzcF8cQrIJakXpQ6usFndpPZVBVC0DA_KBmKaSti3WOeqoUVSkYb7wGKjG5HUpV8ocoSGDRv0w4cHaXoZreo5UZbcGcd_HW8eY3fbKejjLLaMQkyvYP4S_AwcogBrTGD7U2Rr250SZPajgix1M0lqio',
        title: 'Passeio de Escuna pelas Ilhas',
        category: 'Passeio Náutico',
        description: 'Paradas na Ilha Comprida, Praia da Lula e Lagoa Azul com almoço servido a bordo.',
        hours: 'Saídas diárias às 10h e 11h',
      },
    ],
    gastronomy: [
      {
        title: 'Gastronomia Literária & Caiçara',
        category: 'Alta Gastronomia Histórica',
        priceLevel: '$$$',
        description: 'Cozinha autoral valorizando peixes locais, gengibre, banana-da-terra e cachaça de alambique.',
        tip: 'Jantar à luz de velas nas calçadas coloniais.',
      },
    ],
    lodging: [
      {
        title: 'Pousadas Coloniais do Centro',
        category: 'Charme & História',
        tags: ['Arquitetura Colonial', 'Pátio Interno'],
        description: 'Casarões restaurados com jardins tropicais secretos e atendimento acolhedor.',
        priceEstimate: 'A partir de R$ 410/noite',
      },
    ],
    bestDepartureFriday: 'Saia bem cedo na sexta-feira (antes das 06h) para desfrutar da orla da Rio-Santos sem pressa.',
    recommendedRoads: 'Rodovia Carvalho Pinto seguida pela Tamoios duplicada e trecho cênico da Rio-Santos.',
    recommendedRestStop: 'Parada em São José dos Campos ou Caraguatatuba.',
  },
  {
    id: 'guaruja',
    name: 'Guarujá',
    state: 'SP',
    titleHero: 'Guarujá — A Pérola do Atlântico & Praias de Bandeira Azul',
    subtitleHero:
      'A apenas 1h10 de Santo André. Praias premiadas internacionalmente pela pureza da água, falésias exuberantes e estrutura urbana de alto padrão.',
    coverImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    regionBadge: 'Baixada Santista',
    cetesbScore: 'Bandeira Azul no Tombo',
    specialBadge: 'Mais Perto do ABC • 1h 10m',
    carTimeFromABC: '1h 10min',
    carDistanceKm: 82,
    bestRouteDescription:
      'Via Rodovia dos Imigrantes (SP-160) ➔ Rodovia Cônego Domenico Rangoni (Piaçaguera).',
    tollsCostOneWay: 'R$ 36,80',
    tollsCostRoundTrip: 'R$ 36,80',
    abcQuickExitTip: 'Acesso rápido pela Imigrantes sem precisar pegar balsa',
    trafficStatus: 'Fluindo Bem',
    busTime: '1h 35min',
    busCompany: 'Viação Translitoral (TERRESA)',
    busSchedules: ['06:40', '09:20', '14:30', '18:00'],
    busTicketPrice: 'R$ 38,50',
    tempC: 30,
    sensacaoC: 32,
    windSpeed: 'Vento 11 km/h SE',
    uvIndex: 9,
    uvDescription: 'Muito Alto',
    waterTempC: 24,
    beachCleanPercent: 90,
    weatherSummary:
      '☀️ Sol radiante e águas cristalinas na Praia do Tombo e Enseada. Acesso livre sem retenção na serra.',
    radiusCategory: 'curto',
    vibes: [
      'Sol Máximo Hoje',
      'Praias Estruturadas',
      'Gastronomia Pé na Areia',
      'Família & Águas Calmas',
    ],
    mapCoordinates: { x: 535, y: 470 },
    beaches: [
      {
        id: 'tombo',
        name: 'Praia do Tombo',
        subLocation: 'Guarujá • Selo Bandeira Azul',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        temp: '30°C • Bandeira Azul',
        weather: 'Surf & Pureza',
        waterStatus: 'Própria para Banho',
        description:
          'Única praia do estado de São Paulo com certificação ambiental internacional ininterrupta. Areias impecavelmente limpas e ondas de classe mundial.',
        tags: ['Selo Bandeira Azul', 'Surf', 'Água Cristalina', 'Estrutura Completa'],
        distanceFromCenter: '3 km de Pitangueiras',
        accessType: 'Asfalto fácil com bolsão',
        waveType: 'Ondas fortes de tombo',
      },
      {
        id: 'enseada',
        name: 'Praia da Enseada',
        subLocation: 'Maior Orla do Guarujá',
        image:
          'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
        temp: 'Família & Esportes',
        weather: 'Sol Pleno',
        waterStatus: 'Própria para Banho',
        description:
          'Quase 6 km de faixa de areia, quiosques modernos com música ao vivo, aluguel de jet-ski e águas calmas para crianças.',
        tags: ['Jet Ski', 'Águas Calmas', 'Família', 'Quiosques Modernos'],
        distanceFromCenter: 'Região Central',
        accessType: 'Avenida da praia ampla',
        waveType: 'Ondulação suave',
      },
    ],
    infrastructure: [
      {
        icon: 'verified',
        title: 'Certificação Bandeira Azul',
        description: 'Critérios rigorosos de segurança, qualidade da água e sustentabilidade fiscalizados mensalmente.',
        badge: 'Garantia ecológica',
      },
    ],
    tours: [
      {
        image:
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        title: 'Mirante da Campina (Morro do Maluf)',
        category: 'Mirante & Rapel',
        description: 'Vista espetacular da enseada toda e salto de parapente.',
        hours: 'Acesso livre 24h',
      },
    ],
    gastronomy: [
      {
        title: 'Restaurantes dos Pescadores',
        category: 'Frutos do Mar Frescos',
        priceLevel: '$$',
        description: 'Camarões rosa grelhados, caldeiradas caiçaras e mariscos colhidos na hora.',
        tip: 'Ótimos preços no final da Enseada (Canto do Tortuga).',
      },
    ],
    lodging: [
      {
        title: 'Resorts & Hotéis Frente ao Mar',
        category: 'Conforto Familiar',
        tags: ['Piscina', 'Recreação Infantil'],
        description: 'Hotéis tradicionais com café da manhã farto e serviço de praia com toalhas e cadeiras.',
        priceEstimate: 'A partir de R$ 320/noite',
      },
    ],
    bestDepartureFriday: 'Descida tranquila até as 16h ou após as 20h30.',
    recommendedRoads: 'Rodovia dos Imigrantes conectada à Piaçaguera.',
    recommendedRestStop: 'Trajeto rápido, sem necessidade de paradas longas.',
  },
  {
    id: 'porto-de-galinhas',
    name: 'Porto de Galinhas - PE',
    state: 'PE',
    titleHero: 'Porto de Galinhas — Piscinas Naturais Tropicais & Jangadas Coloridas',
    subtitleHero:
      'A rota ensolarada rápida pelo ar: apenas 35 minutos de carro de Santo André até o Aeroporto de Congonhas (CGH) + voo direto para o paraíso nordestino.',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDv12qo4rNQMJBu8O0zH20GruW2pUk-SKCGhUzW1D3MGImi_-nvI5mFQKNXRFzgJJkDJXpKfTIFYSW9HPWd7-YyNQ_IvOH5lmBI6RtH0HC_9Y72XF2Ww6FxbxGrrbmEpd8HaJZT69a2oxZTnJRuNs_XRw5qBtOEdIzTN6vo7g1NXwTmVTbxgjnnZ51oC1qkg3XFciPFaGypvuEBpYvxDatmbgP_56FOGGy2Ak5iEM2O5Ho9kJs_rkIO',
    regionBadge: 'Nordeste • Pernambuco',
    cetesbScore: 'Piscinas de Corais Naturais',
    specialBadge: 'Voo + Carro • Água 28°C',
    carTimeFromABC: '3h Voo + 50min Carro',
    carDistanceKm: 2350,
    bestRouteDescription:
      'Av. dos Estados/Bandeirantes (35 min até Congonhas CGH) ➔ Voo para Recife (REC) ➔ Rota Expressa do Atlântico.',
    tollsCostOneWay: 'R$ 12,50 (Pedágio PE-009)',
    tollsCostRoundTrip: 'R$ 25,00',
    abcQuickExitTip: 'Acesso super veloz via Av. dos Estados até Congonhas',
    trafficStatus: 'Fluindo Bem',
    busTime: 'Transfer REC',
    busCompany: 'Transfers diários aeroporto REC',
    busSchedules: ['Regular 24h'],
    busTicketPrice: 'R$ 60,00',
    tempC: 32,
    sensacaoC: 35,
    windSpeed: 'Vento 18 km/h E',
    uvIndex: 11,
    uvDescription: 'Extremo',
    waterTempC: 28,
    beachCleanPercent: 99,
    weatherSummary:
      '☀️ Sol radiante e maré baixa perfeita pela manhã para caminhar sobre os arrecifes de corais cristalinos.',
    radiusCategory: 'voo',
    vibes: [
      'Sol Máximo Hoje',
      'Família & Águas Calmas',
      'Gastronomia Pé na Areia',
      'Praias Estruturadas',
    ],
    mapCoordinates: { x: 920, y: 140 },
    beaches: [
      {
        id: 'piscinas-porto',
        name: 'Piscinas Naturais da Vila',
        subLocation: 'Centro de Porto de Galinhas',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDv12qo4rNQMJBu8O0zH20GruW2pUk-SKCGhUzW1D3MGImi_-nvI5mFQKNXRFzgJJkDJXpKfTIFYSW9HPWd7-YyNQ_IvOH5lmBI6RtH0HC_9Y72XF2Ww6FxbxGrrbmEpd8HaJZT69a2oxZTnJRuNs_XRw5qBtOEdIzTN6vo7g1NXwTmVTbxgjnnZ51oC1qkg3XFciPFaGypvuEBpYvxDatmbgP_56FOGGy2Ak5iEM2O5Ho9kJs_rkIO',
        temp: '32°C • Maré Baixa 0.2m',
        weather: 'Aquário Natural',
        waterStatus: 'Própria para Banho',
        description:
          'Jangadas tradicionais levam até os bancos de corais repletos de peixinhos coloridos que nadam ao redor dos visitantes em águas quentes de 28°C.',
        tags: ['Passeio de Jangada', 'Peixes Coloridos', 'Água Quente', 'Arrecifes'],
        distanceFromCenter: 'Na praia central da Vila',
        accessType: 'Embarque na areia da praia',
        waveType: 'Piscina sem nenhuma onda',
      },
      {
        id: 'muro-alto',
        name: 'Praia de Muro Alto',
        subLocation: 'Litoral Norte de Ipojuca',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        temp: 'Resorts & Lagoa',
        weather: 'Água Morna',
        waterStatus: 'Própria para Banho',
        description:
          'Um paredão de corais de 3 km cria a maior piscina calma e morna do litoral brasileiro. Ideal para caiaque, stand-up paddle e crianças pequenas.',
        tags: ['Muro de Corais', 'Zero Ondas', 'Mega Resorts', 'Caiaque'],
        distanceFromCenter: '8 km da Vila',
        accessType: 'Via pavimentada e acessos aos resorts',
        waveType: 'Totalmente espelhada e calma',
      },
    ],
    infrastructure: [
      {
        icon: 'flight',
        title: 'Conexão Congonhas (CGH)',
        description: 'Vôos diários diretos São Paulo (CGH) ➔ Recife (REC) em 3 horas.',
        badge: '35 min de Sto André até o aeroporto',
      },
    ],
    tours: [
      {
        image:
          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        title: 'Passeio de Buggy Ponta a Ponta',
        category: 'Aventura & Coqueirais',
        description: 'Visita às praias de Muro Alto, Cupe, Maracaípe e o Pontal com cavalos-marinhos.',
        hours: 'Duração de 4 a 6 horas',
      },
    ],
    gastronomy: [
      {
        title: 'Tapiocarias & Frutos do Mar',
        category: 'Culinária Nordestina',
        priceLevel: '$$',
        description: 'Lagosta na manteiga de garrafa, caldinho de sururu e tapiocas recheadas na hora.',
        tip: 'Jantar na charmosa rua das Sombrinhas na Vila.',
      },
    ],
    lodging: [
      {
        title: 'Resorts All Inclusive & Pousadas Pé na Areia',
        category: 'Estrutura Completa',
        tags: ['Piscinas Gigantes', 'All-Inclusive', 'Frente ao Mar'],
        description: 'Estrutura de luxo em Muro Alto ou pousadas charmosas no coração da vila.',
        priceEstimate: 'A partir de R$ 480/noite',
      },
    ],
    bestDepartureFriday: 'Voo matutino das 07h em Congonhas permite almoçar com pé na areia às 12h em Porto de Galinhas.',
    recommendedRoads: 'Rodovia expressa pedagiada PE-009 direto do aeroporto de Recife.',
    recommendedRestStop: 'Parada expressa no Mirante do Cabo de Santo Agostinho.',
  },
];
