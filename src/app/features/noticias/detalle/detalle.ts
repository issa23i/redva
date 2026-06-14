import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { newsArticles } from '../../../shared/redva.data';

@Component({
  selector: 'app-detalle',
  imports: [RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.scss',
})
export class Detalle {
  protected readonly article;
  protected readonly relatedArticles;
  protected readonly sidebarImage = 'assets/redva/sidebar-arches.png';

  constructor(route: ActivatedRoute) {
    const slug = route.snapshot.paramMap.get('slug');
    this.article =
      newsArticles.find((candidate) => candidate.slug === slug) ??
      newsArticles.find((candidate) => candidate.slug === 'asamblea-general-nuevas-estrategias') ??
      newsArticles[0];
    this.relatedArticles = newsArticles
      .filter((candidate) => candidate.slug !== this.article.slug)
      .filter((candidate) => !candidate.featured)
      .slice(0, 3);
  }
}
