import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAttendanceComponent } from './search-attendance.component';

describe('SearchAttendanceComponent', () => {
  let component: SearchAttendanceComponent;
  let fixture: ComponentFixture<SearchAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAttendanceComponent ],
      imports: [HttpClientModule],
      providers: [DatePipe],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
