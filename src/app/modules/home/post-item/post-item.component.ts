import { Component, Input, OnInit } from '@angular/core';
import { GlobalConfig } from 'src/app/configs/global-const';
import { Post } from 'src/app/models/posts/res/get-post.res-model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.less'],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  defaultImage = GlobalConfig.defaultLazyLoadingImage;
  constructor() {}

  ngOnInit() {}
}
