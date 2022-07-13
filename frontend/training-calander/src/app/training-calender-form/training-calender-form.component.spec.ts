import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCalenderFormComponent } from './training-calender-form.component';

describe('TrainingCalenderFormComponent', () => {
  let component: TrainingCalenderFormComponent;
  let fixture: ComponentFixture<TrainingCalenderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCalenderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingCalenderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
