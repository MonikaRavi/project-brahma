import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

import { Injectable } from "@angular/core";
import { RoleService } from "app/+user-role/role.service";

@Injectable()

export class CustomerGuard implements CanActivate {

    constructor(private roleService: RoleService, private router: Router) {

    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        var authenticated = this.roleService.getCustomerServiceStatus();

       // console.log(authenticated);

        if (authenticated) {

            return true;

        } else {

            return false;
        }


    }


}