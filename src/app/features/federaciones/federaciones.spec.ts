import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Federaciones } from './federaciones';

describe('Federaciones', () => {
  let component: Federaciones;
  let fixture: ComponentFixture<Federaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Federaciones],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Federaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render federation cards with stable section ids', () => {
    const laLineaCard: HTMLElement | null = fixture.nativeElement.querySelector('#lalinea');

    expect(laLineaCard).not.toBeNull();
  });

  it('should render federation websites as external links', () => {
    const websiteLink: HTMLAnchorElement | null = fixture.nativeElement.querySelector(
      '.federation-card .meta a[href="https://www.al-zahara.com"]',
    );

    expect(websiteLink).not.toBeNull();
    expect(websiteLink?.textContent?.trim()).toBe('www.al-zahara.com');
    expect(websiteLink?.target).toBe('_blank');
    expect(websiteLink?.rel).toContain('noopener');
  });
});
