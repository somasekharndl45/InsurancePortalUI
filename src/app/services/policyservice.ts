import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PolicyFields } from '../models/policysubmission';

@Injectable({
    providedIn: 'root'
  })

  export class PolicyServices{
    // baseUrl ='https://localhost:7238/Insurance/CreateClaimSubmission/'
    // updateUrl ='https://localhost:7238/Insurance/EditPolicy/'
    constructor(private http: HttpClient) { }
baseUrl ='https://insuranceportalservice.azurewebsites.net/Insurance/CreateClaimSubmission'
updateUrl ='https://insuranceportalservice.azurewebsites.net/Insurance/EditPolicy'
    Policyregister(policyfield : PolicyFields): Observable<PolicyFields> {
        return this.http.post<PolicyFields>(this.baseUrl, policyfield
            );
      }
  updatepolicy(policy:PolicyFields):Observable <PolicyFields>{
    return this.http.put<PolicyFields>(this.updateUrl,policy)
  }

  }