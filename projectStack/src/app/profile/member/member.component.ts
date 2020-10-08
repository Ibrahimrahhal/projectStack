import { ProjectWithExtras } from './../../types/projectWithExtras';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';
import { StaticDataService } from 'src/app/services/static-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import User from 'src/app/types/User';
import { InviteToProjectDialogComponent } from '../invite-to-project-dialog/invite-to-project-dialog.component';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  inviteLoading:boolean = false;
  constructor(
    private route:ActivatedRoute,
     private http:HttpService,
     private safeStuff:DomSanitizer,
     public staticData:StaticDataService,
     private dialog:MatDialog,
     private dataService:DataServiceService,
     private toastr:ToastrService) { }
  userID:string;
  loading:boolean = true;
  member:User;
  projects:ProjectWithExtras[]
  ngOnInit(): void {
    this.userID = this.route.snapshot.params["userID"];
    this.http.getUser(this.userID, true).then((response)=>{
      this.loading = false;
      this.member = response.user;
      this.projects = response.projects;
    })
  }

  get Username(){
    if(this.member)
    return `${this.member.firstName} ${this.member.lastName}`;
    return '';
  }

  get backgroundImageStyle(){
    return this.safeStuff.bypassSecurityTrustStyle(`url('${this.member.profileImage}')`);
  }

  openInviteDialog():void{
    this.dialog.open(InviteToProjectDialogComponent,{
      data:{user:this.member},
      width: '400px'
    }).afterClosed().toPromise().then((result:{message:string, projectID:string})=>{
      if(!result)
        return false;
        this.inviteLoading = true;
        this.dataService.sendInvitationToUser(this.member.email, result.projectID, result.message).then(()=>{
          this.inviteLoading = false;
          this.toastr.success(`Invitation has been successfully sent to ${this.member.firstName}`, "Invite Member")
        }).catch((er)=>{
          this.toastr.error(`Unexpected error sending invitation to ${this.member.firstName}`, "Invite Member")
          this.inviteLoading = false;
        })
    })
  }

}
