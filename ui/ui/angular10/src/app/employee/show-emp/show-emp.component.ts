import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  UserList:any=[];

  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  InactiveEmployee:boolean=false;
  Emp:any;

  UserIdFilter:string="";
  UserNameFilter:string="";
  UserListWithoutFilter:any=[];
 

  ngOnInit(): void {
    this.refreshEmpList();
  }
  InactiveClick()
  {
this.ModalTitle="InActive Employee Details";
this.InactiveEmployee=true;
  }

  addClick(){
    this.Emp={
      UserId:0,
      User_name:"",
      
    }
    this.ModalTitle="Add Customer";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item){
    this.Emp=item;
    this.ModalTitle="Edit Customer";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteEmployee(item.UserId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.UserList=data;
      this.UserListWithoutFilter=data;
      this.UserList = this.UserList.filter((dataItem) => dataItem.User_Staus === 'Active')
      
    });
  }

  FilterFn(){
    var UserIdFilter = this.UserIdFilter;
    var UserNameFilter = this.UserNameFilter;

    this.UserList = this.UserListWithoutFilter.filter(function (el){
        return el.UserId.toString().toLowerCase().includes(
          UserIdFilter.toString().trim().toLowerCase()
        )&&
        el.User_name.toString().toLowerCase().includes(
          UserNameFilter.toString().trim().toLowerCase()
        )
        
    });
  }


  

  sortResult(prop,asc){
    this.UserList = this.UserListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}

