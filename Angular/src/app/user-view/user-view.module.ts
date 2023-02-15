import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';


import { AgGridModule } from 'ag-grid-angular';
import { UserViewGridRoutingModule } from './user-view-routing.module';
import { UserViewComponent } from './user-view.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,UserViewGridRoutingModule,AgGridModule],
  declarations: [UserViewComponent],
})
export class AdminViewGridModule {




  
}