import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
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
  logout() {
    this.authService.logout();
    this.router.navigate(['/loggin']);
  }
}
