import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { student, attendance } from '../../model';
import { StudentService } from '../../service/student.service';
import { AttendanceService } from '../../service/attendance.service';

@Component({
  selector: 'app-search-attendance',
  templateUrl: './search-attendance.component.html',
  styleUrls: ['./search-attendance.component.scss']
})
export class SearchAttendanceComponent implements OnInit {
  presentStudentList:Array<student> = []
  currDate=new Date().toISOString().slice(0,10);
  date=this.currDate;
  searchForm:FormGroup;
  constructor(private studentService:StudentService, private attendanceservice: AttendanceService,public datepipe:DatePipe,private router:Router) {
  this.searchForm= new FormGroup({
    attendancedate: new FormControl(),
    // statusall:new FormControl()
  });
  }
  ngOnInit(): void {
    this.loadData();
  }
  
  loadData(){
    this.presentStudentList= [];
     this.attendanceservice.getAll().subscribe((data)=>{
      data.forEach((student)=>{
        if(student.date==this.date){
          console.log(student);
          student.present.forEach((studentdata) => {
            this.presentStudentList.push(studentdata);
          });
        }
      })
     })
  }
  changeDate(){
    this.loadData();
  }
}
