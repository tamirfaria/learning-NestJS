import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserRepository } from './user.repository';

@Controller('/user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userParams: CreateUserDTO) {
    const parseParams = { ...userParams, id: randomUUID() };

    this.userRepository.saveUser(parseParams);
    return {
      message: 'User created successfully.',
      user: userParams,
    };
  }

  @Get()
  async getUser() {
    return this.userRepository.getUsers();
  }
}
