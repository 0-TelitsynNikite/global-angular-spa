import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable, of, tap} from "rxjs";
import {AuthService} from "../services/auth.service";
import {Inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(@Inject(AuthService) private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return true
  }
}
