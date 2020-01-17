import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionpkg;
  question;
  option1;
  option2;
  option3;
  option4;
  count = 1;
  quesno: number = 0;
  optval;
  score;
  constructor(private router:Router,private qsvc: QuestionService) { }

  ngOnInit() {
    this.qsvc.seconds = 0;
    this.qsvc.qnProgress = 0;

    this.qsvc.fetchQuestions().subscribe(data => {
     this.qsvc.qns = data;
     this.startTimer();
    })
  }

  startTimer() {
    this.qsvc.timer = setInterval(
      () => {
        this.qsvc.seconds++;
      }, 1000);

  }

  nxtQuestion(): any {

    console.log(this.questionpkg);
    this.count++;
    console.log();

    // this.quesno = 'q'+ this.count;
    this.question = this.questionpkg.quiz.sport;
  }


}
