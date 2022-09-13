import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyFields } from '../models/policysubmission';
import { PolicyServices } from '../services/policyservice';


@Component({
  selector: 'app-adminaddpolicy',
  templateUrl: './adminaddpolicy.component.html',
  styleUrls: ['./adminaddpolicy.component.css']
})
export class AdminaddpolicyComponent implements OnInit {

  fields : PolicyFields = {
    policyID : 0,
    policyStatus : '',
    PolicyType : '',
    PremiumAmount:0,
    PolicyEffectiveDate: '',
    remark:'',
    memberID : localStorage.getItem("example")?.toString(),
  }
  response:any;
  constructor(private policyservices : PolicyServices,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.policyservices.Policyregister(this.fields)
    .subscribe(
      response => {
        console.log(response);
      this.response = response;
      this.router.navigate(['/admin'])
      }
    );
  }

}
