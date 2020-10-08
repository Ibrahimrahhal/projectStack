import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import User from 'src/app/types/User';
import { Component, Input, OnInit } from '@angular/core';
import JoinRequest from 'src/app/types/JoinRequest';
import Notification, { notificationWithExtras } from 'src/app/types/Notification';

@Component({
  selector: 'app-user-join-request-to-related-project-notification',
  templateUrl: './user-join-request-to-related-project-notification.component.html',
  styleUrls: ['./user-join-request-to-related-project-notification.component.scss']
})
export class UserJoinRequestToRelatedProjectNotificationComponent implements OnInit {
  @Input() notification:notificationWithExtras
  constructor(
    private router:Router,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.notification.notification
  }

  navigateToProject(){
    this.router.navigate(['project', this.notification.extras.joinRequest.projectID, 'dashboard'])
    this.dialog.closeAll();
  }

}


