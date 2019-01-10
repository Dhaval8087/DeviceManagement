import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialComponentModule } from "./shared/material-component/material-component.module";
import { NavComponent } from "./nav/nav.component";
import { NavModule } from "./nav/nav.module";
import { FormsModule } from "@angular/forms";
import { UsersComponent, EdituserComponent } from "./users/users.component";
import { DevicesComponent } from "./devices/devices.component";
import { AllocationsComponent } from "./allocations/allocations.component";
import { SpinnerComponent } from "./common/spinner/spinner.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    DevicesComponent,
    AllocationsComponent,
    EdituserComponent,
    SpinnerComponent
  ],
  entryComponents: [EdituserComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
    NavModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
