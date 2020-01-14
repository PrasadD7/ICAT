import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  fetchQuestions = function(): any{
    return this.http.get('http://localhost:7777');
  }
}
