import { Component, OnInit, Input } from '@angular/core';
import {CollegueAuth} from '../models/CollegueAuth';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  col: CollegueAuth = new CollegueAuth();
  loggedInMode = false;
  constructor(private srvAuth: AuthService) { }

  ngOnInit() {
    this.loggedInMode = false;
  }
  loggedIn() {
    this.loggedInMode =   !this.loggedInMode;
  }

  connexion() {
    this.srvAuth.login(this.col.email, this.col.password)
    .subscribe(() => this.loggedInMode = true);
  }
}
