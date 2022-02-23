import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardService } from '../services/card.service';
import { CardModalComponent } from './card-modal/card-modal.component';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cards!: Cart[];

  constructor(public dialog: MatDialog, private cardService: CardService) {}

  ngOnInit(): void {
    this.getCards();
  }

  openAddCardModal() {
    this.dialog.open(CardModalComponent, {
      width: '480px',
    });
  }

  getCards(): void {
    this.cardService.getCards().subscribe((res: Cart[]) => {
      this.cards = res;
    });
    console.log('burada', this.cards);
  }
}
