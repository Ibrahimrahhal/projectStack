import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { DynamicComponentModule }  from 'ng-dynamic-component';
import { UserJoinRequestToRelatedProjectNotificationComponent } from './notificationComponents/user-join-request-to-related-project-notification/user-join-request-to-related-project-notification.component';
import { ProjectJoinRequestNotificationComponent } from './notificationComponents/project-join-request-notification/project-join-request-notification.component';



@NgModule({
  declarations: [
    NotificationComponent,
    UserJoinRequestToRelatedProjectNotificationComponent,
    ProjectJoinRequestNotificationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DynamicComponentModule

  ],
  exports:[NotificationComponent]
})
export class NotificationsModule { }
