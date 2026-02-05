import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MemberComponent } from './member/member.component';
import { ProjectComponent } from './project/project.component';
import AuthGaurdForProtectedRoutes from '../routeGaurds/canActivateProtectedRoutes';

const routes:Routes = [{
  path:'member/:userID',
  component:MemberComponent,
  canActivate: [AuthGaurdForProtectedRoutes]
},{
  path:'project/:projectID',
  component:ProjectComponent,
  canActivate: [AuthGaurdForProtectedRoutes]
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProfileRoutingModule { }

