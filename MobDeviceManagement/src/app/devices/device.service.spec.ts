import { TestBed } from "@angular/core/testing";

import { DeviceService } from "./device.service";
import { AuthService } from "../core/auth.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { Constants } from "../Constants";
describe("DeviceService", () => {
  let mockAuthService;
  let httpTestingController;
  let service;
  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj([
      "login",
      "logout",
      "isLoggedIn",
      "getAccessToken"
    ]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AuthService, useValue: mockAuthService }]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(DeviceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should call get with the correcr url", () => {
     service.getProjects().subscribe();
    const req = httpTestingController.expectOne(
      `${Constants.apiRoot}/projects`
    );
    req.flush({
      id: 1,
      name: "testing"
    });
    httpTestingController.verify();
  });
});
