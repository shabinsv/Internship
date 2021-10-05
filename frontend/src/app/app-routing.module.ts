import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptedstudentComponent } from './acceptedstudent/acceptedstudent.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ApplycourseComponent } from './applycourse/applycourse.component';
import { AuthGuard } from './auth.guard';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CoursestatusComponent } from './coursestatus/coursestatus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'user',canActivate:[AuthGuard],component:UserComponent,
children:[{path:'',component:CoursedetailsComponent},
{path:'coursedetails',component:CoursedetailsComponent},
{path:'applycourse',component:ApplycourseComponent},
{path:'coursestatus',component:CoursestatusComponent}]},
{path:'teacher',canActivate:[AuthGuard],component:TeacherComponent,
children:[{path:'',component:CoursedetailsComponent},
{path:'coursedetails',component:CoursedetailsComponent},
{path:'addcourse',component:AddcourseComponent},
{path:'studentlist',component:StudentlistComponent},
{path:'acceptstudent',component:AcceptedstudentComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

