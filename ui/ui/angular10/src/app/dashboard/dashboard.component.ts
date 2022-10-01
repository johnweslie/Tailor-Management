import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/_models/user';
import { AuthService } from '../Service/auth-service.service';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 currentUser:User;
 userFromApi:User[] = [];
 users: User[] = [];
  constructor(
    private userService:UserServiceService,
    private authService:AuthService
  ) {
  this.currentUser=this.authService.currentUserValue;
   }
   
   
   showemployee:boolean=false;
   showcustomer:boolean=true;
  ngOnInit(): void {
    this.userService.getById(this.currentUser.UserId).pipe(first()).subscribe(user=>{
      this.userFromApi = user;
    });
  }
  showcus()
  {
    this.showcustomer=true;
    this.showemployee=false;
  }
  showemp()
  {
    this.showemployee=true;
    this.showcustomer=false;
  }
  

}
