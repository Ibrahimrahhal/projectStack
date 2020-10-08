import { ToastrService } from 'ngx-toastr';
import { ProjectsDataService } from './../../../services/projects-data.service';
import { HttpWrapperService } from 'src/app/services/http-wrapper.service';
import JoinRequest, { JoinReuqestWithExtras }  from '../../../../types/JoinRequest';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RespondToJoinRequestDialogComponent } from '../respond-to-join-request-dialog/respond-to-join-request-dialog.component';

@Component({
  selector: 'join-request-project-dashboard',
  templateUrl: './join-request-on-project-dashboard.component.html',
  styleUrls: ['./join-request-on-project-dashboard.component.scss']
})
export class JoinRequestOnProjectDashboardComponent implements OnInit {
  @Input() joinRequest:JoinReuqestWithExtras;
  @Input('loading') loadingWidget;
  @Output() joinRequestResponded:EventEmitter<void> = new EventEmitter();
  public loading:boolean = false;
  constructor(
    private dialog:MatDialog,
    private dataService:ProjectsDataService,
    private toast:ToastrService) { }

  ngOnInit(): void {
  }

  openRespondDialog(){
    this.dialog.open(RespondToJoinRequestDialogComponent, {
      data:this.joinRequest
    }).afterClosed().subscribe((result:{
      accept:boolean,
      message:string
    })=>{
      if(!result)
        return;
      this.loading = true;
      this.dataService.respondToUserJoinRequest(result.accept, result.message, this.joinRequest.request).then(()=>{
        this.loading = false;
        this.joinRequestResponded.emit();
        this.toast.success("Respond has delivered successfully to " + this.joinRequest.extras.user.firstName, "Responding To Join Request");
      }).catch((e)=>{
        this.loading = false;
        this.toast.error("Unexpected Error Responding to " + this.joinRequest.extras.user.firstName, "Responding To Join Request");
      });
    });
  }



}
