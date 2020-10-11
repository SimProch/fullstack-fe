import { Component, OnInit } from "@angular/core";
import { LoginGatewayService } from "./login-gateway.service";
import {
  LoginComponentTabs,
  LoginParameters,
  SignInParameters,
  SignInResponse,
} from "./login.types";
import { first } from "rxjs/operators";
import { AuthorizationService } from "../auth/authorization.service";
import { MatTabChangeEvent } from "@angular/material";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  LoginComponentTabs = LoginComponentTabs;
  _selectedTab: LoginComponentTabs = LoginComponentTabs.SignIn;
  _username: string = "";
  _email: string = "";
  _password: string = "";

  constructor(
    private _loginGateway: LoginGatewayService,
    private _authService: AuthorizationService
  ) {}

  ngOnInit(): void {}

  _setActiveTab(tab: MatTabChangeEvent): void {
    const index = tab.index as LoginComponentTabs;
    this._selectedTab = index;
  }

  _onSubmit(): void {
    if (this._selectedTab === LoginComponentTabs.SignIn) this._signIn();
    if (this._selectedTab === LoginComponentTabs.Login) this._login();
  }

  private _signIn(): void {
    const params: SignInParameters = {
      name: this._username,
      email: this._email,
      password: this._password,
    };
    this._loginGateway
      .signIn(params)
      .pipe(first())
      .subscribe((res: SignInResponse) => {
        this._authService.setToken(res.token);
      });
  }

  private _login(): void {
    const params: LoginParameters = {
      email: this._email,
      password: this._password,
    };
    this._loginGateway
      .login(params)
      .pipe(first())
      .subscribe((res: SignInResponse) => {
        this._authService.setToken(res.token);
      });
  }
}
