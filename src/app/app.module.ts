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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AdminComponent,
    MemberComponent,
    SigninComponent,
    MembersearchComponent,
    PolicysubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
