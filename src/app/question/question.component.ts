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
  count = 1;
  quesno: number = 0;
  optval;
  score;
  constructor(private qsvc: QuestionService) { }

  ngOnInit() {
    this.qsvc.fetchQuestions().subscribe(data => {
      this.questionpkg = data;
      console.log(this.questionpkg);
      this.question = data.quiz.maths.q1.question;
      this.option1 = data.quiz.maths.q1.options['0'];
      this.option2 = data.quiz.maths.q1.options['1'];
      this.option3 = data.quiz.maths.q1.options['2'];
      this.option4 = data.quiz.maths.q1.options['3'];
      //quiz.maths.q2.options[""0""]

    })
  }

  nxtQuestion(): any {

    console.log(this.questionpkg);
    this.count++;
    console.log();

    // this.quesno = 'q'+ this.count;
    this.question = this.questionpkg.quiz.sport;
  }


}
