import { HttpWrapperService } from './../../services/http-wrapper.service';
import  Project  from 'src/app/types/Project';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { decryptData } from 'src/util/util';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import User from 'src/app/types/User';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ExploreDataService {

  constructor(private http:HttpWrapperService, private auth:AuthServiceService) { }

  getMembers():Promise<User[]>{
    return this.http.get(`${environment.baseApi}/users`,{})
    .pipe(map((body:any)=>{
      let data = JSON.parse(decryptData(body.data));
      return data as Array<User>;
    })).toPromise();
  }

  getProjects():Promise<Project[]>{
    return this.http.get(`${environment.baseApi}/projects`,{})
    .pipe(map((body:any)=>{
      let data = JSON.parse(decryptData(body.data));
      return data as Array<Project>;
    })).toPromise();
  }
}
