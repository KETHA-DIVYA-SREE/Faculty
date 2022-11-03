import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './include/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentCreateComponent } from './pages/student-create/student-create.component';
import { StudentEditComponent } from './pages/student-edit/student-edit.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { SearchAttendanceComponent } from './pages/search-attendance/search-attendance.component';
import { FooterComponent } from './include/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CardComponent } from './pages/card/card.component';
import { ChartComponent } from './pages/chart/chart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    StudentListComponent,
    StudentCreateComponent,
    StudentEditComponent,
    AttendanceComponent,
    SearchAttendanceComponent,
    FooterComponent,
    CardComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    NgxChartsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
