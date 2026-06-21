import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { newsArticles } from '../../../shared/redva.data';
import { Detalle } from './detalle';

describe('Detalle', () => {
  let component: Detalle;
  let fixture: ComponentFixture<Detalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalle],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render a fixed sidebar image above related news', () => {
    const standaloneSidebarImage: HTMLImageElement | null =
      fixture.nativeElement.querySelector('.article-sidebar > img');

    expect(standaloneSidebarImage).toBeNull();
  });

  it('should render the first related news thumbnail in the sidebar', () => {
    const expectedArticle = newsArticles.find((article) => !article.featured) ?? newsArticles[0];
    const firstRelatedImage: HTMLImageElement | null =
      fixture.nativeElement.querySelector('.article-sidebar > .article-sidebar__image-link img');

    expect(firstRelatedImage).not.toBeNull();
    expect(firstRelatedImage?.getAttribute('src')).toBe(expectedArticle.image);
    expect(firstRelatedImage?.getAttribute('alt')).toBe(expectedArticle.title);
  });
});
