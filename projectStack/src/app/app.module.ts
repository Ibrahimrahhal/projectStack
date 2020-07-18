import { DashboardModule } from './dashboard.module/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login-signup/login/login.component';
import { SignupComponent } from './login-signup/signup/signup.component';
import { CompleteYourDataComponent } from './login-signup/complete-your-data/complete-your-data.component';
import { AddingUserDataComponent } from './login-signup/adding-user-data/adding-user-data.component';
import { AuthServiceService } from './services/auth-service.service';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ExploreModule } from './explore/explore.module';
import { ProfileModule } from './profile/profile.module';
import { MessagesComponentComponent } from './messages-component/messages-component.component';
import AuthGaurdForProtectedRoutes from './routeGaurds/canActivateProtectedRoutes';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    LoginComponent,
    SignupComponent,
    CompleteYourDataComponent,
    AddingUserDataComponent,
    MessagesComponentComponent
  ],
  imports: [
    BrowserModule,
    ExploreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    DashboardModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ProfileModule

  ],
  providers: [AuthServiceService, AmplifyService, AuthGaurdForProtectedRoutes],
  bootstrap: [AppComponent]
})
export class AppModule { }
