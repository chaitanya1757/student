import { Component, OnInit } from '@angular/core';
import {Posts} from "../model/posts";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(public postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(data => {
      this.postsService.postList = data
    });
  }

}
