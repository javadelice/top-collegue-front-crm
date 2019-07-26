import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {CollegueParticipant, CollegueParticipantVotes} from '../models/CollegueParticipant';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL_BACKEND = environment.backendUrl;

  constructor(private httpClient: HttpClient) { }


  subCollegueParticipant = new Subject<CollegueParticipant>();

  publier(unCollegue: CollegueParticipant) {
    this.subCollegueParticipant.next(unCollegue);
  }

  abonnement(): Observable<CollegueParticipant> {
    return this.subCollegueParticipant.asObservable();
  }

  getAllColleguePhotos(): Observable<CollegueParticipantVotes[]> {
    return this.httpClient
      .get<CollegueParticipantVotes[]>(this.URL_BACKEND + 'participants' );
  }

}
