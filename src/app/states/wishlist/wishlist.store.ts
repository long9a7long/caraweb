import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { LOCAL_STORAGE_KEY } from 'src/app/configs/storage-key';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { createWishlist, Wishlist } from './wishlist.model';

export interface WishlistState extends EntityState<Wishlist> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wishlist' })
export class WishlistStore extends EntityStore<WishlistState> {
  constructor(private localStorageService: LocalStorageService) {
    super(createWishlist());
    const wishListStored = localStorageService.getItem(
      LOCAL_STORAGE_KEY.WISH_LIST_KEY
    );
    if (wishListStored && Object.keys(wishListStored).length !== 0)
      wishListStored.forEach((w) => {
        this.add(w);
      });
  }
}
