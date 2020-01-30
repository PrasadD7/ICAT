import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private route: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('admin') == 'isadmin')
      return true;
    this.route.navigate(['/']);
    return false;
  }

}
