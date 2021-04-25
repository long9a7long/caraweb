import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { LOCAL_STORAGE_KEY } from 'src/app/configs/storage-key';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Wishlist } from './wishlist.model';
import { WishlistStore } from './wishlist.store';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  constructor(
    private wishlistStore: WishlistStore,
    private localStorageService: LocalStorageService
  ) {}

  get(): Wishlist[] {
    const list = this.localStorageService
      .getItem(LOCAL_STORAGE_KEY.WISH_LIST_KEY)
      .map((item) => item as Wishlist);

    return list;
  }

  add(wishlist: Wishlist) {
    let wishListStored = this.localStorageService.getItem(
      LOCAL_STORAGE_KEY.WISH_LIST_KEY
    ) as Wishlist[];
    if (wishListStored && Object.keys(wishListStored).length !== 0) {
      if (
        wishListStored.findIndex(
          (e) =>
            e.product_id === wishlist.product_id ||
            (e.variation_id &&
              wishlist.variation_id &&
              e.variation_id === wishlist.variation_id)
        ) === -1
      ) {
        this.wishlistStore.add(wishlist);
        let wishlistArr = [...wishListStored, wishlist];

        this.localStorageService.setItem(
          LOCAL_STORAGE_KEY.WISH_LIST_KEY,
          wishlistArr
        );
      }
    } else {
      this.wishlistStore.add(wishlist);
      this.localStorageService.setItem(LOCAL_STORAGE_KEY.WISH_LIST_KEY, [
        wishlist,
      ]);
    }
  }

  update(id, wishlist: Partial<Wishlist>) {
    this.wishlistStore.update(id, wishlist);
    let wishListStored = this.localStorageService.getItem(
      LOCAL_STORAGE_KEY.WISH_LIST_KEY
    );

    wishListStored.forEach((e: Wishlist, index) => {
      if (e.id === id) wishListStored[index] = { ...wishlist };
    });
    this.localStorageService.setItem(LOCAL_STORAGE_KEY.WISH_LIST_KEY, [
      ...wishListStored,
    ]);
  }

  remove(id: ID) {
    this.wishlistStore.remove(id);

    let wishListStored = this.localStorageService.getItem(
      LOCAL_STORAGE_KEY.WISH_LIST_KEY
    );

    wishListStored = wishListStored.filter((e: Wishlist) => e.id !== id);
    this.localStorageService.setItem(LOCAL_STORAGE_KEY.WISH_LIST_KEY, [
      ...wishListStored,
    ]);
  }
}
