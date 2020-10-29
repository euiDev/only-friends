import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { PostsHomeComponent } from './posts-home/posts-home.component';


@NgModule({
  declarations: [PostsHomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    PostsRoutingModule,
  ]
})
export class PostsModule { }
