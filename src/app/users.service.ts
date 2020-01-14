import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly rooturl='http://localhost:7777';
  constructor(private http: HttpClient) { }

  getUsers(): any {
    return this.http.get( this.rooturl + '/users');
  }
  //?name='+nname+'&email'+nemail+'&name'
  postUser(nname, nemail, npassword): any {
    return this.http.post(this.rooturl +'/adduser','{name:'+name+'email:'+nemail+',password: '+npassword+'}');
  }
}
