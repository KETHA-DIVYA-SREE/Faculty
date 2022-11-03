import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../service/attendance.service';
import { attendance, attendanceChart } from '../../model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  d = new Date();
  currMonth = ( this.d.getMonth() + 1 ).toString();
  monthName = this.months[this.d.getMonth()]; // current month
  attendanceData: Array<attendanceChart> = [];
  temp: Array<attendanceChart> = [];
  view: any = [900, 250];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'No. of Students';
  colorScheme = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] };
  constructor( private attendanceservice: AttendanceService ) { }

  ngOnInit(): void {
    this.loadData();
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth/1.5, event.target.innerHeight/1.5];
}

  sortDate( a: any, b: any ) {  //Comparator function for sorting the dates
    if ( a.date < b.date ) return -1;
    if ( a.date > b.date ) return 1;
    return 0;
  }

  loadData() {
    this.attendanceservice.getAll().subscribe( ( data ) => {
      data.sort( this.sortDate )
      data.forEach( ( info ) => {
        let month = info.date.slice( 5, 7 );
        if(month[0] === '0')  month = info.date.slice( 6, 7 );
        if(this.currMonth===month){
          let count=0;
          info.present.forEach( ( present ) => count++ );
          this.temp.push( { "name": info.date, "value": count } )
        }
      })
     })
    this.attendanceData = this.temp;
  }
}
