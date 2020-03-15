import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Output('signingUp') signingUp = new EventEmitter();
  @Output('signingUpFinished') signingUpFinished = new EventEmitter();
  passwordHide:boolean = true;
  passwordConfirmHide:boolean = true;
  signUpFormGroup:FormGroup;
  loading = false;
  constructor(private auth:AuthServiceService, private fb:FormBuilder) { }

  ngOnInit() {
    this.signUpFormGroup = this.fb.group({
      firstName:null,
      lastName:null,
      email:null,
      password:null,
      confirmPassword:null
    });
  }

  signUp(){
    this.signingUp.emit();
    this.loading = true;
    this.auth.signup(this.signUpFormGroup.getRawValue().email, this.signUpFormGroup.getRawValue().password, this.signUpFormGroup.getRawValue().email, null).then((result)=>{
      this.loading = false;
      this.signingUpFinished.emit();
    }).catch((error)=>{

    });
  }

}
