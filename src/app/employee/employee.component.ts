import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService:EmployeeServiceService,private router:Router) { }
  userData:any=[];
  ngOnInit(){
    
    this.empService.getUsers().subscribe((res:any)=>{
      console.log(res);
    this.userData = res;
    })
  }

  createser(){
    this.router.navigate(['create'])
  }

  editUser(id:any){
    this.router.navigate([`edit/${id}`]);
  }
}
