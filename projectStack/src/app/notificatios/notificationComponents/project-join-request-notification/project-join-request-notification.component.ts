import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { notificationWithExtras } from 'src/app/types/Notification';

@Component({
  selector: 'app-project-join-request-notification',
  templateUrl: './project-join-request-notification.component.html',
  styleUrls: ['./project-join-request-notification.component.scss']
})
export class ProjectJoinRequestNotificationComponent implements OnInit {
  @Input() notification:notificationWithExtras;
  constructor(
    private router:Router,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  navigateToDashboard(){
    this.router.navigate(['dashboard']);
    this.dialog.closeAll();
  }

}

