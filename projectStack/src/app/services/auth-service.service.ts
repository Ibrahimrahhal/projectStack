import { Injectable } from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { decryptData, encryptData } from '../../util/util';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isUserSignedIn:boolean;
  user;
  hldEmail;
  signInState:Subject<any> = new Subject()
  constructor(
    private amplifyService:AmplifyService,
    private http:HttpClient) {
    this.amplifyService.authStateChange$
    .subscribe(authState => {
        this.isUserSignedIn = authState.state === 'signedIn';
        this.signInState.next(true);
        if(this.isUserSignedIn)
          this.getUserDate();
  });
}

signup(username, password, email, phonenumber){
  this.hldEmail = email;
  return this.amplifyService.auth().signUp(username, password, email, phonenumber) as Promise<any>;
}

login(email, password){
  return new Promise(async (resolve, reject) => {
    try {
      await this.amplifyService.auth().signIn(email, password) as Promise<any>;
    }catch(e){
      reject(e);
      return;
    }
    let user = await this.getUserDate();
    return resolve(user);
  });
}

async getUserDate(){
  let { data } = await this.http.get( environment.baseApi + '/user', { headers: this.headers}).toPromise() as any;
  this.user = JSON.parse(decryptData(data));
  return this.user;
}

confirmEmail(code){
  return new Promise(async(resolve, reject)=>{
    try{
      let result = await this.amplifyService.auth().confirmSignUp(this.hldEmail, code) as Promise<any>;
      this.hldEmail = null;
      resolve(result);
    }catch(e){
      reject(e)
    }
  });
}

get headers(){
  return {
      authorization: this.amplifyService.auth().user.signInUserSession.idToken.jwtToken
    };
}




}
