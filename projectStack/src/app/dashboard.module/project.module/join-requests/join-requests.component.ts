import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProjectsDataService } from './../../services/projects-data.service';
import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';
import { JoinReuqestWithExtras } from 'src/app/types/JoinRequest';
import Project from 'src/app/types/Project';

@Component({
  selector: 'app-join-requests',
  templateUrl: './join-requests.component.html',
  styleUrls: ['./join-requests.component.scss']
})
export class JoinRequestsComponent implements OnInit {
  joinRequest:JoinReuqestWithExtras[];
  loading:boolean;
  project:Project;
  activatedProjectSubscribtion:any;
  constructor(
    private projectDataService:ProjectsDataService,
    private dataService:DataServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedProjectSubscribtion = this.dataService.activatedProject.subscribe((activatedProject:Project)=>{
      if(!activatedProject)
        return;
      this.project = activatedProject;
      this.refreshJoinRequests();
      if(this.activatedProjectSubscribtion)
        this.activatedProjectSubscribtion.unsubscribe()
    });
  }


  async refreshJoinRequests(){
    this.loading = true;
    let projectID:string = this.project.ID;
    this.loading = true;

    try{
      this.joinRequest = await this.projectDataService.getAllJoinRequestsForProject(projectID) || [];
    }catch(e){
      this.joinRequest = [];
    }finally{
      this.loading = false;
    }

  }

  navigateToExploreMe(){
    this.router.navigate(['explore', 'members'])
  }

}

