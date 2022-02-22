import { Component, OnInit } from '@angular/core';
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(public taskservice:TaskService) { }

  ngOnInit(): void {
  }

  showdataonclick(){
    this.taskservice.showdata().subscribe(data=>this.taskservice.tasklist=data,error =>console.log("error",error),
       ()=>console.log("completed"));
  }

}
