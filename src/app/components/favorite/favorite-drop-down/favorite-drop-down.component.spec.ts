import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteDropDownComponent } from './favorite-drop-down.component';

describe('FavoriteDropDownComponent', () => {
  let component: FavoriteDropDownComponent;
  let fixture: ComponentFixture<FavoriteDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
