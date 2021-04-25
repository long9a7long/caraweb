import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RouterName } from './configs/route';
import { SingleProductResolver } from './resolver/single-product.resolver';

const routes: Routes = [
  {
    path: RouterName.singleProduct,
    loadChildren: () =>
      import('./modules/single-product/single-product.module').then(
        (mod) => mod.SingleProductModule
      ),
    resolve: { Product: SingleProductResolver },
  },
  {
    path: RouterName.home,
    loadChildren: () =>
      import('./modules/home/home.module').then((mod) => mod.HomeModule),
    redirectTo: '',
  },
  {
    path: RouterName.notFount,
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (mod) => mod.NotFoundModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((mod) => mod.HomeModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
