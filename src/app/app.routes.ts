import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Inicio - Red Vecinal Andaluza',
    data: {
      seo: {
        title: 'Red Vecinal Andaluza',
        description:
          'Red Vecinal Andaluza, Confederación de Asociaciones Vecinales de Andalucía para AAVV y asociaciones de vecinos y vecinas.',
        keywords: ['inicio RedVA', 'Confederación de Asociaciones Vecinales de Andalucía'],
      },
    },
  },
  {
    path: 'quienes-somos',
    loadComponent: () => import('./features/quienes-somos/quienes-somos').then((m) => m.QuienesSomos),
    title: 'Quiénes somos - Red Vecinal Andaluza',
    data: {
      seo: {
        title: 'Quiénes somos',
        description:
          'Conoce la Red Vecinal Andaluza: Confederación de Asociaciones Vecinales de Andalucía, AAVV y asociaciones de vecinos y vecinas.',
        keywords: ['quiénes somos', 'Confederación de Asociaciones Vecinales de Andalucía', 'participación ciudadana'],
      },
    },
  },
  {
    path: 'federaciones',
    loadComponent: () => import('./features/federaciones/federaciones').then((m) => m.Federaciones),
    title: 'Federaciones - RedVA',
    data: {
      seo: {
        title: 'Federaciones',
        description:
          'Directorio de federaciones y entidades federadas de RedVA, AAVV y asociaciones de vecinos y vecinas en Andalucía.',
        keywords: ['federaciones vecinales', 'entidades federadas', 'directorio AAVV'],
      },
    },
  },
  {
    path: 'decalogo',
    loadComponent: () => import('./features/decalogo/decalogo').then((m) => m.Decalogo),
    title: 'Decálogo - Red Vecinal Andaluza',
    data: {
      seo: {
        title: 'Decálogo',
        description:
          'Decálogo de Red Vecinal Andaluza para la unidad del movimiento vecinal andaluz, las AAVV y asociaciones de vecinos y vecinas.',
        keywords: ['decálogo vecinal', 'movimiento vecinal andaluz', 'unidad vecinal'],
      },
    },
  },
  {
    path: 'ilp-vivienda',
    loadComponent: () => import('./features/ilp/ilp').then((m) => m.Ilp),
    title: 'ILP Vivienda - RedVA',
    data: {
      seo: {
        title: 'ILP Vivienda',
        description:
          'Iniciativa Legislativa Popular por una vivienda digna impulsada por Red Vecinal Andaluza, AAVV y asociaciones de vecinos y vecinas.',
        keywords: ['ILP vivienda', 'vivienda digna', 'derecho a la vivienda'],
      },
    },
  },
  {
    path: 'contacto',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'privacidad',
    loadComponent: () => import('./features/privacidad/privacidad').then((m) => m.Privacidad),
    title: 'Privacidad - RedVA',
    data: {
      seo: {
        title: 'Privacidad',
        description:
          'Informacion sobre privacidad, proteccion de datos y uso de almacenamiento local en la web de Red Vecinal Andaluza.',
        keywords: ['privacidad RedVA', 'proteccion de datos', 'cookies RedVA'],
      },
    },
  },
  {
    path: 'aviso-legal',
    loadComponent: () => import('./features/aviso-legal/aviso-legal').then((m) => m.AvisoLegal),
    title: 'Aviso legal - RedVA',
    data: {
      seo: {
        title: 'Aviso legal',
        description:
          'Aviso legal e informacion del titular del sitio web de Red Vecinal Andaluza.',
        keywords: ['aviso legal RedVA', 'Red Vecinal Andaluza', 'LSSI'],
      },
    },
  },
  {
    path: 'noticias',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/noticias/listado/listado').then((m) => m.Listado),
        title: 'Noticias - RedVA',
        data: {
          seo: {
            title: 'Noticias',
            description:
              'Noticias de Red Vecinal Andaluza, actualidad de AAVV, asociaciones de vecinos y vecinas y movimiento vecinal andaluz.',
            keywords: ['noticias vecinales', 'actualidad RedVA', 'movimiento vecinal'],
          },
        },
      },
      {
        path: ':slug',
        loadComponent: () => import('./features/noticias/detalle/detalle').then((m) => m.Detalle),
        title: 'Noticia - RedVA',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
