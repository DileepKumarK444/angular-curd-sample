import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService:EmployeeServiceService,private router:Router,private toastr: ToastrService) { }
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

  deleteUser(id:any){
    this.empService.deleteUser(id).subscribe((res)=>{
      if(res?._id==id)
      {
        this.toastr.success('Record deleted successfully','Success')
        this.ngOnInit();
      }
      else{

        this.toastr.error('Something went wrong','Error');
      }
      
    })
  }
}
