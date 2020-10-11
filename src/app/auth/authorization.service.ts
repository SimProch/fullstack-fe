import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private _jwtToken: string;
  $token: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() {}

  getToken(): string {
    return this._jwtToken;
  }

  setToken(token: string): void {
    this._jwtToken = token;
    localStorage.jwt = token;
    this.$token.next(token);
  }
}
