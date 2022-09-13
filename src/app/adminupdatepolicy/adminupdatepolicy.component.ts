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
    memberId : localStorage.getItem("example")?.toString(),
  }
  response:any;

  constructor(private policyservices : PolicyServices,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.policyservices.updatepolicy(this.fields)
    .subscribe(
      response => {
        console.log(response);
      this.response = response;
      this.router.navigate(['/admin'])
      }
    );
    localStorage.setItem("example",this.fields.memberId.toString());
      console.log(localStorage.getItem("example")?.toString());
  }
    
  
}
