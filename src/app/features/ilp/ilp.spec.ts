import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ilp } from './ilp';

describe('Ilp', () => {
  let component: Ilp;
  let fixture: ComponentFixture<Ilp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ilp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ilp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
