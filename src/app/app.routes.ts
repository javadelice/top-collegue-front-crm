import {Routes} from '@angular/router';
import {LogginComponent} from './loggin/loggin.component';

export const ROUTES: Routes = [
  { path: '', component: LogginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
