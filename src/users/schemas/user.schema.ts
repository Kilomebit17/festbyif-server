import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true }) userTelegramId: string = '';
  @Prop({ type: String }) first_name: string = '';
  @Prop({ type: String }) last_name: string = '';
  @Prop({ required: true }) userFullName: string = '';
  @Prop({ required: true }) isUserJoined: boolean = false;
}
export const UserSchema = SchemaFactory.createForClass(User);
