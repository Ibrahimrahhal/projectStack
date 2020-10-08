import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotificationsSectionComponent } from './header-menu/notifications-section/notifications-section.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SubmenuComponent } from './header-menu/submenu/submenu.component';
import { SharedModule } from '../shared/shared.module';
import { NotificatiosModule } from '../notificatios/notificatios.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NotificationsSectionComponent,
    HeaderMenuComponent,
    SubmenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NotificatiosModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  entryComponents:[HeaderMenuComponent]
})
export class LayoutPartsModule { }
