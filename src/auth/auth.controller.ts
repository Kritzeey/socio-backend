import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  async signUp(): Promise<string> {
    return this.authService.signUp();
  }

  @Post("login")
  async logIn(): Promise<string> {
    return this.authService.logIn();
  }

  @Get("user")
  async getUser(): Promise<string> {
    return this.authService.getUser();
  }
}
