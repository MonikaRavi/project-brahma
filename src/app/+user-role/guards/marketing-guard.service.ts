import { Injectable } from '@angular/core';
import { RoleService } from '../role.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class MarketingGuard {

  constructor(private roleService: RoleService) { }

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    var authenticated = this.roleService.getMarketingStatus();

   // console.log(authenticated);

    if (authenticated) {

        return true;

    } else {

        return false;
    }


}

}
