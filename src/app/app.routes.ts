import {Routes} from '@angular/router';
import {LogginComponent} from './loggin/loggin.component';
import { VotesComponent } from './votes/votes.component';
import {InscriptionComponent} from './inscription/inscription.component';

export const ROUTES: Routes = [
  { path: '', component: LogginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'votes', component: VotesComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }


  /*{path: 'inscription', component: InscriptionComponent}*/
];
