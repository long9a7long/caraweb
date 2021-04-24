import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { WishlistStore, WishlistState } from './wishlist.store';

@Injectable({ providedIn: 'root' })
export class WishlistQuery extends QueryEntity<WishlistState> {
  wishLists$ = this.selectAll();

  constructor(protected store: WishlistStore) {
    super(store);
  }
}
