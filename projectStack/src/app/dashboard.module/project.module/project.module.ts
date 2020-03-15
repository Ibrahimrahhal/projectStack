import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';



@NgModule({
  declarations: [ProjectDashboardComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProjectModule { }
