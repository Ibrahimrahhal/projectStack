import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HeaderComponent } from './header/header.component';
import { AuthServiceService } from '../services/auth-service.service';
import { AmplifyAngularModule } from 'aws-amplify-angular';
import { ReactiveFormsModule } from '@angular/forms';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PerfectScrollbarModule,
    AmplifyAngularModule,
    ReactiveFormsModule
  ],
  exports:[
    MaterialModule,
    PerfectScrollbarModule,
    HeaderComponent,
    AmplifyAngularModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    AuthServiceService
  ]
})
export class SharedModule { }
