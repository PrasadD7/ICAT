import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name;
  email;
  password;
  cpassword;
  mobile;
  message;
  constructor(private usersvc: UsersService, private router: Router) { }

  ngOnInit() {
  }
  onRegister(): any {
    console.log(this.name);
    this.usersvc.postUser(this.name, this.email, this.password, this.mobile).subscribe(data => {
      alert(data);
    });
  }

}
