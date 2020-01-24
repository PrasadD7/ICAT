import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly rooturl='http://localhost:8080/students';
  constructor(private http: HttpClient) { }

  getUsers(): any {
    return this.http.get( this.rooturl + '/');
  }

isAdmin():any{
  return this.http.get(this.rooturl + '/admins')
}

  //?name='+nname+'&email'+nemail+'&name'
  postUser(user : User): any {
    return this.http.post(this.rooturl+"?name="+user.name+"&email="+user.email+"&password="+user.password+"&mobileNo="+user.mobile,user);
  }
}
