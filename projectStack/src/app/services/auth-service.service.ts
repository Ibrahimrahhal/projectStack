import { Injectable } from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isUserSignedIn:boolean = false;
  constructor(private amplifyService:AmplifyService) {
    window["auth"] = this.amplifyService.auth();
    this.amplifyService.authStateChange$
    .subscribe(authState => {
        this.isUserSignedIn = authState.state === 'signedIn';
  });
}

signup(username, password, email, phonenumber){
  return this.amplifyService.auth().signUp(username, password, email, phonenumber) as Promise<any>;
}

login(email, password){
  return this.amplifyService.auth().signIn(email, password) as Promise<any>;
}

confirmEmail(email, code){
 return this.amplifyService.auth().confirm
}




}
