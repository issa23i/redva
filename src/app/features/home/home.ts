import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CeavCallout } from '../../shared/ceav-callout/ceav-callout';
import { aboutIntro, latestFederationNews, newsArticles, socialGoals } from '../../shared/redva.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CeavCallout],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly aboutIntro = aboutIntro;
  protected readonly goals = socialGoals;
  protected readonly latestNews = latestFederationNews;
  protected readonly featuredNews = newsArticles.find((article) => article.featured);
  protected readonly heroImage = 'assets/redva/hero-community.png';
}
