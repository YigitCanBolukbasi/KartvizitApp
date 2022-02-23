import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cardItem!: Cart;

  constructor() {}

  ngOnInit(): void {}
}
