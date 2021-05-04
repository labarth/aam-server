import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('api/articles')
export class ArticlesController {
  constructor(private articleService: ArticlesService) {}

  @Get()
  getAll() {
    return this.articleService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.articleService.getOne(id);
  }

  @Post()
  create(@Body() dto: CreateArticleDto) {
    return this.articleService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.articleService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() dto: UpdateArticleDto) {
    return this.articleService.update(id, dto);
  }
}
