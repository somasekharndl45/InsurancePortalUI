import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Credentials } from '../models/credentials';
import { LoginServices } from '../services/signinservice';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  cred : Credentials = {
    userName : '',
    password : ''
  };
  userRole: string | null = ''
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
response : any;
  constructor(private loginservice : LoginServices, private router: Router){}

  ngOnInit(): void {
  }

onSubmit(){
  console.log("hello");
  if(this.cred.userName!='' && this.cred.password!=''){
    this.loginservice.login(this.cred)
    .subscribe(
      response => {
        console.log(response);
        this.response = response;
        localStorage.setItem('response',this.response.response)
        if(this.response.token=='')
        {
          console.log("errorMessage");
          // alert('Login Failed')
          this.errorMessage='Login Failed';
          return;
        }
        else{
          if(this.response.role=='Member')
          {
          console.log("else");
          this.router.navigate(['/membersearch']);
          }
          else{
            this.router.navigate(['/admin']);
          }
        }
      }
    )
  }
  
}


onRegister(){
  this.router.navigate(['/register']);
}


  // onSubmit(){
  //   console.log("hello");
  //   this.loginservice.login(this.cred)
  //   .subscribe(
  //     response => {
  //       console.log(response);
  //         if(this.userRole == 'member')
  //         {
  //           this.router.navigate(['/member']);
  //           // this.isLoginFailed = true;
  //           // this.errorMessage = 'User Name or Password is incorrect'
  //         }
  //         else{
  //           this.router.navigate(['/admin']);
  //          }
  //         // this.router.navigate(['/member']);
  //     }
  //   )
  // }

}
