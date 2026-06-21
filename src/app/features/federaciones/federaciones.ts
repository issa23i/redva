import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  federations,
  latestFederationNews,
  type Federation,
} from '../../shared/redva.data';

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

  protected websiteUrl(website: string): string {
    return /^https?:\/\//i.test(website) ? website : `https://${website}`;
  }

  protected federationFragment(federation: Federation): string {
    const name = federation.name.toLowerCase();

    if (name.includes('al-zahara')) {
      return 'cordoba';
    }

    if (name.includes('caveca')) {
      return 'cadiz';
    }

    if (name.includes('cava')) {
      return 'jaen';
    }

    if (name.includes('solidaridad')) {
      return 'malaga';
    }

    if (name.includes('sevilla')) {
      return 'sevilla';
    }

    if (name.includes('argar')) {
      return 'almeria';
    }

    if (name.includes('flavi')) {
      return 'lalinea';
    }

    return federation.province
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]+/g, '')
      .toLowerCase();
  }
}
