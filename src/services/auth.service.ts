import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CollegueAuth } from 'src/app/models/CollegueAuth';
import { Subject, Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { tap, flatMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private connected = false;
  subCollegueConnecte = new Subject<CollegueAuth>();
  URL_BACKEND = environment.backendUrl;

  constructor(private httpClient: HttpClient, private router: Router) { }

  isConnected(): Observable<boolean> {
    return of(this.connected)
      .pipe(
        flatMap(estConnecte => {

          if (estConnecte) return of(true);

          return this.getMe().pipe(
            map(col => true)
          );
        })
      );
  }

  getMe(): Observable<CollegueAuth> {
    return this.httpClient.get<CollegueAuth>(this.URL_BACKEND + '/me', {
      withCredentials: true
    }).pipe(
      tap(col => this.subCollegueConnecte.next(col))
    );
  }

  publier(user: CollegueAuth) {
    this.subCollegueConnecte.next(user);
  }

  abonnemenCollegueConnecte(): Observable<CollegueAuth> {
    return this.subCollegueConnecte.asObservable();
  }

  logout() {
    return this.httpClient
    .post(this.URL_BACKEND + '/logout', {},
    {
      withCredentials: true
    }).subscribe(() => {this.connected = false; this.subCollegueConnecte.next(null);
    });
  }
}
