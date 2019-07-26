import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  constructor(private srv: DataService) { }

  colleguesParticipants = [];

  ngOnInit() {
    this.srv.getAllColleguePhotos()
      .subscribe(collegues => this. colleguesParticipants = collegues);
  }

}
