import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import {
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatButtonModule,
} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        HttpClientModule,
        MatButtonModule,
        FormsModule,
        BrowserAnimationsModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
