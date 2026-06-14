import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Federaciones } from './federaciones';

describe('Federaciones', () => {
  let component: Federaciones;
  let fixture: ComponentFixture<Federaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Federaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Federaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
