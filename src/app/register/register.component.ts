import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users.service";
import { Router } from "@angular/router";
import { User } from "../../../classes/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  cpassword;

  constructor(private usersvc: UsersService, private router: Router) { }

  userModel = new User("Enter your name here", "something@example.com", "", "",[],0);
  ngOnInit() {
  }


  onRegister() {
    this.usersvc.postUser(this.userModel).subscribe(
      data => console.log("success " + data),
    error => console.log("failure" + error)
    )
  }

}
