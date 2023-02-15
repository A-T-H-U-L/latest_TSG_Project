import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';

// import { AdminHomeComponent } from './admin-home.component';
import { AddComponent } from '@app/add/add.component';
import { AdminHomeComponent } from './admin-home.component';
import { AuthenticationroleGuard } from '@app/auth/authenticationrole.guard';
import { RoleGuard } from '@app/auth/roleGuard';

const routes: Routes = [


  
  // {
  //   path: 'adminHome',
  //   component: AdminHomeComponent,
  //   data: { title: marker('Admin') },
  //   canActivate: [AuthenticationGuard],
  // },
  Shell.childRoutes([
    
    { path: 'adminHome', component: AdminHomeComponent, data: { title: marker('AdminHome'),canActivate:[AuthenticationroleGuard] }},
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdminHomeRoutingModule {}
