import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LogginComponent } from './loggin/loggin.component';
import { RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { VotesComponent } from './votes/votes.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomComponent } from './custom/custom.component';


@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    MenuComponent,
    VotesComponent,
    CustomComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
