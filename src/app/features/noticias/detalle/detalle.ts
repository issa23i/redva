import { Component, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { newsArticles, type NewsArticle } from '../../../shared/redva.data';
import { SeoService } from '../../../shared/seo.service';

@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.html',
  styleUrl: './detalle.scss',
})
export class Detalle implements OnDestroy {
  private readonly publicBaseUrl = 'https://redvecinalandaluza.org';
  protected article: NewsArticle = newsArticles[0];
  protected relatedArticles: readonly NewsArticle[] = [];
  private readonly routeParamSubscription: Subscription;

  constructor(
    route: ActivatedRoute,
    private readonly router: Router,
    private readonly seo: SeoService,
    private readonly viewportScroller: ViewportScroller,
  ) {
    this.routeParamSubscription = route.paramMap.subscribe((params) => {
      this.setArticle(params.get('slug'));
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  ngOnDestroy(): void {
    this.routeParamSubscription.unsubscribe();
  }

  protected get firstRelatedArticle(): NewsArticle | undefined {
    return this.relatedArticles[0];
  }

  protected get articleShareUrl(): string {
    return `${this.publicBaseUrl}/noticias/${this.article.slug}`;
  }

  protected get encodedArticleShareUrl(): string {
    return encodeURIComponent(this.articleShareUrl);
  }

  protected get encodedArticleTitle(): string {
    return encodeURIComponent(this.article.title);
  }

  protected get encodedArticleShareText(): string {
    return encodeURIComponent(`${this.article.title}\n\n${this.article.excerpt}`);
  }

  protected printArticle(): void {
    window.print();
  }

  protected openArticle(event: Event, article: NewsArticle): void {
    event.preventDefault();
    this.setArticle(article.slug);
    void this.router.navigate(['/noticias', article.slug]);
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  private setArticle(slug: string | null): void {
    this.article =
      newsArticles.find((candidate) => candidate.slug === slug) ??
      newsArticles.find((candidate) => candidate.featured) ??
      newsArticles[0];
    this.relatedArticles = newsArticles
      .filter((candidate) => candidate.slug !== this.article.slug)
      .slice(0, 3);
    this.seo.update({
      title: this.article.title,
      description: this.article.excerpt,
      keywords: [this.article.category, this.article.province ?? 'Andalucia', 'noticias AAVV'],
    });
  }
}
