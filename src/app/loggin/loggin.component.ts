import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  loggedInMode: boolean = false;
  constructor() { }

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
