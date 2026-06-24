import { Component } from '@angular/core';
import { decalogueIntro, decaloguePoints, decaloguePublicSystem } from '../../shared/redva.data';

@Component({
  selector: 'app-decalogo',
  imports: [],
  templateUrl: './decalogo.html',
  styleUrl: './decalogo.scss',
})
export class Decalogo {
  protected readonly intro = decalogueIntro;
  protected readonly publicSystem = decaloguePublicSystem;
  protected readonly points = decaloguePoints;
  protected readonly heroImage = 'assets/redva/sidebar-arches.png';
}
