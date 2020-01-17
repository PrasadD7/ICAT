import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly rooturl='http://localhost:8080/icat-users/users';
  constructor(private http: HttpClient) { }

  getUsers(): any {
    return this.http.get( this.rooturl + '/');
  }
  //?name='+nname+'&email'+nemail+'&name'
  postUser(nname, nemail, npassword,nmobile): any {
    return this.http.post(this.rooturl +'?name='+nname+'+&email='+nemail+'&password='+npassword+'&mobileNo='+nmobile,{});
  }
}
