import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly endPoint: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  firstClick(): void {
    console.log('clicked called in service');
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.endPoint);
  }

}
