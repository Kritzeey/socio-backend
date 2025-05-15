import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

class SignUpDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  firstName: string;

  lastname?: string;

  @IsNotEmpty()
  username: string;

  @MinLength(8)
  @IsNotEmpty()
  password: string;
}

export default SignUpDto;
