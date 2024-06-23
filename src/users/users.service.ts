import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async findUserById(userDto: UserDto): Promise<any> {
    const { userTelegramId } = userDto;
    const user = await this.userModel.findOne({ userTelegramId });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  async allUsers(): Promise<any> {
    const users = await this.userModel.find().exec();
    return users;
  }
}
