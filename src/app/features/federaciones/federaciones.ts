import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { federations, latestFederationNews } from '../../shared/redva.data';

@Component({
  selector: 'app-federaciones',
  imports: [RouterLink],
  templateUrl: './federaciones.html',
  styleUrl: './federaciones.scss',
})
export class Federaciones {
  protected readonly federations = federations;
  protected readonly latestNews = latestFederationNews;
  protected readonly heroImage = 'assets/redva/hero-community.png';
  protected readonly ceavLogo = 'assets/redva/logo-ceav.png';
}
