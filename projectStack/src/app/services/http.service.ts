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

  getUser(userID): Promise<User>{
    return this.http.get(`${environment.baseApi}/user/${userID}`,{}).pipe(map((body:any)=>{
        let user = JSON.parse(decryptData(body.data))
        return user as User;
      })).toPromise();
  }


  postProject(projectObject): Promise<EmptyResponse>{
    return this.http.post(
      environment.baseApi+"/project",
      {data:encryptData(projectObject)},{}
      ).toPromise();
  }

  getProjects():Promise<Project[]>{
    return this.http.get(
      environment.baseApi+"/project", {}
      ).pipe(map((result:any)=>{
        return JSON.parse(decryptData(result.data)) as Project[];
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


}
