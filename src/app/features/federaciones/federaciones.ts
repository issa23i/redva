import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  federationFragment,
  federations,
  latestFederationNews,
  type Federation,
} from '../../shared/redva.data';
import { CeavCallout } from '../../shared/ceav-callout/ceav-callout';

@Component({
  selector: 'app-federaciones',
  imports: [RouterLink, CeavCallout],
  templateUrl: './federaciones.html',
  styleUrl: './federaciones.scss',
})
export class Federaciones {
  protected readonly federations = federations;
  protected readonly latestNews = latestFederationNews;
  protected readonly heroImage = 'assets/redva/hero-community.png';

  protected websiteUrl(website: string): string {
    return /^https?:\/\//i.test(website) ? website : `https://${website}`;
  }

  protected federationFragment(federation: Federation): string {
    return federationFragment(federation);
  }
}
