import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Router } from "@angular/router";
import { User } from "../classes/user";
import { Question } from '../classes/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  // score: number = 0;
  // lastN: number = 0;
  // threshold: number = 3;
  // currentLevel: number = 1;
  user: User;
  participant;
  choice;


  constructor(private router: Router, private qsvc: QuestionService) { }

  ngOnInit() {
    this.participant = JSON.parse(localStorage.getItem('participant'));
    this.user = new User(this.participant.id, this.participant.name, this.participant.email, this.participant.password, this.participant.mobile, [], [], 0, []);
    localStorage.setItem("participant", JSON.stringify(this.user));
    this.qsvc.qnProgress = parseInt(localStorage.getItem("progress"));
    this.qsvc.fetchEasyQuestion();
    this.qsvc.currentLevel = 1;
    this.startQTimer();
    console.log(this.qsvc.qns);
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

  setChoice(choice:String){
    this.choice  = choice;
  }

  Answer(): any {
    this.user.choices.push(this.choice);
    clearInterval(this.qsvc.qtimer);
    localStorage.setItem("timeElapsed", this.qsvc.seconds.toString());
    this.user.timeTakenPerQuestion.push(this.qsvc.qseconds);
    console.log(this.qsvc.qseconds);
    this.qsvc.qnProgress = parseInt(localStorage.getItem("progress"));

    if (this.qsvc.qnProgress == this.qsvc.qnTotal || this.qsvc.qseconds == 120) {

      if (this.qsvc.qns[this.qsvc.qnProgress].Answer == this.choice) {
        this.qsvc.score = this.qsvc.score + this.qsvc.qns[this.qsvc.qnProgress].level;
        this.qsvc.lastN++;
        this.user.scores[this.qsvc.qnProgress] = this.qsvc.qns[this.qsvc.qnProgress].level;
      }

      this.user.timeTaken = this.qsvc.seconds;
      clearInterval(this.qsvc.timer);
      localStorage.setItem('participant', JSON.stringify(this.user));
      this.router.navigate(['/result']);
    }
    if (this.qsvc.qnProgress < this.qsvc.qnTotal) {
      console.log(' current questions : ' + this.qsvc.qns);
      console.log(this.user);
      if (this.qsvc.qns[this.qsvc.qnProgress].Answer == this.choice) {
        this.qsvc.score = this.qsvc.score + this.qsvc.qns[this.qsvc.qnProgress].level;
        this.qsvc.lastN++;
        this.user.scores[this.qsvc.qnProgress] = this.qsvc.qns[this.qsvc.qnProgress].level;
      }
      else {
        this.qsvc.lastN = 0;
      }

      if (this.qsvc.lastN == this.qsvc.threshold) {
        this.qsvc.currentLevel++;
        this.qsvc.lastN = 0;
      }


      if (this.qsvc.currentLevel + 1 == 2 && this.qsvc.lastN == this.qsvc.threshold - 1) {
        this.qsvc.fetchAllMediumQuestions().subscribe(data => {
          this.qsvc.mediumquestions = data;
          console.log(this.qsvc.mediumquestions);
        });
      }
      else {
        if (this.qsvc.currentLevel + 1 == 3 && this.qsvc.lastN == this.qsvc.threshold - 1) {
          this.qsvc.fetchAllHardQuestions().subscribe(data => {
            this.qsvc.hardquestions = data;
            console.log(this.qsvc.hardquestions);
          });
        }
      }

      switch (this.qsvc.currentLevel) {
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


    localStorage.setItem("progress", (++this.qsvc.qnProgress).toString());

      console.log('Last three' + this.qsvc.lastN);

      console.log('Current level ' + this.qsvc.currentLevel);

      console.log('Current score ' + this.qsvc.score);
    }


  }


}
