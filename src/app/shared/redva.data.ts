export interface NewsArticle {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly body: readonly string[];
  readonly category: string;
  readonly province?: string;
  readonly date: string;
  readonly image: string;
  readonly featured: boolean;
}

export interface Federation {
  readonly province: string;
  readonly name: string;
  readonly description: string;
  readonly address?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly website?: string;
  readonly ceavMember: boolean;
}

export interface SocialGoal {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly accent: string;
}

export interface NavLink {
  readonly label: string;
  readonly path: string;
}

const asset = (fileName: string): string => `assets/redva/${fileName}`;

export const navLinks: readonly NavLink[] = [
  { label: 'Quienes Somos', path: '/quienes-somos' },
  { label: 'Federaciones', path: '/federaciones' },
  { label: 'ILP Vivienda', path: '/ilp-vivienda' },
  { label: 'Noticias', path: '/noticias' },
];

export const socialGoals: readonly SocialGoal[] = [
  {
    title: 'Defensa de Servicios Publicos',
    description: 'Protegemos el acceso universal a la sanidad, educacion y servicios sociales de calidad.',
    icon: 'institution',
    accent: '#0099cc',
  },
  {
    title: 'Igualdad de Genero',
    description: 'Promovemos la paridad y la erradicacion de toda forma de discriminacion en la comunidad.',
    icon: 'people',
    accent: '#797676',
  },
  {
    title: 'Proteccion del Consumidor',
    description: 'Velamos por los derechos de usuarios y consumo responsable en el ambito local.',
    icon: 'cart',
    accent: '#0099cc',
  },
  {
    title: 'Democracia Participativa',
    description: 'Impulsamos la implicacion directa de los vecinos en la toma de decisiones publicas.',
    icon: 'assembly',
    accent: '#8db92e',
  },
];

export const federations: readonly Federation[] = [
  {
    province: 'Cordoba',
    name: 'Federacion De Asociaciones Vecinales de Cordoba Al-zahara',
    description: 'Entidad vecinal de referencia en la ciudad de Cordoba.',
    address: 'Ronda del Marrubial, Levante, 14007 Cordoba',
    phone: '954 76 44 95 - 607 731 371',
    email: 'alzahara@alzahara.com',
    website: 'www.al-zahara.com',
    ceavMember: true,
  },
  {
    province: 'Jaen',
    name: 'CAVA-JAEN',
    description: 'Union Provincial de asociaciones vecinales de Jaen.',
    ceavMember: true,
  },
  {
    province: 'Malaga',
    name: 'Solidaridad',
    description: 'Federacion de Asociaciones Vecinales de Malaga.',
    ceavMember: true,
  },
  {
    province: 'Sevilla',
    name: 'Red Vecinal Sevilla',
    description: 'Confederacion Provincial Red Vecinal de Sevilla.',
    ceavMember: true,
  },
  {
    province: 'Cadiz',
    name: 'CAVECA',
    description: 'Confederacion de Federaciones Vecinales de la Provincia de Cadiz.',
    ceavMember: true,
  },
  {
    province: 'Almeria',
    name: 'FAVAR',
    description: 'Federacion de Asociaciones Vecinales de Almeria.',
    ceavMember: true,
  },
  {
    province: 'La Linea',
    name: 'FLAVI',
    description: 'Federacion de Asociaciones Vecinales de La Linea de la Concepcion.',
    ceavMember: true,
  },
];

export const newsArticles: readonly NewsArticle[] = [
  {
    slug: 'ilp-vivienda-digna-movilizacion-continua',
    title: 'ILP por una Vivienda Digna: La movilizacion continua',
    excerpt:
      'La Confederacion Red Vecinal Andaluza redobla sus esfuerzos para alcanzar las firmas necesarias y garantizar el derecho a un techo digno.',
    body: [
      'La campana por una vivienda digna avanza en toda Andalucia con asambleas abiertas, mesas informativas y coordinacion entre federaciones provinciales.',
      'RedVA reclama una ley nacida del pueblo, orientada a proteger el derecho constitucional a un hogar y a frenar la especulacion inmobiliaria.',
    ],
    category: 'Iniciativa Legislativa Popular',
    date: '15 Mayo 2024',
    image: asset('news-featured-protest.png'),
    featured: true,
  },
  {
    slug: 'asamblea-general-nuevas-estrategias',
    title: 'Asamblea General: Nuevas estrategias para el fortalecimiento del movimiento vecinal andaluz',
    excerpt:
      'Representantes de las ocho provincias se reunen para coordinar acciones conjuntas frente a los nuevos retos urbanos y sociales.',
    body: [
      'La Confederacion RED VECINAL ANDALUZA (RedVA) ha celebrado su ultima Asamblea General Ordinaria en un clima de colaboracion sin precedentes, marcando una hoja de ruta clara para los proximos dos anos.',
      'En el encuentro han participado delegaciones de las ocho provincias andaluzas: Almeria, Cadiz, Cordoba, Granada, Huelva, Jaen, Malaga y Sevilla. El objetivo central ha sido debatir y consensuar nuevas estrategias que permitan al movimiento vecinal anticiparse a los retos urbanos del siglo XXI.',
      'Uno de los pilares fundamentales discutidos fue la Iniciativa Legislativa Popular por la Vivienda. Se ha acordado intensificar la campana de recogida de firmas y la interlocucion directa con el Parlamento de Andalucia.',
      'Ademas de la vivienda, se abordaron la precariedad en los suministros basicos y la brecha digital que afecta especialmente a la poblacion mayor de nuestras confederaciones.',
    ],
    category: 'Institucional',
    province: 'Andalucia',
    date: '12 Octubre 2023',
    image: asset('news-asamblea.png'),
    featured: false,
  },
  {
    slug: 'red-vecinal-malaga-mejoras-transporte',
    title: 'La Red Vecinal de Malaga exige mejoras en el transporte de los barrios perifericos',
    excerpt:
      'Denuncian la falta de frecuencias en las lineas que conectan los barrios perifericos con los centros de servicios basicos.',
    body: [
      'La federacion malaguena solicita un plan urgente de movilidad que garantice conexiones fiables para acudir a centros de salud, centros educativos y gestiones administrativas.',
      'La propuesta incluye horarios ampliados, marquesinas accesibles y participacion vecinal en el seguimiento del servicio.',
    ],
    category: 'Malaga',
    province: 'Malaga',
    date: '08 Octubre 2023',
    image: asset('news-speaker.png'),
    featured: false,
  },
  {
    slug: 'convenio-junta-digitalizacion-quejas',
    title: 'Convenio con la Junta para la digitalizacion del canal de quejas ciudadanas',
    excerpt:
      'Un nuevo paso para reducir la brecha digital en las asociaciones y facilitar la tramitacion de quejas y propuestas ciudadanas.',
    body: [
      'RedVA y la administracion autonomica impulsan un marco de colaboracion para que las entidades vecinales puedan elevar incidencias con mayor trazabilidad.',
      'El proyecto contempla formacion, acompanamiento tecnico y criterios de accesibilidad para personas mayores.',
    ],
    category: 'Servicios Publicos',
    province: 'Sevilla',
    date: '05 Octubre 2023',
    image: asset('news-office.png'),
    featured: false,
  },
  {
    slug: 'cordoba-plan-iluminacion-sostenible',
    title: 'RedVA Cordoba presenta el plan de iluminacion sostenible para el casco historico',
    excerpt:
      'Propuesta ciudadana para equilibrar la seguridad nocturna con el respeto al patrimonio y la eficiencia energetica.',
    body: [
      'La federacion cordobesa plantea una renovacion progresiva de luminarias que cuide el descanso vecinal y mejore la seguridad en calles historicas.',
      'El documento propone auditorias por barrio, mediciones de consumo y participacion de residentes y comerciantes.',
    ],
    category: 'Cordoba',
    province: 'Cordoba',
    date: '30 Septiembre 2023',
    image: asset('news-cordoba.png'),
    featured: false,
  },
  {
    slug: 'talleres-formacion-vecinal-sevilla',
    title: 'Exito en los talleres de formacion vecinal en Sevilla',
    excerpt:
      'Mas de 200 personas participan en jornadas sobre participacion ciudadana y herramientas de control democratico local.',
    body: [
      'Las sesiones combinan tecnologia, presupuestos municipales y estrategias de mediacion comunitaria para reforzar la accion de barrio.',
      'RedVA replicara el formato en otras provincias durante los proximos meses.',
    ],
    category: 'Sevilla',
    province: 'Sevilla',
    date: '25 Septiembre 2023',
    image: asset('news-workshop.png'),
    featured: false,
  },
  {
    slug: 'almeria-pacto-accesibilidad-universal',
    title: 'Almeria firma el pacto por la accesibilidad universal en los barrios',
    excerpt:
      'Un compromiso entre asociaciones vecinales y ayuntamiento para eliminar barreras arquitectonicas en las zonas mas transitadas.',
    body: [
      'El pacto recoge itinerarios peatonales seguros, mejoras de senalizacion y un calendario de ejecucion supervisado por las asociaciones.',
      'La accesibilidad se aborda como una condicion basica para la autonomia y la igualdad de oportunidades.',
    ],
    category: 'Almeria',
    province: 'Almeria',
    date: '20 Septiembre 2023',
    image: asset('news-signing.png'),
    featured: false,
  },
];

export const latestFederationNews: readonly NewsArticle[] = [
  {
    slug: 'acciones-vecinales-barrios-historicos',
    title: 'Acciones vecinales por la mejora de barrios historicos',
    excerpt:
      'Las federaciones se coordinan para solicitar planes de rehabilitacion integral en las zonas mas vulnerables de Andalucia.',
    body: ['Las asociaciones vecinales reclaman inversiones sostenidas y escucha activa en el diseno urbano.'],
    category: 'Comunidad',
    date: '12 Mayo 2024',
    image: asset('news-meeting.png'),
    featured: false,
  },
  {
    slug: 'avances-ilp-vivienda-digna',
    title: 'Avances significativos en la ILP por la Vivienda Digna',
    excerpt:
      'La comision promotora presenta nuevas firmas y refuerza el apoyo parlamentario para la proteccion del derecho a techo.',
    body: ['El movimiento vecinal intensifica la recogida de apoyos en mercados, plazas y centros civicos.'],
    category: 'ILP Vivienda',
    date: '11 Mayo 2024',
    image: asset('ilp-hero.png'),
    featured: false,
  },
  {
    slug: 'encuentro-regional-federaciones-sevilla',
    title: 'Encuentro regional de federaciones vecinales en Sevilla',
    excerpt:
      'Representantes de las ocho provincias se reunen para trazar la hoja de ruta estrategica para el proximo bienio.',
    body: ['El encuentro refuerza la cooperacion institucional y el trabajo coordinado entre territorios.'],
    category: 'Institucional',
    date: '10 Mayo 2024',
    image: asset('sidebar-arches.png'),
    featured: false,
  },
];

