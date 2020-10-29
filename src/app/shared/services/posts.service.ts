import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from 'src/app/shared/interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  webServer: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.webServer}/posts`);
  }

  getPost(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.webServer}/posts/${postId}`);
  }

  getPostComments(postId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.webServer}/posts/${postId}/comments`);
  }

  addPost(comment: string): Observable<Post> {
    return this.http.post<Post>(`${this.webServer}/posts`, {
      userId: 1,
      firstName: "John",
      lastName: "Smith",
      email: "admin@mail.com",
      content: comment,
      datePosted: Date.now()
    });
  }
}
