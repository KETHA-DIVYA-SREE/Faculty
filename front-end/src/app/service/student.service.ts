import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from '../model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl = `http://localhost:5000/api/student/`;
  studentData:Array<student> = [];
  constructor(private http:HttpClient) { }

  saveStudent( student: student ) {
    console.log( student );
    this.studentData.push(student)
    return this.http.post(this.baseUrl, student)
  }

  getAllUser(){
    return this.http.get<Array<student>>(this.baseUrl+`fetch`)
  }

  getUserByID(id:string){
    return this.http.get<student>(this.baseUrl+`fetchById/?studentId=${id}`)
  }

  updateUserById(studentId:string,userdata:student){
    return this.http.put(this.baseUrl+`edit/?studentId=${studentId}`,userdata)
  }

  deleteUserById(studentId:string){
    return this.http.delete(this.baseUrl+`delete/?studentId=${studentId}`)
  }
}
