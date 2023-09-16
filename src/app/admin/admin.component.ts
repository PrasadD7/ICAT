import { Question } from '../classes/question';
import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

questionModel = new Question("",[],"",1);

  constructor() { }

  ngOnInit() {
  }

 
}
