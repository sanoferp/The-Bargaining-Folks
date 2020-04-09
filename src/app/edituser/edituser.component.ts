import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  activeUser: User = JSON.parse(localStorage.getItem('ACTIVE_USER'));
  editForm: FormGroup;
  isSubmitted  =  false;
  
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    
    this.editForm = this.formBuilder.group({
      username: [this.activeUser.username, Validators.required],
      password: [this.activeUser.password, Validators.required],
      email: [this.activeUser.email, Validators.required],
      fName: [this.activeUser.fName, Validators.required],
      lName: [this.activeUser.lName, Validators.required]
    });
    /*
    this.editForm = new FormGroup({
      email: new FormControl({value: this.activeUser.email}),
      username: new FormControl({value: this.activeUser.username}),
      password: new FormControl({value: this.activeUser.password}),
      fName: new FormControl({value: this.activeUser.fName}),
      lName: new FormControl({value: this.activeUser.lName}),
    });*/
    /*
    this.apiService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
      this.editForm = new FormGroup({
        firstName: new FormControl()
     });*/
  }

  onSubmit() {
    this.isSubmitted = true;

    this.userService.updateUser(this.activeUser.id, JSON.stringify(this.editForm.value)).subscribe(data  => {
      
      if(data){ //On success update current user in localstorage
        
        this.authService.updateLoggedInUser(data);
        this.router.navigateByUrl('/admin'); //Maybe just reload this page?
      }
      else { //Unsuccessful update
        //alert("Update was not processed");
      }
    });
  }

}
