import { StaticDataService } from 'src/app/services/static-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import User from 'src/app/types/User';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
     private http:HttpService,
     private safeStuff:DomSanitizer,
     public staticData:StaticDataService) { }
  userID:string;
  loading:boolean = true;
  member:User;
  ngOnInit(): void {
    window["memberProfile"] = this;
    this.userID = this.route.snapshot.params["userID"];
    this.http.getUser(this.userID).then((user:User)=>{
      this.member = user;
    })
  }

  get Username(){
    if(this.member)
    return `${this.member.firstName} ${this.member.lastName}`;
    return '';
  }

  get backgroundImageStyle(){
    return this.safeStuff.bypassSecurityTrustStyle(`url('${this.member.profileImage}')`);
  }

}
