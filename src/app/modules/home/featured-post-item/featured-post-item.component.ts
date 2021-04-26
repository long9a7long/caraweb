import { Component, Input, OnInit } from '@angular/core';
import { GlobalConfig } from 'src/app/configs/global-const';
import { Post } from 'src/app/models/posts/res/get-post.res-model';

@Component({
  selector: 'app-featured-post-item',
  templateUrl: './featured-post-item.component.html',
  styleUrls: ['./featured-post-item.component.less'],
})
export class FeaturedPostItemComponent implements OnInit {
  @Input() post: Post;

  defaultImage = GlobalConfig.defaultLazyLoadingImage;
  constructor() {}

  ngOnInit() {}
}
