import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentViewComponent } from './student-view/student-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TaskComponent } from './task/task.component';
import {HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentViewComponent,
    TaskComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
