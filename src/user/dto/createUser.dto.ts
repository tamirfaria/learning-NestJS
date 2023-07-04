import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { IsEmailUnique } from '../validations/email.validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsEmailUnique({
    message:
      'Email already registered. Try passing an email that was not used.',
  })
  email: string;

  @IsStrongPassword({ minLength: 8 })
  password: string;
}
