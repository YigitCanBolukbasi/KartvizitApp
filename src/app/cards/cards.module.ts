import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { MatCardModule } from '@angular/material/card';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [CardsComponent, CartItemComponent],
  imports: [CommonModule, CardsRoutingModule, MatCardModule],
})
export class CardsModule {}
