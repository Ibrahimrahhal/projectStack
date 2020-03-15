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
  constructor(private auth:AuthServiceService) {

   }

  ngOnInit() {
  }

}
