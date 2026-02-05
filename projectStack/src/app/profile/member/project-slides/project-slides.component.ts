import { Router } from '@angular/router';
import { ProjectWithExtras } from './../../../types/projectWithExtras';
import { Component, Input, OnInit } from '@angular/core';
import User from 'src/app/types/User';

@Component({
  selector: 'app-project-slides',
  templateUrl: './project-slides.component.html',
  styleUrls: ['./project-slides.component.scss']
})
export class ProjectSlidesComponent implements OnInit {
  @Input() projects:ProjectWithExtras[];
  @Input() user:User;
  @Input() loading:boolean;
  public selectedNumber:number = 0;;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public get selectedProject():ProjectWithExtras{
    if(!this.projects)
      return undefined;
    return this.projects[this.selectedNumber];
  }


  public nextProject(){
    if((this.selectedNumber+1)  == this.projects.length){
      this.selectedNumber = 0 ;
      return;
    }
    this.selectedNumber++;
  }

  public navigateToSelectedProject(){
    this.router.navigate(['project',this.selectedProject.project.ID])
  }



}

