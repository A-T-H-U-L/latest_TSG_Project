import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationroleGuard implements CanActivate {
 
  constructor(private router: Router){}
  canActivate(): boolean {
   
    if(JSON.parse(sessionStorage.getItem("_app_cache")|| "").data.userRole==2){
      return true;
    }
    console.log("lskdl")
    this.router.navigate([''])
    return false;
  }

  
  

  
}
