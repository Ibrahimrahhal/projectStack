import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HeaderComponent } from './header/header.component';
import { AuthServiceService } from '../services/auth-service.service';
import { AmplifyAngularModule } from 'aws-amplify-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { NotificationsSectionComponent } from './header-menu/notifications-section/notifications-section.component';
import { SubmenuComponent } from './header-menu/submenu/submenu.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TagsComponent } from './tags/tags.component';
import { TagsSelectComponent } from './tags-select/tags-select.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};



@NgModule({
  declarations: [HeaderComponent, CustomButtonComponent, HeaderMenuComponent, NotificationsSectionComponent, SubmenuComponent, TagsComponent, TagsSelectComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PerfectScrollbarModule,
    AmplifyAngularModule,
    ReactiveFormsModule,
    ToastrModule,
    RouterModule,
    NgxSkeletonLoaderModule

  ],
  exports:[
    MaterialModule,
    PerfectScrollbarModule,
    HeaderComponent,
    AmplifyAngularModule,
    ReactiveFormsModule,
    FormsModule,
    CustomButtonComponent,
    ToastrModule,
    NgxSkeletonLoaderModule,
    TagsComponent,
    TagsSelectComponent
  ],
  entryComponents:[ HeaderMenuComponent ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    AuthServiceService
  ]
})
export class SharedModule { }
