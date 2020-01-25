import { AngularFireAuth } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { QuestionService } from './services/question.service';
import { AuthGuard } from "./auth/auth.guard";
import { ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { HttpErrorInterceptor } from "./http-interceptor/http-error.interceptor";
import { AlertComponent } from './popups/alert/alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorService } from './services/http-error.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    RegisterComponent,
    LoginComponent,
    ResultComponent,
    NavbarComponent,
    AdminComponent,
    AlertComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [QuestionService, AuthGuard,{provide : HTTP_INTERCEPTORS, useClass:HttpErrorInterceptor, multi:true }, HttpErrorService],
  bootstrap: [AppComponent],
  entryComponents:[ AlertComponent ]
})
export class AppModule { }
