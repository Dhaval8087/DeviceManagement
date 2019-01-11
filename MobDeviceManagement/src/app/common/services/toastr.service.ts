import { Injectable } from "@angular/core";

declare let toastr: any;
@Injectable({
  providedIn: "root"
})
export class ToastrService {
  constructor() {}
  success(message: any, title?: any) {
    toastr.success(message, title);
  }
  warning(message: any, title?: any) {
    toastr.warning(message, title);
  }
  info(message: any, title?: any) {
    toastr.info(message, title);
  }
  error(message: any, title?: any) {
    toastr.error(message, title);
  }
}
