import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export interface SeoRouteData {
  readonly title: string;
  readonly description: string;
  readonly keywords?: readonly string[];
}

const siteName = 'Red Vecinal Andaluza';
const defaultKeywords = [
  'Red Vecinal Andaluza',
  'RedVA',
  'AAVV',
  'Asociaciónes de vecinos y vecinas',
  'Asociaciones de vecinos y vecinas',
  'asociaciones vecinales',
  'movimiento vecinal andaluz',
  'Andalucía',
];

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly title = inject(Title);

  init(): void {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(() => {
      const seo = this.getDeepestRoute(this.activatedRoute).snapshot.data['seo'] as SeoRouteData | undefined;

      if (seo) {
        this.update(seo);
      }
    });
  }

  update(seo: SeoRouteData): void {
    const fullTitle = `${seo.title} | ${siteName}`;
    const keywords = [...defaultKeywords, ...(seo.keywords ?? [])].join(', ');
    const canonicalUrl = this.getCanonicalUrl();

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:site_name', content: siteName });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.setCanonical(canonicalUrl);
  }

  private getDeepestRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }

    return route;
  }

  private getCanonicalUrl(): string {
    const path = this.router.url.split('?')[0].split('#')[0];
    return `${this.document.location.origin}${path}`;
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
