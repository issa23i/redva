import { Routes } from '@angular/router';
import { Federaciones } from './features/federaciones/federaciones';
import { Home } from './features/home/home';
import { Ilp } from './features/ilp/ilp';
import { Detalle } from './features/noticias/detalle/detalle';
import { Listado } from './features/noticias/listado/listado';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Red Vecinal Andaluza - Inicio',
  },
  {
    path: 'quienes-somos',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'federaciones',
    component: Federaciones,
    title: 'Federaciones - RedVA',
  },
  {
    path: 'ilp-vivienda',
    component: Ilp,
    title: 'ILP Vivienda - RedVA',
  },
  {
    path: 'decalogo',
    redirectTo: '',
    pathMatch: 'full',
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
      },
      {
        path: ':slug',
        component: Detalle,
        title: 'Detalle de Noticia - RedVA',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
