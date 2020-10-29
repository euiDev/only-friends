import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PostsService } from 'src/app/shared/services/posts.service';

import { Post } from 'src/app/shared/interfaces/post';

@Component({
  selector: 'app-posts-home',
  templateUrl: './posts-home.component.html',
  styleUrls: ['./posts-home.component.css']
})
export class PostsHomeComponent implements OnInit, OnDestroy {
  posts$: Observable<Post[]>;
  subscription = [];
  commentForm = new FormGroup({
    comment: new FormControl('', [
      Validators.required,
      Validators.maxLength(280)
    ])
  });

  constructor(private postSrvc: PostsService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }
  
  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

  fetchPosts() {
    this.posts$ = this.postSrvc.getPosts().pipe(
      map(posts => posts.sort((post1, post2) => post2.datePosted - post1.datePosted))
    );
  }

  onComment(): void {
    this.subscription.push(
      this.postSrvc.addPost(this.commentForm.value.comment).subscribe(() => this.fetchPosts())
    );
    this.onClickReset();
  }

  onClickReset() {
    this.commentForm.reset();
  }
}
