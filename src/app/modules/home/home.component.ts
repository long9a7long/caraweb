import { Component, OnInit } from '@angular/core';
import {
  Product,
  ProductOrder,
  ProductOrderBy,
  ProductQuery,
  RetrieveProductsResponse,
  WoocommerceProductsService,
} from 'ngx-wooapi';
import { GetPostReqModel } from 'src/app/models/posts/req/get-posts.req-model';
import { Post } from 'src/app/models/posts/res/get-post.res-model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  products: Product[];
  posts: Post[];
  constructor(
    private wooProducs: WoocommerceProductsService,
    private postService: PostsService
  ) {}

  ngOnInit() {
    const queryProd: ProductQuery = {
      status: 'publish',
      in_stock: true,
      order: ProductOrder.desc,
      orderby: ProductOrderBy.date,
    };
    this.wooProducs.retrieveProducts(queryProd).subscribe(
      (response: RetrieveProductsResponse) => {
        console.log(response);

        this.products = response.products;
      },
      (err) => {
        console.log(err);
      }
    );

    const reqPostModel: GetPostReqModel = {
      count: 4,
      page: 1,
    };
    this.postService
      .getRecentlyPosts(reqPostModel)
      .subscribe((res) => (this.posts = res.posts));
  }

  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  isMoreOnePost() {
    return this.posts.length > 1;
  }
}
