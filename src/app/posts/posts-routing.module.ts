import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsHomeComponent } from 'src/app/posts/posts-home/posts-home.component';

const routes: Routes = [
  { path: '', component: PostsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
