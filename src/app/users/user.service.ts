import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ResponseUsers } from './user.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "https://reqres.in/api/users?page=2";

  constructor(private http: HttpClient) { }

  //função para recuperar usuários da api assincronamente
  //Observable
  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);
  }
}
