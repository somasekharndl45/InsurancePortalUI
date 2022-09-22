import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Users } from '../models/user';
import { LoginServices } from '../services/signinservice';
import { Form, FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: Users = {
    userId:0,
    userName: '',
    password:'',
    userRole:''
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = ''
  response : any;
  constructor(private loginservice:LoginServices,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(angForm:NgForm){
    if(angForm.invalid){
        return;
    }
    this.loginservice.register(this.user)
    .subscribe(
      response => {
        console.log(response);
        this.response = response;
        if(this.response.result == 'UserName already exists')
        {
          console.log("User exists")
          this.errorMessage="UserName Already exists";
          return;
        }
        else{
          console.log("else");
         this.router.navigate(['/membersearch']);
        }
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        // this.router.navigate(['/member']);
        // if(this.response.result='Registration succesfull')
        //   {
        //   console.log("else");
        //   this.router.navigate(['/membersearch']);
        //   }
        // this.router.navigate(['/membersearch']);
      }
    );
  }
}
