import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserRepository {
  private users = [];

  async saveUser(user: UserEntity) {
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
