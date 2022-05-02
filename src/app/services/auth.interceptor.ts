import { AuthService } from "./auth.service";
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // throw new Error("Method not implemented.");

    if (this.authService.isLoggedIn()) {
      let cloneReq;
      cloneReq = req.clone({
        headers: new HttpHeaders({
          authorization: `Bearer ${this.authService.user.token}`,
        }),
      });
      return next.handle(cloneReq);
    }

    return next.handle(req);
  }
}
