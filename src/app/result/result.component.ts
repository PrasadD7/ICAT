import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef  } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Route } from '@angular/compiler/src/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  score;
  i: number = 0;
  j: number = 0;
  k: number = 0;
  participant;
  constructor(private qsvc: QuestionService, private router: Router, private http: HttpClient, private usersvc: UsersService,private elementRef:ElementRef) { }

  chart = [];
  alldates = [];

  ngOnInit() {
    this.participant = JSON.parse(localStorage.getItem('participant'));
    this.score = this.qsvc.score;
    console.log(this.participant);

    // for(this.k=1; this.k<=this.qsvc.qnTotal; this.k++){
    //   this.alldates.push('question '+this.k);
    // }
    // let htmlRef = this.elementRef.nativeElement.querySelector('#canvas');
    // this.chart = new Chart(htmlRef, {
    //   type : 'line',
    //   data : {
    //     labels: this.alldates,
    //     datasets: [
    //       {
    //         data: this.participant.timeTakenPerQuestion,
    //         borderColor: "#3cba9f",
    //         fill: false
    //       },
    //       {
    //         data: this.participant.timeTakenPerQuestion,
    //         borderColor: "#3cba9f",
    //         fill: false
    //       }
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }],
    //     }
    //   }
    // });
  }

  getChoices(): any {
    return this.participant.choices[this.i++];
  }

  getTimeTaken(): any {
    return this.participant.timeTakenPerQuestion[this.j++];
  }
  logOut() {
    // this.usersvc.postUser(this.participant).subscribe(
    //   data => {console.log("success " + data);
    //   alert('result saved successfully!');
    //   this.router.navigate(['']);
    // },
    //   error => {
    //     console.log("failure" + error);
    //     alert('failed!');
    // }
    // )
    this.http.post('http://localhost:7070/icat-users/results?score='+this.qsvc.score+'&timeTaken='+this.participant.timeTaken+"&id="+this.participant.id,{}).subscribe(
      data => {
        if (data == null) {
          alert("Result could not be saved !!!");
        }
        else {
          localStorage.clear();
          this.qsvc.easycounter = 0;
          this.qsvc.mediumcounter = 0;
          this.qsvc.hardcounter = 0;
          alert("You have logged out successfully!!!");
          this.router.navigateByUrl('/');
        }
      }
    );

  }

}
