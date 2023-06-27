import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { UserRepository } from './user.repository';

interface UserParams {
  name: string;
  email: string;
  password: string;
}

@Controller('/user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userParams: UserParams) {
    const parseParams = { ...userParams, id: randomUUID() };
    this.userRepository.saveUser(parseParams);
    return {
      message: 'User created successfully.',
      user: parseParams,
    };
  }

  @Get()
  async getUser() {
    return this.userRepository.getUsers();
  }
}
