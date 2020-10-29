import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: async () => { // Lazy loading the users module
      const dynamicImport = await import('./users/users.module');
      return dynamicImport.UsersModule;
    }
  },
  {
    path: '',
    loadChildren: async () => { // Lazy loading the posts module
      const dynamicImport = await import('./posts/posts.module');
      return dynamicImport.PostsModule;
    }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
