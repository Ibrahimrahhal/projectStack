import JoinRequest from 'src/app/types/JoinRequest';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { decryptData, encryptData } from 'src/util/util';
import { EmptyResponse } from '../types/API.Response';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import Project from '../types/Project';
import { map } from 'rxjs/operators';
import User from '../types/User';
import { HttpWrapperService } from './http-wrapper.service';
import { JoinReuqestWithExtras } from '../types/JoinRequest';
import { ProjectWithExtras } from '../types/projectWithExtras';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http:HttpWrapperService,
    private auth:AuthServiceService) {
      this.auth.signInState.subscribe((isSignIn)=>{
        if(isSignIn)
          this.getUserDate();
      })
    }

  patchUser(userObject): Promise<EmptyResponse>{
    return this.http.patch(
    environment.baseApi+"/user",
    {data:encryptData(userObject)},
    {}
    ).toPromise();
  }

  getUser(userID:string, withProject:boolean = false): Promise<{
    user:User,
    projects:ProjectWithExtras[]
  }>{
    return this.http.get(`${environment.baseApi}/user/${userID}${withProject?'?projects=true':''}`,{}).pipe(map((body:any)=>{
        let user = JSON.parse(decryptData(body.data))
        return user as {
          user:User,
          projects:ProjectWithExtras[]
        };
      })).toPromise();
  }


  postProject(projectObject): Promise<EmptyResponse>{
    return this.http.post(
      environment.baseApi+"/project",
      {data:encryptData(projectObject)},{}
      ).toPromise();
  }

  getProjects():Promise<ProjectWithExtras[]>{
    return this.http.get(
      environment.baseApi+"/project", {}
      ).pipe(map((result:any)=>{
        return JSON.parse(decryptData(result.data)) as ProjectWithExtras[];
      })).toPromise();
  }

  async getUserDate(){
    let { data } = await this.http.get( environment.baseApi + '/user', {}).toPromise() as any;
    this.auth.user = JSON.parse(decryptData(data));
    return this.auth.user;
  }

  signup(username, password, email, phonenumber){
    this.auth.hldEmail = email;
    return this.auth.signUpUser(username, password, email, phonenumber) as Promise<any>;
  }

  login(email, password){
    return new Promise(async (resolve, reject) => {
      try {
        await this.auth.loginUser(email, password) as Promise<any>;
      }catch(e){
        reject(e);
        return;
      }
      let user = await this.getUserDate();
      return resolve(user);
    });
  }


  getProject(ID:string, withMembers:boolean){
    let extention = "";
    if(withMembers)
      extention = "?members=true";
    return this.http
    .get(environment.baseApi+"/project/"+ID+extention, {})
    .pipe(map((result:any)=>{
      return JSON.parse(decryptData(result.data)) as Project;
    })).toPromise();
  }


  getAllJoinRequestsByProject(ID:string): Promise<JoinReuqestWithExtras[]>{
    return this.http
    .get(`${environment.baseApi}/project/${ID}/join-requests`, {})
    .pipe(map((result:any)=>{
      return JSON.parse(decryptData(result.data)) as JoinReuqestWithExtras[];
    })).toPromise();
  }


  respondToUserJoinRequest(isAcceptance, message, joinRequest:JoinRequest):Promise<void>{
    let url:string = `${environment.baseApi}/invitation/${joinRequest.ID}/${isAcceptance ? 'accept' : 'reject'}`;
    return this.http
    .post(url, {data: encryptData({message})}, {})
    .pipe(map((result:any)=>{
      return;
    })).toPromise();
  }

  getAllProjectInvitationsForUser(){
    return this.http.get(`${environment.baseApi}/invitaions/`,{}).pipe(map((result:any)=>{
      return JSON.parse(decryptData(result.data)) as JoinReuqestWithExtras[];
    })).toPromise();
  }

}
