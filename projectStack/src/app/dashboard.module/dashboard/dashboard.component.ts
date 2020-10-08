import { Router } from '@angular/router';
import { ProfileRoutingModule } from './../../profile/project-routing.module';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from 'src/app/services/http.service';
import Project from 'src/app/types/Project';
import { ProjectsDataService } from '../services/projects-data.service';
import { ProjectWithExtras } from 'src/app/types/projectWithExtras';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
public loading:boolean = true;
  constructor(
    private auth:AuthServiceService,
    private safe:DomSanitizer,
    private data:ProjectsDataService,
    private router:Router){}
  ngOnInit() {
    window["dashboard"] = this;

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


  navigateToProject(projectID = 'new'){
  setTimeout(()=>{
    this.router.navigate(projectID == 'new' ? ['project', projectID] : ['project', projectID, 'dashboard']);
  }, 300)
  }

}

