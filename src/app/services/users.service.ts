import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Observable, EMPTY, throwError } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionService } from './question.service';
import { Email } from '../classes/email';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly rooturl = 'http://192.168.1.10:8060/students';
  readonly mailurl = 'http://192.168.1.10:8060';
  msg;

  constructor(private http: HttpClient, private _ngbModal: NgbModal, private qsvc: QuestionService) { }

  getUsers(): Observable<Object> {

    return this.http.get<Object>(this.rooturl, { headers: { authorization: this.createBasicAuthToken("admin01", "admin01") } });
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  storeResult(id: number, marks: number, totalTime: number) {
    console.log('id - ' + id + ' ' + marks + ' ' + totalTime);

    return this.http.get(this.rooturl + '/addresult/' + id + '?marks=' + marks + '&totalTime=' + totalTime
      , { headers: { authorization: this.createBasicAuthToken("admin01", "admin01") } });
  }

  isAdmin(): any {
    return this.http.get(this.rooturl + '/admins')
  }

  postUser(user: User): any {
    return this.http.post(this.rooturl, user, { headers: { authorization: this.createBasicAuthToken("admin01", "admin01") }, responseType: 'text' as 'json' });
  }

  sendMail(email: Email) {
    console.log(email);

    return this.http.post(this.mailurl + '/sendmail', {
      destEmail: email.EmailID,
      message: email.Message,
      subject: email.Subject
    }, {
      headers: { authorization: this.createBasicAuthToken("admin01", "admin01") }, responseType: 'text' as 'json'
    });
  }
}
