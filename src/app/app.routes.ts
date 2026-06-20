import { Routes } from '@angular/router';
import { Decalogo } from './features/decalogo/decalogo';
import { Federaciones } from './features/federaciones/federaciones';
import { Home } from './features/home/home';
import { Ilp } from './features/ilp/ilp';
import { Detalle } from './features/noticias/detalle/detalle';
import { Listado } from './features/noticias/listado/listado';
import { QuienesSomos } from './features/quienes-somos/quienes-somos';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Inicio - Red Vecinal Andaluza',
    data: {
      seo: {
        title: 'Inicio',
        description:
          'Red Vecinal Andaluza, Confederación de Asociaciones Vecinales de Andalucía para AAVV y asociaciones de vecinos y vecinas.',
        keywords: ['inicio RedVA', 'Confederación de Asociaciones Vecinales de Andalucía'],
      },
    },
  },
  {
    path: 'quienes-somos',
    component: QuienesSomos,
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
    component: Federaciones,
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
    component: Decalogo,
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
    component: Ilp,
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
    path: 'noticias',
    children: [
      {
        path: '',
        component: Listado,
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
        component: Detalle,
        title: 'Noticia - RedVA',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
