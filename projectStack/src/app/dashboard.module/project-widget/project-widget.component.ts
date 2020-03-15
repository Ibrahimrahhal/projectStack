import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-widget',
  templateUrl: './project-widget.component.html',
  styleUrls: ['./project-widget.component.scss']
})
export class ProjectWidgetComponent implements OnInit {

  constructor() { }
  @Input() project;
  @Input() isNewProject;
  ngOnInit() {

  }

  get _project(){
    return this.project || {
      name: "Suzzi"
    };
  }
  get firstLetter(){
    return this._project.name[0]
  }

}
