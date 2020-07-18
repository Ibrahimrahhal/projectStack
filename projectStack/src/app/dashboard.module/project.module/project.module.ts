import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectHomeTabComponent } from './project-home-tab/project-home-tab.component';
import { ProjectTeamComponent } from './project-home-tab/project-team/project-team.component';
import { JoinRequestsComponent } from './project-home-tab/join-requests/join-requests.component';
import { ProjectReportComponent } from './project-home-tab/project-report/project-report.component';



@NgModule({
  declarations: [ProjectDashboardComponent, SidebarComponent, ProjectHomeTabComponent, ProjectTeamComponent, JoinRequestsComponent, ProjectReportComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProjectModule { }
