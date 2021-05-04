import { Document } from 'mongoose';
import { Article } from '../schemas/article.schema';

export interface ArticleDocument extends Article, Document {}
