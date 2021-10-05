import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
  course:any=[]

  constructor(private http:CourseService,public auth:AuthService) { }

  ngOnInit(): void {
    this.http.getcourse().subscribe(data=>{
      this.course=data;
     
    })
  }
  

}
