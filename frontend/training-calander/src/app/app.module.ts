import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingCalenderFormComponent } from './training-calender-form/training-calender-form.component';
import { TrainingCalenderDashboardComponent } from './training-calender-dashboard/training-calender-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingCalenderFormComponent,
    TrainingCalenderDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
