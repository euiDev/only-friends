import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/shared/services/users.service';

import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css']
})
export class UsersHomeComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private userSrvc: UsersService) { }

  ngOnInit(): void {
    this.users$ = this.userSrvc.getUsers();
  }
}
