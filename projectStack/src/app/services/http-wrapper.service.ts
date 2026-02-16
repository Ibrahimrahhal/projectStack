import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  constructor(
    private http:HttpClient,
    private auth:AuthServiceService) {

     }

  get(url:string, options:any):Observable<any>{
    let promise = new Promise((resolve, reject)=>{
      this.auth.headers().then((headers)=>{
        this.http.get(url, {headers:headers,...options}).toPromise().then((data)=>{
          resolve(data);
        }).catch((e)=>{
          reject(e);
        });
      })
    });
    return from(promise);
  }

  post(url:string, body:any, options:any):Observable<any>{
    let promise = new Promise((resolve, reject)=>{
      this.auth.headers().then((headers)=>{
        this.http.post(url, body, {headers:headers,...options}).toPromise().then((data)=>{
          resolve(data);
        }).catch((e)=>{
          reject(e);
        });
      })
    });
    return from(promise);
  }

  put(url:string, body:any, options:any):Observable<any>{
    let promise = new Promise((resolve, reject)=>{
      this.auth.headers().then((headers)=>{
        this.http.put(url, body, {headers:headers,...options}).toPromise().then((data)=>{
          resolve(data);
        }).catch((e)=>{
          reject(e);
        });
      })
    });
    return from(promise);
  }

  delete(url:string, options:any):Observable<any>{
    let promise = new Promise((resolve, reject)=>{
      this.auth.headers().then((headers)=>{
        this.http.delete(url, {headers:headers,...options}).toPromise().then((data)=>{
          resolve(data);
        }).catch((e)=>{
          reject(e);
        });
      })
    });
    return from(promise);
  }

  patch(url:string, body:any, options:any):Observable<any>{
    let promise = new Promise((resolve, reject)=>{
      this.auth.headers().then((headers)=>{
        this.http.patch(url, body, {headers:headers,...options}).toPromise().then((data)=>{
          resolve(data);
        }).catch((e)=>{
          reject(e);
        });
      })
    });
    return from(promise);
  }

}

