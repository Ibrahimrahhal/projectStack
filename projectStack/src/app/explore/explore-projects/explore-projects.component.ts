import Project from 'src/app/types/Project';
import { ExploreDataService } from './../services/explore-data.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdvancedFiltersComponent } from './advanced-filters/advanced-filters.component';

@Component({
  selector: 'app-explore-projects',
  templateUrl: './explore-projects.component.html',
  styleUrls: ['./explore-projects.component.scss']
})
export class ExploreProjectsComponent implements OnInit {

  public ProjectsToRender:Project[];
  constructor(
    private dataService:ExploreDataService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.getProjects().then((projects)=>{
      this.ProjectsToRender = projects || [];
    }).catch((e)=>{
      this.ProjectsToRender = [];
    })
  }

  openFiltersSection():void{
      this.dialog.open(AdvancedFiltersComponent, {

      })
  }

}
