import { Component, Input, OnInit } from '@angular/core';
import User from 'src/app/types/User';

@Component({
  selector: 'app-profile-images-section',
  templateUrl: './profile-images-section.component.html',
  styleUrls: ['./profile-images-section.component.scss']
})
export class ProfileImagesSectionComponent implements OnInit {
  @Input() height:number;
  @Input() width:number;
  @Input() diff:number;
  @Input() users:User[];
  constructor() { }

  ngOnInit(): void {
  }

  getDataReady(){
    return (this.users || []).map((user,index)=>{
      return {
        user,
        left: index == 0 ? 0 : index*(this.width - this.diff)
      };
    })
  }



}
