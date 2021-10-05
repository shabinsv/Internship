import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-coursestatus',
  templateUrl: './coursestatus.component.html',
  styleUrls: ['./coursestatus.component.css']
})
export class CoursestatusComponent implements OnInit {
  student:any=[];
  status:any=[];

  constructor(private http:StudentService) { }

  ngOnInit(): void {
    var status=localStorage.getItem("UserId");
    this.http.status(status).subscribe(data=>{
      this.student=data;
      for(let i=0;i<this.student.length;i++){
        if(!this.student[i].status){
          this.student[i].status='Pending';
        }
      }
      
  })
  }
}
