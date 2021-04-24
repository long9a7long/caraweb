import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Wishlist } from 'src/app/states/wishlist/wishlist.model';
import { WishlistQuery } from 'src/app/states/wishlist/wishlist.query';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.less'],
})
export class SubHeaderComponent implements OnInit {
  isShowMenuItems: boolean[] = [];
  isShowMenuItemsContents: boolean[] = [];
  isHoverEffect: boolean = false;
  wishLists: Observable<Wishlist[]>;
  wishListsLength: Observable<number>;

  constructor(private wishListQuery: WishlistQuery) {}

  ngOnInit() {
    this.wishLists = this.wishListQuery.wishLists$;
    this.wishListsLength = this.wishListQuery.wishLists$.pipe(
      map((res) => {
        return res ? res.length : 0;
      })
    );
  }

  handleShowMenuItem(menuItem: number) {
    this.isShowMenuItems[menuItem] = true;
  }

  handleHideMenuItem(menuItem: number) {
    setTimeout(() => {
      this.isShowMenuItems[menuItem] = false;
    }, 10);
  }

  handleShowMenuItemContents(menuItem: number) {
    this.isShowMenuItemsContents[menuItem] = true;
  }

  handleHideMenuItemContents(menuItem: number) {
    this.isShowMenuItemsContents[menuItem] = false;
  }

  isHaveShowMenuItemContents() {
    return (
      this.isShowMenuItems.findIndex((e) => e === true) !== -1 ||
      this.isShowMenuItemsContents.findIndex((e) => e === true) !== -1
    );
  }

  handleHoverEffect() {
    this.isHoverEffect = true;
  }
}
