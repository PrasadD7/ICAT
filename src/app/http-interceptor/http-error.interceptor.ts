import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler,HTTP_INTERCEPTORS } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorService } from '../services/http-error.service';

@Injectable()
export class HttpErrorInterceptor implements HttpErrorInterceptor{

constructor(private httpErrorService:HttpErrorService){}

intercept(request : HttpRequest<any>,next: HttpHandler){

  return next.handle(request)
  .pipe(
    catchError(err => {
        let errorMsg='';
        console.log(err);
        this.httpErrorService.showError(err);
        return throwError('Invalid HTTP Request, Please Try Again');
      }

    )
  )
}
}
