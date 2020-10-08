import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AuthServiceService } from '../services/auth-service.service';
import { AmplifyAngularModule } from 'aws-amplify-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TagsComponent } from './tags/tags.component';
import { TagsSelectComponent } from './tags-select/tags-select.component';
import { ScrollService } from '../services/scroll.service';
import { UserProfileImageComponent } from './user-profile-image/user-profile-image.component';
import { ProfileImagesSectionComponent } from './profile-images-section/profile-images-section.component';
import { NotificatiosModule } from '../notificatios/notificatios.module';
import { LoaderImageComponent } from './loader-image/loader-image.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};



@NgModule({
  declarations: [CustomButtonComponent, TagsComponent, TagsSelectComponent, UserProfileImageComponent, ProfileImagesSectionComponent, LoaderImageComponent],
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
    AmplifyAngularModule,
    ReactiveFormsModule,
    FormsModule,
    CustomButtonComponent,
    ToastrModule,
    NgxSkeletonLoaderModule,
    TagsComponent,
    TagsSelectComponent,
    UserProfileImageComponent,
    ProfileImagesSectionComponent,
    LoaderImageComponent
  ],
  entryComponents:[],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    AuthServiceService,
    ScrollService
  ]
})
export class SharedModule { }
