import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "../core/auth.service";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  title = "";
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService
  ) {}
  ngOnInit() {
    if (window.location.href.indexOf("?postLogout=true") > 0) {
      this.authService.signoutRedirectCallback().then(() => {
        const url: string = this.router.url.substring(
          0,
          this.router.url.indexOf("?")
        );
        this.router.navigateByUrl(url);
      });
    }

    this.translate.stream(["nav.title"]).subscribe(translation => {
      this.title = translation["nav.title"];
    });
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  login() {
    this.authService.login();
    // this.authService.logout();
  }
  logout() {
    this.authService.logout();
  }
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
