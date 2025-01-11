import { ScrollService } from 'src/app/services/scroll.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ExploreDataService } from '../services/explore-data.service';
import User from 'src/app/types/User';
import { stringToBase64 } from 'src/util/util';
import { SearchBoxComponent } from './search-box/search-box.component';

@Component({
  selector: 'app-explore-members',
  templateUrl: './explore-members.component.html',
  styleUrls: ['./explore-members.component.scss']
})
export class ExploreMembersComponent implements OnInit {
  loading:boolean = false;
  members:Array<User> = [];
  pagesCount:number = 1;
  queryObject:FormGroup;
  scrollSubscribtion;
  constructor(
    private dataService:ExploreDataService,
    private router:Router,
    private dialog:MatDialog,
    private fb:FormBuilder,
    private scroll:ScrollService) { }

  ngOnInit(): void {
    this.queryObject = this.fb.group({
      keyword:"",
      university:[],
      department:[],
      skills:[],
      interests:[],
      page:0
    });
    this.getMembersUsingSearchQuery();
    if(this.scrollSubscribtion)
      this.scrollSubscribtion.unsubscribe();
    this.scrollSubscribtion = this.scroll.onScrollReachEnd().subscribe(()=>{
        this.loadMore()
      })
    window["explooooore"] = this;
  }


  async navigateToUser(user:User){
    this.router.navigateByUrl(`/member/${await stringToBase64(user.email)}`)
  }

  openSearchDialog(){
    this.dialog.open(SearchBoxComponent, {
      data:this.queryObject
    }).afterClosed().toPromise().then( result=>{
      if(result){
        this.members = [];
        this.getMembersUsingSearchQuery();
      }
    });
  }

  getMembersUsingSearchQuery(){
    this.loading =true;
    this.dataService.getMembers(this.queryObject.getRawValue()).then((members)=>{
      this.members = (this.members || []).concat(members.results);
      this.loading = false;
      this.pagesCount = members.pages
    }).catch((err)=>{
      this.members = [];
      this.loading  = false
    })
  }

  loadMore(){
    if(!this.thereIsMoreData || this.loading )
      return;
    this.queryObject.get('page').setValue(this.queryObject.getRawValue().page+1);
    this.getMembersUsingSearchQuery();
  }

  get thereIsMoreData():boolean{
    return !(this.pagesCount-1 == this.queryObject.getRawValue().page)
  }
}

