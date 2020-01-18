import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
import { Router } from "@angular/router";
import { QuestionService } from "../question.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users;
  email;
  password;
  found: boolean = false;
  constructor(private usersvc: UsersService, private router: Router, private qsvc: QuestionService) { }

  ngOnInit() {

  }

  onLogin() {

    this.router.navigateByUrl('/questions'); //comment these two lines when backend is ready
    this.qsvc.fetchQuestions();
    this.usersvc.getUsers().subscribe(data => {
      this.users = data;
      this.users.forEach(user => {
        if (user.email == this.email && user.password == this.password) {
          localStorage.clear();
          localStorage.setItem('participant', JSON.stringify(user));
          this.found = true;
          this.router.navigateByUrl('/questions');
          this.qsvc.fetchQuestions();
        }
      });
      if (this.found == false) {
        alert("Logging in failed !!")
      }
    });
    console.log(this.users);
  }

  onSignUp(): any {
    this.router.navigateByUrl('/register');
  }

}
