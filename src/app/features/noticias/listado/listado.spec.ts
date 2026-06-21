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

  it('should expose only existing news pages', () => {
    expect((component as any).pages).toEqual([1]);
  });

  it('should show the first page of articles by default', () => {
    expect((component as any).paginatedArticles.length).toBe((component as any).articles.length);
    expect((component as any).currentPage).toBe(1);
  });

  it('should hide pagination when there is only one page', () => {
    const pagination = fixture.nativeElement.querySelector('.pagination');

    expect(pagination).toBeNull();
  });
});
