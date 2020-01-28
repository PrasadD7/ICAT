import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { Question } from '../classes/question';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  seconds: number;
  timer;
  qtimer;
  qseconds: number;
  score: number = 0;
  qnProgress;
  easyquestions: any[];
  hardquestions: any[];
  mediumquestions: any[];
  easycounter: number = 0;
  mediumcounter: number = 0;
  hardcounter: number = 0;
  qnTotal: number = 7;
  qns: any[] = [];
  choices: any[] = [];
  // score: number = 0;
  lastN: number = 0;
  threshold: number = 3;
  currentLevel: number = 1;
  readonly rooturl = 'http://localhost:3000/questions/';

  constructor(private http: HttpClient) {

  }

  fetchAllEasyQuestions(): any {
    return this.http.get(this.rooturl + 'easy');
  }

  fetchAllMediumQuestions(): any {
    return this.http.get(this.rooturl + 'moderate');
  }

  fetchAllHardQuestions(): any {
    return this.http.get(this.rooturl + 'difficult');
  }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  fetchEasyQuestion = function () {
    this.qns.push(this.easyquestions[this.easycounter++]);
  }

  fetchMediumQuestion = function () {
    this.qns.push(this.mediumquestions[this.mediumcounter++]);;
  }

  fetchHardQuestion = function () {
    this.qns.push(this.hardquestions[this.hardcounter++]);;
  }

  addQuestion = function (q: Question): Observable<Question> {
    console.log(q);
    return this.http.post(this.rooturl + "add",  q);
  }

}



