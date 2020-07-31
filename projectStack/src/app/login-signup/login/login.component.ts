import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { SystemMessagesService } from 'src/app/services/system-messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output('loggingIn') loggingIn = new EventEmitter();
  @Output('loggingInFinished') loggingFinished = new EventEmitter();
  @Output('needsEmailConfirmation') needsEmailConfirmation = new EventEmitter();
  passwordHide:boolean = true;
  loading = false;
  loginFormGroup:FormGroup;
  constructor(
    private auth:AuthServiceService,
    private fb:FormBuilder,
    private router:Router,
    private messages:SystemMessagesService,
    private http:HttpService) {

   }

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      password:['',Validators.required],
      email:['',Validators.required]
    });
  }


  login(){
    if(this.loginFormGroup.invalid){
      this.messages.showError("Login Details Is Required", 4000);
      return;
    }
    this.loading = true;
    this.http.login(this.loginFormGroup.value.email, this.loginFormGroup.value.password).then((user:any)=>{
      this.loading =false;

      if(user.userCompletedSignup)
        this.router.navigate(['/dashboard/']);
      else
        this.router.navigate(['/user/complete/']);
    }).catch(error=>{
      this.loading = false;
      if(error.message == "User is not confirmed."){
        this.auth.hldEmail = this.loginFormGroup.value.email;
        this.needsEmailConfirmation.emit(true)
      }else{
      this.messages.showError(error.message, 4000);
      }
    });

  }

}
