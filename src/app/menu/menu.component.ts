import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {UserConnected} from '../models/UserConnected';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  colConnected: Subscription;
  connectedCol: UserConnected;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.colConnected = this.authService.abonnemenCollegueConnecte()
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
