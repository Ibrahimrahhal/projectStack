import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { decryptData, encryptData } from 'src/util/util';
import { EmptyResponse } from '../types/API.Response';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient, private auth:AuthServiceService) { }
  putUser(userObject): Promise<EmptyResponse>{
    return this.http.put(
    environment.baseApi+"/user",
    {data:encryptData(userObject)},
    {headers:this.auth.headers}
    ).toPromise();
  }
}
