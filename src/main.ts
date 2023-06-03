import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare global {
  namespace NodeJS {
    interface Global {
      mongodbConfig: any;
    }
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(5000);
}
bootstrap();
