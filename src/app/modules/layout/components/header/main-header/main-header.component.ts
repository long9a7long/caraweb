import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}

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
