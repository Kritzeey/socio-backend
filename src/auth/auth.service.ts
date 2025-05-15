import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  async signUp(): Promise<string> {
    return "Sign up";
  }

  async logIn(): Promise<string> {
    return "Log in";
  }

  async getUser(): Promise<string> {
    return "Get user";
  }
}
