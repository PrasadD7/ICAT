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
  option1;
  option2;
  option3;
  option4;
  count = 0;
  quesno: number = 0;
  answer;
  score;
  constructor(private qsvc: QuestionService) { }

  ngOnInit() {
    this.qsvc.fetchQuestions().subscribe(data => {
      this.questionpkg = data;
      console.log(this.questionpkg);
      this.question = data.maths.q1.question;
      this.option1 = data.maths.q1.options['1'];
      this.option2 = data.maths.q1.options['2'];
      this.option3 = data.maths.q1.options['3'];
      this.option4 = data.maths.q1.options['4'];
      //quiz.maths.q2.options[""0""]

    })
  }

  nxtQuestion(): any {

    console.log(this.questionpkg);
    this.count++;
    // this.quesno = 'q'+ this.count;
    this.question = this.questionpkg.quiz.sport;
  }


}
