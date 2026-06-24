import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose an accessibility panel trigger', () => {
    const accessibilityButton: HTMLButtonElement | null =
      fixture.nativeElement.querySelector('.footer-link-button');

    expect(accessibilityButton).not.toBeNull();
    expect(accessibilityButton?.textContent?.trim()).toBe('Accesibilidad');
  });
});
