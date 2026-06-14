import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decalogo } from './decalogo';

describe('Decalogo', () => {
  let component: Decalogo;
  let fixture: ComponentFixture<Decalogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decalogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decalogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
