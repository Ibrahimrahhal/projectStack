import Project from './Project';
import  User from './User';
export default interface JoinRequest{
  ID:string,
  string:string,
  projectID:string,
  message:string,
  accepted:boolean,
  rejected:boolean,
  rejectionMessage:string,
  acceptionMessage:string,
  timestamp: number,
  type:number
}


export interface JoinReuqestWithExtras{
  request:JoinRequest;
  extras:{
    user:User,
    project:Project
  }
}


export const JoinRequestEnum  = {
  ProjectJoinRequest:1,
  UserJoinRequest:2
}

