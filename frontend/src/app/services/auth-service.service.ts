import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:8000/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string):
    Observable<any>{
      return this.http.post(AUTH_API + 'token',{
        username, password
      }, httpOptions);
  }

  register(username: string, password: string,
    first_name: string, last_name: string, email: string, is_superuser: boolean): Observable<any>{
      return this.http.post(AUTH_API + 'register', {
        username, password, first_name, last_name, email, is_superuser
      }, httpOptions);
    }


}
