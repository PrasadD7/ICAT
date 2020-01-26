import { ResultComponent } from './result/result.component';
import { RegisterComponent } from './register/register.component';
import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddQuestionComponent } from './add-question/add-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component'
import { DeleteQuestionComponent } from './delete-question/delete-question.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'questions', component: QuestionComponent , canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'result', component: ResultComponent , canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'addquestion', component:AddQuestionComponent },
  { path: 'updatequestion', component:UpdateQuestionComponent },
  { path: 'deletequestion', component:DeleteQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
