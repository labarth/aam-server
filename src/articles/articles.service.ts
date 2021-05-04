import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Article } from './schemas/article.schema';
import { ArticleDocument } from './interfaces/article.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}

  async getAll(): Promise<Article[]> {
    const articles = await this.articleModel.find();

    return articles;
  }

  async getOne(id: ObjectId): Promise<Article> {
    const article = await this.articleModel.findById(id);

    return article;
  }

  async create(dto: CreateArticleDto): Promise<Article> {
    const article = await this.articleModel.create(dto);

    return article;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const article = await this.articleModel.findByIdAndDelete(id);

    return article._id;
  }

  async update(id: ObjectId, dto: UpdateArticleDto) {
    const article = await this.articleModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    return article;
  }
}
