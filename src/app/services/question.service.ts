import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  qnTotal: number = 9;
  qns: any[] = [];
  choices: any[] = [];
  // score: number = 0;
  lastN: number = 0;
  threshold: number = 3;
  currentLevel: number = 1;
  userdtls;
  readonly rooturl = 'http://localhost:3000/questions/';

  constructor(private http: HttpClient) {
    

    console.log("in question service");
    // if (localStorage.getItem('participant') != null) {
    //   this.userdtls = JSON.parse(localStorage.getItem('participant'));
    //   this.seconds = this.userdtls.timeTaken;
    //   this.qnProgress = this.userdtls.timeTakenPerQuestion.length;
    //   this.mediumquestions = this.fetchAllMediumQuestions();
    //   this.hardquestions = this.fetchAllHardQuestions();

    //   this.userdtls.scores.forEach(score => {
    //     switch (score) {
    //       case 1:
    //         this.currentLevel = 1;
    //         this.fetchEasyQuestion();
    //         break;
    //       case 2:
    //         this.currentLevel = 2;
    //         this.fetchMediumQuestion();
    //         break;
    //       case 3:
    //         this.currentLevel = 3;
    //         this.fetchHardQuestion();
    //         break;
    //     }
    //   });

    //   var length = this.userdtls.scores.length;
    //   this.lastN = 0;
    //   for (let i = length - 3; i <= length; i++) {
    //     if (this.userdtls.scores[i] == null) {
    //       this.lastN = 0;
    //     } else {
    //       this.lastN++;
    //     }
    //   }

    //   if (this.lastN == 3) {
    //     this.currentLevel++;
    //   }

      
    //   switch (this.currentLevel) {
    //     case 2:
    //       this.fetchMediumQuestion();
    //       break;
    //     case 3:
    //       this.fetchHardQuestion();
    //       break;
    //   }
    //   this.startTimer();
    // }
  }

  
  startTimer() {
    this.timer = setInterval(
      () => {
        this.seconds++;
      }, 1000);
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
    return this.http.post(this.rooturl + "add", q);
  }

}



