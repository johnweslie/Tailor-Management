import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router ,ActivatedRoute} from '@angular/router';  
import { AuthService } from '../Service/auth-service.service';
import {LoginAuthService} from '../Service/login-auth.service';
import { SharedService } from '../shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 model : any={};    
    
//   errorMessage!:string;    
//   Password: boolean = false;
//   loginForm!: FormGroup;  
//   message!: string;  
//   returnUrl!: string;  
// User_name!:string;

// ModalTitle:string;
//   ActivateAddEditEmpComp:boolean=false;
//   Emp:any;
// UserList:any=[];

//   constructor(
//     private router:Router,
//     private LoginAuthService:LoginAuthService,
//     private authService: AuthService,
//     private service:SharedService,
//     private formBuilder : FormBuilder  
  
  
//   ) { }
  

//   ngOnInit() {

//     this.loginForm = this.formBuilder.group({  
//       User_name: ['', Validators.required],  
//       Password: ['', Validators.required]  
//     });  
//     this.returnUrl = '/dashboard';  
//     this.authService.logout();  
    
//   }

//   togglePassword() {
//     this.Password = !this.Password;
//   }
//   get f() { return this.loginForm.controls; }  

//   onLogin()
//   {
    
//     //const token = this.authService.authUser(loginForm.value)
//     debugger;    
//     this.LoginAuthService.Login(this.model).subscribe(    
//       data => {    
//         debugger;    
//         if(data.Status=="Success")    
//         { 
//           localStorage.setItem('isLoggedIn', "true");   
//           localStorage.setItem('token', this.f['User_name'].value && this.f['Password'].value);  
//           //localStorage.setItem('token',token.User_name)     
//           this.router.navigate(['/dashboard']);    
//           alert('Login Successfuly');
//           debugger;    
//         }    
//         else{    
//           alert("Please Enter Valid Username & Password");
//         }    
//       },    
//       error => {    
//         this.errorMessage = error.message;    
//       });    
//   };    

loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    errorMessage: string;
    password: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthService,
        private LoginAuthService:LoginAuthService,
        public snackBar: MatSnackBar,
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) { 
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            User_name: [null, [Validators.required]],
            Password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
          });
      
          sessionStorage.removeItem('User_name');
          sessionStorage.clear();
    }
    togglePassword() {
        this.password = !this.password;
      }

    // convenience getter for easy access to form fields
    

    login() 
    {
        debugger;
        this.LoginAuthService.Login(this.model).subscribe(
            data => {
                debugger;
              if (data.Status == "Success" && data.Role=="Admin") {
                this.router.navigate(['/dashboard']);
                let snackBarRef = this.snackBar.open('loggedin Successfully!',
            'Got it!', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right'
              
            });
            debugger;
              }
              else {
                this.errorMessage = data.Message;
              }
              
            },
            error => {
              this.errorMessage = error.message;
            });

            debugger;
        this.LoginAuthService.AdminLogin(this.model).subscribe(
            data => {
                debugger;
              if (data.Status == "Success" && data.Role=="Employee") {
                this.router.navigate(['/Empdashboard']);
                let snackBarRef = this.snackBar.open('loggedin Successfully!',
            'Got it!', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right'
              
            });
            debugger;
              }
              else {
                this.errorMessage = data.Message;
              }
              
            },
            error => {
              this.errorMessage = error.message;
            });
  
    }
              
}
