import { IsEmpty, IsString, Max, MaxLength, MinLength } from 'class-validator';

export class CreadentialsDto {
  @IsString()
  @IsEmpty()
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;
}
