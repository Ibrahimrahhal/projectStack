import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from 'src/app/services/http.service';
import Project from 'src/app/types/Project';
import { ProjectsDataService } from '../services/projects-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
private _projects:Array<Project> = [];
public loading:boolean = true;
  constructor(
    private auth:AuthServiceService,
    private safe:DomSanitizer,
    private data:ProjectsDataService) { }

  ngOnInit() {
    this.data.getProjects().then((result)=>{
      this._projects = result;
      this.loading = false;
    })
  }


  get user(){
    return this.auth.user;
  }

  get safeUserImage(){
    if(this.user)
    return this.safe.bypassSecurityTrustStyle(`url(${this.user.profileImage})`)
    else
    return '';
  }

  get projects():Array<Project>{
    return this._projects;
  }

}

