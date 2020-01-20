import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
participantName;
score;
i:number = 0;
  constructor(private qsvc : QuestionService, private router:Router) { }

  ngOnInit() {
    this.participantName = JSON.parse(localStorage.getItem('participant')).name;
    this.score=this.qsvc.score;
    console.log(this.qsvc.choices);
  }

  getChoices() : any{
    return this.qsvc.choices[this.i++];
  }

  logOut(){
    localStorage.clear();
    this.qsvc.easycounter=0;
    alert("You have logged out successfully!!!");
    this.router.navigateByUrl('/');
  }

}
