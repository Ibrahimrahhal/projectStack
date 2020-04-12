import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  isUserCompeletingHisData:boolean = false;
  loginSideActive:boolean = false;

  constructor(
    private auth:AuthServiceService,
    private activatedRoute:ActivatedRoute
    ) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data:any)=>{
      this.loginSideActive = data.params.type == 'login';
    })
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
