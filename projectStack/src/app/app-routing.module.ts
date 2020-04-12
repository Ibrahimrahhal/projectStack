import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AddingUserDataComponent } from './login-signup/adding-user-data/adding-user-data.component';
import { DashboardComponent } from './dashboard.module/dashboard/dashboard.component';
import { NewProjectComponent } from './dashboard.module/new-project/new-project.component';
import { ProjectDashboardComponent } from './dashboard.module/project.module/project-dashboard/project-dashboard.component';

const routes: Routes = [{
  path: 'external/:type',
  component: LoginSignupComponent
},{
  path:'user/complete',
  component: AddingUserDataComponent,
},{
  path:"dashboard",
  component:DashboardComponent
},{
  path:"project",
  children:[{
    path:'new',
    component: NewProjectComponent
  },{
    component:ProjectDashboardComponent,
    path:':projectid/dashboard'
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
