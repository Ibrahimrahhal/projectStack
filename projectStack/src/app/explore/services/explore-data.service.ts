import { AuthServiceService } from 'src/app/services/auth-service.service';
import { decryptData } from 'src/util/util';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from 'src/app/types/User';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ExploreDataService {

  constructor(private http:HttpClient, private auth:AuthServiceService) { }

  getMembers():Promise<User[]>{
    return this.http.get(`${environment.baseApi}/users`,{headers:this.auth.headers})
    .pipe(map((body:any)=>{
      let data = JSON.parse(decryptData(body.data));
      return data as Array<User>;
    })).toPromise();
  }
}
