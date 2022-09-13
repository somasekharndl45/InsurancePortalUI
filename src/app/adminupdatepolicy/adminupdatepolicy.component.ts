import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyFields } from '../models/policysubmission';
import { PolicyServices } from '../services/policyservice';

@Component({
  selector: 'app-adminupdatepolicy',
  templateUrl: './adminupdatepolicy.component.html',
  styleUrls: ['./adminupdatepolicy.component.css']
})
export class AdminupdatepolicyComponent implements OnInit {

  fields : PolicyFields = {
    policyID : 0,
    policyStatus : localStorage.getItem("policystatus")?.toString(),
    PolicyType : localStorage.getItem("policyid")?.toString(),
    PremiumAmount:localStorage.getItem("premiumamount"),
    PolicyEffectiveDate: '',
    remark:'',
    memberID : localStorage.getItem("example")?.toString(),
  }
  response:any;

  constructor(private policyservices : PolicyServices,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    localStorage.setItem("example",this.fields.memberID.toString());
      console.log(localStorage.getItem("example")?.toString());
  }
}
