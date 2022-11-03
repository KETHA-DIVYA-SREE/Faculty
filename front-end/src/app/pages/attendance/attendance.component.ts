import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { student, attendance } from '../../model';
import { StudentService } from '../../service/student.service';
import { AttendanceService } from '../../service/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  studentList:Array<student> = []
  saved:boolean=false;
  currDate=new Date().toISOString().slice(0,10);
  date=this.currDate;
  attendanceForm:FormGroup;
  presentData:attendance={
    "date":"",
    "present":[]
  };
  presentStudents:Array<student>=[];

  constructor(private studentService:StudentService, private attendanceservice: AttendanceService,public datepipe:DatePipe,private router:Router) {
  console.log(this.studentList)
  console.log(this.date);
  this.attendanceForm= new FormGroup({
    attendancedate: new FormControl(),
  });
  }
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.saved=false;
    this.presentStudents=[];
     this.studentService.getAllUser().subscribe((data)=>{
       this.studentList=data;
     })
  }
  changeDate(){
    this.loadData();
  }

  changeStatus(event:any,student:student){
    console.log(this.presentStudents)
    if(event.checked){
      this.presentStudents.push(student);
      console.log(this.presentStudents)
    }
    else{
      for(let i=0;i<this.presentStudents.length;i++)
      {
        if(this.presentStudents[i]==student)
        {
          this.presentStudents.splice(i,1);
          console.log(this.presentStudents)
          return;
        }
      }
    }
 }
 saveAttendance(){
  this.presentData={
    "date":this.date,
    "present":this.presentStudents
  }
   this.attendanceservice.saveAttendance(this.presentData).subscribe((data) => {
     this.saved=true;
   }, () => {
     alert("Something Went Wrong")
   })
 }
}
