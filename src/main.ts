import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const PORT = process.env.PORT || 3001;

  await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
}
bootstrap();
