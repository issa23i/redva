import { Routes } from '@angular/router';
import { AvisoLegal } from './features/aviso-legal/aviso-legal';
import { Decalogo } from './features/decalogo/decalogo';
import { Federaciones } from './features/federaciones/federaciones';
import { Home } from './features/home/home';
import { Ilp } from './features/ilp/ilp';
import { Detalle } from './features/noticias/detalle/detalle';
import { Listado } from './features/noticias/listado/listado';
import { Privacidad } from './features/privacidad/privacidad';
import { QuienesSomos } from './features/quienes-somos/quienes-somos';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Inicio - Red Vecinal Andaluza',
    data: {
      seo: {
        title: 'Red Vecinal Andaluza',
        description:
          'Red Vecinal Andaluza, ConfederaciÃ³n de Asociaciones Vecinales de AndalucÃ­a para AAVV y asociaciones de vecinos y vecinas.',
        keywords: ['inicio RedVA', 'ConfederaciÃ³n de Asociaciones Vecinales de AndalucÃ­a'],
      },
    },
  },
  {
    path: 'quienes-somos',
    component: QuienesSomos,
    title: 'QuiÃ©nes somos - Red Vecinal Andaluza',
    data: {
      seo: {
        title: 'QuiÃ©nes somos',
        description:
          'Conoce la Red Vecinal Andaluza: ConfederaciÃ³n de Asociaciones Vecinales de AndalucÃ­a, AAVV y asociaciones de vecinos y vecinas.',
        keywords: ['quiÃ©nes somos', 'ConfederaciÃ³n de Asociaciones Vecinales de AndalucÃ­a', 'participaciÃ³n ciudadana'],
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
          'Directorio de federaciones y entidades federadas de RedVA, AAVV y asociaciones de vecinos y vecinas en AndalucÃ­a.',
        keywords: ['federaciones vecinales', 'entidades federadas', 'directorio AAVV'],
      },
    },
  },
  {
    path: 'decalogo',
    component: Decalogo,
    title: 'DecÃ¡logo - Red Vecinal Andaluza',
    data: {
      seo: {
        title: 'DecÃ¡logo',
        description:
          'DecÃ¡logo de Red Vecinal Andaluza para la unidad del movimiento vecinal andaluz, las AAVV y asociaciones de vecinos y vecinas.',
        keywords: ['decÃ¡logo vecinal', 'movimiento vecinal andaluz', 'unidad vecinal'],
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
    path: 'privacidad',
    component: Privacidad,
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
    component: AvisoLegal,
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

