import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';
import { rootStaticPath } from '../paths';
import { UsersModule } from './users/users.module';
import { isProdEnv } from './utils/env';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // LIB MODULES
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: isProdEnv ? '.env.production' : '.env.development',
    }),
    ServeStaticModule.forRoot({
      rootPath: rootStaticPath,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),

    // APP MODULES
    ArticlesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
