import { from, Observable } from 'rxjs';
import Notification, { NotificationsEnum, notificationWithExtras } from '../types/Notification';
import { Injectable } from '@angular/core';
import { HttpWrapperService } from 'src/app/services/http-wrapper.service';
import { promise } from 'protractor';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { convertObservableReturnTypeFromArrayToSingleRespond, decryptData } from 'src/util/util';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private _notifications:notificationWithExtras[];
  constructor(private http:HttpWrapperService) {
    window["Notifications"] = this;
   }

  public get notificationsOneByOne():Observable<notificationWithExtras>{
    if(!this._notifications)
      return this.updateNotifications();
    else
      return from(this._notifications);
  }

  public get notifications():Promise<notificationWithExtras[]>{
    return new Promise(async (resolve, reject)=>{
      if(!this._notifications)
        await this.updateNotifications().toPromise();
      resolve(this._notifications);
    })
  }

  public updateNotifications():Observable<notificationWithExtras>{
    let obs =  this.http.get(environment.baseApi+"/notifications", {}).pipe(map((result:any)=>{
      return JSON.parse(decryptData(result.data)) as notificationWithExtras[];
    })).pipe(tap(results=>{
      this._notifications = results || [];
    }));
    return convertObservableReturnTypeFromArrayToSingleRespond(obs);
  }

  public get isEmpty():boolean{
    return typeof this._notifications != typeof undefined && this._notifications.length > 0;
  }




}
