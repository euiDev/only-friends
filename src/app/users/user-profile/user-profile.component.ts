import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

import { UsersService } from 'src/app/shared/services/users.service';

import { User } from 'src/app/shared/interfaces/user';
import { Post } from 'src/app/shared/interfaces/post';

import { Observable } from 'rxjs';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user: User;
  posts$: Observable<Post[]>;
  subscription = [];
  constructor(private activatedRoute: ActivatedRoute,
              private userSrvc: UsersService,
              private postSrvc: PostsService) { }

  ngOnInit(): void {
    this.subscription.push(
      this.activatedRoute.params.pipe(
        switchMap(params => this.userSrvc.getUser(params.id))
      ).subscribe(user => this.user = user)
    );
    this.fetchPosts();
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

  fetchPosts() {
    this.posts$ = this.postSrvc.getPosts().pipe(
      map(posts => posts.sort((post1, post2) => post2.datePosted - post1.datePosted))
    );
  }
}
