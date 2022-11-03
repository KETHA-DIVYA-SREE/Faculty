import { Component, OnInit } from '@angular/core';
import { student } from '../../model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentList:Array<student> = []
  constructor(private studentService:StudentService) {
   console.log(this.studentList)
  }
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.studentService.getAllUser().subscribe( ( data ) => {
      this.studentList = data
     })
  }
  deleteData( _id: any ) {
    console.log( _id );
    this.studentService.deleteUserById(_id).subscribe((data) => {
      this.loadData()
    })
  }
}
