import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  qns : any[]=[{QnId:1,Qn:"Which of the following is not OOPS concept in Java?",Options:["Inheritance","Encapsulation","Polymorphism","Compilation"],Answer:"Compilation"}];
  seconds : number;
  timer;
  score : number = 0;
  qnProgress:number;
//readonly rooturl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

displayTimeElapsed(){
  return Math.floor(this.seconds/3600)+':'+Math.floor(this.seconds / 60)+':'+Math.floor(this.seconds % 60);
}

  fetchQuestions = function(): any{
    // return this.http.get(this.rooturl);
    //this.qns.push({QnId:1,Qn:"this is a question"});
    this.qns.push({QnId:2,Qn:" Which of the following is a type of polymorphism in Java?",Options:["Compile time polymorphism","Execution time polymorphism","Multiple polymorphism","Multilevel polymorphism"],Answer:"Compile time polymorphism"});
    this.qns.push({QnId:3,Qn:"When does method overloading is determined?",Options:["At run time","At compile time","At coding time","At execution time"],Answer:"At compile time"});
    this.qns.push({QnId:4,Qn:"When Overloading does not occur?",Options:[" More than one method with same name but different method signature and different number or type of parameters","More than one method with same name, same signature but different number of signature","More than one method with same name, same signature, same number of parameters but different type","More than one method with same name, same number of parameters and type but different signature"],Answer:"More than one method with same name, same number of parameters and type but different signature"});
    this.qns.push({QnId:5,Qn:" Which concept of Java is a way of converting real world objects in terms of class?",Options:["Polymorphism","Encapsulation","Inheritance","Abstraction"],Answer:"Abstraction"});
    this.qns.push({QnId:6,Qn:"Which of the following is not a method of Object class ?",Options:["sleep","hashCode","toString","notifyAll"],Answer:"sleep"});
    this.qns.push({QnId:7,Qn:"Which of the following method is used for marshalling ",Options:["ObjectOutputStream","ObjectInputStream"],Answer:"ObjectOutputStream"});
    this.qns.push({QnId:8,Qn:"Does Integer wrapper class implement serializable ?",Options:["True","False"],Answer:"True"});
    this.qns.push({QnId:9,Qn:"Which of the following is a Spring MVC Controller ?",Options:["Dispatcher Servlet","View Resolver","Handler Mapping","None of the above"],Answer:"Dispatcher Servlet"});
    this.qns.push({QnId:10,Qn:"Which type of statement is used for stored procedures   and functions in JDBC ?",Options:["Statement","PreparedStatement","CallableStatement","All of the above"],Answer:"CallableStatement"});
    return this.qns;
  }
}
