import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthService } from './core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {

    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    // tap genera una intercepción entre un flujo de datos, pero no muta ni transforma los datos
    return this.authService.isAdmin().pipe(
      tap(user => console.log(user)),
      map(admin => admin === null ? false : true),
      tap(isAdmin => {
        if (!isAdmin) {
          this.router.navigate(['/auth/login']);
        }
      }),
    );
  }
}
