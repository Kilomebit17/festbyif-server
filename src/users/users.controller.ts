import { Body, Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('user')
  async getUserById(@Body() userDto: UserDto) {
    return this.usersService.findUserById(userDto);
  }
  @Get()
  async getAllUsers() {
    return this.usersService.allUsers();
  }
}
