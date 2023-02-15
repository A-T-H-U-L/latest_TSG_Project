import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';

import { AdminViewGridComponent } from './admin-view-grid.component';
import { AdminViewGridRoutingModule } from './admin-view-grid-routing.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,AdminViewGridRoutingModule,AgGridModule],
  declarations: [AdminViewGridComponent],
})
export class AdminViewGridModule {




  
}
