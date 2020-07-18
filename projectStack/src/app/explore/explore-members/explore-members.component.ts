import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ExploreDataService } from '../services/explore-data.service';
import User from 'src/app/types/User';
import { stringToBase64 } from 'src/util/util';

@Component({
  selector: 'app-explore-members',
  templateUrl: './explore-members.component.html',
  styleUrls: ['./explore-members.component.scss']
})
export class ExploreMembersComponent implements OnInit {
  loading:boolean = true;
  members:Array<User> = [];
  constructor(private dataService:ExploreDataService, private router:Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.dataService.getMembers().then((members)=>{
      this.members = members;
      this.loading = false;
    }).catch((err)=>{
      this.members = [];
      this.loading  = false
    })
    window["explooooore"] = this;
  }


  async navigateToUser(user:User){
    this.router.navigateByUrl(`/member/${await stringToBase64(user.email)}`)
  }

}
