import { AuthServiceService } from './../../services/auth-service.service';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NotificationsService } from 'src/app/services/notifications.service';

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
    private auth:AuthServiceService,
    public notification:NotificationsService) { }

  ngOnInit() {
    window["header"] = this;
  }

  get isProjectDashboard():boolean{
    if(this.pathsArray.length > 0 && this.pathsArray[0] == 'project' && this.pathsArray[2]=='dashboard')
    return true;
    return false;
  }



  navigate(location:string):void{
    this.router.navigate([location]);
  }

  openMenu(){
    this.dialog.open(HeaderMenuComponent, {
      disableClose:false,
      closeOnNavigation:true
    })
  }

  get hideShadow():boolean{
    if(this.pathsArray.length > 0 && this.pathsArray.length < 3 && this.pathsArray[0]  == 'project' )
      return true;
    return false;

  }

  get isUserLoggedIn():boolean{
    return this.auth.isUserSignedIn;
  }

  get user() {
    return this.auth.user;
  }

  get pathsArray():string[]{
    return window.location.pathname.split('/').filter(x=>x);
  }

}
