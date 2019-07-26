import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LogginComponent} from './loggin/loggin.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpCollegueInterceptor} from './_helpers/http-interceptor';
import {InscriptionComponent} from './inscription/inscription.component';
import {VotesComponent} from './votes/votes.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LogginComponent,
    MenuComponent,
    VotesComponent


  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpCollegueInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
