import { Component, OnInit } from '@angular/core';
import { MemberRegister } from '../models/memberregistration';
import { Registerservices } from '../services/memberservice';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

mr:MemberRegister={
  memberId : 0,
  policyId:0,
  policyStatus : '',
  policyType:'',
  premiumAmount:0,
    userName : '',
    firstName : '',
    lastName : '',
    DateofBirth : '',
    address : '',
    state : '',
    email : ''
}
isSuccessful = false;
isSignUpFailed = false;
response : any;
errorMessage = ''
  constructor(private regServices:Registerservices,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.regServices.register(this.mr)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/membersearch']);
      }
    );
  }
}
