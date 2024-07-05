import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
export class UserDto {
  @IsNotEmpty()
  @IsString()
  readonly userFullName: string;
  @IsNotEmpty()
  @IsString()
  readonly userTelegramId: string;
  @IsNotEmpty()
  @IsString()
  readonly first_name: string;
  @IsNotEmpty()
  @IsString()
  readonly last_name: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly isUserJoined: boolean;
}
