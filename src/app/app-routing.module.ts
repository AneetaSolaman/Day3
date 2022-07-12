import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  {path:'',component:LogComponent},
  {path:'course',component:CourseComponent},
  {path:'joinnow',component:JoinnowComponent},
  {path:'about',component:AboutComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
