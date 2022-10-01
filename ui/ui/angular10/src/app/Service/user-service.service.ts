import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  readonly APIUrl="http://localhost:53535/api/Userdetails";
  constructor(private http: HttpClient) { }

  GetAllUserNames() {
      return this.http.get<User[]>(this.APIUrl+'/GetAllUserNames');
  }

  getById(UserId: number) {
      return this.http.get<User[]>(this.APIUrl+'/getById/'+UserId);
  }
  
}
