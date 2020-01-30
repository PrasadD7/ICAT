import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  score;
  i: number;
  j: number;

  participant;

  display = false;

  choices: any = [];
  times: any = [];

  finalResult: any[];

  constructor(
    private qsvc: QuestionService,
    private router: Router,
    private http: HttpClient,
    private usersvc: UsersService,
    private cdr: ChangeDetectorRef) {
    this.finalResult = [];
    this.loadData();

  }

  ngOnInit() {
  }


  loadData(): void {
    this.i = 0;
    this.j = 0;

    this.participant = JSON.parse(localStorage.getItem('participant'));
    this.score = this.qsvc.score;
    console.log(this.score);
    console.log('result page ' + JSON.stringify(this.participant));

    console.log(this.participant.choices);
    console.log(this.participant.timeTakenPerQuestion);

    this.participant.choices.forEach((choice: any, index: any) => {
      console.log(choice);

      var obj = {
        time: this.participant.timeTakenPerQuestion[index],
        choice: choice,
        answer:this.qsvc.qns[index].Answer,
        level:this.qsvc.qns[index].level
      };
      this.finalResult.push(obj);

    });

    console.log(this.finalResult);
    localStorage.clear();
    
  }

  generateResult() {
    window.print();
  }

  generateaAnalysis() {
    this.cdr.detectChanges();
    this.display = !this.display;
  }

  logOut() {

    this.usersvc.storeResult(this.participant.id, this.qsvc.score, this.qsvc.seconds)
      .subscribe(
        (data) => {
          alert("Result saved successfully");
          console.log(data);
        },
        (error) => {
        alert("Result could not be saved !!!");
        console.log(error);
        }
      );

  }
}
