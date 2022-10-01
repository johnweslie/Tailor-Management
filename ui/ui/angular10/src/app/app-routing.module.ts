import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import{AuthGuardGuard} from './guards/auth-guard.guard';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { EmpRegisterComponent } from './employee/emp-register/emp-register.component';
import {AdminComponent} from './admin/admin.component';
import {Roles} from 'src/_models/Role';
import { EmpdashboardComponent } from './dashboard/empdashboard/empdashboard.component';


const routes: Routes = [
 {path: '', pathMatch: 'full', redirectTo: 'login' },
{path: 'login', component: LoginComponent },
{path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuardGuard]}, 
{path: 'admin',component: AdminComponent, canActivate: [AuthGuardGuard], data: { roles: [Roles.Admin] } },
{path:'employee',component:EmployeeComponent},
{path:'customer', component:CustomerComponent},
{path:'AddEmployee',component:AddEditEmpComponent},
{path:'RegEmployee',component:EmpRegisterComponent},
{path:'Empdashboard',component:EmpdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
