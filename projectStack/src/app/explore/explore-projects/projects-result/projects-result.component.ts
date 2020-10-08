import { Component, OnInit, Input } from '@angular/core';
import Project from 'src/app/types/Project';

@Component({
  selector: 'app-projects-result',
  templateUrl: './projects-result.component.html',
  styleUrls: ['./projects-result.component.scss']
})
export class ProjectsResultComponent implements OnInit {
  @Input("projects") projects:Project[];
  @Input() loading;
  @Input() moreProjectsExist;
  constructor() { }

  ngOnInit(): void {
  }

}
