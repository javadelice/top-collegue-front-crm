import { Component, OnInit } from '@angular/core';

interface Collegue {
  name: string;
  photo: string;
  score: number;
}

const COLLEGUES: Collegue[] = [
  {
    name: 'Johnny',
    photo: 'http://fr.web.img6.acsta.net/c_215_290/pictures/15/08/12/12/24/179903.jpg',
    score: 123
  },
  {
    name: 'Henri',
    photo: 'http://fr.web.img6.acsta.net/c_215_290/pictures/15/08/12/12/24/179903.jpg',
    score: 987
  },
  {
    name: 'Antoine',
    photo: 'http://fr.web.img6.acsta.net/c_215_290/pictures/15/08/12/12/24/179903.jpg',
    score: 456
  },
];

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})

export class ClassementComponent implements OnInit {

collegues = COLLEGUES;

  constructor() { }

  ngOnInit() {
  }

}
