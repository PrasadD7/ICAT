import { User } from '../classes/user';
import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { Router } from "@angular/router";
import { QuestionService } from "../services/question.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users;
  email;
  password;
  userdtls;
  errorMsg;

  constructor(private usersvc: UsersService, private router: Router, private qsvc: QuestionService) { }

  ngOnInit() {
    this.fetchAllQuestions();
    this.qsvc.qnProgress = 0;
    this.qsvc.qns = [];
    this.qsvc.easycounter = 0;
    this.qsvc.mediumcounter = 0;
    this.qsvc.hardcounter = 0;
  }

  onLogin() {

    this.qsvc.score = 0;

    this.usersvc.getUsers().subscribe(data => {
      this.users = data;

      this.users.forEach(user => {

        if (user.email == this.email && user.password == this.password) {

          if(user.timeTaken > 0){
            alert('You can appear for test only once');
          }
          else{
            this.userdtls = new User(user.id,user.name,user.email,user.password,user.mobileNo,[],[],0,[]);
            localStorage.setItem('participant', JSON.stringify(this.userdtls));
            return this.router.navigateByUrl('/questions');
          }

        }
      });
    },
    error => {
      this.errorMsg = error;
      console.log(this.errorMsg);

    });


  }

  fetchAllQuestions() {
    this.qsvc.fetchAllEasyQuestions().subscribe(data => {
      this.qsvc.easyquestions = data;
      console.log(this.qsvc.easyquestions);
      console.log(this.qsvc.qns);
    });

  //   this.qsvc.fetchAllMediumQuestions().subscribe(data => {
  //     this.qsvc.mediumquestions = data;
  //     console.log(this.qsvc.mediumquestions);
  //   });

  //   this.qsvc.fetchAllHardQuestions().subscribe(data => {
  //     this.qsvc.hardquestions = data;
  //   });
   }

  onSignUp(): any {
    this.router.navigateByUrl('/register');
  }

  adminLogin():any{
    localStorage.setItem('participant',"abc");//to be commented
    this.router.navigateByUrl('/admin');
  }

}
