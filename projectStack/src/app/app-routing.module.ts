import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AddingUserDataComponent } from './login-signup/adding-user-data/adding-user-data.component';
import { DashboardComponent } from './dashboard.module/dashboard/dashboard.component';
import { NewProjectComponent } from './dashboard.module/new-project/new-project.component';
import { ProjectDashboardComponent } from './dashboard.module/project.module/project-dashboard/project-dashboard.component';
import AuthGaurdForProtectedRoutes from './routeGaurds/canActivateProtectedRoutes';
import { ProjectHomeTabComponent } from './dashboard.module/project.module/project-home-tab/project-home-tab.component';
import { JoinRequestsComponent } from './dashboard.module/project.module/join-requests/join-requests.component';

const routes: Routes = [{
  path: 'external/:type',
  component: LoginSignupComponent,
  data:{
    hideHeader:true,
    hideFooter:true
  }
},{
  path:'user/complete',
  component: AddingUserDataComponent,
  canActivate: [AuthGaurdForProtectedRoutes],
  data:{
    hideHeader:true,
    hideFooter:true
  }
},{
  path:"dashboard",
  component:DashboardComponent,
  canActivate: [AuthGaurdForProtectedRoutes]
},{
  path:"project",
  canActivate: [AuthGaurdForProtectedRoutes],
  children:[{
    path:'new',
    component: NewProjectComponent,
    data:{
      hideHeader:true,
      hideFooter:true
    }
  },{
    component:ProjectDashboardComponent,
    path:':projectid/dashboard',
    children:[{
      path: '',
      component: ProjectHomeTabComponent
    },{
      path: 'join-requests',
      component: JoinRequestsComponent
    }]
  }]
},{
  path:'',
  redirectTo:'external/login',
  pathMatch: 'full'
}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
