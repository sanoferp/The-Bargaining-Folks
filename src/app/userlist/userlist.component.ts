import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { UserService } from "../user.service";
import { User } from "../user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  
  users: Observable<User[]>;

  constructor(private employeeService: UserService, private router: Router) { }
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.users = this.employeeService.getEmployeesList();
  }
}
