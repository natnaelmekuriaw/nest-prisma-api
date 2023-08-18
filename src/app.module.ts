import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [BlogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
