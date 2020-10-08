import JoinRequest from './JoinRequest';
import Project from './Project';
import User from './User';

export default interface Notification{
  ID:string;
  read:boolean;
  userID:string;
  timestamp:number;
  type:number;
  projectID:string;
  requestID:string;
}

export interface notificationWithExtras{
  notification:Notification;
  extras:{
    user:User,
    project:Project,
    joinRequest:JoinRequest
  }
}

export const NotificationsEnum = {
  JoinRequestAnsweredNotification: 1,
  ProjectJoinRequestNotification: 2,
  UserJoinRequestToRelatedProjectNotification: 3
};
