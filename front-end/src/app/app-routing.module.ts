import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchAttendanceComponent } from './pages/search-attendance/search-attendance.component';
import { StudentCreateComponent } from './pages/student-create/student-create.component';
import { StudentEditComponent } from './pages/student-edit/student-edit.component';
import { StudentListComponent } from './pages/student-list/student-list.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },  
  { path: "student-list", component: StudentListComponent },
  { path: "student-create", component: StudentCreateComponent },
  { path: "student-edit/:id", component: StudentEditComponent },
  { path: "attendance-list", component: AttendanceComponent },
  { path: "search-attendance", component: SearchAttendanceComponent },
  { path: "**", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
