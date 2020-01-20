import { Question } from "./question";
export class User {

  constructor(
    public name: String,
    public email: String,
    public password: String,
    public mobile: String,
    public scores: any[]=[],
    public timeTaken: number
  ) { }

}
