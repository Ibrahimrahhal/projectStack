import { Injectable } from '@angular/core';
import Project from 'src/app/types/Project';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  private _projects:Array<Project>;
  constructor(private http:HttpService) { }

  async getProjects():Promise<Project[]> {
    if(!this._projects)
      await this.updateProjects();
    return this._projects;
  }

  async updateProjects():Promise<Project[]> {
    this._projects = await this.http.getProjects();
    return this._projects;
  }


}
