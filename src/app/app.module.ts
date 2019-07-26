import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InscriptionComponent} from './inscription/inscription.component';
import {FormsModule} from '@angular/forms';
import {LogginComponent} from './loggin/loggin.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {MenuComponent} from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LogginComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
