import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';
import { rootStaticPath } from '../paths';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: rootStaticPath,
    }),
    MongooseModule.forRoot('mongodb://localhost/aam'),
    ArticlesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
