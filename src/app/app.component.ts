import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './auth/authorization.service';
import { SocketService } from './socket/socket-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chat-fe-angular';
  _authorized: boolean;
  constructor(
    private _socketService: SocketService,
    private _authService: AuthorizationService
  ) {
    const token = localStorage.jwt;
    if (token) { this._authService.setToken(token); }
  }

  ngOnInit(): void {
    this._authService.$token.subscribe((token) => {
      this._authorized = !!token;
    });
  }
}
