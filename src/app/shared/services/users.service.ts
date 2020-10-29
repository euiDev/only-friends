import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { User } from 'src/app/shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  webServer: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.webServer}/users`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.webServer}/users/${userId}`);
  }

  getUserFirstName(userId: number): Observable<string> {
    return this.getUser(userId).pipe(
      pluck('firstName')
    );
  }

  getUserLastName(userId: number): Observable<string> {
    return this.getUser(userId).pipe(
      pluck('lastName')
    );
  }

  getUserEmail(userId: number): Observable<string> {
    return this.getUser(userId).pipe(
      pluck('email')
    );
  }
}
