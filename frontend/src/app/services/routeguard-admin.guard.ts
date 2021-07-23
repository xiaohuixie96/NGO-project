import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardAdminGuard implements CanActivate {
  constructor(private router:Router, private authService: AuthServiceService ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
    if (!this.authService.isAdminUser()) {
      alert('Only admin can view this page. You are redirected to login Page');
      this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
      return false;
      //var urlTree = this.router.createUrlTree(['login']);
      //return urlTree;
    } 
    return true;
  }
  
}
