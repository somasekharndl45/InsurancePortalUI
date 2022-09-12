import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PolicyFields } from '../models/policysubmission';

@Injectable({
    providedIn: 'root'
  })

  export class PolicyServices{
    baseUrl ='https://localhost:7238/Insurance/CreateClaimSubmission/'
    constructor(private http: HttpClient) { }

    Policyregister(policyfield : PolicyFields): Observable<PolicyFields> {
        return this.http.post<PolicyFields>(this.baseUrl, policyfield
            );
      }


  }