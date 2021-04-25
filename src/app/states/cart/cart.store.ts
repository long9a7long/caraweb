import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { LOCAL_STORAGE_KEY } from 'src/app/configs/storage-key';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Cart } from './cart.model';

export interface CartState extends EntityState<Cart> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' })
export class CartStore extends EntityStore<CartState> {
  constructor(private localStorageService: LocalStorageService) {
    super();
    const cartStored = localStorageService.getItem(
      LOCAL_STORAGE_KEY.WISH_LIST_KEY
    );
    if (cartStored && Object.keys(cartStored).length !== 0)
      this.add(cartStored);
  }
}
