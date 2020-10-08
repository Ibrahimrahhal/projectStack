import { ReplaySubject, Observable } from 'rxjs';
import Project from 'src/app/types/Project';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private activatedProjectInDashboard:ReplaySubject<Project> = new ReplaySubject(1);
  private _loading:boolean = false;
  constructor() { }

  activateProject(project:Project):void{
    this.activatedProjectInDashboard.next(project);
  }

  resetActivatedProject():void{
    this.activatedProjectInDashboard.next(null);
  }

  get activatedProject():Observable<Project>{
    return this.activatedProjectInDashboard.asObservable();
  }

  loading(){
    this._loading = true;
    return {
      finished:()=>this._loading=false
    }
  }

  get loadingState():boolean{
    return this._loading;
  }
}
