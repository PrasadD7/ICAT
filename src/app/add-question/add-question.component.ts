import { Component, OnInit } from '@angular/core';
import { Question } from '../classes/question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  questionModel = new Question("",[],"",1);
  constructor() { }

  ngOnInit() {
  }

  onSubmit(): any{
    console.log("IN SUBMIT");
    console.log("question =>"+this.questionModel.Qn+" Options=>"+this.questionModel.Options+" Answer=>"+this.questionModel.Answer+" Level =>"+this.questionModel.level);
  }


}
