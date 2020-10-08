import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { ExploreMembersComponent } from './explore-members/explore-members.component';
import { ExploreProjectsComponent } from './explore-projects/explore-projects.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ExploreDataService } from './services/explore-data.service';
import { MemberCardComponent } from './explore-members/member-card/member-card.component';
import { HotProjectsComponent } from './explore-projects/hot-projects/hot-projects.component';
import { ProjectsResultComponent } from './explore-projects/projects-result/projects-result.component';
import { ProjectCardComponent } from './explore-projects/project-card/project-card.component';
import { AdvancedFiltersComponent } from './explore-projects/advanced-filters/advanced-filters.component';
import { SearchBoxComponent } from './explore-members/search-box/search-box.component';
import { LayoutPartsModule } from '../layout-parts/layout-parts.module';



@NgModule({
  declarations: [ExploreComponent, ExploreMembersComponent, ExploreProjectsComponent, MemberCardComponent, HotProjectsComponent, ProjectsResultComponent, ProjectCardComponent, AdvancedFiltersComponent, SearchBoxComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    SharedModule,
    LayoutPartsModule
  ],
  providers:[
    ExploreDataService
  ]
})
export class ExploreModule { }
