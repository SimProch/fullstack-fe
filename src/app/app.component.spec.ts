import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed, async } from "@angular/core/testing";
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTabsModule, MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { AuthInterceptor } from './auth/auth-interceptor.service';
import { AuthorizedComponent } from './authorized-component/authorized.component';
import { LoginComponent } from './login/login.component';

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, AuthorizedComponent, LoginComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatButtonModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'chat-fe-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("chat-fe-angular");
  });
});
