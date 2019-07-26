import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {CollegueParticipantVotes} from '../models/CollegueParticipant';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  colleguesParticipants: CollegueParticipantVotes[];
  colSub: Subscription;
  constructor(private srv: DataService) { }



  ngOnInit() {
    this.srv.getAllColleguePhotos().subscribe(collegues => {
      this.colleguesParticipants = collegues;
    });
  }

}
