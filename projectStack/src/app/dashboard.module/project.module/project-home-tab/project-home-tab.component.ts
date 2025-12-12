import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit, Input } from '@angular/core';
import Project from 'src/app/types/Project';

@Component({
  selector: 'project-home-tab',
  templateUrl: './project-home-tab.component.html',
  styleUrls: ['./project-home-tab.component.scss']
})
export class ProjectHomeTabComponent implements OnInit {
  project:Project;
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.activatedProject.subscribe((activatedProject:Project)=>{
      this.project = activatedProject;
    })
  }




  get loading():boolean{
    return this.dataService.loadingState;
  }

}

