import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
  loading = false;
  constructor() { }

  ngOnInit() {
  }

  signUp(){
    this.signingUp.emit();
    this.loading = true;
    setInterval(()=>{
      this.loading = false;
      this.signingUpFinished.emit();
    },5000)
  }

}
