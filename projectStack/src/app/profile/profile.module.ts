import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member/member.component';
import { ProjectComponent } from './project/project.component';
import { ProfileRoutingModule } from './project-routing.module';



@NgModule({
  declarations: [MemberComponent, ProjectComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
