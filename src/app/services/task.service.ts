import { Injectable } from '@angular/core';
import {Task} from "../model/task";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public tasklist:Array<Task>=[];
  constructor(public httpclient:HttpClient) { }

  showdata():Observable<any>{
    /*this.httpclient.get("https://jsonplaceholder.typicode.com/todos")
       .subscribe(data=>console.log(data),error => console.log(error),()=>console.log("data fetching is completed"));*/
    /*this.httpclient.get("https://jsonplaceholder.typicode.com/todos")
      .subscribe(data=>this.tasklist=data,error => console.log(error),()=>console.log("data fetching is completed"))
    */
    return this.httpclient.get("https://jsonplaceholder.typicode.com/todos");
  }
}
