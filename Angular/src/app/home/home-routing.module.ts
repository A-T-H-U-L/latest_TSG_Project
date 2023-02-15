import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';
import { RoleGuard } from '@app/auth/roleGuard';


const routes: Routes = [
  Shell.childRoutes([

    { path: 'home', component: HomeComponent, data: { title: marker('Home') },canActivate:[RoleGuard.forRoles(1),AuthenticationGuard] },
   
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
