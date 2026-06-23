import { Component } from '@angular/core';

@Component({
  selector: 'app-ilp',
  imports: [],
  templateUrl: './ilp.html',
  styleUrl: './ilp.scss',
})
export class Ilp {
  protected readonly heroImage = 'assets/redva/ilp_registro.jpg';
  protected readonly urbanImage = 'assets/redva/ilp-urban.png';
  protected readonly communityImage = 'assets/redva/ilp-community.png';
  protected readonly collaborators = [
    {
      image: 'assets/redva/facuaand.png',
      alt: 'Logo de FACUA Andalucía Consumidores en Acción',
      url: 'https://facua.org/noticias/facua-andalucia-registra-en-el-parlamento-junto-a-otras-organizaciones-sociales-la-ilp-para-garantizar-el-derecho-efectivo-a-la-vivienda/',
    },
    {
      image: 'assets/redva/ccooand.png',
      alt: 'Logo de CCOO Andalucía',
      url: 'https://andalucia.ccoo.es/noticia:756029',
    },
    {
      image: 'assets/redva/ugtand.png',
      alt: 'Logo de UGT Andalucía',
      url: 'https://www.ugt-andalucia.com/w/ugt-andalucia-y-organizaciones-sociales-registran-en-el-parlamento-una-ilp-para-garantizar-el-derecho-a-la-vivienda',
    },
    {
      image: 'assets/redva/logo_pah.jpg',
      alt: 'Logo de la Plataforma de Afectadas por la Hipoteca',
      url: 'https://afectadosporlahipoteca.com/',
    },
  ];
}
