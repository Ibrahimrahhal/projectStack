import { HttpWrapperService } from './../services/http-wrapper.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { encryptData, stringToBase64 } from 'src/util/util';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpWrapperService) { }


  async sendUserJoinRequest(projectID:string, message:string):Promise<void>{
    await this.http.post(`${environment.baseApi}/join/${projectID}`, {
      data:encryptData({message})
    }, {}).toPromise();
  }

  async sendInvitationToUser(userID:string, projectID:string, message:string){
    await this.http.post(`${environment.baseApi}/invite/${await stringToBase64(userID)}/${projectID}`, {
      data:encryptData({message})
    }, {}).toPromise();
  }
}

