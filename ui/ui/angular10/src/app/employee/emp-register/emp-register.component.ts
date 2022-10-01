import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.css']
})
export class EmpRegisterComponent implements OnInit {
  UserId:string;
  User_name:string;
  Password:string;
  Role:string;
  Gender:string;
  phone_no:string;
  
  User_DOB:string;
  
  User_Address:string;
  User_Staus:string;
  constructor(
    private router:Router,
    private service:SharedService) { }

  ngOnInit(): void {
    
  }
  addEmployee(){
    var val = {
      
      User_name:this.User_name,
    Password:this.Password,
    Role: this.Role,
    Gender:this.Gender,
    Phone_no:this.phone_no,
   
    User_DOB: this.User_DOB,
   
    User_Address : this.User_Address,
    User_Staus : 'Active'
    };
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
      this.router.navigate(['/login']);   

    });
    
  }
  cancel(){
    this.router.navigate(['/login']);   
  }

}
