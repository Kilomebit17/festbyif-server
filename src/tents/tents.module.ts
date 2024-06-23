import { Module } from '@nestjs/common';
import { TentsService } from './tents.service';
import { TentsController } from './tents.controller';
import { TentSchema, Tents } from './schemas/tents.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tents.name, schema: TentSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [TentsController],
  providers: [TentsService],
})
export class TentsModule {}
