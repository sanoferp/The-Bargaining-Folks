import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;

  // Used to show that attempt was unsuccessful
  invalidLogin: boolean = false;

  constructor(private authService: AuthService, private userService: UserService,
      private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }

  login(){

    this.isSubmitted = true;

    if(this.loginForm.invalid){
      return;
    }

    const loginData = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    }

    alert("Log in attempt: " + loginData.email + " " + loginData.password);

    this.userService.checkUserLogin(loginData).subscribe(data  => {
      
      if(data){
        this.authService.login(data);
        
        this.router.navigateByUrl('/admin');
      }
      else {
        this.invalidLogin = true;
      }


    });

  }

}
