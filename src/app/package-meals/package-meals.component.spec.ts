import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageMealsComponent } from './package-meals.component';

describe('PackageMealsComponent', () => {
  let component: PackageMealsComponent;
  let fixture: ComponentFixture<PackageMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
