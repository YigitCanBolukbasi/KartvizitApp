import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<Cart[]> {
    return this.http.get<Cart[]>(
      `https://demo.limantech.com/cards/public/api/cards`
    );
  }
}
