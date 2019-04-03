import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from '../role.service';

@Injectable()
export class ProjectGuard {

  constructor(private roleService: RoleService) { }

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    var authenticated = this.roleService.getProjManagementStatus();

   // console.log(authenticated);

    if (authenticated) {

        return true;

    } else {

        return false;
    }


}

}
