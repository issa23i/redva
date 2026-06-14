import { Component } from '@angular/core';

@Component({
  selector: 'app-ilp',
  imports: [],
  templateUrl: './ilp.html',
  styleUrl: './ilp.scss',
})
export class Ilp {
  protected readonly heroImage = 'assets/redva/ilp-hero.png';
  protected readonly urbanImage = 'assets/redva/ilp-urban.png';
  protected readonly communityImage = 'assets/redva/ilp-community.png';
  protected readonly collaborators = ['FACUA', 'CCOO', 'UGT', 'Andalucia'];
}
