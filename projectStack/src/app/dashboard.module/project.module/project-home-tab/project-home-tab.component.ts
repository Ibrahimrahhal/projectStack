import { Component, OnInit, Input } from '@angular/core';
import Project from 'src/app/types/Project';

@Component({
  selector: 'project-home-tab',
  templateUrl: './project-home-tab.component.html',
  styleUrls: ['./project-home-tab.component.scss']
})
export class ProjectHomeTabComponent implements OnInit {
  @Input() project:Project;
  constructor() { }

  ngOnInit(): void {
  }

}
