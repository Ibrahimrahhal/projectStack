import { RouterModule } from '@angular/router';
import { LayoutPartsModule } from './../../layout-parts/layout-parts.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectHomeTabComponent } from './project-home-tab/project-home-tab.component';
import { ProjectTeamComponent } from './project-home-tab/project-team/project-team.component';
import { ProjectReportComponent } from './project-home-tab/project-report/project-report.component';
import { JoinRequestsComponent } from './join-requests/join-requests.component';
import { JoinRequestOnProjectDashboardComponent } from './join-requests/join-request-on-project-dashboard/join-request-on-project-dashboard.component';
import { RespondToJoinRequestDialogComponent } from './join-requests/respond-to-join-request-dialog/respond-to-join-request-dialog.component';



@NgModule({
  declarations: [ProjectDashboardComponent, SidebarComponent, ProjectHomeTabComponent, ProjectTeamComponent, JoinRequestsComponent, ProjectReportComponent, JoinRequestOnProjectDashboardComponent, RespondToJoinRequestDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutPartsModule,
    RouterModule
  ]
})
export class ProjectModule { }
