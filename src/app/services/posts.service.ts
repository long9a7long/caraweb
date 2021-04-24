import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GetPostReqModel } from '../models/posts/req/get-posts.req-model';
import { GetPostResModel } from '../models/posts/res/get-post.res-model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  _baseUrl = '/api/';
  constructor(private http: HttpClient) {}

  public getRecentlyPosts(model?: GetPostReqModel) {
    let params = new HttpParams();
    if (model?.count) params = params.append('count', model.count.toString());
    if (model?.page) params = params.append('page', model.page.toString());
    if (model?.post_type)
      params = params.append('post_type', model.post_type.toString());
    return this.http
      .get<GetPostResModel>(this._baseUrl + 'get_recent_posts', {
        observe: 'response',
        params,
      })
      .pipe(
        map((res) => {
          return res.body;
        })
      );
  }
}
