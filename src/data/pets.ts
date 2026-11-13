export interface Pet {
  id: string;
  name: string;
  species: 'Cão' | 'Gato';
  breed: string;
  gender: 'Macho' | 'Fêmea';
  ageYears: number;
  ageLabel: string;
  ageCategory: 'filhote' | 'jovem' | 'adulto' | 'idoso';
  size: 'Pequeno' | 'Médio' | 'Grande';
  weight: string;
  color: string;
  coatType: string;
  images: string[];
  story: string;
  personalityTraits: string[];
  health: {
    vaccinated: boolean;
    neutered: boolean;
    dewormed: boolean;
    microchipped: boolean;
    specialCare?: string;
  };
  temperamentMetrics: {
    energy: number; // 1-5
    affection: number; // 1-5
    sociableWithKids: number; // 1-5
    sociableWithPets: number; // 1-5
    independence: number; // 1-5
  };
  goodForApartment: boolean;
  location: string;
  urgencyBadge?: string;
  status: 'available' | 'in_process' | 'adopted';
  rescueDate: string;
}

export const PETS_DATA: Pet[] = [
  {
    id: 'pet-1',
    name: 'Pipoca',
    species: 'Cão',
    breed: 'SRD (Vira-lata Caramelo)',
    gender: 'Fêmea',
    ageYears: 1.5,
    ageLabel: '1 ano e 6 meses (Jovem)',
    ageCategory: 'jovem',
    size: 'Médio',
    weight: '13 kg',
    color: 'Caramelo Dourado',
    coatType: 'Pelo curto e brilhante',
    images: [
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1000&q=80'
    ],
    story: 'Pipoca foi resgatada em um dia chuvoso perto de uma padaria. Muito simpática e dengosa, ganhou esse nome porque pula feito pipoca quando vê alguém que ama! Ela aprende comandos rápido e adora brincadeiras com bolinhas.',
    personalityTraits: ['Extremamente Dócil', 'Brincalhona', 'Sociável', 'Curiosa', 'Adora Crianças'],
    health: {
      vaccinated: true,
      neutered: true,
      dewormed: true,
      microchipped: true,
      specialCare: 'Nenhum. Saúde perfeita e energia nota 10!'
    },
    temperamentMetrics: {
      energy: 4,
      affection: 5,
      sociableWithKids: 5,
      sociableWithPets: 5,
      independence: 3
    },
    goodForApartment: true,
    location: 'São Paulo - SP (Zona Sul)',
    urgencyBadge: 'Pronta para Adoção',
    status: 'available',
    rescueDate: '15/08/2026'
  },
  {
    id: 'pet-2',
    name: 'Thor',
    species: 'Cão',
    breed: 'Mestiço de Pastor / SRD',
    gender: 'Macho',
    ageYears: 3,
    ageLabel: '3 anos (Adulto)',
    ageCategory: 'adulto',
    size: 'Grande',
    weight: '26 kg',
    color: 'Preto com Peitoral Branco',
    coatType: 'Pelo médio denso',
    images: [
      'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1000&q=80'
    ],
    story: 'Apesar do porte imponente e nome de deus do trovão, Thor é uma manteiga derretida! Ama se apoiar nas pernas dos voluntários para ganhar cafuné na orelha. Anda muito bem na guia e é super calmo dentro de casa.',
    personalityTraits: ['Calmo', 'Leal', 'Companheiro', 'Protetor Carinhoso', 'Silencioso'],
    health: {
      vaccinated: true,
      neutered: true,
      dewormed: true,
      microchipped: true,
      specialCare: 'Requer passeios diários para manter o tônus muscular.'
    },
    temperamentMetrics: {
      energy: 3,
      affection: 5,
      sociableWithKids: 4,
      sociableWithPets: 4,
      independence: 4
    },
    goodForApartment: false,
    location: 'Campinas - SP',
    urgencyBadge: 'Coração de Ouro',
    status: 'available',
    rescueDate: '10/06/2026'
  },
  {
    id: 'pet-3',
    name: 'Luna',
    species: 'Gato',
    breed: 'Siamês Mestiço',
    gender: 'Fêmea',
    ageYears: 0.8,
    ageLabel: '8 meses (Filhote)',
    ageCategory: 'filhote',
    size: 'Pequeno',
    weight: '3.1 kg',
    color: 'Bege com Pontas Chocolate',
    coatType: 'Pelo curto sedoso e olhos azuis cristalinos',
    images: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1000&q=80'
    ],
    story: 'Luna nasceu com seus irmãos em um galpão seguro após a mãe ser resgatada pela OngPets. Cresceu em lar temporário cercada de estímulos e carinho. É tagarela como uma autêntica siamesa e adora dormir no travesseiro.',
    personalityTraits: ['Carinhosa', 'Vocal', 'Ronrona Bastante', 'Brincalhona', 'Carente de Amor'],
    health: {
      vaccinated: true,
      neutered: true,
      dewormed: true,
      microchipped: true,
      specialCare: 'Testada negativa para FIV e FeLV.'
    },
    temperamentMetrics: {
      energy: 4,
      affection: 5,
      sociableWithKids: 5,
      sociableWithPets: 4,
      independence: 2
    },
    goodForApartment: true,
    location: 'São Paulo - SP (Zona Oeste)',
    urgencyBadge: 'Filhote Resgatado',
    status: 'available',
    rescueDate: '20/09/2026'
  },
  {
    id: 'pet-4',
    name: 'Oliver',
    species: 'Gato',
    breed: 'Europeu Comum (Frajola)',
    gender: 'Macho',
    ageYears: 2,
    ageLabel: '2 anos (Adulto)',
    ageCategory: 'adulto',
    size: 'Médio',
    weight: '4.8 kg',
    color: 'Preto e Branco Elegante',
    coatType: 'Pelo denso macio com "smoking"',
    images: [
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1000&q=80'
    ],
    story: 'Oliver é um verdadeiro cavalheiro com sua roupinha de frajola! Ele adora observar o movimento pela janela (em apartamento com tela) e é super tranquilo para quem trabalha de home office, ficando sempre por perto na mesa.',
    personalityTraits: ['Sereno', 'Observador', 'Independente', 'Acolhedor', 'Ronronador'],
    health: {
      vaccinated: true,
      neutered: true,
      dewormed: true,
      microchipped: true,
      specialCare: 'FIV/FeLV Negativo. Vacina V5 em dia.'
    },
    temperamentMetrics: {
      energy: 2,
      affection: 4,
      sociableWithKids: 4,
      sociableWithPets: 4,
      independence: 5
    },
    goodForApartment: true,
    location: 'Santo André - SP',
    urgencyBadge: 'Ideal para Home Office',
    status: 'available',
    rescueDate: '02/07/2026'
  },
  {
    id: 'pet-5',
    name: 'Amendoim',
    species: 'Cão',
    breed: 'Mestiço de Dachshund (Salsicha)',
    gender: 'Macho',
    ageYears: 1,
    ageLabel: '1 ano (Jovem)',
    ageCategory: 'jovem',
    size: 'Pequeno',
    weight: '6.5 kg',
    color: 'Caramelo com Focinho Preto',
    coatType: 'Pelo curto liso',
    images: [
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=80'
    ],
    story: 'Amendoim é puro carisma em quatro patas curtinhas! Cheio de energia para passeios, adora enterrar seus brinquedos nas cobertas. Adapta-se muito bem a espaços menores e se dá bem com todo mundo que chega.',
    personalityTraits: ['Alegre', 'Curioso', 'Divertido', 'Esperto', 'Sociável'],
    health: {
      vaccinated: true,
      neutered: true,
      dewormed: true,
      microchipped: true,
      specialCare: 'Cuidados posturais comuns a cães compridinhos (evitar saltos altos de sofás).'
    },
    temperamentMetrics: {
      energy: 4,
      affection: 5,
      sociableWithKids: 5,
      sociableWithPets: 4,
      independence: 3
    },
    goodForApartment: true,
    location: 'São Paulo - SP (Centro)',
    urgencyBadge: 'Porte Pequeno',
    status: 'available',
    rescueDate: '12/08/2026'
  },
  {
    id: 'pet-6',
    name: 'Barthô',
    species: 'Cão',
    breed: 'SRD Peludinho',
    gender: 'Macho',
    ageYears: 8,
    ageLabel: '8 anos (Idoso Sênior)',
    ageCategory: 'idoso',
    size: 'Médio',
    weight: '16 kg',
    color: 'Branco e Cinza Mesclado',
    coatType: 'Pelo semilongo fofinho',
    images: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=1000&q=80'
    ],
    story: 'Barthô é um sábio e carinhoso senhorzinho que perdeu seu tutor idoso. Ele busca um cantinho aconchegante para deitar ao sol e receber carinho no pescoço. Não late à toa, já é educado para fazer as necessidades fora e é pura gratidão.',
    personalityTraits: ['Muito Tranquilo', 'Grato', 'Educado', 'Adora Sonecas', 'Super Dócil'],
    health: {
      vaccinated: true,
      neutered: true,
      dewormed: true,
      microchipped: true,
      specialCare: 'Checkup sênior recente 100% aprovado. Toma apenas suplemento articular preventivo.'
    },
    temperamentMetrics: {
      energy: 1,
      affection: 5,
      sociableWithKids: 4,
      sociableWithPets: 5,
      independence: 5
    },
    goodForApartment: true,
    location: 'São Paulo - SP (Zona Leste)',
    urgencyBadge: 'Adoção Especial Sênior',
    status: 'available',
    rescueDate: '01/05/2026'
  },
  {
    id: 'pet-7',
    name: 'Malu',
    species: 'Gato',
    breed: 'Gata Calico / Tricolor',
    gender: 'Fêmea',
    ageYears: 1.2,
    ageLabel: '1 ano e 2 meses (Jovem)',
    ageCategory: 'jovem',
    size: 'Pequeno',
    weight: '3.4 kg',
    color: 'Tricolor (Branco, Laranja e Preto)',
    coatType: 'Pelo macio e sedoso',
    images: [
      'https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1000&q=80'
    ],
    story: 'Malu foi resgatada de uma área de risco e hoje é puro amor! As gatas tricolores trazem sorte e Malu traz alegria dobrada: adora perseguir cordinhas, ama petiscos de sachê e faz "massinha de pão" na barriga dos humanos.',
    personalityTraits: ['Amorosa', 'Dorminhoca', 'Ronrona Alto', 'Sociável', 'Gentil'],
    health: {
      vaccinated: true,
      neutered: true,
      dewormed: true,
      microchipped: true,
      specialCare: 'FIV/FeLV Negativo.'
    },
    temperamentMetrics: {
      energy: 3,
      affection: 5,
      sociableWithKids: 5,
      sociableWithPets: 4,
      independence: 3
    },
    goodForApartment: true,
    location: 'Guarulhos - SP',
    urgencyBadge: 'Pronta para Adoção',
    status: 'available',
    rescueDate: '18/07/2026'
  },
  {
    id: 'pet-8',
    name: 'Simba',
    species: 'Gato',
    breed: 'Tabby Laranja Rajado',
    gender: 'Macho',
    ageYears: 0.5,
    ageLabel: '6 meses (Filhote)',
    ageCategory: 'filhote',
    size: 'Pequeno',
    weight: '2.8 kg',
    color: 'Laranja Rajado Dourado',
    coatType: 'Pelo aveludado listrado',
    images: [
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513360309081-36f20ca4e8dd?auto=format&fit=crop&w=1000&q=80'
    ],
    story: 'Simba é aquele gatinho ruivo travesso e fofo que parece ter uma única célula cerebral compartilhada com todos os laranjas do mundo: corre, pula, tropeça e depois pede colinho com a carinha mais meiga do mundo.',
    personalityTraits: ['Extremamente Ativo', 'Cômico', 'Brincalhão', 'Carinhoso', 'Curioso'],
    health: {
      vaccinated: true,
      neutered: true,
      dewormed: true,
      microchipped: true,
      specialCare: 'FIV/FeLV negativo. Vermifugado 3x.'
    },
    temperamentMetrics: {
      energy: 5,
      affection: 4,
      sociableWithKids: 5,
      sociableWithPets: 5,
      independence: 2
    },
    goodForApartment: true,
    location: 'São Paulo - SP (Zona Norte)',
    urgencyBadge: 'Bebê Laranjinha',
    status: 'available',
    rescueDate: '05/10/2026'
  },
  {
    id: 'pet-9',
    name: 'Frederico',
    species: 'Cão',
    breed: 'Labrador Mestiço',
    gender: 'Macho',
    ageYears: 2.5,
    ageLabel: '2 anos e meio (Adulto)',
    ageCategory: 'adulto',
    size: 'Grande',
    weight: '28 kg',
    color: 'Amarelo Claro / Creme',
    coatType: 'Pelo denso hidrorrepelente',
    images: [
      'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1000&q=80'
    ],
    story: 'Frederico é o parceiro de trilhas e aventuras que você sempre sonhou! Ele ama água, adora brincar de buscar a bolinha no parque e depois deita aos seus pés para relaxar. Já sabe sentar, dar a pata e esperar a ração.',
    personalityTraits: ['Atlético', 'Super Inteligente', 'Brincalhão', 'Amigável com Todos', 'Fiel'],
    health: {
      vaccinated: true,
      neutered: true,
      dewormed: true,
      microchipped: true,
      specialCare: 'Excelente condição física.'
    },
    temperamentMetrics: {
      energy: 5,
      affection: 5,
      sociableWithKids: 5,
      sociableWithPets: 5,
      independence: 3
    },
    goodForApartment: false,
    location: 'Osasco - SP',
    urgencyBadge: 'Cão Esportista',
    status: 'available',
    rescueDate: '14/04/2026'
  },
  {
    id: 'pet-10',
    name: 'Nina',
    species: 'Cão',
    breed: 'SRD Pequenina',
    gender: 'Fêmea',
    ageYears: 4,
    ageLabel: '4 anos (Adulto)',
    ageCategory: 'adulto',
    size: 'Pequeno',
    weight: '7.8 kg',
    color: 'Preto e Canela (Black and Tan)',
    coatType: 'Pelo macio e orelhas empinadas',
    images: [
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1000&q=80'
    ],
    story: 'Nina é uma companheira leal e atenta. Tem um olhar doce que conquista qualquer pessoa no primeiro minuto. Ela gosta de passeios calmos e adora ficar enroscada no cobertor em dias mais frios.',
    personalityTraits: ['Dócil', 'Quieta', 'Companheira', 'Sensível', 'Amorosa'],
    health: {
      vaccinated: true,
      neutered: true,
      dewormed: true,
      microchipped: true,
      specialCare: 'Pronta para adoção responsável.'
    },
    temperamentMetrics: {
      energy: 2,
      affection: 5,
      sociableWithKids: 4,
      sociableWithPets: 4,
      independence: 4
    },
    goodForApartment: true,
    location: 'São Paulo - SP (Zona Sul)',
    urgencyBadge: 'Ideal para Apartamento',
    status: 'available',
    rescueDate: '19/06/2026'
  }
];

export interface AdoptionApplication {
  id: string;
  petId: string;
  petName: string;
  petSpecies: string;
  petImage: string;
  applicantName: string;
  whatsapp: string;
  email: string;
  city: string;
  housingType: string;
  hasScreenedWindows: boolean;
  hasOtherPets: boolean;
  routineNotes: string;
  submittedAt: string;
  status: 'Em Análise' | 'Entrevista Agendada' | 'Aprovado';
}
