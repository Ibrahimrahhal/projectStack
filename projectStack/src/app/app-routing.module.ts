import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AddingUserDataComponent } from './login-signup/adding-user-data/adding-user-data.component';


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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
