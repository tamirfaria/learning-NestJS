import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async saveUser(user) {
    this.users.push(user);
  }

  async getUsers() {
    return {
      users: this.users,
    };
  }
}
