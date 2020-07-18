import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import Project from 'src/app/types/Project';

@Component({
  selector: 'project-widget',
  templateUrl: './project-widget.component.html',
  styleUrls: ['./project-widget.component.scss']
})
export class ProjectWidgetComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() project:Project;
  @Input() isNewProject;
  @Input() loading:boolean;
  ngOnInit() {

  }

  get _project(){
    return this.project || { } as Project;
  }
  get firstLetter(){
    return this._project.projectName[0];
  }
  handleNavigation():void {
    if(this.isNewProject)
       this.router.navigate(["/project/new"])
  }

  navigateToProject():void {
    this.router.navigate([`/project/${this.project.ID}/dashboard`])
  }

}
