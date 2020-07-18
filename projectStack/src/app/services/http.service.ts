import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { decryptData, encryptData } from 'src/util/util';
import { EmptyResponse } from '../types/API.Response';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import Project from '../types/Project';
import { map } from 'rxjs/operators';
import User from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient, private auth:AuthServiceService) { }

  patchUser(userObject): Promise<EmptyResponse>{
    return this.http.patch(
    environment.baseApi+"/user",
    {data:encryptData(userObject)},
    {headers:this.auth.headers}
    ).toPromise();
  }

  getUser(userID): Promise<User>{
    return this.http.get(`${environment.baseApi}/user/${userID}`,
      {headers:this.auth.headers}).pipe(map((body:any)=>{
        let user = JSON.parse(decryptData(body.data))
        return user as User;
      })).toPromise();
  }


  postProject(projectObject): Promise<EmptyResponse>{
    return this.http.post(
      environment.baseApi+"/project",
      {data:encryptData(projectObject)},
      {headers:this.auth.headers}
      ).toPromise();
  }

  getProjects():Promise<Project[]>{
    return this.http.get(
      environment.baseApi+"/project",
      {headers:this.auth.headers}
      ).pipe(map((result:any)=>{
        return JSON.parse(decryptData(result.data)) as Project[];
      })).toPromise();
  }


}
