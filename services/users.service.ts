import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly rooturl='http://localhost:7070/icat-users/users';
  constructor(private http: HttpClient) { }

  getUsers(): any {
    return this.http.get( this.rooturl + '/');
  }
  //?name='+nname+'&email'+nemail+'&name'
  postUser(user : User): any {
    return this.http.post<any>(this.rooturl+"?name="+user.name+"&email="+user.email+"&password="+user.password+"&mobileNo="+user.mobile,user);
  }
}
