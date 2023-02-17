import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private empService:EmployeeServiceService,private toastr: ToastrService,private router:Router,private route:ActivatedRoute) { }
  data:any = {
    name:"",
    email:"",
    password:""
  }
  id:any = null;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id){
      this.empService.getUser(this.id).subscribe((res:any)=>{
        this.data.name=res.name
        this.data.email = res.email
      })
    }
    else{
      console.log('Save')
    }
  }

  onSubmit(){
    if(this.id){
      this.empService.updateUser(this.data,this.id).subscribe((res:any)=>{
        this.toastr.success('Record updated successfully!', 'Success');
        this.router.navigate([''])
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Something went wrong!', 'Error');
        
    });
    }
    else{
      this.empService.saveUser(this.data).subscribe((res:any)=>{
        this.toastr.success('Record saved successfully!', 'Success');
        this.router.navigate([''])
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Something went wrong!', 'Error');
        
    });
  }
  }
}
