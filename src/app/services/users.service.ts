import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Observable, EMPTY, throwError } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionService } from './question.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly rooturl = 'http://192.168.1.10:8060/students';
  readonly mailurl = 'http://192.168.1.10:8060/sendmail';

  msg;

  constructor(private http: HttpClient, private _ngbModal: NgbModal, private qsvc: QuestionService) { }

  getUsers(): Observable<Object> {

    return this.http.get<Object>(this.rooturl, { headers: { authorization: this.createBasicAuthToken("admin01", "admin01") } });
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }
  //http://192.168.1.10:8060/students/1?marks=12&totalTime=60

  storeResult(id: number, marks: number, totalTime: number): Observable<Object> {
    console.log(id+' '+marks+' '+totalTime);
    
    return this.http.put<Object>(this.rooturl + '/' + id + '?marks=' + marks + '&totalTime=' + totalTime,  { headers: { authorization: this.createBasicAuthToken("admin01", "admin01") } });
  }

  isAdmin(): any {
    return this.http.get(this.rooturl + '/admins')
  }

  postUser(user: User): any {
    this.http.post(this.rooturl + '/sendmail', {
      destEmail: "prasaddeshkar7@gmail.com",
      message: "Registration successful!",
      subject: "register"
    }, {
      headers: { authorization: this.createBasicAuthToken("admin01", "admin01") }
    })
      .subscribe(data => {
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
