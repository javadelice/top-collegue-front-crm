import { Component, OnInit } from '@angular/core';

interface Collegue {
  name: string;
  phone: string;
  score: number;
}

const COLLEGUES: Collegue[] = [
  {
    name: 'Johnny',
    phone: '3525452324',
    score: 123
  },
  {
    name: 'Henri',
    phone: '0123456789',
    score: 987
  },
  {
    name: 'Antoine',
    phone: '0264987531',
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
