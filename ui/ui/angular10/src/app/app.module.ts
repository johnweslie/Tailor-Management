import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


import{MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './Service/auth-service.service';
import {LoginAuthService} from './Service/login-auth.service';
import{AuthGuardGuard} from './guards/auth-guard.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpRegisterComponent } from './employee/emp-register/emp-register.component';
import {PaginationService} from './Service/pagination.service';
import { ShowDeliveredCustomerComponent } from './customer/show-customer/show-delivered-customer/show-delivered-customer.component';
import { ShowInactiveEmpComponent } from './employee/show-emp/show-inactive-emp/show-inactive-emp.component';
import { AdminComponent } from './admin/admin.component';
import { User } from 'src/_models/user';
import { Roles } from 'src/_models/Role';
import { UserServiceService } from './Service/user-service.service';
import {enableProdMode} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EmpdashboardComponent } from './dashboard/empdashboard/empdashboard.component';

import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    CustomerComponent,
    AddCustomerComponent,
    ShowCustomerComponent,
    DashboardComponent,
    LoginComponent,
    EmpRegisterComponent,
    ShowDeliveredCustomerComponent,
    ShowInactiveEmpComponent,
    AdminComponent,
    EmpdashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSnackBarModule,
    
    
  ],
  providers: [SharedService,AuthService,LoginAuthService,AuthGuardGuard,PaginationService,UserServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
enableProdMode();
