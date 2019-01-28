import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DevicesComponent } from "./devices.component";
import { DeviceService } from "./device.service";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";

describe("DevicesComponent", () => {
  // let component: DevicesComponent;
  let fixture: ComponentFixture<DevicesComponent>;
  let mockDeviceService;
  let projects;
  beforeEach(async(() => {
    mockDeviceService = jasmine.createSpyObj(["getProjects", "onTestClick"]);
    projects = [
      { id: 1, name: "first" },
      { id: 2, name: "second" },
      { id: 3, name: "third" }
    ];
    TestBed.configureTestingModule({
      declarations: [DevicesComponent],
      providers: [{ provide: DeviceService, useValue: mockDeviceService }]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesComponent);
  });
  it("should set heros correctly from the service", () => {
    mockDeviceService.getProjects.and.returnValue(of(projects));
    fixture.detectChanges();
    expect(fixture.componentInstance.projects.length).toBe(3);
  });
  it(`should update the projects by adding the one fake project in it
  just for button click test `, () => {
    spyOn(fixture.componentInstance, "onTestClick");
    mockDeviceService.getProjects.and.returnValue(of(projects));
    fixture.detectChanges();
    const name = "Testing";
    mockDeviceService.onTestClick.and.returnValue(of({ id: 999, name }));
    fixture.detectChanges();
    const projectName = fixture.debugElement.query(By.css("input"))
      .nativeElement;
    projectName.value = name;

    const getbtn = fixture.debugElement.query(By.css("button"));
    getbtn.triggerEventHandler("click", null);

    fixture.detectChanges();
    const ul = fixture.debugElement.query(By.css("ul")).nativeElement
      .textContent;
    // expect(ul).toContain(name);
    // expect(fixture.componentInstance.projects.length).toBe(3);
    expect(fixture.componentInstance.onTestClick).toHaveBeenCalled();
    // expect(fixture.componentInstance.projects).toEqual("Test");
  });
  xit("should create", () => {
    // expect(component).toBeTruthy();
  });

  xit("should render the p tag", () => {
    expect(fixture.nativeElement.querySelector("p").textContent).toContain(
      "devices works!"
    );
  });
});

/*import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DevicesComponent } from "./devices.component";
import { AssertNotNull } from "@angular/compiler";
import { of } from "rxjs";

describe("DevicesComponent", () => {
  let component: DevicesComponent;
  let mockDeviceService;
  let projects;
  beforeEach(() => {
    mockDeviceService = jasmine.createSpyObj(["getProjects"]);
    projects = [
      { id: 1, name: "first" },
      { id: 2, name: "second" },
      { id: 3, name: "third" }
    ];
    component = new DevicesComponent(mockDeviceService);
  });
  describe("Get", () => {
    it("should call getProjects", () => {
      mockDeviceService.getProjects.and.returnValue(of(true));
      component.ngOnInit();
      expect(mockDeviceService.getProjects).toHaveBeenCalled();
    });
  });
  describe("Delete", () => {
    it("should delete the project ", () => {
      component.projects = projects;
      component.deleteProjects(1);
      expect(component.projects.length).toBe(2);
    });
  });
});*/
