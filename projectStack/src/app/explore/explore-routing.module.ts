import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { ExploreMembersComponent } from './explore-members/explore-members.component';
import { ExploreProjectsComponent } from './explore-projects/explore-projects.component';
import { RouterModule, Routes } from '@angular/router';
import AuthGaurdForProtectedRoutes from '../routeGaurds/canActivateProtectedRoutes';

const appRoutes: Routes = [
  { path:'explore', component: ExploreComponent, canActivate: [AuthGaurdForProtectedRoutes] },
  { path:'explore/members', component: ExploreMembersComponent, canActivate: [AuthGaurdForProtectedRoutes] },
  { path:'explore/projects', component: ExploreProjectsComponent, canActivate: [AuthGaurdForProtectedRoutes] }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports:[RouterModule]
})
export class ExploreRoutingModule { }
