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
    this.startTimer();//comment it after backend is ready
    // this.qsvc.fetchQuestions().subscribe(data => {
    //  this.qsvc.qns = data;
    //  this.startTimer();
    // })
    this.qsvc.qns = this.qsvc.fetchQuestions();

    console.log(this.qsvc.qns);

  }

  startTimer() {
    this.qsvc.timer = setInterval(
      () => {
        this.qsvc.seconds++;
      }, 1000);

  }

  Answer(qnID,choice): any {
    if( this.qsvc.qns[this.qsvc.qnProgress].Answer == choice){
      this.qsvc.score++;
    }
    console.log(this.qsvc.score);
    this.qsvc.qnProgress++;
    
    if(this.qsvc.qnProgress==10){
      clearInterval(this.qsvc.timer);
      this.router.navigate(['/result']);
    }

  }


}
