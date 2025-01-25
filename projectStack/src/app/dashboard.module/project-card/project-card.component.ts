import Project  from 'src/app/types/Project';
import { Component, Input, OnInit } from '@angular/core';
import { trimText } from 'src/util/util';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project:Project;
  @Input() loading:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  get formatText(){
    return trimText
  }

}

