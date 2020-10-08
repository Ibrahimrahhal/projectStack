import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { StaticDataService } from './../../services/static-data.service';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import Project from 'src/app/types/Project';
import { ScrollService } from 'src/app/services/scroll.service';
import { DataServiceService } from '../data-service.service';
import { ToastrService } from 'ngx-toastr';

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
  joinMessage:FormControl;
  selectedSlogen:string;
  projectID:string;
  loading:boolean;
  joinRequestLoading:boolean;
  project:Project;
  constructor(
    public staticData:StaticDataService,
    private activatedRoute:ActivatedRoute,
    private http:HttpService,
    private safeObjectsFactory:DomSanitizer,
    private scroll:ScrollService,
    private data:DataServiceService,
    private toastr:ToastrService) { }

  ngOnInit(): void {

    this.projectID = this.activatedRoute.snapshot.params["projectID"];
    this.selectedSlogen = this.teamSlogens[Math.ceil(Math.random()*3)];
    this.joinMessage = new FormControl('', [Validators.minLength(300), Validators.required]);
    this.loading = true;
    this.joinRequestLoading = false;
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

  scrollToJoin(){
    this.scroll.scrollToElement("button.textAreaJoin", undefined, 1000)
  }



  joinProject(){
    this.joinRequestLoading = true;
    this.data.sendUserJoinRequest(this.project.ID, this.joinMessage.value).then(()=>{
      this.joinRequestLoading = false;
      this.joinMessage.setValue("");
      this.joinMessage.markAsUntouched();
      this.toastr.success(`Your join request To ${this.project.projectName} has been sent`, `Join ${this.project.projectName}`);
    });
  }


}
