import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';
import { rootStaticPath } from '../paths';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: rootStaticPath,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    ArticlesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
