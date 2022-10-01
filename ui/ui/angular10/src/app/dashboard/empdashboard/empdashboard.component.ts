import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/_models/user';
import { AuthService } from 'src/app/Service/auth-service.service';
import { UserServiceService } from 'src/app/Service/user-service.service';


@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {
  currentUser:User;
  userFromApi:User[] = [];
  users: User[] = [];
   constructor(
     private userService:UserServiceService,
     private authService:AuthService
   ) {
   this.currentUser=this.authService.currentUserValue;
    }
    
    showcustomer:boolean=true;
   ngOnInit(): void {
     this.userService.getById(this.currentUser.UserId).pipe(first()).subscribe(user=>{
       this.userFromApi = user;
     });
   }
   showcus()
   {
     this.showcustomer=true;
     
   }

}
