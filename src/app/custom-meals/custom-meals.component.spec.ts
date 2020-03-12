import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMealsComponent } from './custom-meals.component';

describe('CustomMealsComponent', () => {
  let component: CustomMealsComponent;
  let fixture: ComponentFixture<CustomMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
