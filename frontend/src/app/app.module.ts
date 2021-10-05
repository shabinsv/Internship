import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { TeacherComponent } from './teacher/teacher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import { UserheaderComponent } from './userheader/userheader.component';
import { UsersidenavComponent } from './usersidenav/usersidenav.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { ApplycourseComponent } from './applycourse/applycourse.component';
import { ProfessorsidenavComponent } from './professorsidenav/professorsidenav.component';
import { ProfessorheaderComponent } from './professorheader/professorheader.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AcceptedstudentComponent } from './acceptedstudent/acceptedstudent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursestatusComponent } from './coursestatus/coursestatus.component';
import { AuthService } from './auth.service';
import { CourseService } from './course.service';
import { StudentService } from './student.service';
import { UserService } from './user.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    TeacherComponent,
    UserheaderComponent,
    UsersidenavComponent,
    CoursedetailsComponent,
    ApplycourseComponent,
    ProfessorsidenavComponent,
    ProfessorheaderComponent,
    AddcourseComponent,
    StudentlistComponent,
    AcceptedstudentComponent,
    CoursestatusComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    NgbModule
  ],
  providers: [AuthService,CourseService,StudentService,UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
