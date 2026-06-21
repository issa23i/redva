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
  readonly icon: SvgIcon;
  readonly accent: string;
}

export interface SvgIcon {
  readonly viewBox: string;
  readonly paths: readonly string[];
}

export interface NavLink {
  readonly label: string;
  readonly path: string;
}

export interface AboutSection {
  readonly title: string;
  readonly body: readonly string[];
}

export interface AboutStat {
  readonly value: string;
  readonly label: string;
}

export interface DecaloguePoint {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly proposals?: readonly string[];
}

const asset = (fileName: string): string => `assets/redva/${fileName}`;

const goalIcons = {
  institution: {
    viewBox: '0 0 24 24',
    paths: [
      'M4 10.2 12 5l8 5.2v1.3H4v-1.3Z',
      'M6 12.8h2v5.7H6v-5.7Z',
      'M11 12.8h2v5.7h-2v-5.7Z',
      'M16 12.8h2v5.7h-2v-5.7Z',
      'M4.8 19.8h14.4v1.7H4.8v-1.7Z',
    ],
  },
  people: {
    viewBox: '0 0 24 24',
    paths: [
      'M9 11.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z',
      'M15.8 10.8a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z',
      'M3.8 18.8c.4-3.3 2.2-5.3 5.2-5.3s4.8 2 5.2 5.3H3.8Z',
      'M13.8 18.8c-.1-1.5-.6-2.9-1.4-4 1-.8 2.1-1.2 3.4-1.2 2.6 0 4.2 1.9 4.5 5.2h-6.5Z',
    ],
  },
  cart: {
    viewBox: '0 0 24 24',
    paths: [
      'M5 5.5h2.2l1.7 8.3h8.2l1.7-5.8H9.2L8.8 6.5H19v-1H8.1L7.7 4H5v1.5Z',
      'M10.2 19.7a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z',
      'M16.9 19.7a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z',
      'M10.1 15.4h7.4v1.1h-7.4v-1.1Z',
    ],
  },
  assembly: {
    viewBox: '0 0 24 24',
    paths: [
      'M12 10.8a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z',
      'M6.4 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z',
      'M17.6 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z',
      'M7.1 19.5c.3-3 2-5 4.9-5s4.6 2 4.9 5H7.1Z',
      'M2.8 18.6c.3-2.7 1.5-4.4 3.7-4.4.9 0 1.6.2 2.2.7-1.1 1-1.8 2.2-2.1 3.7H2.8Z',
      'M17.4 18.6c-.3-1.5-1-2.8-2.1-3.7.6-.5 1.4-.7 2.2-.7 2.2 0 3.4 1.7 3.7 4.4h-3.8Z',
    ],
  },
} satisfies Record<string, SvgIcon>;

export const navLinks: readonly NavLink[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Quiénes somos', path: '/quienes-somos' },
  { label: 'Federaciones', path: '/federaciones' },
  { label: 'Decálogo', path: '/decalogo' },
  { label: 'ILP Vivienda', path: '/ilp-vivienda' },
  { label: 'Noticias', path: '/noticias' },
];

export const aboutIntro: readonly string[] = [
  'Con la denominación de Confederación RED VECINAL ANDALUZA (RedVA) se constituye una organización sin ánimo de lucro: una Confederación de Federaciones territoriales de asociaciones vecinales de Andalucía.',
  'La Red Vecinal Andaluza es una entidad de interés general y de participación ciudadana, creada para representar al movimiento vecinal andaluz y defender los intereses comunes de las asociaciones vecinales, el interés público y el bien común.',
];

export const aboutStats: readonly AboutStat[] = [
  { value: 'AAVV', label: 'Asociaciones de vecinos y vecinas' },
  { value: 'Andalucía', label: 'Ámbito autonómico de actuación' },
  { value: 'CEAV', label: 'Movimiento vecinal estatal' },
];

export const aboutSections: readonly AboutSection[] = [
  {
    title: 'Representación vecinal andaluza',
    body: [
      'La Red Vecinal Andaluza agrupa a Confederaciones y Federaciones provinciales y territoriales de asociaciones vecinales con residencia en Andalucía que comparten sus objetivos y fines sociales.',
      'Su propósito es alcanzar una amplia representación del movimiento vecinal de Andalucía, con toda su diversidad social y desde los principios de libertad, igualdad, pluralismo político y defensa de los derechos sociales, económicos y culturales.',
    ],
  },
  {
    title: 'Misión social',
    body: [
      'La misión principal de RedVA es representar al movimiento vecinal de Andalucía para la defensa de los intereses comunes de las asociaciones vecinales, el interés público, el bien común y la participación ciudadana en la resolución de los problemas sociales y comunitarios.',
      'La Confederación trabaja por la defensa de los derechos y libertades de las personas que residen en la Comunidad Autónoma, la justicia social y ambiental, y la materialización efectiva de los Derechos Humanos en el territorio andaluz.',
    ],
  },
  {
    title: 'Domicilio social',
    body: [
      'El domicilio social de la Red Vecinal Andaluza se fija en calle Resolana, 8, local izquierda, CP 41009, Sevilla.',
      'Además, se establecen sedes sociales en los domicilios de las Confederaciones provinciales y federaciones territoriales integradas en la Red.',
    ],
  },
];

export const socialGoals: readonly SocialGoal[] = [
  {
    title: 'Servicios públicos y derechos sociales',
    description:
      'Defendemos el acceso efectivo a salud, educación, protección social, vivienda, medio ambiente y demás derechos reconocidos en Andalucía.',
    icon: goalIcons.institution,
    accent: '#0099cc',
  },
  {
    title: 'Igualdad y no discriminación',
    description:
      'Promovemos la igualdad entre mujeres y hombres y la eliminación de cualquier discriminación por edad, origen, identidad, orientación o condición social.',
    icon: goalIcons.people,
    accent: '#797676',
  },
  {
    title: 'Personas consumidoras y usuarias',
    description:
      'Informamos, formamos y defendemos a la ciudadanía como usuaria final de servicios sociales, urbanos, culturales, educativos, sanitarios y de consumo.',
    icon: goalIcons.cart,
    accent: '#0099cc',
  },
  {
    title: 'Democracia participativa',
    description:
      'Canalizamos inquietudes vecinales, fomentamos asociaciones y promovemos órganos y procedimientos de participación ciudadana.',
    icon: goalIcons.assembly,
    accent: '#8db92e',
  },
];

export const decalogueIntro: readonly string[] = [
  'El Decálogo para la unidad del movimiento vecinal andaluz es un instrumento inicial para emprender un camino de unidad y presencia ante las instituciones locales y autonómicas.',
  'La Red Vecinal Andaluza nace con el propósito de aglutinar y sumar a las diferentes Confederaciones y Federaciones vecinales que trabajan dentro de Andalucía para conformar un movimiento vecinal coordinado y fuerte.',
];

export const decaloguePublicSystem =
  'Como punto de partida, RedVA expresa su apoyo al sistema público. Una sociedad avanza en derechos cuando fortalece y blinda sus servicios públicos.';

export const decaloguePoints: readonly DecaloguePoint[] = [
  {
    number: '01',
    title: 'Participación',
    description:
      'La participación de las organizaciones vecinales en los órganos locales y autonómicos es fundamental. Las administraciones deben favorecer una regulación clara, estable y lo más homogénea posible.',
    proposals: [
      'Reglamentos de participación ciudadana en el ámbito local.',
      'Delegaciones municipales dotadas con personal y recursos suficientes.',
      'Presencia vecinal en consejos municipales y espacios autonómicos de decisión.',
    ],
  },
  {
    number: '02',
    title: 'Vivienda',
    description:
      'La vivienda digna y asequible es uno de los retos centrales del movimiento vecinal. Debe contemplarse como un derecho fundamental, anteponiendo el bien común a la especulación.',
    proposals: [
      'Construcción suficiente de vivienda pública en compra y alquiler.',
      'Declaración de zonas tensionadas y regulación de viviendas turísticas.',
      'Programas de rehabilitación y ayudas al alquiler eficaces.',
    ],
  },
  {
    number: '03',
    title: 'Sanidad',
    description:
      'RedVA defiende una sanidad pública potente, universal y con recursos económicos, técnicos y humanos suficientes para la atención hospitalaria, primaria y rural.',
    proposals: [
      'Partidas presupuestarias blindadas y crecientes.',
      'Mejora de la atención primaria, con especial atención a las personas mayores.',
      'Condiciones laborales suficientes para el personal sanitario.',
    ],
  },
  {
    number: '04',
    title: 'Educación',
    description:
      'La Red Vecinal apuesta por una educación pública, gratuita, laica, de calidad y proximidad, capaz de preservar la cohesión social y la convivencia plural.',
    proposals: [
      'Recursos suficientes para alumnado con necesidades educativas.',
      'Inversión pública en adecuación y mantenimiento de centros.',
      'Estabilización de plantillas, reducción de ratios y plazas públicas por barrio.',
    ],
  },
  {
    number: '05',
    title: 'Igualdad y libertades',
    description:
      'Eliminar la discriminación de género, promover liderazgos inclusivos y defender las libertades personales forma parte esencial de una sociedad democrática avanzada.',
    proposals: [
      'Impulso de la Agenda Feminista y planes transversales de igualdad.',
      'Empoderamiento de mujeres en AAVV, federaciones y órganos de participación.',
      'Espacios seguros para personas diversas y defensa de la multiculturalidad.',
    ],
  },
  {
    number: '06',
    title: 'Juventud',
    description:
      'El recambio generacional es imprescindible para la continuidad del movimiento vecinal. Las asociaciones deben adaptarse a las nuevas formas de participación de las personas jóvenes.',
    proposals: [
      'Relación fluida con consejos de juventud y organizaciones sociales.',
      'Incorporación de jóvenes a juntas directivas y federaciones.',
      'Encuentros juveniles y acompañamiento de proyectos con autonomía propia.',
    ],
  },
  {
    number: '07',
    title: 'Mayores',
    description:
      'Ante el envejecimiento de la población andaluza, RedVA considera prioritaria la defensa de cuidados, independencia, dignidad, protección y accesibilidad.',
    proposals: [
      'Servicios de salud y protección adecuados para mantener el bienestar.',
      'Vivienda, residencias públicas e ingresos suficientes.',
      'Atención a la dependencia y accesibilidad en edificios y espacios urbanos.',
    ],
  },
  {
    number: '08',
    title: 'Medio ambiente y urbanismo',
    description:
      'Andalucía necesita políticas coordinadas de mitigación, protección y adaptación frente al cambio climático, además de un urbanismo más amable y eficiente.',
    proposals: [
      'Lucha contra contaminación acústica y atmosférica.',
      'Reforestación, mantenimiento arbóreo y energías renovables.',
      'Transporte público no contaminante, economía circular y sostenibilidad alimentaria.',
    ],
  },
  {
    number: '09',
    title: 'Movilidad y accesibilidad',
    description:
      'La movilidad sostenible debe mejorar la calidad de vida, recuperar espacio público para la ciudadanía y construir ciudades más habitables, saludables y seguras.',
    proposals: [
      'Implantación de zonas de bajas emisiones.',
      'Movilidad activa mediante trayectos peatonales y carriles bici.',
      'Equipamientos públicos cercanos para resolver necesidades cotidianas.',
    ],
  },
  {
    number: '10',
    title: 'Turistificación, cascos históricos y desarrollo rural',
    description:
      'La gentrificación y el turismo desaforado expulsan vecindario, alteran los cascos históricos y encarecen la vivienda. El desarrollo rural exige un modelo económico sostenible social y ecológicamente.',
    proposals: [
      'Políticas turísticas que frenen la gentrificación.',
      'Control de viviendas turísticas, moratorias y registros municipales.',
      'Tasas turísticas finalistas y apoyo a economía rural, cooperativismo y comercio de proximidad.',
    ],
  },
];

export const federations: readonly Federation[] = [
  {
    province: 'Córdoba',
    name: 'Federación de Asociaciones Vecinales de Córdoba Al-Zahara',
    description: 'Federación de asociaciones vecinales de Córdoba integrada en RedVA.',
    address: 'Ronda del Marrubial, Levante, 14007 Córdoba',
    phone: '954 76 44 95 - 607 731 371',
    email: 'alzahara@alzahara.com',
    website: 'www.al-zahara.com',
    ceavMember: true,
  },
  {
    province: 'Jaén',
    name: 'CAVA-Jaén',
    description: 'Unión Provincial de Federaciones Vecinales CAVA-Jaén.',
    ceavMember: true,
  },
  {
    province: 'Málaga',
    name: 'Federación de Asociaciones Vecinales de Málaga Solidaridad',
    description: 'Federación de asociaciones vecinales de Málaga integrada en RedVA.',
    ceavMember: true,
  },
  {
    province: 'Sevilla',
    name: 'Red Vecinal Sevilla',
    description: 'Confederacion Provincial Red Vecinal de Sevilla.',
    ceavMember: true,
  },
  {
    province: 'Cádiz',
    name: 'CAVECA',
    description: 'Confederación de Federaciones Vecinales de la Provincia de Cádiz.',
    ceavMember: true,
  },
  {
    province: 'Almería',
    name: 'ARGAR',
    description: 'Federación de Asociaciones Vecinales de Almería ARGAR.',
    ceavMember: true,
  },
  {
    province: 'La Línea',
    name: 'FLAVI',
    description: 'Federación de Asociaciones Vecinales de La Línea, FLAVI.',
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
