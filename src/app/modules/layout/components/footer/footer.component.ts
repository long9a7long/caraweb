import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from 'src/app/configs/global-const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent implements OnInit {
  defaultImage = GlobalConfig.defaultLazyLoadingImage;
  constructor() {}

  ngOnInit() {}

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
