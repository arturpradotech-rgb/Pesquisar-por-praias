export interface Neighborhood {
  id: string;
  name: string;
  fullName: string;
  highwayAccess: string;
  deltaMinutes: number; // Adjustment relative to Bairro Jardim base
}

export const SANTO_ANDRE_NEIGHBORHOODS: Neighborhood[] = [
  {
    id: 'jardim',
    name: 'Bairro Jardim',
    fullName: 'Santo André - Bairro Jardim / Dom Pedro II',
    highwayAccess: 'Av. Prestes Maia ➔ Anchieta / Imigrantes ou Jacu-Pêssego',
    deltaMinutes: 0,
  },
  {
    id: 'campestre',
    name: 'Campestre',
    fullName: 'Santo André - Campestre / Santa Maria',
    highwayAccess: 'Divisa SCS ➔ Av. Lions ➔ Imigrantes',
    deltaMinutes: 3,
  },
  {
    id: 'centro',
    name: 'Centro / TERRESA',
    fullName: 'Santo André - Centro / Terminal Pref. Saladino (TERRESA)',
    highwayAccess: 'Av. dos Estados ➔ Jacu-Pêssego ou Av. Prestes Maia',
    deltaMinutes: 2,
  },
  {
    id: 'nacoes',
    name: 'Parque das Nações',
    fullName: 'Santo André - Parque das Nações / Celso Daniel',
    highwayAccess: 'Av. dos Estados ➔ Rodoanel Leste ou Ayrton Senna',
    deltaMinutes: 5,
  },
  {
    id: 'assis',
    name: 'Vila Assis / Valparaíso',
    fullName: 'Santo André - Vila Assis / Valparaíso',
    highwayAccess: 'Av. Portugal ➔ Av. Pereira Barreto ➔ Anchieta',
    deltaMinutes: -2,
  },
];

export interface HighwayStatus {
  code: string;
  name: string;
  status: 'Livre' | 'Normal' | 'Tráfego Intenso' | 'Operação 7x3' | 'Expressa';
  descidaTime: string;
  details: string;
  serraNeblina: 'Ausente' | 'Leve' | 'Intensa';
  trafficType: string;
  tagColor: string;
}

export const HIGHWAYS_STATUS: HighwayStatus[] = [
  {
    code: 'SP-160',
    name: 'Sistema Anchieta-Imigrantes (SAI)',
    status: 'Livre',
    descidaTime: '52 min até Santos',
    details: 'Operação 7x3 ativa no SAI. Sem retenções na descida da serra.',
    serraNeblina: 'Ausente',
    trafficType: 'Descida fluida',
    tagColor: 'tertiary',
  },
  {
    code: 'SP-099',
    name: 'Rodovia dos Tamoios',
    status: 'Normal',
    descidaTime: '2h 15min até Caraguá',
    details: 'Novos Túneis da Serra livres e pista duplicada 100% operante.',
    serraNeblina: 'Ausente',
    trafficType: 'Pista Dupla Livre',
    tagColor: 'primary',
  },
  {
    code: 'SP-070',
    name: 'Ayrton Senna / Carvalho Pinto',
    status: 'Expressa',
    descidaTime: 'Litoral Norte & Rio • Livre',
    details: 'Saída Jacu-Pêssego fluindo bem a partir do ABC.',
    serraNeblina: 'Ausente',
    trafficType: 'Expressa',
    tagColor: 'secondary',
  },
];

export interface TerresaDeparture {
  destination: string;
  company: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
  platform: string;
  availableSeats: number;
  highlight?: boolean;
}

export const TERRESA_DEPARTURES: TerresaDeparture[] = [
  {
    destination: 'Santos (Via Imigrantes)',
    company: 'Viação Cometa',
    departureTime: '07:15',
    arrivalTime: '08:35',
    price: 'R$ 38,50',
    platform: 'Plataforma 04',
    availableSeats: 14,
    highlight: true,
  },
  {
    destination: 'Santos (Via Imigrantes)',
    company: 'Viação Cometa',
    departureTime: '08:45',
    arrivalTime: '10:05',
    price: 'R$ 38,50',
    platform: 'Plataforma 04',
    availableSeats: 4,
  },
  {
    destination: 'São Sebastião / Ilhabela',
    company: 'Viação Pássaro Marron',
    departureTime: '09:15',
    arrivalTime: '12:35',
    price: 'R$ 78,50',
    platform: 'Plataforma 06',
    availableSeats: 9,
    highlight: true,
  },
  {
    destination: 'Ubatuba Direto',
    company: 'Viação Pássaro Marron',
    departureTime: '10:00',
    arrivalTime: '14:15',
    price: 'R$ 89,00',
    platform: 'Plataforma 08',
    availableSeats: 18,
    highlight: true,
  },
  {
    destination: 'Guarujá (Pitangueiras)',
    company: 'Viação Translitoral',
    departureTime: '08:30',
    arrivalTime: '10:05',
    price: 'R$ 38,50',
    platform: 'Plataforma 05',
    availableSeats: 12,
  },
];
