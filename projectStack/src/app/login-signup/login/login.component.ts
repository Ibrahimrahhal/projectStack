import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output('loggingIn') loggingIn = new EventEmitter();
  @Output('loggingInFinished') loggingFinished = new EventEmitter();

  passwordHide:boolean = true;
  loading = false;
  loginFormGroup;
  constructor(
    private auth:AuthServiceService,
    private fb:FormBuilder,
    private router:Router) {

   }

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      password:'',
      email:''
    });
  }


  login(){
    this.loading = true;
    this.auth.login(this.loginFormGroup.value.email, this.loginFormGroup.value.password).then((user:any)=>{
      this.loading =false;

      if(user.userCompletedSignup)
        this.router.navigate(['/dashboard/']);
      else
        this.router.navigate(['/user/complete/']);
    });

  }

}
