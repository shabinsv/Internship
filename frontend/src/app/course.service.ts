import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  service_address:string='http://localhost:3000';

  constructor(private http:HttpClient) { }
  addcourse(course:any){
    return this.http.post<any>(`${this.service_address}/addcourse`,course)
  }
  getcourse(){
    return this.http.get(`${this.service_address}/course`)
  }
  apply(student:any){
    return this.http.post<any>(`${this.service_address}/apply`,student)
  }
}
