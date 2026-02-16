import { FormControl, Validators } from '@angular/forms';
import { ProjectWithExtras } from './../../types/projectWithExtras';
import { ProjectsDataService } from './../../dashboard.module/services/projects-data.service';
import User from 'src/app/types/User';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import Project from 'src/app/types/Project';

@Component({
  selector: 'app-invite-to-project-dialog',
  templateUrl: './invite-to-project-dialog.component.html',
  styleUrls: ['./invite-to-project-dialog.component.scss']
})
export class InviteToProjectDialogComponent implements OnInit {

  projects:Project[];
  selectedProject:Project;
  invitationMessage:FormControl;

  constructor(
  @Inject(MAT_DIALOG_DATA) public data: {user:User},
  public dialModRef:MatDialogRef<any>,
  private projectData:ProjectsDataService) { }

  ngOnInit(): void {
    this.invitationMessage = new FormControl(null, [Validators.required, Validators.minLength(200)])
    this.projectData.getProjects().then((projects)=>{
        this.projects = (projects || []).filter((project)=>{
          return project.extras.isAdmin;
        }).map(pe=>pe.project);
    });
  }


  selectProject(project:Project):void{
    this.selectedProject = project;
  }

  closeDialog(result){
    this.dialModRef.close(result);
  }
}

