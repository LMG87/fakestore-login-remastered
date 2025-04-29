import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable, of, tap } from 'rxjs';
import { User } from '../interfaces/store.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseHttpService {
  private usersCache = new Map<string, User[]>();

  getUsers(): Observable<User[]> {
    const key = 'users';
    if (this.usersCache.has(key)) {
      return of(this.usersCache.get(key)!);
    }
    return this.http
      .get<User[]>(`${this.apiUrl}/users`)
      .pipe(tap((resp) => this.usersCache.set(key, resp)));
  }
}
