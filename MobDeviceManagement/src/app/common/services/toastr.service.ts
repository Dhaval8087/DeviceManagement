import { InjectionToken, Injectable } from "@angular/core";

declare let toastr: IToastr;
export let TOASTR_TOKEN = new InjectionToken<IToastr>("toastr", {
  providedIn: "root",
  factory: () => {
    return toastr;
  }
});

export interface IToastr {
  success(message: any, title?: any): any;
  warning(message: any, title?: any): any;
  info(message: any, title?: any): any;
  error(message: any, title?: any): any;
}
