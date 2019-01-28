import { Component, OnInit, EventEmitter } from "@angular/core";
import { DeviceService } from "./device.service";

@Component({
  selector: "app-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.css"]
})
export class DevicesComponent implements OnInit {
  projects;
  title = "devices works!";
  delete = new EventEmitter<any>();
  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
    this.getProjects();
  }
  getProjects() {
    this.deviceService.getProjects().subscribe(
      projects => {
        this.projects = projects;
        console.log(projects);
      },
      err => {}
    );
  }
  deleteProjects(id) {
    this.projects = this.projects.filter(p => p.id !== id);
  }
  onTestClick(name) {
    const project = { id: 999, name };
    this.deviceService.onTestClick(project).subscribe(projects => {
      this.projects.push(projects);
    });
  }
}
