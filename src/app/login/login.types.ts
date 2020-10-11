export enum LoginComponentTabs {
  SignIn = 0,
  Login = 1,
}

export interface SignInParameters {
    name: string;
    email: string;
    password: string;
}

export interface SignInResponse {
    token: string;
}

export interface LoginParameters {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}
