import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-your-data',
  templateUrl: './complete-your-data.component.html',
  styleUrls: ['./complete-your-data.component.scss']
})
export class CompleteYourDataComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
  loading:boolean;
  ngOnInit() {
  }

  validateEmail(){
    this.loading = true;
    setTimeout(()=>{
      this.router.navigate(['/login/complete']);
    },3000)

  }


}
