import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { Users } from '../models/user';

@Injectable({
    providedIn: 'root'
  })
  
  export class LoginServices{
    // baseUrl = 'https://localhost:7238/Insurance/Login/'
    baseUrl='https://localhost:7110/api/Authentication'
     registerUrl ='https://localhost:7238/Insurance/CreateMembers/'
    constructor(private http: HttpClient) { }

    login(credential : Credentials):Observable<Credentials[]>{
        console.log('Login')
        return this.http.post<any>(this.baseUrl, credential );
  }

  register(user : Users): Observable<Users> {
    return this.http.post<Users>(this.registerUrl, user);
  }
  }