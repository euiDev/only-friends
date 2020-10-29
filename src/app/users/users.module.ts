import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UsersHomeComponent } from './users-home/users-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [UsersHomeComponent, UserProfileComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
