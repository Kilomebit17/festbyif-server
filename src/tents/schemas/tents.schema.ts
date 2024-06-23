import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Tents {
  @Prop({ required: true }) name: string = '';
  @Prop({ required: true }) tentIdx: number = 0;
  @Prop({ required: true }) maximumMembersCount: number = 8;
  @Prop() users: any[] = [];
}
export const TentSchema = SchemaFactory.createForClass(Tents);
