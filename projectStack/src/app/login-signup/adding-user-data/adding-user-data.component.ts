import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding-user-data',
  templateUrl: './adding-user-data.component.html',
  styleUrls: ['./adding-user-data.component.scss']
})
export class AddingUserDataComponent implements OnInit {
  step:number = 5;
  skills:any = [{
    Value:1,
    Desc:"Angular"
  },
  {
    Value:2,
    Desc:"Angular"
  },
  {
    Value:3,
    Desc:"Angular"
  }];

  university:string[]=["University Of Jordan","Germanian University"];
  constructor() { }

  ngOnInit() {
  }
  selectUserType(type:number){
    this.step++;
  }

}
