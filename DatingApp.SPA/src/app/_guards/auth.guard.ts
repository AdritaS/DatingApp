import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';
import { AlertConfig } from 'ngx-bootstrap/alert/alert.config';
import * as alertify from 'alertifyjs';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.loggedIn1()) {
      return true;
    }

    alertify.error('You need to be logged in to access this area');
    this.router.navigate(['/home']);
    return false;
  }
}
