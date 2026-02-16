import { Component, Input, OnInit } from '@angular/core';
import notificationTypeToComponentMap from '../notificationComponents/notificationTypeToComponentMap';
import Notification, { notificationWithExtras } from '../../types/Notification';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() notification:notificationWithExtras;
  constructor() { }

  ngOnInit(): void {
  }

  get NotificationClass(){
    if(this.notification)
      return notificationTypeToComponentMap[this.notification.notification.type]
  }




}

