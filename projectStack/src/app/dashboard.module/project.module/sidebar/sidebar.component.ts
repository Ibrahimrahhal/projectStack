import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Project from 'src/app/types/Project';

@Component({
  selector: 'project-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() project:Project;
  @Input() activeTab:string;
  @Output() activeTabChange:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
