import { Question } from 'classes/question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

questionModel = new Question("",[],"",1);

levels = ['Easy', 'Medium', 'Hard'];

  constructor() { }

  ngOnInit() {
  }

}
