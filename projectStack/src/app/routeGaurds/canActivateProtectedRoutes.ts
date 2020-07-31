import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';


@Injectable({
  providedIn:'root'
})
export default class AuthGaurdForProtectedRoutes implements CanActivate {

    constructor(private _router:Router, private auth:AuthServiceService ) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Promise<boolean> {
                  return new Promise((resolve, reject)=>{
                    if(typeof this.auth.isUserSignedIn == typeof undefined)
                        this.auth.signInState.subscribe(()=>{
                      if(typeof this.auth.isUserSignedIn == typeof undefined)
                        return;
                        if(this.auth.isUserSignedIn)
                            resolve(true);
                        else
                            this._router.navigateByUrl('/external/login');
                             resolve(false);
                        });
                      else
                        if(this.auth.isUserSignedIn){
                          resolve(true);
                        }else{
                          this._router.navigateByUrl('/external/login');
                          resolve(false);
                        }

                  })
    }

}
