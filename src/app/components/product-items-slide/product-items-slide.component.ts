import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'ngx-wooapi';
import { map } from 'rxjs/operators';
import { Wishlist } from 'src/app/states/wishlist/state/wishlist.model';
import { WishlistQuery } from 'src/app/states/wishlist/state/wishlist.query';
import { WishlistService } from 'src/app/states/wishlist/state/wishlist.service';

@Component({
  selector: 'app-product-items-slide',
  templateUrl: './product-items-slide.component.html',
  styleUrls: ['./product-items-slide.component.less'],
})
export class ProductItemsSlideComponent implements OnInit {
  @Input() product: Product;
  isWishListed: boolean;
  currentIdWishlist: number;
  constructor(
    private wishListService: WishlistService,
    private wishListQuery: WishlistQuery
  ) {}

  ngOnInit() {
    this.wishListQuery.wishLists$.subscribe((wLists) => {
      if (wLists) {
        const indexFind = wLists.findIndex(
          (e) => e.product_id === this.product.id
        );
        this.isWishListed = indexFind !== -1;

        if (this.isWishListed) this.currentIdWishlist = +wLists[indexFind].id;
      }
    });
  }

  addToWishList(prodId: number) {
    const wishList: Wishlist = {
      id: new Date().getTime(),
      date_added: new Date(),
      product_id: prodId,
    };
    this.wishListService.add(wishList);
  }

  removeFromWishList(id: number) {
    this.wishListService.remove(id);
  }
}
