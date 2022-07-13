import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingCalenderDashboardComponent } from './training-calender-dashboard/training-calender-dashboard.component';
import { TrainingCalenderFormComponent } from './training-calender-form/training-calender-form.component';

const routes: Routes = [
  {
    path:'admin',
    component:TrainingCalenderDashboardComponent
  },
  {
    path:'training/form',
    component:TrainingCalenderFormComponent,
    children:[
      {
        path:"dashboard",
        component:TrainingCalenderDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
