import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course={
    title:"",
    duration:"",
    des:"",
    venue:"",
    start:"",
    end:""
  }

  constructor(private http:CourseService,private router:Router) { }

  ngOnInit(): void {
  }
  addcourse(){
    this.http.addcourse(this.course)
    .subscribe((res)=>{
      Swal.fire({
        icon: 'success',
        title: 'Course Added',
        showConfirmButton: false,
        timer: 2500
      })
       setTimeout(() => {
         this.router.navigate(['teacher/coursedetails'])
       }, 2501);
    })
  }

}
