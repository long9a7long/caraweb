import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  yWindowPosition: number = 0;
  isScrollDown: boolean = false;
  constructor() {}

  ngOnInit() {}

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(_) {
    const yPos = document.documentElement.scrollTop || document.body.scrollTop;
    if (yPos > this.yWindowPosition) {
      // Scroll down bigger 100px
      this.isScrollDown = false;
    } else if (yPos < this.yWindowPosition && yPos > 100) {
      this.isScrollDown = true;
    } else {
      this.isScrollDown = false;
    }
    this.yWindowPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
  }
}
