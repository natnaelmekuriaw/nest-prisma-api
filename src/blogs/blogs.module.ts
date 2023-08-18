import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BlogsController],
  providers: [BlogsService],
  imports: [PrismaModule],
})
export class BlogsModule {}
