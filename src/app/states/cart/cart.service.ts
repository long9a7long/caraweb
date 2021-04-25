import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { LOCAL_STORAGE_KEY } from 'src/app/configs/storage-key';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Cart, CartItem } from './cart.model';
import { CartStore } from './cart.store';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(
    private cartStore: CartStore,
    private localStorageService: LocalStorageService
  ) {}

  get(): Cart {
    return this.localStorageService.getItem(LOCAL_STORAGE_KEY.CART_KEY);
  }

  add(cart: Cart) {
    this.cartStore.add(cart);
    this.localStorageService.setItem(LOCAL_STORAGE_KEY.CART_KEY, [cart]);
  }

  update(id, cart: Partial<Cart>) {
    this.cartStore.update(id, cart);
    this.localStorageService.setItem(LOCAL_STORAGE_KEY.WISH_LIST_KEY, cart);
  }

  remove(id: ID) {
    this.cartStore.remove(id);
    this.localStorageService.removeItem(LOCAL_STORAGE_KEY.WISH_LIST_KEY);
  }
}
