import { HttpWrapperService } from './http-wrapper.service';
import { environment } from './../../environments/environment';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Injectable } from '@angular/core';
import bufferToStr from 'arraybuffer-to-string';
import { encryptData } from '../../util/util';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http:HttpWrapperService, private auth:AuthServiceService) {
    window["enc"] = encryptData
  }


  async uploadProfileImage(file){
    let data = await this.bufferToBase64(file);
    let req = {
      data
    };
    req[encryptData('imgType')] = encryptData(file.name.split('.').reverse()[0]);
    return await this.http.put( environment.baseApi + '/storage/profile', req, {}).toPromise();
  }

  async uploadResume(file){
    let data = await this.bufferToBase64(file);
    let req = {
      data
    };
    req[encryptData('resumeType')] = encryptData(file.name.split('.').reverse()[0]);
    return await this.http.put( environment.baseApi + '/storage/resume', req, {}).toPromise();
  }

  private async bufferToBase64(file):Promise<string> {
   return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
  });

}

}
