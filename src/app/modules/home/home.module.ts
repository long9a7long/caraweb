import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductItemsSlideModule } from 'src/app/components/product-items-slide/product-items-slide.module';
import { FeaturedPostItemComponent } from './featured-post-item/featured-post-item.component';
import { PostItemComponent } from './post-item/post-item.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSpinModule } from 'ng-zorro-antd/spin';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzGridModule,
    SlickCarouselModule,
    ProductItemsSlideModule,
    NzEmptyModule,
    NzSpinModule,
  ],
  declarations: [HomeComponent, FeaturedPostItemComponent, PostItemComponent],
})
export class HomeModule {}
