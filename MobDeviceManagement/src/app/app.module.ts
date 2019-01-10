import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialComponentModule } from "./shared/material-component/material-component.module";
import { NavComponent } from "./nav/nav.component";
import { NavModule } from "./nav/nav.module";
import { UsersComponent } from "./users/users.component";
import { DevicesComponent } from "./devices/devices.component";
import { AllocationsComponent } from "./allocations/allocations.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    DevicesComponent,
    AllocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
