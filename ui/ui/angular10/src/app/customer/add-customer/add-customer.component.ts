import { Component, OnInit, Input} from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  loginForm!: FormGroup; 
  constructor(private service:SharedService, private formBuilder : FormBuilder  ) { }

  @Input() Cus:any;
  CustomerId:string;
  Customer_name:string;
  Age:string;
  Gender:string;
  Phone_no:string;
  Material:string;
  Measurement:string;
  Booking_date:string;
  Delivery_date:string;
  Customer_address:string;
  Customer_status:string;

  ngOnInit(): void {
    this.CustomerId=this.Cus.CustomerId;
    this.Customer_name=this.Cus.Customer_name;
    this.Age=this.Cus.Age;
    this.Gender = this.Cus.Gender;
    this.Phone_no = this.Cus.Phone_no;
    this.Material = this.Cus.Material;
    this.Measurement = this.Cus.Measurement;
    this.Booking_date = this.Cus.Booking_date;
    this.Delivery_date = this.Cus.Delivery_date;
    this.Customer_address = this.Cus.Customer_address;
    this.Customer_status = this.Cus.Customer_status;

    this.formvalidate();

  }

formvalidate()
{
  this.loginForm = this.formBuilder.group({  
  Customer_name: ['', Validators.required],
    Age: ['', Validators.required],
    Gender: ['', Validators.required],
    Phone_no : ['', Validators.required],
    Material : ['', Validators.required],
    Measurement : ['', Validators.required],
    Booking_date : ['', Validators.required],
    Delivery_date : ['', Validators.required],
    Customer_address : ['', Validators.required],
    Customer_status : ['', Validators.required],
  });

}

  addCustomer(){
    var val = {CustomerId:this.CustomerId,
      Customer_name:this.Customer_name,
    Age:this.Age,
    Gender:this.Gender,
    Phone_no:this.Phone_no,
    Material: this.Material,
    Measurement: this.Measurement,
    Booking_date: this.Booking_date,
    Delivery_date : this.Delivery_date,
    Customer_address : this.Customer_address,
    Customer_status : 'PROCESSING'
    };
    this.service.addCustomer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCustomer(){
    var val = {CustomerId:this.CustomerId,
      Customer_name:this.Customer_name,
    Age:this.Age,
    Gender:this.Gender,
    Phone_no:this.Phone_no,
    Material: this.Material,
    Measurement: this.Measurement,
    Booking_date: this.Booking_date,
    Delivery_date : this.Delivery_date,
    Customer_address : this.Customer_address,
    Customer_status:this.Customer_status
   
    };
    this.service.updateCustomer(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
