import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateBlogDto {
  @ApiProperty()
  @IsString()
  @MinLength(5)
  title: string;
  @ApiProperty()
  @IsString()
  @MinLength(10)
  body: string;
  @ApiProperty({ required: false })
  @IsString()
  image: string;
}
