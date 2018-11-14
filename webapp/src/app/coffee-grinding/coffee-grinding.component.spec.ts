import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeGrindingComponent } from './coffee-grinding.component';

describe('CoffeeGrindingComponent', () => {
  let component: CoffeeGrindingComponent;
  let fixture: ComponentFixture<CoffeeGrindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeGrindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeGrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
