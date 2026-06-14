import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { latestFederationNews, newsArticles, socialGoals } from '../../shared/redva.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly goals = socialGoals;
  protected readonly latestNews = latestFederationNews;
  protected readonly featuredNews = newsArticles.find((article) => article.featured);
  protected readonly heroImage = 'assets/redva/hero-community.png';
}
