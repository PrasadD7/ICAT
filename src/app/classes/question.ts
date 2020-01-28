export class Question {

  constructor(
    public Qn: String,
    public Options : String[],
    public Answer : String,
    public level : number
  ) { }

}

//{"QnId":1,
// "Qn":"Which of the following is not OOPS concept in Java?",
// "Options":["Inheritance","Encapsulation","Polymorphism","Compilation"],
// "Answer":"Compilation",
// "level":1}