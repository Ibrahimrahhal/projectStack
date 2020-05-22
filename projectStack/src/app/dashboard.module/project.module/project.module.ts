import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectHomeTabComponent } from './project-home-tab/project-home-tab.component';



@NgModule({
  declarations: [ProjectDashboardComponent, SidebarComponent, ProjectHomeTabComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProjectModule { }
