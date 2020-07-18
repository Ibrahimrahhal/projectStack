import { SystemMessagesService } from './../../services/system-messages.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-complete-your-data',
  templateUrl: './complete-your-data.component.html',
  styleUrls: ['./complete-your-data.component.scss']
})
export class CompleteYourDataComponent implements OnInit {
  @Output('completeDataFinished') completeDataFinished:EventEmitter<any> = new EventEmitter();
  constructor(
    private router:Router,
    private auth:AuthServiceService,
    private messages:SystemMessagesService
  ) { }
  loading:boolean;
  code:string;

  ngOnInit() {
  }

  validateEmail(){
    this.loading = true;
    this.auth.confirmEmail(this.code).then((data)=>{
      this.completeDataFinished.emit();
      this.messages.showSuccess("Email Verfied, Please Login Again", 4000);
      this.router.navigate(['/external/login']);
      this.loading = false;

    }).catch((error)=>{
      this.loading = false;
      this.messages.showError(error.message, 4000);
    });


  }


}
