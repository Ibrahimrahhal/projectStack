import { JoinReuqestWithExtras } from './../../../types/JoinRequest';
import { ProjectsDataService } from './../../services/projects-data.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import User from '../../../types/User';

@Component({
  selector: 'app-user-invitaions',
  templateUrl: './user-invitaions.component.html',
  styleUrls: ['./user-invitaions.component.scss']
})
export class UserInvitaionsComponent implements OnInit {
  public userInvitations:JoinReuqestWithExtras[];
  loading:boolean = false;
  constructor(
    private auth:AuthServiceService,
    private dataService:ProjectsDataService
  ) { }

  ngOnInit(): void {
    this.refeashInvitation();
  }

  get user():User{
    return this.auth.user;
  }

  refeashInvitation(){
    this.loading = true;
    this.dataService.getUserInvitaions().then((userInvites)=>{
      this.userInvitations = userInvites;
      this.loading = false;;
    })
  }
  updateInvitations(){
    this.refeashInvitation();
  }

  deleteInvite(index:number){
    this.userInvitations = this.userInvitations.filter((x,i)=>{
      return i != index;
    });
  }

}
