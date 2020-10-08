import { LayoutPartsModule } from './../layout-parts/layout-parts.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member/member.component';
import { ProjectComponent } from './project/project.component';
import { ProfileRoutingModule } from './project-routing.module';
import { ProjectSlidesComponent } from './member/project-slides/project-slides.component';
import { InviteToProjectDialogComponent } from './invite-to-project-dialog/invite-to-project-dialog.component';



@NgModule({
  declarations: [MemberComponent, ProjectComponent, ProjectSlidesComponent, InviteToProjectDialogComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    LayoutPartsModule,
    SharedModule
  ]
})
export class ProfileModule { }
