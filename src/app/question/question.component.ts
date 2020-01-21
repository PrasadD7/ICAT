import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { Router } from "@angular/router";
import { User } from "../../../classes/user";
import { Question } from 'classes/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  score: number = 0;
  lastN: number = 0;
  threshold: number = 3;
  currentLevel: number = 1;
  user: User;
  participant;
  constructor(private router: Router, private qsvc: QuestionService) { }

  ngOnInit() {
    this.qsvc.seconds = 0;
    this.qsvc.qnProgress = 0;
    this.startTimer();
    this.participant = JSON.parse(localStorage.getItem('participant'));
    this.user = new User(this.participant.id,this.participant.name, this.participant.email, this.participant.password, this.participant.mobileNo,[],[],0,[]);
    this.qsvc.fetchEasyQuestion();
    this.currentLevel = 1;
    this.startQTimer();
    console.log('Current question' + this.qsvc.qns);

  }

  startTimer() {
    this.qsvc.timer = setInterval(
      () => {
        this.qsvc.seconds++;
      }, 1000);
  }

  startQTimer() {
    this.qsvc.qseconds = 0;
    this.qsvc.qtimer = setInterval(
      () => {
        this.qsvc.qseconds++;
      }, 1000);
  }

  Answer(qnID, choice): any {
    // this.qsvc.choices.push(choice);
    this.user.choices.push(choice);
    clearInterval(this.qsvc.qtimer);
    this.user.timeTakenPerQuestion.push(this.qsvc.qseconds);
    console.log(this.qsvc.qseconds);

    if (this.qsvc.qnProgress == this.qsvc.qnTotal) {

      if (this.qsvc.qns[this.qsvc.qnProgress].Answer == choice) {
        this.qsvc.score = this.qsvc.score + this.qsvc.qns[this.qsvc.qnProgress].level;
        this.lastN++;
        this.user.scores[this.qsvc.qnProgress] = this.qsvc.qns[this.qsvc.qnProgress].level;
      }

      this.user.timeTaken= this.qsvc.seconds;
      clearInterval(this.qsvc.timer);
      localStorage.setItem('participant', JSON.stringify(this.user));
      this.router.navigate(['/result']);
    }
    if (this.qsvc.qnProgress < this.qsvc.qnTotal) {
      console.log(' current questions : ' + this.qsvc.qns);
      console.log(this.user);
      if (this.qsvc.qns[this.qsvc.qnProgress].Answer == choice) {
        this.qsvc.score = this.qsvc.score + this.qsvc.qns[this.qsvc.qnProgress].level;
        this.lastN++;
        this.user.scores[this.qsvc.qnProgress] = this.qsvc.qns[this.qsvc.qnProgress].level;
      }
      else {
        this.lastN = 0;
      }

      if (this.lastN == this.threshold) {
        this.currentLevel++;
        this.lastN = 0;
      }

      this.qsvc.qnProgress++;

      switch (this.currentLevel) {
        case 1:
          this.qsvc.fetchEasyQuestion();
          this.startQTimer();
          break;
        case 2:
          this.qsvc.fetchMediumQuestion();
          this.startQTimer();
          break;
        case 3:
          this.qsvc.fetchHardQuestion();
          this.startQTimer();
          break;
        default:
          break;
      }

      console.log('Last three' + this.lastN);

      console.log('Current level ' + this.currentLevel);

      console.log('Current score ' + this.qsvc.score);
    }


  }


}
