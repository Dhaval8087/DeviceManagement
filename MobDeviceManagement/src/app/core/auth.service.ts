import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserManager, User, WebStorageStateStore, Log } from "oidc-client";
import { Constants } from "../Constants";
@Injectable({ providedIn: "root" })
export class AuthService {
  private userManager: UserManager;
  private user: User;
  constructor() {
    Log.logger = console;
    const config = {
      authority: Constants.stsAuthority,
      client_id: Constants.clientId,
      redirect_uri: `${Constants.clientRoot}assets/oidc-login-redirect.html`,
      scope: "openid projects-api profile",
      response_type: "id_token token",
      post_logout_redirect_uri: `${Constants.clientRoot}?postLogout=true`,
      userStore: new WebStorageStateStore({ store: window.localStorage }),
      automaticSilentRenew: true,
      silent_redirect_uri: `${Constants.clientRoot}assets/silent-redirect.html`
    };
    this.userManager = new UserManager(config);
    this.userManager.getUser().then(user => {
      console.log(user);
      if (user && !user.expired) {
        this.user = user;
      }
    });
    // once slient referesh happen need to updated the user latest token
    this.userManager.events.addUserLoaded(args => {
      this.userManager.getUser().then(user => {
        this.user = user;
      });
    });
  }
  login(): Promise<any> {
    return this.userManager.signinRedirect();
  }
  logout(): Promise<any> {
    return this.userManager.signoutRedirect();
  }
  isLoggedIn(): boolean {
    return this.user && this.user.access_token && !this.user.expired;
  }

  getAccessToken(): string {
    return this.user ? this.user.access_token : "";
  }
  signoutRedirectCallback(): Promise<any> {
    return this.userManager.signoutRedirectCallback();
  }
}
