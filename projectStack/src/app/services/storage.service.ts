import { environment } from './../../environments/environment';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import bufferToStr from 'arraybuffer-to-string';
import { encryptData } from '../../util/util';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http:HttpClient, private auth:AuthServiceService) {
    window["enc"] = encryptData
  }


  async uploadProfileImage(file){
    let buffer = await file.arrayBuffer();
    let base64 = bufferToStr(buffer, 'base64');
    let req = {
      data: base64
    };
    req[encryptData('imgType')] = encryptData(file.name.split('.').reverse()[0]);
    return await this.http.put( environment.baseApi + '/storage/profile', req, { headers: this.auth.headers }).toPromise();
  }

  async uploadResume(file){
    let buffer = await file.arrayBuffer();
    let base64 = bufferToStr(buffer, 'base64');
    let req = {
      data: base64
    };
    req[encryptData('resumeType')] = encryptData(file.name.split('.').reverse()[0]);
    return await this.http.put( environment.baseApi + '/storage/resume', req, { headers: this.auth.headers }).toPromise();
  }
}
