import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from '../popups/alert/alert.component';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly rooturl = 'http://localhost:8060/students';
  readonly mailurl = 'http://localhost:8060/sendmail';

  msg;

  constructor(private http: HttpClient, private _ngbModal: NgbModal) { }

  getUsers(): Observable<Object> {

    // const headers = new HttpHeaders({ Authorization: 'Basic YWRtaW4wMTphZG1pbjAx' });

    return this.http.get<Object>(this.rooturl);

  }

  isAdmin(): any {
    return this.http.get(this.rooturl + '/admins')
  }

  postUser(user: User): any {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa("admin01:admin01") });


    this.http.post("http://localhost:8060/sendmail"
      , {
        headers, responseType: 'text' as 'json', body: {
          "destEmail": "prasaddeshkar7@gmail.com",
          "message": "Registration successful!",
          "subject": "register"
        }
      }).subscribe(data => {
        const modalRef = this._ngbModal.open(AlertComponent);
        modalRef.componentInstance.responseMessage = "An email with OTP is sent to your email, enter it below to register your account";
      })


    return this.http.post(this.rooturl + "?name=" + user.name + "&email=" + user.email + "&password=" + user.password + "&mobileNo=" + user.mobile, user, { headers, responseType: 'text' as 'json' });
  }
}
