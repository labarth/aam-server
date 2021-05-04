import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { ObjectId } from 'mongoose';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

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
