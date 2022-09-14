import { Component, OnInit } from '@angular/core';
import { MemberRegister } from '../models/memberregistration';
import { searchMembers } from '../services/searchmember';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  members:any = {};

  member:MemberRegister={
    memberId : 0,
    policyId : 0,
    policyStatus : '',
    policyType:'',
    premiumAmount : 0,
      userName : '',
      firstName : '',
      lastName : '',
      DateofBirth : '',
      address : '',
      state : '',
      email : ''
  }
  response:any;

  constructor(private memberService:searchMembers, private router:Router) { }

  ngOnInit(): void {
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
  onRedirect(member:MemberRegister){
    this.memberService.MemberSearch(this.member)
    .subscribe(
      response =>{
        this.member = response;
        console.log(member);
        localStorage.setItem("exampleadmin",member.memberId.toString());
      console.log(localStorage.getItem("exampleadmin")?.toString());
        // this.router.navigate(['/adminaddpolicy']);
      }
    )
  }

  updatepolicy(member:MemberRegister){
    console.log(member);
    localStorage.setItem("memberId",member.memberId.toString());
    console.log(localStorage.getItem("memberId")?.toString());

    localStorage.setItem("policystatus",member.policyStatus.toString());
    console.log(localStorage.getItem("policystatus")?.toString());

    localStorage.setItem("policyid",member.policyType.toString());
    console.log(localStorage.getItem("policyid")?.toString());

    localStorage.setItem("premiumamount",member.premiumAmount);
    console.log(localStorage.getItem("premiumamount"));


    this.router.navigate(['/adminupdatepolicy'])
   
  }

}
