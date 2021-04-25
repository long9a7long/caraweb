import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemsSlideComponent } from './product-items-slide.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, NzIconModule, RouterModule],
  declarations: [ProductItemsSlideComponent],
  exports: [ProductItemsSlideComponent],
})
export class ProductItemsSlideModule {}
