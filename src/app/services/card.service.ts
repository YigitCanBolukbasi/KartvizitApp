import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cards!: Cart[];

  constructor(private http: HttpClient) {}

  getCards(): void {
    this.http
      .get<Cart[]>(`https://demo.limantech.com/cards/public/api/cards`)
      .subscribe((res: Cart[]) => {
        this.cards = res;
      });
  }

  addCard(card: Cart) {
    return this.http.post(
      `https://demo.limantech.com/cards/public/api/cards`,
      card
    );
  }

  updateCard(card: Cart, cardId: number) {
    return this.http.put(
      `https://demo.limantech.com/cards/public/api/cards/${cardId}`,
      card
    );
  }

  deleteCard(cardId: number): Observable<any> {
    return this.http.delete(
      `https://demo.limantech.com/cards/public/api/cards/${cardId}`
    );
  }
}
