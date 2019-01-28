import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../core/auth.service";
import { Constants } from "../Constants";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DeviceService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  getProjects(): Observable<any> {
    return this.http.get(`${Constants.apiRoot}/projects`).pipe(
      tap(data => {}),
      catchError(this.handleError)
    );
  }
  onTestClick(project) {
    return new Observable(observer => {
      // observable execution
      observer.next(project);
      observer.complete();
    });
  }
  private handleError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
