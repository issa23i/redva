import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link each federation dropdown item to its section', () => {
    const laLineaLink: HTMLAnchorElement | null = fixture.nativeElement.querySelector(
      '.nav-dropdown__panel a[href$="/federaciones#lalinea"]',
    );

    expect(laLineaLink).not.toBeNull();
  });

  it('should close and force-hide the dropdown when a menu item is clicked', () => {
    const clickedElement = document.createElement('a');
    spyOn(clickedElement, 'blur');

    (component as any).menuOpen = true;
    (component as any).dropdownClosed = false;
    (component as any).closeMenu({ currentTarget: clickedElement } as unknown as Event);

    expect((component as any).menuOpen).toBeFalse();
    expect((component as any).dropdownClosed).toBeTrue();
    expect(clickedElement.blur).toHaveBeenCalled();
  });
});
