import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cart } from 'src/app/models/cart';
import { CardModalComponent } from '../card-modal/card-modal.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cardItem!: Cart;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openUpdateCardModal(cardItem: Cart): void {
    this.dialog.open(CardModalComponent, { width: '400px', data: cardItem });
  }
}
