import { HeaderMenuComponent } from './../header-menu/header-menu.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router,
    private dialog:MatDialog) { }

  ngOnInit() {
  }

  navigate(location:string):void{
    this.router.navigate([location]);
  }

  openMenu(){
    this.dialog.open(HeaderMenuComponent, {
      disableClose:false
    })
  }

}
