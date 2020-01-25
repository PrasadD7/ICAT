import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from '../popups/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(private _ngbModal: NgbModal) { }

showError(errors : string){
  console.log('Errors ->',errors);

const modalRef = this._ngbModal.open(AlertComponent);
modalRef.componentInstance.errorMessage = "Server error";

}

}
