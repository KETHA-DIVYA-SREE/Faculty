import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  _id: string = '';
  studentForm: FormGroup;
  constructor( private activeRoute: ActivatedRoute, private router: Router, private userService: StudentService ) {
    this.studentForm = new FormGroup( {
      'name': new FormControl( '', Validators.required ),
      'classInfo': new FormControl( '', Validators.required ),
      'email': new FormControl( '', [Validators.required, Validators.email] ),
      'phoneNumber': new FormControl( '', [Validators.pattern( "^((\\+91-?)|0)?[0-9]{10}$" )] ),
      'semester': new FormControl( '', Validators.required )
    } )
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe( ( paramsData ) => {
      this._id = paramsData['id'];
      this.userService.getUserByID( this._id ).subscribe( ( data ) => {
        console.log( data )
        delete data._id
        this.studentForm.setValue( {
          name: data.name,
          classInfo: data.classInfo,
          email: data.email,
          phoneNumber: data.phoneNumber,
          semester: data.semester
        } )
      } )
    } )
  }
  submitStudent() {
    Object.keys( this.studentForm.controls ).forEach( field => {
      const control = this.studentForm.get( field );
      if ( control instanceof FormControl ) {
        control.markAsTouched( { onlySelf: true } );
      }
    } );
    if ( this.studentForm.valid ) {
      console.log( this.studentForm.value );
      this.userService.updateUserById( this._id, this.studentForm.value ).subscribe( ( data ) => {
        this.router.navigate( ["/student-list"] )
      } )
    }
  }
}