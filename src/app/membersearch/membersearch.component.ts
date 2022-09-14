import { Component, OnInit } from '@angular/core';
import { MemberRegister } from '../models/memberregistration';
import { searchMembers } from '../services/searchmember';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-membersearch',
  templateUrl: './membersearch.component.html',
  styleUrls: ['./membersearch.component.css']
})
export class MembersearchComponent implements OnInit {

members:any = {};

member:MemberRegister={
  memberId : 0,
  policyId : 0,
  policyStatus : '',
  policyType:'',
  premiumAmount:'',
    userName : '',
    firstName : '',
    lastName : '',
    DateofBirth : '',
    address : '',
    state : '',
    email : ''
}
response:any;
  constructor(private memberService : searchMembers,private router: Router) { }

  ngOnInit(): void {
  }

norecord(){
  this.response.result =="No user found";
}

  onSubmit(){
    this.memberService.MemberSearch(this.member)
    .subscribe(
      response =>{
        if(response!=null)

{
  var data=response;
}        this.members = response;

        // if(this.members[0]=="No user found")
        // {
        //   this.members=this.members[0]
        //  console.log(this.members[0])
        // }
        // else{
        
        // }
        console.log(this.members)
        
        // this.router.navigate(['/policysubmission']);
      }
    )
  }

  onRedirect(){
   // console.log(this.members[0][0].memberId)
    // this.memberService.MemberSearch(this.members)
    // .subscribe(
    //   response =>{
    //     this.members = response;
    //     console.log(this.members[0].memberId)
       localStorage.setItem("memberpolicyid",this.members[0][0].memberId.toString());
      console.log(localStorage.getItem("memberpolicyid"));
         this.router.navigate(['/policysubmission']);
  }
  

}
