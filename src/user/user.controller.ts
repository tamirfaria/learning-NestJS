import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { UserRepository } from './user.repository';

@Controller('/user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userParams) {
    this.userRepository.saveUser({ ...userParams, id: randomUUID() });
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
