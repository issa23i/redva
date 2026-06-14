import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Listado } from './listado';

describe('Listado', () => {
  let component: Listado;
  let fixture: ComponentFixture<Listado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listado],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
