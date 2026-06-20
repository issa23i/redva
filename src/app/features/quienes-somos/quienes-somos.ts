import { Component } from '@angular/core';
import { aboutIntro, aboutSections, aboutStats, socialGoals } from '../../shared/redva.data';

@Component({
  selector: 'app-quienes-somos',
  imports: [],
  templateUrl: './quienes-somos.html',
  styleUrl: './quienes-somos.scss',
})
export class QuienesSomos {
  protected readonly intro = aboutIntro;
  protected readonly sections = aboutSections;
  protected readonly stats = aboutStats;
  protected readonly goals = socialGoals;
  protected readonly heroImage = 'assets/redva/hero-community.png';
}
