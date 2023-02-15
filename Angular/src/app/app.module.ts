import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
           
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '@env/environment';
import { RouteReusableStrategy, ApiPrefixInterceptor, ErrorHandlerInterceptor, SharedModule } from '@shared';
import { AuthModule } from '@app/auth';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

import { HttpServiceWrapper} from "@shared/http-service/http-service";
import { RegistrationComponent } from './auth/registration/registration.component';
import { ViewComponent } from './view/view.component';
import { ViewModule } from './view/view.module';
import { AddComponent } from './add/add.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { addModule } from './add/add.module';
import { AdminViewGridComponent } from './admin-view-grid/admin-view-grid.component';
import { AgGridModule } from 'ag-grid-angular';

import { ToastrModule } from 'ngx-toastr';
import { AdminViewGridModule } from './admin-view-grid/admin-view-grid.module';
import { adminModule } from './admin-home/admin-home.module';
import { UserViewComponent } from './user-view/user-view.component';
@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot(),
    SharedModule,
    ShellModule,
    ReactiveFormsModule,
    HomeModule,
    adminModule,
    AboutModule,
    AuthRoutingModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
    addModule,
    BrowserAnimationsModule,
    ViewModule,
    ToastrModule,
    AgGridModule,
    AdminViewGridModule


   

  ],
  declarations: [AppComponent, UserViewComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
    HttpServiceWrapper
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
