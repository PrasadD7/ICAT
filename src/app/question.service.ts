import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  qns : any[];
  seconds : number;
  timer;
  qnProgress:number;
readonly rooturl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  fetchQuestions = function(): any{
    return this.http.get(this.rooturl);
  }

  
}
