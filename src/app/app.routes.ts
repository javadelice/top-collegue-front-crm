import {Routes} from '@angular/router';
import {LogginComponent} from './loggin/loggin.component';
import { VotesComponent } from './votes/votes.component';

export const ROUTES: Routes = [
  { path: 'loggin', component: LogginComponent },
  { path: 'votes', component: VotesComponent },
  /*{path: 'inscription', component: InscriptionComponent}*/
];
