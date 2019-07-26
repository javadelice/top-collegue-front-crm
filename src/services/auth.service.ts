import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import {environment} from '../environments/environment';
import {flatMap, map, tap} from 'rxjs/operators';
import {UserConnected} from '../app/models/UserConnected';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public connected = false;
  subCollegueConnecte = new Subject<UserConnected>();
  URL_BACKEND = environment.backendUrl;

  constructor(private httpClient: HttpClient, private router: Router) { }

  isConnected(): Observable<boolean> {
    return of(this.connected)
      .pipe(
        flatMap(estConnecte => {

          if (estConnecte) { return of(true); }

          return this.getMe().pipe(
            map(col => true)
          );
        })
      );
  }

  getMe(): Observable<UserConnected> {
    return this.httpClient.get<UserConnected>(this.URL_BACKEND + 'me'
    ).pipe(
      tap(col => this.publier(col))
    );
  }

  login(email: string, password: string) {
    const URL_BACKEND = environment.backendUrl;
    return this.httpClient.post<any>(`${URL_BACKEND}auth`, { email, motDePasse: password }).pipe(
      tap(() => {
        this.connected = true;
      })
    );
  }

  publier(user: UserConnected) {
    this.subCollegueConnecte.next(user);
  }

  abonnemenCollegueConnecte(): Observable<UserConnected> {
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
