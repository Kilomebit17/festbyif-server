import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('user')
  async getUserById(@Body() userDto: UserDto) {
    return this.usersService.findUserById(userDto);
  }
  @Get()
  async getAllUsers() {
    return this.usersService.allUsers();
  }
}
