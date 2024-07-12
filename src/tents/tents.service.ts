import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tents } from './schemas/tents.schema';
import { TentDto } from './dto/tent.dto';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class TentsService {
  constructor(
    @InjectModel(Tents.name) private readonly tentModel: Model<Tents>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createTent(tentBody: TentDto): Promise<any> {
    const newTent = new this.tentModel(tentBody);
    return newTent.save();
  }

  async joinTent(userId: any, tentId: string): Promise<any> {
    const tent = await this.tentModel.findById(tentId).exec();
    if (tent) {
      const user = await this.userModel.findById(userId);
      if (user.userSex === tent.tentSex) {
        if (user) {
          if (tent.users.length < tent.maximumMembersCount) {
            user.isUserJoined = true;
            user.save();
            tent.users.push(user);
            return tent.save();
          } else {
            throw new HttpException(
              'Sorry maximum members in tent',
              HttpStatus.BAD_REQUEST,
            );
          }
        }
      } else {
        throw new HttpException(
          'User sex is not avalible',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    return null;
  }
  async getAllTents(): Promise<any> {
    const tents = await this.tentModel.find().populate('users').exec();

    return {
      tents,
    };
  }
  async leaveTent(userId: string, tentId: string): Promise<any> {
    const tent = await this.tentModel.findById(tentId).exec();
    if (tent) {
      tent.users = tent.users.filter(
        (user: any) => user._id.toString() !== userId,
      );
      return tent.save();
    }
    return null;
  }
}
