import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemberRegister } from '../models/memberregistration';

@Injectable({
    providedIn: 'root'
  })

  export class Registerservices{
    // baseUrl = 'https://localhost:7238/Insurance/Members/'
    baseUrl ='https://insuranceportalservice.azurewebsites.net/Insurance/Members'
    constructor(private http: HttpClient) { }

    register(mr : MemberRegister): Observable<MemberRegister> {
        return this.http.post<MemberRegister>(this.baseUrl, mr);
      }

  }