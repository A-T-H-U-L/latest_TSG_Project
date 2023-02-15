import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';

import { AddComponent } from './add.component';
import { AddRoutingModule } from './add-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,AddRoutingModule,ReactiveFormsModule],
  declarations: [AddComponent],
})
export class addModule {




  
}
