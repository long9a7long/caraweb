import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts/res/get-post.res-model';

@Component({
  selector: 'app-featured-post-item',
  templateUrl: './featured-post-item.component.html',
  styleUrls: ['./featured-post-item.component.less'],
})
export class FeaturedPostItemComponent implements OnInit {
  @Input() post: Post;
  constructor() {}

  ngOnInit() {}
}
