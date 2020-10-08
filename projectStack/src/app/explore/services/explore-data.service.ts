import { ProjectWithExtras } from './../../types/projectWithExtras';
import { HttpWrapperService } from './../../services/http-wrapper.service';
import  Project  from 'src/app/types/Project';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { decryptData, encryptData } from 'src/util/util';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import User from 'src/app/types/User';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ExploreDataService {

  constructor(private http:HttpWrapperService, private auth:AuthServiceService) { }

  getMembers(query:any):Promise<{results:User[], pages:number}>{
    return this.http.post(`${environment.baseApi}/users`,{
      data: encryptData(query)
    }, {})
    .pipe(map((body:any)=>{
      let data = JSON.parse(decryptData(body.data));
      return data as {results:User[], pages:number};
    })).toPromise();
  }

  getProjects(query):Promise<{
    results:Project[],
    pages:number
  }>{
    return this.http.post(`${environment.baseApi}/projects`,{
      data:encryptData(query)
    }, {}).pipe(map((body:any)=>{
      let data = JSON.parse(decryptData(body.data));
      return data as any;
    })).toPromise();
  }


}
