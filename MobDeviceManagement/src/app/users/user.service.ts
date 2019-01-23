import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Constants } from "../Constants";
import { AuthService } from "../core/auth.service";
@Injectable({
  providedIn: "root"
})
export class UserService {
  private hostUrl = "http://demo3447636.mockable.io/"; // Constants.apiRoot;
  constructor(private http: HttpClient, private authService: AuthService) {}
  getUsers(): Observable<any> {
    const res = this.http.get(this.hostUrl);
    return this.http.get(`${this.hostUrl}getusers`).pipe(
      tap(data => {}),
      catchError(this.handleError)
    );
  }
  getProjects(): Observable<any> {
    const res = this.http.get(this.hostUrl);
    return this.http.get(`${Constants.apiRoot}/projects`).pipe(
      tap(data => {}),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }
}
