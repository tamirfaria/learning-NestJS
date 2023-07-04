import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';

@Injectable()
export class UserRepository {
  private users = [];

  async saveUser(user: CreateUserDTO) {
    this.users.push(user);
  }

  async getUsers() {
    return {
      users: this.users,
    };
  }

  async isARegisteredEmail(email: string) {
    const hasThisEmailAlreadyRegistered = this.users.find(
      (user) => user.email === email,
    );
    return !!hasThisEmailAlreadyRegistered;
  }
}
