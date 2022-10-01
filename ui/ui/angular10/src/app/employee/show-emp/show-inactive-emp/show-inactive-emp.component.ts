import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-inactive-emp',
  templateUrl: './show-inactive-emp.component.html',
  styleUrls: ['./show-inactive-emp.component.css']
})
export class ShowInactiveEmpComponent implements OnInit {
  UserList:any=[];

  ModalTitle:string;

  InactiveEmployee:boolean=false;
  Emp:any;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshEmpList();
  }
  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.UserList=data;
    
      this.UserList = this.UserList.filter((dataItem) => dataItem.User_Staus === 'InActive')
      
    });
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
    this.InactiveEmployee=false;
    this.refreshEmpList();
  }


}
