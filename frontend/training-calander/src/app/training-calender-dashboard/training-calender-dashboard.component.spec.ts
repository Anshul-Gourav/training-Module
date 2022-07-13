import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCalenderDashboardComponent } from './training-calender-dashboard.component';

describe('TrainingCalenderDashboardComponent', () => {
  let component: TrainingCalenderDashboardComponent;
  let fixture: ComponentFixture<TrainingCalenderDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCalenderDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingCalenderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
