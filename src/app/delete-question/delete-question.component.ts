import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../services/question.service";

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {

  levels:['Easy','Moderate','Hard']; 
  level;

  constructor(private qsvc: QuestionService) { }

  ngOnInit() {
    this.qsvc.fetchAllEasyQuestions().subscribe(data => {
      this.qsvc.easyquestions = data;
      console.log(this.qsvc.easyquestions);
      console.log(this.qsvc.qns);
    });

    this.qsvc.fetchAllMediumQuestions().subscribe(data => {
      this.qsvc.mediumquestions = data;
      console.log(this.qsvc.mediumquestions);
    });

    this.qsvc.fetchAllHardQuestions().subscribe(data => {
      this.qsvc.hardquestions = data;
    });

  }

}
