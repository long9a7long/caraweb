import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'ngx-wooapi';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductCustomService {
  _baseUrl = 'products/';
  constructor(private http: HttpClient) {}

  public retrieveProductBySlug(slug: String): Observable<Product> {
    return this.http
      .get<Product>(this._baseUrl + '?slug=' + slug + '&')
      .pipe(map((res) => res[0]));
  }
}
