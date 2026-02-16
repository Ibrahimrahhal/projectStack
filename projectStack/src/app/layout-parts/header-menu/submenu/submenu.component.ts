import { AuthServiceService } from 'src/app/services/auth-service.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringToBase64 } from 'src/util/util';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  constructor(
    public dialog:MatDialog,
    public auth:AuthServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }

  async goToProfile(){
    this.dialog.closeAll();
    this.router.navigateByUrl(`/member/${await stringToBase64(this.auth.user.email)}`)
  }




}

