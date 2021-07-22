import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUsers } from 'src/models/user';

const API_URL = 'http://127.0.0.1:8000/'

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    
      getAdminBoard(): Observable<any> {
        return this.http.get(API_URL + 'users', { responseType: 'text' });
      }

      getUsers(): Observable<IUsers[]>
      {
        return this.http.get<IUsers[]>(API_URL+'users')
        .pipe(catchError(this.errorHandler));
      }
    
      
      getUserById(id: number): Observable<IUsers[]>{
        return this.http.get<IUsers[]>(API_URL + 'users/' + id)
        .pipe(catchError(this.errorHandler));
      }
    
      updateUser(id: number, empData: any): Observable<IUsers[]>{
        console.log(empData)
        console.log(API_URL + '/users/' + id)
        return this.http.put<IUsers[]>(API_URL + 'users/' + id, empData)
        .pipe(catchError(this.errorHandler));
      }
    
      postUser(empData: any): Observable<IUsers[]>{
        return this.http.post<IUsers[]>(API_URL + 'users', empData)
        .pipe(catchError(this.errorHandler));
      }
      
      deleteUser(id: any){
        return this.http.delete(API_URL + 'users/' + id)
      }
    
      errorHandler(error: HttpErrorResponse)
      {
        return throwError(error.message || 'Server Error')
      }
}