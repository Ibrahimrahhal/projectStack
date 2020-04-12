import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-complete-your-data',
  templateUrl: './complete-your-data.component.html',
  styleUrls: ['./complete-your-data.component.scss']
})
export class CompleteYourDataComponent implements OnInit {

  constructor(
    private router:Router,
    private auth:AuthServiceService,
  ) { }
  loading:boolean;
  code:string;
  ngOnInit() {
  }

  validateEmail(){
    this.loading = true;
    this.auth.confirmEmail(this.code).then((data)=>{
      this.router.navigate(['/external/login']);
    }).catch((err)=>{

    });


  }


}
