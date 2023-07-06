import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { CreateUserDTO } from './dto/createUser.dto';
import { GetUserDTO } from './dto/getUser.dto';
import { UserEntity } from './entity/user.entity';
import { UserRepository } from './user.repository';

@Controller('/user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @ApiTags('Registrar novo usuário')
  @Post()
  async createUser(@Body() userParams: CreateUserDTO) {
    const userEntity = new UserEntity();

    userEntity.id = randomUUID();
    userEntity.name = userParams.name;
    userEntity.email = userParams.email;
    userEntity.password = userParams.password;

    this.userRepository.saveUser(userEntity);
    return {
      message: 'User created successfully.',
      user: new GetUserDTO(userEntity.name, userEntity.id.substring(0, 5)),
    };
  }

  @ApiTags('Listar usuários')
  @Get()
  async getUser() {
    const createdUsers = await this.userRepository.getUsers();
    const usersList = createdUsers.users.map(
      (user) => new GetUserDTO(user.name, user.id.substring(0, 5)),
    );
    return {
      users: usersList,
    };
  }
}
