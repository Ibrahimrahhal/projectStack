import Project  from 'src/app/types/Project';
import { ProjectsDataService } from './../../services/projects-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {
  project:Project;
  activeTab:string;
  constructor(
    private route:ActivatedRoute,
    private data:ProjectsDataService
    ) { }

  ngOnInit() {
    window["projectdas"] = this;
    this.activeTab = 'home';
    let projectID:String = this.route.snapshot.params['projectid'];
    this.data.getProjects().then((projects)=>{
      this.project = projects.find((project)=>{
        return project.ID == projectID;
      });
    });
  }

}
