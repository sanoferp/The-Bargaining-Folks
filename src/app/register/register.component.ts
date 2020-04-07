import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isSubmitted  =  false;

  constructor(private authService: AuthService, private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm  =  this.formBuilder.group({
      fName:['', Validators.required],
      lName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.registerForm.controls; }

  register(){
    console.log(this.registerForm.value);
    this.isSubmitted = true;
    if(this.registerForm.invalid){
      return;
    }

    alert(JSON.stringify(this.registerForm.value));
    this.userService.createUser(this.registerForm.value).subscribe(data => {});

    this.router.navigateByUrl('/login');
  }


}