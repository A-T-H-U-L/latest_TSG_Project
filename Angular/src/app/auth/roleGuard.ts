import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Logger } from '@shared';
import { Observable } from 'rxjs';
import { CredentialsService } from './credentials.service';

const log = new Logger('AuthenticationGuard');



export class RoleGuard{

    static forRoles(roles:number){

    @Injectable({
        providedIn: 'root',
      })


      class RoleCheck implements CanActivate {


        constructor(private router: Router,private credentialsService: CredentialsService) {}
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean 
        {

            console.log("roles",roles)
            console.log('id',this.credentialsService.getRole())
            console.log('assd')
          if (this.credentialsService.isAuthenticated() && roles===this.credentialsService.getRole()) {

            return true;
          }
      
          log.debug('Not authenticated, redirecting and adding redirect url...');
          this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
          return false;
        }
        
      }
    
    return RoleCheck
    
    
    
    }



}