import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true }) userTelegramId: string = '';
  @Prop({ required: true }) first_name: string = '';
  @Prop({ required: true }) last_name: string = '';
  @Prop({ required: true }) photo_url: string = '';
  @Prop({ required: true }) userFullName: string = '';
  @Prop({ required: true }) is_premium: boolean = false;
  @Prop({ required: true }) isUserJoined: boolean = false;
}
export const UserSchema = SchemaFactory.createForClass(User);
