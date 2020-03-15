import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectWidgetComponent } from './project-widget/project-widget.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectModule } from './project.module/project.module';



@NgModule({
  declarations: [DashboardComponent, ProjectWidgetComponent, NewProjectComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectModule
  ]
})
export class DashboardModule { }
