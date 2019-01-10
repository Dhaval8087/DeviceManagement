import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UsersComponent } from "../users/users.component";
import { DevicesComponent } from "../devices/devices.component";
import { AllocationsComponent } from "../allocations/allocations.component";
import { Route } from "@angular/compiler/src/core";

const routs = [
  { path: "users", component: UsersComponent },
  { path: "devices", component: DevicesComponent },
  { path: "allocations", component: AllocationsComponent }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routs)]
})
export class NavModule {}
