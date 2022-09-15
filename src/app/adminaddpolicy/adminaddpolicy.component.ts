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
field : any ={};
  fields : PolicyFields = {
    policyID : 0,
    policyStatus : '',
    PolicyType : '',
    PremiumAmount:0,
    PolicyEffectiveDate: '',
    remark:'',
    memberId : localStorage.getItem("adminpolicyid"),
  }
  response:any;
  Success:boolean = false;
  showField:boolean=false;
  constructor(private policyservices : PolicyServices,private router: Router) { }

  ngOnInit(): void {
  }
   
  onSubmit(){
    this.policyservices.Policyregister(this.fields)
    .subscribe(
      response => {
        // console.log(response);
      this.field = response;
      console.log(this.field);
      this.Success = true;
      this.showField = true;
      // alert(this.field);
      //this.router.navigate(['/admin'])
      }
    );
  
  }
  
  

  Onlinkhere(){
    this.router.navigate(['/admin'])
  }

}
