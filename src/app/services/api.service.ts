import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'https://dummyjson.com/users';


  constructor(private http: HttpClient) {}

    AllUsers(): Observable<any> {
      return this.http.get(this.baseUrl);
    }
   
}
