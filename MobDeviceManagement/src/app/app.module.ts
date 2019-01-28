import { BrowserModule } from "@angular/platform-browser";
import { NgModule, TRANSLATIONS } from "@angular/core";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient
} from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialComponentModule } from "./shared/material-component/material-component.module";
import { NavComponent } from "./nav/nav.component";
import { NavModule } from "./nav/nav.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsersComponent, EdituserComponent } from "./users/users.component";
import { DevicesComponent } from "./devices/devices.component";
import { AllocationsComponent } from "./allocations/allocations.component";
import { SpinnerComponent } from "./common/spinner/spinner.component";
import { AdduserComponent } from "./users/adduser.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthInterceptor } from "./core/auth.interceptor";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

// declare let toastr: IToastr;
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    DevicesComponent,
    AllocationsComponent,
    EdituserComponent,
    SpinnerComponent,
    AdduserComponent,
    DashboardComponent
  ],
  entryComponents: [EdituserComponent, SpinnerComponent, AdduserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
    NavModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    // { provide: TOASTR_TOKEN, useValue: toastr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
