import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { attendance } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  baseUrl = `http://localhost:5000/api/attendance/`;
  attendanceData:Array<attendance> = [];
  constructor(private http:HttpClient) { }

  saveAttendance(attendance:attendance){
    this.attendanceData.push(attendance)
    return this.http.post(this.baseUrl, attendance)
  }
  getAll(){
    return this.http.get<Array<attendance>>(this.baseUrl+'fetch')
  }
}
