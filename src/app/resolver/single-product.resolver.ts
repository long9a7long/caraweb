import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Product } from 'ngx-wooapi';
import { Observable, of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { ProductCustomService } from '../services/product/product-custom.service';

@Injectable({ providedIn: 'root' })
export class SingleProductResolver implements Resolve<Product> {
  slugProduct: String;
  constructor(
    private prodCustomService: ProductCustomService,
    private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Product> | Promise<Product> | Product {
    const paramURL = route.paramMap.get('slug');
    if (paramURL) {
      this.slugProduct = paramURL;
    } else {
      this.router.navigate(['/not-found']);
    }
    return this.prodCustomService.retrieveProductBySlug(this.slugProduct).pipe(
      take(1),
      tap((product) => {
        if (!product) this.router.navigate(['/not-found']);
      }),
      catchError((_) => {
        this.router.navigate(['/not-found']);
        return of(null);
      })
    );
  }
}
