import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubHeaderComponent } from './components/header/sub-header/sub-header.component';
import { MainHeaderComponent } from './components/header/main-header/main-header.component';
import { MobileHeaderComponent } from './components/header/mobile-header/mobile-header.component';
import { TrangSucMegaMenuComponent } from './components/header/shared/trang-suc-mega-menu/trang-suc-mega-menu.component';
import { YeuThanhHonMegaMenuComponent } from './components/header/shared/yeu-thanh-hon-mega-menu/yeu-thanh-hon-mega-menu.component';
import { KimCuongMegaMenuComponent } from './components/header/shared/kim-cuong-mega-menu/kim-cuong-mega-menu.component';
import { ChinhSachMegaMenuComponent } from './components/header/shared/chinh-sach-mega-menu/chinh-sach-mega-menu.component';
import { KhamPhaMegaMenuComponent } from './components/header/shared/kham-pha-mega-menu/kham-pha-mega-menu.component';
import { LienHeMegaMenuComponent } from './components/header/shared/lien-he-mega-menu/lien-he-mega-menu.component';
import { QuaTangMegaMenuComponent } from './components/header/shared/qua-tang-mega-menu/qua-tang-mega-menu.component';
import { TinTucMegaMenuComponent } from './components/header/shared/tin-tuc-mega-menu/tin-tuc-mega-menu.component';
import { VeVinhCaraMegaMenuComponent } from './components/header/shared/ve-vinh-cara-mega-menu/ve-vinh-cara-mega-menu.component';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NzGridModule,
    NzIconModule,
    NzBadgeModule,
    NzMenuModule,
    LazyLoadImageModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SubHeaderComponent,
    MainHeaderComponent,
    MobileHeaderComponent,
    TrangSucMegaMenuComponent,
    YeuThanhHonMegaMenuComponent,
    KimCuongMegaMenuComponent,
    ChinhSachMegaMenuComponent,
    KhamPhaMegaMenuComponent,
    LienHeMegaMenuComponent,
    QuaTangMegaMenuComponent,
    TinTucMegaMenuComponent,
    VeVinhCaraMegaMenuComponent,
  ],
  exports: [LayoutComponent],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class LayoutModule {}
