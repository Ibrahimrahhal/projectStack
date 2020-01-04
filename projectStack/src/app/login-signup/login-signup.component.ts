import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  isUserCompeletingHisData:boolean = false;
  loginSideActive:boolean = false;

  constructor() { }
  ngOnInit() {
  }

  userIsLogging(e){

  }

  signUpFinished(){
    this.isUserCompeletingHisData = true;
  }
  toggleLoginSignup(){
    if(this.isUserCompeletingHisData)
    return;
    this.loginSideActive = !this.loginSideActive;
  }
}
