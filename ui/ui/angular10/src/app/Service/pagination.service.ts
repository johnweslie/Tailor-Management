import { Injectable } from '@angular/core';  
import { HttpClient,HttpHeaders } from "@angular/common/http";  
import { Observable, Subject } from "rxjs";  
import { customerdtl } from 'src/_models/customer';  
import { catchError } from 'rxjs/operators';

@Injectable()  
export class PaginationService {  
    //Pagination Variables  

    Url = 'http://localhost:53535/Api/Customerdetails/GetCustomer/';  
  constructor(private http:HttpClient) { }  
  GetEmployee():Observable<customerdtl[]>  
  {  
    return this.http.get<customerdtl[]>(this.Url + '/GetCustomer');  
  }
  
  
} 