import { Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { newsArticles } from '../../../shared/redva.data';

@Component({
  selector: 'app-listado',
  imports: [RouterLink],
  templateUrl: './listado.html',
  styleUrl: './listado.scss',
})
export class Listado implements OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly queryParamSubscription: Subscription;

  protected readonly featuredArticle = newsArticles.find((article) => article.featured);
  protected readonly articles = newsArticles.filter((article) => !article.featured);
  protected readonly pageSize = 6;
  protected currentPage = 1;

  constructor() {
    this.queryParamSubscription = this.route.queryParamMap.subscribe((params) => {
      const requestedPage = Number(params.get('page') ?? 1);
      this.currentPage = this.clampPage(Number.isInteger(requestedPage) ? requestedPage : 1);
    });
  }

  ngOnDestroy(): void {
    this.queryParamSubscription.unsubscribe();
  }

  protected get totalPages(): number {
    return Math.ceil(this.articles.length / this.pageSize);
  }

  protected get pages(): readonly number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  protected get paginatedArticles(): typeof this.articles {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.articles.slice(start, start + this.pageSize);
  }

  protected get previousPage(): number {
    return this.clampPage(this.currentPage - 1);
  }

  protected get nextPage(): number {
    return this.clampPage(this.currentPage + 1);
  }

  protected get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  protected get isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  private clampPage(page: number): number {
    return Math.min(Math.max(page, 1), Math.max(this.totalPages, 1));
  }
}
