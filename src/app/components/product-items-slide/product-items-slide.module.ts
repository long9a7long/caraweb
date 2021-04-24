import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemsSlideComponent } from './product-items-slide.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [CommonModule, NzIconModule],
  declarations: [ProductItemsSlideComponent],
  exports: [ProductItemsSlideComponent],
})
export class ProductItemsSlideModule {}
