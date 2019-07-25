import { Component, OnInit } from '@angular/core';
import {CollegueParticipant} from '../models/CollegueParticipant';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  connectedCol: CollegueParticipant = new CollegueParticipant();
  constructor(private router: Router, private authService: AuthService) { }

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
