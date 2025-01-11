import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { ToastrService } from 'ngx-toastr';
import { SystemMessagesService } from 'src/app/services/system-messages.service';

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
  agreeOnTermsFormControl:FormControl = new FormControl(false);
  constructor(
    private auth:AuthServiceService,
    private fb:FormBuilder,
    private toastr: ToastrService,
    private messages:SystemMessagesService,
    private http:HttpService) { }

  ngOnInit() {
    this.signUpFormGroup = this.fb.group({
      firstName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      lastName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      email:[null,[ Validators.required, Validators.email]],
      password:[null, [Validators.required, this.validatePassword]],
      confirmPassword:[null, [Validators.required, this.validateConfirmPassword]]
    });
  }

  validatePassword(c: FormControl) {
    if(!(/[A-Z]/g).test(c.value))
      return {password:"Password Must Contain Uppercase Char;lko;pll,;acters"};
    if(!(/[a-z]/g).test(c.value))
      return {password:"Password Must Contain Lowercase Characters"};
    if(c.value && c.value.length < 8)
      return {password:"Password Must Be At least 8 Characters"};
  }

  validateConfirmPassword= (c: FormControl)=> {
    if(this.signUpFormGroup)
      if(c.value != this.signUpFormGroup.get("password").value)
      return {confirmPassword:"Confirm Password Must Be Same As Password"}

  }
  signUp(){
    if(this.loading)
    return;
    if(this.signUpFormGroup.invalid){
      this.messages.showError("Sign Up Details Isn't Valid", 4000);
      return;
    }
    if(!this.agreeOnTermsFormControl.value){
      this.messages.showError("You Should Agree On Terms & Conditions", 4000);
      return;
    }
    this.signingUp.emit();
    this.loading = true;
    Auth.signUp({
        username: this.signUpFormGroup.getRawValue().email.toLowerCase(),
        password: this.signUpFormGroup.getRawValue().password,
        attributes: {
            'custom:firstName': this.signUpFormGroup.getRawValue().firstName,
            'custom:lastName': this.signUpFormGroup.getRawValue().lastName,
        },
        validationData: []
        }).then((result)=>{
      this.auth.hldEmail = this.signUpFormGroup.getRawValue().email.toLowerCase();
      this.loading = false;
      this.signingUpFinished.emit();
    }).catch((error)=>{
      this.loading = false;
      this.loading = false;
      this.messages.showError(error.message, 4000);
    });
  }

}
