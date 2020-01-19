import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
participantName;
score;
  constructor(private qsvc : QuestionService) { }

  ngOnInit() {
    this.participantName = JSON.parse(localStorage.getItem('participant')).name;
    this.score=this.qsvc.score;

  }
}
