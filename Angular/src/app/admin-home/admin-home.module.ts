import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';

import { AdminHomeRoutingModule } from './admin-home-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,AdminHomeRoutingModule],
  declarations: [AdminHomeComponent],
})
export class adminModule {




  
}
