import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './article/article.module';
import { rootStaticPath } from '../paths';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: rootStaticPath,
    }),
    MongooseModule.forRoot('mongodb://localhost/aam'),
    ArticleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
