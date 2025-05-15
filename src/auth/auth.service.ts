import { BadRequestException, Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersService } from "src/users/users.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private usersService: UsersService,
  ) {}

  async signUp(data: Prisma.UserCreateInput): Promise<User | null> {
    const foundEmail = await this.prismaService.user.findUnique({
      where: { email: data.email },
    });
    const foundUsername = await this.prismaService.user.findUnique({
      where: { username: data.username },
    });

    if (foundEmail || foundUsername) {
      throw new BadRequestException();
    }

    const hash = await bcrypt.hash(data.password, 10);

    return this.usersService.createOne({ ...data, password: hash });
  }

  async logIn(): Promise<string> {
    return "Log in";
  }

  async getUser(): Promise<string> {
    return "Get user";
  }
}
