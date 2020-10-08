import { Router } from '@angular/router';
import { Component, OnInit, Input, NgZone } from '@angular/core';
import Project from 'src/app/types/Project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input("project") project:Project;
  @Input("loading") loading:boolean;
  constructor(
    private router:Router,
    private zone:NgZone) { }

  ngOnInit(): void {
  }

  navigateToProject():void{
    this.zone.run(() => this.router.navigate(['project',this.project.ID]));
  }

}
