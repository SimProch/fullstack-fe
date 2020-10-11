import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {
  LoginParameters,
  LoginResponse,
  SignInParameters,
  SignInResponse,
} from "./login.types";

const API_PREFIX = environment.endpoint + "/auth";

@Injectable({
  providedIn: "root",
})
export class LoginGatewayService {
  constructor(private _httpClient: HttpClient) {}

  signIn(params: SignInParameters): Observable<SignInResponse> {
    return this._httpClient.post<SignInResponse>(API_PREFIX + "/register", <
      SignInParameters
    >{
      email: params.email,
      name: params.name,
      password: params.password,
    });
  }

  login(params: LoginParameters): Observable<LoginResponse> {
    return this._httpClient.post<LoginResponse>(API_PREFIX + "/login", <
      LoginParameters
    >{
      email: params.email,
      password: params.password,
    });
  }
}
