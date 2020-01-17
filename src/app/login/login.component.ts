import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users;
  email;
  password;
  found:boolean = false;
  constructor(private usersvc: UsersService, private router: Router) { }

  ngOnInit() {

  }

  onLogin() {
      this.usersvc.getUsers().subscribe(data => {
      this.users = data;
      this.users.forEach(user => {
        if (user.email == this.email && user.password == this.password) {
          localStorage.clear();
          localStorage.setItem('participant', JSON.stringify(user));
          this.found=true;
          this.router.navigateByUrl('/questions');
        }
      });
      if (this.found==false) {
        alert("Logging in failed !!")
      }
    });
    console.log(this.users);
  }

  onSignUp(): any {
    this.router.navigateByUrl('/register');
  }

}
