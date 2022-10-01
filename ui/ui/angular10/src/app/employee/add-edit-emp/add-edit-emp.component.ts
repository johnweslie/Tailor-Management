import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() Emp:any;
  UserId:string;
  User_name:string;
  Password:string;
  Role:string;
  Gender:string;
  phone_no:string;
  
  User_DOB:string;
  
  User_Address:string;
  User_Staus:string;

  ngOnInit(): void {
    this.UserId=this.Emp.UserId;
    this.User_name=this.Emp.User_name;
    this.Password=this.Emp.Password;
    this.Role = this.Emp.Role;
    this.Gender = this.Emp.Gender;
    this.phone_no = this.Emp.phone_no;
    
    this.User_DOB = this.Emp.User_DOB;
    
    this.User_Address = this.Emp.User_Address;
    this.User_Staus = this.Emp.User_Staus;

  }

  addEmployee(){
    var val = {UserId:this.UserId,
      User_name:this.User_name,
    Password:this.Password,
    Role: this.Role,
    Gender:this.Gender,
    Phone_no:this.phone_no,
   
    User_DOB: this.User_DOB,
   
    User_Address : this.User_Address,
    User_Staus : 'ACTIVE'
    };
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {UserId:this.UserId,
      User_name:this.User_name,
    Password:this.Password,
    Role: this.Role,
    Gender:this.Gender,
    Phone_no:this.phone_no,
    User_DOB: this.User_DOB,
    User_Address : this.User_Address,
    User_Staus:this.User_Staus
   
    };
    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}

