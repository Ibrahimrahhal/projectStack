import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { ToastrService } from 'ngx-toastr';

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
  constructor(
    private auth:AuthServiceService,
    private fb:FormBuilder,
    private toastr: ToastrService) { }

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
    console.log(this.signUpFormGroup.getRawValue())
    Auth.signUp({
        username: this.signUpFormGroup.getRawValue().email,
        password: this.signUpFormGroup.getRawValue().password,
        attributes: {
            'custom:firstName': this.signUpFormGroup.getRawValue().firstName,
            'custom:lastName': this.signUpFormGroup.getRawValue().lastName,
        },
        validationData: []
        }).then((result)=>{
      this.loading = false;
      this.signingUpFinished.emit();
    }).catch((error)=>{
      this.loading = false;
      this.toastr.error(error.toString(),"Singup Error")
      console.log(error.toString());
    });
  }

}
