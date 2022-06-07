import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@/entities';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getGames(): Promise<User[]> {
    return this.userService.getUsers();
  }
}
