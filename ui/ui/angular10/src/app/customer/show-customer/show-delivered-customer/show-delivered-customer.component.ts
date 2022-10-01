import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { Data } from '@angular/router';
import {PaginationService} from 'src/app/Service/pagination.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-delivered-customer',
  templateUrl: './show-delivered-customer.component.html',
  styleUrls: ['./show-delivered-customer.component.css']
})
export class ShowDeliveredCustomerComponent implements OnInit {
  dataSource: any;
  constructor(private service:SharedService,public paginationService: PaginationService, public http: HttpClient) { }

CustomerList:any=[];



ModalTitle:string;

showdeliveredcustomer:boolean=false;
Cus:any;

CustomerIdFilter:string="";
CustomerNameFilter:string="";
CustomerListWithoutFilter:any=[];

ngOnInit(): void {
  this.refreshCusList();
  
  
}

deleteClick(item){
  if(confirm('Are you sure??')){
    this.service.deleteCustomer(item.CustomerId).subscribe(data=>{
      alert(data.toString());
      this.refreshCusList();
    })
  }
}
Showdelevered()
{
  this.ModalTitle="Deliverd Customer Details"
  this.showdeliveredcustomer=true;
}


closeClick(){
  this.showdeliveredcustomer=false;
  this.refreshCusList();
}


refreshCusList(){
  this.service.getCustomerList().subscribe(data=>{
    this.CustomerList=data;
    this.CustomerListWithoutFilter=data;
    this.CustomerList = this.CustomerList.filter((dataItem) => dataItem.Customer_status === 'DELIVERED')
 
  });
}

FilterFn(){
  var CustomerIdFilter = this.CustomerIdFilter;
  var CustomerNameFilter = this.CustomerNameFilter;
  

  this.CustomerList = this.CustomerListWithoutFilter.filter(function (el){
      return el.CustomerId.toString().toLowerCase().includes(
        CustomerIdFilter.toString().trim().toLowerCase()
      )&&
      el.Customer_name.toString().toLowerCase().includes(
        CustomerNameFilter.toString().trim().toLowerCase()
      )
      
  });
  
}

sortResult(prop,asc){
  this.CustomerList = this.CustomerListWithoutFilter.sort(function(a,b){
    if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
    }else{
      return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
    }
  })
}


}
