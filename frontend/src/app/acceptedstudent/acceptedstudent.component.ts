import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseService } from '../course.service';
import { StudentService } from '../student.service';
import Swal from 'sweetalert2'
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-acceptedstudent',
  templateUrl: './acceptedstudent.component.html',
  styleUrls: ['./acceptedstudent.component.css']
})
export class AcceptedstudentComponent implements OnInit {
  student:any=[];
  course:any=[];
  cour:any=[];
 mail={mail:'',
       subject:'',
      mess:''};


  constructor(private cou:CourseService,private http:StudentService,config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.http.coursestudent().subscribe(data=>{
      this.student=data;
    })
    this.cou.getcourse().subscribe(data=>{
      this.course=data;
     
    })
  }
  open(content) {
    
    this.modalService.open(content, { centered: true });
  }
  message(){
    if(!this.mail.mail){
      Swal.fire({
        
        text: 'Select a course',
        icon: 'warning',
        showConfirmButton: false,
        timer: 1000
      })
    }
    else if(!this.mail.subject){
      Swal.fire({
        
        text: 'Subject not be Empty',
        icon: 'warning',
        showConfirmButton: false,
        timer: 1000
      })
    }
   else if(!this.mail.mess){
      Swal.fire({
        
        text: 'Message not be Empty',
        icon: 'warning',
        showConfirmButton: false,
        timer: 1000
      })
    }
    else{
     
        this.modalService.dismissAll();
      
      this.http.mail(this.mail)
    .subscribe(
      res => {
       console.log(res)
       var x="";
       console.log(x)
       if(res.length===0){
        Swal.fire({
          title: 'Error',
          text: 'No One Applied this course',
          icon: 'error',
          confirmButtonText: 'OK'
        })
       }
       else{
        for(var i=0;i<res.length;i++){
          x +=  res[i].email +'\n' ;
        }
        alert(
          "Message Sent To:\n" 
        + x);
       }
      })
    }
  }

}
