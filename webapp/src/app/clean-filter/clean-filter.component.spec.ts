import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanFilterComponent } from './clean-filter.component';

describe('CleanFilterComponent', () => {
  let component: CleanFilterComponent;
  let fixture: ComponentFixture<CleanFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
