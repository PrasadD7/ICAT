import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  seconds: number;
  timer;
  qtimer;
  qseconds:number;
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
  //readonly rooturl = 'http://localhost:8080';

  constructor(private http: HttpClient) {

  }

  fetchAllEasyQuestions(): any {
    return this.http.get('../assets/questions/easy/questions.json');
  }

  fetchAllMediumQuestions(): any {
    return this.http.get('../assets/questions/medium/questions.json');
  }

  fetchAllHardQuestions(): any {
    return this.http.get('../assets/questions/hard/questions.json');
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
}



