import { Component } from '@angular/core';
import { CollegueAuth } from './models/CollegueAuth';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegue-front-crm';
  connectedCol: CollegueAuth;

  constructor(private srv: DataService, private http: HttpClient, private router: Router, private authService: AuthService) {
  }


  ngOnInit() {
    this.authService.abonnemenCollegueConnecte()
    .subscribe(
      col => {
        this.connectedCol = col;
      }
    )
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/loggin']);
  }


}
