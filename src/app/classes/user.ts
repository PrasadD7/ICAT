import { Question } from "./question";
export class User {

  constructor(
    public id : number,
    public name: String,
    public email: String,
    public password: String,
    public mobile: String,
    public scores: any[] = [],
    public choices: any[] = [],
    public timeTaken: number,
    public timeTakenPerQuestion: any[] = []
  ) {
   }

}
