export interface NewsArticle {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly body: readonly string[];
  readonly quote?: string;
  readonly sections?: readonly NewsArticleSection[];
  readonly category: string;
  readonly province?: string;
  readonly date: string;
  readonly image: string;
  readonly featured: boolean;
}

export interface NewsArticleSection {
  readonly title: string;
  readonly body: readonly string[];
}

export interface Federation {
  readonly id: string;
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

export const federationFragment = (federation: Federation): string =>
  federation.id;

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
    id: 'cordoba',
    province: 'Córdoba',
    name: 'Federación de Asociaciones Vecinales de Córdoba Al-Zahara',
    description:
      'Federación de asociaciones vecinales de Córdoba integrada en RedVA.',
    address: 'Ronda del Marrubial, Levante, 14007 Córdoba',
    phone: '954 76 44 95 - 607 731 371',
    email: 'alzahara@alzahara.com',
    website: 'www.al-zahara.com',
    ceavMember: true,
  },
  {
    id: 'jaen',
    province: 'Jaén',
    name: 'CAVA-Jaén',
    description: 'Unión Provincial de Federaciones Vecinales CAVA-Jaén.',
    ceavMember: true,
  },
  {
    id: 'malaga',
    province: 'Málaga',
    name: 'Federación de Asociaciones Vecinales de Málaga Solidaridad',
    description:
      'Federación de asociaciones vecinales de Málaga integrada en RedVA.',
    ceavMember: true,
  },
  {
    id: 'sevilla',
    province: 'Sevilla',
    name: 'Red Vecinal Sevilla',
    description: 'Confederacion Provincial Red Vecinal de Sevilla.',
    ceavMember: true,
  },
  {
    id: 'cadiz',
    province: 'Cádiz',
    name: 'CAVECA',
    description:
      'Confederación de Federaciones Vecinales de la Provincia de Cádiz.',
    ceavMember: true,
  },
  {
    id: 'almeria',
    province: 'Almería',
    name: 'ARGAR',
    description: 'Federación de Asociaciones Vecinales de Almería ARGAR.',
    ceavMember: true,
  },
  {
    id: 'lalinea',
    province: 'La Línea',
    name: 'FLAVI',
    description: 'Federación de Asociaciones Vecinales de La Línea, FLAVI.',
    ceavMember: true,
  },
];

export const newsArticles: readonly NewsArticle[] = [
  {
    slug: 'informe-anual-2025-defensor-usuario-emasesa',
    title:
      'El Informe Anual 2025 del Defensor del Usuario de EMASESA subraya el valor de la escucha activa',
    excerpt:
      'El documento resume la actividad de la Defensoria del Usuario y detalla como la escucha activa, la mediacion y la transparencia permiten transformar las necesidades ciudadanas en mejoras concretas.',
    body: [
      'La Red Vecinal Andaluza quiere hacer llegar el Informe Anual 2025 del Defensor del Usuario de EMASESA, un documento que recoge de forma sintetica el trabajo desarrollado durante este periodo y que situa en el centro a las personas usuarias, sus necesidades, sus expectativas y su relacion cotidiana con los servicios publicos.',
      'El informe presenta la Defensoria del Usuario como un servicio gratuito de escucha, interlocucion y mediacion a disposicion de la comunidad usuaria de EMASESA, asi como de asociaciones, colectivos, personas fisicas y juridicas y grupos de interes del area metropolitana. Su funcion no se limita a recibir consultas: tambien atiende sugerencias, quejas y reclamaciones en segunda instancia, impulsa actuaciones de oficio y formula recomendaciones dirigidas a las distintas areas funcionales de la empresa.',
      'Mas alla de los datos estadisticos, el documento pone en valor la escucha activa como una herramienta para acercar la empresa publica a la ciudadania. La Defensoria actua como un puente que facilita una relacion mas fluida, clara y constructiva, identificando demandas reales y trasladandolas a los procesos internos para convertirlas en respuestas utiles.',
      'Durante 2025 se recibieron 420 notificaciones, un 9,1% mas que en 2024. Las cuestiones relacionadas con facturacion y consumo concentraron una parte destacada de la actividad, seguidas por materias de contratacion y atencion al usuario, abastecimiento y saneamiento, ademas de asuntos tecnicos, sociales y de sostenibilidad.',
      'El informe tambien subraya la importancia de los encuentros con entidades y asociaciones, especialmente cuando permiten detectar necesidades de personas vulnerables, mayores, personas con discapacidad o poblacion migrante. Ese contacto directo ayuda a actualizar la mirada de la empresa y a mantener una respuesta mas ajustada a la realidad social de cada momento.',
      'Otro de los ejes destacados es el trabajo de los Circulos de Calidad, espacios colaborativos y transversales orientados a la mejora continua. En 2025 se celebraron 22 sesiones y se abordaron 50 asuntos, con el objetivo de perfilar propuestas creativas y consensuadas que mejoren la atencion y refuercen el compromiso con las personas usuarias.',
      'La transparencia aparece igualmente como una linea de trabajo esencial. El documento recoge la actualizacion y difusion del Portal de Transparencia, concebido como una herramienta para rendir cuentas, ofrecer informacion clara y accesible, y fortalecer la confianza entre EMASESA y la ciudadania.',
      'El resultado es el reflejo de una empresa publica cada vez mas cercana, atenta a la sociedad y comprometida con seguir avanzando en esa linea, adecuando su trabajo y su respuesta a lo que la ciudadania espera y necesita.',
    ],
    quote:
      'El contacto directo y la escucha activa de las necesidades ciudadanas guian el trabajo diario y permiten transformar las demandas en mejoras concretas.',
    sections: [
      {
        title: 'Servicio, transparencia y mejora continua',
        body: [
          'El informe describe la Defensoria del Usuario como un servicio gratuito dirigido a la comunidad usuaria de EMASESA, asociaciones, colectivos y grupos de interes del area metropolitana. Entre sus funciones figuran la atencion de consultas y sugerencias, la tramitacion en segunda instancia de quejas y reclamaciones, la promocion de la transparencia y la formulacion de recomendaciones internas.',
          'Durante 2025 se recibieron 420 notificaciones, un 9,1% mas que en 2024. Las materias mas destacadas estuvieron relacionadas con facturacion y consumo, contratacion y atencion al usuario, abastecimiento y saneamiento, ademas de asuntos tecnicos, sociales y de sostenibilidad.',
        ],
      },
      {
        title: 'Dialogo con entidades y asociaciones',
        body: [
          'La Defensoria destaca los encuentros con entidades y asociaciones, con especial atencion a personas vulnerables, mayores, personas con discapacidad y poblacion migrante. Estas propuestas y necesidades emergentes se trasladan a los procesos internos para orientar nuevas iniciativas de mejora.',
          'El informe tambien recoge el trabajo de los Circulos de Calidad, espacios colaborativos y transversales donde se han celebrado 22 sesiones y tratado 50 asuntos para impulsar respuestas consensuadas y mejorar la atencion a la comunidad usuaria.',
        ],
      },
    ],
    category: 'Servicios publicos',
    province: 'Sevilla',
    date: '23 Junio 2026',
    image: asset('emasesa.jpg'),
    featured: false,
  },
  {
    slug: 'ilp-vivienda-digna-movilizacion-continua',
    title: 'La vivienda toma las calles de Sevilla',
    excerpt:
      'Miles de personas reclaman un giro en las políticas públicas ante la escalada de precios y la falta de vivienda asequible.',
    body: [
      'La manifestación por el derecho a la vivienda reunió a colectivos vecinales, plataformas sociales y ciudadanía de toda Sevilla, que exigieron medidas urgentes frente a la especulación y el aumento insostenible de los alquileres.',
      'Las organizaciones participantes reclamaron políticas públicas valientes que garanticen el acceso a un hogar digno, frenen la presión de los fondos buitre y prioricen el interés social por encima del beneficio privado.',
    ],
    category: 'Iniciativa Legislativa Popular',
    date: '19 Junio 2026',
    image: asset('mani_vivienda.jpeg'),
    featured: false,
  },
  {
    slug: 'ilp-derecho-vivienda-presentacion-andalucia',
    title:
      'Sindicatos, FACUA y Red Vecinal Andaluza impulsan una ILP para garantizar el derecho a la vivienda',
    excerpt:
      'Las organizaciones presentan una Iniciativa Legislativa Popular que busca frenar la especulación y asegurar el acceso a un hogar digno en Andalucía.',
    body: [
      'Diversas organizaciones sociales y sindicales, entre ellas FACUA Andalucía, CCOO, UGT y la Red Vecinal Andaluza, han unido fuerzas para registrar una Iniciativa Legislativa Popular destinada a reforzar el derecho a la vivienda y combatir la escalada de precios que afecta a miles de familias.',
      'La propuesta plantea medidas estructurales para limitar la especulación inmobiliaria, ampliar el parque público de vivienda y garantizar mecanismos de protección frente a desahucios y situaciones de vulnerabilidad residencial.',
      'Durante la presentación, las entidades impulsoras subrayaron la necesidad de que el Parlamento de Andalucía asuma su responsabilidad ante una emergencia habitacional que se agrava cada año. También destacaron que la ILP nace del consenso social y del trabajo conjunto de colectivos que llevan años denunciando la falta de políticas eficaces.',
      'La campaña de recogida de firmas se desarrollará en toda Andalucía con el apoyo de asociaciones vecinales, plataformas ciudadanas y movimientos sociales, que consideran esta iniciativa un paso decisivo para asegurar un modelo de vivienda justo y sostenible.',
    ],
    category: 'Iniciativa Legislativa Popular',
    province: 'Andalucía',
    date: '26 Marzo 2026',
    image: asset('ilp_registro.jpg'),
    featured: true,
  },
  {
    slug: 'nace-red-vecinal-andaluza',
    title:
      'Nace la Red Vecinal Andaluza: una nueva etapa para el movimiento ciudadano',
    excerpt:
      'Las federaciones vecinales de las ocho provincias impulsan una estructura común para fortalecer la participación y la defensa de los derechos urbanos en Andalucía.',
    body: [
      'La Confederación Estatal de Asociaciones Vecinales (CEAV) ha anunciado el inicio de una nueva etapa organizativa con la puesta en marcha de la Red Vecinal Andaluza (RedVA), un espacio de coordinación estable entre las federaciones provinciales de Almería, Cádiz, Córdoba, Granada, Huelva, Jaén, Málaga y Sevilla.',
      'El proyecto nace con el objetivo de reforzar la interlocución con las administraciones, compartir estrategias frente a los retos urbanos y sociales, y consolidar una voz común que represente al movimiento vecinal andaluz en el ámbito autonómico.',
      'Durante la presentación se destacó la importancia de articular una estructura moderna, participativa y capaz de responder a desafíos como la vivienda, la movilidad, la brecha digital o la protección del espacio público. RedVA se plantea como una herramienta para unir esfuerzos y mejorar la capacidad de incidencia en las políticas públicas.',
      'La nueva red inicia su andadura con un calendario de trabajo conjunto y el compromiso de impulsar campañas, formación y proyectos que fortalezcan la participación ciudadana en todos los territorios de Andalucía.',
    ],
    category: 'Institucional',
    province: 'Andalucía',
    date: '14 Marzo 2026',
    image: asset('constitucionredvalandpatio.jpg'),
    featured: false,
  },
];
