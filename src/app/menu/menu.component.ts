import { Component, OnInit } from '@angular/core';
import {CollegueParticipant} from '../models/CollegueParticipant';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  connectedCol: CollegueParticipant;
  constructor() { }

  ngOnInit() {
  }

  logout() {
  }
}
