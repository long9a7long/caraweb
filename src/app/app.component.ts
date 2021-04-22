import { Component } from '@angular/core';
import { WoocommerceProductsService } from 'ngx-wooapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'vinhcara';

  constructor(private wooProducs: WoocommerceProductsService) {}
  ngOnInit() {
    this.wooProducs.retrieveProducts().subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
