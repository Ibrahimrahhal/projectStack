import { ScrollService } from 'src/app/services/scroll.service';
import { StaticDataService } from 'src/app/services/static-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import User from 'src/app/types/User';
import { Skill } from 'src/app/types/Interest.Skills';

@Component({
  selector: 'member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input() loading;
  @Input() user:User;
  constructor(
    private safeStuff:DomSanitizer,
    public staticData:StaticDataService) { }

  ngOnInit(): void {

  }

  get Username(){
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  get backgroundImageStyle(){
    return this.safeStuff.bypassSecurityTrustStyle(`url('${this.user.profileImage}')`);
  }

  get skillsToShow():string[]{
    return this.user.skills.filter((item,index)=>index<3);
  }

}

