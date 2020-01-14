import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
questionpkg;
question;
count=0;
quesno: number = 0;
answer;
score;
  constructor(private qsvc: QuestionService) { }

  ngOnInit() {
  this.qsvc.fetchQuestions().subscribe(data=>{
    this.questionpkg = data;
  })
  }

  nxtQuestion():any{

    console.log(this.questionpkg);
    this.count++;
   // this.quesno = 'q'+ this.count;
    this.question = this.questionpkg.quiz.sport ;
  }


}
