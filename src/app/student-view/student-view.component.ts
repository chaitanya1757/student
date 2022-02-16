import { Component, OnInit } from '@angular/core';
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  constructor(public studentservice:StudentService) { }

  ngOnInit(): void {
  }

}
