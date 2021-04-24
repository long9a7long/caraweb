import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.less'],
})
export class SubHeaderComponent implements OnInit {
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
