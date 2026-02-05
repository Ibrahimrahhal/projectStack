import { Component, Input, OnInit } from '@angular/core';
import User from 'src/app/types/User';

@Component({
  selector: 'app-profile-images-section',
  templateUrl: './profile-images-section.component.html',
  styleUrls: ['./profile-images-section.component.scss']
})
export class ProfileImagesSectionComponent implements OnInit {
  @Input('height') _height:number;
  @Input('width') _width:number;
  @Input() diff:number;
  @Input() users:User[];
  height:string;
  width:string;
  readeyData:Array<{
    user:User,
    left:string;
  }>;
  constructor() { }

  ngOnInit(): void {
    this.height = this._height+'px';
    this.width = this._width+'px';
    this.readeyData = (this.users || []).map((user,index)=>{
      return {
        user,
        left: (index == 0 ? 0 : index*(this._width - this.diff)) + 'px'
      };
    })

  }

}

