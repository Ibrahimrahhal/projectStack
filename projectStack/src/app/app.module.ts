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
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NotificatiosModule } from './notificatios/notificatios.module';
import { NotificationsService } from './services/notifications.service';
import { LayoutPartsModule } from './layout-parts/layout-parts.module';
import { UserTypeComponent } from './login-signup/adding-user-data/user-type/user-type.component';
import { NgxPopperModule } from 'ngx-popper';
import { UserHeadLineInfoComponent } from './login-signup/adding-user-data/user-head-line-info/user-head-line-info.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    LoginComponent,
    SignupComponent,
    CompleteYourDataComponent,
    AddingUserDataComponent,
    MessagesComponentComponent,
    UserTypeComponent,
    UserHeadLineInfoComponent,
    MobileViewComponent
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
    ProfileModule,
    NotificatiosModule,
    LayoutPartsModule,
    NgxPopperModule.forRoot()
  ],
  providers: [AuthServiceService, AmplifyService, AuthGaurdForProtectedRoutes, NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

