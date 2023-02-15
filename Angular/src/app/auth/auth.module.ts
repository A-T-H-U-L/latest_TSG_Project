import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import * as bcrypt from 'bcryptjs';

import { I18nModule } from '@app/i18n';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from '@app/auth/registration/registration.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, I18nModule, AuthRoutingModule,
  ToastrModule.forRoot({
    timeOut:100000,
    positionClass:'toast-top-right'
  })
  ],
  declarations: [LoginComponent,RegistrationComponent],
})
export class AuthModule {}
