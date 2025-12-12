import { Component, OnInit, Input, Sanitizer } from '@angular/core';
import User from 'src/app/types/User';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project-team',
  templateUrl: './project-team.component.html',
  styleUrls: ['./project-team.component.scss']
})
export class ProjectTeamComponent implements OnInit {
  @Input() members:Array<User>;
  constructor(private safe:DomSanitizer) { }

  ngOnInit(): void {
  }

  getSafeBackground(url){
    return this.safe.bypassSecurityTrustStyle(`url("${url}")`);
  }

}

