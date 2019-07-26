import {Routes} from '@angular/router';
import {LogginComponent} from './loggin/loggin.component';
import {InscriptionComponent} from './inscription/inscription.component';

export const ROUTES: Routes = [
  { path: '', component: LogginComponent },
  { path: 'inscription', component: InscriptionComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
