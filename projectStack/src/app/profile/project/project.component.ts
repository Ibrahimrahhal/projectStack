import { DomSanitizer } from '@angular/platform-browser';
import { StaticDataService } from './../../services/static-data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import Project from 'src/app/types/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  teamSlogens:string[] = [
    "Surrender The Me For The We",
    "All the talent in the world won’t take you anywhere without your team",
    "Teamwork Makes The Dream Work",
    "Bringing Out The Best in Each Other!"
  ];
  selectedSlogen:string;
  projectID:string;
  loading:boolean;
  project:Project;
  constructor(
    public staticData:StaticDataService,
    private activatedRoute:ActivatedRoute,
    private http:HttpService,
    private safeObjectsFactory:DomSanitizer) { }

  ngOnInit(): void {
    this.projectID = this.activatedRoute.snapshot.params["projectID"];
    this.selectedSlogen = this.teamSlogens[Math.ceil(Math.random()*3)];
    this.loading = true;
    this.http.getProject(this.projectID, true).then((project)=>{
      this.project = project;
      this.loading = false;

    });
  }

  getSafeBackgroundStyle(backgroundLink:string){
    console.log(backgroundLink);
    window["saafafe"] = this.safeObjectsFactory;
    return this.safeObjectsFactory.bypassSecurityTrustStyle(`url('${backgroundLink}')`);
  }


}
