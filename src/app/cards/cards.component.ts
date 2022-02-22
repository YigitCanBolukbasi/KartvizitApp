import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cardItem = {
    title: 'frond end developer',
    name: 'yigit Can Bolukbasi',
    phone: '+90 545 344 2295',
    email: 'y.can.bolukbasi@gmail.com',
    address: 'Gokturk/Istanbul',
  };

  constructor() {}

  ngOnInit(): void {}
}
