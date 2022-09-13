import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{RegisterComponent} from './register/register.component';
import { MemberComponent } from './member/member.component';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './signin/signin.component';
import { MembersearchComponent } from './membersearch/membersearch.component';
import { PolicysubmissionComponent } from './policysubmission/policysubmission.component';
import { AdminaddpolicyComponent } from './adminaddpolicy/adminaddpolicy.component';
import { AdminupdatepolicyComponent, } from './adminupdatepolicy/adminupdatepolicy.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'member',component:MemberComponent},
  {path:'admin',component:AdminComponent},
  {path:'signin',component:SigninComponent},
  {path:'membersearch',component:MembersearchComponent},
  {path:'policysubmission',component:PolicysubmissionComponent},
  {path:'adminaddpolicy',component:AdminaddpolicyComponent},
  {path:'adminupdatepolicy',component:AdminupdatepolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
