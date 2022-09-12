import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemberRegister } from '../models/memberregistration';

@Injectable({
    providedIn: 'root'
  })

  export class searchMembers{
    baseUrl = 'https://localhost:7238/Insurance/Members';
    Url = 'https://localhost:7238/Insurance/SearchUser/GetById';
    constructor(private http: HttpClient) { }

    member(memberregister : MemberRegister):Observable<MemberRegister[]>{
        return this.http.post<MemberRegister[]>(this.baseUrl,memberregister)
    };

MemberSearch(search:MemberRegister):Observable<any>{
    let queryparams = new HttpParams();
    queryparams = queryparams.append("MemberID",search.memberID);
    queryparams = queryparams.append("FirstName",search.firstName);
    queryparams = queryparams.append("LastName",search.lastName);

    return this.http.get<any>(this.Url,{params:queryparams});
}

  }