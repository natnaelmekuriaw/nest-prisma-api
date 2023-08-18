import { ApiProperty } from '@nestjs/swagger';

export class Blog {
  @ApiProperty()
  title: string;
  @ApiProperty()
  body: string;
  @ApiProperty()
  image: string;
}
