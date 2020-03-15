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
    private auth:AuthServiceService
  ) { }
  loading:boolean;
  ngOnInit() {
  }

  validateEmail(){
    this.loading = true;
    this.auth
    setTimeout(()=>{
      this.router.navigate(['/login/complete']);
    },3000)

  }


}
