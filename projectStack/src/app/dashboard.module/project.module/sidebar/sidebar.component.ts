import { Component, OnInit, Input } from '@angular/core';
import Project from 'src/app/types/Project';

@Component({
  selector: 'project-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() project:Project;
  activeTab:string;
  constructor() { }

  ngOnInit(): void {
  this.activeTab = 'home';
  }

}
