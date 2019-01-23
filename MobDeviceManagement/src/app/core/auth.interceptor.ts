import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Constants } from "../Constants";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(Constants.apiRoot)) {
      const accessToken = this.authService.getAccessToken();
      const headers = req.headers.set("Authorization",
      `Bearer ${accessToken}`);
      const authReq = req.clone({ headers });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
