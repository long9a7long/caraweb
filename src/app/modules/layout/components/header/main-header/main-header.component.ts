import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Wishlist } from 'src/app/states/wishlist/state/wishlist.model';
import { WishlistQuery } from 'src/app/states/wishlist/state/wishlist.query';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.less'],
})
export class MainHeaderComponent implements OnInit {
  // isShowMenuItemWrapper: boolean = false;
  isShowMenuItems: boolean[] = [];
  isShowMenuItemsContents: boolean[] = [];
  isHoverEffect: boolean = false;

  wishLists: Observable<Wishlist[]>;
  wishListsLength: Observable<number>;

  constructor(private wishListQuery: WishlistQuery) {}

  ngOnInit() {
    this.wishLists = this.wishListQuery.wishLists$;
    this.wishListsLength = this.wishListQuery.wishLists$.pipe(
      map((res) => res?.length)
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
