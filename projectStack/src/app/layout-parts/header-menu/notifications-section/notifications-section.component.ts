import { NotificationsService } from 'src/app/services/notifications.service';
import { Component, OnInit } from '@angular/core';
import Notification, { notificationWithExtras } from 'src/app/types/Notification';

@Component({
  selector: 'app-notifications-section',
  templateUrl: './notifications-section.component.html',
  styleUrls: ['./notifications-section.component.scss']
})
export class NotificationsSectionComponent implements OnInit {
  public notifications:notificationWithExtras[];
  public loading:boolean = true;
  constructor(private notificationsService:NotificationsService) { }

  ngOnInit(): void {
    window["notifiacinosasd"] = [this]
    this.loading = true;
    this.notificationsService.notifications.then((result)=>{
      this.notifications = result;
      this.loading = false;
    }).catch((e)=>{
      this.notifications = [];
      this.loading = false;
    });
  }

}

