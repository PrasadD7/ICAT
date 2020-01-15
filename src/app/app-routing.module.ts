import { ResultComponent } from './result/result.component';
import { RegisterComponent } from './register/register.component';
import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'questions', component: QuestionComponent , canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'result', component: ResultComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
