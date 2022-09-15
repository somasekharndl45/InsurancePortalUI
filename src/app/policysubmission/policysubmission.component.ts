import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyFields } from '../models/policysubmission';
import { PolicyServices } from '../services/policyservice';

@Component({
  selector: 'app-policysubmission',
  templateUrl: './policysubmission.component.html',
  styleUrls: ['./policysubmission.component.css']
})
export class PolicysubmissionComponent implements OnInit {
  field : any ={};
fields : PolicyFields = {
  policyID : 0,
  policyStatus : '',
  PolicyType : '',
  PremiumAmount:0,
  PolicyEffectiveDate: '',
  remark:'',
  memberId : localStorage.getItem("memberpolicyid"),
}

response:any;
  constructor(private policyservices : PolicyServices,private router: Router) { }

  ngOnInit(): void {
  }

  Success:boolean = false;
  showField:boolean=false;

  onSubmit(){
    this.policyservices.Policyregister(this.fields)
    .subscribe(
      response => {
        // console.log(response);
      this.field = response;
      console.log(this.field);
      this.Success = true;
      this.showField = true;
      //this.router.navigate(['/membersearch']);
      }
    );
  }
  onMemderAdd(){
    this.router.navigate(['/membersearch']);
  }

}
