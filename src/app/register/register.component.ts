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
  message;
  constructor(private usersvc: UsersService, private router: Router) { }

  ngOnInit() {
  }
  onRegister(): any {
    console.log(this.name);

    this.usersvc.postUser(this.name, this.email, this.password).subscribe(data => {
      alert(data);
    }

    );
  }

}
