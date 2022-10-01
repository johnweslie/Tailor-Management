import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:53535/api";
readonly PhotoUrl = "http://localhost:53535/Photos/";
private url = "";  

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }


/**?Customer API */

  getCustomerList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Memberdetails');
  }

  addCustomer(val:any){
    return this.http.post(this.APIUrl+'/Memberdetails',val);
  }

  updateCustomer(val:any){
    return this.http.put(this.APIUrl+'/Memberdetails',val);
  }

  deleteCustomer(val:any){
    return this.http.delete(this.APIUrl+'/Memberdetails/'+val);
  }



  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Userdetails');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Userdetails',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Userdetails',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Userdetails/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }


  getAllCustomer(pageNo,pageSize,sortOrder): Observable<any> {  
    
        this.url = "http://localhost:53535/api/Pagination/getAllCustomer?pageNo=" + pageNo+'&pageSize='+pageSize+'&sortOrder='+sortOrder;  
    
        return this.http.get(this.url);  
    
      }  
    
      
    
      getAllCustomerCount(): Observable<any> {  
    
        this.url = "http://localhost:53535/api/Pagination/getAllCustomerCount";  
    
        return this.http.get(this.url);  
    
      }  
    
    


}
