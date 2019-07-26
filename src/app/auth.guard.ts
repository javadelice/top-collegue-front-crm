import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {catchError, map} from 'rxjs/operators';
import {UserConnected} from './models/UserConnected';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private authServ: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    if (!this.authServ.isConnected) {
      return this.authServ.getMe().pipe(
          map((user: UserConnected) => {
            if (user.status) {
              this.authServ.connected = true;
              if (user.status.includes('SUSCRIBED')) {

                return true;
              }
            } else {
              this.authServ.connected = false;
              return false;
            }

          }),
          catchError((err: any) => {
            this.router.navigate(['/login']);
            return of(false);
          })
      );
    }
    return of(true);

  }

}
