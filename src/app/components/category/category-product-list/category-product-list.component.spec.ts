import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductListComponent } from './category-product-list.component';

describe('CategoryProductListComponent', () => {
  let component: CategoryProductListComponent;
  let fixture: ComponentFixture<CategoryProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
