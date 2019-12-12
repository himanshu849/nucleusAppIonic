import { Injectable } from '@angular/core';
import { IQuery } from '../model/query';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  registerQuery(user: IQuery) {
    return this.http.post(`${environment.apiUrl}/users/registerQuery`, user);
  }
}

