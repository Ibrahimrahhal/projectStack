import { NotificationsEnum } from './../../types/Notification';
import { ProjectJoinRequestNotificationComponent } from './project-join-request-notification/project-join-request-notification.component';
import { UserJoinRequestToRelatedProjectNotificationComponent } from './user-join-request-to-related-project-notification/user-join-request-to-related-project-notification.component';
export default  {
[NotificationsEnum.UserJoinRequestToRelatedProjectNotification]:UserJoinRequestToRelatedProjectNotificationComponent,
[NotificationsEnum.ProjectJoinRequestNotification]:ProjectJoinRequestNotificationComponent
}


