import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'ngx-wooapi';

@Component({
  selector: 'app-product-items-slide',
  templateUrl: './product-items-slide.component.html',
  styleUrls: ['./product-items-slide.component.less'],
})
export class ProductItemsSlideComponent implements OnInit {
  @Input() product: Product;
  constructor() {}

  ngOnInit() {}
}
