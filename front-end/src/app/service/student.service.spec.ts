import { HttpClient } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { StudentService } from './student.service';

describe('HttpClient testing', () => {
  let service: StudentService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(StudentService);
  });

  it('should be created: StudentService', () => {
    expect(service).toBeTruthy();
  });
});
