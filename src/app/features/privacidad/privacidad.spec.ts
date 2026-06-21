import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Privacidad } from './privacidad';

describe('Privacidad', () => {
  let component: Privacidad;
  let fixture: ComponentFixture<Privacidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Privacidad],
    }).compileComponents();

    fixture = TestBed.createComponent(Privacidad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should explain cookies and local storage', () => {
    const text = fixture.nativeElement.textContent;

    expect(text).toContain('Cookies y almacenamiento local');
    expect(text).toContain('no utiliza cookies de analítica');
  });
});
