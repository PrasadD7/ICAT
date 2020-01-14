import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): any {
    return this.http.get('http://localhost:7777/users');
  }
  //?name='+nname+'&email'+nemail+'&name'
  postUser(nname, nemail, npassword): any {
    return this.http.post('http://localhost:7777/adduser','{name:'+name+'email:'+nemail+',password: '+npassword+'}');
  }
}
