import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from '../popups/alert/alert.component';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly rooturl = 'http://localhost:8060/students';
  readonly mailurl = 'http://localhost:8060/sendmail';

  msg;

  constructor(private http: HttpClient, private _ngbModal: NgbModal) { }

  getUsers(): Observable<Object> {

    return this.http.get<Object>(this.rooturl, { headers: { authorization: this.createBasicAuthToken("admin01", "admin01") } });


  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }


  isAdmin(): any {
    return this.http.get(this.rooturl + '/admins')
  }

  postUser(user: User): any {



    this.http.post("http://localhost:8060/sendmail"
      , {
        headers: { authorization: this.createBasicAuthToken("admin01", "admin01") }, responseType: 'text' as 'json',
          "destEmail": user.email,
          "message": "You have successfully registered for ICATS Exam portal, login to attempt the exam and test your skills based on adaptive testing !",
          "subject": "ICATS Registration"
      }).subscribe(data => {
        console.log(data);
        alert('Email sent successfully !');
      },
      error => {
        console.log(error);
        alert('Email sending failed !');
      });


    return this.http.post(this.rooturl + "?name=" + user.name + "&email=" + user.email + "&password=" + user.password + "&mobileNo=" + user.mobile, user, { headers: { authorization: this.createBasicAuthToken("admin01", "admin01") }, responseType: 'text' as 'json' });

  }
}
