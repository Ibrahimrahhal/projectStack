import User from './User';

export default interface Project{
  ID: string,
  projectName: String,
  maxNumberOfMembers: String,
  creatorEmail: String,
  timeCreated: String,
  projectType: String,
  members:Array<User>,
  slogan:string,
  projectDesc:string
  tags:Array<string>
}
