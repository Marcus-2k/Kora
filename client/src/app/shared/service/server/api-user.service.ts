import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CreateUser, UserInfo } from '../../interface/interfaces';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiUserService {
  constructor(private http: HttpClient) {}
  url_server: string = environment.URL_SERVER_API + 'user';

  getUsers(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(`${this.url_server}/list`);
  }

  getUserInfo(id: string): Observable<UserInfo> {
    return this.http.get<UserInfo>(`${this.url_server}/new/${id}`);
  }

  createUser(data: CreateUser): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.url_server}/new`, data);
  }

  updateUser(data: CreateUser, id: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.url_server}/new/${id}`,
      data
    );
  }

  deleteUserById(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.url_server}/list/${id}`
    );
  }
}
