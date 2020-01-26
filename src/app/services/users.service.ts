import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly rooturl='http://localhost:8080/students';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Object>  {
    
    return this.http.get<Object>( this.rooturl);

  }



isAdmin():any{
  return this.http.get(this.rooturl + '/admins')
}

  //?name='+nname+'&email'+nemail+'&name'
  postUser(user : User): any {
    return this.http.post(this.rooturl+"?name="+user.name+"&email="+user.email+"&password="+user.password+"&mobileNo="+user.mobile,user);
  }
}
