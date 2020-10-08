import { DomSanitizer } from '@angular/platform-browser';
import  User  from 'src/app/types/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  user:User;
  constructor(
    private auth:AuthServiceService,
    private safeStuff:DomSanitizer) { }

  ngOnInit(): void {
    window["aiiiiiii"] = this.auth;
    this.user = this.auth.user;
  }

  get userBackgroundImage(){
    if(!this.auth.user)
    return;
    return this.safeStuff.bypassSecurityTrustStyle(`url('${this.auth.user.profileImage}')`)
  }

}
