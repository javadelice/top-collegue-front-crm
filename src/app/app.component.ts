import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CollegueAuth } from './models/CollegueAuth';
import { AuthService } from 'src/services/auth.service';
import {UserConnected} from './models/UserConnected';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'top-collegue-front-crm';
  connectedCol: UserConnected;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.abonnemenCollegueConnecte()
    .subscribe(
      col => {
        this.connectedCol = col;
      }
    );
  }

}
