import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  Url :string;  
  token!: string;  
  header : any;  
  constructor(private http : HttpClient) {   
  
    this.Url = 'http://localhost:53535/api/login/';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  Login(model : any){  
    debugger;  
    //  var a =this.Url+'Login';  
   return this.http.post<any>(this.Url+'Login',model,{ headers: this.header});  
   
  } 
  AdminLogin(model : any){  
    debugger;  
    //  var a =this.Url+'Login';  
   return this.http.post<any>(this.Url+'AdminLogin',model,{ headers: this.header});  
   
  } 
     
   
}
