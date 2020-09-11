import { AuthServiceService } from './../../services/auth-service.service';
import { HeaderMenuComponent } from './../header-menu/header-menu.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router,
    private dialog:MatDialog,
    private activeRoute:ActivatedRoute,
    private auth:AuthServiceService) { }

  ngOnInit() {
    window["header"] = this;
  }

  navigate(location:string):void{
    this.router.navigate([location]);
  }

  openMenu(){
    this.dialog.open(HeaderMenuComponent, {
      disableClose:false    })
  }

  get hideShadow():boolean{
    if(this.activeRoute.snapshot.url)
      return this.activeRoute.snapshot.url[0].path == 'project';
    else
      return false;
  }

  get isUserLoggedIn():boolean{
    return this.auth.isUserSignedIn;
  }

  get user() {
    return this.auth.user;
  }

}
