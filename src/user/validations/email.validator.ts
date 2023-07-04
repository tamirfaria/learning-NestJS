import { Injectable } from '@nestjs/common';
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}
  async validate(email: string): Promise<boolean> {
    const emailAlreadyRegistered = await this.userRepository.isARegisteredEmail(
      email,
    );
    return !emailAlreadyRegistered;
  }
}

export const IsEmailUnique = (validationOptions?: ValidationOptions) => {
  return function (object: Record<string, any>, propertyName: string): void {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailUniqueConstraint,
    });
  };
};
