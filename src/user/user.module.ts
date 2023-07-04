import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { IsEmailUniqueConstraint } from './validations/email.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, IsEmailUniqueConstraint],
})
export class UserModule {}
