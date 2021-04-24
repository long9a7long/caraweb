import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts/res/get-post.res-model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.less'],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  constructor() {}

  ngOnInit() {}
}