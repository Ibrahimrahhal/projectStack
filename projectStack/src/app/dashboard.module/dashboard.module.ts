import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectWidgetComponent } from './project-widget/project-widget.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectModule } from './project.module/project.module';
import { ProjectCardComponent } from './project-card/project-card.component';
import { LayoutPartsModule } from '../layout-parts/layout-parts.module';
import { UserInvitaionsComponent } from './dashboard/user-invitaions/user-invitaions.component';
import { UserInviteCardComponent } from './dashboard/user-invitaions/user-invite-card/user-invite-card.component';
import { RespondToProjectDialogComponent } from './dashboard/user-invitaions/respond-to-project-dialog/respond-to-project-dialog.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';



@NgModule({
  declarations: [DashboardComponent, ProjectWidgetComponent, NewProjectComponent, ProjectCardComponent, UserInvitaionsComponent, UserInviteCardComponent, RespondToProjectDialogComponent, ProjectsViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectModule,
    LayoutPartsModule
  ]
})
export class DashboardModule { }

