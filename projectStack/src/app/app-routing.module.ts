import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AddingUserDataComponent } from './login-signup/adding-user-data/adding-user-data.component';
import { DashboardComponent } from './dashboard.module/dashboard/dashboard.component';
import { NewProjectComponent } from './dashboard.module/new-project/new-project.component';
import { ProjectDashboardComponent } from './dashboard.module/project.module/project-dashboard/project-dashboard.component';

const routes: Routes = [{
  path: 'login',
  children:[
    {
      path:'complete',
      component: AddingUserDataComponent
    },
    {
      path:'',
      component: LoginSignupComponent
    }
  ]
},
{
  path:"dashboard",
  component:DashboardComponent
},
{
  path:"project",
  children:[{
    path:'new',
    component: NewProjectComponent
  },{
    component:ProjectDashboardComponent,
    path:':projectid/dashboard'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
