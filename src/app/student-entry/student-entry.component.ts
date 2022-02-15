import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Student} from "../student";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {
  studentRefForm = new FormGroup({
    rollno: new FormControl("", [Validators.min(1), Validators.required]),
    name: new FormControl(),
    maths: new FormControl("", [Validators.min(1), Validators.max(100), Validators.required]),
    science: new FormControl("", [Validators.min(1), Validators.required]),
    history: new FormControl("", [Validators.min(1), Validators.required])
  });

  constructor(public studentservice:StudentService) { }

  ngOnInit(): void {
  }

  onsubmitclick(){
    let student = this.studentRefForm.value;
    this.studentservice.student_list.push(new Student(student.rollno,student.name,student.maths,student.science,student.history));
    this.studentRefForm.reset();
  }

}
