import { Injectable } from '@angular/core';
import Project from 'src/app/types/Project';
import { HttpService } from 'src/app/services/http.service';
import JoinRequest, { JoinReuqestWithExtras } from 'src/app/types/JoinRequest';
import { ProjectWithExtras } from 'src/app/types/projectWithExtras';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  private _projects:Array<ProjectWithExtras>;
  private _userInvitations:Array<JoinReuqestWithExtras>;
  constructor(private http:HttpService) {

    window["projejctData"] = this;;
  }

  async getProjects():Promise<ProjectWithExtras[]> {
    if(!this._projects)
      await this.updateProjects();
    return this._projects;
  }

  async updateProjects():Promise<ProjectWithExtras[]> {
    this._projects = await this.http.getProjects();
    return this._projects;
  }

  getAllJoinRequestsForProject(ID:string):Promise<JoinReuqestWithExtras[]>{
    return this.http.getAllJoinRequestsByProject(ID);
  }


  respondToUserJoinRequest(isAcceptance:boolean, messgae:string, joinRequest:JoinRequest){
    return this.http.respondToUserJoinRequest(isAcceptance, messgae, joinRequest);
  }


  async getUserInvitaions():Promise<JoinReuqestWithExtras[]>{
    if(!this._userInvitations)
      try{this._userInvitations = await this.http.getAllProjectInvitationsForUser();}
      catch(e){this._userInvitations = []}
    return this._userInvitations;
  }


}
