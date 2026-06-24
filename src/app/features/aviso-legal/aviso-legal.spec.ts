import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AvisoLegal } from './aviso-legal';

describe('AvisoLegal', () => {
  let component: AvisoLegal;
  let fixture: ComponentFixture<AvisoLegal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisoLegal],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoLegal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should identify RedVA as the website owner', () => {
    const text = fixture.nativeElement.textContent;

    expect(text).toContain('RED VECINAL ANDALUZA');
    expect(text).toContain('Confederación de Federaciones territoriales');
  });
});
