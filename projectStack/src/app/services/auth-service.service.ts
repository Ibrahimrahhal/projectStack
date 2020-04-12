import { Injectable } from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { decryptData } from '../../util/util';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isUserSignedIn:boolean = false;
  user;
  hldEmail;
  constructor(
    private amplifyService:AmplifyService,
    private http:HttpClient) {
    window["auth"] = this.amplifyService.auth();
    this.amplifyService.authStateChange$
    .subscribe(authState => {
        this.isUserSignedIn = authState.state === 'signedIn';
  });
}

signup(username, password, email, phonenumber){
  this.hldEmail = email;
  return this.amplifyService.auth().signUp(username, password, email, phonenumber) as Promise<any>;
}

login(email, password){
  return new Promise(async (resolve, reject) => {
    await this.amplifyService.auth().signIn(email, password) as Promise<any>;
    let { data } = await this.http.get( environment.baseApi + '/user', { headers: this.headers}).toPromise() as any;
    this.user = JSON.parse(decryptData(data));
    console.log(this.user, "user")
    return resolve(this.user);
  });
}

confirmEmail(code){
  return new Promise(async(resolve, reject)=>{
    let result = await this.amplifyService.auth().confirmSignUp(this.hldEmail, code) as Promise<any>;
    this.hldEmail = null;
    resolve(result);
  });
}

get headers(){
  return {
      authorization: this.amplifyService.auth().user.signInUserSession.idToken.jwtToken
    };
}




}
