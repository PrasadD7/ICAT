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
export class ResultComponent implements OnInit, AfterViewChecked {

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
        choice: choice
      };
      this.finalResult.push(obj);

    });
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
      )

    // this.http.put('http://192.168.1.10:8060/students/' + this.participant.id + "?marks=" + this.qsvc.score + '&totalTime=' + this.participant.timeTaken, { headers: { authorization: this.usersvc.createBasicAuthToken("admin01", "admin01") }, responseType: 'text' as 'json' })
    //   .subscribe(
    //     data => {
    //       if (data == null) {
    //         alert("Result could not be saved !!!");
    //       }
    //       else {
    //         localStorage.clear();
    //         this.qsvc.easycounter = 0;
    //         this.qsvc.mediumcounter = 0;
    //         this.qsvc.hardcounter = 0;
    //         alert("You have logged out successfully!!!");
    //         this.router.navigateByUrl('/');
    //       }
    //     }
    //   );


    // this.http.put<Object>(this.rooturl, { headers: { authorization: this.createBasicAuthToken("admin01", "admin01") } });

    localStorage.clear();
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

}
