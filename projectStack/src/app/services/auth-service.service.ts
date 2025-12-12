import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { decryptData, encryptData } from '../../util/util';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpService } from './http.service';
import { Auth } from 'aws-amplify';
import User from '../types/User';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isUserSignedIn:boolean;
  user:User;
  hldEmail;
  signInState:BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(
    private amplifyService:AmplifyService,
    private dialog:MatDialog) {
      window["assssss"] = Auth;
    this.amplifyService.authStateChange$
    .subscribe(authState => {
        this.isUserSignedIn = authState.state === 'signedIn';
        this.signInState.next(this.isUserSignedIn);
  });
}

loginUser(email, password){
  return this.amplifyService.auth().signIn(email, password);
}

signUpUser(username, password, email, phonenumber){
  return this.amplifyService.auth().signUp(username, password, email, phonenumber);
}

async signOut(){
  this.dialog.closeAll()
  await this.amplifyService.auth().signOut();
  location.reload()
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

async headers(){
  return {
      authorization: (await this.amplifyService.auth().currentSession()).idToken.jwtToken
    };
}


}

