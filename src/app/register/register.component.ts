import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { Router } from "@angular/router";
import { User } from "../classes/user";
import { Email } from "../classes/email";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  spinner;

  cpassword;
  pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  constructor(private usersvc: UsersService, private router: Router) { }

  userModel = new User(0, "", "", "", "", [], [], 0, []);

  email = new Email("", "", "");

  ngOnInit() {
    this.spinner=false;
  }


  onRegister() {

    this.spinner = true;
    this.email.EmailID = this.userModel.email;
    this.email.Subject = "Registration for ICATS";
    this.email.Message = "Registration to Intelligent Computerized Adaptive Testing System was Successful, Please Login to attempt the test - TEAM ICATS";
    this.usersvc.postUser(this.userModel).subscribe(
      data => {
        console.log("success " + data);
        alert('registration successful!');
        
        this.usersvc.sendMail(this.email)
          .subscribe(data => {
            console.log(data);
            alert('Email sent successfully !');
          },
            error => {
              console.log(error);
              alert('Email sending failed !');
            });
        this.router.navigate(['']);
      },
      error => {
        console.log("failure" + error);
        alert('registration failed!');
      }
    );
    console.log(this.email);


    this.spinner=false;


  }

}
