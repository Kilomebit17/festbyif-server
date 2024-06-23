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
  @IsString()
  readonly photo_url: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly is_premium: boolean;
  @IsNotEmpty()
  @IsBoolean()
  readonly isUserJoined: boolean;
}
