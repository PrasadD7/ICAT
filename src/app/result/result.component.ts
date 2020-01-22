import { UsersService } from './../../../services/users.service';
import { HttpClient } from '@angular/common/http';
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

  score;
  i: number = 0;
  j: number = 0;
  participant;
  constructor(private qsvc: QuestionService, private router: Router, private http: HttpClient, private usersvc: UsersService) { }

  ngOnInit() {
    this.participant = JSON.parse(localStorage.getItem('participant'));
    this.score = this.qsvc.score;
    console.log(this.participant);
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
