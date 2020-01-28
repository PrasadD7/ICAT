import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Route } from '@angular/compiler/src/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  score;
  i: number = 0;
  j: number = 0;
  k: number = 0;
  participant;
  constructor(private qsvc: QuestionService, private router: Router, private http: HttpClient, private usersvc: UsersService, private elementRef: ElementRef) { }

  chart = [];
  alldates = [];

  ngOnInit() {
    this.participant = JSON.parse(localStorage.getItem('participant'));
    this.score = this.qsvc.score;
    console.log(this.participant);
  }

  getChoices(): any {
    return this.participant.choices[this.i++];
  }

  getTimeTaken(): any {
    return this.participant.timeTakenPerQuestion[this.j++];
  }

  generateResult() {
    window.print();
  }

  logOut() {

    localStorage.clear();
    
    this.http.put('http://localhost:8060/students/' + this.participant.id + "?marks=" + this.qsvc.score + '&totalTime=' + this.participant.timeTaken, { headers: { authorization: this.usersvc.createBasicAuthToken("admin01", "admin01") }, responseType: 'text' as 'json' }).subscribe(
      data => {
        if (data == null) {
          alert("Result could not be saved !!!");
        }
        else {
          this.qsvc.easycounter = 0;
          this.qsvc.mediumcounter = 0;
          this.qsvc.hardcounter = 0;
          alert("You have logged out successfully!!!");
          this.router.navigateByUrl('/');
        }
      }
    );

  }

}
