import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Credentials } from './models/credentials';
import { LoginServices } from './services/signinservice';
import { SigninComponent } from './signin/signin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'InsurancePortal';

  cred : Credentials = {
    userName : '',
    password : ''
  };

  isNewUser = false;
  isLoggedIn = false;
  isLoginFailed = false;
  isAdmin = false;
  isMember =  false;
  errorMessage = '';
  userRole: string | null = ''

  showAdminBoard = false
  showMemberBoard = false
  userName: string | null = ''
  constructor(private loginservice : LoginServices, private router: Router){}

ngOnInit(): void {
  

  if(this.userRole == 'Admin'){
    this.isAdmin = true
}    
else if(this.userRole == 'Member'){
  this.isMember = true
} 
}

  onSubmit(){
    console.log("hello");
    this.loginservice.login(this.cred)
    .subscribe(
      response => {
        console.log(response);
        this.isLoginFailed = false;
          this.isLoggedIn = true;
          if(this.userRole == 'member')
          {
            this.router.navigate(['/member']);
            // this.isLoginFailed = true;
            // this.errorMessage = 'User Name or Password is incorrect'
          }
          else{
            this.router.navigate(['/admin']);
           }
          // this.router.navigate(['/member']);
      }
    )
  }
//   registerClick() {
//     this.isNewUser=true  
// };

getstatus():any{
  return localStorage.getItem("username");

}

onLogout(){
  localStorage.setItem("username","");
  this.router.navigate(['/signin'])
}

}
