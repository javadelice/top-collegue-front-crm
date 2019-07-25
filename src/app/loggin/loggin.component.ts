import { Component, OnInit, Input } from '@angular/core';
import {CollegueAuth} from './';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  loggedInMode: boolean = false;
  constructor() { }

  @Input() col: CollegueAuth = new CollegueAuth();

  ngOnInit() {
    this.loggedInMode = false;
  }
  loggedIn(){
    this.loggedInMode =   !this.loggedInMode;
  }

  connexion(email: string, password: string){
    /*this.srv.authentifyUser(email, password)
    .subscribe(()=> this.loggedInMode = true);*/
  }
}
