import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Posts} from "../model/posts";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public postList: Array<Posts>=[];
  constructor(public http:HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
