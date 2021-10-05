import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-applycourse',
  templateUrl: './applycourse.component.html',
  styleUrls: ['./applycourse.component.css']
})
export class ApplycourseComponent implements OnInit {
  course:any=[]
  student={
    ID:localStorage.getItem("UserId"),
    name:"",
    email:"",
    phonenumber:"",
    dob:"",
    course:"",
    address:"",
    qulification:""
  }


  constructor(private http:CourseService,private router:Router) { }

  ngOnInit(): void {
    this.http.getcourse().subscribe(data=>{
      this.course=data;
    })
  }
  applycourse(){
    this.http.apply(this.student)
    .subscribe((res)=>{
      alert('applied');
      this.router.navigate(['user/coursestatus']);
    })
  }

}
