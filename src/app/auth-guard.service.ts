import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { HomeService } from "./+home/home.service";
import { Injectable } from "@angular/core";

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private homeService: HomeService, private router: Router) {

    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        var authenticated = this.homeService.isLoggedIn();

       // console.log(authenticated);

        if (authenticated) {

            return true;

        } else {

            this.router.navigate(['/']);

            return false;
        }


    }


}