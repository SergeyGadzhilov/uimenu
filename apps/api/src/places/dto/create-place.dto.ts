import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  image: string;
  ownerId: string;
}
