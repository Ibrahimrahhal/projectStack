import { ToastrService } from 'ngx-toastr';
import { ProjectsDataService } from './../../../services/projects-data.service';
import { Router } from '@angular/router';
import { JoinReuqestWithExtras } from './../../../../types/JoinRequest';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RespondToProjectDialogComponent } from '../respond-to-project-dialog/respond-to-project-dialog.component';

@Component({
  selector: 'app-user-invite-card',
  templateUrl: './user-invite-card.component.html',
  styleUrls: ['./user-invite-card.component.scss']
})
export class UserInviteCardComponent implements OnInit {
  @Input('joinRequest') invitation:JoinReuqestWithExtras;
  @Output() joinRequestResponded:EventEmitter<void>  = new EventEmitter();

  respondLoading:boolean;
  invitationLoading:boolean;
  constructor(
    private router:Router,
    private dialog:MatDialog,
    private dataService:ProjectsDataService,
    private toast:ToastrService) { }

  ngOnInit(): void {
  }

  navigateToProject():void{
    this.router.navigate(['project',this.invitation.extras.project.ID]);
  }

  openRespondDialog(){
    this.dialog.open(RespondToProjectDialogComponent,{
      data: this.invitation
    }).afterClosed().toPromise().then((result:{
      accept:boolean,
      message:string
    })=>{
      if(!result)
        return;
      this.respondLoading = true;
      this.dataService.respondToUserJoinRequest(result.accept, result.message, this.invitation.request).then(()=>{
        this.respondLoading = false;
        this.joinRequestResponded.emit();
        this.toast.success("Respond has delivered successfully to " + this.invitation.extras.project.projectName, "Responding To Project Invitation");
      }).catch((e)=>{
        this.respondLoading = false;
        this.toast.error("Unexpected Error Responding to " + this.invitation.extras.project.projectName, "Responding To Project Invitation");
      });
    })
  }
}

