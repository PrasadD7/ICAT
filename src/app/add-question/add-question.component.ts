import { Component, OnInit } from '@angular/core';
import { Question } from '../classes/question';
import { QuestionService } from '../services/question.service'

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  questionModel = new Question("", [], "", 1);
  constructor(private qsvc: QuestionService) { }

  ngOnInit() {
  }

  onSubmit(): any {
    console.log("IN SUBMIT");
    console.log(this.questionModel);

    this.qsvc.addQuestion(this.questionModel).subscribe(
      data => {
      console.log(data);
        alert('Question Added to the database successfully !');
      },
      error => {
        alert('Question could not be added to the database, try again');
      }
    )

  }


}
