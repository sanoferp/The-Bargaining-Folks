import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private userservice: UserService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.isSubmitted=true;

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
/*
    var usersomething: any;
    usersomething = this.userservice.getEmployeeInfo(this.user)
    .subscribe(data => console.log(data), error => console.log(error));
    console.log(this.loginForm.value);

    
    if(usersomething == null){
      return;
    }

    localStorage.setItem('userinfo',usersomething);
*/




    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }




}
