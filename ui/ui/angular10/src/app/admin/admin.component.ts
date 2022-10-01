import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from 'src/_models/user';
import {UserServiceService} from '../Service/user-service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserServiceService) {}

  ngOnInit() {
      this.userService.GetAllUserNames().pipe(first()).subscribe(users => { 
          this.users = users; 
      });
  }

}
