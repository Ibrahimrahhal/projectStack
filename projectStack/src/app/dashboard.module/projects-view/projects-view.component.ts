import { ProjectsDataService } from './../services/projects-data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectWithExtras } from 'src/app/types/projectWithExtras';
import Project from 'src/app/types/Project';

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.scss']
})
export class ProjectsViewComponent implements OnInit {
  public loading:boolean = true;
  private _projects:Array<ProjectWithExtras> = [];


  constructor(
    private router:Router,
    private data:ProjectsDataService
  ) { }

  ngOnInit(): void {
    this.data.getProjects().then((result)=>{
      this._projects = result;
      this.loading = false;
    })
  }

  navigateToProject(projectID = 'new'){
    setTimeout(()=>{
      this.router.navigate(projectID == 'new' ? ['project', projectID] : ['project', projectID, 'dashboard']);
    }, 300)
  }

  get projects():Array<Project>{
    return this._projects.map(pe=>pe.project);
  }
}

