import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { aboutIntro, newsArticles, socialGoals } from '../../shared/redva.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly aboutIntro = aboutIntro;
  protected readonly goals = socialGoals;
  protected readonly latestNews = newsArticles;
  protected readonly featuredNews = newsArticles.find(
    (article) => article.featured,
  );
  protected readonly heroImage =
    'assets/redva/constitucionredvalandasamblea.jpg';
}
