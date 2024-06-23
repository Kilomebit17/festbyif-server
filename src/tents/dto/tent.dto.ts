import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class TentDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsNumber()
  readonly tentIdx: number;
  @IsNotEmpty()
  @IsNumber()
  readonly maximumMembersCount: number;
}
