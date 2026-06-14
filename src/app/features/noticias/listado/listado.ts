import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { newsArticles } from '../../../shared/redva.data';

@Component({
  selector: 'app-listado',
  imports: [RouterLink],
  templateUrl: './listado.html',
  styleUrl: './listado.scss',
})
export class Listado {
  protected readonly featuredArticle = newsArticles.find((article) => article.featured);
  protected readonly articles = newsArticles.filter((article) => !article.featured);
}
