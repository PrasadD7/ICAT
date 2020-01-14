import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

readonly rooturl = 'http://localhost:7777';

  constructor(private http: HttpClient) { }

  fetchQuestions = function(): any{
    return this.http.get(this.rooturl);
  }
}
