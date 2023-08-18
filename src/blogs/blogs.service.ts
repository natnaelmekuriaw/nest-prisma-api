import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBlogDto: CreateBlogDto) {
    const blog = this.prisma.blog.create({ data: createBlogDto });
    return blog;
  }

  findAll() {
    return this.prisma.blog.findMany();
  }

  findOne(id: number) {
    return this.prisma.blog.findUnique({ where: { id } });
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    const article = this.prisma.blog.update({
      where: { id },
      data: { title: updateBlogDto.title, body: updateBlogDto.body },
    });
    return article;
  }

  remove(id: number) {
    const blog = this.prisma.blog.delete({ where: { id } });
    return blog;
  }
}
