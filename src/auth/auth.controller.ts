import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import SignUpDto from "./dto/signup.dto";
import { User } from "@prisma/client";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  async signUp(@Body() signUpDto: SignUpDto): Promise<User | null> {
    return this.authService.signUp(signUpDto);
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
