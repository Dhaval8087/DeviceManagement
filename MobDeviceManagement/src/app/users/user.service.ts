import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class UserService {
  private hostUrl = "http://demo3447636.mockable.io/getusers";
  constructor(private http: HttpClient) {}
  getUsers(): Observable<any> {
    const res = this.http.get(this.hostUrl);
    return this.http.get(this.hostUrl).pipe(
      tap(data => {}),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }
}
