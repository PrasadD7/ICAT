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
  constructor(private usersvc: UsersService, private router: Router) { }

  ngOnInit() {
    this.usersvc.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  onLogin(): any {

    this.users.forEach(user => {
      if (user.email == this.email && user.password == this.password) {
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/questions');
      }
    });
  }

  onSignUp(): any{
    this.router.navigateByUrl('/register');
  }

}
