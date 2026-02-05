import Project  from 'src/app/types/Project';
import { ProjectsDataService } from './../../services/projects-data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit, OnDestroy {
  project:Project;
  constructor(
    private route:ActivatedRoute,
    private data:ProjectsDataService,
    private moduleData:DataServiceService
    ) { }

  ngOnInit() {
    let projectID:String = this.route.snapshot.params['projectid'];
    this.moduleData.loading();
    this.data.getProjects().then((projects)=>{
      this.project = projects.map(pe=>pe.project).find((project)=>{
        return project.ID == projectID;
      });
      this.moduleData.activateProject(this.project);
      this.moduleData.loading().finished();
    });

  }

  ngOnDestroy(){
    this.moduleData.resetActivatedProject();
  }

}

