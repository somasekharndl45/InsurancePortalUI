import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { SigninComponent } from './signin/signin.component';
import { MembersearchComponent } from './membersearch/membersearch.component';
import { PolicysubmissionComponent } from './policysubmission/policysubmission.component';
import { AdminaddpolicyComponent } from './adminaddpolicy/adminaddpolicy.component';
import { AdminupdatepolicyComponent } from './adminupdatepolicy/adminupdatepolicy.component';
import { AuthService } from './services/authservice';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AdminComponent,
    MemberComponent,
    SigninComponent,
    MembersearchComponent,
    PolicysubmissionComponent,
    AdminaddpolicyComponent,
    AdminupdatepolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
