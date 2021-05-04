import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Article {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  date: number;

  @Prop()
  content: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
